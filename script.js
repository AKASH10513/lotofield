const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
    var typed = new Typed(".typing", {
        strings: ["PLAY ","WIN","DREAM BIG"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: 0
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Web-Developer", "Technical content writer", "UI Designer", "Competitive Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



