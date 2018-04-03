import { Component, OnInit } from '@angular/core';

declare var p5: any;

@Component({
  selector: 'app-photo-taker',
  templateUrl: './photo-taker.component.html',
  styleUrls: ['./photo-taker.component.scss']
})
export class PhotoTakerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const photo = new p5(this.sketch);
  }

  sketch(p) {

    var canvasDiv = document.getElementById('p5-canvas');
    var canvasDivWidth = canvasDiv.offsetWidth;
    var buttonsDiv = document.getElementsByClassName('button-container')[0];
    var retakeButtonDiv = document.getElementsByClassName('button-retake')[0];
    var shareButtonDiv = document.getElementsByClassName('button-share')[0];

    var capture, bCapture, captureImage;
    var cornerAura, brightnessMask, resultAura;

    var x = 100;
    var y = 100;

    p.preload = () => {
      canvasDiv.onclick = takePicture;
      cornerAura = p.loadImage("assets/aura-corner.png");
    }

    p.setup = () => {

      var cnv = p.createCanvas(400, 600);
      cnv.parent('p5-canvas');

      capture = p.createCapture(p.VIDEO);
      capture.size(960, 720);
      capture.hide();
      bCapture = true;

      captureImage = p.createImage(capture.width, capture.height);
      brightnessMask = p.createGraphics(p.width, p.height);
      brightnessMask.pixelDensity(1);
      resultAura = p.createGraphics(p.width, p.height);
      resultAura.pixelDensity(1);

      p.imageMode(p.CENTER);
    };

    p.draw = () => {
      p.background(0);
      if (bCapture) {
        captureImage.copy(capture,
          0, 0, capture.width, capture.height,
          0, 0, captureImage.width, captureImage.height);

        adjustBrightnessContrast(captureImage, 255);
        p.image(captureImage, p.width / 2, p.height / 2);
      } else {
        p.image(resultAura, p.width / 2, p.height / 2, p.width, p.height);

      };
    };

    function drawAuras(bground) {
      resultAura.imageMode(p.CENTER);

      resultAura.push();
      resultAura.translate(resultAura.width / 2, resultAura.height / 2);

      resultAura.noTint();
      resultAura.image(bground, 0, 0);

      for (var i = 0; i < 8; i++) {
        if (p.random(1.0) > 0.4) {
          resultAura.push();
          resultAura.rotate(p.TWO_PI * i / 8.0 + p.random(1.0) * p.PI / 8.0);

          if (p.random(1) < 0.333) {
            resultAura.tint(0, 0, 150, 200);
          } else if (p.random(1) < 0.66) {
            resultAura.tint(0, 150, 0, 200);
          } else {
            resultAura.tint(150, 0, 0, 200);
          }

          resultAura.translate(-resultAura.width / p.random(2, 8),
            -resultAura.height / p.random(2, 8));
          resultAura.image(cornerAura, 0, 0, resultAura.width, resultAura.height);

          resultAura.tint(255, 200);
          resultAura.image(cornerAura, -resultAura.width / 10, -resultAura.height / 10,
            resultAura.width, resultAura.height);
          resultAura.pop();
        }
      }
      resultAura.pop();
    }

    function takePicture() {
      bCapture = false;
      canvasDiv.onclick = function () { };

      drawAuras(captureImage);
      // buttonsDiv.style.display = "flex";

      // retakeButtonDiv.onclick = function() {
      //   bCapture = true;
      //   buttonsDiv.style.display = "none";
      //   canvasDiv.onclick = takePicture;
      // }

      // shareButtonDiv.onclick = function() {
      //   p.resizeCanvas(canvasDivWidth/3, canvasDivWidth/3);
      //   buttonsDiv.style.display = "none";
      // }
    }

    function adjustBrightnessContrast(pimg, value) {
      var original = p.createImage(pimg.width, pimg.height);
      original.copy(pimg,
        0, 0, pimg.width, pimg.height,
        0, 0, original.width, original.height);

      brightnessMask.background(value);

      pimg.blend(brightnessMask,
        0, 0, brightnessMask.width, brightnessMask.height,
        0, 0, pimg.width, pimg.height, p.DARKEST);

      pimg.blend(original,
        0, 0, original.width, original.height,
        0, 0, pimg.width, pimg.height, p.NORMAL);
    }
  }

}
