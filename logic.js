// create header
let h1 = document.createElement('h1');
h1.innerHTML = 'Warranty<br>Information'
document.body.appendChild(h1);

// function to create text input fields
function createTextInput(labelName){
    let label = document.createElement('label');
    label.innerHTML = labelName
    label.className = 'label'
    document.body.appendChild(label);

    let br = document.createElement('br')
    document.body.appendChild(br);

    let element = document.createElement('input')
    element.setAttribute('type', 'text')
    element.className = 'element'
    document.body.appendChild(element);   

    let br2 = document.createElement('br')
    document.body.appendChild(br2)
}
// function to create buttons
function createButton(name) {
    let button = document.createElement('button')
    button.innerHTML = name
    button.className = 'button'
    document.body.appendChild(button)
    }    

// invoke text input fields
createTextInput('First Name')
createTextInput('Last Name')
createTextInput('Company Name')
createTextInput('Email')
createTextInput('Phone Number')
createTextInput('Fax Number')
createTextInput('Address')
createTextInput('City')
createTextInput('State')
createTextInput('Zip')
createTextInput('Country')
createTextInput('Unit Information')
createTextInput('Date of Purchase')
createTextInput('Model')
createTextInput('Warranty Serial Number')

// invoke button functions
createButton('Save')
createButton('Close')

