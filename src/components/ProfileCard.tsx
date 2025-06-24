
import React from 'react';
import { Heart, MessageCircle, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProfileCardProps {
  id: number;
  name: string;
  age: number;
  profession: string;
  location: string;
  education: string;
  height: string;
  photo: string;
  compatibility: number;
  interests: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  profession,
  location,
  education,
  height,
  photo,
  compatibility,
  interests
}) => {
  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-4 right-4">
          <Badge className={`${getCompatibilityColor(compatibility)} text-white border-0 font-semibold`}>
            {compatibility}% Match
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
          <p className="text-white/90">{age} years • {height}</p>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{profession}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <GraduationCap className="w-4 h-4 text-purple-500" />
            <span className="text-sm">{education}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {interests.slice(0, 2).map((interest, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {interest}
              </Badge>
            ))}
            {interests.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{interests.length - 2} more
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
          >
            <Heart className="w-4 h-4 mr-1" />
            Interest
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
