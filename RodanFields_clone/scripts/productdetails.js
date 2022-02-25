


 let cart_data = JSON.parse(localStorage.getItem("cart4"))
 console.log('cart_data:', cart_data)

 let data_div = document.getElementById("details_display")

 cart_data.forEach(function(p){
     let image_div = document.createElement("div") //for image
     let details_div = document.createElement("div") //for details

     let img = document.createElement("img")
     img.src = p.image

     let p_name = document.createElement("h1")
     p_name.innerText = p.name

     let p_dis = document.createElement("p")
     p_dis.innerText = p.discription
      
     let p_price = document.createElement("h3")
     p_price.innerText = "$"+ p.price
      
     let span = document.createElement("span")
     span.textContent = "($289)"

     let kalrana = document.createElement("p")
     kalrana.textContent = "4 interest-free payments of $55.00 with Klarna."

     let custmise_btn = document.createElement("button")
     custmise_btn.textContent = "CUSTMISE YOUR REGIMEN"

     let for_line_klrana = document.createElement("hr")
     let br = document.createElement("br")

    //  span inside price
    p_price.append(span)



     image_div.append(img)

     details_div.append(p_name,p_dis,p_price,kalrana,for_line_klrana,br,custmise_btn)

     data_div.append(image_div,details_div)


     img.setAttribute("id","detail_img")
     details_div.setAttribute("id", "details_of_product")
     p_dis.setAttribute("id", "detail_dis")
    custmise_btn.setAttribute("id", "custmise_btn")

 })
