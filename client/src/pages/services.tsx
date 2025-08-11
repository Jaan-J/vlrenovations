import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";

export default function Services() {
  const additionalServices = [
    {
      title: "Flooring Installation",
      description: "Professional installation of hardwood, laminate, tile, and luxury vinyl flooring with expert finishing.",
      icon: "fas fa-th-large",
      features: [
        "Hardwood installation & refinishing",
        "Laminate & luxury vinyl plank",
        "Ceramic & porcelain tile"
      ],
      price: "Custom Quote"
    },
    {
      title: "Painting & Drywall",
      description: "Complete interior and exterior painting services with drywall repair, texturing, and premium finishes.",
      icon: "fas fa-paint-roller",
      features: [
        "Interior & exterior painting",
        "Drywall repair & texturing",
        "Crown molding & trim work"
      ],
      price: "Custom Quote"
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
      price: "Custom Quote"
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
      price: "Custom Quote"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Renovation Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "VL Renovation",
      "image": "https://www.vlrenovation.ca/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main Street",
        "addressLocality": "Mississauga",
        "addressRegion": "ON",
        "postalCode": "L5B 1M1",
        "addressCountry": "CA"
      },
      "telephone": "+1-905-555-0123",
      "email": "info@vlrenovation.ca",
      "url": "https://www.vlrenovation.ca"
    },
    "areaServed": [
      { "@type": "Place", "name": "Mississauga" },
      { "@type": "Place", "name": "GTA" },
      { "@type": "Place", "name": "Toronto" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Renovation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Remodels",
            "description": "Custom kitchen renovation including cabinets, countertops, appliances, lighting, and flooring."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Renovations",
            "description": "Luxury bathroom remodeling with walk-in showers, soaking tubs, tile work, and heated floors."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basement Finishing",
            "description": "Complete basement renovations with framing, waterproofing, flooring, and lighting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flooring Installation",
            "description": "Installation of hardwood, laminate, tile, and luxury vinyl flooring."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Painting & Drywall",
            "description": "Interior/exterior painting and drywall repair with premium finishes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical & Plumbing",
            "description": "Wiring, lighting, panel upgrades, and plumbing repairs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Staircase",
            "description": "Custom staircase construction, refinishing, and design."
          }
        }
      ]
    }
  };

  return (
    <div className="pt-16">
      <Helmet>
        <title>Our Renovation Services | VL Renovation</title>
        <meta
          name="description"
          content="Explore VL Renovation's professional home renovation services in Mississauga and the GTA, including kitchens, bathrooms, basements, flooring, painting, and more."
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">Our Renovation Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive renovation services that transform your house into your dream home. Each project is tailored to your vision and built to last.
            </p>
          </div>

          {/* Kitchen Remodels */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-hammer text-white text-2xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal">Kitchen Remodels</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">Transform the heart of your home with our comprehensive kitchen renovation services. From modern makeovers to traditional designs, we create kitchens that blend functionality with stunning aesthetics.</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Custom cabinet design and installation</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Premium countertop materials (quartz, granite, marble)</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Appliance selection and integration</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Lighting design and electrical work</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Flooring and backsplash installation</span></div>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6">
                  <div><div className="text-gray-500">Depending on scope and materials</div></div>
                  <div className="text-right"><div className="text-gray-500">Free consultation included</div></div>
                </div>

                <Link href="/contact">
                  <Button className="bg-deep-orange text-white hover:bg-orange-600 font-medium px-8 py-3">
                    Request Kitchen Estimate
                  </Button>
                </Link>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&h=600"
                  alt="Modern kitchen renovation with white cabinets"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Bathroom Renovations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&h=600"
                  alt="Luxury bathroom renovation with marble"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-bath text-white text-2xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal">Bathroom Renovations</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">Create your personal spa with our luxury bathroom renovation services. We specialize in both full remodels and targeted updates that maximize space and enhance comfort.</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Walk-in showers and soaking tubs</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Premium tile and stone installation</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Custom vanities and storage solutions</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Heated flooring systems</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Modern plumbing and fixtures</span></div>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6">
                  <div><div className="text-gray-500">Most projects completed quickly</div></div>
                  <div className="text-right"><div className="text-gray-500">Competitive pricing guaranteed</div></div>
                </div>

                <Link href="/contact">
                  <Button className="bg-deep-orange text-white hover:bg-orange-600 font-medium px-8 py-3">
                    Request Bathroom Estimate
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Basement Finishing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-home text-white text-2xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal">Basement Finishing</h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">Unlock your home's potential with professional basement finishing. Whether you need extra living space, a home office, or entertainment area, we create comfortable, functional basement spaces.</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Complete framing and insulation</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Moisture and waterproofing solutions</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Flooring installation (carpet, vinyl, tile)</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Electrical and lighting design</span></div>
                  <div className="flex items-start"><i className="fas fa-check text-deep-orange mt-1 mr-3"></i><span>Built-in storage and entertainment areas</span></div>
                </div>

                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-6">
                  <div><div className="text-gray-500">Varies by square footage</div></div>
                  <div className="text-right"><div className="text-gray-500">Great return on investment</div></div>
                </div>

                <Link href="/contact">
                  <Button className="bg-deep-orange text-white hover:bg-orange-600 font-medium px-8 py-3">
                    Request Basement Estimate
                  </Button>
                </Link>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=600"
                  alt="Finished basement with entertainment area"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="w-full md:w-[calc(33.333%-2rem)]">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
