
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 career-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Ready to get started?</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Join Thousands of Successful
              <br />
              Students and Employers
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Take the first step towards your dream career or find the perfect candidates for your company.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=student">
              <Button size="lg" className="bg-white text-career-red hover:bg-gray-100 px-8">
                Start as Student
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/register?role=employer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
                Post Jobs
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm text-white/80">For Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Secure</div>
              <div className="text-sm text-white/80">& Private</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
