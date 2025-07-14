
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileCard from '../components/ProfileCard';
import { Sparkles, Star, Crown, Filter } from 'lucide-react';

const Matches = () => {
  const [activeTab, setActiveTab] = useState('recommended');

  const recommendedMatches = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      profession: "Software Engineer",
      location: "Mumbai, Maharashtra",
      education: "B.Tech Computer Science",
      height: "5'6\"",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 95,
      interests: ["Reading", "Travel", "Cooking", "Music"],
      matchType: 'premium'
    },
    {
      id: 2,
      name: "Anita Verma",
      age: 26,
      profession: "Teacher",
      location: "Delhi, India",
      education: "M.Ed, B.Ed",
      height: "5'4\"",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 92,
      interests: ["Teaching", "Books", "Yoga", "Art"],
      matchType: 'premium'
    },
    {
      id: 3,
      name: "Kavya Singh",
      age: 29,
      profession: "Doctor",
      location: "Bangalore, Karnataka",
      education: "MBBS, MD",
      height: "5'5\"",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 88,
      interests: ["Medicine", "Research", "Swimming", "Travel"],
      matchType: 'regular'
    }
  ];

  const todaysMatches = [
    {
      id: 4,
      name: "Sneha Reddy",
      age: 27,
      profession: "Marketing Manager",
      location: "Hyderabad, Telangana",
      education: "MBA Marketing",
      height: "5'3\"",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 90,
      interests: ["Marketing", "Dancing", "Photography", "Food"],
      matchType: 'new'
    }
  ];

  const nearbyMatches = [
    {
      id: 5,
      name: "Meera Gupta",
      age: 25,
      profession: "Graphic Designer",
      location: "Mumbai, Maharashtra",
      education: "B.Des Visual Arts",
      height: "5'2\"",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 87,
      interests: ["Design", "Art", "Movies", "Fitness"],
      matchType: 'nearby',
      distance: '5 km away'
    }
  ];

  const getMatchTypeBadge = (matchType) => {
    switch (matchType) {
      case 'premium':
        return <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white"><Crown className="w-3 h-3 mr-1" />Premium</Badge>;
      case 'new':
        return <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white"><Sparkles className="w-3 h-3 mr-1" />New</Badge>;
      case 'nearby':
        return <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">📍 Nearby</Badge>;
      default:
        return <Badge className="bg-gradient-to-r from-pink-500 to-pink-600 text-white"><Star className="w-3 h-3 mr-1" />Recommended</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Matches</h1>
            <p className="text-gray-600">Discover your perfect life partner</p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Match Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">{recommendedMatches.length + todaysMatches.length + nearbyMatches.length}</h3>
              <p className="text-pink-100">Total Matches</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">{recommendedMatches.filter(m => m.matchType === 'premium').length}</h3>
              <p className="text-purple-100">Premium Matches</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">{todaysMatches.length}</h3>
              <p className="text-green-100">Today's Matches</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold">{nearbyMatches.length}</h3>
              <p className="text-blue-100">Nearby Matches</p>
            </CardContent>
          </Card>
        </div>

        {/* Match Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="today">Today's Matches</TabsTrigger>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedMatches.map(match => (
                <div key={match.id} className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    {getMatchTypeBadge(match.matchType)}
                  </div>
                  <ProfileCard {...match} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="today">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {todaysMatches.map(match => (
                <div key={match.id} className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    {getMatchTypeBadge(match.matchType)}
                  </div>
                  <ProfileCard {...match} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nearby">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyMatches.map(match => (
                <div key={match.id} className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    {getMatchTypeBadge(match.matchType)}
                  </div>
                  <ProfileCard {...match} />
                  {match.distance && (
                    <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                      {match.distance}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Matches;
