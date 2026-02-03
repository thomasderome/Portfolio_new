import React from 'react';

import Card from '@/components/element/card';
import AboutMe from '@/data/file/about_me';

export default function About_Card() {
  return (
    <Card className="m-3 flex flex-col">
      <h1 className={'text-xs'}>/home/thomas/about_me.txt</h1>
      <AboutMe />
    </Card>
  );
}
