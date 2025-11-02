import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp, Shield, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and transparency in all our dealings.",
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "Certified technicians delivering quality workmanship on every project.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to meet your needs.",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Committed to continuous improvement and delivering exceptional results.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Projects Completed" },
    { number: "2000+", label: "Happy Clients" },
    { number: "50+", label: "Trained Technicians" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About OsTech Engineering</h1>
            <p className="text-xl text-muted-foreground">
              Nigeria's trusted partner for professional engineering and maintenance services
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide reliable, affordable, and professional engineering and maintenance services that improve the quality of life for homes, offices, and industries across Nigeria. We strive to be the first choice for all technical and maintenance needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Nigeria's leading engineering and maintenance service provider, known for excellence, innovation, and customer satisfaction. We envision a future where quality technical services are accessible to every Nigerian home and business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded over a decade ago, OsTech Engineering began with a simple mission: to provide reliable and professional technical services to Nigerian homes and businesses. What started as a small team of skilled electricians and plumbers has grown into a comprehensive engineering and maintenance service provider.
              </p>
              <p>
                Today, we serve thousands of clients across Nigeria, from individual homeowners to large commercial estates. Our success is built on a foundation of technical excellence, customer satisfaction, and unwavering commitment to quality.
              </p>
              <p>
                We've expanded our services to include not just reactive repairs, but proactive maintenance plans that help our clients avoid costly breakdowns and ensure their properties remain in optimal condition year-round.
              </p>
              <p>
                Through our partnership with <strong>TechStack Academy</strong>, we're also investing in the future by training the next generation of skilled technicians and engineers, ensuring that quality technical services remain accessible and affordable across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TechStack Academy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-4">TechStack Academy</h2>
                <p className="text-xl text-muted-foreground">
                  Empowering the Next Generation of Technical Professionals
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As part of our commitment to excellence and community development, we operate <strong>TechStack Academy</strong> - a training wing dedicated to developing skilled technicians and engineers.
                </p>
                <p>
                  Our academy offers comprehensive training programs in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Electrical installation and maintenance</li>
                  <li>Plumbing systems and repairs</li>
                  <li>Carpentry and woodwork</li>
                  <li>Building maintenance management</li>
                  <li>IT and technical skills</li>
                </ul>
                <p>
                  By investing in training and development, we're not just building our team - we're contributing to Nigeria's technical workforce and ensuring that quality services remain available for generations to come.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
