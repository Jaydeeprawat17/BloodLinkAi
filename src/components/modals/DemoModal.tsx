import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Brain, Users, Zap, X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [currentDemo, setCurrentDemo] = useState<string | null>(null);

  const demoVideos = [
    {
      id: 'ai-prediction',
      title: 'AI Donor Prediction',
      description: 'See how our AI predicts donor availability with 95% accuracy',
      icon: Brain,
      duration: '3:45'
    },
    {
      id: 'smart-matching',
      title: 'Smart Patient Matching',
      description: 'Watch real-time matching between patients and donors',
      icon: Users,
      duration: '2:30'
    },
    {
      id: 'engagement',
      title: 'Donor Engagement System',
      description: 'Explore gamification and automated notifications',
      icon: Zap,
      duration: '4:15'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            BloodLink AI Platform Demo
          </DialogTitle>
          <DialogDescription>
            Experience how AI transforms blood donation management
          </DialogDescription>
        </DialogHeader>

        {!currentDemo ? (
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {demoVideos.map((demo) => (
              <div
                key={demo.id}
                className="bg-gradient-card rounded-lg p-6 border border-border hover:shadow-elegant transition-all cursor-pointer group"
                onClick={() => setCurrentDemo(demo.id)}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <demo.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{demo.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{demo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{demo.duration}</span>
                  <Button size="sm" className="bg-gradient-primary">
                    <Play className="h-3 w-3 mr-1" />
                    Watch
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {demoVideos.find(d => d.id === currentDemo)?.title}
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentDemo(null)}
              >
                <X className="h-4 w-4 mr-2" />
                Back to Demos
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Demo video would play here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Interactive demo showcasing {demoVideos.find(d => d.id === currentDemo)?.title}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-primary">
              Request Live Demo
            </Button>
            <Button variant="outline">
              Download Case Study
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;