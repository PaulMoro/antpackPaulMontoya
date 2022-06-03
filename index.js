const addClassName = (node, className) => {
  node.classList.add(className)
}

const removeClassName = (node, className) => {
  node.classList.remove(className)
}

const toggleClassName = (node, className) => {
  node.classList.toggle(className)
}
const changeStylesToHeader = (node, className) => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
      addClassName(node, className)
    } else if (window.scrollY == 0 ) {
      removeClassName(node, className)
    }
  })
}

const headerNode = document.getElementById('header')
if(headerNode) {
  changeStylesToHeader(headerNode, 'active')
}

const btnForOpenNav = document.getElementById('open-nav')
if(btnForOpenNav) {
  btnForOpenNav.addEventListener('click', () => {
    console.log('aa')
    toggleClassName(headerNode, 'active-responsive')
  })
}