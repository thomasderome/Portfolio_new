'use client';
import React from 'react';

import Button from '@/components/element/button';
import Card from '@/components/element/card';
import TextType from '@/components/effects/TextType';
import { useGetTranslation } from '@/hooks/translation';

export default function Contact_page() {
    const translation = useGetTranslation();

    return (
        <Card className="m-5 flex flex-col gap-4">
            <div>
                <div className="flex flex-col">
                    <h1 className="text-xs text-(--color-font)">/home/thomas/contact_form.sh</h1>
                    <div>
                        &gt;{' '}
                        <TextType
                            text={[translation?.contact.contact]}
                            typingSpeed={100}
                            pauseDuration={5000}
                            showCursor
                            cursorCharacter="█"
                            deletingSpeed={50}
                            cursorBlinkDuration={0.75}
                            loop={false}
                            className='font-[--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace]'
                        />
                    </div>
                </div>

                <form
                    action="https://formspree.io/f/xojnyvza"
                    method="POST"
                    className="mt-4 flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 border-b border-(--color-second) pb-1 focus-within:border-(--color-font)">
                            <span className="text-(--color-font) opacity-50">&gt;</span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder={translation?.contact.email + '@email.com'}
                                className="w-full bg-transparent py-1 text-(--color-font) outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col border border-(--color-second) focus-within:border-(--color-font)">
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Message:"
                                rows={8}
                                className="w-full resize-none bg-transparent p-3 text-(--color-font) outline-none"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-2 flex items-center gap-4">
                        <Button
                            type="submit"
                            className="max-w-35 border border-(--color-second) uppercase transition-all hover:bg-(--color-font) hover:text-black"
                        >
                            [ {translation?.contact.send} ]
                        </Button>
                        <div className="hidden flex-1 border-t border-dashed border-(--color-second) opacity-30 md:block"></div>
                    </div>
                </form>
            </div>
        </Card>
    );
}
