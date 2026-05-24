import React from 'react';
import Card from '@/components/element/card';
import ParcourData from '@/data/file/parcour';

export default function Parcour({ is_mobile }: { is_mobile: boolean }) {
    return (
        <div className={`flex w-full ${is_mobile ? 'flex-col' : ''}`}>
            <Card className="m-3 flex w-full flex-col">
                <div className="mb-4 flex items-center gap-2 border-b border-(--color-second) pb-2 text-xs opacity-50">
                    <span className="text-(--color-second)">[DIR]</span>
                    <span>/home/thomas/parcours.txt</span>
                </div>
                <ParcourData />
            </Card>
        </div>
    );
}
