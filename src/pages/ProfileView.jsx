
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar,
  Users,
  Home,
  Star,
  ArrowLeft
} from 'lucide-react';

const ProfileView = () => {
  const { id } = useParams();

  // Mock profile data - in real app, this would be fetched based on the ID
  const profile = {
    id: 1,
    name: "Priya Sharma",
    age: 28,
    profession: "Software Engineer",
    company: "Tech Solutions Pvt Ltd",
    location: "Mumbai, Maharashtra",
    education: "B.Tech Computer Science, IIT Mumbai",
    height: "5'6\"",
    weight: "55 kg",
    religion: "Hindu",
    caste: "Brahmin",
    motherTongue: "Hindi",
    maritalStatus: "Never Married",
    photos: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    compatibility: 92,
    interests: ["Reading", "Travel", "Cooking", "Music", "Photography", "Dancing"],
    about: "I am a passionate software engineer who loves creating innovative solutions. In my free time, I enjoy reading books, traveling to new places, and experimenting with new recipes. I'm looking for a life partner who shares similar values and interests.",
    family: {
      father: "Business Owner",
      mother: "Homemaker",
      siblings: "1 Sister (Married)",
      familyType: "Nuclear Family",
      familyValues: "Traditional"
    },
    lifestyle: {
      diet: "Vegetarian",
      smoking: "Never",
      drinking: "Never",
      exercise: "Regular"
    },
    preferences: {
      ageRange: "26-32",
      heightRange: "5'8\" - 6'2\"",
      education: "Graduate or Higher",
      profession: "Any",
      location: "Mumbai, Delhi, Bangalore"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/search">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Search
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="overflow-hidden">
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={profile.photos[0]}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white border-0 font-semibold text-lg px-3 py-1">
                    {profile.compatibility}% Match
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{profile.name}</h1>
                    <p className="text-xl text-gray-600">{profile.age} years • {profile.height}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium">{profile.profession}</p>
                      <p className="text-sm">{profile.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="w-5 h-5 text-purple-500" />
                    <p>{profile.education}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <p>{profile.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <p>{profile.maritalStatus}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                    <Heart className="w-4 h-4 mr-2" />
                    Send Interest
                  </Button>
                  <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information Tabs */}
            <Card>
              <CardContent className="p-0">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-5 rounded-none border-b">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="photos">Photos</TabsTrigger>
                    <TabsTrigger value="family">Family</TabsTrigger>
                    <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">About Me</h3>
                        <p className="text-gray-600 leading-relaxed">{profile.about}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Interests & Hobbies</h3>
                        <div className="flex flex-wrap gap-2">
                          {profile.interests.map((interest, index) => (
                            <Badge key={index} variant="secondary" className="px-3 py-1">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Religion</p>
                            <p className="font-medium">{profile.religion}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Caste</p>
                            <p className="font-medium">{profile.caste}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Mother Tongue</p>
                            <p className="font-medium">{profile.motherTongue}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Height & Weight</p>
                            <p className="font-medium">{profile.height}, {profile.weight}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="photos" className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profile.photos.map((photo, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg">
                          <img
                            src={photo}
                            alt={`${profile.name} photo ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="family" className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Family Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Father's Occupation</p>
                          <p className="font-medium">{profile.family.father}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Mother's Occupation</p>
                          <p className="font-medium">{profile.family.mother}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Siblings</p>
                          <p className="font-medium">{profile.family.siblings}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Family Type</p>
                          <p className="font-medium">{profile.family.familyType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Family Values</p>
                          <p className="font-medium">{profile.family.familyValues}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="lifestyle" className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Lifestyle</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Diet</p>
                          <p className="font-medium">{profile.lifestyle.diet}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Smoking</p>
                          <p className="font-medium">{profile.lifestyle.smoking}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Drinking</p>
                          <p className="font-medium">{profile.lifestyle.drinking}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Exercise</p>
                          <p className="font-medium">{profile.lifestyle.exercise}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="preferences" className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Partner Preferences</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Age Range</p>
                          <p className="font-medium">{profile.preferences.ageRange}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Height Range</p>
                          <p className="font-medium">{profile.preferences.heightRange}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Education</p>
                          <p className="font-medium">{profile.preferences.education}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Profession</p>
                          <p className="font-medium">{profile.preferences.profession}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Preferred Location</p>
                          <p className="font-medium">{profile.preferences.location}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  View Mutual Connections
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Home className="w-4 h-4 mr-2" />
                  View Family Photos
                </Button>
              </CardContent>
            </Card>

            {/* Similar Profiles */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Similar Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Based on your preferences, here are some similar profiles you might be interested in.
                </p>
                <Button className="w-full mt-4" variant="outline">
                  View Similar Profiles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
