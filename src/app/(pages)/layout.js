import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "../components/NavBar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce",
  description: "Platform for selling products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
