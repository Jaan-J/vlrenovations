import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import type { InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      // EmailJS IDs — update if yours differ
      const SERVICE_ID = "service_s5mfdua";
      const TEMPLATE_ID = "template_7u2s97f";
      const PUBLIC_KEY = "UXXP2XMwgcy8i8qPs";

      // Map your form values to EmailJS template variables
      const subject = "vlrenovation contact form";

      const templateParams = {
        subject,
        name: `${data.firstName} ${data.lastName}`.trim(),
        from_email: data.email,
        company: "-", // include if your template expects it
        phone: data.phone || "-",
        project: data.projectType || "-",
        budget: data.budget || "-",
        message: data.message,
        time: new Date().toLocaleString(),
      };

      // Send from the frontend
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      return res; // keep return so onSuccess still runs
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description:
          "Thank you for your inquiry! We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error?.text ||
          error?.message ||
          "An error occurred while sending your message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home? Contact us today for a free
              consultation and quote. We're here to make your renovation dreams
              a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-light-gray rounded-xl p-8">
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                Request Your Free Estimate
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-charcoal">
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="focus:ring-deep-orange focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-charcoal">
                            Last Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="focus:ring-deep-orange focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-charcoal">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="focus:ring-deep-orange focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-charcoal">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="focus:ring-deep-orange focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-charcoal">
                          Project Type *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="focus:ring-deep-orange focus:border-transparent">
                              <SelectValue placeholder="Select Project Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="kitchen">
                              Kitchen Renovation
                            </SelectItem>
                            <SelectItem value="bathroom">
                              Bathroom Renovation
                            </SelectItem>
                            <SelectItem value="basement">
                              Basement Finishing
                            </SelectItem>
                            <SelectItem value="flooring">
                              Flooring Installation
                            </SelectItem>
                            <SelectItem value="painting">
                              Painting & Drywall
                            </SelectItem>
                            <SelectItem value="staircase">Staircase</SelectItem>
                            <SelectItem value="electricalPlumbing">
                              Electrical & Plumbing
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-charcoal">
                          Budget Range
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger className="focus:ring-deep-orange focus:border-transparent">
                              <SelectValue placeholder="Select Budget Range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-10k">
                              Under $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k-50k">
                              $25,000 - $50,000
                            </SelectItem>
                            <SelectItem value="50k-100k">
                              $50,000 - $100,000
                            </SelectItem>
                            <SelectItem value="over-100k">
                              Over $100,000
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-charcoal">
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Tell us about your renovation project..."
                            className="focus:ring-deep-orange focus:border-transparent resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-deep-orange text-white hover:bg-orange-600 text-lg font-semibold py-4"
                  >
                    {contactMutation.isPending
                      ? "Sending..."
                      : "Send My Request"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll get back to you within 24 hours with your free
                    estimate.
                  </p>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-charcoal text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-deep-orange rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a
                        href="tel:+19055550123"
                        className="text-deep-orange hover:text-orange-300 transition-colors"
                      >
                        (647) 891-8810
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-deep-orange rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <a
                        href="mailto:vincentliu4129@gmail.com"
                        className="text-deep-orange hover:text-orange-300 transition-colors"
                      >
                        vincentliu4129@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-deep-orange rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Service Area</div>
                      <div>
                        Mississauga, ON
                        <br />
                        Greater Toronto Area
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-deep-orange rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: By appointment only
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-deep-orange text-white rounded-xl p-6 text-center">
                <i className="fas fa-exclamation-circle text-3xl mb-3"></i>
                <h4 className="text-xl font-bold mb-2">Emergency Repairs</h4>
                <p className="mb-4">
                  Water damage, electrical issues, or urgent repairs? We're
                  available 24/7 for emergency services.
                </p>
                <a
                  href="tel:+16478918810"
                  className="inline-block bg-white text-deep-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call Emergency Line
                </a>
              </div>
              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-xl h-64 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28893.09346653049!2d-79.642586!3d43.592968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b472dbb030dab%3A0x5037b28c72310a0!2sSquare+One+Shopping+Centre!5e0!3m2!1sen!2sca!4v0000000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
