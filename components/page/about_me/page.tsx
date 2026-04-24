import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import Card from '@/components/element/card';

import Skills from '@/data/file/skills';
import AboutMe from '@/data/file/about_me';
import Contact from '@/data/file/contact';

export default function Page({ is_mobile }: { is_mobile: boolean }) {
    return (
        <div className={`flex ${is_mobile ? 'flex-col' : ''}`}>
            <About_me_card />
            <Skill_card />
        </div>
    );
}

function About_me_card() {
    return (
        <Card className="m-3 flex flex-col">
            <h1 className={'text-xs'}>/home/thomas/about_me.txt</h1>
            <AboutMe />
            <Contact_card />
        </Card>
    );
}

function Skill_card() {
    return (
        <Card className="m-3 flex flex-col">
            <h1 className={'text-xs'}>/home/thomas/skill.txt</h1>
            <Skills />
        </Card>
    );
}

function Contact_card() {
    return (
        <Card className={'mt-3 flex flex-col rounded-sm'}>
            <h1 className={'text-xs'}>/home/thomas/contact.txt</h1>
            <Contact />
        </Card>
    );
}
