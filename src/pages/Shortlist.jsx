
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProfileCard from '../components/ProfileCard';
import { Heart, Trash2, MessageCircle, Eye } from 'lucide-react';

const Shortlist = () => {
  const [shortlistedProfiles, setShortlistedProfiles] = useState([
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
      interests: ["Reading", "Travel", "Cooking", "Music"],
      shortlistedDate: "2 days ago"
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
      compatibility: 88,
      interests: ["Teaching", "Books", "Yoga", "Art"],
      shortlistedDate: "5 days ago"
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
      compatibility: 90,
      interests: ["Medicine", "Research", "Swimming", "Travel"],
      shortlistedDate: "1 week ago"
    }
  ]);

  const removeFromShortlist = (profileId) => {
    setShortlistedProfiles(prev => prev.filter(profile => profile.id !== profileId));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Shortlist</h1>
          <p className="text-gray-600">Profiles you've shortlisted for future reference</p>
        </div>

        {/* Stats */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{shortlistedProfiles.length}</h3>
                <p className="text-gray-600">Profiles Shortlisted</p>
              </div>
              <Heart className="w-12 h-12 text-pink-500" />
            </div>
          </CardContent>
        </Card>

        {/* Shortlisted Profiles */}
        {shortlistedProfiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortlistedProfiles.map(profile => (
              <div key={profile.id} className="relative">
                <ProfileCard {...profile} />
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg">
                  <Heart className="w-4 h-4 text-pink-500 fill-current" />
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => removeFromShortlist(profile.id)}
                    className="rounded-full p-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg shadow">
                  <p className="text-sm text-gray-600 mb-3">Shortlisted {profile.shortlistedDate}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Send Interest
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Profiles Shortlisted</h3>
              <p className="text-gray-500 mb-6">Start browsing profiles and shortlist the ones you like</p>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                Browse Profiles
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Shortlist;
