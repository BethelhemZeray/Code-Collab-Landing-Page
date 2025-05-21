import Link from "next/link";
import { config } from "../constants/footer";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaRegEnvelope
} from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  const { 
    socialLinks, 
    copyright, 
    companyInfo,
    quickLinks,
    productLinks,
    resourceLinks
  } = config.footer;

  const iconComponents = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    youtube: FaYoutube,
    discord: FaDiscord,
    email: FaRegEnvelope
  };

  const renderLinkColumn = (title: string, links: Array<{name: string, url: string}>) => (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-gray-50">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <Logo className="group-hover:scale-105 transition-transform duration-300" />
            </Link>
            <p className="text-gray-300 text-sm">{companyInfo.description}</p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link, index) => {
                const Icon = iconComponents[link.icon as keyof typeof iconComponents];
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300 group"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-125 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>

          {renderLinkColumn("Company", quickLinks)}
          {renderLinkColumn("Product", productLinks)}
          {renderLinkColumn("Resources", resourceLinks)}
        </div>

        <div className="border-t border-gray-800 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {copyright}
          </p>
          <div className="flex space-x-6">
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
            >
              Terms of Service
            </Link>
            <Link 
              href="/cookies" 
              className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}