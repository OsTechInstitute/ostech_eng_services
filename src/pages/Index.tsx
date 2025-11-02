import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Zap,
  Droplets,
  Hammer,
  Paintbrush,
  Building2,
  Users,
  CheckCircle,
  Shield,
  Clock,
  Star,
  Monitor,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import electricalService from "@/assets/electrical-service.jpg";
import plumbingService from "@/assets/plumbing-service.jpg";
import carpentryService from "@/assets/carpentry-service.jpg";
import paintingService from "@/assets/painting-service.jpg";
import facilityMaintenance from "@/assets/facility-maintenance.jpg";
import itServices from "@/assets/it-services.jpg";

const Index = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical Installation",
      description: "Professional electrical wiring, panel upgrades, and repairs",
      image: electricalService,
      price: "From ₦15,000",
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      description: "Water system installation, repairs, and maintenance",
      image: plumbingService,
      price: "From ₦10,000",
    },
    {
      icon: Hammer,
      title: "Carpentry Works",
      description: "Custom furniture, doors, cabinets, and woodwork",
      image: carpentryService,
      price: "From ₦20,000",
    },
    {
      icon: Paintbrush,
      title: "Painting & Finishing",
      description: "Interior and exterior painting for homes and offices",
      image: paintingService,
      price: "From ₦8,000/room",
    },
    {
      icon: Building2,
      title: "Facility Maintenance",
      description: "Complete building maintenance and management",
      image: facilityMaintenance,
      price: "Custom Quote",
    },
    {
      icon: Users,
      title: "Labour Supply",
      description: "Skilled and unskilled workers for your projects",
      image: facilityMaintenance,
      price: "From ₦5,000/day",
    },
    {
      icon: Monitor,
      title: "IT Services",
      description: "Web development, mobile apps, cloud solutions, and IT consulting",
      image: itServices,
      price: "From ₦10,000",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Experienced Professionals",
      description: "Over 10 years of excellence in engineering services",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All work follows strict safety standards and regulations",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency response available",
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all services",
    },
  ];

  const testimonials = [
    {
      name: "Chinedu Okafor",
      role: "Homeowner, Lagos",
      text: "OsTech fixed my electrical issues quickly and professionally. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amina Mohammed",
      role: "Business Owner, Abuja",
      text: "Their maintenance plan keeps our office running smoothly. Great service!",
      rating: 5,
    },
    {
      name: "Tunde Adeyemi",
      role: "Estate Manager",
      text: "Professional, affordable, and reliable. OsTech is our go-to for all maintenance needs.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Engineering & Maintenance Services in Nigeria
              </h1>
              <p className="text-xl text-muted-foreground">
                Reliable. Affordable. Professional.
              </p>
              <p className="text-lg text-muted-foreground">
                Top-quality electrical installations, plumbing, carpentry, painting, and facility maintenance for homes, offices, and industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book">
                  <Button size="lg" className="w-full sm:w-auto gradient-primary text-primary-foreground hover:opacity-90 transition-smooth text-lg px-8">
                    Book a Service
                  </Button>
                </Link>
                <a
                  href="https://paystack.com/pay/ostech-inspection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8">
                    Pay Inspection Fee (₦3,000)
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Professional technicians at work"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">24/7 Emergency Service</p>
                <p className="text-2xl font-bold">+234 812 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering and maintenance solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-smooth border-2 hover:border-primary">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-smooth">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="gradient-accent text-accent-foreground hover:opacity-90 transition-smooth">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose OsTech?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering excellence in every project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-smooth border-2 hover:border-primary">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-smooth">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a service today or schedule a free inspection. Our expert technicians are ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
