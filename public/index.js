const modeSwitch = document.getElementById('switch');
const menuButton = document.getElementById('menuButton');
const projectnavlink = document.getElementById('projectnav');
const aboutnavlink = document.getElementById('aboutnav');
const contactnavlink = document.getElementById('contactnav');
const homenavlink = document.getElementById('homenav');
const animateMenu = () => {

    if (menuButton.classList.contains('animate')) {
        menuButton.classList.remove('animate');
    }
    else {
        menuButton.classList.add('animate')

    }
}
menuButton.addEventListener('click', animateMenu)

const checkMode = () => {
    if (modeSwitch.checked) {   
        darkModeOn();
        localStorage.setItem('toggle', 'enabled');
    }
    else {
        darkModeOff();
        localStorage.removeItem('toggle');
    }
}
modeSwitch.addEventListener('click', checkMode);
let htmlClasses = document.querySelector('html').classList;

const darkModeOn = () => {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';

}

const darkModeOff = () => {
    if (localStorage.theme == 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
    }
}

if (localStorage.theme == 'dark') {
    if (localStorage.getItem('toggle') === 'enabled') {
        modeSwitch.checked = true;
    }
}

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let tl = gsap.timeline();

projectnavlink.addEventListener('click', () => {
    gsap.to(window, {duration: .7, scrollTo: {y: "#portfoliosection"}});

})
aboutnavlink.addEventListener('click', () => {
    gsap.to(window, {duration: .7, scrollTo: {y: "#aboutsection", offsetY: 50}});

})
contactnavlink.addEventListener('click', () => {
    gsap.to(window, {duration: .7, scrollTo: {y: "#contactsection", offsetY: 50}});

})

homenavlink.addEventListener('click', () => {
    gsap.to(window, {duration: .7, scrollTo: {y: "#homesection"}});

})

tl.from('#logo', {
    y: '-200%',
    opacity: 0,
    duration: 1
})

tl.from('#projectnav', {
    y: '-40',
    opacity: 0,
},"-=0.2")

tl.from('#aboutnav', {
    y: '-40',
    opacity: 0,
},"-=0.2")

tl.from('#contactnav', {
    y: '-40',
    opacity: 0,
},"-=0.2")

tl.from('#toggle', {
    y: '-40',
    opacity: 0,
},"-=0.2")

tl.from('h1', {
    y:'25',
    opacity: 0,
    
},"-=0.2")

tl.from('h2', {
    y:'25',
    opacity: 0,
    
},"-=0.2")

tl.from('#pheading', {
    y:'25',
    opacity: 0,
    
},"-=0.2")

tl.from('#contactbutton', {
    y:'50',
    opacity: 0,
    duration: 1,
},"-=0.2")

tl.from('#imghead', {
    y:'50',
    opacity: 0,
    duration: 1,
},"-=0.2")
tl.from('#icons', {
    y: '50',
    opacity: 0,
},"-=0.2")