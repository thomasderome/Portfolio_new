import React from "react";

interface Button_interface extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button_select( { children,  ...props} : Button_interface) {
    return (
        <button className="hover:bg-(--color-font) hover:text-black h-10 mr-2 w-full"
                {...props}>
            {children}
        </button>
    );
}