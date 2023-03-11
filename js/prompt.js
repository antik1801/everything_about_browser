// alert('how are you?');

const showAlert = () =>{
    alert('dost taka ase?');
}
const lendMoney = () => {
   const result = confirm('will you lend me 5000 taka?');
    console.log(result);
    if (result) {
        alert('tui amar jan er dosto');
    } else {
        alert('dure giye mor. tore ajk block mere dibo')
    }
}
const getInfo = () =>{
    // alert 
    // confirm 
    const name = prompt('amar name komola khatun');
    console.log(name);
    if (name === null) {
        alert('name na dile kono kum nai');
    } else {
        alert('welcome '+ name);
    }
}
