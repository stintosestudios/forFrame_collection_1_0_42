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
            cx = 640 / pLen * (pi + 1) - (640 / pLen * this.percentDone);
            cy = (480 - 100) - Math.pow(30 / pLen * (pi - 1 * this.percentDone), 2);

            size = 200 - distance(cx, cy, 0, 480) / 800 * 200;

            part.w = size;
            part.h = size;
            part.x = cx - part.w / 2;
            part.y = cy - part.h / 2;

            part.radian = 1.57 * this.percentDone + Math.PI / pLen * (pi - 1 * this.percentDone);

            pi += 1;

        }

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

//scene.play({
scene.toPNGCollection({

    appendRender : function (ctx) {}

});
