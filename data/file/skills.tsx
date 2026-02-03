const skill_data = {
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

  let result = `${character.start}\n`;

  const keys = Object.keys(skill_data);
  const num_keys = keys.length;

  keys.forEach((skill_key, index_key) => {
    result += `${index_key < num_keys - 1 ? character.jonction : character.right}${character.line_horizontal.repeat(2)} ${skill_key}/\n`;

    const len = skill_data[skill_key].length;

    skill_data[skill_key].forEach((item, index) => {
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
