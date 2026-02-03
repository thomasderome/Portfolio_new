import React from 'react';

import About_card from './about_me';
import Skill from './skill';

export default function Page() {
  return (
    <div className={'flex flex-1'}>
      <About_card />
      <Skill />
    </div>
  );
}
