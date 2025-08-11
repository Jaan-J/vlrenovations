import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";

export default function Home() {
  const services = [
    {
      title: "Kitchen Remodels",
      description: "Complete kitchen transformations with custom cabinets, countertops, and modern appliances.",
      icon: "fas fa-hammer",
      features: ["Custom cabinets", "Premium countertops", "Modern appliances"],
    },
    {
      title: "Bathroom Renovations",
      description: "Luxury bathroom makeovers featuring premium fixtures, tiles, and modern designs.",
      icon: "fas fa-bath",
      features: ["Premium fixtures", "Luxury tiles", "Modern designs"],
    },
    {
      title: "Basement Finishing",
      description: "Transform your basement into functional living space with professional finishing services.",
      icon: "fas fa-home",
      features: ["Complete framing", "Moisture solutions", "Entertainment areas"],
    },
    {
      title: "Flooring Installation",
      description: "Hardwood, laminate, tile, and luxury vinyl flooring installation and refinishing.",
      icon: "fas fa-th-large",
      features: ["Hardwood installation", "Luxury vinyl", "Tile work"],
    },
    {
      title: "Painting & Drywall",
      description: "Interior and exterior painting services with drywall repair and finishing.",
      icon: "fas fa-paint-roller",
      features: ["Interior & exterior", "Drywall repair", "Premium finishes"],
    },
    {
      title: "Electrical & Plumbing",
      description: "Reliable electrical and plumbing solutions including installations, repairs, and upgrades to keep your home safe and efficient.",
      icon: "fas fa-tools",
      features: [
        "Wiring installation & electrical repairs",
        "Lighting, outlets & panel upgrades",
        "Plumbing repairs & fixture installations"
      ],
    },
    {
      title: "Staircase",
      description: "Custom staircase design, installation, and refinishing to enhance your home’s style, safety, and functionality.",
      icon: "fas fa-tools",
      features: [
        "New staircase construction & installation",
        "Stair refinishing & repairs",
        "Handrails, balusters & custom designs"
      ],
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Mississauga's Trusted<br />
              <span className="text-deep-orange">Renovation Pros</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your home with our expert renovation services. From kitchens to basements, we deliver quality craftsmanship that exceeds expectations across Mississauga and the GTA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-deep-orange text-white hover:bg-orange-600 text-lg font-semibold px-8 py-4 shadow-lg">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-black hover:bg-white hover:text-charcoal text-lg font-semibold px-8 py-4"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">Our Renovation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">From concept to completion, we handle every aspect of your home renovation project.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
              >
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust Badges & Service Area */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-6">
              Serving Mississauga & The surrounding GTA
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>✓ Mississauga</div>
              <div>✓ Toronto</div>
              <div>✓ Brampton</div>
              <div>✓ Oakville</div>
              <div>✓ Burlington</div>
              <div>✓ Milton</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
