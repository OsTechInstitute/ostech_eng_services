import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Zap } from "lucide-react";

const Pricing = () => {
  const maintenancePlans = [
    {
      name: "Basic Home Care",
      price: "₦25,000",
      period: "/month",
      description: "Perfect for small homes and apartments",
      features: [
        "2 maintenance visits per month",
        "Electrical system check",
        "Plumbing inspection and minor repairs",
        "Emergency call-out priority",
        "10% discount on additional services",
        "Phone/WhatsApp support",
      ],
      popular: false,
    },
    {
      name: "Standard Care",
      price: "₦50,000",
      period: "/month",
      description: "Ideal for family homes and small offices",
      features: [
        "Weekly maintenance visits",
        "Comprehensive electrical & plumbing checks",
        "Minor repairs included",
        "HVAC system maintenance",
        "24/7 emergency response",
        "15% discount on additional services",
        "Priority scheduling",
        "Quarterly detailed inspection report",
      ],
      popular: true,
    },
    {
      name: "Premium Facility Plan",
      price: "₦100,000+",
      period: "/month",
      description: "Complete solution for offices and estates",
      features: [
        "Daily facility monitoring",
        "24/7 dedicated support team",
        "All repairs and maintenance included",
        "Preventive maintenance schedule",
        "HVAC, electrical, plumbing coverage",
        "Emergency response within 1 hour",
        "20% discount on additional services",
        "Monthly detailed reports",
        "Dedicated account manager",
        "Annual facility audit",
      ],
      popular: false,
    },
  ];

  const oneTimeServices = [
    {
      category: "Electrical Services",
      services: [
        { name: "Basic wiring repair", price: "₦15,000 - ₦50,000" },
        { name: "Circuit breaker installation", price: "₦20,000 - ₦80,000" },
        { name: "Complete house rewiring (3-bedroom)", price: "₦200,000 - ₦500,000" },
        { name: "Generator installation", price: "₦50,000 - ₦150,000" },
        { name: "Solar panel system (basic)", price: "₦300,000 - ₦1,000,000+" },
      ],
    },
    {
      category: "Plumbing Services",
      services: [
        { name: "Pipe repair/replacement", price: "₦10,000 - ₦40,000" },
        { name: "Toilet installation", price: "₦15,000 - ₦30,000" },
        { name: "Water heater installation", price: "₦25,000 - ₦60,000" },
        { name: "Complete bathroom plumbing", price: "₦80,000 - ₦200,000" },
        { name: "Water treatment system", price: "₦150,000 - ₦400,000" },
      ],
    },
    {
      category: "Carpentry & Woodwork",
      services: [
        { name: "Custom wardrobe (6ft)", price: "₦80,000 - ₦200,000" },
        { name: "Kitchen cabinets (full set)", price: "₦150,000 - ₦500,000" },
        { name: "Door installation", price: "₦20,000 - ₦50,000" },
        { name: "POP ceiling (per room)", price: "₦40,000 - ₦100,000" },
        { name: "Office desk (custom)", price: "₦50,000 - ₦150,000" },
      ],
    },
    {
      category: "Painting Services",
      services: [
        { name: "Single room painting", price: "₦8,000 - ₦15,000" },
        { name: "3-bedroom flat (complete)", price: "₦80,000 - ₦150,000" },
        { name: "Exterior building painting", price: "₦100,000 - ₦500,000+" },
        { name: "Texture/decorative finish", price: "₦15,000 - ₦30,000/room" },
        { name: "Waterproofing treatment", price: "₦50,000 - ₦200,000" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose a maintenance plan or pay for individual services. No hidden fees, just honest pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Maintenance Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save money with our comprehensive maintenance packages
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {maintenancePlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-2 border-primary shadow-xl scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-primary mb-1">
                    {plan.price}
                    <span className="text-lg text-muted-foreground font-normal">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/book">
                    <Button
                      className={`w-full mt-6 ${
                        plan.popular
                          ? "gradient-accent text-accent-foreground"
                          : "gradient-primary text-primary-foreground"
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Services Pricing */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One-Time Service Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for individual services. All prices include materials and labor unless stated otherwise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {oneTimeServices.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                        <span className="text-sm font-medium">{service.name}</span>
                        <span className="text-sm text-accent font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              * Prices may vary based on project complexity and materials required. Contact us for a detailed quote.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Inspection Fee Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Professional Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Not sure what you need? Book a professional inspection for just ₦3,000. Our expert will assess your property and provide a detailed quote.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                *Inspection fee is waived if you proceed with services worth ₦50,000 or more
              </p>
              <a
                href="https://paystack.com/pay/ostech-inspection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-accent text-accent-foreground">
                  Pay Inspection Fee (₦3,000)
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
