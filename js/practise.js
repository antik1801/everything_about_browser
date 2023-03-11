// Take a key name computer value assuse
// Take a button name show and when button triggered save local storage key button value triggered

const computer = localStorage.setItem("computer", "Assus");
console.log(computer);
const myself = {
    name: "antik",
    age: 45,
    sex: 'male',
}
const taka = [28,45,65,58,12,58];
const setButton = () => {
    // change the object to string
    const stringValue = JSON.stringify(myself);
    // change the array to string to store into locals
    const stringArray = JSON.stringify(taka);
    // set the object person to localStorage
    localStorage.setItem('button','triggered');
    window.localStorage.setItem("person Information",stringValue);
    window.localStorage.setItem('taka',stringArray)
    const btnItem = localStorage.getItem('button');
    console.log(btnItem);
    // get the object into console
    const object = JSON.parse(stringValue);
    const takas = JSON.parse(stringArray);
    console.log(object);
    console.log(takas);
}
