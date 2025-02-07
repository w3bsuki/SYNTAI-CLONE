import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

const footerLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
]

const socialLinks = [
  { name: "Twitter", href: "#", Icon: Twitter },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "GitHub", href: "#", Icon: Github },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-10 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                className="text-zinc-400 hover:text-zinc-100 transition-all duration-200 hover:scale-110"
                aria-label={name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} AI Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

