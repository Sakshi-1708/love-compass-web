
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Bell, Shield, Eye, Heart, MessageCircle, Globe } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      newMatches: true,
      interests: true,
      messages: true,
      profileViews: false,
      promotions: false
    },
    privacy: {
      profileVisibility: 'all',
      contactInfo: 'premium',
      photoVisibility: 'all',
      lastSeen: true
    },
    preferences: {
      ageRange: { min: 25, max: 35 },
      location: 'anywhere',
      education: 'any',
      profession: 'any'
    }
  });

  const handleNotificationChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: value }
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      privacy: { ...prev.privacy, [key]: value }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your account preferences and privacy settings</p>
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-500" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">New Matches</Label>
                    <p className="text-sm text-gray-600">Get notified when you have new matches</p>
                  </div>
                  <Switch
                    checked={settings.notifications.newMatches}
                    onCheckedChange={(value) => handleNotificationChange('newMatches', value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Interest Received</Label>
                    <p className="text-sm text-gray-600">Get notified when someone shows interest</p>
                  </div>
                  <Switch
                    checked={settings.notifications.interests}
                    onCheckedChange={(value) => handleNotificationChange('interests', value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">New Messages</Label>
                    <p className="text-sm text-gray-600">Get notified for new messages</p>
                  </div>
                  <Switch
                    checked={settings.notifications.messages}
                    onCheckedChange={(value) => handleNotificationChange('messages', value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Profile Views</Label>
                    <p className="text-sm text-gray-600">Get notified when someone views your profile</p>
                  </div>
                  <Switch
                    checked={settings.notifications.profileViews}
                    onCheckedChange={(value) => handleNotificationChange('profileViews', value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Promotions</Label>
                    <p className="text-sm text-gray-600">Receive promotional offers and updates</p>
                  </div>
                  <Switch
                    checked={settings.notifications.promotions}
                    onCheckedChange={(value) => handleNotificationChange('promotions', value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-2 block">Profile Visibility</Label>
                  <Select
                    value={settings.privacy.profileVisibility}
                    onValueChange={(value) => handlePrivacyChange('profileVisibility', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Visible to All Members</SelectItem>
                      <SelectItem value="premium">Premium Members Only</SelectItem>
                      <SelectItem value="matches">My Matches Only</SelectItem>
                      <SelectItem value="hidden">Hidden</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-base font-medium mb-2 block">Contact Information</Label>
                  <Select
                    value={settings.privacy.contactInfo}
                    onValueChange={(value) => handlePrivacyChange('contactInfo', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Visible to All</SelectItem>
                      <SelectItem value="premium">Premium Members Only</SelectItem>
                      <SelectItem value="accepted">Accepted Interests Only</SelectItem>
                      <SelectItem value="hidden">Hidden</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-base font-medium mb-2 block">Photo Visibility</Label>
                  <Select
                    value={settings.privacy.photoVisibility}
                    onValueChange={(value) => handlePrivacyChange('photoVisibility', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Visible to All</SelectItem>
                      <SelectItem value="premium">Premium Members Only</SelectItem>
                      <SelectItem value="protected">Password Protected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-medium">Show Last Seen</Label>
                    <p className="text-sm text-gray-600">Let others see when you were last active</p>
                  </div>
                  <Switch
                    checked={settings.privacy.lastSeen}
                    onCheckedChange={(value) => handlePrivacyChange('lastSeen', value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  Partner Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-medium mb-2 block">Minimum Age</Label>
                    <Input
                      type="number"
                      value={settings.preferences.ageRange.min}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          ageRange: { ...prev.preferences.ageRange, min: parseInt(e.target.value) }
                        }
                      }))}
                    />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-2 block">Maximum Age</Label>
                    <Input
                      type="number"
                      value={settings.preferences.ageRange.max}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          ageRange: { ...prev.preferences.ageRange, max: parseInt(e.target.value) }
                        }
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-base font-medium mb-2 block">Preferred Location</Label>
                  <Select value={settings.preferences.location}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anywhere">Anywhere in India</SelectItem>
                      <SelectItem value="same-city">Same City</SelectItem>
                      <SelectItem value="same-state">Same State</SelectItem>
                      <SelectItem value="specific">Specific Cities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-base font-medium mb-2 block">Education Preference</Label>
                  <Select value={settings.preferences.education}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Education</SelectItem>
                      <SelectItem value="graduate">Graduate & Above</SelectItem>
                      <SelectItem value="postgraduate">Post Graduate</SelectItem>
                      <SelectItem value="professional">Professional Degree</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-base font-medium mb-2 block">Email Address</Label>
                    <Input type="email" defaultValue="john.doe@example.com" />
                  </div>
                  <div>
                    <Label className="text-base font-medium mb-2 block">Phone Number</Label>
                    <Input type="tel" defaultValue="+91 98765 43210" />
                  </div>
                  <Button>Update Information</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline">Change Password</Button>
                  <Button variant="outline">Enable Two-Factor Authentication</Button>
                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-red-600 mb-2">Danger Zone</h4>
                    <Button variant="destructive">Deactivate Account</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
