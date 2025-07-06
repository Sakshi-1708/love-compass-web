
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Camera, 
  Edit, 
  Save, 
  Eye, 
  Heart, 
  MessageCircle, 
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+91 9876543210',
    age: 28,
    profession: 'Software Engineer',
    company: 'Tech Solutions Pvt Ltd',
    education: 'B.Tech Computer Science',
    location: 'Mumbai, Maharashtra',
    height: "5'10\"",
    weight: '70 kg',
    religion: 'Hindu',
    caste: 'Brahmin',
    motherTongue: 'Hindi',
    maritalStatus: 'Never Married',
    about: "I'm a passionate software engineer who loves creating innovative solutions. In my free time, I enjoy reading books, traveling to new places, and experimenting with new recipes.",
    interests: ['Reading', 'Travel', 'Cooking', 'Music', 'Photography']
  });

  const [stats] = useState({
    profileViews: 156,
    interestsReceived: 23,
    interestsSent: 45,
    matches: 12
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile updated:', profileData);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your profile information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Summary Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Avatar className="w-32 h-32 mx-auto">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" />
                    <AvatarFallback className="text-2xl">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="text-gray-600 mb-4">{profileData.profession}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">{stats.profileViews}</div>
                    <div className="text-xs text-gray-500">Profile Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{stats.matches}</div>
                    <div className="text-xs text-gray-500">Matches</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "outline" : "default"}
                  >
                    {isEditing ? (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Profile
                      </>
                    ) : (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </>
                    )}
                  </Button>
                  
                  {isEditing && (
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                      onClick={handleSave}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="basic" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              {/* Basic Information */}
              <TabsContent value="basic">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        {isEditing ? (
                          <Input
                            id="firstName"
                            value={profileData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <User className="w-4 h-4 text-gray-400" />
                            <span>{profileData.firstName}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        {isEditing ? (
                          <Input
                            id="lastName"
                            value={profileData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <User className="w-4 h-4 text-gray-400" />
                            <span>{profileData.lastName}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        {isEditing ? (
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>{profileData.email}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        {isEditing ? (
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span>{profileData.phone}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="profession">Profession</Label>
                        {isEditing ? (
                          <Input
                            id="profession"
                            value={profileData.profession}
                            onChange={(e) => handleInputChange('profession', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <Briefcase className="w-4 h-4 text-gray-400" />
                            <span>{profileData.profession}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="education">Education</Label>
                        {isEditing ? (
                          <Input
                            id="education"
                            value={profileData.education}
                            onChange={(e) => handleInputChange('education', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <GraduationCap className="w-4 h-4 text-gray-400" />
                            <span>{profileData.education}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="location">Location</Label>
                        {isEditing ? (
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{profileData.location}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="age">Age</Label>
                        {isEditing ? (
                          <Input
                            id="age"
                            type="number"
                            value={profileData.age}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                          />
                        ) : (
                          <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{profileData.age} years</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="about">About Me</Label>
                      {isEditing ? (
                        <Textarea
                          id="about"
                          value={profileData.about}
                          onChange={(e) => handleInputChange('about', e.target.value)}
                          className="mt-1"
                          rows={4}
                        />
                      ) : (
                        <div className="mt-1 p-3 bg-gray-50 rounded">
                          <p className="text-gray-700">{profileData.about}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label>Interests</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {profileData.interests.map((interest, index) => (
                          <Badge key={index} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Personal Details */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Height</Label>
                        <div className="mt-1 p-2 bg-gray-50 rounded">{profileData.height}</div>
                      </div>
                      <div>
                        <Label>Weight</Label>
                        <div className="mt-1 p-2 bg-gray-50 rounded">{profileData.weight}</div>
                      </div>
                      <div>
                        <Label>Religion</Label>
                        <div className="mt-1 p-2 bg-gray-50 rounded">{profileData.religion}</div>
                      </div>
                      <div>
                        <Label>Caste</Label>
                        <div className="mt-1 p-2 bg-gray-50 rounded">{profileData.caste}</div>
                      </div>
                      <div>
                        <Label>Mother Tongue</Label>
                        <div className="mt-1 p-2 bg-gray-50 rounded">{profileData.motherTongue}</div>
                      </div>
                      <div>
                        <Label>Marital Status</Label>
                        <div className="mt-1 p-2 bg-gray-50 rounded">{profileData.maritalStatus}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Partner Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Set your preferences for your ideal partner. This will help us show you more relevant profiles.</p>
                    {/* Add preference form fields here */}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity */}
              <TabsContent value="activity">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Interests Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Interests Sent</span>
                          <span className="font-semibold text-pink-600">{stats.interestsSent}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interests Received</span>
                          <span className="font-semibold text-purple-600">{stats.interestsReceived}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mutual Matches</span>
                          <span className="font-semibold text-green-600">{stats.matches}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                        Communication
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Active Conversations</span>
                          <span className="font-semibold">3</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Messages Sent</span>
                          <span className="font-semibold">127</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Messages Received</span>
                          <span className="font-semibold">89</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
