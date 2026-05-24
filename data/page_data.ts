import interface_page from '@/components/main_frame/interface_main_frame';
import about_me from '@/components/page/about_me/page';
import parcour from '@/components/page/parcour/parcour';
import project from '@/components/page/project/project';
import contact from '@/components/page/contact/contact';

export const Pages: interface_page[] = [
    {
        name: 'about_me',
        page: about_me,
    },
    {
        name: 'parcour',
        page: parcour,
    },
    {
        name: 'project',
        page: project,
    },
    {
        name: 'contact',
        page: contact,
    },
];
