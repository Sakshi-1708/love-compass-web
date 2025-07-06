
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatsCard from './StatsCard';
import QuickActionButton from './QuickActionButton';
import ProfileCard from './ProfileCard';
import { Heart, MessageCircle, Search, Star, TrendingUp, Users, Bell, Calendar } from 'lucide-react';

const Dashboard = () => {
  const recentMatches = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      profession: "Software Engineer",
      location: "Mumbai, Maharashtra",
      education: "B.Tech Computer Science",
      height: "5'6\"",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 92,
      interests: ["Reading", "Travel", "Cooking", "Music"]
    },
    {
      id: 2,
      name: "Rahul Patel",
      age: 30,
      profession: "Doctor",
      location: "Ahmedabad, Gujarat",
      education: "MBBS, MD",
      height: "5'10\"",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 89,
      interests: ["Sports", "Reading", "Photography"]
    }
  ];

  const recentActivities = [
    { type: 'view', message: 'Anita R. viewed your profile', time: '2 hours ago' },
    { type: 'interest', message: 'You received interest from Kavya S.', time: '5 hours ago' },
    { type: 'message', message: 'New message from Priya S.', time: '1 day ago' },
    { type: 'match', message: 'New match found - 95% compatibility!', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your matrimonial journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            label="Profile Views"
            value={156}
            icon="👁️"
            color="bg-blue-100 text-blue-600"
          />
          <StatsCard
            label="Interests Received"
            value={23}
            icon="💝"
            color="bg-pink-100 text-pink-600"
          />
          <StatsCard
            label="Matches Found"
            value={12}
            icon="❤️"
            color="bg-red-100 text-red-600"
          />
          <StatsCard
            label="Messages"
            value={45}
            icon="💬"
            color="bg-green-100 text-green-600"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickActionButton
              icon={<Search className="w-6 h-6" />}
              label="Search Profiles"
              color="bg-gradient-to-r from-blue-500 to-blue-600"
            />
            <QuickActionButton
              icon={<Heart className="w-6 h-6" />}
              label="View Interests"
              color="bg-gradient-to-r from-pink-500 to-pink-600"
            />
            <QuickActionButton
              icon={<MessageCircle className="w-6 h-6" />}
              label="Messages"
              color="bg-gradient-to-r from-green-500 to-green-600"
            />
            <QuickActionButton
              icon={<Star className="w-6 h-6" />}
              label="Favorites"
              color="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Matches */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Recent Matches</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentMatches.map(match => (
                <ProfileCard key={match.id} {...match} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === 'view' ? 'bg-blue-500' :
                        activity.type === 'interest' ? 'bg-pink-500' :
                        activity.type === 'message' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <div>
                        <p className="text-sm text-gray-800">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Profile Strength
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Completion</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">Add these to improve your profile:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Upload more photos</li>
                      <li>• Add family details</li>
                      <li>• Complete preferences</li>
                    </ul>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  Success Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="mb-3">
                    <div className="flex justify-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-xs">👰</span>
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs">🤵</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-800">Raj & Priya</p>
                    <p className="text-xs text-gray-600">Found love through LoveCompass</p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Read Their Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
