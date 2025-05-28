
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Building2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Register = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(searchParams.get('role') || 'student');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    major: '',
    gpa: '',
    graduationYear: '',
    companyName: '',
    jobTitle: '',
    industryType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', { ...formData, role: activeTab });
    // Add registration logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const universities = [
    'University of Jordan',
    'Jordan University of Science and Technology (JUST)',
    'German Jordanian University',
    'American University of Madaba',
    'Al-Hussein Bin Talal University',
    'Yarmouk University'
  ];

  const majors = [
    'Computer Science',
    'Software Engineering',
    'Information Technology',
    'Business Administration',
    'Marketing',
    'Finance',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 career-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CX</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">CareerXpert</span>
          </Link>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Join CareerXpert</CardTitle>
            <CardDescription>
              Create your account and start your career journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student" className="text-xs">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="employer" className="text-xs">
                  <Building2 className="w-4 h-4 mr-1" />
                  Employer
                </TabsTrigger>
                <TabsTrigger value="university" className="text-xs">
                  <User className="w-4 h-4 mr-1" />
                  University
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Common Fields */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <TabsContent value="student" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    <Select onValueChange={(value) => handleSelectChange('university', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your university" />
                      </SelectTrigger>
                      <SelectContent>
                        {universities.map((uni) => (
                          <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="major">Major</Label>
                      <Select onValueChange={(value) => handleSelectChange('major', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Major" />
                        </SelectTrigger>
                        <SelectContent>
                          {majors.map((major) => (
                            <SelectItem key={major} value={major}>{major}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gpa">GPA</Label>
                      <Input
                        id="gpa"
                        name="gpa"
                        type="number"
                        step="0.01"
                        min="0"
                        max="4"
                        value={formData.gpa}
                        onChange={handleInputChange}
                        placeholder="3.5"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="employer" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      placeholder="HR Manager"
                      required
                    />
                  </div>
                </TabsContent>

                <TabsContent value="university" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="universityName">University Name</Label>
                    <Select onValueChange={(value) => handleSelectChange('universityName', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select university" />
                      </SelectTrigger>
                      <SelectContent>
                        {universities.map((uni) => (
                          <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <div className="flex items-center space-x-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 text-career-red bg-gray-100 border-gray-300 rounded focus:ring-career-red focus:ring-2"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link to="/terms" className="text-career-red hover:text-career-red/80">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-career-red hover:text-career-red/80">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button type="submit" className="w-full career-gradient text-white hover:opacity-90">
                  Create Account
                </Button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{' '}
                <Link to="/login" className="text-career-red hover:text-career-red/80 font-medium">
                  Sign in
                </Link>
              </p>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
