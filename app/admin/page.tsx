"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) { setError("Please enter email and password."); return; }
    setLoading(true); setError("");
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
      const res = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: supabaseAnon },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.access_token) throw new Error(data.error_description || "Invalid credentials.");
      sessionStorage.setItem("admin_token", data.access_token);
      sessionStorage.setItem("admin_email", email);
      router.push("/admin/dashboard");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#F7F8FC", fontFamily:"'DM Sans',system-ui,sans-serif" }}>
      <div style={{ background:"#FFFFFF", borderRadius:16, padding:"40px 36px", maxWidth:400, width:"100%", boxShadow:"0 8px 32px rgba(0,0,0,0.08)", border:"1px solid #E2E6F0" }}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ width:44, height:44, background:"#4F46E5", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", fontSize:20 }}>🧠</div>
          <div style={{ fontSize:18, fontWeight:800, color:"#0D1117", letterSpacing:"-0.02em" }}>Zorvis Admin</div>
          <div style={{ fontSize:13, color:"#9CA3AF", marginTop:4 }}>Careers dashboard</div>
        </div>

        <div style={{ marginBottom:14 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:5 }}>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)}
            type="email" placeholder="admin@zorvis.ai"
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            style={{ width:"100%", border:"1px solid #E2E6F0", borderRadius:8, padding:"10px 13px", fontSize:14, fontFamily:"'DM Sans',sans-serif", outline:"none", boxSizing:"border-box" }} />
        </div>
        <div style={{ marginBottom:20 }}>
          <label style={{ fontSize:13, fontWeight:600, color:"#374151", display:"block", marginBottom:5 }}>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)}
            type="password" placeholder="••••••••••"
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            style={{ width:"100%", border:"1px solid #E2E6F0", borderRadius:8, padding:"10px 13px", fontSize:14, fontFamily:"'DM Sans',sans-serif", outline:"none", boxSizing:"border-box" }} />
        </div>

        {error && <div style={{ background:"#FEE2E2", border:"1px solid #FECACA", borderRadius:8, padding:"9px 13px", fontSize:13, color:"#B91C1C", marginBottom:16 }}>{error}</div>}

        <button onClick={handleLogin} disabled={loading}
          style={{ width:"100%", background:loading?"#818CF8":"#4F46E5", color:"#FFFFFF", border:"none", borderRadius:9, padding:"12px", fontSize:14, fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:"'DM Sans',sans-serif" }}>
          {loading ? "Signing in…" : "Sign in →"}
        </button>
        <p style={{ textAlign:"center", fontSize:12, color:"#9CA3AF", marginTop:14 }}>
          Admin access only. Use your Supabase project email credentials.<br />
          <a href="https://supabase.com/dashboard" target="_blank" rel="noopener" style={{ color:"#4F46E5" }}>Manage in Supabase Dashboard →</a>
        </p>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');`}</style>
    </div>
  );
}
