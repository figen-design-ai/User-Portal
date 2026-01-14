import React from "react";

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "PRODUCT",
    links: [
      { label: "Design" },
      { label: "Dev Mode" },
      { label: "AI" },
      { label: "Downloads" },
    ],
  },
  {
    title: "PLANS",
    links: [
      { label: "Pricing" },
      { label: "Enterprise" },
      { label: "Organization" },
      { label: "Professional" },
    ],
  },
  {
    title: "USE CASES",
    links: [
      { label: "UI design" },
      { label: "UX design" },
      { label: "Wireframing" },
      { label: "Diagraming" },
      { label: "Prototyping" },
      { label: "Brainstorming" },
      { label: "Online Whiteboard" },
      { label: "AI App Builder" },
      { label: "AI Website Builder" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Blog" },
      { label: "Best Practices" },
      { label: "QR code generator" },
      { label: "Templates" },
      { label: "Resource library" },
      { label: "Support" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Events" },
      { label: "Customers" },
      { label: "Careers" },
      { label: "Investors" },
    ],
  },
];

export const Bottom: React.FC = () => {
  const productSection = footerSections.find((s) => s.title === "PRODUCT");
  const plansSection = footerSections.find((s) => s.title === "PLANS");
  const otherSections = footerSections.filter(
    (s) => s.title !== "PRODUCT" && s.title !== "PLANS"
  );

  return (
    <footer className="bg-[#5e5e5e] text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
          {/* Brand Section */}
          <div className="flex-shrink-0 text-left">
            <h2 className="text-3xl font-bold text-gray-100">FiGen</h2>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 ml-auto">
            {/* PRODUCT and PLANS grouped together */}
            <div className="flex flex-col gap-6 text-right">
              {productSection && (
                <div className="flex flex-col items-end">
                  <h3 className="text-sm font-semibold text-gray-overlay mb-4 uppercase tracking-wide">
                    {productSection.title}
                  </h3>
                  <ul className="space-y-3">
                    {productSection.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href || "#"}
                          className="text-sm text-gray-200 hover:text-white transition-colors cursor-pointer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {plansSection && (
                <div className="flex flex-col items-end">
                  <h3 className="text-sm font-semibold text-gray-overlay mb-4 uppercase tracking-wide">
                    {plansSection.title}
                  </h3>
                  <ul className="space-y-3">
                    {plansSection.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href || "#"}
                          className="text-sm text-gray-200 hover:text-white transition-colors cursor-pointer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Other sections */}
            {otherSections.map((section) => (
              <div key={section.title} className="flex flex-col text-right items-end">
                <h3 className="text-sm font-semibold text-gray-overlay mb-4 uppercase tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href || "#"}
                        className="text-sm text-gray-200 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
