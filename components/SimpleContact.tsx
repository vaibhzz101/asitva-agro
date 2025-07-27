"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Clock, Send, Factory, Building2, CheckCircle, AlertCircle } from "lucide-react"

// Simple Toast Component
const Toast = ({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) => {
  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-md ${
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

export default function ContactSimple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    productInterest: "",
  })

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setToast({
        message: "⚠️ Please fill in all required fields (Name, Email, Message).",
        type: "error",
      })
      return
    }

    // Create mailto link with form data
    const subject = `New Inquiry from ${formData.name} - Astitva Agro`
    const body = `
Dear Astitva Agro Team,

You have received a new contact form submission:

📋 CONTACT DETAILS:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || "Not provided"}
🏢 Company: ${formData.company || "Individual"}
🌾 Product Interest: ${formData.productInterest || "General Inquiry"}

💬 MESSAGE:
${formData.message}

📅 Submitted: ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    })}

Best regards,
${formData.name}
    `.trim()

    const mailtoLink = `mailto:info@astitvaagrofpcl.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    setToast({
      message: "📧 Your email client will open with the pre-filled message. Please send it to complete your inquiry!",
      type: "success",
    })

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        productInterest: "",
      })
    }, 2000)
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

        <div className="grid lg:grid-cols-2 gap-16">
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
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 87654 32109</p>
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

            {/* Info Message */}
            <div className="p-4 rounded-lg mb-6 border bg-blue-50 border-blue-200">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Mail className="text-blue-600" size={16} />
                <span className="text-blue-800">
                  📧 This form will open your email client with a pre-filled message to:{" "}
                  <strong>info@astitvaagrofpcl.com</strong>
                </span>
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
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>

              <div className="text-center space-y-2">
                <p className="text-xs text-gray-500">📧 Opens your email client with pre-filled message</p>
                <p className="text-xs text-gray-400">🔒 No data stored - direct email communication</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
