import { MapPin, Plane, Ship, Truck } from "lucide-react"

export default function GlobalPresence() {
  const exportCountries = [
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Netherlands",
    "Belgium",
    "Spain",
    "Canada",
    "Australia",
    "Japan",
    "South Korea",
    "Singapore",
    "Malaysia",
    "Thailand",
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Oman",
  ]

  const regions = [
    {
      name: "North America",
      countries: ["USA", "Canada"],
      icon: Plane,
      color: "bg-blue-500",
    },
    {
      name: "Europe",
      countries: ["UK", "Germany", "France", "Italy", "Netherlands"],
      icon: Ship,
      color: "bg-green-500",
    },
    {
      name: "Asia Pacific",
      countries: ["Japan", "South Korea", "Singapore", "Malaysia"],
      icon: Truck,
      color: "bg-orange-500",
    },
    {
      name: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
      icon: MapPin,
      color: "bg-purple-500",
    },
  ]

  return (
    <section id="global" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Presence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We export premium agricultural products to over 15 countries worldwide, building strong partnerships across
            continents.
          </p>
        </div>

        {/* Regional Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className={`w-12 h-12 ${region.color} rounded-lg flex items-center justify-center mb-4`}>
                <region.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h3>
              <div className="space-y-1">
                {region.countries.map((country, countryIndex) => (
                  <div key={countryIndex} className="text-sm text-gray-600">
                    {country}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* World Map Representation */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Countries We Export To</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {exportCountries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <MapPin className="text-green-600" size={16} />
                <span className="text-sm font-medium text-gray-800">{country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Statistics */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-blue-100">Export Destinations</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-green-100">Tons Exported Monthly</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold mb-2">99%</div>
            <div className="text-orange-100">On-time Delivery Rate</div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Expand Your Market Reach</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Partner with us to access new markets and expand your agricultural business globally. We provide
              end-to-end support for international trade.
            </p>
            <a
              href="#contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
