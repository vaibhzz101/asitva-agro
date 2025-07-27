import { Truck, FileText, Globe, Shield, Clock, Headphones } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "International Trading",
      description: "Comprehensive import-export services connecting global markets with premium agricultural products.",
      features: ["Export Documentation", "Import Clearance", "Market Analysis", "Price Negotiation"],
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "End-to-end logistics solutions ensuring timely and safe delivery of your products.",
      features: ["Warehousing", "Transportation", "Cold Storage", "Last-mile Delivery"],
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete documentation assistance for smooth international trade operations.",
      features: ["Export Licenses", "Certificates of Origin", "Quality Certificates", "Shipping Documents"],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to ensure products meet international standards.",
      features: ["Lab Testing", "Quality Inspection", "Certification", "Compliance Monitoring"],
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable delivery schedules with real-time tracking and updates.",
      features: ["Scheduled Deliveries", "Real-time Tracking", "Flexible Timing", "Emergency Delivery"],
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock customer support to address all your queries and concerns.",
      features: ["Phone Support", "Email Support", "Live Chat", "Technical Assistance"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agriculture trading services designed to meet all your import-export needs with reliability
            and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-green-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Trading Process</h3>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Inquiry</h4>
              <p className="text-sm text-gray-600">Submit your product requirements and specifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quotation</h4>
              <p className="text-sm text-gray-600">Receive detailed quotation with pricing and terms</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Processing</h4>
              <p className="text-sm text-gray-600">Order processing and quality assurance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
              <p className="text-sm text-gray-600">Timely delivery with complete documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
