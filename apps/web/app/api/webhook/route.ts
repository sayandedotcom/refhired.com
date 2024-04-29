import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

import prisma from "@referrer/prisma";

import { stripe } from "@/lib/stripe";

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const { metadata } = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
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
  }

  return new NextResponse(null, { status: 200 });
}
