const numbers = [1,2,3,4,5]
const evenNumbers = numbers.filter(num => num%2 === 0)
console.log(evenNumbers);

const friends = ['nahid', 'zahid', 'shahid', 'syed', 'naved', 'nasib', 'nurul']
const nFriends =  friends.filter(frd => frd[0] === 'n')
console.log(nFriends);

const students = [
    {name: 'zahid', age: 41},
    {name: 'nahid', age: 36},
    {name: 'rahd', age: 31},
    {name: 'syed', age: 29},
    {name: 'nasib', age: 21},
    {name: 'shahid', age: 41},
    {name: 'nasib', age: 51},
]

const olderStudents = students.filter(frd => frd.age>30);
console.log(olderStudents); 