import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import heroImage from "@/assets/hero-oilgas.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">We are Industry Leaders</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Oil & Gas with{" "}
              <span className="text-energy">Smart IoT Solutions</span>
            </h1>
            
            <p className="text-xl leading-relaxed mb-8 text-white/90">
              Revolutionize your operations with cutting-edge IoT technology, 
              real-time monitoring, and advanced analytics. Drive efficiency, 
              safety, and profitability in the digital age of energy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 primary-shadow text-lg px-8 py-4"
              >
                Discover Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          {/* Right Column - Contact Cards */}
          <div className="space-y-4">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white p-6 card-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Head Office</h3>
                  <p className="text-white/80">Dallas, TX 75201</p>
                  <p className="text-white/80">Energy Corridor</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-tech/10 backdrop-blur-md border-white/20 text-white p-6 card-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-tech/30 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                  <p className="text-white/80">24/7 Support Available</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-energy/10 backdrop-blur-md border-white/20 text-white p-6 card-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-energy/30 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-white/80">Monday - Friday</p>
                  <p className="text-white/80">8:00 AM - 6:00 PM CST</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-1 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
        <p className="text-sm">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;