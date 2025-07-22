import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Heart,
  Target,
  Zap,
  Globe,
  Award,
  Calendar,
  Shield
} from "lucide-react";
import ScheduleModal from './modals/ScheduleModal';
import DonorSignupModal from './modals/DonorSignupModal';

const metrics = [
  {
    icon: Users,
    value: "10,000+",
    label: "Lives Saved Annually",
    description: "Projected impact with full deployment",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Clock,
    value: "75%",
    label: "Faster Response Time",
    description: "Compared to traditional methods",
    color: "text-medical-blue",
    bgColor: "bg-medical-blue/10"
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "Donor Retention Rate",
    description: "Through gamification & engagement",
    color: "text-medical-green",
    bgColor: "bg-medical-green/10"
  },
  {
    icon: Target,
    value: "95%",
    label: "Match Accuracy",
    description: "AI-powered compatibility scoring",
    color: "text-purple-600",
    bgColor: "bg-purple-600/10"
  }
];

const achievements = [
  {
    icon: Award,
    title: "Blood Warriors Partnership",
    description: "Aligned with the mission to eliminate Thalassemia by 2035",
    status: "Active"
  },
  {
    icon: Globe,
    title: "e-RaktKosh Integration",
    description: "Seamless connection with government blood bank network",
    status: "In Progress"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Full healthcare data protection and privacy standards",
    status: "Certified"
  },
  {
    icon: Calendar,
    title: "24/7 Availability",
    description: "Round-the-clock AI monitoring and emergency response",
    status: "Live"
  }
];

const testimonials = [
  {
    quote: "BloodLink AI has revolutionized how we manage blood donations. We can now predict donor availability with 95% accuracy.",
    author: "Dr. Sarah Patel",
    role: "Hematologist, Apollo Hospital",
    avatar: "👩‍⚕️"
  },
  {
    quote: "The gamification features have increased our regular donor base by 300%. Donors love the engagement and recognition.",
    author: "Raj Kumar",
    role: "Blood Bank Manager, AIIMS",
    avatar: "👨‍💼"
  },
  {
    quote: "For Thalassemia patients like my daughter, this platform means peace of mind. We know blood will be available when needed.",
    author: "Priya Sharma",
    role: "Parent & Patient Advocate",
    avatar: "👩‍👧"
  }
];

const ImpactSection = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isDonorModalOpen, setIsDonorModalOpen] = useState(false);

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20">
            <TrendingUp className="h-3 w-3 mr-1" />
            Measurable Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Healthcare
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              One Life at a Time
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from hospitals and blood banks using BloodLink AI to create 
            a more reliable and efficient blood donation ecosystem.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-full ${metric.bgColor} mb-6 group-hover:scale-110 transition-transform`}>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {metric.value}
                </div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary/10 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                        <achievement.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={achievement.status === 'Live' || achievement.status === 'Active' || achievement.status === 'Certified' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {achievement.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What Healthcare Professionals Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-primary/5 border-primary/20 shadow-glow inline-block max-w-2xl">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-primary mx-auto mb-6 animate-pulse" />
              <h3 className="text-2xl font-bold mb-4">
                Join the Movement to End Blood Shortages
              </h3>
              <p className="text-muted-foreground mb-6">
                Be part of the solution that ensures no Thalassemia patient ever waits for blood again. 
                Together, we can achieve Blood Warriors' vision of a Thalassemia-free world by 2035.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-primary shadow-glow hover:shadow-elegant transition-all"
                  onClick={() => setIsDonorModalOpen(true)}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/20"
                  onClick={() => setIsScheduleModalOpen(true)}
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ScheduleModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)}
        type="consultation"
      />
      <DonorSignupModal 
        isOpen={isDonorModalOpen} 
        onClose={() => setIsDonorModalOpen(false)} 
      />
    </section>
  );
};

export default ImpactSection;