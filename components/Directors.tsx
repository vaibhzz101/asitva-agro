import Image from "next/image"
import amitGunjalImg from "../public/amit-gunjal.jpg";
import bhanudasShelkeImg from "../public/bhanudas-shelke.jpg";
import shantilalHonImg from "../public/shantilal-hon.jpg";
import sampatDigheImg from "../public/sampat-dighe.jpg";

export default function Directors() {
  const directors = [
    {
      name: "Amit Gunjal",
      position: "Managing Director & CEO",
      image: '',
    },
    {
      name: "Bhanudas Shelke",
      position: "Director - Operations",
      image: bhanudasShelkeImg,
    },
    // {
    //   name: "Shantilal Hon",
    //   position: "Business Advisor",
    //   image: shantilalHonImg,
    // },
    // {
    //   name: "Sampat Dighe",
    //   position: "Marketing Director",
    //   image: sampatDigheImg,
    // },
  ];

  return (
    <section id="directors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {directors.map((director, index) => (
            <div key={index} className="text-center">
              {/* Director Photo */}
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image src={director.image} alt={director.name} fill className="object-cover" />
              </div>

              {/* Director Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
              <p className="text-green-600 font-semibold text-lg">{director.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
