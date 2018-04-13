import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var p5: any;

@Component({
  selector: 'app-photo-taker',
  templateUrl: './photo-taker.component.html',
  styleUrls: ['./photo-taker.component.scss']
})
export class PhotoTakerComponent implements OnInit {

  constructor() { }

  @ViewChild('processingCanvas') processingCanvas: ElementRef;

  pictureNotTaken = true;
  capture: any;
  captureImage: any;
  brightnessMask: any;
  processingCanvasWidth: number;
  auraMaskUrl: String = 'assets/aura-corner.png';

  ngOnInit(): void {
    const photo = new p5(this.sketch.bind(this));
  }

  sketch(processing) {
    this.processingCanvasWidth = this.processingCanvas.nativeElement.offsetWidth;

    let resultAura;
    let cornerAura;

    processing.preload = () => {
      this.processingCanvas.nativeElement.onclick = takePicture;
      cornerAura = processing.loadImage(this.auraMaskUrl);
    };

    processing.setup = () => {

      const canvas = processing.createCanvas(400, 600);
      canvas.parent('p5-canvas');

      this.capture = processing.createCapture(processing.VIDEO);
      this.capture.size(960, 720);
      this.capture.hide();

      this.captureImage = processing.createImage(this.capture.width, this.capture.height);
      this.brightnessMask = processing.createGraphics(processing.width, processing.height);
      this.brightnessMask.pixelDensity(1);
      resultAura = processing.createGraphics(processing.width, processing.height);
      resultAura.pixelDensity(1);

      processing.imageMode(processing.CENTER);
    };

    processing.draw = () => {
      processing.background(0);

      if (this.pictureNotTaken) {
        this.captureImage.copy(this.capture,
          0, 0, this.capture.width, this.capture.height,
          0, 0, this.captureImage.width, this.captureImage.height);

        adjustBrightnessContrast(this.captureImage, 255);
        processing.image(this.captureImage, processing.width / 2, processing.height / 2);
        return;
      }

      processing.image(resultAura, processing.width / 2, processing.height / 2, processing.width, processing.height);
    };

    const drawAuras = (background) => {
      resultAura.imageMode(processing.CENTER);

      resultAura.push();
      resultAura.translate(resultAura.width / 2, resultAura.height / 2);

      resultAura.noTint();
      resultAura.image(background, 0, 0);

      for (let i = 0; i < 8; i++) {
        if (processing.random(1.0) > 0.4) {
          resultAura.push();
          resultAura.rotate(processing.TWO_PI * i / 8.0 + processing.random(1.0) * processing.PI / 8.0);

          if (processing.random(1) < 0.333) {
            resultAura.tint(0, 0, 150, 200);
          } else if (processing.random(1) < 0.66) {
            resultAura.tint(0, 150, 0, 200);
          } else {
            resultAura.tint(150, 0, 0, 200);
          }

          resultAura.translate(-resultAura.width / processing.random(2, 8),
            -resultAura.height / processing.random(2, 8));
          resultAura.image(cornerAura, 0, 0, resultAura.width, resultAura.height);

          resultAura.tint(255, 200);
          resultAura.image(cornerAura, -resultAura.width / 10, -resultAura.height / 10,
            resultAura.width, resultAura.height);
          resultAura.pop();
        }
      }
      resultAura.pop();
    };

    const takePicture = () => {
      this.pictureNotTaken = false;

      this.processingCanvas.nativeElement.onclick = function () { };

      drawAuras(this.captureImage);

      // retakeButtonDiv.onclick = function() {
      //   bCapture = true;
      //   buttonsDiv.style.display = "none";
      //   canvasDiv.onclick = takePicture;
      // }

      // shareButtonDiv.onclick = function() {
      //   p.resizeCanvas(canvasDivWidth/3, canvasDivWidth/3);
      //   buttonsDiv.style.display = "none";
      // }
    };

    const adjustBrightnessContrast = (pimg, value) => {
      const original = processing.createImage(pimg.width, pimg.height);
      original.copy(pimg,
        0, 0, pimg.width, pimg.height,
        0, 0, original.width, original.height);

      this.brightnessMask.background(value);

      pimg.blend(this.brightnessMask,
        0, 0, this.brightnessMask.width, this.brightnessMask.height,
        0, 0, pimg.width, pimg.height, processing.DARKEST);

      pimg.blend(original,
        0, 0, original.width, original.height,
        0, 0, pimg.width, pimg.height, processing.NORMAL);
    };
  }

}
