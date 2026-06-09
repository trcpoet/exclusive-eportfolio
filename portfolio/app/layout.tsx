import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { AppShell } from "@/components/layout/app-shell";
import { Footer } from "@/components/layout/footer";
import { ContactModalProvider } from "@/components/providers/contact-modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteMeta } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${dmSerif.variable} h-full`}>
      <body className="min-h-full">
        <ThemeProvider>
          <ContactModalProvider>
            <AppShell>{children}</AppShell>
            <Footer />
          </ContactModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
