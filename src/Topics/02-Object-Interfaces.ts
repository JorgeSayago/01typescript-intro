
const skills: string[] = ['Bash','Counter','Healing'];

interface Character{
    name: string,
    hp: number;
    skills: string[];
    hometown?: string; // el '?' significa que la variable no es obligatoria
}

const strider: Character ={
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
   // hometown: ""
};

strider.hometown = 'Riverdale'

console.table(strider)

export{};