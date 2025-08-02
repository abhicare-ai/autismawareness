import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "./TopHeader";
import MenuBar, { PhoneMenuBar } from "./PhoneMenuBar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "./Footer";
import { Suspense } from "react";
import SideBarButton from "@/components/SideBarButton";
import ReactQueryProvider from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | autismawareness",
    default: "autismawareness",
  },
  description: "Understanding autism with love and awareness.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <TopHeader />
          <MenuBar />
          <Suspense>
            <PhoneMenuBar />
          </Suspense>

          {children}
          <SideBarButton className="fixed top-1/2 right-0 z-20 origin-bottom-right rotate-[-90deg]" />
          <Footer />
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
