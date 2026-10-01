"use server";

import { z } from "zod";
import { db } from "@/lib/db";

const reservationSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(80),
  email: z.string().trim().email("That email does not look right."),
  phone: z.string().trim().min(7, "A phone number helps us confirm your table.").max(25),
  date: z.string().trim().min(1, "Pick a date."),
  time: z.string().trim().min(1, "Pick a time."),
  guests: z.coerce.number().int().min(1).max(40),
  occasion: z.string().trim().max(60).optional().or(z.literal("")),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

export type ReserveInput = z.infer<typeof reservationSchema>;
export type ActionResult = { ok: boolean; message: string };

export async function createReservation(input: ReserveInput): Promise<ActionResult> {
  const parsed = reservationSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Something is missing. Check the form and try again." };
  }
  const d = parsed.data;
  try {
    await db.reservation.create({
      data: {
        name: d.name,
        email: d.email,
        phone: d.phone,
        date: d.date,
        time: d.time,
        guests: d.guests,
        occasion: d.occasion || null,
        notes: d.notes || null,
      },
    });
    return {
      ok: true,
      message: `Thanks ${d.name.split(" ")[0]}. We got your request for ${d.guests} on ${d.date} at ${d.time}. We will confirm by text within the hour.`,
    };
  } catch {
    return { ok: false, message: "Our booking system hiccuped. Give us a call at (512) 476 8220 and we will sort you out." };
  }
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(80),
  email: z.string().trim().email("That email does not look right."),
  subject: z.string().trim().min(2, "What is this about?").max(100),
  message: z.string().trim().min(10, "A few more words would help us help you.").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export async function sendContactMessage(input: ContactInput): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Something is missing. Check the form and try again." };
  }
  const d = parsed.data;
  try {
    await db.contactMessage.create({
      data: { name: d.name, email: d.email, subject: d.subject, message: d.message },
    });
    return { ok: true, message: "Message received. We read everything and usually reply within a day." };
  } catch {
    return { ok: false, message: "Could not send that. Try hello@emberandoak.com and we will get back to you." };
  }
}

const newsletterSchema = z.object({
  email: z.string().trim().email("That email does not look right."),
});

export async function subscribeNewsletter(email: string): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse({ email });
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "That email does not look right." };
  }
  try {
    await db.newsletterSubscriber.upsert({
      where: { email: parsed.data.email },
      create: { email: parsed.data.email },
      update: {},
    });
    return { ok: true, message: "You are on the list. Expect a note when something new hits the menu." };
  } catch {
    return { ok: false, message: "Could not sign you up right now. Try again in a minute." };
  }
}
