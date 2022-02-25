var modal = document.getElementById("model")
var span = document.getElementById("close")

var btn = document.getElementById("myBtn")

btn.onclick = function() {
    modal.style.display = "block"
}


function closeModal() {
    modal.style.display = "none";
}
span.onclick = function() {
    closeModal();
};



let cart_data = JSON.parse(localStorage.getItem("cart"))
let data_div = document.getElementById("checkoutorder")

var total = 0

cart_data.forEach(function(el) {
    var img = document.createElement("img")
    img.src = el.image

    let name = document.createElement("p")
    name.innerText = el.name

    let subTotal = document.createElement("h4")
    subTotal.textContent = "Subtotal You Saved"

    let price = document.createElement("p")
    price.innerText = el.price

    let estimatedTax = document.createElement("h4")
    estimatedTax.textContent = "Estimated Tax"

    let estimatedTax_price = document.createElement("p")
    estimatedTax_price.textContent = "$0"

    let margin_hr = document.createElement("hr")

    //   let estimated_total_text = document.createElement("h3")
    //   estimated_total_text.textContent = "ESTIMATED TOTAL"




    data_div.append(img, name, subTotal, price, margin_hr, estimatedTax, estimatedTax_price)


    img.setAttribute("id", "checkoutimg")
    name.setAttribute("id", "nameofproduct")
    margin_hr.setAttribute("id", "margin")
    price.setAttribute("id", "sub")
    estimatedTax_price.setAttribute("id", "sub")
        //   estimated_total.setAttribute("id","sub")



    total = total + Number(el.price)
    console.log('total:', total)


})


var estimated_total = document.getElementById("sub1")
estimated_total.innerText = total


//   document.getElementById("pernl").style.display = "none"
var persanal_div = document.getElementById("pernl")
var persanal = document.getElementById("persnal")



function prsnl_info() {



    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    console.log(email)
    let div = document.createElement("div")

    let f_name = document.createElement("h3")
    f_name.innerText = "First Name:-" + firstname

    let l_name = document.createElement("h3")
    l_name.innerText = "Last Name:-" + lastname

    let email1 = document.createElement("h3")
    email1.innerText = "Email:-" + email

    // persanal_div.innerHTML = null


    div.append(f_name, l_name, email1)

    persanal.append(div)


    persanal_div.innerHTML = null
}


var item = document.getElementById("shipping_details")
var shipping_item = document.getElementById("shippingboder")

function shipping() {
    let fName = document.getElementById("firstName").value

    let lName = document.getElementById("lastName").value

    let phone = document.getElementById("phone").value

    let adress = document.getElementById("adress").value

    let city = document.getElementById("city").value

    let state = document.getElementById("state").value

    let zip = document.getElementById("zip").value

    let shipping_div = document.createElement("div")

    let f_name = document.createElement("h3")
    f_name.innerText = "First Name:-" + fName

    let l_name = document.createElement("h3")
    l_name.innerText = "Last Name:-" + lName

    let phone_num = document.createElement("h3")
    phone_num.innerText = "Mob.:-" + phone

    let shipping_adress = document.createElement("h3")
    shipping_adress.innerText = "Adress:-" + adress

    let shipping_city = document.createElement("h3")
    shipping_city.innerText = "City:-" + city

    let shipping_state = document.createElement("h3")
    shipping_state.innerText = "State:-" + state

    let shipping_zip = document.createElement("h3")
    shipping_zip.innerText = "Zip:-" + zip

    shipping_div.append(f_name, l_name, phone_num, shipping_adress, shipping_city, shipping_state, shipping_zip)

    item.append(shipping_div)

    shipping_div.setAttribute("id", "margin_left")

    shipping_item.innerHTML = null
}


var billing_div = document.getElementById("billing")

function payment_btn() {
    var name = document.getElementById("nameoncreaditcard").value
    var card_number = document.getElementById("cardNumber").value

    if (name == name.toUpperCase() && card_number.length == 16) {
        let p = document.createElement("p")
        p.textContent = "Your Payment Is Processing...."

        let btn = document.createElement("button")
        btn.textContent = "Confirm Your Payment"

        btn.setAttribute("id", "confirm_btn")

        billing_div.append(p, btn)
        p.setAttribute("id", "payment_alert")

        btn.onclick = function() {
            alert("Your Payment Is Sucessful!")
            setTimeout(function() {

                window.location.href = "endingpage.html";
            }, 1000);
        }

    } else {
        alert("Your card is wrong")

    }

}