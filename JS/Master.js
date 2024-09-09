


//animation service 

window.addEventListener('scroll', function () {
  var animatedElements = document.querySelectorAll('.cardSmall');
  var containerPosition = document.querySelector('.all-card').getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (containerPosition < screenHeight) {
    for (var i = 0; i < animatedElements.length; i++) {
      (function (index) {
        setTimeout(function () {
          animatedElements[index].style.opacity = '1';
          animatedElements[index].style.transform = 'translateY(0)';
        }, index * 250);
      })(i);
    }
  }
});

window.addEventListener('load', function () {
  var animatedContainer = document.querySelector('.all-card');
  animatedContainer.style.visibility = 'visible';
});


//   animation members kafu 

window.addEventListener('scroll', function () {
  var animatedElements = document.querySelectorAll('.cardkafu');
  var containerPosition = document.querySelector('.all-kafu').getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (containerPosition < screenHeight) {
    for (var i = 0; i < animatedElements.length; i++) {
      (function (index) {
        setTimeout(function () {
          animatedElements[index].style.opacity = '1';
          animatedElements[index].style.transform = 'translateY(0)';
        }, index * 250);
      })(i);
    }
  }
});

window.addEventListener('load', function () {
  var animatedContainer = document.querySelector('.all-kafu');
  animatedContainer.style.visibility = 'visible';
});
window.addEventListener('scroll', function () {
  var animatedElements = document.querySelectorAll('.our-work-content');
  var containerPosition = document.querySelector('.card-our-work').getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (containerPosition < screenHeight) {
    for (var i = 0; i < animatedElements.length; i++) {
      (function (index) {
        setTimeout(function () {
          animatedElements[index].style.opacity = '1';
          animatedElements[index].style.transform = 'translateY(0)';
        }, index * 200);
      })(i);
    }
  }
});

window.addEventListener('load', function () {
  var animatedContainer = document.querySelector('.card-our-work');
  animatedContainer.style.visibility = 'visible';
});



document.querySelectorAll(".cardSmall .card button").forEach(e => {
  e.addEventListener("click", () => {
    let nameService = e.parentElement.children[0].children[1].innerHTML;
    document.querySelector(".pop-service").style.transform = "translate(-50%, 00%)";
    document.querySelector(".form-one input").placeholder = nameService;
  })
})
document.querySelector(" .fa-xmark").addEventListener("click", () => {
  document.querySelector(".pop-service").style.transform = "translate(100%, 0%)";
})




document.querySelector(".pop .all-pop button").addEventListener("click", () => {
  document.querySelector(".pop-idea").style.transform = "translate(-50%, 0%)";
})
document.querySelector(".pop-idea .fa-xmark").addEventListener("click", () => {
  document.querySelector(".pop-idea").style.transform = "translate(100%, 0%)";
})



fetch("AllElementJson.json")
  .then(res => res.json())
  .then(data => showOurWork(data));

function showOurWork(data) {
  // console.log(data);
  data.ourWork.forEach(e => {
    document.querySelector(".our-work .card-our-work").innerHTML += `
      <div class="our-work-content">
        <div class="our-work-info">
            <img src="${e.img}" alt="">
            <p>${e.title}</p>
            <button class="cta">
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
                <span><a href="${e.link}" target="_blank">تصفح
                        الآن</a></span>
            </button>
        </div>
    </div>
    `
  })

  
  data.membersKafu.forEach(e => {
    document.querySelector(".members-kafu .all-kafu").innerHTML += `
    <div class="card cardkafu">
    <div class="info">
        <div class="img">
            <img src="${e.img}" alt="">
        </div>
        <div class="info-kafu">
            <h2>${e.name}</h2>
            <p>${e.discr}</p>
        </div>
    </div>
    <div class="cover">
        <p>${e.title}</p>
    </div>
</div>
    `
  })
}

setTimeout(() => {
  document.querySelectorAll(".members-kafu .cover").forEach(e => {
    e.addEventListener("click", () => {
      document.querySelectorAll(".members-kafu .card").forEach(all => {
        all.classList.remove("coverClick")
      })
      document.querySelectorAll(".members-kafu .card").forEach(card => {
        card.addEventListener("click", () => {
          card.classList.add("coverClick")
        })
      })

    })
  })
  document.querySelectorAll(".our-work-content").forEach(e => {
    e.addEventListener("click", () => {
      document.querySelectorAll(".our-work-content").forEach(e => {
        e.classList.remove("our-work-contentClick")
      })
      e.classList.add("our-work-contentClick")
    })
  })
}, 10)

