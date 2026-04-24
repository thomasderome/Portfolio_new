import { ComponentType } from 'react';

export default interface interface_data_page {
    name: string;
    page: ComponentType<{ is_mobile: boolean }>;
}
