/*
function  functionName(paraméterek) {
   
    paraméter === "Argumentum as a string"

};            
functionName("Argumentum as a string");


const argument = "Argument saved in a variable";
const functionName = function (paraméterek) {
    
    paraméter === "Argument saved in a variable"

};   
functionName("Argumentum");




const functionName = (paraméter1, paraméter2) => {

    paraméter1 = 1
    paraméter2 = 2

};          
functionName(1,2);

*/

const inputElement = (type, name, label) =>{
    return `
        <div>
            <label>${label}</label>
            <input type="${type}" name="${name}" id="">
        </div>
    `;
};

/*
const formElement = 
"<form>" 
+ inputElement('text', 'firstName') 
+ ${inputElement('file', 'profilePicture')}
+ ${inputElement('email', 'personalEmail')}
+ ${inputElement('radio', 'newsLetter')}
+ ${inputElement('checkbox', 'terms')}
+ "</form>";
*/


const formElement = `
    <form id="form">
        ${inputElement('text', 'firstName', 'Keresztneved')}
        ${inputElement('file', 'profilePicture', 'Profilképed')}
        ${inputElement('email', 'personalEmail', 'Email címed')}
        ${inputElement('radio', 'newsLetter', 'Hírlevelet szeretnél-e kapni')}
        ${inputElement('checkbox', 'terms', 'Elfogadol a felhasználási feltételeket')}
        <button>OK</button>
    </form>
`;





const formSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
};




const inputUpdate = (event) => {
    document.getElementById('inputValue').innerHTML = event.target.value;
};







function loadEvent() {
    const rootElement = document.getElementById('root');
    rootElement.insertAdjacentHTML('afterbegin', formElement);
    rootElement.insertAdjacentHTML('afterbegin', `
    <div id="inputValue"></div>
    `);

    const form = document.getElementById('form');
    form.addEventListener('submit', formSubmit);


    const inputList = form.querySelectorAll('input');
    for (const input of inputList) {
        input.addEventListener('input', inputUpdate)
    }
}
  
window.addEventListener("load", loadEvent);