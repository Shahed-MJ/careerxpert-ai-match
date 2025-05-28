
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Globe, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: '5,000+', label: 'Students Helped', icon: Users },
    { number: '500+', label: 'Partner Companies', icon: Target },
    { number: '15+', label: 'Universities', icon: Globe },
    { number: '95%', label: 'Success Rate', icon: Award }
  ];

  const team = [
    {
      name: 'Sarah Al-Rashid',
      role: 'CEO & Founder',
      bio: 'Former HR executive with 10+ years in talent acquisition across the Middle East.',
      avatar: 'SA'
    },
    {
      name: 'Ahmad Khalil',
      role: 'CTO',
      bio: 'Tech entrepreneur and AI expert, passionate about revolutionizing career development.',
      avatar: 'AK'
    },
    {
      name: 'Lina Mansour',
      role: 'Head of Product',
      bio: 'Product strategist focused on creating seamless user experiences for career growth.',
      avatar: 'LM'
    },
    {
      name: 'Omar Zaid',
      role: 'Head of Partnerships',
      bio: 'Building bridges between universities, students, and employers across Jordan.',
      avatar: 'OZ'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-career-yellow/10 to-career-red/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Bridging the Gap Between
            <span className="career-gradient-text block">Education and Employment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CareerXpert was founded with a simple mission: to help every Jordanian student 
            discover and secure their ideal career opportunity through the power of AI and personalized matching.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 career-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that every student deserves access to meaningful career opportunities 
                that align with their skills, interests, and academic achievements. Our AI-powered 
                platform eliminates the guesswork from job searching and helps students make 
                informed career decisions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For employers, we provide access to a curated pool of talented students, 
                making recruitment more efficient and effective than ever before.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 career-gradient rounded-lg flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold">Student-Centric</h3>
                  <p className="text-sm text-gray-600">Designed with students' needs at the heart of everything we do</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-career-red/10 rounded-lg flex items-center justify-center mx-auto">
                    <Target className="w-6 h-6 text-career-red" />
                  </div>
                  <h3 className="font-semibold">Precision Matching</h3>
                  <p className="text-sm text-gray-600">AI algorithms ensure perfect job-candidate fit</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Local Impact</h3>
                  <p className="text-sm text-gray-600">Supporting Jordan's economic growth through talent development</p>
                </CardContent>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Excellence</h3>
                  <p className="text-sm text-gray-600">Committed to delivering exceptional results for all users</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming career development in Jordan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 career-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-career-red font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 career-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-white/90">
                We believe in clear, honest communication with all our users and partners.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-white/90">
                Constantly evolving our platform to meet the changing needs of the job market.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
              <p className="text-white/90">
                Giving students and employers the tools they need to succeed in their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
