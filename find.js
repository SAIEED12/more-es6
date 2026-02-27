const students = [
    {name: 'zahid', age: 41},
    {name: 'nahid', age: 36},
    {name: 'rahd', age: 31},
    {name: 'syed', age: 29},
    {name: 'nasib', age: 21},
    {name: 'shahid', age: 41},
    {name: 'nasib', age: 51},
]

const olderStudents = students.find(frd => frd.name==='khaled');
const olderStudents1 = students.find(frd => frd.name==='nasib');
const nStudents = students.find(frd => frd.name[0]==='n'); //will return only the first element
console.log(olderStudents);
// console.log(olderStudents1);
console.log(nStudents); 