/*
  Created by: fahimshahrierrasel
  Date: 23/03/17 08:04:37 PM
*/
let canvasLength = 640;
let canvasWidth = 360;
let midX = canvasLength / 2;
let midY = canvasWidth / 2;

let height = 60;
let width = 30;

let dataStream = "01001110";

// Canvas Info
var unipolar_signal = function (p) {
    
    p.setup = function () {
        p.createCanvas(canvasLength, canvasWidth);
        p.background(227, 242, 253);
    }

    p.draw = function () {
        // O & 1 Lebels
        p.strokeWeight(0);
        p.text("1", 20, 120);
        p.strokeWeight(0);
        p.text("0", 20, 180);

        // Axis
        p.stroke(0, 0, 0);
        p.strokeWeight(2);
        p.line(50, midY, canvasLength-50, midY);
        p.line(midX, 10, midX, canvasWidth-10);

        // Draw Data On Canvas
        p.strokeWeight(1);
        for (var x = 50; x <= ((dataStream.length + 2) * width); x += width) {
            p.line(x, midY + 150, x, midY - 150);
        }
        
        p.stroke(0, 0, 255);
        let j = 0;
        for (var x = 50; x <= ((dataStream.length + 1) * width); x += width) {
            p.text(dataStream[j], x + 10, 50);
            j++;
        }
        
        // unipolar_signal Draw
        p.beginShape();
        p.stroke(255, 0, 0);
        p.strokeWeight(4);
        p.fill(0, 0, 0, 0, 1);
        
        let uni_start = 50;
        let uni_upper = 120;
        let uni_lower = 180;
        let uni_next;
        if (dataStream[0] === '1')
            p.vertex(uni_start, uni_upper);
        else
            p.vertex(uni_start, uni_lower);
        uni_next = uni_start + 30;

        for (let x = 0; x < dataStream.length; x++) {
            if (dataStream[x] === '1') 
            {
                p.vertex(uni_next, uni_upper);
                if (dataStream[x] != dataStream[x + 1] && (x < dataStream.length - 1))
                    p.vertex(uni_next, uni_lower);
            } else 
            {
                p.vertex(uni_next, uni_lower);
                if (dataStream[x] != dataStream[x + 1] && (x < dataStream.length - 1))
                    p.vertex(uni_next, uni_upper);
            }
            uni_next += 30;
        }
        p.endShape();
    }
}

var nrzl_signal = function (p) {
    
    p.setup = function () {
        p.createCanvas(canvasLength, canvasWidth);
        p.background(227, 242, 253);
    }

    p.draw = function () {
        // O & 1 Lebels
        p.strokeWeight(0);
        p.text("1", 20, 120);
        p.strokeWeight(0);
        p.text("0", 20, 180);

        // Axis
        p.stroke(0, 0, 0);
        p.strokeWeight(2);
        p.line(50, midY, canvasLength-50, midY);
        p.line(midX, 10, midX, canvasWidth-10);

        // Draw Data On Canvas
        p.strokeWeight(1);
        for (var x = 50; x <= ((dataStream.length + 2) * width); x += width) {
            p.line(x, midY + 150, x, midY - 150);
        }
        
        p.stroke(0, 0, 255);
        let j = 0;
        for (var x = 50; x <= ((dataStream.length + 1) * width); x += width) {
            p.text(dataStream[j], x + 10, 50);
            j++;
        }
        
        // unipolar_signal Draw
        p.beginShape();
        p.stroke(255, 0, 0);
        p.strokeWeight(4);
        p.fill(0, 0, 0, 0, 1);
        
        let uni_start = 50;
        let uni_upper = 120;
        let uni_lower = 180;
        let uni_next;
        if (dataStream[0] === '0')
            p.vertex(uni_start, uni_upper);
        else
            p.vertex(uni_start, uni_lower);
        uni_next = uni_start + 30;

        for (let x = 0; x < dataStream.length; x++) {
            if (dataStream[x] === '0') 
            {
                p.vertex(uni_next, uni_upper);
                if (dataStream[x] != dataStream[x + 1] && (x < dataStream.length - 1))
                    p.vertex(uni_next, uni_lower);
            } else 
            {
                p.vertex(uni_next, uni_lower);
                if (dataStream[x] != dataStream[x + 1] && (x < dataStream.length - 1))
                    p.vertex(uni_next, uni_upper);
            }
            uni_next += 30;
        }
        p.endShape();
    }
}


new p5(unipolar_signal, 'canvas1');
new p5(nrzl_signal, 'canvas2');

let generateBtn = document.getElementById("submit");
let dataInput = document.getElementById("data_stream");
let dataText = document.getElementById("data_text");
let canvas1 = document.getElementById("canvas1");
let canvas2 = document.getElementById("canvas2");

// Generate Button Click Handler
generateBtn.addEventListener("click", function () {
    dataStream = dataInput.value;
    if (dataStream != "" && dataStream != null) {
        dataText.innerHTML = "Your Data Stream: " + dataStream;
        canvas1.innerHTML = "";
        canvas2.innerHTML = "";
        new p5(unipolar_signal, 'canvas1');
        new p5(nrzl_signal, 'canvas2');
    } else {
        alert("Data Stream is empty");
    }
});
