import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const inter = Inter({
subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "How to do it better | Home",
  description: "Engage in Conversations With AI and Humans and Learn How to do any task at hand better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className,"bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
