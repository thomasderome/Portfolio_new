import React from 'react';
import Card from '@/components/element/card';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Project() {
    const is_mobile = useIsMobile();

    return (
        <Card
            className={`mt-4 mr-3 ml-3 flex flex-col overflow-y-auto ${is_mobile ? 'max-w-160' : ''}`}
        >
            <Card className={'w-full max-w-170'}>
                <h1>TEST</h1>
            </Card>
        </Card>
    );
}
