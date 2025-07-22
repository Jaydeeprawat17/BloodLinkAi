import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Brain, 
  Users, 
  MessageSquare, 
  ArrowRight,
  CheckCircle,
  Smartphone,
  Heart
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Data Collection & Analysis",
    description: "AI collects and analyzes donor patterns, health records, and behavioral data to build comprehensive donor profiles.",
    details: [
      "Past donation cycles tracking",
      "Location and mobility patterns",
      "Health eligibility windows",
      "Response rate analytics"
    ],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    number: "02",
    icon: Brain,
    title: "Predictive Intelligence",
    description: "Machine learning algorithms predict when donors will be available and likely to respond to donation requests.",
    details: [
      "Availability forecasting",
      "Response probability scoring",
      "Optimal timing predictions",
      "Health status monitoring"
    ],
    color: "text-medical-blue",
    bgColor: "bg-medical-blue/10"
  },
  {
    number: "03",
    icon: Users,
    title: "Smart Matching Engine",
    description: "Intelligent system matches patients with the best available donors based on multiple compatibility factors.",
    details: [
      "Blood type compatibility",
      "Geographic proximity",
      "Availability windows",
      "Historical reliability"
    ],
    color: "text-medical-green",
    bgColor: "bg-medical-green/10"
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Engagement & Follow-up",
    description: "Personalized communication and gamification keep donors engaged and motivated for recurring donations.",
    details: [
      "WhatsApp/SMS notifications",
      "Gamification rewards",
      "Progress tracking",
      "Community building"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  }
];

const workflow = [
  "Emergency blood request received",
  "AI identifies optimal donors instantly",
  "Personalized notifications sent",
  "Real-time coordination with donors",
  "Successful donation completed",
  "Follow-up and appreciation sent"
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-medical-blue/20">
            <Brain className="h-3 w-3 mr-1" />
            AI-Powered Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How BloodLink AI
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Transforms Lives
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our sophisticated AI system works behind the scenes to ensure every Thalassemia patient 
            gets the blood they need, when they need it.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex items-center mr-6">
                    <div className="text-4xl font-bold text-muted-foreground/20 mr-4">
                      {step.number}
                    </div>
                    <div className={`p-3 rounded-lg ${step.bgColor} group-hover:scale-110 transition-transform`}>
                      <step.icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-medical-green mr-3 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workflow Timeline */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Emergency Response Workflow</h3>
            <p className="text-muted-foreground">From emergency to donation in minutes, not hours</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflow.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-medical-blue/10 rounded-lg mr-4">
                  <Smartphone className="h-6 w-6 text-medical-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Mobile-First Design</h3>
                  <p className="text-muted-foreground text-sm">Accessible to rural and urban donors</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Progressive Web App (PWA) technology ensures the platform works seamlessly 
                on any device, even with limited internet connectivity.
              </p>
              <Button variant="outline" size="sm" className="border-medical-blue/20">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-medical-green/10 rounded-lg mr-4">
                  <Heart className="h-6 w-6 text-medical-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Privacy & Security</h3>
                  <p className="text-muted-foreground text-sm">HIPAA compliant data protection</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                End-to-end encryption and consent-first architecture ensure donor and patient 
                data remains secure and private at all times.
              </p>
              <Button variant="outline" size="sm" className="border-medical-green/20">
                Security Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;