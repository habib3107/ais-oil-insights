import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "24/7", label: "Support Available", icon: Lightbulb },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We leverage cutting-edge IoT technology and AI-driven analytics to solve complex operational challenges in the oil & gas sector."
    },
    {
      title: "Industry Expertise",
      description: "Our team combines deep technical knowledge with extensive experience in oil & gas operations and regulatory requirements."
    },
    {
      title: "Proven Results",
      description: "Track record of delivering measurable improvements in efficiency, safety, and cost reduction for our clients."
    },
    {
      title: "24/7 Reliability",
      description: "Round-the-clock monitoring and support ensure your critical operations never experience downtime."
    }
  ];

  return (
    <section className="industry-section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Smart Analytics
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pioneering Digital Transformation in Oil & Gas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over 15 years, Smart Analytics IoT Solutions has been at the forefront of 
            digital innovation in the energy sector, helping companies transform their 
            operations through intelligent technology solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 card-shadow group hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To empower oil & gas companies with intelligent IoT solutions that enhance 
              operational efficiency, improve safety standards, and drive sustainable growth 
              in an increasingly digital world.
            </p>
            <div className="space-y-3">
              {["Digital Transformation Leadership", "Safety & Compliance Focus", "Sustainable Operations"].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-tech flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To be the global leader in IoT-driven digital transformation for the energy 
              sector, setting new standards for operational excellence and environmental 
              responsibility through innovative technology solutions.
            </p>
            <div className="space-y-3">
              {["Global Technology Leadership", "Environmental Stewardship", "Industry Innovation"].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-energy flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Why Companies Trust Us</h3>
            <p className="text-lg text-muted-foreground">
              Our core values drive everything we do and define how we partner with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg h-fit">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already revolutionized their oil & gas 
            operations with our proven IoT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-dark primary-shadow">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;