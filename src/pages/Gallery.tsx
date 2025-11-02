import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import electricalService from "@/assets/electrical-service.jpg";
import plumbingService from "@/assets/plumbing-service.jpg";
import carpentryService from "@/assets/carpentry-service.jpg";
import paintingService from "@/assets/painting-service.jpg";
import facilityMaintenance from "@/assets/facility-maintenance.jpg";

const Gallery = () => {
  const projects = [
    {
      title: "Commercial Electrical Installation",
      category: "Electrical",
      image: electricalService,
      description: "Complete electrical system installation for 3-story office building in Lagos",
    },
    {
      title: "Luxury Home Plumbing",
      category: "Plumbing",
      image: plumbingService,
      description: "Modern plumbing system with water treatment for luxury residence in Abuja",
    },
    {
      title: "Custom Office Furniture",
      category: "Carpentry",
      image: carpentryService,
      description: "Custom-built executive office furniture and cabinets",
    },
    {
      title: "Estate Exterior Painting",
      category: "Painting",
      image: paintingService,
      description: "Complete exterior painting of 20-unit residential estate",
    },
    {
      title: "Industrial Facility Maintenance",
      category: "Facility",
      image: facilityMaintenance,
      description: "Ongoing maintenance contract for manufacturing facility",
    },
    {
      title: "Residential Electrical Upgrade",
      category: "Electrical",
      image: electricalService,
      description: "Complete rewiring and panel upgrade for family home",
    },
    {
      title: "Restaurant Kitchen Plumbing",
      category: "Plumbing",
      image: plumbingService,
      description: "Commercial kitchen plumbing installation with grease traps",
    },
    {
      title: "Hotel Room Renovations",
      category: "Carpentry",
      image: carpentryService,
      description: "Custom furniture and fixtures for 15-room boutique hotel",
    },
    {
      title: "Office Interior Painting",
      category: "Painting",
      image: paintingService,
      description: "Modern color scheme for tech startup office space",
    },
    {
      title: "Shopping Mall Maintenance",
      category: "Facility",
      image: facilityMaintenance,
      description: "24/7 facility maintenance for large shopping complex",
    },
    {
      title: "Solar Installation Project",
      category: "Electrical",
      image: electricalService,
      description: "10KW solar system installation for residential property",
    },
    {
      title: "Swimming Pool Plumbing",
      category: "Plumbing",
      image: plumbingService,
      description: "Complete pool filtration and plumbing system installation",
    },
  ];

  const categories = ["All", "Electrical", "Plumbing", "Carpentry", "Painting", "Facility"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Explore our completed projects and see the quality of our workmanship
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs (for future enhancement) */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-primary/10 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-smooth cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                  <span className="text-accent text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust OsTech Engineering for their maintenance needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book">
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-smooth">
                Book a Service
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth">
                Request Quote
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
