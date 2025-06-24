
import React, { useState } from 'react';
import { Search, Heart, MessageCircle, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ProfileCard from './ProfileCard';
import StatsCard from './StatsCard';
import QuickActionButton from './QuickActionButton';

function Dashboard() {
  const [profileCompletion] = useState(75);

  const matchSuggestions = [
    {
      id: 1,
      name: "Rahul Gupta",
      age: 28,
      profession: "Software Engineer",
      location: "Pune, Maharashtra",
      education: "B.Tech Computer Science",
      height: "5'9\"",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      compatibility: 92,
      interests: ["Travel", "Photography", "Music"]
    },
    {
      id: 2,
      name: "Arjun Patel",
      age: 29,
      profession: "Doctor",
      location: "Mumbai, Maharashtra",
      education: "MBBS",
      height: "5'10\"",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      compatibility: 88,
      interests: ["Reading", "Fitness", "Cooking"]
    },
    {
      id: 3,
      name: "Vikram Singh",
      age: 27,
      profession: "Chartered Accountant",
      location: "Delhi, India",
      education: "CA, B.Com",
      height: "5'8\"",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
      compatibility: 85,
      interests: ["Sports", "Movies", "Art"]
    }
  ];

  const stats = [
    { label: 'Profile Views', value: 120, icon: '👁️', color: 'bg-blue-50 text-blue-600' },
    { label: 'Interests Received', value: 15, icon: '💝', color: 'bg-pink-50 text-pink-600' },
    { label: 'Messages', value: 4, icon: '💬', color: 'bg-green-50 text-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Welcome */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, Priya! 👋</h1>
                <p className="text-pink-100 text-lg">Let's find your perfect match today</p>
              </div>
              <div className="hidden md:block">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Completion */}
        <Card className="mb-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Complete Your Profile</h2>
              <Badge variant="outline" className="text-purple-600 border-purple-200">
                {profileCompletion}% Complete
              </Badge>
            </div>
            <Progress value={profileCompletion} className="mb-4 h-3" />
            <p className="text-gray-600 mb-4">
              Complete your profile to get better matches and increase visibility
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
              Complete Profile
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickActionButton
                icon={<Search className="w-5 h-5" />}
                label="Search Matches"
                color="bg-blue-500 hover:bg-blue-600"
              />
              <QuickActionButton
                icon={<Heart className="w-5 h-5" />}
                label="View Interests"
                color="bg-pink-500 hover:bg-pink-600"
              />
              <QuickActionButton
                icon={<MessageCircle className="w-5 h-5" />}
                label="Messages"
                color="bg-green-500 hover:bg-green-600"
              />
              <QuickActionButton
                icon={<GraduationCap className="w-5 h-5" />}
                label="Upgrade Plan"
                color="bg-purple-500 hover:bg-purple-600"
              />
            </div>
          </CardContent>
        </Card>

        {/* Recommended Matches */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Recommended Matches for You ✨
            </h2>
            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchSuggestions.map(match => (
              <ProfileCard key={match.id} {...match} />
            ))}
          </div>
        </div>

        {/* Premium Features Callout */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Unlock Premium Features 🌟</h3>
            <p className="text-yellow-100 mb-6 text-lg">
              Get unlimited matches, advanced filters, and priority support
            </p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-2">
              Upgrade Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
