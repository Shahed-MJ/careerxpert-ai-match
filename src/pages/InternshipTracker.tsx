
import Navigation from '@/components/Navigation';
import { Calendar, CheckCircle, Clock, Upload, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const InternshipTracker = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Internship <span className="career-gradient-text">Progress Tracker</span>
          </h1>
          <p className="text-lg text-gray-600">
            Track your internship journey and milestones
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Internship */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Software Engineering Intern</CardTitle>
                    <CardDescription>TechCorp Jordan • June 2024 - August 2024</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-gray-600">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-career-yellow/10 rounded-lg">
                      <div className="text-lg font-bold text-career-red">6</div>
                      <div className="text-sm text-gray-600">Weeks Completed</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">4</div>
                      <div className="text-sm text-gray-600">Tasks Completed</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">2</div>
                      <div className="text-sm text-gray-600">Evaluations</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Internship Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      week: 'Week 1-2', 
                      title: 'Onboarding & Training', 
                      status: 'completed',
                      description: 'Company orientation, setup development environment'
                    },
                    { 
                      week: 'Week 3-4', 
                      title: 'Frontend Development', 
                      status: 'completed',
                      description: 'Built user interface components using React'
                    },
                    { 
                      week: 'Week 5-6', 
                      title: 'Backend Integration', 
                      status: 'current',
                      description: 'Connecting frontend with APIs and database'
                    },
                    { 
                      week: 'Week 7-8', 
                      title: 'Testing & Deployment', 
                      status: 'upcoming',
                      description: 'Unit testing, bug fixes, and production deployment'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        item.status === 'completed' ? 'bg-green-100' :
                        item.status === 'current' ? 'bg-career-yellow/20' : 'bg-gray-100'
                      }`}>
                        {item.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-600" />}
                        {item.status === 'current' && <Clock className="w-4 h-4 text-career-red" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium">{item.title}</h4>
                          <Badge variant={item.status === 'completed' ? 'default' : 'outline'}>
                            {item.week}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { action: 'Submitted weekly report', time: '2 hours ago', type: 'report' },
                    { action: 'Received feedback from supervisor', time: '1 day ago', type: 'feedback' },
                    { action: 'Completed React component task', time: '3 days ago', type: 'task' },
                    { action: 'Mid-term evaluation completed', time: '1 week ago', type: 'evaluation' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'report' ? 'bg-blue-100' :
                        activity.type === 'feedback' ? 'bg-green-100' :
                        activity.type === 'task' ? 'bg-career-yellow/20' : 'bg-purple-100'
                      }`}>
                        {activity.type === 'report' && <Upload className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'feedback' && <MessageSquare className="w-4 h-4 text-green-600" />}
                        {activity.type === 'task' && <CheckCircle className="w-4 h-4 text-career-red" />}
                        {activity.type === 'evaluation' && <Calendar className="w-4 h-4 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
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
                  <Upload className="w-4 h-4 mr-2" />
                  Submit Weekly Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Supervisor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </CardContent>
            </Card>

            {/* Supervisor Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supervisor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 career-gradient rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">AH</span>
                    </div>
                    <div>
                      <p className="font-medium">Ahmad Hassan</p>
                      <p className="text-sm text-gray-600">Senior Developer</p>
                    </div>
                  </div>
                  <div className="text-sm space-y-1">
                    <p><strong>Email:</strong> ahmad.hassan@techcorp.jo</p>
                    <p><strong>Phone:</strong> +962 79 123 4567</p>
                    <p><strong>Office:</strong> Building A, Floor 3</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { task: 'Weekly Report #7', due: 'In 2 days', priority: 'high' },
                    { task: 'API Integration Demo', due: 'In 5 days', priority: 'medium' },
                    { task: 'Final Presentation', due: 'In 2 weeks', priority: 'low' }
                  ].map((deadline, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="text-sm font-medium">{deadline.task}</p>
                        <p className="text-xs text-gray-500">{deadline.due}</p>
                      </div>
                      <Badge variant={
                        deadline.priority === 'high' ? 'destructive' :
                        deadline.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {deadline.priority}
                      </Badge>
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

export default InternshipTracker;
