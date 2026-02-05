import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import About_card from './about_me';
import Skill from './skill';

export default function Page() {
  const isMobile = useIsMobile();

  return (
    <div className={`flex flex-1 ${isMobile ? "flex-col" : ""}`}>
      <About_card />
      <Skill />
    </div>
  );
}
