
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, MapPin, Clock, DollarSign, Filter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'TechCorp Jordan',
      location: 'Amman, Jordan',
      type: 'Internship',
      salary: '400 JD/month',
      posted: '2 days ago',
      requirements: ['Computer Science', 'JavaScript', 'React'],
      description: 'Join our dynamic team and work on cutting-edge web applications.',
      logo: '💻'
    },
    {
      id: 2,
      title: 'Marketing Assistant',
      company: 'Digital Marketing Pro',
      location: 'Amman, Jordan',
      type: 'Part-time',
      salary: '350 JD/month',
      posted: '1 week ago',
      requirements: ['Marketing', 'Social Media', 'Content Creation'],
      description: 'Help create engaging content and manage social media campaigns.',
      logo: '📱'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'DataTech Solutions',
      location: 'Amman, Jordan',
      type: 'Internship',
      salary: '450 JD/month',
      posted: '3 days ago',
      requirements: ['Data Science', 'Python', 'Machine Learning'],
      description: 'Work with real-world data and build predictive models.',
      logo: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect <span className="career-gradient-text">Opportunity</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover internships and entry-level positions tailored to your skills and academic background
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-40 h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amman">Amman</SelectItem>
                    <SelectItem value="irbid">Irbid</SelectItem>
                    <SelectItem value="zarqa">Zarqa</SelectItem>
                    <SelectItem value="aqaba">Aqaba</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="lg" className="career-gradient text-white hover:opacity-90 px-8">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {['Internship', 'Part-time', 'Full-time', 'Remote'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <input type="checkbox" id={type} className="rounded" />
                        <label htmlFor={type} className="text-sm">{type}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Major</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select major" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Salary Range</h4>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-300">0 - 300 JD</SelectItem>
                      <SelectItem value="300-500">300 - 500 JD</SelectItem>
                      <SelectItem value="500-800">500 - 800 JD</SelectItem>
                      <SelectItem value="800+">800+ JD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {jobs.length} opportunities found
              </h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="salary">Highest Salary</SelectItem>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-career-yellow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-career-red transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-gray-600">{job.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.posted}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Heart className="w-5 h-5" />
                        </Button>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-career-red border-career-red">
                          {req}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Posted {job.posted}
                      </div>
                      <Button className="career-gradient text-white hover:opacity-90">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
