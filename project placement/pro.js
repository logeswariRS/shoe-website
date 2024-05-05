const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "KASHI KICKS",
    price: 119,
    colors: [
      {
        code: "brown",
        img: "https://img.freepik.com/free-photo/brown-leather-shoes_1203-8175.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=ais",
      },
      {
        code: "black",
        img: "https://img.freepik.com/free-photo/black-leather-shoes_1203-8181.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=ais",
      },
    ],
  },
  {
    id: 2,
    title: "HAPPY FEET",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-133039.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=sph",
      },
      {
        code: "green",
        img: "https://img.freepik.com/premium-photo/close-up-pair-green-sneakers-isolated-white_88775-45.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=ais",
      },
    ],
  },
  {
    id: 3,
    title: "COMFORTSTEP",
    price: 109,
    colors: [
      {
        code: "blue",
        img: "https://img.freepik.com/premium-photo/pair-red-sport-shoes-isolated-white-background_1046450-2450.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=sph",
      },
      {
        code: "brown",
        img: "https://img.freepik.com/free-photo/woman-shoes_1203-8747.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=ais",
      },
    ],
  },
  {
    id: 4,
    title: "BATA",
    price: 129,
    colors: [
      {
        code: "grey",
        img: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=sph",
      },
      // {
      //   code: "lightgray",
      //   img: "./img/crater2.png",

      // },
    ],
  },
  {
    id: 5,
    title: "ELITE",
    price: 99,
    colors: [
      {
        code: "red",
        img:"https://img.freepik.com/premium-photo/pair-red-sport-shoes-isolated-white-background_1046450-2450.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=sph",
      },
      {
        code: "blue",
        img: "https://img.freepik.com/free-photo/pair-trainers_144627-3809.jpg?size=626&ext=jpg&ga=GA1.1.1864079129.1705899234&semt=ais",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});