interface interface_data {
    Languages: string[];
    Frameworks: string[];
    Environment: string[];
}

const skill_data: interface_data = {
    Languages: ['Python', 'Typescript', 'Javascript', 'HTML', 'CSS'],
    Frameworks: ['React', 'NextJS', 'ExpressJS', 'TailwindCSS', 'FastApi', 'Discord.py'],
    Environment: ['Docker', 'MySQL', 'NodeJS'],
};

function gen_tree() {
    const character = {
        line_horizontal: '─',
        line_vertical: '│',
        jonction: '├',
        start: '.',
        right: '└',
    };

    let result: string = `${character.start}\n`;

    const keys = Object.keys(skill_data) as (keyof interface_data)[];
    const num_keys: number = keys.length;

    keys.forEach((skill_key: keyof interface_data, index_key: number) => {
        result += `${index_key < num_keys - 1 ? character.jonction : character.right}${character.line_horizontal.repeat(2)} ${skill_key}/\n`;

        const len: number = skill_data[skill_key].length;

        skill_data[skill_key].forEach((item: string, index: number) => {
            if (index_key < num_keys - 1) result += `${character.line_vertical}`;
            else result += ' ';
            result += '   ';
            if (index == len - 1) {
                result += `${character.right}${character.line_horizontal.repeat(2)} ${item}\n`;
            } else {
                result += `${character.jonction}${character.line_horizontal.repeat(2)} ${item}\n`;
            }
        });
    });
    return result;
}

export default function skills() {
    return <pre className={'text-xs'}>{`${gen_tree()}`}</pre>;
}
