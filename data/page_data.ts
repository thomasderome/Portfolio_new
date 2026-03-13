import interface_page from '@/components/main_frame/interface_main_frame';
import about_me from '@/components/page/about_me/page';
import project from '@/components/page/project/project';

export const Pages: interface_page[] = [
    {
        name: 'about_me',
        element: about_me,
    },
    {
        name: 'project',
        element: project,
    },
];
