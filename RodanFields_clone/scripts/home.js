var name_div = document.getElementById("myBtn")
var product = [{
        name: "R + F Lash Boost",
        discription: "1 Lash Serum in the U.S. in 2020!* Our famous lash conditioning serum is applied nightly to promote the appearance of longer, stronger and darker-looking lashes (or brows!)",
        size: "5ML",
        use: "Once daily, in the PM",
        price: "155",
        image: "https://www.rodanandfields.com/en-us/medias/ENHLSH01-458x458.jpg?context=bWFzdGVyfGltYWdlc3w0MDkxfGltYWdlL2pwZWd8aW1hZ2VzL2gzNS9oODgvMTM5Nzc1NDQ2ODc2NDYuanBnfDlmYTEwMTFkMjFiNzMwYjlhNjU0NTNiYjU5ZDBmMGY3ZWIzNmNiZmYwMTJhMGYzMTFkMzA1ODhkOGI1MjdlMmE"
    },
    {
        name: "REDEFINE Multi-Function Eye Cream",
        discription: "Younger-looking eyes in a wink! Our intensive anti-aging eye cream visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet.",
        size: "15ML",
        use: "Twice daily, in the AM + PM",
        price: "70",
        image: "https://www.rodanandfields.com/en-us/medias/AAEY015-458x458.jpg?context=bWFzdGVyfGltYWdlc3wxMDQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDljLzEzOTc3NTQ0NDI1NTAyLmpwZ3xiNzQ3NjJkOWU1Y2QxOWM5ZDQ4ZGQzZDA1ZjdkNzBhZmRhMjdkYzE5MTU0MWZiZjY5MDc3NzEyMjBkM2E1YThj"
    },
    {
        name: "Active Hydration Serum",
        discription: "Quench thirsty skin. Instantly boosts hydration levels by 200% + locks in moisture on the surface of the skin. Add to any Regimen for even better results.",
        size: "30ML",
        use: "Once daily, in the PM",
        price: "112",
        image: "https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2g2NS9oYjUvMTQ1MzIxNjY4MTE2NzgucG5nfGNhNTQzZTUyNmU3NTMxZjAxZTc5NThjMmQ3MzU0YzVkNTY1OTExMThjNWEyMDBiYTIwMTFhNWM1Yzk4YTk3ODI"
    },
    {
        name: "REDEFINE Regimen",
        discription: "Redefine your skin. Our best selling anti-aging skincare routine visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles.",
        size: "3ML",
        use: "In the PM",
        price: "220",
        image: "https://www.rodanandfields.com/en-us/medias/HAAGR-458x458.jpg?context=bWFzdGVyfGltYWdlc3w5MjA3fGltYWdlL2pwZWd8aW1hZ2VzL2gzZC9oMzMvMTM5Nzc1NDM5MDEyMTQuanBnfDU5YTY2OWVkYTZjODM5NzY4YTVhZmJlMGNjZDQzNDU1MzUzMWY2MmUzMzY4ZTkxMTgyMWIwYThkNjYxZGRjMzc"
    },
    {
        name: "Rodan + Fields Active Hydration Body Replenish",
        discription: "All-over hydration. Get younger-looking, younger-acting skin with our breakthrough body moisturizer that instantly + continuously hydrates.",
        size: "200ML",
        use: " Daily",
        price: "66",
        image: "https://www.rodanandfields.com/en-us/medias/ENBR001-458x458.jpg?context=bWFzdGVyfGltYWdlc3w3Nzc0fGltYWdlL2pwZWd8aW1hZ2VzL2g3MS9oMmQvMTM5Nzc1NDMzNzY5MjYuanBnfDMxMTEyY2E3ZDMzNTVjZDA0OGRmODE4NTk4NmNkZjcyMTQwNGM3NDMxNTRkNGEyNTI5MDI2ZTM4OWRkZmEzMzc"
    }

]


var jsonproduct = JSON.stringify(product)
localStorage.setItem("myProduct", jsonproduct)



let myProduct = localStorage.getItem("myProduct")
myProduct = JSON.parse(myProduct)
console.log('myProduct:', myProduct)

let data_div_home = document.getElementById("product")

function showProduct() {
    myProduct.forEach(function(el) {

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.image

        let p_name = document.createElement("h2")
        p_name.innerText = el.name

        let dis = document.createElement("p")
        dis.innerText = el.discription

        let p_price = document.createElement("h3")
        p_price.innerText = "$" + el.price

        let btn = document.createElement("button")
        btn.textContent = "ADD TO BAG"

        div.append(img, p_name, dis, p_price, btn)

        data_div_home.append(div)

        btn.onclick = function() {
            addTocart(el)
        }

        div.setAttribute("id", "item_div")
        img.setAttribute("id", "product_img")
        p_name.setAttribute("id", "product_name")
        dis.setAttribute("id", "product_dis")
        p_price.setAttribute("id", "product_price")
        btn.setAttribute("id", "add_to_bag")

    })
}
showProduct(myProduct)


if (localStorage.getItem("cart") === null) {
    localStorage.setItem('cart', JSON.stringify([]))

}



function addTocart(p) {

    let cart_data = JSON.parse(localStorage.getItem("cart"));
    cart_data.push(p)
    localStorage.setItem("cart", JSON.stringify(cart_data));

}



var span1 = document.getElementById("close1")
var modal1 = document.getElementById("model1")

var btn1 = document.getElementById("myBtn1")

btn1.onclick = function() {
    modal1.style.display = "block"
}


function closeModal1() {
    modal1.style.display = "none";
}
span1.onclick = function() {
    closeModal1();
};