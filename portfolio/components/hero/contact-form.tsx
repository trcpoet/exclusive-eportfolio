"use client";

import { contact, siteMeta } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type FormStatus = "idle" | "loading" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    emailjs.init(contact.emailJs.publicKey);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        contact.emailJs.serviceId,
        contact.emailJs.templateId,
        event.currentTarget
      );
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("idle");
      window.alert(
        `The email service is temporarily unavailable. Please contact me directly at ${siteMeta.email}`
      );
    }
  }

  return (
    <div className="relative min-h-0 flex-1">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="user_name" className="text-white">
            Name
          </Label>
          <Input
            id="user_name"
            name="user_name"
            required
            className="rounded-none border-0 border-b-2 border-[#c0c4cc] border-t-0 border-r-0 border-l-0 bg-bg-dark text-white focus-visible:border-maroon"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="user_email" className="text-white">
            Email
          </Label>
          <Input
            id="user_email"
            name="user_email"
            type="email"
            required
            className="rounded-none border-0 border-b-2 border-[#c0c4cc] border-t-0 border-r-0 border-l-0 bg-bg-dark text-white focus-visible:border-maroon"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            className="min-h-[100px] rounded-none border-0 border-b-2 border-[#c0c4cc] border-t-0 border-r-0 border-l-0 bg-bg-dark text-white focus-visible:border-maroon"
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-auto max-w-[240px] border-2 border-maroon bg-maroon px-6 py-3 text-xl font-bold text-white hover:border-white hover:bg-transparent"
        >
          {contact.submitLabel}
        </Button>
      </form>

      {status === "loading" ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-bg-dark text-6xl text-white">
          <Loader2 className="size-16 animate-spin" aria-hidden />
          <span className="sr-only">Sending message</span>
        </div>
      ) : null}

      {status === "success" ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#4bb543] p-7 text-center text-2xl font-bold text-white">
          {contact.successMessage}
        </div>
      ) : null}
    </div>
  );
}
