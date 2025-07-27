import Hero from "@/components/Hero"
import About from "@/components/About"
import Products from "@/components/Products"
import Services from "@/components/Services"
import EstemedCustomers from "@/components/Customers"
import Directors from "@/components/Directors"
import LicensesCertifications from "@/components/Licence"
import GlobalPresence from "@/components/GlobalPresence"
import Contact from "@/components/Contact"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactSimple from "@/components/SimpleContact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Services />
      <EstemedCustomers />
      <Directors />
      <LicensesCertifications />
      <GlobalPresence />
      <Contact />
       {/* <ContactSimple /> */}
      <WhatsAppButton />

    </main>
  )
}
