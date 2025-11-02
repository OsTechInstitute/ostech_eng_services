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
  Wrench,
  AirVent,
  CheckCircle,
  Monitor,
  Smartphone,
  Cloud,
  Network,
  Settings,
  Code,
  Laptop,
} from "lucide-react";
import electricalService from "@/assets/electrical-service.jpg";
import plumbingService from "@/assets/plumbing-service.jpg";
import carpentryService from "@/assets/carpentry-service.jpg";
import paintingService from "@/assets/painting-service.jpg";
import facilityMaintenance from "@/assets/facility-maintenance.jpg";
import itServices from "@/assets/it-services.jpg";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical Installation & Maintenance",
      image: electricalService,
      description: "Professional electrical services for residential, commercial, and industrial properties.",
      services: [
        "Complete electrical wiring and rewiring",
        "Circuit breaker panel installation and upgrades",
        "Lighting installation and repair",
        "Generator installation and maintenance",
        "Solar panel system installation",
        "Electrical fault finding and repairs",
        "Emergency electrical services",
      ],
      priceRange: "₦15,000 - ₦500,000+",
    },
    {
      icon: Droplets,
      title: "Plumbing Services",
      image: plumbingService,
      description: "Complete plumbing solutions for water supply, drainage, and sewage systems.",
      services: [
        "Pipe installation and repairs",
        "Water heater installation",
        "Toilet and sink installation",
        "Drainage system cleaning",
        "Water treatment system setup",
        "Leak detection and repair",
        "Bathroom and kitchen plumbing",
      ],
      priceRange: "₦10,000 - ₦300,000+",
    },
    {
      icon: Hammer,
      title: "Carpentry & Woodwork",
      image: carpentryService,
      description: "Custom carpentry and furniture solutions for your home or office.",
      services: [
        "Custom furniture design and build",
        "Kitchen cabinet installation",
        "Door and window frames",
        "Wardrobes and closets",
        "Ceiling installation (POP, wood)",
        "Furniture repair and refinishing",
        "Office partitioning",
      ],
      priceRange: "₦20,000 - ₦800,000+",
    },
    {
      icon: Paintbrush,
      title: "Painting & Finishing",
      image: paintingService,
      description: "Professional painting services for interior and exterior surfaces.",
      services: [
        "Interior wall painting",
        "Exterior building painting",
        "Texture and decorative finishes",
        "Waterproofing and sealing",
        "Wood staining and varnishing",
        "Industrial painting",
        "Color consultation",
      ],
      priceRange: "₦8,000/room - ₦500,000+",
    },
    {
      icon: Building2,
      title: "Facility Maintenance",
      image: facilityMaintenance,
      description: "Comprehensive building maintenance and management services.",
      services: [
        "Preventive maintenance schedules",
        "Building system inspections",
        "HVAC maintenance and repair",
        "General repairs and upkeep",
        "Estate management",
        "Emergency response services",
        "24/7 monitoring and support",
      ],
      priceRange: "Custom packages from ₦25,000/month",
    },
    {
      icon: AirVent,
      title: "HVAC & Appliance Repair",
      image: facilityMaintenance,
      description: "Air conditioning, heating, and appliance repair services.",
      services: [
        "AC installation and servicing",
        "Refrigerator repair",
        "Washing machine repair",
        "Microwave and oven repair",
        "Water heater maintenance",
        "Ventilation system installation",
        "Appliance troubleshooting",
      ],
      priceRange: "₦12,000 - ₦200,000+",
    },
    {
      icon: Users,
      title: "Labour Supply",
      image: facilityMaintenance,
      description: "Skilled and unskilled workers for construction and maintenance projects.",
      services: [
        "Skilled technicians (electricians, plumbers, carpenters)",
        "Semi-skilled workers",
        "General laborers",
        "Project-based teams",
        "Long-term staff placement",
        "Emergency workforce",
        "Supervised work teams",
      ],
      priceRange: "₦5,000/day - ₦15,000/day",
    },
    {
      icon: Wrench,
      title: "General Repairs & Maintenance",
      image: facilityMaintenance,
      description: "All-round repair and maintenance services for your property.",
      services: [
        "Door and window repairs",
        "Tile and floor repairs",
        "Roof repairs and waterproofing",
        "Wall plastering and patching",
        "Fence installation and repair",
        "Gutter cleaning and repair",
        "General handyman services",
      ],
      priceRange: "₦8,000 - ₦150,000+",
    },
    {
      icon: Monitor,
      title: "IT Services",
      image: itServices,
      description: "Comprehensive IT solutions from web development to cloud infrastructure and system integration.",
      services: [
        "Website Design & Development - Build fast, responsive, modern websites tailored to business goals",
        "Mobile App Development - Custom Android and iOS apps for efficient customer-business connections",
        "IT Consulting - Expert advice on software choices, digital transformation, and automation",
        "Cloud & DevOps Solutions - Deploy and manage cloud infrastructure with AWS, Azure, or GCP",
        "Network Setup & Maintenance - Professional LAN/Wi-Fi networks, routers, and cabling",
        "System Integration - Seamless connection between different tools and systems",
        "Software Installation & Troubleshooting - Installation and support for business software",
      ],
      priceRange: "₦10,000 - ₦1,200,000+",
      customButtons: [
        { text: "Request Quote", link: "/contact" },
        { text: "Book Consultation", link: "/book" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive engineering and maintenance solutions for homes, offices, and industries across Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button size="lg" className="gradient-primary text-primary-foreground">
                  Book a Service
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                        <p className="text-accent font-semibold">{service.priceRange}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {service.customButtons ? (
                        <>
                          <Link to={service.customButtons[0].link} className="flex-1">
                            <Button className="w-full gradient-accent text-accent-foreground">
                              {service.customButtons[0].text}
                            </Button>
                          </Link>
                          <Link to={service.customButtons[1].link} className="flex-1">
                            <Button variant="outline" className="w-full">
                              {service.customButtons[1].text}
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/book" className="flex-1">
                            <Button className="w-full gradient-accent text-accent-foreground">
                              Book This Service
                            </Button>
                          </Link>
                          <Link to="/contact" className="flex-1">
                            <Button variant="outline" className="w-full">
                              Request Quote
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Multiple Services?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a comprehensive maintenance plan tailored to your needs. Save money with our bundled service packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" className="gradient-primary text-primary-foreground">
                View Maintenance Plans
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
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

export default Services;
