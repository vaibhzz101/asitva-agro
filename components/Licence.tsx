import Image from "next/image"

export default function LicensesCertifications() {
  const certifications = [
    {
      name: "DGFT",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUh5r10glWzEzlUtErod6wOEdVWOue_O4IQ&s",
    },
    {
      name: "APEDA",
      logo: "https://images.seeklogo.com/logo-png/35/1/apeda-logo-png_seeklogo-352119.png",
    },
    {
      name: "ISO",
      logo: "https://www.shutterstock.com/image-vector/certified-company-certificate-iso-90012015-260nw-2461204389.jpg",
    },
    {
      name: "FSSAI",
      logo: "https://cdn.prod.website-files.com/62551fa7bee8db16e944f95d/62df96d8e483793a8c5887f9_Sahyadri%20Farms_Certifications_800x800_26-07-2022-01.webp",
    },
    {
      name: "FIEO",
      logo: "https://gayatriglobal.com/publish/gayatriglobal/assets/images/certi-logos/gayatri_global_FIEO.png",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Licenses & Certifications</h2>
        </div>

        {/* Certifications Grid - Only Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full shadow-lg flex items-center justify-center p-4 hover:shadow-xl transition-shadow">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={`${cert.name} Logo`}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
