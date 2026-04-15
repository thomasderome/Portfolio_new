import { Settings as Settings_icon } from '@/components/animate-ui/icons/settings';
import { useState } from 'react';


export default function Settings() {
    const [menu_state, set_menu_state] = useState<boolean>(false);

    return (
        <div className="absolute top-[5%] left-[95%] z-90">
            <Settings_icon animateOnHover onClick={() => set_menu_state(!menu_state)} color={"#fff"} className="size-5" />
            <div className={menu_state ? "" : "hidden"}>
                <span>test</span>
            </div>
        </div>
    );
}
