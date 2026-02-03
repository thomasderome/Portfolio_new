import interface_page from './interface_main_frame';
import about_me from '@/components/page/about_me/page';
import project from '@/components/page/project/project';

export const Pages: interface_page[] = [
  {
    name: 'About-me',
    element: about_me,
  },
  {
    name: 'Project',
    element: project,
  },
];
