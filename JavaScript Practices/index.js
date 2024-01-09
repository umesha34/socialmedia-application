var student = {
    fName:'Umesha',
    lName:'SSheni',
    age:28,
    subjects:['English','Sinhala','Commerce'],

    degree:{
        name:"software",
        duration: 2,
    },
    projects:[
        {
            name:'Ecommerce',
            tech:'HTML'
        },
        {
            name:'Appoiment',
            tech:'JAVA'
        }
    ],
    dOY: function(year){
        return year - this.age;

    }
}
console.log(student);
console.log(student.subjects[1]);
console.log(student['subjects'].indexOf('English'));
console.log(student.subjects.push('Science'));
console.log(student);

console.log(student.degree.name);
console.log(student['degree'].duration)
console.log(student.projects[1].name);
console.log(student.dOY(2023));


var teacher = new Object();

teacher.fName = ' Sandamali';

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
console.log(numbers[x]) + "<br>"; 
}