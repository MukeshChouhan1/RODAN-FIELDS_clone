let cart_data = JSON.parse(localStorage.getItem("cart"))

var data_div2 = document.getElementById("product_div")

var total = 0

cart_data.forEach(function(el) {

    let div1 = document.createElement("div") //add_prod
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")

    let img = document.createElement("img")
    img.src = el.image

    let p_name = document.createElement("h2")
    p_name.innerText = el.name

    let dis = document.createElement("p")
    dis.innerText = el.discription

    let p_price = document.createElement("h2")
    p_price.innerText = "$" + el.price

    let remove = document.createElement("button")
    remove.textContent = "Delete"




    //for delete from cart
    remove.onclick = function() {
        deleteFromCart(el)
    }



    div3.append(p_name, dis, p_price)

    div1.append(img, div3)

    div2.append(div1)

    data_div2.append(div2, remove)


    div1.setAttribute("id", "add_prod")
    img.setAttribute("id", "img-size")
    p_name.setAttribute("id", "item_name")
    dis.setAttribute("id", "discreaption")
    p_price.setAttribute("id", "add_price")
    remove.setAttribute("id", "remove_btn")



    var prod = document.getElementById("incre").value
    console.log(prod)


    total = total + Number(el.price)



    // console.log('total:', total)

})


var sub_total = document.getElementById("subTotal")
sub_total.innerHTML = "$" + total

let estimated = document.getElementById("estimated")
estimated.innerHTML = "$" + total


function apply_promo(e) {
    e.preventDefault()
    var promo = document.getElementById("promo").value
    console.log('promo:', promo)
    var res = ""
    let estimated = document.getElementById("estimated")
    if (promo === "CSS") {
        res += Math.floor(total - total * (30 / 100));
        console.log('res:', res)
        let p = document.getElementById("congo")
        p.textContent = "Congrats! Your Promo Code Is Applied"
        p.setAttribute("class", "green")

        estimated.innerHTML = "$" + res
    } else {
        let p = document.getElementById("congo")
        p.textContent = "Wrong Promo Code"

        p.setAttribute("class", "red")
    }

}


function deleteFromCart(p) {
    // console.log(p);

    const cartData = JSON.parse(localStorage.getItem("cart"));

    const newData = deleteFn(cartData, p);

    localStorage.setItem("cart", JSON.stringify(newData));

    window.location.reload();

}


function deleteFn(cartData, p) {
    for (let i = 0; i < cartData.length; i++) {
        // item to delete
        const productName = p.name;

        if (cartData[i].name == productName) {
            cartData.splice(i, 1);
        }
    }

    return cartData;
}