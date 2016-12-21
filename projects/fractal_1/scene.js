console.log('scene.js for fractal_1');

// start by setting up the scene
scene({

    maxFrame : 50,

    // define some parts
    parts : [{
            id : 'box0',
            w : 64,
            h : 64
        }, {
            id : 'box1',
            w : 64,
            h : 64
        }, {
            id : 'box2',
            w : 64,
            h : 64
        }, {
            id : 'box3',
            w : 64,
            h : 64
        }, {
            id : 'box4',
            w : 64,
            h : 64
        }, {
            id : 'box5',
            w : 64,
            h : 64
        }

    ],

    // define the forFrame movement
    forFrame : function () {

        var pi = 0,
        pLen = Object.keys(this.parts).length,
        part,
        bias = Math.abs(0.5 - this.percentDone) / 0.5,
        size, // part size
        n, // I don't know what to call it so it is just 'n'
        cx,
        cy,
        distance = function (x1, y1, x2, y2) {

            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        },
        d;


        while (pi < pLen) {

            part = this.parts['box' + pi];

            // find the center point on the curve
            cx = 640 / pLen * (pi+1) - (640 / pLen * this.percentDone);
            cy = (480-64) - Math.pow( 20 / pLen * (pi - 1 * this.percentDone) ,2);

            part.w = 128;
            part.h = 128;
            part.x = cx - part.w / 2;
            part.y = cy - part.h / 2;

            pi += 1;

        }

        /*
        var pi = 0,
        pLen = Object.keys(this.parts).length,
        part,
        bias = Math.abs(0.5 - this.percentDone) / 0.5,
        size, // part size
        n; // I don't know what to call it so it is just 'n'
        while (pi < pLen) {

        part = this.parts['box' + pi];

        n = pLen * this.percentDone / (pi + 1) / (pLen / 2);
        // size
        size = 128 - 128 * n;

        part.w = size;
        part.h = size;

        part.x = pi * 64;
        part.y = 480 - (part.h);

        pi += 1;

        }

         */

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

scene.play({

    appendRender : function (ctx) {

        var x = 0,
        y = 380,
        i;

        ctx.strokeStyle = '#00ff00';

        i = 0;
        while (i < this.maxFrame) {

            ctx.beginPath();
            ctx.moveTo(x, y);

            x = 640 / this.maxFrame * (i + 1);
            y = 380 - Math.pow(20 / this.maxFrame * i, 2);

            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();

            i += 1;

        }

    }

});
