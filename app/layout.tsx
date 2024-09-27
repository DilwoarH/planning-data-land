import type { Metadata } from "next";
import "./globals.css";
import { GovukHeader } from "@/components/govuk/GovukHeader";

export const metadata: Metadata = {
  title: "Planning Data Land",
  description: "A magical land where you can see data about planning data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GovukHeader />
        {children}
      </body>
    </html>
  );
}
