import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Astitva Agro - Premium Agriculture Trading & Export Company",
  description:
    "Leading agriculture trading and import-export company specializing in grains, pulses, spices, and fresh produce. Global trading solutions with domestic and international expertise.",
  keywords:
    "agriculture trading, export import, grains export, spices trading, pulses export, fresh produce, international trading, agriculture business, food export, commodity trading",
  authors: [{ name: "Astitva Agro FPCL" }],
  openGraph: {
    title: "Astitva Agro - Premium Agriculture Trading & Export",
    description:
      "Leading agriculture trading and import-export company specializing in grains, pulses, spices, and fresh produce.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astitva Agro - Premium Agriculture Trading & Export",
    description:
      "Leading agriculture trading and import-export company specializing in grains, pulses, spices, and fresh produce.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}


export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
        <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/x-icon" />
        {/* If using PNG */}
        {/* <link rel="icon" href="/astitva_logo.png" type="image/png" /> */}
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
