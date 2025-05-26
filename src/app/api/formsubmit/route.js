import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';


export async function POST( request ) {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
        host : 'smtp.freesmtpservers.com',
        port : 25,
        secure : false,
        tls :{
            rejectUnauthorized: false,
        },
    });
    
    try {
        await transporter.sendMail({
            from : data.email,
            to : 'pjakhar251@gmail.com',
            subject : "Hii from Testing",
            text : data.message,
            html: `<p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Number:</strong> ${data.number}</p>
                <p><strong>Message:</strong><br>${data.message}</p>`,
        })
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Email sending failed.' }, { status: 500 });
    }

    console.log(data);
    return NextResponse.json({success : true, data})   
}