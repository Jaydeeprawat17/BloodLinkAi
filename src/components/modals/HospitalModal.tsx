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
import { Checkbox } from "@/components/ui/checkbox";
import { Stethoscope, Building2, Users, Database, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HospitalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HospitalModal = ({ isOpen, onClose }: HospitalModalProps) => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    contactPerson: '',
    email: '',
    phone: '',
    hospitalType: '',
    bedCapacity: '',
    currentSystem: '',
    patientVolume: '',
    challenges: '',
    integrationNeeds: [] as string[]
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Hospital Registration Submitted",
      description: "Our enterprise team will contact you within 24 hours to discuss your implementation.",
    });
    
    onClose();
    setFormData({
      hospitalName: '',
      contactPerson: '',
      email: '',
      phone: '',
      hospitalType: '',
      bedCapacity: '',
      currentSystem: '',
      patientVolume: '',
      challenges: '',
      integrationNeeds: []
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleIntegrationChange = (integration: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      integrationNeeds: checked 
        ? [...prev.integrationNeeds, integration]
        : prev.integrationNeeds.filter(item => item !== integration)
    }));
  };

  const integrationOptions = [
    'e-RaktKosh Integration',
    'Hospital Management System (HMS)',
    'Laboratory Information System (LIS)',
    'Electronic Health Records (EHR)',
    'Inventory Management System',
    'Patient Portal Integration'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Stethoscope className="h-6 w-6 text-primary mr-2" />
            Hospital Partnership Program
          </DialogTitle>
          <DialogDescription>
            Join leading healthcare institutions using BloodLink AI to transform blood donation management
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {/* Benefits Overview */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-card rounded-lg p-4 border border-border">
              <Database className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold mb-1">Real-time Integration</h3>
              <p className="text-sm text-muted-foreground">Seamless connection with e-RaktKosh and your existing systems</p>
            </div>
            <div className="bg-gradient-card rounded-lg p-4 border border-border">
              <Users className="h-8 w-8 text-medical-blue mb-2" />
              <h3 className="font-semibold mb-1">95% Match Accuracy</h3>
              <p className="text-sm text-muted-foreground">AI-powered donor-patient matching for critical cases</p>
            </div>
            <div className="bg-gradient-card rounded-lg p-4 border border-border">
              <Shield className="h-8 w-8 text-medical-green mb-2" />
              <h3 className="font-semibold mb-1">HIPAA Compliant</h3>
              <p className="text-sm text-muted-foreground">Full healthcare data protection and privacy standards</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hospitalName" className="flex items-center">
                  <Building2 className="h-4 w-4 mr-2" />
                  Hospital Name *
                </Label>
                <Input
                  id="hospitalName"
                  value={formData.hospitalName}
                  onChange={(e) => handleInputChange('hospitalName', e.target.value)}
                  placeholder="Enter hospital name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="Chief Medical Officer / Administrator"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="contact@hospital.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="hospitalType">Hospital Type</Label>
                <Select value={formData.hospitalType} onValueChange={(value) => handleInputChange('hospitalType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government Hospital</SelectItem>
                    <SelectItem value="private">Private Hospital</SelectItem>
                    <SelectItem value="trust">Trust Hospital</SelectItem>
                    <SelectItem value="specialty">Specialty Hospital</SelectItem>
                    <SelectItem value="blood-bank">Blood Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bedCapacity">Bed Capacity</Label>
                <Select value={formData.bedCapacity} onValueChange={(value) => handleInputChange('bedCapacity', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<100">Less than 100 beds</SelectItem>
                    <SelectItem value="100-300">100-300 beds</SelectItem>
                    <SelectItem value="300-500">300-500 beds</SelectItem>
                    <SelectItem value="500-1000">500-1000 beds</SelectItem>
                    <SelectItem value=">1000">More than 1000 beds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="patientVolume">Monthly Thalassemia Patients</Label>
                <Select value={formData.patientVolume} onValueChange={(value) => handleInputChange('patientVolume', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<10">Less than 10</SelectItem>
                    <SelectItem value="10-50">10-50 patients</SelectItem>
                    <SelectItem value="50-100">50-100 patients</SelectItem>
                    <SelectItem value="100-200">100-200 patients</SelectItem>
                    <SelectItem value=">200">More than 200</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="currentSystem">Current Blood Management System</Label>
              <Input
                id="currentSystem"
                value={formData.currentSystem}
                onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                placeholder="e.g., Manual records, e-RaktKosh, Custom system"
              />
            </div>

            <div>
              <Label className="text-base font-medium">Integration Requirements</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {integrationOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={formData.integrationNeeds.includes(option)}
                      onCheckedChange={(checked) => handleIntegrationChange(option, checked as boolean)}
                    />
                    <Label htmlFor={option} className="text-sm font-normal">{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="challenges">Current Challenges & Goals</Label>
              <Textarea
                id="challenges"
                value={formData.challenges}
                onChange={(e) => handleInputChange('challenges', e.target.value)}
                placeholder="Describe your current blood donation challenges and what you hope to achieve with BloodLink AI"
                rows={3}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="submit" className="bg-gradient-primary flex-1">
                Submit Partnership Request
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HospitalModal;