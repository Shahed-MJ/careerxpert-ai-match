
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, MessageCircle, Mail, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Creating an account is easy! Click on "Get Started" or "Register" and choose your role (Student, Employer, or University). Fill in your details and verify your email address to get started.'
    },
    {
      question: 'How does the AI matching work?',
      answer: 'Our AI analyzes your academic background, GPA, skills, and preferences to match you with relevant job opportunities. The more complete your profile, the better the matches!'
    },
    {
      question: 'Is CareerXpert free for students?',
      answer: 'Yes! CareerXpert is completely free for students. We believe every student should have access to career opportunities regardless of their financial situation.'
    },
    {
      question: 'How can employers post jobs?',
      answer: 'Employers can create an account, verify their company, and start posting jobs immediately. Our team reviews all job postings to ensure quality and relevance.'
    },
    {
      question: 'Can I track my application status?',
      answer: 'Absolutely! Your dashboard provides real-time updates on all your applications, including when employers view your profile and when decisions are made.'
    },
    {
      question: 'What universities are partnered with CareerXpert?',
      answer: 'We partner with major universities across Jordan including University of Jordan, JUST, German Jordanian University, and many others. Check our partners page for the full list.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How can we <span className="career-gradient-text">help you?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to your questions or get in touch with our support team
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Quick Actions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">Getting Started</CardTitle>
                      <CardDescription>
                        Learn how to set up your profile and find opportunities
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">Application Process</CardTitle>
                      <CardDescription>
                        Understand how to apply for jobs and track your progress
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">Resume Builder</CardTitle>
                      <CardDescription>
                        Create a professional resume with our AI-powered tool
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">Account Settings</CardTitle>
                      <CardDescription>
                        Manage your profile, privacy, and notification preferences
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="px-6">
                          <AccordionTrigger className="text-left hover:text-career-red">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
                <CardDescription>
                  Our support team is here to assist you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Live Chat</div>
                    <div className="text-sm text-gray-600">Get instant help from our support team</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Email Support</div>
                    <div className="text-sm text-gray-600">Send us a detailed message</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Phone Support</div>
                    <div className="text-sm text-gray-600">Call us during business hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Support Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Response Time</span>
                  <span className="font-semibold">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Issues Resolved</span>
                  <span className="font-semibold">99.5%</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <strong>Email:</strong> support@careerxpert.jo
                </div>
                <div className="text-sm">
                  <strong>Phone:</strong> +962 6 123 4567
                </div>
                <div className="text-sm">
                  <strong>Hours:</strong> Sun-Thu, 9 AM - 6 PM (Jordan Time)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
