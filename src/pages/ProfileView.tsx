
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Users, 
  Home,
  Star,
  ArrowLeft
} from 'lucide-react';

const ProfileView = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // Mock profile data - in real app, this would come from API
  const profile = {
    id: 1,
    name: "Priya Sharma",
    age: 26,
    profession: "Software Engineer",
    company: "Tech Solutions Ltd",
    location: "Mumbai, Maharashtra",
    education: "B.Tech Computer Science, IIT Delhi",
    height: "5'4\"",
    religion: "Hindu",
    caste: "Brahmin",
    motherTongue: "Hindi",
    maritalStatus: "Never Married",
    photos: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=faces"
    ],
    aboutMe: "I'm a passionate software engineer who loves creating innovative solutions. I enjoy reading, traveling, and spending time with family. Looking for a life partner who shares similar values and interests.",
    interests: ["Reading", "Traveling", "Cooking", "Movies", "Music", "Technology"],
    familyDetails: {
      fatherOccupation: "Business Owner",
      motherOccupation: "Teacher", 
      siblings: "1 Brother (Married)",
      familyType: "Joint Family",
      familyValues: "Traditional"
    },
    preferences: {
      ageRange: "28-32 years",
      heightRange: "5'6\" - 6'2\"",
      education: "Graduate or higher",
      profession: "Any",
      location: "Mumbai, Delhi, Bangalore"
    },
    lifestyle: {
      diet: "Vegetarian",
      smoking: "Never",
      drinking: "Never"
    },
    compatibility: 92
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link to="/search" className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Photos */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                  <img
                    src={profile.photos[0]}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-500 text-white">
                      {profile.compatibility}% Match
                    </Badge>
                    <Badge variant="outline">
                      ID: {profile.id}
                    </Badge>
                  </div>
                  
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{profile.name}</h1>
                  <p className="text-gray-600 mb-4">{profile.age} years • {profile.height}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <Button
                      variant={isLiked ? "default" : "outline"}
                      className={`flex-col h-16 ${isLiked ? 'bg-pink-500 text-white' : 'border-pink-200 text-pink-600 hover:bg-pink-50'}`}
                      onClick={() => setIsLiked(!isLiked)}
                    >
                      <Heart className={`w-5 h-5 mb-1 ${isLiked ? 'fill-current' : ''}`} />
                      <span className="text-xs">Like</span>
                    </Button>
                    <Button variant="outline" className="flex-col h-16 border-blue-200 text-blue-600 hover:bg-blue-50">
                      <MessageCircle className="w-5 h-5 mb-1" />
                      <span className="text-xs">Chat</span>
                    </Button>
                    <Button variant="outline" className="flex-col h-16 border-gray-200 text-gray-600 hover:bg-gray-50">
                      <Share2 className="w-5 h-5 mb-1" />
                      <span className="text-xs">Share</span>
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {profile.photos.slice(1).map((photo, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src={photo}
                          alt={`${profile.name} ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-500" />
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Age:</span>
                        <span className="font-medium">{profile.age} years</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{profile.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Profession:</span>
                        <span className="font-medium">{profile.profession}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Education:</span>
                        <span className="font-medium">{profile.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Height:</span>
                        <span className="font-medium">{profile.height}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Religion:</span>
                        <span className="font-medium">{profile.religion}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Mother Tongue:</span>
                        <span className="font-medium">{profile.motherTongue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Marital Status:</span>
                        <span className="font-medium">{profile.maritalStatus}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{profile.aboutMe}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interests & Hobbies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="family" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Home className="w-5 h-5 mr-2 text-green-500" />
                      Family Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Father's Occupation:</span>
                        <span className="font-medium">{profile.familyDetails.fatherOccupation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Mother's Occupation:</span>
                        <span className="font-medium">{profile.familyDetails.motherOccupation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Siblings:</span>
                        <span className="font-medium">{profile.familyDetails.siblings}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Family Type:</span>
                        <span className="font-medium">{profile.familyDetails.familyType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Family Values:</span>
                        <span className="font-medium">{profile.familyDetails.familyValues}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Partner Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Age Range:</span>
                        <span className="font-medium">{profile.preferences.ageRange}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Height Range:</span>
                        <span className="font-medium">{profile.preferences.heightRange}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Education:</span>
                        <span className="font-medium">{profile.preferences.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Profession:</span>
                        <span className="font-medium">{profile.preferences.profession}</span>
                      </div>
                      <div className="flex items-center gap-2 md:col-span-2">
                        <span className="text-gray-600">Preferred Locations:</span>
                        <span className="font-medium">{profile.preferences.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lifestyle" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lifestyle Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Diet:</span>
                        <Badge variant="outline" className="font-medium">
                          {profile.lifestyle.diet}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Smoking:</span>
                        <Badge variant="outline" className="font-medium">
                          {profile.lifestyle.smoking}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Drinking:</span>
                        <Badge variant="outline" className="font-medium">
                          {profile.lifestyle.drinking}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
