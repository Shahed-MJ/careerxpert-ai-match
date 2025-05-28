
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Bell, BookOpen, FileText, TrendingUp, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
            <p className="text-gray-600">Here's what's happening with your career journey</p>
          </div>
          <Button className="career-gradient text-white">
            <Bell className="w-4 h-4 mr-2" />
            3 New Notifications
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recommended Jobs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-career-yellow" />
                  Recommended for You
                </CardTitle>
                <CardDescription>
                  AI-matched opportunities based on your profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((job) => (
                    <div key={job} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Software Engineering Intern</h3>
                        <Badge className="career-gradient text-white">95% Match</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">TechCorp Jordan • Amman</p>
                      <p className="text-sm text-gray-600 mb-3">
                        Join our development team and work on cutting-edge projects...
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Posted 2 days ago</span>
                        <Button size="sm" className="career-gradient text-white">Apply Now</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Application Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { company: 'DataTech Solutions', role: 'Data Science Intern', status: 'Interview Scheduled', color: 'bg-green-100 text-green-700' },
                    { company: 'Digital Marketing Pro', role: 'Marketing Assistant', status: 'Under Review', color: 'bg-yellow-100 text-yellow-700' },
                    { company: 'StartupHub', role: 'Product Intern', status: 'Application Sent', color: 'bg-blue-100 text-blue-700' }
                  ].map((app, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{app.role}</h4>
                        <p className="text-sm text-gray-600">{app.company}</p>
                      </div>
                      <Badge className={app.color}>{app.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Strength</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Overall Score</span>
                    <span className="font-bold text-career-red">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="career-gradient h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Add portfolio projects</span>
                      <span className="text-career-red">+10%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Complete skills assessment</span>
                      <span className="text-career-red">+5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Build Resume
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Take Skills Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Mock Interview
                </Button>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-career-red">12</div>
                  <div className="text-sm text-gray-600">Applications Sent</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold">3</div>
                    <div className="text-xs text-gray-600">Interviews</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">156</div>
                    <div className="text-xs text-gray-600">Profile Views</div>
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

export default StudentDashboard;
