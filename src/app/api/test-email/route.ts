import transporter from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL,
            subject: "ChigDil Email Test",
            text: "Hello! ChigDil email system is working successfully.",
        });

        return NextResponse.json({
            success: true,
            message: "Test email sent successfully",
        });
    } catch (error) {
        console.error("Email error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send test email",
            },
            { status: 500 }
        );
    }
}