import { ArrowRight, Leaf, Globe, TrendingUp, Sparkles, Play } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38aec35f1c9a87a9c&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Agricultural field"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Alternative: Image Background (uncomment if you prefer image over video) */}
      {/* 
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
      */}

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full backdrop-blur-sm animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-400/30 rounded-full backdrop-blur-sm animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-12 h-12 bg-green-500/25 rounded-full backdrop-blur-sm animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                <Sparkles size={16} />
                Astitva Agro FPC Ltd.
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                <span className="text-white">Farmers,</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Enrich Futures
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                Rooted in India. Trading with the World. Connecting India's grassroots farming communities with global
                markets for over a decade.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                <div className="text-4xl font-bold text-green-400">10+</div>
                <div className="text-sm text-gray-300 font-medium">Countries Served</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                <div className="text-4xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-300 font-medium">Products</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                <div className="text-4xl font-bold text-emerald-400">10+</div>
                <div className="text-sm text-gray-300 font-medium">Years Experience</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-green-500/50"
              >
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="group border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 backdrop-blur-sm"
              >
                Get Quote
              </Link>
            </div>

            {/* Video Play Button (if using video background) */}
            <div className="flex items-center gap-4 pt-4">
              <button className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all">
                  <Play size={20} className="ml-1" />
                </div>
                <span className="text-sm font-medium">Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Enhanced Hero Illustration */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="group flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Leaf className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white">Fresh Produce</div>
                      <div className="text-sm text-gray-300">Premium Quality</div>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Globe className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white">Global Export</div>
                      <div className="text-sm text-gray-300">Worldwide Reach</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="group flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-white">Smart Trading</div>
                      <div className="text-sm text-gray-300">Best Prices</div>
                    </div>
                  </div>

                  <div className="h-32 bg-gradient-to-br from-green-400/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Quality</div>
                      <div className="text-green-400 font-semibold">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
