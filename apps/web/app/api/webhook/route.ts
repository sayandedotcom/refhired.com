import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

import prisma from "@referrer/prisma";

import { stripe } from "@/lib/stripe";

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET;

// ! const webhookHandler = async (req: NextRequest) => {
export async function POST(req: NextRequest, res: any) {
  try {
    const buf = await req.text();
    const sig = req.headers.get("stripe-signature")!;
    let event: Stripe.Event;
    // let event: any;
    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";

      if (err! instanceof Error) console.log(err);
      console.log(`❌ Error message: ${errorMessage}`);

      return NextResponse.json(
        {
          error: {
            message: `Webhook Error: ${errorMessage}`,
          },
        },
        { status: 400 }
      );
    }

    const { metadata } = event.data.object as Stripe.Checkout.Session;
    switch (event.type) {
      case "checkout.session.completed":
        if (metadata?.userId && metadata?.stars) {
          await prisma.user.update({
            where: {
              id: metadata.userId.toString(),
            },
            data: {
              stars: {
                increment: +metadata?.stars,
              },
            },
          });
        }
        break;

      default:
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
        break;
    }
    // Return a response to acknowledge receipt of the event.
    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      {
        error: {
          message: `Method Not Allowed`,
        },
      },
      { status: 405 }
    ).headers.set("Allow", "POST");
  }
}

// ! export { webhookHandler as POST };
