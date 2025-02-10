import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#0088cc] to-[#005580] text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center">About Our Church</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#0088cc]">Our Story</h2>
            <p className="text-lg mb-4">
              Explicit Christian Centre was founded with a vision to create a welcoming community where people could
              grow in their faith and make a positive impact in the world.
            </p>
            <p className="text-lg mb-4">
              Over the years, we've grown from a small group to a thriving congregation with multiple ministries and
              outreach programs.
            </p>
            <p className="text-lg">
              Our journey is a testament to God's faithfulness and the power of a community united in love and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 bg-[#f0f9ff]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#0088cc]">Our Vision</h2>
                <p className="text-gray-600">
                  We are God-sensitive and seeker-friendly church in an environment and atmosphere where people's needs
                  are constantly being met; their minds empowered and their spirit fed. We are one big family of
                  believers, bonded together by our fervent love for God.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-[#0088cc]">Our Mission</h2>
                <p className="text-gray-600">Raising unstoppable generations. Empowering Saints. Fulfilling Destiny.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0088cc]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Knowledge",
                description: "Knowledge is the reason for decision. A man's ignorance explains his crisis.",
              },
              {
                title: "Love",
                description:
                  "Love is the foundation of our faith, driving us to serve and care for one another unconditionally.",
              },
              {
                title: "Excellence",
                description: "We pursue excellence in all things, honoring God with our best efforts.",
              },
              {
                title: "Service",
                description:
                  "Serving God is a privilege. It is an opportunity to honor God and live a life of Relevance.",
              },
              {
                title: "Worship",
                description: "Worship is placing appropriate value on someone whose presence you cannot do without.",
              },
              {
                title: "Training",
                description: "Training is required for exploits. A good athlete is a product of an excellent coach.",
              },
            ].map((value) => (
              <Card key={value.title} className="bg-[#0088cc] hover:bg-[#0099e6] transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#0088cc] text-center">Statement of Faith</h2>
            <p className="text-lg mb-4">
              We believe in the authority of the Bible as God's inspired Word. We affirm the Trinity - Father, Son, and
              Holy Spirit. We believe in salvation through faith in Jesus Christ and the transformative power of the
              Holy Spirit in our lives.
            </p>
            <p className="text-lg mb-4">
              We are committed to living out our faith through love, service, and sharing the good news of Jesus Christ
              with our community and the world.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="w-full py-16 bg-[#0088cc] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-lg mb-6">
              We believe that every member of our church family has unique gifts and talents to contribute. Whether
              you're interested in serving, joining a small group, or exploring your faith, there's a place for you
              here.
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

