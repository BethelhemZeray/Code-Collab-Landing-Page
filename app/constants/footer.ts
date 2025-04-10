

export const config = {
  footer: {
    copyright: `© ${new Date().getFullYear()} Code Collab. All rights reserved.`,
    companyInfo: {
      description: "Building tools to help teams work better together."
    },
    socialLinks: [
      { name: "GitHub", url: "https://github.com/codecollab", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com/company/codecollab", icon: "linkedin" },
      { name: "Twitter", url: "https://twitter.com/codecollab", icon: "twitter" }
    ],
    quickLinks: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Contact", url: "/contact" }
    ],
    productLinks: [
      { name: "Features", url: "/features" }, 
      { name: "Pricing", url: "/pricing" },
      { name: "Integrations", url: "/integrations" }
    ],
    resourceLinks: [
      { name: "Documentation", url: "/docs" },
      { name: "API Reference", url: "/api" },
      { name: "Community", url: "/community" }
    ],

    featureLinks: [
      { 
        name: "Live Collaboration", 
        url: "/features/live-collab",
        icon: "code"
      },
      { 
        name: "Version Control", 
        url: "/features/version-control", 
        icon: "git"
      },
      { 
        name: "Code Review", 
        url: "/features/code-review",
        icon: "review"
      }
    ]
  }
};