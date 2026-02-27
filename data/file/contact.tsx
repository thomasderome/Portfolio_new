import React from 'react';

import Button from '@/components/element/button';
import { FaSquareGithub } from 'react-icons/fa6';

export default function Contact() {
  return (
      <div className={'flex flex-col'}>
          <h1>Contact</h1>
          <div className={'flex flex-row'}>
              <Button onClick={() => (location.href = 'https://github.com/thomasderome')}>
                  [Github]
              </Button>
              <Button onClick={() => (location.href = '/contact')}>
                  [Contact-me]
              </Button>
              <Button
                  onClick={() => (location.href = 'https://www.linkedin.com/in/thomas-derome/')}
              >
                  [Linkedin]
              </Button>
          </div>
      </div>
  );
}