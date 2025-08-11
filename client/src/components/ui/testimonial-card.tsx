interface TestimonialCardProps {
  name: string;
  service: string;
  testimonial: string;
  rating?: number;
}

export default function TestimonialCard({ 
  name, 
  service, 
  testimonial, 
  rating = 5 
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-500">
          {[...Array(rating)].map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial}"</p>
      <div className="font-semibold text-charcoal">- {name}</div>
      <div className="text-sm text-gray-500">{service}</div>
    </div>
  );
}
