burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');


burger.addEventListener('click',() => {
    rightNav.classlist.toggle('v-class-respe')
    navlist.classlist.toggle('v-class-respe')
    navbar.classlist.toggle('h-nav-respe')
})