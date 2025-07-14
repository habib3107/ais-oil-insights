import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Youtube,
  ArrowRight,
  Globe
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Why Choose Us", path: "/why-us" },
    { name: "Our Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "IoT Solutions", path: "/services#iot" },
    { name: "Edge Computing", path: "/services#edge" },
    { name: "Real-time Dashboards", path: "/services#dashboards" },
    { name: "Remote Monitoring", path: "/services#monitoring" },
    { name: "Digital Transformation", path: "/services#digital" },
  ];

  const industries = [
    "Oil & Gas",
    "Refineries",
    "Petrochemicals",
    "Pipeline Operations",
    "Offshore Drilling",
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-dark py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Stay Updated with Industry Insights
              </h3>
              <p className="text-white/80 text-lg">
                Get the latest trends, case studies, and IoT innovations in oil & gas delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-energy hover:bg-energy/90 text-white">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white text-primary p-2 rounded-lg">
                  <span className="text-xl font-bold">S-AIS</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Smart Analytics</div>
                  <div className="text-sm text-white/70">IoT Solutions</div>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Leading provider of IoT solutions and digital transformation services 
                for the oil & gas industry. Empowering smarter, safer, and more efficient operations.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-white/80 hover:text-white transition-colors hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-tech mt-1 flex-shrink-0" />
                  <div className="text-white/80">
                    <p>Dallas, TX 75201</p>
                    <p>Energy Corridor, Suite 500</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-energy flex-shrink-0" />
                  <div className="text-white/80">
                    <p>+1 (555) 123-4567</p>
                    <p className="text-sm">24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-warning flex-shrink-0" />
                  <div className="text-white/80">
                    <p>info@s-ais.com</p>
                    <p className="text-sm">Response within 1 hour</p>
                  </div>
                </div>
              </div>

              {/* Industries Served */}
              <div className="mt-8">
                <h5 className="font-semibold mb-3">Industries We Serve</h5>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/10 px-2 py-1 rounded text-white/80"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © {currentYear} Smart Analytics IoT Solutions (S-AIS). All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white">
                <Globe className="h-4 w-4 mr-2" />
                EN | ES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;