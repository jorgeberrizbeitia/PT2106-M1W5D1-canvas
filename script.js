

const canvas = document.querySelector("#my-canvas")
canvas.style.backgroundColor = "lightgray"

// DEFINING CONTEXT
const ctx = canvas.getContext("2d")

// FILL methods & properties

//syntax
// ctx.fillStyle = someColor
ctx.fillStyle = "green"

// syntax
// ctx.fillRect(x, y, width, height)
ctx.fillRect(50, 50, 200, 60)

// red rectangle
ctx.fillStyle = "red"
ctx.fillRect(50, 120, 100, 60)

// blue rectangle
ctx.fillStyle = "blue"
ctx.fillRect(75, 145, 100, 60)


// clear the canvas

// syntax
// ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.clearRect(90, 160, 100, 60)



// STROKE methods & properties

ctx.strokeStyle = "red"
ctx.strokeRect(50, 220, 100, 100)

ctx.strokeStyle = "blue"
ctx.strokeRect(50, 220, 200, 200)

ctx.strokeStyle = "white"
ctx.strokeRect(50, 220, 150, 150)


// LINE PATH methods & properties

// code between beginPath and closePath

ctx.beginPath() // => this to start line

ctx.strokeStyle = "yellow"
ctx.moveTo(50, 450) // => initial place of brush
ctx.lineTo(60, 480)
ctx.lineTo(80, 460)
ctx.lineTo(90, 500)
ctx.stroke() // => to draw line as above pointers

ctx.closePath() // => to end line

ctx.beginPath()

ctx.strokeStyle = "orange"
ctx.lineWidth = 12 // => defines the width of the line
ctx.moveTo(50, 500)
ctx.lineTo(300, 530)
ctx.stroke()

ctx.closePath()


// ARC methods & properties => for circles

// syntax
// ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

ctx.beginPath()
ctx.strokeStyle = "brown"
ctx.lineWidth = 8
ctx.arc(400, 100, 50, 0, Math.PI * 2, true)
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = 4
ctx.arc(400, 100, 25, 0, Math.PI * 2, true)
ctx.stroke()
ctx.fillStyle = "orange"
ctx.fill() // => for filling stroked lines
ctx.closePath()

// Math.PI * 1.5 // => quarter circles
// Math.PI // => semicircles
// Math.PI * 0.5 // => three quarter of circles
// Math.PI * 2 // => circles

// TEXT
ctx.font = "bolder 30px serif";
ctx.fillStyle = "magenta"
ctx.fillText("BREAK PLZ", 400, 300)


// IMAGE methods

let img = new Image()
img.src = "https://tinyurl.com/ironhack-pokemons/5.svg"

// addaddEventListener => "load" to prevent images from not loading properly. Assigning a new src takes a bit of time, is asynchronous.
img.addEventListener("load", () => {
  // syntax
  // ctx.drawImage(imageObj, x, y, width, height)
  ctx.drawImage(img, 400, 500, 80, 100)
})

let img2 = new Image()
img2.src = "https://tinyurl.com/ironhack-pokemons/9.svg"

img2.addEventListener("load", () => {
  ctx.drawImage(img2, 500, 500, 80, 100)
})


// recursiveness => creating loops with functions invoking itself

// control variable to make the recursiveness stop
// let controlVar = 0;

// const printSomething = () => {
//   // control update
//   controlVar++

//   // action
//   console.log("printing")

//   // conditional recursiveness
//   if (controlVar < 300) {
//     requestAnimationFrame(printSomething) // => happends every fram (used for animations)
//     // printSomething() // => recursiveness. happends TOO fast
//   }
// }

// initial invocation
// printSomething()

// global variables that can be changes in our code
let cubeX = 50;
let cubeY = 700;
let shouldCubeMove = true;

// main logic function for animation
const cubeMovement = () => {
  // 1. clear canvas
  ctx.clearRect(0, 700, canvas.width, canvas.height)

  // 2. change position of the cube (all elements)
  cubeX += 4
    // conditional to make the loop stop at some point
  if (cubeX > 500) {
    shouldCubeMove = false
  }

  // 3. draw the cube (all elements)
  ctx.fillRect(cubeX, cubeY, 60, 60)
  // ctx.drawImage(img2, cubeX, cubeY, 80, 100) // => 

  // 4. animate the cube (with condition to end the loop)
  if (shouldCubeMove) {
    requestAnimationFrame(cubeMovement)
  }
}

// initial invocation
cubeMovement()