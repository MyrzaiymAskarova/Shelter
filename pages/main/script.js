


const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];


let open_modal = document.querySelectorAll('.card-item');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};

window.addEventListener("load", function () {
const showPets = document.querySelector(".modal_txt");
const cardItems = document.querySelectorAll(".card-item");

displayProductsItems(pets);

cardItems.forEach(function(itemCard) {
  itemCard.addEventListener("click", function (e) {
    const itemName = e.currentTarget.dataset.name;

    const petsName = pets.filter(function (item) {
      if (item.name === itemName) {
        // console.log(item);
        return item;
      }
    });

    if(itemName === "Katrine") {
      displayProductsItems(petsName);
    } else if(itemName === "Jennifer") {
      displayProductsItems(petsName);
    } else if(itemName === "Woody") {
      displayProductsItems(petsName);
  } else if(itemName === "Sophia") {
    displayProductsItems(petsName);
  } else if(itemName === "Timmy") {
    displayProductsItems(petsName);
  } else if(itemName === "Charly") {
    displayProductsItems(petsName);
  } 
  })
})



function displayProductsItems(pets) {
  let displayProducts = pets.map(function (item) {
    return ` <div class="card-modal">
    <img class="card-photo" src="${item.img}" alt=""/> 
    <div class="card-title">
    <h1 class="card-name">${item.name}</h1>
    <h3 class="card-item-title">${item.type} - ${item.breed} </h3>
    <p class="card-paragraf">${item.description}</p>
    <p class="card-age"><strong>Age: </strong>${item.age}</p>
    <p class="card-inoculations"><strong>Inoculations: </strong>${item.inoculations}</p>
    <p class="card-diseases"><strong>Diseases: </strong>${item.diseases}</p>
    <p class="card-parasites"><strong>Parasites: </strong>${item.parasites}</p>
    
    </div>
    </div>`;
  })

  displayProducts = displayProducts.join("");
  showPets.innerHTML = displayProducts;
}
});


// const MASK_CONTENT = document.querySelector(".mask-content");
// const MODAL_WINDOW = document.querySelector("#modal-window");
// const MODAL_WINDOW_EXIT_BUTTON = document.querySelector("#modal-window-exit-button");

// const generateModalWindow = (id) => {
//   return `
//   <div class="modal-window-image"><img src="${pets[id].img}" alt="pet-image"></div>
//   <div class="modal-window-content">
//     <h3 class="modal-window-title">${pets[id].name}</h3>
//     <h4 class="modal-window-subtitle">${pets[id].type} - ${pets[id].breed}</h4>
//     <p class="modal-window-description">${pets[id].description}</p>
//     <ul>
//       <li><span>Age:</span>&nbsp;${pets[id].age}</li>
//       <li><span>Inoculations:</span>&nbsp;${pets[id].inoculations.join(', ')}</li>
//       <li><span>Diseases:</span>&nbsp;${pets[id].diseases.join(', ')}</li>
//       <li><span>Parasites:</span>&nbsp;${pets[id].parasites.join(', ')}</li>
//     </ul>
//   </div>
//   `
// }

// MODAL_WINDOW_EXIT_BUTTON.addEventListener("click", () => {
//   MASK_CONTENT.classList.toggle("mask-content-active");
//   BODY.classList.toggle("scroll-lock");
//   MODAL_WINDOW.classList.add("hidden");
//   MODAL_WINDOW_EXIT_BUTTON.classList.add("hidden");
// })
// });

















//Menu

const menu = document.querySelector(".menu");
const burgerMenu = document.querySelector(".menu-toggle");
const menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach((el) => {
    el.addEventListener("click", () => {
        menu.classList.remove('menu-show');
        burgerMenu.classList.remove("active-burger");
    });
})

burgerMenu.addEventListener("click", () => {
    menu.classList.toggle('menu-show');
    burgerMenu.classList.toggle("active-burger");
  
})


// Slider


let position = 0;
const slidesToshow = 3;
const slidesToScroll = 1;
const wrapper = document.querySelector(".slider-wrapper");
const track = document.querySelector(".slider-cards");
// const item = document.querySelector(".card-item");
const btnPrev = document.querySelector(".slider-control-left");
const btnNext = document.querySelector(".slider-control-right");
const items = document.querySelectorAll(".card-item");
const itemsCount = items.length;
const itemWidth = wrapper.clientWidth / slidesToshow;
const movePosition = slidesToScroll * itemWidth;


items.forEach((item) => {
  item.style.minWidth = `270px`;
})

btnNext.addEventListener("click", () => {

  const itemsLeft = itemsCount - (Math.abs(position) + slidesToshow*itemWidth)/itemWidth;
  
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  
  setPosition();
  checkBtns();


});


btnPrev.addEventListener("click", ()=> {
 const itemsLeft = Math.abs(position) /itemWidth;

 position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

 setPosition();
  checkBtns();

});


const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};


const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToshow) * itemWidth;
  
}

checkBtns();





