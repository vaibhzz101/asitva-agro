import Image from "next/image"

export default function Directors() {
  const directors = [
    {
      name: "Amit Gunjal",
      position: "Managing Director & CEO",
      image: "/placeholder.svg?height=300&width=300&text=Rajesh+Kumar",
    },
    {
      name: "Bhanudas Shelke",
      position: "Director - Operations",
      image: "/placeholder.svg?height=300&width=300&text=Priya+Sharma",
    },
  ]

  return (
    <section id="directors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
        </div>

        {/* Directors Grid - Only Image, Name, Position */}
        <div className="grid md:grid-cols-2 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="text-center">
              {/* Director Photo */}
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image src={director.image || "/placeholder.svg"} alt={director.name} fill className="object-cover" />
              </div>

              {/* Director Info - Only Name and Position */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
              <p className="text-green-600 font-semibold text-lg">{director.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
