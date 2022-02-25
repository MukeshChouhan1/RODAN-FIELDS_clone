var product = [
    {
        name:"Active Hydration Serum",
        discription:"Instantly boosts hydration levels by 200% and locks in moisture on skin's surface.",
        image:"https://www.rodanandfields.com/en-us/medias/ENHEFG1-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTcwMHxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaGI0LzEzNTMzMTcxNTE1NDIyLmpwZ3wyZjgzMWEzNzJhNjRjZmZmNTU3NTBjODE0NjcxYjgzY2Q2Y2MxMzgyNzk3ZjcxOTU3OGUyYTVlNzE5MjI4OTI5",
        price:"112"
    },
    {
        name:"REDEFINE + Lash Boost Special",
        discription:"Applied nightly to promote the appearance of longer, stronger and darker-looking",
        image:"https://www.rodanandfields.com/en-us/medias/HAAGRLP1-AAWA125-AATN125-AATT030-AAPM030-ENHLSH01-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3w0OTY1NnxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDg4LzEyNzgwOTE0NTA3ODA2LmpwZ3xlOGNmOTZiYjIyZGIxOTk4NGFhMDJiNDY1YzM0NzNjZjg2NDZiZTBkZTkwN2ZiOGIxZTBhNDQ0OWI5NzQ2ODMw",
        price:"343"
    },
    {
        name:"REVERSE Regimen",
        discription:"Brightens + refines skin’s surface while tackling the look of fine lines + dark spots.",
        image:"https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
        price:"102"
    },
    {
        name:"UNBLEMISH Regimen",
        discription:"Helps clear and prevent breakouts while visibly minimizing pores and fine lines. ",
        image:"https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
        price:"70"
    },
    {
        name:"REDEFINE Multi-Function Eye Cream",
        discription:"Visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet.",
        image:"https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
        price:"90"
    },
    {
        name:"SPOTLESS Regimen",
        discription:"Clears existing blemishes + prevents new ones with BPO2 Technology.",
        image:"https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
        price:"89"
    }
]

var jsonproduct = JSON.stringify(product)
localStorage.setItem("myItem",jsonproduct)

var Mydata = localStorage.getItem("myItem")
myItem = JSON.parse(Mydata)
console.log('myItem:', myItem)



let data_div = document.getElementById("show_prod")

function showProduct(){
  myItem.forEach(function(el){

    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = el.image
 
    let p_name = document.createElement("h2")
    p_name.innerText = el.name

    let dis = document.createElement("p")
    dis.innerText = el.dis

    let p_price = document.createElement("h3")
    p_price.innerText = "$"+ el.price

    let btn1 = document.createElement("button")
    btn1.textContent = "ADD TO BAG"

  div.append(img,p_name,dis,p_price,btn1)

  data_div.append(div)

  btn1.onclick = function(){
      
      addTocart(el)
  }


  img.onclick = function(){
    window.location.href = "productdetail.html"
      addtoDetails(el)
  }

  div.setAttribute("id", "item_div")
  img.setAttribute("id", "product_img")
  p_name.setAttribute("id", "product_name")
  dis.setAttribute("id", "product_dis")
  p_price.setAttribute("id", "product_price")
  btn1.setAttribute("id","add_to_bag")
  })
}
showProduct()


if(localStorage.getItem("cart")===null){
    localStorage.setItem('cart',JSON.stringify([]))
  
  }
  
  
  function addTocart(p){
  
  let cart_data = JSON.parse(localStorage.getItem("cart"));
  cart_data.push(p)
  localStorage.setItem("cart", JSON.stringify(cart_data));
  
  }









  if(localStorage.getItem("cart4")===null){
    localStorage.setItem('cart4',JSON.stringify([]))
  
  }


  function  addtoDetails(d){
  
    let cart_data = JSON.parse(localStorage.getItem("cart4"));
    cart_data.push(d)
    localStorage.setItem("cart4", JSON.stringify(cart_data));
    
    }










