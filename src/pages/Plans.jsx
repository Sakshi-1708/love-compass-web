
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Zap } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      duration: "Forever",
      popular: false,
      features: [
        "Create basic profile",
        "View limited profiles",
        "Send 5 interests per month",
        "Basic search filters",
        "Profile verification badge"
      ],
      limitations: [
        "Cannot view contact details",
        "Limited photo uploads",
        "No premium support"
      ],
      buttonText: "Current Plan",
      buttonVariant: "outline",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Premium",
      price: "₹1,999",
      duration: "3 months",
      popular: true,
      features: [
        "All Basic features",
        "View unlimited profiles",
        "Send unlimited interests",
        "Advanced search filters",
        "Priority customer support",
        "See who viewed your profile",
        "Chat with matches",
        "Phone number visibility"
      ],
      limitations: [],
      buttonText: "Choose Premium",
      buttonVariant: "default",
      icon: <Crown className="w-6 h-6" />
    },
    {
      name: "Elite",
      price: "₹4,999",
      duration: "6 months",
      popular: false,
      features: [
        "All Premium features",
        "Dedicated relationship manager",
        "Profile highlighting",
        "Advanced matching algorithm",
        "Video call feature",
        "Priority profile display",
        "Personalized recommendations",
        "Wedding planning assistance",
        "Exclusive elite member events"
      ],
      limitations: [],
      buttonText: "Choose Elite",
      buttonVariant: "default",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const additionalServices = [
    {
      title: "Profile Verification",
      price: "₹299",
      description: "Get your profile verified with a blue tick for enhanced credibility"
    },
    {
      title: "Professional Photoshoot",
      price: "₹2,999",
      description: "High-quality professional photos to make your profile stand out"
    },
    {
      title: "Horoscope Matching",
      price: "₹499",
      description: "Detailed astrological compatibility analysis with potential matches"
    },
    {
      title: "Personal Matchmaker",
      price: "₹9,999",
      description: "One-on-one consultation with expert matchmakers for 3 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Perfect Plan</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your life partner with our premium features designed to help you connect with the right person
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-pink-500 shadow-xl' : 'border shadow-lg'} hover:shadow-2xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Features included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button 
                  className={`w-full h-12 ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' : ''}`}
                  variant={plan.buttonVariant}
                  disabled={plan.buttonText === "Current Plan"}
                >
                  {plan.buttonText}
                </Button>

                {plan.popular && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Save 33% compared to monthly billing
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-gray-600">Enhance your matrimonial journey with our premium add-on services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-2xl font-bold text-pink-600 mb-3">{service.price}</p>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I upgrade my plan anytime?</h3>
              <p className="text-gray-600 text-sm">Yes, you can upgrade your plan at any time. The remaining amount will be adjusted towards your new plan.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What happens after my plan expires?</h3>
              <p className="text-gray-600 text-sm">Your account will revert to the basic plan. You can renew anytime to continue enjoying premium features.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is there a refund policy?</h3>
              <p className="text-gray-600 text-sm">We offer a 7-day money-back guarantee if you're not satisfied with our premium features.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How secure is my payment?</h3>
              <p className="text-gray-600 text-sm">All payments are processed through secure, encrypted channels. We never store your payment information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
