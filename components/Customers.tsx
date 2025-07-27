"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function EstemedCustomers() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const customers = [
    {
      name: "BigBasket",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7e9mJUbqQGxMcWb3Pdjuy1q3kOH1YUv-bFw&s",
      description: "India's largest online grocery store",
    },
    {
      name: "Zepto",
      logo: "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.77.11/images/header/primary-logo.svg",
      description: "10-minute grocery delivery",
    },
    {
      name: "Reliance Fresh",
      logo: "https://i.pinimg.com/736x/ee/df/ab/eedfabd3beed54d31ed6132fe2e4dc14.jpg",
      description: "India's retail chain",
    },
    {
      name: "Blinkit",
      logo: "https://blinkit.com/careers/sites/default/files/2024-05/press-kit_0.png",
      description: "Instant grocery delivery",
    },
    {
      name: "ICM Trader LLC",
      logo: "https://www.icmtrader.com/media/5zybfbgu/icm-trader-logo.svg",
      description: "Multi-regulated fintech service provider",
    },
    {
      name: "Amazon Fresh",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhUwY1glu6pJ7jJ7FSP5AwGKi2K8EmlO21A&s",
      description: "Online grocery delivery",
    },
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(customers.length / 3))
    }, 4000)
    return () => clearInterval(timer)
  }, [customers.length])

  const getVisibleCustomers = () => {
    const start = currentSlide * 3
    return customers.slice(start, start + 3)
  }

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Esteemed Customers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to partner with India's leading retail and e-commerce companies, delivering premium quality
            agricultural products to millions of customers.
          </p>
        </div>

        {/* Customer Carousel */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleCustomers().map((customer, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    width={200}
                    height={80}
                    className="max-h-16 w-auto object-contain filter hover:grayscale transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{customer.name}</h3>
                <p className="text-gray-600">{customer.description}</p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(customers.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Customer Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Retail Partners</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">99.8%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Supply Chain Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
