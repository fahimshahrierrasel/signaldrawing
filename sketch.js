/*
  Created by: fahimshahrierrasel
  Date: 23/03/17 08:04:37 PM
*/

let dataStream = "01001110";

// Canvas Info
var signal = function(p) {
  let canvasLength = 640;
  let canvasWidth = 360;
  let midX = canvasLength / 2;
  let midY = canvasWidth / 2;

  let height = 60;
  let width = 30;

  p.setup = function() {
    p.createCanvas(canvasLength, canvasWidth);
    p.background(227, 242, 253);
  }

  p.draw = function() {
    // O & 1 Lebels
    p.strokeWeight(0);
    p.text("1", 20, 120);
    p.strokeWeight(0);
    p.text("0", 20, 180);

    // Axis
    p.stroke(0, 0, 0);
    p.strokeWeight(2);
    p.line(50, midY, canvasLength, midY);
    p.line(midX, 0, midX, canvasWidth);

    // Signals
    let signalHeight = height;
    let signalWidth = width;

    // Draw Data On Canvas
    p.strokeWeight(1);
    let j = 0;
    for (var x = 50; x <= ((dataStream.length + 1) * signalWidth); x += signalWidth) {
      p.text(dataStream[j], x + 10, 50);
      p.line(x, midY + 150, x, midY - 150);
      j++;
    }

    // Signal Draw
    p.stroke(255, 0, 0);
    p.strokeWeight(4);
    let i = 0;
    for (var x = 50; x <= ((dataStream.length + 1) * signalWidth); x += signalWidth) {
      if (dataStream[i] === '1') {
        p.line(x, midY - signalHeight, x + signalWidth, midY - signalHeight);
        if (dataStream[i] != dataStream[i + 1]) {
          p.line(x + signalWidth, midY, x + signalWidth, midY - signalHeight);
        }
      }
      else {
        p.line(x, midY, x + signalWidth, midY);
        if (dataStream[i] != dataStream[i + 1]) {
          p.line(x + signalWidth, midY, x + signalWidth, midY - signalHeight);
        }
      }
      i++;
    }
  }

}

new p5(signal, 'canvas1');
// Example Data Stream


let generateBtn = document.getElementById("submit");
let dataInput = document.getElementById("data_stream");
let dataText = document.getElementById("data_text");
let canvas1 = document.getElementById("canvas1");

// Generate Button Click Handler
generateBtn.addEventListener("click", function() {
  dataStream = dataInput.value;
  if (dataStream != "" && dataStream != null) {
    dataText.innerHTML = "Your Data Stream: " + dataStream;
    canvas1.innerHTML = "";
    new p5(signal, 'canvas1');
  }
  else {
    alert("Data Stream is empty");
  }
});
