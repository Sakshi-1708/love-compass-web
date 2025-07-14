
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Shield, Star, Search, MessageCircle, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Verified Profiles",
      description: "All profiles are verified with authentic documents for your safety"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Privacy Protected",
      description: "Your personal information is secure with advanced privacy controls"
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "AI Matching",
      description: "Smart algorithm finds compatible matches based on your preferences"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-purple-500" />,
      title: "Safe Communication",
      description: "Connect safely with built-in chat and video call features"
    }
  ];

  const featuredProfiles = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      profession: "Software Engineer",
      location: "Mumbai, Maharashtra",
      education: "B.Tech Computer Science",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=500&fit=crop&crop=faces",
      type: "bride"
    },
    {
      id: 2,
      name: "Arjun Patel",
      age: 29,
      profession: "Doctor",
      location: "Delhi, India",
      education: "MBBS",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces",
      type: "groom"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      age: 24,
      profession: "Teacher",
      location: "Bangalore, Karnataka",
      education: "M.Ed",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=faces",
      type: "bride"
    },
    {
      id: 4,
      name: "Vikram Singh",
      age: 31,
      profession: "Business Analyst",
      location: "Pune, Maharashtra",
      education: "MBA Finance",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=faces",
      type: "groom"
    }
  ];

  const successStories = [
    {
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=300&h=300&fit=crop&crop=faces",
      names: "Raj & Priya",
      story: "Found love through LoveCompass in 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=300&fit=crop&crop=faces",
      names: "Amit & Sneha",
      story: "Happily married after meeting here"
    },
    {
      image: "https://images.unsplash.com/photo-1537178272213-c49c3e8bd04f?w=300&h=300&fit=crop&crop=faces",
      names: "Vikram & Meera",
      story: "Perfect match found in just 2 months"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Find Your Perfect
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block">
              Life Partner
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy couples who found their soulmate on LoveCompass. 
            Your journey to find true love starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/search">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3">
                <Search className="w-5 h-5 mr-2" />
                Start Searching
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-3">
                Create Profile
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Badge variant="secondary" className="mr-2">50K+</Badge>
              Active Members
            </div>
            <div className="flex items-center">
              <Badge variant="secondary" className="mr-2">5K+</Badge>
              Success Stories
            </div>
            <div className="flex items-center">
              <Badge variant="secondary" className="mr-2">99%</Badge>
              Verified Profiles
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profiles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Profiles
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover verified profiles of brides and grooms looking for their perfect match
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProfiles.map((profile) => (
              <Card key={profile.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${profile.type === 'bride' ? 'bg-pink-500' : 'bg-blue-500'} text-white border-0`}>
                      {profile.type === 'bride' ? '👰 Bride' : '🤵 Groom'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{profile.name}</h3>
                  <p className="text-gray-600 mb-2">{profile.age} years</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      <span>{profile.profession}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <GraduationCap className="w-4 h-4 text-purple-500" />
                      <span>{profile.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>{profile.location}</span>
                    </div>
                  </div>

                  <Link to={`/profile/${profile.id}`}>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      View Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                View All Profiles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose LoveCompass?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide a safe, secure, and effective platform to help you find your perfect match
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 text-lg">
              Real couples, real love stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.names}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {story.names}
                  </h3>
                  <p className="text-gray-600">
                    {story.story}
                  </p>
                  <Heart className="w-6 h-6 text-pink-500 mx-auto mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Soulmate?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy couples who found love on LoveCompass
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
