import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  BarChart3, 
  Monitor, 
  Radio, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Radio,
      title: "IoT in Oil & Gas",
      description: "Smart sensors and connected devices for real-time field monitoring and asset optimization.",
      features: ["Wireless Sensor Networks", "Asset Tracking", "Predictive Maintenance", "Remote Monitoring"],
      color: "tech",
      badge: "Popular"
    },
    {
      icon: Cpu,
      title: "Edge Analytics",
      description: "Process data at the source for faster insights and reduced latency in critical operations.",
      features: ["Real-time Processing", "Local Intelligence", "Reduced Bandwidth", "Edge Computing"],
      color: "primary",
      badge: "Advanced"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive visualizations and KPI monitoring for data-driven decision making.",
      features: ["Custom Dashboards", "Live Data Streams", "Alert Systems", "Mobile Access"],
      color: "energy",
      badge: "Essential"
    },
    {
      icon: Monitor,
      title: "Remote Field Monitoring",
      description: "24/7 surveillance and control of remote assets with automated alert systems.",
      features: ["24/7 Monitoring", "Automated Alerts", "Video Surveillance", "Environmental Tracking"],
      color: "warning",
      badge: "New"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 30%",
    "Increase equipment uptime by 25%",
    "Improve safety compliance by 40%",
    "Enable predictive maintenance",
    "Real-time decision making",
    "Scalable cloud infrastructure"
  ];

  return (
    <section className="industry-section bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Services We Provide
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            We Create Digital Opportunities for Oil & Gas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your oil and gas operations with cutting-edge IoT solutions, 
            advanced analytics, and real-time monitoring systems designed for the energy sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 card-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${service.color}/10`}>
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${service.color === 'tech' ? 'bg-tech/10 text-tech' : 
                      service.color === 'energy' ? 'bg-energy/10 text-energy' : 
                      service.color === 'warning' ? 'bg-warning/10 text-warning' :
                      'bg-primary/10 text-primary'}`}
                  >
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-tech flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-primary text-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Why Choose Our IoT Solutions?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-tech flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="text-4xl font-bold text-energy mb-2">500+</div>
                <div className="text-white/80">Successful Projects</div>
              </div>
              <div className="mb-8">
                <div className="text-4xl font-bold text-tech mb-2">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 primary-shadow"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;