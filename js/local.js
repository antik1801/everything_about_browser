const hello = localStorage.getItem('hello');
console.log(hello)

const setAge = () =>{
    localStorage.setItem('age', 31);
    const age = localStorage.getItem('age');
    console.log(age);
}