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










const inputElement = (type, name, label, req="") =>{
    return `
        <div class="${type}">
        <input type="${type}" name="${name}" id="${name}" placeholder="${label}" title="${label}" ${req}>
        <label for="${name}">${label}</label>
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
        <div class="${type}">
        <${type} name="${name}" id="">
        ${optionsToSelect}
        </${type}>
        <label>${label}</label>
        </div>
    `;
};





const anotherFormFields = [
    {
        type: 'text',
        name: 'street',
        label: 'közterület neve'
    },
    {
        type: 'number',
        name: 'housenumber',
        label: 'Házszám'
    },
    {
        type: 'number',
        name: 'zipCode',
        label: 'Irányítószám'
    },
    {
        type: 'text',
        name: 'city',
        label: 'Település neve'
    }
];



const formFields = [
    {type: "file", name: "profilePicture", label: "Profilképed"},
    {type: "text", name: "lastName", label: "Vezetékneved?"},
    {type: "text", name: "firstName", label: "Keresztneved?"},
    {type: "email", name: "personalEmail", label: "Email címed?"},
    {type: "password", name: "password", label: "Jelszavad?"},
    {type: "checkbox", name: "newsLetter", label: "Hírlevelet szeretnél-e kapni?"},
    {type: "checkbox", name: "terms", label: "Elfogadom a felhasználási feltételeket!"}
    
];

const formElement = (ffs, id) => {
    let fieldsHTML =``;
    for (const ff of ffs) {
        fieldsHTML += inputElement(ff.type, ff.name, ff.label, ff.req);
    }
    return `
    <form id=${id}>
        <div class="reg"><h1>Registration</h1></div>
        ${fieldsHTML}
        ${selectElement('select', 'where', 'Hol hallottál rólunk?', ['interneten','ismerőstől','egyéb'])}
        <button id="btn">OK</button>
    </form>
    `;
};








const formSubmit = (event) => {
    event.preventDefault();
    const eventTarget = event.target;
    console.log(eventTarget);
    eventTarget.classList.add('submitted');
    let selectValue = eventTarget.querySelector(`select[name="where"]`).value;
    console.log(selectValue);
};




const inputUpdate = (event) => {
    if (event.target.getAttribute("name") === 'firstName') {
        document.getElementById('inputValue').innerHTML = event.target.value;
    }
    if (event.target.getAttribute("name") === 'profilePicture') {
        console.log(event.target.files[0]);
        if (document.querySelector('#form div.file img')) {
            document.querySelector('#form div.file img').remove();
            const image = URL.createObjectURL(event.target.files[0]);
            document.querySelector('#form div.file').insertAdjacentHTML('afterbegin', `
            <img src="${image}">
            `);
            document.querySelector('#form div.file label').style.display = "none";
        }else {
            const image = URL.createObjectURL(event.target.files[0]);
            document.querySelector('#form div.file').insertAdjacentHTML('afterbegin', `
            <img src="${image}">
            `);
            document.querySelector('#form div.file label').style.display = "none";
        }
    }
};







function loadEvent() {
    const rootElement = document.getElementById('root');
    rootElement.insertAdjacentHTML('afterbegin', formElement(formFields, "form"));
    //rootElement.insertAdjacentHTML('afterbegin', formElement(anotherFormFields, "form2"));
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









/* 
1.  kellő távolság legyen a beviteli mezők között
1.  kellő távolság legyen a beviteli mezők között és a mezőkben
2.  elég nagy legyen az input mező
3.  label ne legyen egy sorban az inputtal     block típus
4.  label és az input össze legyen kötve (lást label for="")
5.  minden képernyőméreten ugyanúgy használható legyen
6.  rendezett legyen legyen egy vonalban
7.  lehessen tabolni (ha formban van benne akkor lehet)
8.  logikus sorrend legyen
9.  aktuális input mező kiemelkedjen
10. gomb legyen hangsúlyos
11. legyen megn 
valid
required
kontraszt


FileReader.readAsDataURL()
URL.createObjectURL()
*/