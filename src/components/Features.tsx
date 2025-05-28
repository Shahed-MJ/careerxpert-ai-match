
import { 
  Brain, 
  FileText, 
  Calendar, 
  BarChart3, 
  Shield, 
  Zap 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match students with opportunities based on their academic performance, skills, and career goals.',
      color: 'bg-career-yellow/10 text-career-red'
    },
    {
      icon: FileText,
      title: 'Smart Resume Builder',
      description: 'Create professional resumes with AI-generated suggestions and industry-specific templates.',
      color: 'bg-career-red/10 text-career-red'
    },
    {
      icon: Calendar,
      title: 'Application Tracking',
      description: 'Monitor your applications in real-time with detailed status updates and feedback.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Track your internship progress with detailed analytics and performance insights.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your data is protected with enterprise-grade security and privacy measures.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Get notified immediately about new opportunities, application updates, and messages.',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="career-gradient-text"> Modern Careers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to discover, apply for, and land your dream internship or job
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-career-yellow/30"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
