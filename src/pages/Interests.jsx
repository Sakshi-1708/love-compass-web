
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InterestCard from '../components/InterestCard';
import { Heart, Send, UserCheck, Clock } from 'lucide-react';

const Interests = () => {
  const [activeTab, setActiveTab] = useState('received');

  const receivedInterests = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 28,
      profession: "Software Engineer",
      location: "Mumbai, Maharashtra",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: 'pending',
      time: '2 hours ago'
    },
    {
      id: 2,
      name: "Anita Verma",
      age: 26,
      profession: "Teacher",
      location: "Delhi, India",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: 'accepted',
      time: '1 day ago'
    },
    {
      id: 3,
      name: "Kavya Singh",
      age: 29,
      profession: "Doctor",
      location: "Bangalore, Karnataka",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: 'declined',
      time: '3 days ago'
    }
  ];

  const sentInterests = [
    {
      id: 4,
      name: "Rahul Patel",
      age: 30,
      profession: "Business Analyst",
      location: "Ahmedabad, Gujarat",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: 'pending',
      time: '5 hours ago'
    },
    {
      id: 5,
      name: "Arjun Kumar",
      age: 32,
      profession: "Engineer",
      location: "Chennai, Tamil Nadu",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: 'accepted',
      time: '2 days ago'
    }
  ];

  const mutualInterests = [
    {
      id: 6,
      name: "Sneha Reddy",
      age: 27,
      profession: "Marketing Manager",
      location: "Hyderabad, Telangana",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: 'accepted',
      time: '4 hours ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Interest Management</h1>
          <p className="text-gray-600">Manage your matrimonial interests and connections</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100">Received</p>
                  <p className="text-3xl font-bold">{receivedInterests.length}</p>
                </div>
                <Heart className="w-8 h-8 text-pink-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Sent</p>
                  <p className="text-3xl font-bold">{sentInterests.length}</p>
                </div>
                <Send className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Mutual</p>
                  <p className="text-3xl font-bold">{mutualInterests.length}</p>
                </div>
                <UserCheck className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100">Pending</p>
                  <p className="text-3xl font-bold">
                    {[...receivedInterests, ...sentInterests].filter(i => i.status === 'pending').length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interest Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="received">Received Interests</TabsTrigger>
            <TabsTrigger value="sent">Sent Interests</TabsTrigger>
            <TabsTrigger value="mutual">Mutual Interests</TabsTrigger>
          </TabsList>

          <TabsContent value="received">
            <div className="space-y-4">
              {receivedInterests.map(interest => (
                <InterestCard key={interest.id} interest={interest} type="received" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sent">
            <div className="space-y-4">
              {sentInterests.map(interest => (
                <InterestCard key={interest.id} interest={interest} type="sent" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mutual">
            <div className="space-y-4">
              {mutualInterests.map(interest => (
                <InterestCard key={interest.id} interest={interest} type="mutual" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Interests;
