import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// Added Poppins for potential use
import { Poppins } from "next/font/google"
import { I18nextProvider } from "react-i18next"
import i18n from "@/i18n" // Import the i18n configuration
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
// Define Poppins font with necessary subsets and weights

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "FarmConnect - One Stop Solution for Farmers",
  description:
    "Comprehensive digital platform for Indian farmers with AI recommendations, marketplace, and community support",
  generator: "v0.app",
}

// Root layout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      {/* Wrap the body content with I18nextProvider */}
      <I18nextProvider i18n={i18n}>
        <body className="font-sans">{children}</body>
      </I18nextProvider>
    </html>
  )
}
