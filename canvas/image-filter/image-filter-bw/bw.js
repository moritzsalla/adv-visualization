let imageObj = new Image()
imageObj.src = "img.jpg"

let canvas = document.getElementById('myCanvas')
let canvas2 = document.getElementById('myCanvas2')

let context = canvas.getContext('2d')
let context2 = canvas2.getContext('2d')

imageObj.onload = calcFilter => {
  let imageWidth = imageObj.width
  let imageHeight = imageObj.height

  context2.drawImage(imageObj, 0, 0)

  let imageData = context2.getImageData(0, 0, imageWidth, imageHeight)
  let data = imageData.data

  for (let y = 1; y < imageHeight - 1; y++) {
    for (let x = 1; x < imageWidth - 1; x++) {

      let index = ((imageWidth * y) + x) * 4

      let r = data[index + 0]
      let g = data[index + 1]
      let b = data[index + 2]
      let a = 255

      let brightness = (r + g + b) / 3

      imageData.data[index + 0] = brightness
      imageData.data[index + 1] = brightness
      imageData.data[index + 2] = brightness
      imageData.data[index + 3] = a
    }
  }

  context.putImageData(imageData, 0, 0)
}
