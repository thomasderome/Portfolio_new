'use client';
import React, { ComponentType } from 'react';

import { Pages } from './page_data';
import Button from '@/components/element/button';
import Selector from '@/components/element/selector';

export default function Main_Frame() {
  const [Page_render, set_page_render] = React.useState<ComponentType>(() => Pages[0].element);

  return (
    <div className="cathodic_effect mr-2 ml-2 flex max-w-[140vh] flex-col text-xl text-(--color-font) after:pointer-events-none after:absolute after:inset-0 after:content-['']">
      <div className="flex">
        <span>╔</span>
        <span>═══</span>
        <span className="pr-1 pl-1">Tefdsfsfxt</span>
        <span className="max-w-220 overflow-hidden">
          ═══════════════════════════════════════════════════════════════════════════════════════════════════
        </span>
        <span>╗</span>
      </div>
      <div className="mr-1 ml-1 flex max-w-259 bg-(--bg-terminal)">
        <Selector>
          {Pages.map((menu) => {
            return (
              <Button key={menu.name} onClick={() => set_page_render(() => menu.element)}>
                {menu.name}
              </Button>
            );
          })}
        </Selector>
        <div>
          <Page_render />
        </div>
      </div>
    </div>
  );
}
