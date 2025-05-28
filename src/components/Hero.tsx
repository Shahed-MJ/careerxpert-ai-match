
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-50" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-career-yellow/10 border border-career-yellow/20">
                <Sparkles className="w-4 h-4 text-career-red mr-2" />
                <span className="text-sm font-medium text-gray-700">AI-Powered Job Matching</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Dream Career
                <span className="career-gradient-text block">Starts Here</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with top employers and discover personalized internship and job opportunities 
                tailored to your skills, GPA, and academic background.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register?role=student">
                <Button size="lg" className="career-gradient text-white hover:opacity-90 px-8">
                  I'm a Student
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/register?role=employer">
                <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 px-8">
                  I'm an Employer
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-career-red">1000+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-career-red">500+</div>
                <div className="text-sm text-gray-600">Job Opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-career-red">150+</div>
                <div className="text-sm text-gray-600">Partner Companies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6 animate-scale-in">
            <Card className="p-6 border-2 border-career-yellow/20 hover:border-career-yellow/40 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-career-yellow/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-career-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Matching</h3>
                  <p className="text-gray-600">
                    Our AI analyzes your profile to find the perfect opportunities that match your skills and goals.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-career-red/20 hover:border-career-red/40 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-career-red/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-career-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Direct Connections</h3>
                  <p className="text-gray-600">
                    Connect directly with employers and get noticed by top companies in Jordan.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-gray-200 hover:border-gray-300 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-career-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Growth</h3>
                  <p className="text-gray-600">
                    Track your progress and build your career with personalized recommendations and insights.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
