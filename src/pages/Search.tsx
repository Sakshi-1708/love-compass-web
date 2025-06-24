
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search as SearchIcon, Filter, Heart, MessageCircle, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import ProfileCard from '../components/ProfileCard';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const profiles = [
    {
      id: 1,
      name: "Rahul Gupta",
      age: 28,
      profession: "Software Engineer",
      location: "Pune, Maharashtra",
      education: "B.Tech Computer Science",
      height: "5'9\"",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      compatibility: 92,
      interests: ["Travel", "Photography", "Music", "Reading", "Fitness"]
    },
    {
      id: 2,
      name: "Arjun Patel",
      age: 29,
      profession: "Doctor",
      location: "Mumbai, Maharashtra",
      education: "MBBS",
      height: "5'10\"",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      compatibility: 88,
      interests: ["Reading", "Fitness", "Cooking", "Movies"]
    },
    {
      id: 3,
      name: "Vikram Singh",
      age: 27,
      profession: "Chartered Accountant",
      location: "Delhi, India",
      education: "CA, B.Com",
      height: "5'8\"",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      compatibility: 85,
      interests: ["Sports", "Movies", "Art", "Travel"]
    },
    {
      id: 4,
      name: "Rohan Sharma",
      age: 30,
      profession: "Business Analyst",
      location: "Bangalore, Karnataka",
      education: "MBA Finance",
      height: "6'0\"",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
      compatibility: 90,
      interests: ["Technology", "Business", "Travel", "Music"]
    },
    {
      id: 5,
      name: "Aditya Kumar",
      age: 26,
      profession: "Marketing Manager",
      location: "Chennai, Tamil Nadu",
      education: "MBA Marketing",
      height: "5'7\"",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
      compatibility: 87,
      interests: ["Marketing", "Creativity", "Sports", "Food"]
    },
    {
      id: 6,
      name: "Karan Mehra",
      age: 31,
      profession: "Civil Engineer",
      location: "Hyderabad, Telangana",
      education: "B.Tech Civil",
      height: "5'11\"",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&crop=face",
      compatibility: 83,
      interests: ["Engineering", "Architecture", "Travel", "Photography"]
    }
  ];

  const filters = [
    { label: "Age 25-30", active: true },
    { label: "Engineer", active: false },
    { label: "Mumbai", active: false },
    { label: "MBA", active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your Perfect Match
          </h1>
          <p className="text-gray-600 mb-6">
            Browse through verified profiles and find someone special
          </p>

          {/* Search Bar */}
          <Card className="p-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search by name, profession, location..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                <SearchIcon className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </Card>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((filter, index) => (
              <Badge 
                key={index} 
                variant={filter.active ? "default" : "secondary"}
                className={filter.active ? "bg-pink-500 hover:bg-pink-600" : ""}
              >
                {filter.label}
                {filter.active && (
                  <button className="ml-2 text-xs">×</button>
                )}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {profiles.length} profiles found
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Sort by Match %
            </Button>
            <Button variant="outline" size="sm">
              Recently Active
            </Button>
          </div>
        </div>

        {/* Profile Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map(profile => (
            <ProfileCard key={profile.id} {...profile} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Profiles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
