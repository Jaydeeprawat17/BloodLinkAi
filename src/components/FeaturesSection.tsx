import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  MessageSquare, 
  Trophy, 
  Smartphone, 
  Globe,
  Zap,
  Heart,
  Shield,
  Bot,
  Target,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Prediction Engine",
    description: "Machine learning models predict donor availability based on donation cycles, behavior patterns, and health data.",
    badge: "Smart",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "Intelligent algorithm matches patients with optimal nearby donors using blood type, location, and availability.",
    badge: "Precise",
    color: "text-medical-blue",
    bgColor: "bg-medical-blue/10"
  },
  {
    icon: Bot,
    title: "Multilingual AI Assistant",
    description: "24/7 conversational AI in Hindi and English to answer questions and guide both donors and patients.",
    badge: "Helpful",
    color: "text-medical-green",
    bgColor: "bg-medical-green/10"
  },
  {
    icon: Trophy,
    title: "Gamification System",
    description: "Badges, streaks, and milestones encourage recurring donations and build a community of regular donors.",
    badge: "Engaging",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10"
  },
  {
    icon: MessageSquare,
    title: "Smart Notifications",
    description: "Personalized WhatsApp and SMS reminders when donors become eligible, with birthday wishes and motivation.",
    badge: "Personal",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  },
  {
    icon: Globe,
    title: "e-RaktKosh Integration",
    description: "Seamlessly integrates with government systems and Blood Warriors' Blood Bridge for real-time sync.",
    badge: "Connected",
    color: "text-indigo-600",
    bgColor: "bg-indigo-600/10"
  }
];

const stats = [
  {
    icon: Clock,
    value: "2x Faster",
    description: "Patient-donor matching speed"
  },
  {
    icon: Heart,
    value: "85%",
    description: "Donor retention rate improvement"
  },
  {
    icon: Shield,
    value: "100%",
    description: "HIPAA compliant security"
  },
  {
    icon: Zap,
    value: "Real-time",
    description: "Emergency response system"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20">
            <Zap className="h-3 w-3 mr-1" />
            Powered by AI
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionary Features for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Life-Saving Impact
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI platform addresses every aspect of blood donation management, 
            from prediction and matching to engagement and retention.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-lg ${stat.icon === Clock ? 'bg-primary/10' : 
                  stat.icon === Heart ? 'bg-medical-blue/10' :
                  stat.icon === Shield ? 'bg-medical-green/10' : 'bg-yellow-600/10'} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-6 w-6 ${stat.icon === Clock ? 'text-primary' : 
                    stat.icon === Heart ? 'text-medical-blue' :
                    stat.icon === Shield ? 'text-medical-green' : 'text-yellow-600'}`} />
                </div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary/5 border-primary/20 shadow-glow inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Blood Donation?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join hospitals and blood banks already using BloodLink AI to save more lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg shadow-glow hover:shadow-elegant transition-all font-medium">
                  Schedule Demo
                </button>
                <button className="px-6 py-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all font-medium">
                  View Case Studies
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;