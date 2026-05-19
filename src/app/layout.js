
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import NextThemeProvider from "@/NextThemeProvider/NextThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediQueue | Tutor Booking System",
  description: "Tutor Booking System",
};

export default function RootLayout({ children }) {
  return (
    <html

      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          <main>{children}</main>
        </NextThemeProvider>
        <Footer />
        <ToastContainer />
        <Toaster />
      </body>
    </html>
  );
}
