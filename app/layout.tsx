import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";


const font = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

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
            <body className={font.className}>
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    );
}
