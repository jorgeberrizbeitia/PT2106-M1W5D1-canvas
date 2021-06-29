const canvas = document.querySelector("#my-canvas")
canvas.style.backgroundColor = "lightgray"

const ctx = canvas.getContext("2d")

ctx.fillStyle = "green"

// syntax
// ctx.fillRect(x, y, width, height)

ctx.fillRect(50, 50, 200, 60)

ctx.fillStyle = "red"
ctx.fillRect(50, 120, 100, 60)

ctx.fillStyle = "blue"
ctx.fillRect(75, 145, 100, 60)


// clear the canvas

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


// ARC methods & properties


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
ctx.fill()
ctx.closePath()

// Math.PI * 1.5 // => quarter circles
// Math.PI // => semicircles
// Math.PI * 0.5 // => three quarter of circles
// Math.PI * 2 // => circles

// TEXT
ctx.fillStyle = "magenta"
ctx.font = "30px serif";
ctx.fillText("BREAK PLZ", 400, 300)