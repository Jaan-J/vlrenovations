import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  category: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ProjectCard({ 
  category, 
  location, 
  imageUrl, 
  imageAlt 
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={imageUrl} 
        alt={imageAlt} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-deep-orange text-white hover:bg-orange-600">
            {category}
          </Badge>
          <span className="text-gray-500 text-sm">{location}</span>
        </div>
        <div className="border-t pt-4">
          <div className="text-sm text-gray-500">
          </div>
        </div>
      </div>
    </div>
  );
}
