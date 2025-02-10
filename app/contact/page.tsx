"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Replace the URL with your actual Formspree endpoint
    const formEndpoint = "https://formspree.io/f/xanqdyoq"
    const data = new FormData()
    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("phone", formData.phone)
    data.append("message", formData.message)

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      })

      if (response.ok) {
        alert("Your message has been sent successfully.")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        alert("There was an error sending your message, please try again.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("There was an error sending your message, please try again.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#0088cc] to-[#005580] text-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="mt-4 text-xl text-center max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any questions, prayer requests, or to get involved in our
            community.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-[#f0f9ff]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0088cc]">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#0088cc] mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>1740 - 24 Ave SE Calgary T2G 1P9</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#0088cc] mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>+1 825-994-7840</p>
                      <p>+1 825-747-9451</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#0088cc] mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>contact@explicitchristiancentre.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0088cc]">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0088cc] hover:bg-[#006699] text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
