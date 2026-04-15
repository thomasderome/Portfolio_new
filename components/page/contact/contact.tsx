import React, { ComponentType } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import Button from '@/components/element/button';
import Selector from '@/components/element/selector';
import { Pages } from '@/data/page_data';

export default function Contact_page() {
    const isMobile = useIsMobile();

    return (
        <div className="cathodic_effect mr-2 ml-2 flex max-w-[140vh] flex-col text-xl text-(--color-font) after:pointer-events-none after:absolute after:inset-0 after:content-['']">
            <div className="flex">
                <span>╔</span>
                <span>═══</span>
                <span className="pr-1 pl-1">Portfolio</span>
                <span className="max-w-217 overflow-hidden">
                    ═══════════════════════════════════════════════════════════════════════════════════════════════════
                </span>
                <span>╗</span>
            </div>
            <div className={`mr-1 ml-1 max-w-259 bg-(--bg-terminal) ${isMobile ? '' : 'flex'}`}>
                <div
                    className={`mt-1 ml-3 flex border-(--color-second) ${isMobile ? 'flex-col overflow-x-scroll overflow-y-hidden' : 'mb-2 max-h-100 max-w-40 flex-col'}`}
                >
                    <form action="https://formspree.io/f/xojnyvza" method="POST">
                        <label>
                            <span>Your email:</span>
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Your message:
                            <textarea
                                name="message"
                                className={'h-72 w-150 resize-none rounded-md bg-green-900'}
                                required
                            ></textarea>
                        </label>
                        <Button type="submit">Send</Button>
                    </form>
                </div>
            </div>
            <div className={'flex'}>
                <span>╚</span>
                <span className="max-w-255 overflow-hidden">
                    ═══════════════════════════════════════════════════════════════════════════════════════════════════
                </span>
                <span>╝</span>
            </div>
        </div>
    );
}
