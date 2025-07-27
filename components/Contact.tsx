"use client"

import type React from "react"
import type { ReactElement } from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, Clock, Send, Factory, Building2, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import emailjs from "emailjs-com"

// Enhanced Toast Component
const Toast = ({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) => {
  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 animate-fadeInUp max-w-md ${
        type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
      }`}
    >
      {type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      <span className="text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 text-white/80 hover:text-white text-xl leading-none">
        ×
      </button>
    </div>
  )
}

// Map Component
const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<"office" | "factory">("office")

  const locations = {
    office: {
      name: "Head Office",
      address: "Ground Floor, S. No 69/22, Gunjalwadi, Sangamner, MIDC, Ahmednagar - 422605, Maharashtra, India",
      coordinates: { lat: 19.588918, lng: 74.184155 },
      icon: Building2,
      color: "bg-blue-600",
    },
    factory: {
      name: "Processing Factory",
      address: "Survey No 32/5, Junegaon, Taleggaon Dighe, Sangamner, Ahmednagar - 422611, Maharashtra, India",
      coordinates: { lat: 19.718427, lng: 74.293255 },
      icon: Factory,
      color: "bg-green-600",
    },
  }

  // Generate search-based URL (works without API key)
  const generateSearchMapUrl = (location: typeof locations.office | typeof locations.factory) => {
    const encodedAddress = encodeURIComponent(location.address)
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodedAddress}!5e0!3m2!1sen!2sin!4v${Date.now()}!5m2!1sen!2sin`
  }

  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      {/* Location Selector */}
      <div className="p-6 bg-white border-b">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Our Locations</h3>
        <div className="flex gap-4">
          {Object.entries(locations).map(([key, location]) => (
            <button
              key={key}
              onClick={() => setSelectedLocation(key as "office" | "factory")}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                selectedLocation === key
                  ? `${location.color} text-white shadow-lg`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {(() => {
                const Icon = location.icon
                return <Icon size={20} />
              })()}
              <span className="font-medium">{location.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100">
        {/* Embedded Google Map with updated coordinates */}
        <iframe
          key={selectedLocation} // Force re-render when location changes
          src={generateSearchMapUrl(locations[selectedLocation])}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />

        {/* Location Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div
              className={`w-10 h-10 ${locations[selectedLocation].color} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              {(() => {
                const Icon = locations[selectedLocation].icon
                return <Icon className="text-white" size={20} />
              })()}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-gray-900 mb-1">{locations[selectedLocation].name}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{locations[selectedLocation].address}</p>
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                <span>📍 Lat: {locations[selectedLocation].coordinates.lat}</span>
                <span>Lng: {locations[selectedLocation].coordinates.lng}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-white border-t flex gap-2">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locations[selectedLocation].address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center"
        >
          Open in Google Maps
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locations[selectedLocation].address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors text-center"
        >
          Get Directions
        </a>
      </div>
    </div>
  )
}

export default function Contact(): ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    productInterest: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)

useEffect(() => {
  emailjs.init("PFC3Znw_c8OkggoDV")
  setEmailJSLoaded(true)
}, [])

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    if (!emailJSLoaded) {
      throw new Error("Email service not loaded")
    }

    // Template for internal team
    const templateParams = {
      to_email: "info@astitvaagrofpcl.com",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Individual",
      product_interest: formData.productInterest || "General Inquiry",
      message: formData.message,
      reply_to: formData.email,
      timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      }),
      website_source: "Astitva Agro Website Contact Form",
    }

    const teamResult = await emailjs.send("service_astitva", "template_contact", templateParams)

    if (teamResult.status !== 200) {
      throw new Error("Failed to send message to team")
    }

    // Template for auto-reply
    const autoReplyParams = {
      to_email: formData.email,
      sender_name: formData.name,
      reply_to: "info@astitvaagrofpcl.com",
      from_name: "Astitva Agro",
    } 

    try {
      const replyResult = await emailjs.send("service_astitva", "template_autoreply", autoReplyParams)

      if (replyResult.status !== 200) {
        console.warn("Auto-reply failed, but main message succeeded.")
      }
    } catch (err) {
      console.warn("Auto-reply error:", err)
    }

    setToast({
      message:
        "🎉 Thank you! Your message has been sent successfully. A confirmation has also been sent to your email.",
      type: "success",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      productInterest: "",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    setToast({
      message:
        "❌ Sorry, there was an error sending your message. Please try again or contact us directly at info@astitvaagrofpcl.com",
      type: "error",
    })
  } finally {
    setIsSubmitting(false)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const closeToast = () => {
    setToast(null)
  }

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Toast Notification */}
        {toast && <Toast message={toast.message} type={toast.type} onClose={closeToast} />}

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your agricultural trading journey? Get in touch with our experts for personalized solutions
            and competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                We're here to help you with all your agricultural trading needs. Contact us through any of the following
                channels.
              </p>
            </div>

            {/* Office Address */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-white" size={24} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1">Head Office</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ground Floor, S. No 69/22, Gunjalwadi,
                    <br />
                    Sangamner, MIDC, Ahmednagar - 422605
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Factory Address */}
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Factory className="text-white" size={24} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1">Processing Factory</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Survey No 32/5, Junegaon, Taleggaon Dighe,
                    <br />
                    Sangamner, Ahmednagar - 422611
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9960 637698</p>
                  <p className="text-gray-600">+91 9049 583972</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@astitvaagrofpcl.com</p>
                  <p className="text-gray-600">sales@astitvaagrofpcl.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {/* EmailJS Status Indicator */}
            <div
              className={`p-4 rounded-lg mb-6 border ${emailJSLoaded ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                {emailJSLoaded ? (
                  <>
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-green-800">
                      ✅ Email service ready - Messages sent directly to: <strong>info@astitvaagrofpcl.com</strong>
                    </span>
                  </>
                ) : (
                  <>
                    <Loader2 className="text-yellow-600 animate-spin" size={16} />
                    <span className="text-yellow-800">Loading email service...</span>
                  </>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                    disabled={isSubmitting || !emailJSLoaded}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    disabled={isSubmitting || !emailJSLoaded}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                    disabled={isSubmitting || !emailJSLoaded}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                    disabled={isSubmitting || !emailJSLoaded}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  disabled={isSubmitting || !emailJSLoaded}
                >
                  <option value="">Select a product category</option>
                  <option value="grains">Grains & Cereals</option>
                  <option value="pulses">Pulses & Legumes</option>
                  <option value="spices">Spices & Herbs</option>
                  <option value="fresh">Fresh Produce</option>
                  <option value="oilseeds">Oil Seeds</option>
                  <option value="processed">Processed Foods</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your requirements..."
                  disabled={isSubmitting || !emailJSLoaded}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !emailJSLoaded}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : !emailJSLoaded ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading Email Service...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              <div className="text-center space-y-2">
                <p className="text-xs text-gray-500">✅ Your message will be sent directly to our team</p>
                <p className="text-xs text-gray-400">🔒 Secure client-side email delivery via EmailJS</p>
              </div>
            </form>
          </div>
        </div>

        {/* Interactive Map */}
        <InteractiveMap />
      </div>
    </section>
  )
}
