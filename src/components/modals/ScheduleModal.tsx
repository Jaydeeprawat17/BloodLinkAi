import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Building, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: 'demo' | 'consultation';
}

const ScheduleModal = ({ isOpen, onClose, type = 'demo' }: ScheduleModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    preferredDate: '',
    preferredTime: '',
    requirements: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: `${type === 'demo' ? 'Demo' : 'Consultation'} Scheduled`,
      description: `We'll contact you within 24 hours to confirm your ${type}.`,
    });
    
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      role: '',
      preferredDate: '',
      preferredTime: '',
      requirements: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Calendar className="h-6 w-6 text-primary mr-2" />
            Schedule {type === 'demo' ? 'Demo' : 'Consultation'}
          </DialogTitle>
          <DialogDescription>
            {type === 'demo' 
              ? 'Book a personalized demo of BloodLink AI platform'
              : 'Schedule a consultation to discuss your specific needs'
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Phone Number
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <Label htmlFor="organization" className="flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Organization *
              </Label>
              <Input
                id="organization"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                placeholder="Hospital / Blood Bank / NGO"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="role">Your Role</Label>
            <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="doctor">Doctor / Physician</SelectItem>
                <SelectItem value="administrator">Hospital Administrator</SelectItem>
                <SelectItem value="blood-bank-manager">Blood Bank Manager</SelectItem>
                <SelectItem value="it-manager">IT Manager</SelectItem>
                <SelectItem value="ngo-coordinator">NGO Coordinator</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Preferred Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="time" className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Preferred Time
              </Label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                  <SelectItem value="10-11">10:00 AM - 11:00 AM</SelectItem>
                  <SelectItem value="11-12">11:00 AM - 12:00 PM</SelectItem>
                  <SelectItem value="2-3">2:00 PM - 3:00 PM</SelectItem>
                  <SelectItem value="3-4">3:00 PM - 4:00 PM</SelectItem>
                  <SelectItem value="4-5">4:00 PM - 5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="requirements">
              {type === 'demo' ? 'Specific Areas of Interest' : 'Consultation Requirements'}
            </Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => handleInputChange('requirements', e.target.value)}
              placeholder={type === 'demo' 
                ? 'What aspects of BloodLink AI are you most interested in seeing?'
                : 'Tell us about your current challenges and what you hope to achieve'
              }
              rows={3}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button type="submit" className="bg-gradient-primary flex-1">
              Schedule {type === 'demo' ? 'Demo' : 'Consultation'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;