
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search as SearchIcon, Filter, MapPin, Heart, MessageCircle, Briefcase, GraduationCap } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ageRange, setAgeRange] = useState([25, 35]);
  const [selectedReligions, setSelectedReligions] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);

  const religions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain'];
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'];

  const sampleProfiles = [
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
    },
    {
      id: 3,
      name: "Anita Reddy",
      age: 26,
      profession: "Teacher",
      location: "Hyderabad, Telangana",
      education: "M.Ed",
      height: "5'4\"",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      compatibility: 85,
      interests: ["Art", "Dance", "Gardening"]
    }
  ];

  const handleReligionChange = (religion) => {
    setSelectedReligions(prev => 
      prev.includes(religion) 
        ? prev.filter(r => r !== religion)
        : [...prev, religion]
    );
  };

  const handleCityChange = (city) => {
    setSelectedCities(prev => 
      prev.includes(city) 
        ? prev.filter(c => c !== city)
        : [...prev, city]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Your Perfect Match</h1>
          <p className="text-gray-600">Discover compatible profiles based on your preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Search Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Input */}
                <div>
                  <Label htmlFor="search">Search by name or ID</Label>
                  <div className="relative mt-1">
                    <SearchIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Enter name or profile ID"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Age Range */}
                <div>
                  <Label>Age Range: {ageRange[0]} - {ageRange[1]} years</Label>
                  <div className="mt-2">
                    <Slider
                      value={ageRange}
                      onValueChange={setAgeRange}
                      max={60}
                      min={18}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Religion */}
                <div>
                  <Label>Religion</Label>
                  <div className="mt-2 space-y-2">
                    {religions.map(religion => (
                      <div key={religion} className="flex items-center space-x-2">
                        <Checkbox
                          id={religion}
                          checked={selectedReligions.includes(religion)}
                          onCheckedChange={() => handleReligionChange(religion)}
                        />
                        <Label htmlFor={religion} className="text-sm">{religion}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label>Preferred Cities</Label>
                  <div className="mt-2 space-y-2">
                    {cities.map(city => (
                      <div key={city} className="flex items-center space-x-2">
                        <Checkbox
                          id={city}
                          checked={selectedCities.includes(city)}
                          onCheckedChange={() => handleCityChange(city)}
                        />
                        <Label htmlFor={city} className="text-sm">{city}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-600">Found {sampleProfiles.length} matches</p>
                </div>
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="list">List View</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sampleProfiles.map(profile => (
                    <ProfileCard key={profile.id} {...profile} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list">
                <div className="space-y-4">
                  {sampleProfiles.map(profile => (
                    <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex">
                          <div className="w-32 h-32 flex-shrink-0">
                            <img
                              src={profile.photo}
                              alt={profile.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
                                <p className="text-gray-600 text-sm">{profile.age} years • {profile.height}</p>
                              </div>
                              <Badge className="bg-green-500 text-white">
                                {profile.compatibility}% Match
                              </Badge>
                            </div>
                            <div className="space-y-1 mb-3">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Briefcase className="w-4 h-4 text-blue-500" />
                                {profile.profession}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <GraduationCap className="w-4 h-4 text-purple-500" />
                                {profile.education}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4 text-red-500" />
                                {profile.location}
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex gap-1">
                                {profile.interests.slice(0, 2).map((interest, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {interest}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Heart className="w-4 h-4 mr-1" />
                                  Interest
                                </Button>
                                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  Chat
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
