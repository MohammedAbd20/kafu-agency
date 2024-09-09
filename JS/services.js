


fetch("AllElementJson.json")
    .then(res => res.json())
    .then(data => showService(data));

function showService(data) {
    // console.log(data.services)
    data.services.forEach(e => {
        document.querySelector(".all-service .all-card-services").innerHTML += `
        <div class="card-services">
        <div class="temporary_text">
            <svg height="512pt" viewBox="-5 0 511 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                <path d="m408.046875 31.117188v449.765624c0 17.1875-13.929687 31.117188-31.117187 31.117188h-253.71875c-17.1875 0-31.121094-13.929688-31.121094-31.117188v-449.765624c0-17.1875 13.933594-31.117188 31.121094-31.117188h253.71875c17.183593 0 31.117187 13.929688 31.117187 31.117188zm0 0" fill="#2e77a6"></path>
                <path d="m408.046875 31.117188v449.765624c0 17.1875-13.929687 31.117188-31.117187 31.117188h-126.859376v-512h126.859376c17.183593 0 31.117187 13.929688 31.117187 31.117188zm0 0" fill="#1e608e"></path>
                <path d="m92.089844 77.320312h315.957031v356.488282h-315.957031zm0 0" fill="#c2e5e6">
                </path>
                <path d="m250.066406 77.320312h157.980469v356.488282h-157.980469zm0 0" fill="#98d5d2">
                </path>
                <path d="m289.359375 39.210938c0 8.585937-6.960937 15.558593-15.558594 15.558593h-47.464843c-8.601563 0-15.558594-6.972656-15.558594-15.558593 0-8.589844 6.957031-15.5625 15.558594-15.5625h47.464843c8.597657 0 15.558594 6.972656 15.558594 15.5625zm0 0" fill="#c2e5e6"></path>
                <path d="m289.359375 39.210938c0 8.585937-6.960937 15.558593-15.558594 15.558593h-23.734375v-31.121093h23.734375c8.597657 0 15.558594 6.972656 15.558594 15.5625zm0 0" fill="#98d5d2"></path>
                <path d="m273.804688 457.230469h-47.472657c-8.59375 0-15.558593 6.96875-15.558593 15.558593 0 8.59375 6.964843 15.5625 15.558593 15.5625h47.472657c8.59375 0 15.558593-6.96875 15.558593-15.5625 0-8.589843-6.964843-15.558593-15.558593-15.558593zm0 0" fill="#c2e5e6"></path>
                <path d="m289.363281 472.789062c0 8.589844-6.960937 15.5625-15.558593 15.5625h-23.734376v-31.121093h23.734376c8.597656 0 15.558593 6.972656 15.558593 15.558593zm0 0" fill="#98d5d2"></path>
                <path d="m172.640625 352.464844h-27.550781c-8.589844 0-15.558594 6.96875-15.558594 15.5625 0 8.589844 6.96875 15.558594 15.558594 15.558594h27.550781c8.59375 0 15.558594-6.96875 15.558594-15.558594 0-8.59375-6.964844-15.5625-15.558594-15.5625zm0 0" fill="#2e77a6"></path>
                <path d="m145.089844 338.957031h27.550781c8.59375 0 15.558594-6.964843 15.558594-15.558593s-6.964844-15.558594-15.558594-15.558594h-27.550781c-8.589844 0-15.558594 6.964844-15.558594 15.558594s6.96875 15.558593 15.558594 15.558593zm0 0" fill="#2e77a6"></path>
                <path d="m222.558594 260.679688h-187.144532c-19.28125 0-34.914062-15.632813-34.914062-34.917969v-150.15625c0-19.28125 15.632812-34.914063 34.914062-34.914063h111.15625c19.28125 0 34.914063 15.632813 34.914063 34.914063v119.847656c0 5.238281 1.980469 10.28125 5.539063 14.117187l39.332031 42.394532c3.082031 3.320312.726562 8.714844-3.796875 8.714844zm0 0" fill="#ffc43b"></path>
                <path d="m222.558594 260.679688h-130.46875v-219.988282h54.476562c19.285156 0 34.917969 15.632813 34.917969 34.914063v119.847656c0 5.238281 1.980469 10.28125 5.539063 14.117187l39.332031 42.394532c3.082031 3.320312.726562 8.714844-3.796875 8.714844zm0 0" fill="#ffa433"></path>
                <path d="m107.648438 154.078125v11.304687c0 8.601563-6.96875 15.558594-15.558594 15.558594s-15.558594-6.957031-15.558594-15.558594v-13.671874c0-10.703126 6.109375-20.289063 15.558594-24.925782 1.183594-.578125 2.417968-1.089844 3.695312-1.503906 5.175782-1.691406 8.523438-6.6875 8.140625-12.15625-.40625-5.851562-5.445312-10.996094-11.835937-10.996094-6.566406-.007812-11.867188 5.300782-11.867188 11.867188 0 8.601562-6.96875 15.558594-15.558594 15.558594-8.597656 0-15.558593-6.957032-15.558593-15.558594 0-23.847656 19.417969-42.996094 42.984375-42.984375 22.78125 0 41.355468 17.808593 42.882812 39.964843 1.308594 18.933594-9.832031 36.328126-27.324218 43.101563zm0 0" fill="#2e77a6"></path>
                <path d="m107.648438 154.078125v11.304687c0 8.601563-6.96875 15.558594-15.558594 15.558594v-54.15625c1.183594-.578125 2.417968-1.089844 3.695312-1.503906 5.175782-1.691406 8.523438-6.6875 8.140625-12.15625-.40625-5.851562-5.445312-10.996094-11.835937-10.996094v-31.117187c22.78125 0 41.355468 17.808593 42.882812 39.964843 1.308594 18.933594-9.832031 36.328126-27.324218 43.101563zm0 0" fill="#1e608e"></path>
                <path d="m107.648438 207.726562v5.039063c0 8.589844-6.96875 15.558594-15.558594 15.558594s-15.558594-6.96875-15.558594-15.558594v-5.039063c0-8.601562 6.96875-15.5625 15.558594-15.5625s15.558594 6.960938 15.558594 15.5625zm0 0" fill="#2e77a6"></path>
                <path d="m107.648438 207.726562v5.039063c0 8.589844-6.96875 15.558594-15.558594 15.558594v-36.160157c8.589844 0 15.558594 6.960938 15.558594 15.5625zm0 0" fill="#1e608e"></path>
                <path d="m502.449219 189.832031v163.539063c0 18.328125-14.863281 33.191406-33.191407 33.191406h-188.921874c-4.523438 0-6.875-5.394531-3.796876-8.714844l29.71875-32.039062c5.34375-5.746094 8.308594-13.308594 8.308594-21.160156v-134.816407c0-18.339843 14.863282-33.191406 33.191406-33.191406h121.5c18.328126 0 33.191407 14.851563 33.191407 33.191406zm0 0" fill="#5dc75d"></path>
                <path d="m502.449219 189.832031v163.539063c0 18.328125-14.863281 33.191406-33.191407 33.191406h-61.210937v-229.921875h61.210937c18.328126 0 33.191407 14.851563 33.191407 33.191406zm0 0" fill="#0cbf4e"></path>
                <path d="m443.789062 345.082031c0 8.589844-6.96875 15.558594-15.558593 15.558594h-40.378907c-8.589843 0-15.558593-6.96875-15.558593-15.558594 0-8.589843 6.96875-15.558593 15.558593-15.558593h4.636719v-75.917969c0-8.589844 6.957031-15.5625 15.558594-15.5625 8.589844 0 15.558594 6.972656 15.558594 15.5625v75.917969h4.625c8.589843 0 15.558593 6.96875 15.558593 15.558593zm0 0" fill="#ffebbe"></path>
                <path d="m443.789062 345.082031c0 8.589844-6.96875 15.558594-15.558593 15.558594h-20.183594v-122.597656c8.589844 0 15.558594 6.972656 15.558594 15.5625v75.917969h4.625c8.589843 0 15.558593 6.96875 15.558593 15.558593zm0 0" fill="#ffd87c"></path>
                <path d="m452.816406 230.660156c0 24.726563-20.050781 65.191406-44.769531 65.191406-24.730469 0-44.78125-40.464843-44.78125-65.191406 0-24.730468 20.050781-44.78125 44.78125-44.78125 24.71875 0 44.769531 20.050782 44.769531 44.78125zm0 0" fill="#ffc43b"></path>
                <path d="m452.816406 230.660156c0 24.726563-20.050781 65.191406-44.769531 65.191406v-109.972656c24.71875 0 44.769531 20.050782 44.769531 44.78125zm0 0" fill="#ffa433"></path>
            </svg>
            <h2>${e.title}</h2>
        </div>
    <div class="card_content">
        <button class="card-button-content">اطلب الآن</button>
        <p>${e.disc}</p>
    </div>
    </div>
    `
    })
}

setTimeout(e => {
    document.querySelectorAll(".card_content button").forEach(e => {
        e.addEventListener("click", () => {
            let nameService = e.parentElement.parentElement.children[0].children[0].children[1].innerHTML;
            document.querySelector(".pop-service").style.transform = "translate(-50%, 0%)";
            document.querySelector(".form-one input").placeholder = nameService;
        })
    })
    document.querySelector(".all-pop-service .fa-xmark").addEventListener("click", () => {
        document.querySelector(".pop-service").style.transform = "translate(100%, 0%)";
    })
    document.querySelectorAll(".card-services").forEach(e => {
        e.addEventListener("click", () => {
            document.querySelectorAll(".card-services").forEach(e => {
                e.classList.remove("card-servicesClick")
            })
            e.classList.add("card-servicesClick")
        })
    })

}, 100)

window.addEventListener('scroll', function () {
    var animatedElements = document.querySelectorAll('.card-services');
    var containerPosition = document.querySelector('.all-card-services').getBoundingClientRect().top;
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
    var animatedContainer = document.querySelector('.all-card-services');
    animatedContainer.style.visibility = 'visible';
});

