// Свайпер
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//плавный скролл при нажатии на ссылку

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// burger menu

let menu_btn = document.querySelector(".open");
let menu = document.querySelector(".navigation");
let li = document.querySelectorAll("nav a");
menu_btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.querySelector(".fa-bars").classList.toggle("fa-xmark");
});
li.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.remove("active");
    document.querySelector(".fa-xmark").classList.remove("fa-xmark");
  })
})

window.addEventListener('keydown', e => {
  if (e.key === "Escape") {
    menu.classList.remove('active')
  }
})
// тема 

document.querySelector('.dark').addEventListener('click', () => {
  document.querySelector('body').classList.add('active')
  menu.classList.remove('active')
})
document.querySelector('.white').addEventListener('click', () => {
  document.querySelector('body').classList.remove('active')
  menu.classList.remove('active')
})

//выпадающее меню

let faq = document.querySelector(".fa-angle-down");
let submenu = document.querySelector(".submenu");

faq.addEventListener("click", () => {
  submenu.classList.toggle("open");
  faq.classList.toggle("active");
});



//кнопки

let buttons = document.querySelectorAll(".project"),
  project = document.querySelector(".modal-project"),
  btn_submit = document.querySelectorAll(".close");
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    project.classList.add("active");
    menu.classList.remove("active");
    document.querySelector(".fa-bars").classList.remove("fa-xmark");
  });
});
btn_submit.forEach((e) => {
  e.addEventListener("click", () => {
    project.classList.remove("active");
  });
});
window.addEventListener('keydown', e => {
  if (e.key === "Escape") {
    project.classList.remove('active')
  }
})
document.querySelector('.modal-project-content').addEventListener("click", e => {
  e._isClickWithModal = true
})

project.addEventListener("click", e => {
  if (e._isClickWithModal) return
  e.currentTarget.classList.remove('active')
})


function telegram() {
  window.open('https://t.me/Almazikt')
}

// телфон

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), (input) => {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

// перенаправление на другой сайт

let almet = document.querySelector(".almet");
let moscow = document.querySelector(".moscow");
almet.addEventListener("click", () => {
  window.open("https://yandex.ru/maps/-/CCUcuRtStD");
});
moscow.addEventListener("click", () => {
  window.open("https://yandex.ru/maps/-/CCUNV2dNWC");
});

// Появление с помощью скролла
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let options = {
  threshold: [0.3],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

// с слайдера на карточку
let swipers = document.querySelectorAll(".swiper-slide");

swipers[0].addEventListener("click", () => {
  window.location.href = "#Terra";
});
swipers[1].addEventListener("click", () => {
  window.location.href = "#Tatlin";
});
swipers[2].addEventListener("click", () => {
  window.location.href = "#Delfin";
});
swipers[3].addEventListener("click", () => {
  window.location.href = "#Riviera";
});

// модальное окно
//terra
let terra = document.querySelector("#Terra");
let modal_terra = document.querySelector(".modal-terra");
//tatlin
let tatlin = document.querySelector("#Tatlin");
let modal_tatlin = document.querySelector(".modal-tatlin");
//delfin
let delfin = document.querySelector("#Delfin");
let modal_delfin = document.querySelector(".modal-delfin");
//riviera
let riviera = document.querySelector("#Riviera");
let modal_riviera = document.querySelector(".modal-riviera");

//exit_btn
let modal_exit = document.querySelectorAll(".modal-exit");
let content = document.querySelectorAll(".modal-content")
let houses = [terra, tatlin, delfin, riviera];
let cards_array = [modal_terra, modal_tatlin, modal_delfin, modal_riviera];

terra.addEventListener("click", () => {
  modal_terra.classList.add("open");
});
tatlin.addEventListener("click", () => {
  modal_tatlin.classList.add("open");
});
delfin.addEventListener("click", () => {
  modal_delfin.classList.add("open");
});
riviera.addEventListener("click", () => {
  modal_riviera.classList.add("open");
});

// крестик

modal_exit.forEach(el => {
  el.addEventListener("click", () => {
    cards_array.forEach(e => {
      e.classList.remove("open")

    });

  });
});

// escape

cards_array.forEach(e => {
  window.addEventListener('keydown', elem => {
    if (elem.key === "Escape") {
      e.classList.remove('open')
    }
  })
})

// за пределы контента

content.forEach(el => {
  el.addEventListener("click", e => {
    e._isClickWithModal = true
  })
  cards_array.forEach(e => {
    e.addEventListener("click", e => {
      if (e._isClickWithModal) return
      e.currentTarget.classList.remove('open')
    })
  })
})

// фильтер

let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".card");

list.forEach((el) => {
  el.addEventListener("click", (e) => {
    list.forEach((el1) => {
      el1.style.color = "#222";
      el1.classList.remove("border-active");
    });
    el.classList.add("border-active");
    box.forEach((el2) => {
      el2.style.display = "none";
    });
    document.querySelectorAll(e.target.dataset.color).forEach((el3) => {
      el3.style.display = "flex";
    });
  });
});

// FAQ

let marbottom = document.querySelector(".question_content-1");
let question_btn = document.querySelector(".question-exit");
let question_text = document.querySelector(".question-text");
question_btn.addEventListener("click", () => {
  question_btn.classList.toggle("opened");
  question_text.classList.toggle("open");
  marbottom.classList.toggle("open");
});
