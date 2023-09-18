var select = (selector) => {
  return document.querySelector(selector)
}

var button = select(".marina-about")
var overlay = select("body")
var modal = select(".modal")
var closeModal = select(".trainer-modal-close-text")
var closeModalMobile = select(".trainer-modal-mobile-close")
var mobileMenu = select(".mobile-menu-container")
var openMenu = select(".icon-menu")
var closeMenu = select(".mobile-menu-close")
var menuText = document.querySelectorAll(".menu-text")

button.addEventListener("click", () => {
  modal.classList.toggle("show")
  overlay.style.overflow = "hidden"
})

closeModal.addEventListener("click", () => {
  modal.classList.toggle("show")
  overlay.style.overflow = "scroll"
})

closeModalMobile.addEventListener("click", () => {
  modal.classList.toggle("show")
  overlay.style.overflow = "scroll"
})

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu")
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu")
})

menuText.forEach((el) =>
  el.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-menu")
  })
)
