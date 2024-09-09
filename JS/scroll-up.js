window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      document.querySelector(".scroll-up").style.opacity = "1";
      document.querySelector(".scroll-up").style.bottom = "50px";
      // setShowTopBtn(true);
    } else {
      document.querySelector(".scroll-up").style.opacity = "0";
      document.querySelector(".scroll-up").style.bottom = "0";
      // setShowTopBtn(false);
    }
  
  });
  document.querySelector(".scroll-up").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  })