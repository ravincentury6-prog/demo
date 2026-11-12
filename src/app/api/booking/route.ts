import connectDb from "@/lib/connectDB";
import Booking from "@/models/booking";
import transporter from "@/lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const {
            fullName,
            email,
            phone,
            nationality,
            guests,
            checkIn,
            checkOut,
            rooms,
        } = await req.json();

        // 1. Required fields validation
        if (
            !fullName?.trim() ||
            !email?.trim() ||
            !phone?.trim() ||
            !nationality?.trim() ||
            !checkIn ||
            !checkOut ||
            guests == null ||
            rooms == null
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill in all required fields",
                },
                { status: 400 }
            );
        }

        // 2. Email validation
        const cleanEmail = email.trim().toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(cleanEmail)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email address",
                },
                { status: 400 }
            );
        }

        // 3. Guests and rooms validation
        if (
            !Number.isInteger(Number(guests)) ||
            !Number.isInteger(Number(rooms)) ||
            Number(guests) < 1 ||
            Number(rooms) < 1
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Guests and rooms must be at least 1",
                },
                { status: 400 }
            );
        }

        // 4. Date validation
        const arrival = new Date(checkIn);
        const departure = new Date(checkOut);

        if (
            Number.isNaN(arrival.getTime()) ||
            Number.isNaN(departure.getTime()) ||
            departure <= arrival
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Check-out must be after check-in",
                },
                { status: 400 }
            );
        }

        // 5. Connect MongoDB
        await connectDb();

        // 6. Save booking
        const booking = await Booking.create({
            fullName: fullName.trim(),
            email: cleanEmail,
            phone: phone.trim(),
            nationality: nationality.trim(),
            guests: Number(guests),
            checkIn: arrival,
            checkOut: departure,
            rooms: Number(rooms),
        });

        // 7. Owner email with complete booking details
        const ownerEmail = `
New ChigDil Homestay Booking

Guest Name: ${fullName.trim()}
Email: ${cleanEmail}
Phone: ${phone.trim()}
Nationality: ${nationality.trim()}
Guests: ${Number(guests)}
Rooms: ${Number(rooms)}
Check-in: ${arrival.toDateString()}
Check-out: ${departure.toDateString()}
Please contact the guest to confirm the booking.
Best Regards,
ChigDil Homestay
`;

        // 8. Guest email with thank-you message only
        const guestEmail = `
Thank you for being in touch  We will respond soon.
Best Regards,
ChigDil Homestay
`;

        // 9. Send both emails independently
        const emailResults = await Promise.allSettled([
            transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.OWNER_EMAIL,
                subject: "New Booking - ChigDil Homestay",
                text: ownerEmail,
            }),

            transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: cleanEmail,
                subject: "Thank You for Contacting ChigDil Homestay",
                text: guestEmail,
            }),
        ]);

        const ownerEmailSent =
            emailResults[0].status === "fulfilled";

        const guestEmailSent =
            emailResults[1].status === "fulfilled";

        if (!ownerEmailSent) {
            console.error("Owner email failed:", emailResults[0]);
        }

        if (!guestEmailSent) {
            console.error("Guest email failed:", emailResults[1]);
        }

        // 10. Final response
        return NextResponse.json(
            {
                success: true,
                message: "Booking submitted successfully",
                emailStatus: {
                    ownerEmailSent,
                    guestEmailSent,
                },
            },
            { status: 201 }
        );

    } catch (error) {
        console.error("Booking error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to submit booking",
            },
            { status: 500 }
        );
    }
}