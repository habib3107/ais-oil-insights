import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Cpu,
  BarChart3
} from "lucide-react";

const WhyUs = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "Proven Industry Expertise",
      description: "15+ years of specialized experience in oil & gas digital transformation with deep understanding of industry challenges.",
      benefits: ["Regulatory Compliance", "Safety Standards", "Industry Best Practices", "Risk Management"],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Latest IoT sensors, edge computing, and AI-driven analytics designed specifically for harsh industrial environments.",
      benefits: ["Latest IoT Hardware", "Edge AI Processing", "Cloud Integration", "Real-time Analytics"],
      color: "tech"
    },
    {
      icon: Clock,
      title: "24/7 Dedicated Support",
      description: "Round-the-clock monitoring and support with guaranteed response times and proactive maintenance.",
      benefits: ["24/7 Monitoring", "1-Hour Response Time", "Predictive Maintenance", "Emergency Support"],
      color: "energy"
    },
    {
      icon: Award,
      title: "Measurable ROI",
      description: "Proven track record of delivering 25-40% operational improvements with clear metrics and reporting.",
      benefits: ["Cost Reduction", "Efficiency Gains", "Performance Metrics", "ROI Tracking"],
      color: "warning"
    }
  ];

  const achievements = [
    { number: "500+", label: "Successful Implementations", description: "Projects completed across major oil & gas companies" },
    { number: "98%", label: "Client Retention Rate", description: "Long-term partnerships built on trust and results" },
    { number: "30%", label: "Average Cost Reduction", description: "Operational savings achieved through our solutions" },
    { number: "99.9%", label: "System Uptime", description: "Reliability you can count on for critical operations" }
  ];

  const certifications = [
    "ISO 27001 Certified",
    "IEC 61508 Functional Safety",
    "API Recommended Practices",
    "OSHA Safety Compliance",
    "NIST Cybersecurity Framework",
    "SOC 2 Type II Certified"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-primary border-primary">
              Why Choose Smart Analytics
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Trusted Partner for Oil & Gas
              <span className="text-primary block">Digital Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              When critical operations demand reliability, expertise, and innovation, 
              industry leaders choose Smart Analytics for their IoT and digital transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="primary-shadow">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="industry-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique combination of industry expertise, cutting-edge technology, and unwavering support 
              makes us the preferred choice for oil & gas digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-0 card-shadow group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${
                      item.color === 'tech' ? 'bg-tech/10' : 
                      item.color === 'energy' ? 'bg-energy/10' : 
                      item.color === 'warning' ? 'bg-warning/10' :
                      'bg-primary/10'
                    }`}>
                      <item.icon className={`h-8 w-8 ${
                        item.color === 'tech' ? 'text-tech' : 
                        item.color === 'energy' ? 'text-energy' : 
                        item.color === 'warning' ? 'text-warning' :
                        'text-primary'
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {item.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-tech flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="industry-section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Track Record</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our results speak for themselves. Here's how we've helped transform oil & gas operations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-energy mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {achievement.label}
                </div>
                <div className="text-white/80 text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="industry-section bg-secondary/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Certified & Compliant
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our solutions meet the highest industry standards for safety, security, and reliability. 
                We maintain rigorous certifications to ensure your operations remain compliant and secure.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-tech flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="primary-shadow">
                View All Certifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 card-shadow p-6 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Standards</h3>
                <p className="text-sm text-muted-foreground">International compliance across all regions</p>
              </Card>
              <Card className="border-0 card-shadow p-6 text-center">
                <Shield className="h-12 w-12 text-tech mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Security First</h3>
                <p className="text-sm text-muted-foreground">End-to-end encryption and data protection</p>
              </Card>
              <Card className="border-0 card-shadow p-6 text-center">
                <Cpu className="h-12 w-12 text-energy mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cutting Edge</h3>
                <p className="text-sm text-muted-foreground">Latest technology and innovation</p>
              </Card>
              <Card className="border-0 card-shadow p-6 text-center">
                <BarChart3 className="h-12 w-12 text-warning mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Data Driven</h3>
                <p className="text-sm text-muted-foreground">Analytics-powered decision making</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industry-section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Join the growing number of oil & gas companies that have chosen Smart Analytics 
              as their trusted partner for digital transformation success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="primary-shadow">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;