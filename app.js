const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id:1,
        title: "Air Force",
        price: 25000,
        colors: [
            {
                code: "rgb(243, 157, 140)",
                img: "./image/a2.jpg",
                
            },
    
            {
                code: "rgb(224, 195, 26)",
                img: "./image/images.jpeg",
            },
        ],
            
    },
    {
        id:2,
        title: "Blazer",
        price: 15000,
        colors: [
            {
                code: "white",
                img: "./image/b6.jpeg",
            },
            {
                code: "darkblue",
                img: "./image/a6.jpeg",
            },
        ],
    },
    {
        id:3,
        title: "Jordan",
        price: 17000,
        colors: [
            {
                code: "blue",
                img: "./image/jordanblue.png",
            },
            {
                code: "red",
                img: "./image/redew.png",
            },
        ],
    },
    {
        id:4,
        title: "Crater",
        price: 5000,
        colors: [
            {
                code: "pink",
                img: "./image/crate.png",
            },
            {
                code: "grey",
                img: "./image/crater2.png",
            },
        ],
    },
    {
        id:5,
        title: "Hippie",
        price: 30000,
        colors: [
            {
                code: "grey",
                img: "./image/hippie.jpeg",
            },
            {
                code: "rgb(90, 79, 79)",
                img: "./image/hippie2.jpeg",
            },
        ],
    },
   
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".goodspic");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".goodsprice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
     wrapper.style.transform =`translateX(${-100 * index}vw)`;

     //change the choosen product
     choosenProduct = products[index];

     //change texts of current product
     currentProductTitle.textContent = choosenProduct.title;
     currentProductPrice.textContent = "₦" + choosenProduct.price ;
     currentProductImg.src = choosenProduct.colors[0].img
        //assign new colors
     currentProductColors.forEach((color,index) =>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
     })

    });
});


currentProductColors.forEach((color,index) =>{
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index) =>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white"
            size.style.color= "black"
        })
        size.style.backgroundColor= "black"
        size.style.color= "white"
    });
});

const goodsbutton = document.querySelector(".goodsbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

goodsbutton.addEventListener("click", ()=>{
    payment.style.display="flex"
})

close.addEventListener("click", ()=>{
    payment.style.display="none"
})
