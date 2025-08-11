import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  features, 

  price 
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mx-auto mb-4">
        <i className={`${icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-bold text-charcoal text-center mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      
      <div className="space-y-2 mb-6 text-sm">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <i className="fas fa-check text-deep-orange mr-2"></i>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="text-center mb-4">

        <div className="text-deep-orange font-semibold">{price}</div>
      </div>
      
      <Link href="/contact">
        <Button className="w-full bg-deep-orange text-white hover:bg-orange-600 font-medium">
          Request Estimate
        </Button>
      </Link>
    </div>
  );
}
