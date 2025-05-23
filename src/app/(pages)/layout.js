import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "../components/NavBar";
import { DataProvider } from "../components/DataContext";
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
            <DataProvider>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}>
                    <NavBar />
                    {children}
                </body>
            </DataProvider>
        </html>
    );
}
