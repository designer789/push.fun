import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Push.fun",
  description: "Push It. Launch It. Own It. - Where dreamers, rebels, and meme creators turn wild ideas into tokens!",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
