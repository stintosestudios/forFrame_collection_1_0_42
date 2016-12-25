console.log('scene.js for the_canvas');

// start by setting up the scene
scene({

    maxFrame : 50,

    // define some parts
    parts : [{

            id : 'thecanvas',
            w : 640,
            h : 480,

            skin : {

                imgIndex : 1,
                sw : 640,
                sh : 480

            }

        }, {
            id : 'logo', // logo
            w : 128,
            h : 56,
            skin : {
                imgIndex : 0,
                sw : 128,
                sh : 56
            }
        }

    ],

    // define the forFrame movement
    forFrame : function () {

        var part;

        // ajust the logo
        part = this.parts['logo'];
        part.x = 640 - 128;
        part.y = 480 - 56;

        // scale canvas
        part = this.parts['thecanvas'];
        part.w = 640 + 650 * this.percentDone;
        part.h = 480 + 490 * this.percentDone;
        part.x = 320 - part.w / 2;
        part.y = 240 - part.h / 2;

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

scene.load(['../mylogo_128.png', 'img/the_canvas_640.png'], function (progress) {

    if (progress === 1) {


        scene.play({
        //scene.toPNGCollection({

        });

    }

});
