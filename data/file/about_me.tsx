import React from 'react';

export default function about_me() {
  const birthDate = new Date('09/02/2007');
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();

  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() == birthDate.getMonth() && now.getDate() < birthDate.getDate())
  )
    age--;

  return (
    <div className={'max-w-170 flex flex-col'}>
      <h1 className={'text-2xl font-bold'}>
        &gt; Thomas_Derome<span className={'blink text-xl'}>█</span>
      </h1>
      <div>
        <span className={'text-sm'}>
          I have always been passionate about computers, and I started programming by working on
          various projects in different languages. Over the years, I have been able to develop and
          improve my technical skills through self-taught passion. Now at Epitech, which fits in
          with my learning philosophy. I am curious, enjoy working in a team, and love to learn.
        </span>
      </div>
    </div>
  );
}
