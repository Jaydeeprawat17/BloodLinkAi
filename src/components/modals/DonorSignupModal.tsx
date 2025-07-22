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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, User, MapPin, Calendar, Phone, Mail, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DonorSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonorSignupModal = ({ isOpen, onClose }: DonorSignupModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    bloodType: '',
    city: '',
    state: '',
    lastDonation: '',
    medicalConditions: '',
    emergencyContact: '',
    notifications: true,
    privacyConsent: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    if (!formData.privacyConsent) {
      toast({
        title: "Privacy Consent Required",
        description: "Please accept the privacy policy to continue.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Welcome to BloodLink AI!",
      description: "Your donor profile has been created. You'll receive notifications about donation opportunities.",
    });
    
    onClose();
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      bloodType: '',
      city: '',
      state: '',
      lastDonation: '',
      medicalConditions: '',
      emergencyContact: '',
      notifications: true,
      privacyConsent: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const indianStates = [
    'Andhra Pradesh', 'Assam', 'Bihar', 'Delhi', 'Gujarat', 'Haryana',
    'Karnataka', 'Kerala', 'Maharashtra', 'Punjab', 'Rajasthan',
    'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 'Other'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Heart className="h-6 w-6 text-primary mr-2" />
            Join as a Life Saver
          </DialogTitle>
          <DialogDescription>
            Step {step} of 3: {step === 1 ? 'Personal Information' : step === 2 ? 'Medical Details' : 'Preferences & Consent'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {step === 1 && (
            <>
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
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="18-65 years"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
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
                <div>
                  <Label htmlFor="phone" className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    City *
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bloodType">Blood Type *</Label>
                  <Select value={formData.bloodType} onValueChange={(value) => handleInputChange('bloodType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      {bloodTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="lastDonation" className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Last Donation (if any)
                  </Label>
                  <Input
                    id="lastDonation"
                    type="date"
                    value={formData.lastDonation}
                    onChange={(e) => handleInputChange('lastDonation', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="medicalConditions">Medical Conditions</Label>
                <Input
                  id="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                  placeholder="Any medical conditions that might affect donation (optional)"
                />
              </div>

              <div>
                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  placeholder="Emergency contact person and phone number"
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) => handleInputChange('notifications', checked as boolean)}
                  />
                  <Label htmlFor="notifications" className="text-sm">
                    I want to receive notifications about donation opportunities and health tips
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyConsent}
                    onCheckedChange={(checked) => handleInputChange('privacyConsent', checked as boolean)}
                  />
                  <Label htmlFor="privacy" className="text-sm">
                    I accept the <button type="button" className="text-primary underline">Privacy Policy</button> and 
                    agree to share my health data securely for blood donation matching *
                  </Label>
                </div>
              </div>

              <div className="bg-gradient-card rounded-lg p-4 border border-border">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-medical-green mr-2" />
                  <h3 className="font-semibold">Your Privacy is Protected</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All medical data is encrypted and HIPAA compliant</li>
                  <li>• We only share anonymized data for matching purposes</li>
                  <li>• You can delete your profile anytime</li>
                  <li>• Location data is used only for proximity matching</li>
                </ul>
              </div>
            </>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            )}
            <Button type="submit" className="bg-gradient-primary flex-1">
              {step < 3 ? 'Next Step' : 'Create Donor Profile'}
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

export default DonorSignupModal;