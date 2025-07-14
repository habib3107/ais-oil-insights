import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-primary border-primary">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive IoT Solutions for
              <span className="text-primary block">Oil & Gas Operations</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From edge computing to real-time dashboards, our complete suite of IoT services 
              transforms every aspect of your oil & gas operations for maximum efficiency and safety.
            </p>
          </div>
        </div>
      </section>
      
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;