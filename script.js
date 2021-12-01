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



const selectElement = (type, name, label, options) =>{
    let optionsToSelect = ""; 
    for (const opt of options) {
        optionsToSelect += `
        <option value="${opt}">${opt}</option>
        `;
    }

    return `
        <div>
            <label>${label}</label>
            <${type} name="${name}" id="">
                ${optionsToSelect}
            </${type}>
        </div>
    `;
};

{/* <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}











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
        <h1>Registration</h1>
        ${inputElement('text', 'firstName', 'Keresztneved')}
        ${inputElement('file', 'profilePicture', 'Profilképed')}
        ${inputElement('email', 'personalEmail', 'Email címed')}
        ${inputElement('checkbox', 'newsLetter', 'Hírlevelet szeretnél-e kapni')}
        ${inputElement('checkbox', 'terms', 'Elfogadom a felhasználási feltételeket')}
        ${selectElement('select', 'where', 'Hol hallottál rólunk', ['interneten','ismerőstől','egyéb'])}
        <button id="btn">OK</button>
    </form>
`;





const formSubmit = (event) => {
    event.preventDefault();
    const eventTarget = event.target;
    console.log(eventTarget);
    eventTarget.classList.add('submitted');
    let selectValue = eventTarget.querySelector(`select[name="where"]`).value;
    console.log(selectValue);
};




/* const inputUpdate = (event) => {
    if (event.target.name === 'firstName') {
        document.getElementById('inputValue').innerHTML = event.target.value;
    }
    console.log(event.target.closest("#form"));
}; */







function loadEvent() {
    const rootElement = document.getElementById('root');
    rootElement.insertAdjacentHTML('afterbegin', formElement);
    /* rootElement.insertAdjacentHTML('afterbegin', `
    <div id="inputValue"></div>
    `); */

    const form = document.getElementById('form');
    form.addEventListener('submit', formSubmit);


    /* const inputList = form.querySelectorAll('input');
    for (const input of inputList) {
        input.addEventListener('input', inputUpdate)
    } */
}
  
window.addEventListener("load", loadEvent);









/* 
1. kellő távolság legyen a beviteli mezők között
1. kellő távolság legyen a beviteli mezők között és a mezőkben
2. elég nagy legyen az input mező
3. label ne legyen egy sorban az inputtal     block típus
4. label és az input össze legyen kötve (lást label for="")
5. minden képernyőméreten ugyanúgy használható legyen
6.rendezett legyen legyen egy vonalban
7. lehessen tabolni (ha formban van benne akkor lehet)
8. logikus sorrend legyen
9. aktuális input mező kiemelkedjen
10. gomb legyen hangsúlyos
11. legyen megn 
valid
required
kontraszt
*/