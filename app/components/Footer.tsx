import Link from "next/link";
import { config } from "../constants/footer";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons from React Icons

export default function Footer() {
  const { socialLinks, copyright, callToAction } = config.footer;

  // Map icon names to React Icons components
  const iconComponents = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-6">
        {/* Call-to-Action */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          {callToAction}
        </h2>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => {
            const Icon =
              iconComponents[link.icon as keyof typeof iconComponents];
            return (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                <Icon className="w-8 h-8" /> {/* Render the icon */}
              </Link>
            );
          })}
        </div>

        {/* Line Separator */}
        <div className="w-full">
          <hr className="w-full border-t border-gray-700 my-6" />
        </div>
        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">{copyright}</p>
      </div>
    </footer>
  );
}
