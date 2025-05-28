
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sara Ahmad',
      role: 'Computer Science Student',
      university: 'University of Jordan',
      content: 'CareerXpert helped me land my dream internship at a top tech company. The AI matching was spot-on!',
      rating: 5,
      avatar: 'SA'
    },
    {
      name: 'Omar Khalil',
      role: 'Business Administration',
      university: 'JUST',
      content: 'The platform made it so easy to find relevant opportunities. I got multiple interviews within a week!',
      rating: 5,
      avatar: 'OK'
    },
    {
      name: 'Lina Mansour',
      role: 'Engineering Student',
      university: 'German Jordanian University',
      content: 'The resume builder feature is amazing. It helped me create a professional resume that stood out.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'Ahmed Hassan',
      role: 'HR Manager',
      company: 'TechCorp Jordan',
      content: 'We found the perfect interns through CareerXpert. The quality of candidates is exceptional.',
      rating: 5,
      avatar: 'AH'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from students and employers who have found success through CareerXpert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow bg-white border-0 shadow-sm"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-career-yellow text-career-yellow" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-career-yellow/30 mb-2" />
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="career-gradient text-white text-sm font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">
                      {testimonial.university || testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
