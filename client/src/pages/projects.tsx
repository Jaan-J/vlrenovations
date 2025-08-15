import { useState } from "react";
import { Button } from "@/components/ui/button";

// Dynamically import all images from public/images/projects
const images = import.meta.glob("/images/projects/*.{jpg,jpeg,png}", {
  eager: true,
  as: "url",
});

// Auto-generate projects from images
const projects = Object.entries(images).map(([path, url], index) => {
  const filename = path.split("/").pop() || "";
  const [category] = filename.split("_"); // e.g. kitchen_1.jpg -> kitchen

  return {
    id: index + 1,
    category,
    imageUrl: url,
    imageAlt: `${category.charAt(0).toUpperCase() + category.slice(1)} renovation project photo`,
  };
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "kitchen", label: "Kitchen" },
    { key: "bathroom", label: "Bathroom" },
    { key: "flooring", label: "Flooring & Stairs" },
    { key: "painting", label: "Painting" },
    { key: "basement", label: "Basement" }, // ✅ New category
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of completed renovations across Mississauga
              and the GTA.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={
                  activeFilter === filter.key
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
              <div
                key={project.id}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(project.imageUrl)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged project"
            className="max-w-5xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
