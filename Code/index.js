const aside = document.querySelector(".menu-options")
const shadowing = document.querySelector(".oscuro")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".cross-icon")
const body = document.querySelector("body")

window.addEventListener("resize", windowResize)

function windowResize() {

   if (window.innerWidth >= 700){
        
        return location.reload()
    }
    
}
/* document.addEventListener("click", (event)=>{
    const target = event.target
    if (aside.contains(target)){
        console.log(target);
        aside.classList.add("inactive")
        shadowing.classList.add("inactive")
    }
}) */
function openMenu() {
    if (aside.classList.contains("inactive")){
        shadowing.classList.remove("inactive")
        aside.classList.remove("inactive")
        shadowing.style.height = `${document.documentElement.scrollHeight}px`
    }
    

}
function closeMenu() {
    if(!aside.classList.contains("inactive")) {
        aside.classList.add("inactive")
        shadowing.classList.add("inactive")
    }
   
    
}
closeIcon.addEventListener("click", closeMenu)
shadowing.addEventListener("click", closeMenu)
menuIcon.onclick = openMenu
