
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import ProfileCard from '@/components/ProfileCard';
import { Search as SearchIcon, Filter, X } from 'lucide-react';

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    ageRange: [25, 35],
    heightRange: [150, 180],
    location: '',
    education: '',
    profession: '',
    religion: '',
    maritalStatus: '',
    diet: '',
    motherTongue: ''
  });

  // Mock profiles data
  const profiles = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      profession: "Software Engineer",
      location: "Mumbai, Maharashtra",
      education: "B.Tech Computer Science",
      height: "5'4\"",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=500&fit=crop&crop=faces",
      compatibility: 92,
      interests: ["Reading", "Travel", "Music"]
    },
    {
      id: 2,
      name: "Arjun Patel",
      age: 29,
      profession: "Doctor",
      location: "Delhi, India",
      education: "MBBS",
      height: "5'10\"",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces",
      compatibility: 88,
      interests: ["Sports", "Reading", "Movies"]
    },
    {
      id: 3,
      name: "Sneha Reddy",
      age: 24,
      profession: "Teacher",
      location: "Bangalore, Karnataka",
      education: "M.Ed",
      height: "5'3\"",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=faces",
      compatibility: 85,
      interests: ["Cooking", "Dance", "Art"]
    },
    {
      id: 4,
      name: "Vikram Singh",
      age: 31,
      profession: "Business Analyst",
      location: "Pune, Maharashtra",
      education: "MBA Finance",
      height: "5'11\"",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=faces",
      compatibility: 90,
      interests: ["Travel", "Photography", "Music"]
    },
    {
      id: 5,
      name: "Ananya Gupta",
      age: 27,
      profession: "Marketing Manager",
      location: "Gurgaon, Haryana",
      education: "MBA Marketing",
      height: "5'5\"",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=faces",
      compatibility: 87,
      interests: ["Fitness", "Books", "Travel"]
    },
    {
      id: 6,
      name: "Rohit Kumar",
      age: 28,
      profession: "Civil Engineer",
      location: "Chennai, Tamil Nadu",
      education: "B.Tech Civil",
      height: "5'9\"",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces",
      compatibility: 83,
      interests: ["Sports", "Technology", "Movies"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Perfect Match</h1>
          <p className="text-gray-600">Discover compatible profiles based on your preferences</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by name, profession, location..."
                className="pl-10 h-12"
              />
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="h-12 px-6"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {showFilters && <X className="w-4 h-4 ml-2" />}
            </Button>
            <Select>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compatibility">Best Match</SelectItem>
                <SelectItem value="recent">Recently Joined</SelectItem>
                <SelectItem value="age">Age</SelectItem>
                <SelectItem value="location">Location</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Age Range */}
                <div className="space-y-2">
                  <Label>Age Range: {filters.ageRange[0]} - {filters.ageRange[1]} years</Label>
                  <Slider
                    value={filters.ageRange}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, ageRange: value }))}
                    max={60}
                    min={18}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Height Range */}
                <div className="space-y-2">
                  <Label>Height Range: {filters.heightRange[0]} - {filters.heightRange[1]} cm</Label>
                  <Slider
                    value={filters.heightRange}
                    onValueChange={(value) => setFilters(prev => ({ ...prev, heightRange: value }))}
                    max={200}
                    min={140}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Select onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <Label>Education</Label>
                  <Select onValueChange={(value) => setFilters(prev => ({ ...prev, education: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="graduate">Graduate</SelectItem>
                      <SelectItem value="postgraduate">Post Graduate</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="professional">Professional Degree</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Profession */}
                <div className="space-y-2">
                  <Label>Profession</Label>
                  <Select onValueChange={(value) => setFilters(prev => ({ ...prev, profession: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select profession" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineer">Engineer</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Religion */}
                <div className="space-y-2">
                  <Label>Religion</Label>
                  <Select onValueChange={(value) => setFilters(prev => ({ ...prev, religion: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select religion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindu">Hindu</SelectItem>
                      <SelectItem value="muslim">Muslim</SelectItem>
                      <SelectItem value="christian">Christian</SelectItem>
                      <SelectItem value="sikh">Sikh</SelectItem>
                      <SelectItem value="buddhist">Buddhist</SelectItem>
                      <SelectItem value="jain">Jain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Marital Status */}
                <div className="space-y-2">
                  <Label>Marital Status</Label>
                  <Select onValueChange={(value) => setFilters(prev => ({ ...prev, maritalStatus: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never-married">Never Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Mother Tongue */}
                <div className="space-y-2">
                  <Label>Mother Tongue</Label>
                  <Select onValueChange={(value) => setFilters(prev => ({ ...prev, motherTongue: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="telugu">Telugu</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="gujarati">Gujarati</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" />
                  <Label htmlFor="verified">Verified Profiles Only</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="photos" />
                  <Label htmlFor="photos">With Photos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="online" />
                  <Label htmlFor="online">Online Now</Label>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  Apply Filters
                </Button>
                <Button variant="outline" onClick={() => setFilters({
                  ageRange: [25, 35],
                  heightRange: [150, 180],
                  location: '',
                  education: '',
                  profession: '',
                  religion: '',
                  maritalStatus: '',
                  diet: '',
                  motherTongue: ''
                })}>
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">Showing {profiles.length} profiles matching your criteria</p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map((profile) => (
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
