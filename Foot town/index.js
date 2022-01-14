// window.addEventListener('load', function (e) {
//     let imgBox = document.querySelector('.content .box .imgBx');
//     let hover = document.querySelector('.hover');
//     let root = document.querySelector('.root');
    
//     let isMouseOver = false;
//     imgBox.addEventListener('mouseover', () => {
//         isMouseOver = true;
//         if (root.hover.length != 0) {
//             root.style.display = 'block'
//         } else {
//             root.style.display = 'none'
//         }
//                 })
// });

let isMouseHover = false
    let imgBox = document.querySelector('.content .box .imgBx');
    let hover = document.querySelector('.hover');
    let root = document.querySelector('.root');

imgBox.addEventListener("mouseleave", function (event) {
    isMouseHover = false
    event.target.textContent = "mouse out"
    console.log(isMouseHover)
  }, false);

imgBox.addEventListener("mouseover", function (event) {
    isMouseHover = true
    event.target.textContent = "mouse in"
    console.log(isMouseHover)
  }, false);