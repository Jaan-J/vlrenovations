import { useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Makeover",
      category: "kitchen",
      location: "Mississauga", 
      description: "Complete transformation featuring custom white cabinets, quartz countertops, and premium stainless steel appliances.",
      materials: "Quartz, Hardwood, Stainless Steel",
      duration: "3 weeks",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Modern kitchen renovation with marble countertops"
    },
    {
      id: 2,
      title: "Contemporary Kitchen Design",
      category: "kitchen",
      location: "Brampton",
      description: "Sleek design with dark cabinetry, granite countertops, and integrated appliances for a sophisticated look.",
      materials: "Granite, Oak, Ceramic",
      duration: "4 weeks",
      imageUrl: "https://images.unsplash.com/photo-1556909114-9c5efaac8f3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Contemporary kitchen with dark cabinets"
    },
    {
      id: 3,
      title: "Luxury Master Bath",
      category: "bathroom",
      location: "Oakville",
      description: "Spa-like retreat featuring marble tiles, freestanding tub, and walk-in shower with premium fixtures.",
      materials: "Marble, Porcelain, Chrome",
      duration: "2.5 weeks", 
      imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Luxury bathroom with marble finishes"
    },
    {
      id: 4,
      title: "Modern Guest Bathroom",
      category: "bathroom",
      location: "Toronto",
      description: "Clean, contemporary design with subway tile, floating vanity, and efficient use of space.",
      materials: "Ceramic, Laminate, Brass",
      duration: "2 weeks",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Modern bathroom with subway tile"
    },
    {
      id: 5,
      title: "Entertainment Basement",
      category: "basement",
      location: "Milton",
      description: "Complete basement transformation into entertainment space with bar area, media room, and game area.",
      materials: "Vinyl Plank, Drywall, LED",
      duration: "6 weeks",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Finished basement entertainment room"
    },
    {
      id: 6,
      title: "Home Office Basement",
      category: "basement",
      location: "Mississauga",
      description: "Professional home office space created in finished basement with built-in storage and modern lighting.",
      materials: "Laminate, Drywall, LED",
      duration: "4 weeks",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Home office in finished basement"
    },
    {
      id: 7,
      title: "Hardwood Floor Installation",
      category: "flooring",
      location: "Burlington",
      description: "Premium oak hardwood flooring installation throughout main floor with custom staining and finishing.",
      materials: "Oak Hardwood, Polyurethane",
      duration: "1.5 weeks",
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Hardwood flooring in modern living room"
    },
    {
      id: 8,
      title: "Interior Paint Makeover",
      category: "painting",
      location: "Mississauga",
      description: "Complete interior painting with modern color palette, accent walls, and premium paint finishes.",
      materials: "Premium Paint, Primer",
      duration: "1 week",
      imageUrl: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      imageAlt: "Modern interior painting with neutral colors"
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "kitchen", label: "Kitchen" },
    { key: "bathroom", label: "Bathroom" },
    { key: "basement", label: "Basement" },
    { key: "flooring", label: "Flooring" },
    { key: "painting", label: "Painting" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">Our Project Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our portfolio of completed renovations featuring stunning before and after transformations across Mississauga and the GTA.</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={activeFilter === filter.key 
                  ? "bg-deep-orange text-white hover:bg-orange-600" 
                  : "bg-gray-100 text-charcoal hover:bg-gray-200"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
