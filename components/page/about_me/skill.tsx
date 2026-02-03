import React from 'react';
import Card from '@/components/element/card';
import Skills from '@/data/file/skills';

export default function skill() {
  return (
    <Card className="m-3 flex flex-col">
      <h1 className={'text-xs'}>/home/thomas/skill.txt</h1>
      <Skills />
    </Card>
  );
}
