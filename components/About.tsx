import { Eye, Users, Award, Leaf, Globe2, TrendingUp, Heart } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf size={16} />
            About Us
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Astitva Agro Farmer Producer Company Ltd.</h2>
          <p className="text-2xl text-green-600 font-semibold mb-8">Rooted in India. Trading with the World.</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-green-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For over a decade, <span className="font-semibold text-green-600">Astitva Agro FPC Ltd.</span> has been a
              dynamic force in agricultural import, export, and sourcing. We are not just traders—we are{" "}
              <span className="font-semibold">connectors</span>. We link India's grassroots farming communities with
              global markets, creating a win-win for both producers and buyers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Built on <span className="font-semibold text-green-600">integrity, quality, and innovation</span>, our
              operations are streamlined to deliver agri-commodities with unmatched consistency and compliance. With a
              growing network of trusted farmers and international clients, we ensure every deal is a step forward for
              Indian agriculture.
            </p>
          </div>
        </div>

        {/* Company Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Users size={16} />
              Company Bio
            </div>
            <h3 className="text-3xl font-bold text-gray-900">A Decade of Agricultural Excellence</h3>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Founded in <span className="font-semibold text-green-600">2014</span>, Astitva Agro FPC Ltd. is a
                leading player in the agri-trade ecosystem, focused on connecting farm produce with demand-driven global
                markets.
              </p>
              <p className="leading-relaxed">
                We specialize in{" "}
                <span className="font-semibold">high-quality sourcing, export logistics, and import facilitation</span>
                —built around farmer empowerment and supply chain transparency.
              </p>
              <p className="leading-relaxed">
                With a strong presence in both domestic and international trade corridors, our model creates{" "}
                <span className="font-semibold text-green-600">economic value from farm to freight</span>.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold mb-2">2014</div>
              <div className="text-green-100">Founded</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-orange-100">Countries</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-purple-100">Happy Farmers</div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Eye size={16} />
              Our Vision
            </div>
            <h3 className="text-4xl font-bold mb-6">India's Most Trusted Agricultural Trading Bridge</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Elevating farmer incomes, delivering world-class produce, and shaping a transparent future for global
              agri-commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe2 className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Global Marketplace</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                A global marketplace where Indian farmers compete without borders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Quality Sourcing</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                A sourcing model that rewards quality, traceability, and ethical trade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Smart Future</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                A technology-driven future where agri-business is smart, scalable, and sustainable.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Heart className="text-red-300" size={20} />
              <span className="text-lg font-semibold">
                At Astitva Agro, we don't just move crops—we move agriculture forward.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
