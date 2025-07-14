import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-primary border-primary">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Discuss Your
              <span className="text-primary block">Digital Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to revolutionize your oil & gas operations? Get in touch with our experts 
              for a free consultation and discover how IoT can transform your business.
            </p>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;