'use client';
import React, { useState } from 'react';
import { Sun, MoonIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ToggleLightButton: React.FC = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  const handleToggleLight = () => {
    setIsLightOn((prevIsLightOn) => !prevIsLightOn);
  };

  return (
    <Button
      variant='outline'
      className='h-12 w-12 text-sm font-medium dark:text-white'
      onClick={handleToggleLight}
    >
      {isLightOn ? <Sun size={24} /> : <MoonIcon size={24} />}
    </Button>
  );
};

export default ToggleLightButton;
