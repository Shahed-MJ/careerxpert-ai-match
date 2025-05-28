
import Navigation from '@/components/Navigation';
import { FileText, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            AI-Powered <span className="career-gradient-text">Resume Builder</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a professional resume that stands out with our intelligent suggestions and templates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resume Builder Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Build Your Resume
                </CardTitle>
                <CardDescription>
                  Follow the steps to create your professional resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-career-yellow/5">
                    <div>
                      <h3 className="font-medium">Personal Information</h3>
                      <p className="text-sm text-gray-600">Basic details and contact information</p>
                    </div>
                    <Button size="sm" className="career-gradient text-white">Complete</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Education</h3>
                      <p className="text-sm text-gray-600">University, major, GPA, and relevant coursework</p>
                    </div>
                    <Button size="sm" variant="outline">Add</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Skills</h3>
                      <p className="text-sm text-gray-600">Technical and soft skills</p>
                    </div>
                    <Button size="sm" variant="outline">Add</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Experience</h3>
                      <p className="text-sm text-gray-600">Internships, projects, and work experience</p>
                    </div>
                    <Button size="sm" variant="outline">Add</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Projects</h3>
                      <p className="text-sm text-gray-600">Academic and personal projects</p>
                    </div>
                    <Button size="sm" variant="outline">Add</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle>AI Suggestions</CardTitle>
                <CardDescription>Improve your resume with these recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900">Add Technical Skills</h4>
                    <p className="text-sm text-blue-700">Consider adding React, Node.js, and Python based on current job market trends</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-900">Quantify Achievements</h4>
                    <p className="text-sm text-green-700">Use numbers and metrics to make your accomplishments more impactful</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-900">Action Verbs</h4>
                    <p className="text-sm text-yellow-700">Start bullet points with strong action verbs like "Developed", "Implemented", "Led"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resume Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Resume Preview</CardTitle>
                    <CardDescription>See how your resume looks</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="career-gradient text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Resume Preview Container */}
                <div className="bg-white p-6 border rounded-lg shadow-sm min-h-[600px]">
                  <div className="text-center border-b pb-4 mb-4">
                    <h2 className="text-2xl font-bold">Sarah Ahmad</h2>
                    <p className="text-gray-600">Computer Science Student</p>
                    <p className="text-sm text-gray-500">sarah.ahmad@email.com • +962 79 123 4567 • Amman, Jordan</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-career-red border-b border-gray-200 pb-1">Education</h3>
                      <div className="mt-2">
                        <p className="font-medium">University of Jordan</p>
                        <p className="text-sm text-gray-600">Bachelor of Computer Science • GPA: 3.8/4.0</p>
                        <p className="text-sm text-gray-500">Expected Graduation: June 2025</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-career-red border-b border-gray-200 pb-1">Skills</h3>
                      <div className="mt-2">
                        <p className="text-sm"><strong>Programming:</strong> JavaScript, Python, Java, C++</p>
                        <p className="text-sm"><strong>Web Technologies:</strong> React, Node.js, HTML, CSS</p>
                        <p className="text-sm"><strong>Tools:</strong> Git, Docker, VS Code</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-career-red border-b border-gray-200 pb-1">Projects</h3>
                      <div className="mt-2">
                        <p className="font-medium">E-commerce Web Application</p>
                        <p className="text-sm text-gray-600">Built a full-stack e-commerce platform using React and Node.js</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
