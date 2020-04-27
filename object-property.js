const students = [
    { id: 22, name: 'Galib'},
    { id: 26, name: 'Imtiaz'},
    { id: 32, name: 'Rupa'},
    { id: 25, name: 'Asif'},
   
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
console.log( ids);
console.log( names);

const bigger = students.filter( s => s.id>25);
console.log(bigger);

const bigger1 = students.find( s => s.id>25);
console.log(bigger1);