
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, X, MessageCircle, Eye, Clock } from 'lucide-react';

const InterestCard = ({ interest, type = 'received' }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={interest.photo}
            alt={interest.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{interest.name}</h3>
            <p className="text-gray-600 text-sm">{interest.age} years • {interest.location}</p>
            <p className="text-gray-600 text-sm">{interest.profession}</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge className={getStatusColor(interest.status)}>
                {interest.status}
              </Badge>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {interest.time}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {type === 'received' && interest.status === 'pending' && (
              <>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  <Heart className="w-4 h-4 mr-1" />
                  Accept
                </Button>
                <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                  <X className="w-4 h-4 mr-1" />
                  Decline
                </Button>
              </>
            )}
            {interest.status === 'accepted' && (
              <Button size="sm" variant="outline">
                <MessageCircle className="w-4 h-4 mr-1" />
                Chat
              </Button>
            )}
            <Button size="sm" variant="ghost">
              <Eye className="w-4 h-4 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InterestCard;
