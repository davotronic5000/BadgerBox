import type { Metadata } from "next";
import { Bungee, Poppins } from "next/font/google";
import ClientProviders from "./client-providers";
import "./globals.css";

const bungee = Bungee({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-bungee",
    weight: "400",
});

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["400", "700"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${bungee.variable} ${poppins.variable} h-full bg-green-800 bg-gradient-to-b from-sky-500 from-45% via-lime-500 via-50% to-lime-900 font-content antialiased`}
        >
            <body>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
