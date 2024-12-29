// import { connectMongoDB } from "@/lib/mongodb";
// import User from "@/models/user";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();
//     await connectMongoDB();

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User already exists." },
//         { status: 400 }
//       );
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     // Generate OTP and its expiration time
//     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//     const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now
//     // Create the user but set isVerified to false
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       otp,
//       otpExpires,
//       isVerified: false,
//     });
//     await user.save();

//     // Send the OTP email
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Your OTP Verification Code",
//       text: `Your OTP code is ${otp}. It expires in 10 minutes.`,
//     });

//     return NextResponse.json(
//       { message: "User registered. Please verify your email with the OTP sent." },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "An error occurred while registering the user." },
//       { status: 500 }
//     );
//   }
// }


import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Validate inputs
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    await connectMongoDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP and expiration
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpires,
      isVerified: false,
    });
    await user.save();

    // Check email environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      throw new Error("Email credentials are not set in environment variables.");
    }

    // Send the OTP email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Verification Code",
      text: `Your OTP code is ${otp}. It expires in 10 minutes.`,
    });

    return NextResponse.json(
      { message: "User registered. Please verify your email with the OTP sent." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user.", error: error.message },
      { status: 500 }
    );
  }
}
