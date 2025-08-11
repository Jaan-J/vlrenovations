import TestimonialCard from "@/components/ui/testimonial-card";

export default function About() {
  const testimonials = [
    {
      name: "Sarah M.",
      service: "Kitchen Renovation",
      testimonial: "VL Renovation transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible!"
    },
    {
      name: "Mike T.", 
      service: "Basement Finishing",
      testimonial: "Professional, punctual, and exceeded all expectations. Our basement is now our favorite room in the house."
    },
    {
      name: "Jennifer L.",
      service: "Bathroom Renovation", 
      testimonial: "From start to finish, the team was amazing. Our bathroom renovation was completed on time and within budget."
    },
    {
      name: "David R.",
      service: "Complete Home Renovation",
      testimonial: "Exceptional craftsmanship and customer service. I wouldn't hesitate to recommend VL Renovation to anyone."
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">About VL Renovation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Building dreams, one renovation at a time. Learn about our story, values, and the team behind Mississauga's most trusted renovation company.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Company Story */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>Starting in 2014, VL Renovation began as a small family business with a simple mission: to transform houses into dream homes with uncompromising quality and craftsmanship.</p>
                <p>Over the years, we've completed hundreds of successful renovations across Mississauga and the GTA, building lasting relationships with homeowners who trust us with their most important investment.</p>
                <p>Today, our experienced team continues to uphold the highest standards of workmanship, using premium materials and innovative techniques to exceed expectations on every project.</p>
              </div>
            </div>
            
            {/* Team Photo */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="VL Renovation professional team" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-deep-orange text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
                11+ Years Experience
              </div>
            </div>
          </div>
          
          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality First</h3>
                <p className="text-gray-600">We never compromise on materials or workmanship. Every project is completed to the highest standards.</p>
              </div>
              
              <div className="text-center bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Trust & Transparency</h3>
                <p className="text-gray-600">Clear communication, honest pricing, and reliable timelines. You'll always know what to expect.</p>
              </div>
              
              <div className="text-center bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-deep-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-600">Your vision drives our work. We listen, collaborate, and deliver results that exceed your expectations.</p>
              </div>
            </div>
          </div>
          
          {/* Client Testimonials */}
          <div>
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
