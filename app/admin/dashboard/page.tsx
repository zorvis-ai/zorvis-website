"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

type Application = {
  id: string;
  created_at: string;
  job_id: string;
  job_title: string;
  full_name: string;
  email: string;
  phone: string | null;
  linkedin_url: string | null;
  github_url: string | null;
  portfolio_url: string | null;
  cover_note: string | null;
  resume_url: string | null;
  resume_filename: string | null;
  status: "new" | "reviewing" | "shortlisted" | "rejected" | "hired";
  admin_notes: string | null;
};

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  new: { bg: "#EEF2FF", text: "#4F46E5", border: "#C7D2FE" },
  reviewing: { bg: "#FEF3C7", text: "#D97706", border: "#FDE68A" },
  shortlisted: { bg: "#DCFCE7", text: "#059669", border: "#BBF7D0" },
  rejected: { bg: "#FEE2E2", text: "#DC2626", border: "#FECACA" },
  hired: { bg: "#F0FDF4", text: "#16A34A", border: "#86EFAC" },
};

export default function AdminDashboard() {
  const router = useRouter();
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState({ job: "all", status: "all", q: "" });
  const [detail, setDetail] = useState<Application | null>(null);
  const [notes, setNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const t = sessionStorage.getItem("admin_token");
    const e = sessionStorage.getItem("admin_email");
    if (!t) { router.push("/admin"); return; }
    setToken(t); setAdminEmail(e || "");
  }, [router]);

  const fetchApps = useCallback(async () => {
    if (!token) return;
    setLoading(true);
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const res = await fetch(`${supabaseUrl}/rest/v1/job_applications?select=*&order=created_at.desc`, {
        headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { router.push("/admin"); return; }
      if (!res.ok) throw new Error("Failed to fetch applications");
      setApps(await res.json());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to load applications");
    } finally { setLoading(false); }
  }, [token, router]);

  useEffect(() => { if (token) fetchApps(); }, [token, fetchApps]);

  const updateStatus = async (id: string, status: Application["status"]) => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    await fetch(`${supabaseUrl}/rest/v1/job_applications?id=eq.${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, Authorization: `Bearer ${token}`, Prefer: "return=minimal" },
      body: JSON.stringify({ status }),
    });
    setApps(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    if (detail?.id === id) setDetail(prev => prev ? { ...prev, status } : null);
  };

  const saveNotes = async () => {
    if (!detail) return;
    setSavingNotes(true);
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    await fetch(`${supabaseUrl}/rest/v1/job_applications?id=eq.${detail.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, Authorization: `Bearer ${token}`, Prefer: "return=minimal" },
      body: JSON.stringify({ admin_notes: notes }),
    });
    setApps(prev => prev.map(a => a.id === detail.id ? { ...a, admin_notes: notes } : a));
    setSavingNotes(false);
  };

  const downloadResume = async (app: Application) => {
    if (!app.resume_url || !app.resume_filename) return;

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const path = app.resume_url.split("/resumes/")[1];
      if (!path) {
        console.error("Bad resume_url format:", app.resume_url);
        alert("Resume path is malformed in the database.");
        return;
      }

      const res = await fetch(
        `${supabaseUrl}/storage/v1/object/resumes/${path}`,
        {
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Download failed:", res.status, errorText);
        alert(`Could not download resume (${res.status}): ${errorText}`);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = app.resume_filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Resume download error:", err);
      alert("Something went wrong downloading the resume.");
    }
  };

  const downloadSelected = async () => {
    setDownloading(true);
    const toDownload = apps.filter(a => selected.has(a.id) && a.resume_url);
    for (const app of toDownload) { await downloadResume(app); await new Promise(r => setTimeout(r, 500)); }
    setDownloading(false);
  };

  const downloadAll = async () => {
    setDownloading(true);
    const toDownload = filteredApps.filter(a => a.resume_url);
    for (const app of toDownload) { await downloadResume(app); await new Promise(r => setTimeout(r, 500)); }
    setDownloading(false);
  };

  const toggleSelect = (id: string) => {
    setSelected(prev => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  };

  const filteredApps = apps.filter(a => {
    const jMatch = filter.job === "all" || a.job_id === filter.job;
    const sMatch = filter.status === "all" || a.status === filter.status;
    const qMatch = !filter.q || a.full_name.toLowerCase().includes(filter.q.toLowerCase()) || a.email.toLowerCase().includes(filter.q.toLowerCase());
    return jMatch && sMatch && qMatch;
  });

  const jobs = [...new Set(apps.map(a => a.job_id))];
  const countByStatus = (s: string) => apps.filter(a => a.status === s).length;

  if (loading) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#F7F8FC", fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ textAlign:"center" }}><div style={{ fontSize:24, marginBottom:8 }}>⏳</div><div style={{ fontSize:14, color:"#6B7280" }}>Loading applications…</div></div>
    </div>
  );

  const T = { fontFamily:"'DM Sans',sans-serif" };

  return (
    <div style={{ minHeight:"100vh", background:"#F7F8FC", fontFamily:"'DM Sans',system-ui,sans-serif" }}>
      {/* Header */}
      <div style={{ background:"#FFFFFF", borderBottom:"1px solid #E2E6F0", padding:"0 24px" }}>
        <div style={{ maxWidth:1300, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:58 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:32, height:32, background:"#4F46E5", borderRadius:7, display:"flex", alignItems:"center", justifyContent:"center", fontSize:15 }}>🧠</div>
            <div>
              <div style={{ fontSize:14, fontWeight:700, color:"#0D1117" }}>Zorvis Admin</div>
              <div style={{ fontSize:11, color:"#9CA3AF" }}>Careers dashboard</div>
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:12, color:"#9CA3AF" }}>{adminEmail}</span>
            <button onClick={() => { sessionStorage.clear(); router.push("/admin"); }}
              style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:7, padding:"5px 12px", fontSize:12, cursor:"pointer", ...T }}>
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1300, margin:"0 auto", padding:"24px" }}>
        {error && <div style={{ background:"#FEE2E2", border:"1px solid #FECACA", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#B91C1C", marginBottom:16 }}>{error}</div>}

        {/* Stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:12, marginBottom:24 }}>
          {[
            { label:"Total", value:apps.length, color:"#4F46E5" },
            { label:"New", value:countByStatus("new"), color:"#4F46E5" },
            { label:"Reviewing", value:countByStatus("reviewing"), color:"#D97706" },
            { label:"Shortlisted", value:countByStatus("shortlisted"), color:"#059669" },
            { label:"Hired", value:countByStatus("hired"), color:"#16A34A" },
          ].map(s => (
            <div key={s.label} style={{ background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:10, padding:"14px 16px", textAlign:"center" }}>
              <div style={{ fontSize:24, fontWeight:800, color:s.color, letterSpacing:"-0.02em" }}>{s.value}</div>
              <div style={{ fontSize:12, color:"#6B7280", marginTop:2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters + actions */}
        <div style={{ background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:12, padding:"14px 16px", marginBottom:16, display:"flex", gap:12, flexWrap:"wrap", alignItems:"center" }}>
          <input value={filter.q} onChange={e => setFilter(f => ({ ...f, q: e.target.value }))} placeholder="Search by name or email…"
            style={{ flex:1, minWidth:180, border:"1px solid #E2E6F0", borderRadius:7, padding:"8px 12px", fontSize:13, ...T, outline:"none" }} />
          <select value={filter.job} onChange={e => setFilter(f => ({ ...f, job: e.target.value }))}
            style={{ border:"1px solid #E2E6F0", borderRadius:7, padding:"8px 10px", fontSize:13, ...T, background:"#FFFFFF" }}>
            <option value="all">All roles</option>
            {jobs.map(j => <option key={j} value={j}>{j.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</option>)}
          </select>
          <select value={filter.status} onChange={e => setFilter(f => ({ ...f, status: e.target.value }))}
            style={{ border:"1px solid #E2E6F0", borderRadius:7, padding:"8px 10px", fontSize:13, ...T, background:"#FFFFFF" }}>
            <option value="all">All statuses</option>
            {["new","reviewing","shortlisted","rejected","hired"].map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
          </select>
          <div style={{ display:"flex", gap:8 }}>
            {selected.size > 0 && (
              <button onClick={downloadSelected} disabled={downloading}
                style={{ background:"#4F46E5", color:"#FFFFFF", border:"none", borderRadius:7, padding:"8px 14px", fontSize:12, fontWeight:600, cursor:"pointer", ...T }}>
                {downloading ? "Downloading…" : `⬇ Download ${selected.size} resume${selected.size>1?"s":""}`}
              </button>
            )}
            <button onClick={downloadAll} disabled={downloading}
              style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:7, padding:"8px 14px", fontSize:12, fontWeight:600, cursor:"pointer", ...T }}>
              {downloading ? "…" : "⬇ Download all resumes"}
            </button>
            <button onClick={fetchApps} style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:7, padding:"8px 12px", fontSize:12, cursor:"pointer", ...T }}>🔄</button>
          </div>
        </div>

        {/* Table */}
        <div style={{ background:"#FFFFFF", border:"1px solid #E2E6F0", borderRadius:12, overflow:"hidden" }}>
          <div style={{ fontSize:12, color:"#9CA3AF", padding:"10px 16px", borderBottom:"1px solid #F0F1F5" }}>
            {filteredApps.length} application{filteredApps.length !== 1 ? "s" : ""}
            {selected.size > 0 && ` · ${selected.size} selected`}
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ background:"#F7F8FC" }}>
                  <th style={{ padding:"10px 12px", textAlign:"left", fontWeight:600, color:"#374151", width:36 }}>
                    <input type="checkbox" checked={selected.size === filteredApps.length && filteredApps.length > 0}
                      onChange={e => setSelected(e.target.checked ? new Set(filteredApps.map(a=>a.id)) : new Set())} />
                  </th>
                  {["Date","Name","Email","Role","Status","Resume","Actions"].map(h => (
                    <th key={h} style={{ padding:"10px 14px", textAlign:"left", fontWeight:600, color:"#374151", whiteSpace:"nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredApps.length === 0 ? (
                  <tr><td colSpan={8} style={{ padding:"40px", textAlign:"center", color:"#9CA3AF" }}>No applications match your filters.</td></tr>
                ) : filteredApps.map(app => {
                  const sc = STATUS_COLORS[app.status];
                  return (
                    <tr key={app.id} style={{ borderTop:"1px solid #F0F1F5", background:selected.has(app.id)?"#F5F3FF":"#FFFFFF" }}>
                      <td style={{ padding:"10px 12px" }}>
                        <input type="checkbox" checked={selected.has(app.id)} onChange={() => toggleSelect(app.id)} />
                      </td>
                      <td style={{ padding:"10px 14px", color:"#9CA3AF", whiteSpace:"nowrap" }}>
                        {new Date(app.created_at).toLocaleDateString("en-IN", { day:"numeric", month:"short" })}
                      </td>
                      <td style={{ padding:"10px 14px", fontWeight:600, color:"#0D1117", whiteSpace:"nowrap" }}>{app.full_name}</td>
                      <td style={{ padding:"10px 14px", color:"#6B7280" }}>{app.email}</td>
                      <td style={{ padding:"10px 14px", color:"#374151", whiteSpace:"nowrap", maxWidth:160, overflow:"hidden", textOverflow:"ellipsis" }}>{app.job_title}</td>
                      <td style={{ padding:"10px 14px" }}>
                        <select value={app.status} onChange={e => updateStatus(app.id, e.target.value as Application["status"])}
                          style={{ background:sc.bg, border:`1px solid ${sc.border}`, color:sc.text, borderRadius:6, padding:"3px 8px", fontSize:11, fontWeight:600, cursor:"pointer", ...T }}>
                          {["new","reviewing","shortlisted","rejected","hired"].map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
                        </select>
                      </td>
                      <td style={{ padding:"10px 14px" }}>
                        {app.resume_url ? (
                          <button onClick={() => downloadResume(app)}
                            style={{ background:"#EEF2FF", color:"#4F46E5", border:"1px solid #C7D2FE", borderRadius:6, padding:"4px 10px", fontSize:11, fontWeight:600, cursor:"pointer", ...T, whiteSpace:"nowrap" }}>
                            ⬇ PDF
                          </button>
                        ) : <span style={{ color:"#9CA3AF", fontSize:11 }}>None</span>}
                      </td>
                      <td style={{ padding:"10px 14px" }}>
                        <button onClick={() => { setDetail(app); setNotes(app.admin_notes || ""); }}
                          style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:6, padding:"4px 10px", fontSize:11, fontWeight:600, cursor:"pointer", ...T }}>
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail panel */}
      {detail && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.45)", zIndex:100, display:"flex", justifyContent:"flex-end" }} onClick={() => setDetail(null)}>
          <div style={{ background:"#FFFFFF", width:"min(480px,100vw)", height:"100%", overflow:"auto", padding:"28px", boxShadow:"-8px 0 32px rgba(0,0,0,0.12)" }} onClick={e => e.stopPropagation()}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:20 }}>
              <div style={{ fontSize:16, fontWeight:700, color:"#0D1117" }}>{detail.full_name}</div>
              <button onClick={() => setDetail(null)} style={{ background:"none", border:"none", fontSize:18, cursor:"pointer", color:"#9CA3AF" }}>✕</button>
            </div>

            {/* Status */}
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:12, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>Status</label>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                {(["new","reviewing","shortlisted","rejected","hired"] as const).map(s => {
                  const sc = STATUS_COLORS[s];
                  return (
                    <button key={s} onClick={() => updateStatus(detail.id, s)}
                      style={{ background:detail.status===s?sc.bg:"#F7F8FC", border:`1px solid ${detail.status===s?sc.border:"#E2E6F0"}`, color:detail.status===s?sc.text:"#6B7280", borderRadius:6, padding:"5px 11px", fontSize:11, fontWeight:detail.status===s?700:500, cursor:"pointer", ...T }}>
                      {s.charAt(0).toUpperCase()+s.slice(1)}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Info */}
            <div style={{ marginBottom:20 }}>
              <label style={{ fontSize:12, fontWeight:600, color:"#374151", display:"block", marginBottom:8 }}>Details</label>
              <div style={{ display:"flex", flexDirection:"column", gap:6, fontSize:13 }}>
                {[
                  ["Role", detail.job_title],
                  ["Applied", new Date(detail.created_at).toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" })],
                  ["Email", detail.email],
                  ["Phone", detail.phone || "—"],
                ].map(([k,v]) => (
                  <div key={k} style={{ display:"flex", gap:8 }}>
                    <span style={{ color:"#9CA3AF", width:56, flexShrink:0 }}>{k}:</span>
                    <span style={{ color:"#374151" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {(detail.github_url || detail.linkedin_url || detail.portfolio_url) && (
              <div style={{ marginBottom:20, display:"flex", gap:8, flexWrap:"wrap" }}>
                {detail.github_url && <a href={detail.github_url.startsWith("http")?detail.github_url:`https://${detail.github_url}`} target="_blank" rel="noopener" style={{ fontSize:12, color:"#4F46E5", background:"#EEF2FF", border:"1px solid #C7D2FE", borderRadius:6, padding:"4px 10px", textDecoration:"none", fontWeight:600 }}>GitHub →</a>}
                {detail.linkedin_url && <a href={detail.linkedin_url.startsWith("http")?detail.linkedin_url:`https://${detail.linkedin_url}`} target="_blank" rel="noopener" style={{ fontSize:12, color:"#0077B5", background:"#E8F4FB", border:"1px solid #B3D4E8", borderRadius:6, padding:"4px 10px", textDecoration:"none", fontWeight:600 }}>LinkedIn →</a>}
                {detail.portfolio_url && <a href={detail.portfolio_url.startsWith("http")?detail.portfolio_url:`https://${detail.portfolio_url}`} target="_blank" rel="noopener" style={{ fontSize:12, color:"#059669", background:"#DCFCE7", border:"1px solid #BBF7D0", borderRadius:6, padding:"4px 10px", textDecoration:"none", fontWeight:600 }}>Portfolio →</a>}
              </div>
            )}

            {/* Cover note */}
            {detail.cover_note && (
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:12, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>Cover note</label>
                <div style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:8, padding:"12px", fontSize:13, color:"#374151", lineHeight:1.65 }}>{detail.cover_note}</div>
              </div>
            )}

            {/* Resume */}
            {detail.resume_url && (
              <div style={{ marginBottom:20 }}>
                <label style={{ fontSize:12, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>Resume</label>
                <button onClick={() => downloadResume(detail)}
                  style={{ background:"#4F46E5", color:"#FFFFFF", border:"none", borderRadius:8, padding:"9px 16px", fontSize:13, fontWeight:600, cursor:"pointer", ...T, width:"100%", boxShadow:"0 2px 8px rgba(79,70,229,0.2)" }}>
                  ⬇ Download {detail.resume_filename}
                </button>
              </div>
            )}

            {/* Admin notes */}
            <div>
              <label style={{ fontSize:12, fontWeight:600, color:"#374151", display:"block", marginBottom:6 }}>Admin notes</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={4} placeholder="Private notes visible only to admins…"
                style={{ width:"100%", border:"1px solid #E2E6F0", borderRadius:8, padding:"10px 12px", fontSize:13, ...T, resize:"vertical", outline:"none", boxSizing:"border-box" }} />
              <button onClick={saveNotes} disabled={savingNotes}
                style={{ background:"#F7F8FC", border:"1px solid #E2E6F0", borderRadius:7, padding:"7px 14px", fontSize:12, fontWeight:600, cursor:"pointer", ...T, marginTop:8 }}>
                {savingNotes ? "Saving…" : "Save notes"}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}
