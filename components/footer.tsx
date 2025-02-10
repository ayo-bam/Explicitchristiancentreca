import Link from "next/link"

export function Footer() {
  const sections = [
    {
      title: "About",
      links: ["Mission", "Vision", "Values", "Ministries"],
    },
    {
      title: "Media",
      links: ["Sermons", "Watch Online", "Worship", "Podcast", "Store"],
    },
    {
      title: "Get Involved",
      links: ["Get Baptized", "Join an eGroup", "Volunteer"],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-blue-400">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Explicit Christian Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

