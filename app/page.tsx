import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pasy.jpg-CRdI6yx4yQa2xR3ZJZsrkxoWzmo1Hz.jpeg"
            alt="Church congregation during worship"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Increased overlay opacity for better text visibility */}
        </div>
        <div className="relative z-10 container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Welcome to Explicit Christian Centre
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Raising unstoppable generations. Empowering Saints. Fulfilling Destiny.
            </p>
            <div className="space-x-4">
              <Link href="/contact" passHref>
                <Button variant="secondary" size="lg" className="font-semibold">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="w-full py-12 bg-[#f0f9ff]">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center space-x-4 text-[#0088cc]">
            <Clock className="h-6 w-6" />
            <p className="text-lg font-semibold">Join us every Sunday: 10:00 AM - 12:00 PM</p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#0088cc]">Welcome to Our Church Family</h2>
            <p className="text-lg mb-6">
              At Explicit Christian Centre, we believe in the power of community, faith, and love. Whether you're a
              long-time believer or just starting your spiritual journey, you'll find a warm and welcoming home here.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0088cc]">Our Ministries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "eGroups",
                image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&auto=format&fit=crop&q=60",
                description: "Connect & Grow Together",
              },
              {
                name: "eKids",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=60",
                description: "Nurturing Young Faith",
              },
              {
                name: "Youth",
                image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&auto=format&fit=crop&q=60",
                description: "Empowering Next Generation",
              },
              {
                name: "Outreach",
                image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=60",
                description: "Serving Our Community",
              },
            ].map((ministry) => (
              <Card key={ministry.name} className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={ministry.image || "/placeholder.svg"}
                      alt={ministry.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0088cc]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                      <p className="text-center font-medium">{ministry.description}</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl p-4 text-center">{ministry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0088cc]">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Summer Bible Camp",
                description: "A week-long adventure in faith for kids aged 7-12.",
              },
              {
                title: "Community Outreach Day",
                description: "Join us as we serve our local community through various projects.",
              },
              {
                title: "Worship Night",
                description: "An evening of praise and worship under the stars.",
              },
            ].map((event, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-[#0088cc] mb-4" />
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p>{event.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0088cc]">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "This church has been a blessing to my family. We've grown so much in our faith journey.",
                author: "Sarah M.",
              },
              {
                quote: "The youth program here is amazing. It's helped my teenagers stay connected to their faith.",
                author: "David L.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-right">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="w-full py-16 bg-[#0088cc] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Support Our Ministry</h2>
            <p className="text-lg mb-6">
              Your generous donations help us continue our mission and serve our community. Every contribution, no
              matter the size, makes a difference.
            </p>
            <Link href="/contact" passHref>
              <Button variant="secondary" size="lg">
                Find Your Place
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

