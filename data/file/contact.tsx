import React from 'react';
import { useGetTranslation } from '@/hooks/translation';
import { useIsMobile } from '@/hooks/use-mobile';

import Button from '@/components/element/button';

export default function Contact() {
    const translation = useGetTranslation();
    const is_mobile = useIsMobile();

    return (
        <div className={'flex flex-col'}>
            <h1>Contact:</h1>
            <div className={`flex ${is_mobile ? "flex-col" : "flex-row"}`}>
                <Button onClick={() => (location.href = 'https://github.com/thomasderome')}>
                    [Github]
                </Button>
                <Button onClick={() => (location.href = '/contact')}>
                    [{translation?.contact?.contact_me}]
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
