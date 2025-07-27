import { type NextRequest, NextResponse } from "next/server"

// This API route is now simplified since EmailJS runs client-side
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, productInterest } = body

    // Log the submission for backup/analytics
    console.log("📧 Contact Form Submission (Backup Log):", {
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Individual",
      message,
      productInterest: productInterest || "General Inquiry",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    })

    // Simple success response
    return NextResponse.json(
      {
        message: "Form submission logged successfully",
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error logging form submission:", error)
    return NextResponse.json(
      {
        error: "Failed to log submission",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
