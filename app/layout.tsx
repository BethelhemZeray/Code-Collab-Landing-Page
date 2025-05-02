"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/custom.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBox";
import { Providers } from "./provider";
import { PlanProvider } from "./context/PlanContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <PlanProvider>
            <Navbar />
            {children}
            <Footer />
            <ChatBot />
          </PlanProvider>
        </Providers>
      </body>
    </html>
  );
}
