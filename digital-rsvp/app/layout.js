import { inter, roboto_mono } from "@/app/ui/font";
import "./ui/globals.css";

export const metadata = {
  title: "E-Invite Open House",
  description: "Selamat Hari Raya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${inter.variable} antialiased ${roboto_mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
