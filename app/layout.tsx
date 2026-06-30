import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SignalAtlas | Market intelligence, not signals",
  description: "A sample personal market intelligence dashboard.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
