
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, label, color }) => {
  return (
    <Button
      className={`${color} text-white hover:scale-105 transition-all duration-200 h-auto py-4 flex flex-col gap-2`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
};

export default QuickActionButton;
