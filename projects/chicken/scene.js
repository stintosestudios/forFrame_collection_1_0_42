console.log('scene.js for sections');

// start by setting up the scene
scene({

    maxFrame : 12,

    // define some parts
    parts : [{
            id : 'chicken', // logo
            w : 150,
            h : 188,
            skin : {
                imgIndex : 1

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

        part = this.parts['chicken'];

        // skin source
        part.skin.sw = 150;
        part.skin.sh = 186;
        part.skin.sx = Math.floor(900 / 150 * this.percentDone) * 150;
        part.skin.sy = 1;

        part.w = 300;
        part.h = 372;
        part.x = 320 - part.w / 2;
        part.y = 240 - part.h / 2;

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

scene.load(['../mylogo_128.png', 'img/chicken_150.png'], function (progress) {

    if (progress === 1) {

        scene.play({
            //scene.toPNGCollection({

        });

    }

});
