import logo from '../../assets/logos/Content.png'

const footerSections = [
    {
        title: "Product",
        links: [
            { name: "Overview", href: "#" },
            { name: "Features", href: "#" },
            { name: "Solutions", href: "#", isNew: true },
            { name: "Tutorials", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "Releases", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press", href: "#" },
            { name: "News", href: "#" },
            { name: "Media kit", href: "#" },
            { name: "Contact", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "#" },
            { name: "Newsletter", href: "#" },
            { name: "Events", href: "#" },
            { name: "Help centre", href: "#" },
            { name: "Tutorials", href: "#" },
            { name: "Support", href: "#" },
        ],
    },
    {
        title: "Use cases",
        links: [
            { name: "Startups", href: "#" },
            { name: "Enterprise", href: "#" },
            { name: "Government", href: "#" },
            { name: "SaaS centre", href: "#" },
            { name: "Marketplaces", href: "#" },
            { name: "Ecommerce", href: "#" },
        ],
    },
    {
        title: "Social",
        links: [
            { name: "Twitter", href: "#" },
            { name: "LinkedIn", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "GitHub", href: "#" },
            { name: "AngelList", href: "#" },
            { name: "Dribbble", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Terms", href: "#" },
            { name: "Privacy", href: "#" },
            { name: "Cookies", href: "#" },
            { name: "Licenses", href: "#" },
            { name: "Settings", href: "#" },
            { name: "Contact", href: "#" },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-base text-gray-500 hover:text-gray-900">
                                            {link.name}
                                            {link.isNew && (
                                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    New
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img src={logo} alt="" />
                            <p className="ml-2 text-base font-medium text-gray-500">Untitled UI</p>
                        </div>
                    </div>
                    <p className="text-base text-gray-400">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
