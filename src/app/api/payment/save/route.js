import { connectMongoDB } from "@/lib/mongodb";
import { SavePayment } from "@/models/savepayment";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const {
      fullName,
      email,
      phone,
      city,
      country,
      planId,
      planType,
      investAmount,
      earnings,
      totalAmount,
      paymentStatus,
    } = body;

    // Validate input
    if (
      !fullName ||
      !email ||
      !phone ||
      !city ||
      !country ||
      !planId ||
      !planType ||
      !investAmount
    ) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Save the data
    const newPayment = new SavePayment({
      fullName,
      email,
      phone,
      city,
      country,
      planId,
      planType,
      investAmount,
      earnings: earnings || 0, // Default to 0 if earnings are not provided
      totalAmount: totalAmount || 0, // Default to 0 if totalAmount is not provided
      paymentStatus: paymentStatus === true, // Ensure boolean value
    });

    const savedPayment = await newPayment.save();
    return new Response(
      JSON.stringify({ message: "Data saved successfully.", savedPayment }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving payment:", error);
    return new Response(
      JSON.stringify({ message: "Server error occurred.", error: error.message }),
      { status: 500 }
    );
  }
}


export async function GET(req) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email"); // Retrieve the email from query parameters

    if (!email) {
      return new Response(
        JSON.stringify({ message: "Email is required to fetch data." }),
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Fetch all data for the specified email
    const userData = await SavePayment.find({ email });

    if (!userData.length) {
      return new Response(
        JSON.stringify({ message: "No data found for this user." }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Data retrieved successfully.", userData }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return new Response(
      JSON.stringify({ message: "Server error occurred.", error: error.message }),
      { status: 500 }
    );
  }
}

  