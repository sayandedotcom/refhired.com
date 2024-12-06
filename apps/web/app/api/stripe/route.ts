import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";

import { siteConfig } from "@/config";

export async function POST(req: NextRequest) {
  // const billingUrl = siteConfig(locale).url + "/dashboard/billing/";
  const { planId = process.env.STRIPE_CUST0M_PRICE_ID, quantity = 1, stars } = await req.json();

  try {
    const { user } = await auth();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: user.email,
      billing_address_collection: "required",
      line_items: [
        {
          price: planId,
          quantity,
        },
      ],
      metadata: {
        userId: user.id,
        stars,
      },
      success_url: `${siteConfig.url}/purchase`,
      cancel_url: `${siteConfig.url}/purchase`,
    });

    return new NextResponse(JSON.stringify({ url: checkoutSession.url, stars: stars }));
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
