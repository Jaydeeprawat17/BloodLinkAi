import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Stethoscope } from "lucide-react";
import HospitalModal from "./modals/HospitalModal";
import DonorSignupModal from "./modals/DonorSignupModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHospitalModalOpen, setIsHospitalModalOpen] = useState(false);
  const [isDonorModalOpen, setIsDonorModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
              <Heart className="h-6 w-6 text-primary-foreground animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              BloodLink AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#impact"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Impact
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-primary/20"
              onClick={() => setIsHospitalModalOpen(true)}
            >
              <Stethoscope className="h-4 w-4 mr-2" />
              For Hospitals
            </Button>
            <Button
              className="bg-gradient-primary shadow-glow hover:shadow-elegant transition-all"
              onClick={() => setIsDonorModalOpen(true)}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                How It Works
              </a>
              <a
                href="#impact"
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                Impact
              </a>
              <a
                href="#contact"
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </a>
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-primary/20"
                  onClick={() => {
                    setIsHospitalModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <Stethoscope className="h-4 w-4 mr-2" />
                  For Hospitals
                </Button>
                <Button
                  className="w-full bg-gradient-primary shadow-glow"
                  onClick={() => {
                    setIsDonorModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <HospitalModal
        isOpen={isHospitalModalOpen}
        onClose={() => setIsHospitalModalOpen(false)}
      />
      <DonorSignupModal
        isOpen={isDonorModalOpen}
        onClose={() => setIsDonorModalOpen(false)}
      />
    </header>
  );
};

export default Header;
