// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const nav_toggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

nav_toggle.addEventListener('click',(e)=>{
    /*if(links.classList.contains('show-links')){
        links.classList.remove('showlinks')
    }
    else{
        links.classList.add('showlinks')
    }*/
    links.classList.toggle('show-links')
})