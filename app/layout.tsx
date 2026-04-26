import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warung Klontong Online",
  description: "Website warung klontong dengan login dan payment checkout"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
