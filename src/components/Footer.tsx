import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                BloodLink AI
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Revolutionizing blood donation through AI-powered prediction, matching, and engagement 
              to ensure no Thalassemia patient waits for lifesaving blood.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integration Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">White Papers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">hello@bloodlinkai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Mumbai, India</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-sm">Partnership Inquiries</h4>
              <a 
                href="mailto:partnerships@bloodlinkai.com" 
                className="text-primary hover:text-primary-glow transition-colors text-sm"
              >
                partnerships@bloodlinkai.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 BloodLink AI. All rights reserved. Built with ❤️ for Blood Warriors.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;