
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Camera, Edit, Save, User, Heart, MapPin, Briefcase, GraduationCap, Phone, Mail } from 'lucide-react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Priya Sharma",
    age: 26,
    height: "5'4\"",
    profession: "Software Engineer",
    company: "Tech Solutions Pvt Ltd",
    education: "B.Tech Computer Science",
    location: "Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    email: "priya.sharma@email.com",
    aboutMe: "I am a passionate software engineer who loves to travel and explore new cuisines. Looking for a life partner who shares similar values and interests.",
    interests: ["Travel", "Photography", "Reading", "Cooking", "Music"],
    familyDetails: "Nuclear family with 2 members. Father is a businessman and mother is a homemaker.",
    expectations: "Looking for a well-educated, family-oriented person with good values and career stability."
  });

  const [profileCompletion] = useState(85);

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <Button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
          >
            {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Photo & Basic Info */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-400" />
                  </div>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full bg-pink-500 hover:bg-pink-600"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-semibold">{profileData.name}</h2>
                <p className="text-gray-600">{profileData.age} years, {profileData.height}</p>
                <Badge className="mt-2 bg-green-100 text-green-800">Verified Profile</Badge>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Overall Progress</span>
                    <span>{profileCompletion}%</span>
                  </div>
                  <Progress value={profileCompletion} className="h-2" />
                  <p className="text-sm text-gray-600">
                    Complete your profile to get better matches
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Profile Views</span>
                  <span className="font-semibold">248</span>
                </div>
                <div className="flex justify-between">
                  <span>Interests Received</span>
                  <span className="font-semibold">32</span>
                </div>
                <div className="flex justify-between">
                  <span>Interests Sent</span>
                  <span className="font-semibold">15</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    {isEditing ? (
                      <Input value={profileData.name} onChange={(e) => setProfileData({...profileData, name: e.target.value})} />
                    ) : (
                      <p className="text-gray-800">{profileData.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Age</label>
                    {isEditing ? (
                      <Input type="number" value={profileData.age} onChange={(e) => setProfileData({...profileData, age: parseInt(e.target.value)})} />
                    ) : (
                      <p className="text-gray-800">{profileData.age} years</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Height</label>
                    {isEditing ? (
                      <Input value={profileData.height} onChange={(e) => setProfileData({...profileData, height: e.target.value})} />
                    ) : (
                      <p className="text-gray-800">{profileData.height}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location</label>
                    {isEditing ? (
                      <Input value={profileData.location} onChange={(e) => setProfileData({...profileData, location: e.target.value})} />
                    ) : (
                      <p className="text-gray-800 flex items-center"><MapPin className="w-4 h-4 mr-1" />{profileData.location}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Professional & Educational Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Profession</label>
                    {isEditing ? (
                      <Input value={profileData.profession} onChange={(e) => setProfileData({...profileData, profession: e.target.value})} />
                    ) : (
                      <p className="text-gray-800 flex items-center"><Briefcase className="w-4 h-4 mr-1" />{profileData.profession}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    {isEditing ? (
                      <Input value={profileData.company} onChange={(e) => setProfileData({...profileData, company: e.target.value})} />
                    ) : (
                      <p className="text-gray-800">{profileData.company}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Education</label>
                    {isEditing ? (
                      <Input value={profileData.education} onChange={(e) => setProfileData({...profileData, education: e.target.value})} />
                    ) : (
                      <p className="text-gray-800 flex items-center"><GraduationCap className="w-4 h-4 mr-1" />{profileData.education}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    {isEditing ? (
                      <Input value={profileData.phone} onChange={(e) => setProfileData({...profileData, phone: e.target.value})} />
                    ) : (
                      <p className="text-gray-800 flex items-center"><Phone className="w-4 h-4 mr-1" />{profileData.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    {isEditing ? (
                      <Input value={profileData.email} onChange={(e) => setProfileData({...profileData, email: e.target.value})} />
                    ) : (
                      <p className="text-gray-800 flex items-center"><Mail className="w-4 h-4 mr-1" />{profileData.email}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About Me */}
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea 
                    value={profileData.aboutMe} 
                    onChange={(e) => setProfileData({...profileData, aboutMe: e.target.value})}
                    rows={4}
                  />
                ) : (
                  <p className="text-gray-800">{profileData.aboutMe}</p>
                )}
              </CardContent>
            </Card>

            {/* Interests */}
            <Card>
              <CardHeader>
                <CardTitle>Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="bg-pink-100 text-pink-700">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Family Details */}
            <Card>
              <CardHeader>
                <CardTitle>Family Details</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea 
                    value={profileData.familyDetails} 
                    onChange={(e) => setProfileData({...profileData, familyDetails: e.target.value})}
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-800">{profileData.familyDetails}</p>
                )}
              </CardContent>
            </Card>

            {/* Partner Expectations */}
            <Card>
              <CardHeader>
                <CardTitle>Partner Expectations</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea 
                    value={profileData.expectations} 
                    onChange={(e) => setProfileData({...profileData, expectations: e.target.value})}
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-800">{profileData.expectations}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
