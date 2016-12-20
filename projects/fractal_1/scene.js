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
        }

    ],

    // define the forFrame movement
    forFrame : function () {

        var pi = 0,
        pLen = Object.keys(this.parts).length,
        part,
        bias = Math.abs(0.5 - this.percentDone) / 0.5,
        size, // part size
        n; // I don't know what to call it so it is just 'n'
        while (pi < pLen) {

            part = this.parts['box' + pi];

            n = pLen * this.percentDone / (pi + 1);
            // size
            size = 200 * n;

            part.w = size;
            part.h = size;

            part.x = pi * 64;
            part.y = 480 - (part.h);

            pi += 1;

        }

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

scene.play();
