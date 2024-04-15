import { inter, garamond } from "../app/ui/font";
import "./ui/globals.css";

export const metadata = {
  title: "RSVP E-Invite Open House",
  description: "Sunday, 28 April 2024 - Asrian Family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${inter.variable} antialiased ${garamond.variable} antialiased`}>{children}</body>
    </html>
  );
}
