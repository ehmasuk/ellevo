import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "ELLEVO",
    description: "Buy whatever anywhere",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    );
}
