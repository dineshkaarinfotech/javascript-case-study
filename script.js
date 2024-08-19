const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const addressEl = document.getElementById("address");
const cityEl = document.getElementById("city");
const provinceEl = document.getElementById("province");
const postalCodeEl = document.getElementById("postalCode");

let firstNameErrorMsgEl = document.getElementById("firstNameErrorMsg")
let lastNameErrorMsgEl = document.getElementById("lastNameErrorMsg")
let addressErrorMsgEl = document.getElementById("addressErrorMsg")
let cityErrorMsgEl = document.getElementById("cityErrorMsg")
let provinceErrorMsgEl = document.getElementById("provinceErrorMsg")
let postalCodeErrorMsgEl = document.getElementById("postalCodeErrorMsg")


let firstNameCondition = false
let lastNameCondition = false
let addressCondition = false
let cityCondition = false
let provinceCondition = false
let postalCodeCondition = false

const formEl = document.getElementById("formEl");
formEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(firstNameEl.value === ""){
        firstNameErrorMsgEl.textContent="*Please Enter First Name"
        firstNameErrorMsgEl.classList.add("error-msg")
        firstNameCondition = false
    }else{
        firstNameErrorMsgEl.textContent=""
        firstNameErrorMsgEl.classList.remove("error-msg")
        firstNameCondition = true

    }
    if(lastNameEl.value === ""){
        lastNameErrorMsgEl.textContent="*Please Enter Last Name"
        lastNameErrorMsgEl.classList.add("error-msg")
        lastNameCondition = false
    }else{
        lastNameErrorMsgEl.textContent=""
        lastNameErrorMsgEl.classList.remove("error-msg")
        lastNameCondition = true

    }
    if(addressEl.value === ""){
        addressErrorMsgEl.textContent="*Please Enter Valid Address"
        addressErrorMsgEl.classList.add("error-msg")
        addressCondition = false
    }else{
        addressErrorMsgEl.textContent=""
        addressErrorMsgEl.classList.remove("error-msg")
        addressCondition = true

    }
    if(cityEl.value === ""){
        cityErrorMsgEl.textContent="*Please Enter Valid City"
        cityErrorMsgEl.classList.add("error-msg")
        cityCondition = false
    }else{
        cityErrorMsgEl.textContent=""
        cityErrorMsgEl.classList.remove("error-msg")
        cityCondition = true

    }
    if(provinceEl.value === ""){
        provinceErrorMsgEl.textContent="*Please Select Province"
        provinceErrorMsgEl.classList.add("error-msg")
        provinceCondition = false
    }else{
        provinceErrorMsgEl.textContent=""
        provinceErrorMsgEl.classList.remove("error-msg")
        provinceCondition = true

    }
    if(postalCodeEl.value === ""){
        postalCodeErrorMsgEl.textContent="*Please Enter Postal Code"
        postalCodeErrorMsgEl.classList.add("error-msg")
        postalCodeCondition = false
    }else{
        postalCodeErrorMsgEl.textContent=""
        postalCodeErrorMsgEl.classList.remove("error-msg")
        postalCodeCondition = true

    }
    if(firstNameCondition && lastNameCondition && addressCondition && cityCondition && provinceCondition && postalCodeCondition){
        const widget1qtyEl = document.getElementById("widget1qty");
        const widget2qtyEl = document.getElementById("widget2qty");
        const widget3qtyEl = document.getElementById("widget3qty");

        let widget1qtyCount = widget1qtyEl.value * 5
        let widget2qtyCount = widget2qtyEl.value * 15
        let widget3qtyCount = widget3qtyEl.value * 25

        const radios = document.getElementsByName('shippingType');
        let selectedValue;
        for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }

    }
        let totalCost = parseInt(selectedValue)+widget1qtyCount+widget2qtyCount+widget3qtyCount
        alert("Total Cost is : "+totalCost)
        window.location.href = "successPage.html"; 
    }
})

