import { connectMongoDB } from "@/lib/mongodb";
import { SavePayment } from "@/models/savepayment";


export async function GET(req) {
    try {
      // Connect to MongoDB
      await connectMongoDB();
  
      // Fetch all data from the SavePayment collection
      const userData = await SavePayment.find();
  
      if (!userData.length) {
        return new Response(
          JSON.stringify({ message: "No data found." }),
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
  