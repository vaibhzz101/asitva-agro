import Image from "next/image"

export default function Products() {
  const productCategories = [
    {
      title: "Grains & Cereals",
      description: "Premium quality rice, wheat, corn, barley, and other cereal grains",
      image: "https://img.cdnx.in/389805/basmati-rice-1723575831222.webp?width=600&format=webp",
      products: ["Basmati Rice", "Wheat", "Corn", "Barley", "Oats", "Millet"],
    },
    {
      title: "Pulses & Legumes",
      description: "High-protein pulses including lentils, chickpeas, and beans",
      image: "https://extension.illinois.edu/sites/default/files/styles/blog_article_image/public/blog_article_image/NW%20Blog%20Images%20%2814%29.png.avif?itok=c2vQ9M1l",
      products: ["Chickpeas", "Lentils", "Black Beans", "Kidney Beans", "Green Peas", "Pigeon Peas"],
    },
    {
      title: "Spices & Herbs",
      description: "Aromatic spices and herbs sourced from the finest regions",
      image: "https://t4.ftcdn.net/jpg/01/02/58/91/240_F_102589163_hk02O92vzEYP0rZbVyvDTbkje1GaUDk1.jpg",
      products: ["Turmeric", "Cumin", "Coriander", "Cardamom", "Black Pepper", "Red Chili"],
    },
    {
      title: "Fresh Produce",
      description: "Fresh fruits and vegetables with extended shelf life",
      image: "https://media.istockphoto.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8=",
      products: ["Onions", "Potatoes", "Tomatoes", "Mangoes", "Bananas", "Pomegranates"],
    },
    {
      title: "Oil Seeds",
      description: "Premium oil seeds for extraction and processing",
      image: "https://media.istockphoto.com/id/155284344/photo/sunflower-oil.jpg?s=612x612&w=0&k=20&c=Cr7WLo3oOSNvqUZJoPJ_PHik-l8nBgfwWrMK_DX4EWM=",
      products: ["Sesame Seeds", "Sunflower Seeds", "Mustard Seeds", "Groundnuts", "Safflower", "Castor Seeds"],
    },
    {
      title: "Processed Foods",
      description: "Value-added processed agricultural products",
      image: "https://healthybuddha.in/image/catalog/Recentblogs/blogs/dryfruitsandnuts.jpg",
      products: ["Rice Flour", "Wheat Flour", "Spice Powders", "Pickles", "Dried Fruits", "Snacks"],
    },
  ]

 return (
    <section id="products" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
          alt="Agricultural field background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-white/90"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-white/70 to-emerald-50/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🌾 Our Products
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Agricultural Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium agricultural products, carefully sourced and quality-tested to meet
            international standards.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/50 hover:bg-white/90"
            >
              <div className="relative h-48">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, productIndex) => (
                      <span key={productIndex} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-green-600/90 backdrop-blur-sm text-white p-8 rounded-2xl border border-green-500/50">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Product?</h3>
            <p className="text-green-100 mb-6">
              We can source and supply custom agricultural products based on your specific requirements.
            </p>
            <a
              href="#contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


