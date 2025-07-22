import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bloodlink.jpg";
import DonorSignupModal from "./modals/DonorSignupModal";
import DemoModal from "./modals/DemoModal";

const HeroSection = () => {
  const [isDonorModalOpen, setIsDonorModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="BloodLink AI Hero"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <div className="w-16 h-16 bg-primary/10 rounded-full blur-xl" />
      </div>
      <div
        className="absolute bottom-32 right-16 opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-24 h-24 bg-medical-blue/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8 animate-fade-in">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Blood Donation Platform
            </span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl pt-10 font-bold mb-6 animate-slide-up">
            <span className="block text-foreground mb-2">Never Let a</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Thalassemia Patient
            </span>
            <span className="block text-foreground">Wait for Blood</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            BloodLink AI predicts donor availability, automates smart matching,
            and drives recurring engagement — ensuring lifesaving blood is
            always available when needed.
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                45s
              </div>
              <div className="text-sm text-muted-foreground">
                Donation Interval
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-medical-blue mb-1">
                2035
              </div>
              <div className="text-sm text-muted-foreground">
                Thalassemia-Free Goal
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-medical-green mb-1">
                95%
              </div>
              <div className="text-sm text-muted-foreground">
                Match Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">AI Assistant</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary shadow-glow hover:shadow-elegant transition-all group"
              onClick={() => setIsDonorModalOpen(true)}
            >
              Start Saving Lives
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/5"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div
            className="flex flex-wrap justify-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center px-4 py-2 bg-card rounded-full shadow-card border border-border">
              <Brain className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium">AI Prediction</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card rounded-full shadow-card border border-border">
              <Users className="h-4 w-4 text-medical-blue mr-2" />
              <span className="text-sm font-medium">Smart Matching</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-card rounded-full shadow-card border border-border">
              <Shield className="h-4 w-4 text-medical-green mr-2" />
              <span className="text-sm font-medium">Privacy First</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <DonorSignupModal
        isOpen={isDonorModalOpen}
        onClose={() => setIsDonorModalOpen(false)}
      />
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
