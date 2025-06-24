
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      duration: "Forever",
      icon: <Star className="w-8 h-8 text-gray-500" />,
      color: "border-gray-200",
      buttonColor: "bg-gray-500 hover:bg-gray-600",
      features: [
        "Basic profile creation",
        "View up to 10 profiles daily",
        "Send 5 interests per day",
        "Basic search filters",
        "Mobile app access"
      ],
      limitations: [
        "No contact details access",
        "Limited messaging",
        "No premium filters"
      ]
    },
    {
      name: "Premium",
      price: 2999,
      duration: "3 Months",
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      color: "border-purple-200",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      popular: true,
      features: [
        "Unlimited profile views",
        "Send unlimited interests",
        "View contact details",
        "Advanced search filters",
        "Priority customer support",
        "Verified badge on profile",
        "Message read receipts",
        "Profile highlighting"
      ]
    },
    {
      name: "Elite",
      price: 7999,
      duration: "6 Months",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: "border-yellow-200",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      features: [
        "Everything in Premium",
        "Personal relationship manager",
        "Profile verification service",
        "Enhanced profile visibility",
        "Exclusive elite matches",
        "Wedding planning assistance",
        "Astrology compatibility reports",
        "Background verification",
        "Photography consultation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the right membership plan to discover your life partner. 
            Join millions of success stories.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.color} hover:shadow-xl transition-shadow duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-800">
                    ₹{plan.price.toLocaleString()}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.buttonColor} text-white`}
                  size="lg"
                >
                  {plan.price === 0 ? 'Get Started Free' : 'Choose Plan'}
                </Button>

                {plan.price > 0 && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    30-day money-back guarantee
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose LoveCompass Premium?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Verified Profiles",
                description: "All premium profiles are verified for authenticity"
              },
              {
                title: "Privacy Protected",
                description: "Your information is safe with advanced privacy controls"
              },
              {
                title: "24/7 Support",
                description: "Get help whenever you need it from our support team"
              },
              {
                title: "Success Rate",
                description: "97% of our premium members find their match within 6 months"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
