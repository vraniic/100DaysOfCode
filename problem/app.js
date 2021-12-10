// let removeButton = document.querySelector('button')
// let backgroundButton = document.getElementById('dugme')

// const colorChanger = () => {
//     document.querySelector('p').style.backgroundColor = 'blue'
// }
// const remover = () => {
//     let thirdP = removeButton.previousElementSibling
//     thirdP.remove()
// }

// removeButton.addEventListener('click', remover)
// backgroundButton.addEventListener('click', colorChanger)

// for (let i = 100; i >= 0; i--) {
//     if (i % 2 === 1) {
//         continue
//     }
//     console.log(i)
// }
function printPatter(number) {
   for (let i = 0; i <= number; i++) {
      let x = [];
      for (j = 1; j <= i; j++) {
         x.push(j)
      }
    console.log(x.join(' '))  
  }

};
printPatter(5);
