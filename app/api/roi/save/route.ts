import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const IS_PROD = process.env.NODE_ENV === "production";

export async function POST(req: Request) {
  try {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const serviceRoleKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_SERVICE_ROLE ||
      process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: "Server is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json();

    // Validation
    const required = [
      "monthly_cv_volume",
      "monthly_hires",
      "hr_hourly_cost_inr",
      "current_test_cost_inr",
      "hours_saved_monthly",
      "total_monthly_savings",
      "total_annual_savings",
    ];
    for (const field of required) {
      if (body[field] === undefined || body[field] === null) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Save the calculation
    const { data: roiRow, error: roiError } = await supabase
      .from("roi_calculations")
      .insert({
        email: body.email || null,
        company_name: body.company_name || null,
        industry: body.industry || null,
        monthly_cv_volume: body.monthly_cv_volume,
        monthly_hires: body.monthly_hires,
        hr_hourly_cost_inr: body.hr_hourly_cost_inr,
        current_test_cost_inr: body.current_test_cost_inr,
        hours_per_cv: body.hours_per_cv || 0.5,
        hours_saved_monthly: body.hours_saved_monthly,
        inr_saved_screening: body.inr_saved_screening,
        inr_saved_testing: body.inr_saved_testing,
        total_monthly_savings: body.total_monthly_savings,
        total_annual_savings: body.total_annual_savings,
        zorvis_recommended_plan: body.zorvis_recommended_plan || null,
        zorvis_plan_cost_monthly: body.zorvis_plan_cost_monthly || null,
        payback_days: body.payback_days || null,
        source: body.source || "website_calculator",
        user_agent: req.headers.get("user-agent") || null,
        referrer: req.headers.get("referer") || null,
      })
      .select()
      .single();

    if (roiError) {
      console.error("ROI save failed", roiError);
      return NextResponse.json(
        {
          error: IS_PROD
            ? "Could not save calculation."
            : `Save failed: ${roiError.message}`,
        },
        { status: 500 }
      );
    }

    // If they provided an email, also add to email_subscribers
    if (body.email) {
      await supabase.from("email_subscribers").insert({
        email: body.email,
        company_name: body.company_name || null,
        company_size: body.company_size || null,
        industry: body.industry || null,
        source: "roi_calculator",
        source_detail: roiRow.id,
        user_agent: req.headers.get("user-agent") || null,
        referrer: req.headers.get("referer") || null,
      });
    }

    return NextResponse.json({ ok: true, id: roiRow.id });
  } catch (err) {
    console.error("ROI route error", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
