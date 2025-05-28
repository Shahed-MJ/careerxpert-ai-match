
import Navigation from '@/components/Navigation';
import { Plus, Users, Eye, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">TechCorp Jordan Dashboard</h1>
            <p className="text-gray-600">Manage your job postings and candidates</p>
          </div>
          <Button className="career-gradient text-white">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="w-12 h-12 bg-career-yellow/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-career-red" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold">142</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Interviews Scheduled</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Hired This Month</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Job Postings */}
            <Card>
              <CardHeader>
                <CardTitle>Active Job Postings</CardTitle>
                <CardDescription>Manage your current openings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'Software Engineering Intern', applications: 45, status: 'Active', posted: '5 days ago' },
                    { title: 'Data Science Intern', applications: 32, status: 'Active', posted: '1 week ago' },
                    { title: 'Product Management Intern', applications: 28, status: 'Active', posted: '2 weeks ago' }
                  ].map((job, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{job.title}</h3>
                        <Badge className="bg-green-100 text-green-700">{job.status}</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>{job.applications} applications</span>
                        <span>Posted {job.posted}</span>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <Button size="sm" variant="outline">View Applications</Button>
                        <Button size="sm" variant="outline">Edit Job</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Latest candidates who applied</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Sarah Ahmad', role: 'Software Engineering Intern', university: 'University of Jordan', gpa: '3.8', time: '2 hours ago' },
                    { name: 'Omar Khalil', role: 'Data Science Intern', university: 'JUST', gpa: '3.6', time: '5 hours ago' },
                    { name: 'Lina Mansour', role: 'Software Engineering Intern', university: 'GJU', gpa: '3.9', time: '1 day ago' }
                  ].map((candidate, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{candidate.name}</h4>
                        <p className="text-sm text-gray-600">{candidate.university} • GPA: {candidate.gpa}</p>
                        <p className="text-xs text-gray-500">Applied for {candidate.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-2">{candidate.time}</p>
                        <Button size="sm" className="career-gradient text-white">Review</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full career-gradient text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Job
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Browse Candidates
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Interviews
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Top Universities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Applicant Universities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'University of Jordan', count: 45 },
                    { name: 'JUST', count: 32 },
                    { name: 'German Jordanian University', count: 28 },
                    { name: 'Yarmouk University', count: 15 }
                  ].map((uni, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{uni.name}</span>
                      <Badge variant="outline">{uni.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
