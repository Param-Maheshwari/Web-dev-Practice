console.log("Hello World !")

// <!-- Hello World !
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[0]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​<div class=​"box">​Box 1​</div>​<div class=​"box">​Box 2​</div>​<div class=​"box">​Box 3​</div>​<div class=​"box">​Box 4​</div>​<div class=​"box">​Box 5​</div>​</div>​
// container.childNodes
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document.body.childNodes[1]
// undefined
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// <div class=​"box">​Box 1​</div>​
// cont.lastElementChild
// <div class=​"box">​Box 5​</div>​
// cont.lastElementChild.style.color = "Red"
// 'Red'
// cont.lastElementChild.style.backgroundColor = "Yellow"
// 'Yellow'
// cont.lastElementChild.parentElement
// <div class=​"container">​…​</div>​ -->


// HTMLCollection(2) [div.container, script]
// document.body.children[1]
// <script src=​"index.js">​</script>​
// document.body.children[0]
// <div class=​"container">​…​</div>​
// document.body.children[0].children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.children[0].children[3]
// <div class=​"box">​Box 4​</div>​
// document.body.children[0].children[3].nextElementSibling
// <div class=​"box">​Box 5​</div>​
// document.body.children[0].children[3].previousElementSibling
// <div class=​"box">​Box 3​</div>​