console.log('scene.js for logo');

// start by setting up the scene
scene({

    maxFrame : 50,

    // define some parts
    parts : [{
            id : 'for',
            w : 128,
            h : 32,
            skin : {

                imgIndex : 0,
                w : 128,
                h : 32

            }
        }, {
            id : 'Frame',
            w : 128,
            h : 32,
            skin : {

                imgIndex : 1,
                w : 128,
                h : 32

            }
        }, {
            id : 'logo',
            w : 128,
            h : 56,
            skin : {
                imgIndex : 2,
                w : 128,
                h : 56
            }

        }

    ],

    // use sections
    sections : {

        // the section timeline
        timeline : 'start:20;hold:40;disco:60;hold:80;back:100',

        forFrame : {

            start : function () {

                var pt = this.parts['for'];

                pt.x = 200 * this.sectionPer;
                pt.y = 224;
                pt.w = 128 * this.sectionPer;
                pt.h = 32;
                pt.radian = 0;

                pt = this.parts['Frame'];

                pt.x = 529 - 200 * this.sectionPer;
                pt.y = 224;
                pt.w = 128 * this.sectionPer;
                pt.h = 32;
                pt.radian = 0;

            },

            hold : function () {

                var pt = this.parts['for'];

                pt.x = 200;
                pt.y = 224;
                pt.w = 128;
                pt.h = 32;
                pt.radian = 0;

                pt = this.parts['Frame'];

                pt.x = 329;
                pt.y = 224;
                pt.w = 128;
                pt.h = 32;
                pt.radian = 0;

            },

            disco : function () {

                var pt = this.parts['for'],
                bias = 1 - Math.abs(0.5 - this.sectionPer) / 0.5,
                size = 50,
                hSize = size / 2;

                pt.x = 200 - size * bias;
                pt.y = 224 - hSize * bias;
                pt.w = 128 + size * bias;
                pt.h = 32 + size * bias;
                pt.radian = 0.5 * bias;

                pt = this.parts['Frame'];

                pt.x = 329;
                pt.y = 224 - hSize * bias;
                pt.w = 128 + size * bias;
                pt.h = 32 + size * bias;
                pt.radian = -0.5 * bias;

            },

            back : function () {

                var pt = this.parts['for'];

                pt.x = 200 - 200 * this.sectionPer;
                pt.y = 240 - 16;
                pt.w = 128 - 128 * this.sectionPer;
                pt.h = 32;
                pt.radian = 0;

                pt = this.parts['Frame'];

                pt.x = 329 + 200 * this.sectionPer;
                pt.y = 240 - 16;
                pt.w = 128 - 128 * this.sectionPer;
                pt.h = 32;
                pt.radian = 0;

            }

        }

    },

    // define the forFrame movement
    forFrame : function () {

        var part = this.parts['logo'];
        part.x = 640 - 128;
        part.y = 480 - 56;

        this.currentSection();

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

//scene.setFrame(0);

//scene.renderFrame();

scene.load(['img/for.png', 'img/frame.png', '../mylogo_128.png'], function (progress) {

    if (progress === 1) {

        // play the scene
        scene.play({
            //scene.toPNGCollection({

            appendRender : function (ctx) {

                var x = 0,
                y = 0,
                size = 256,
                bias = Math.abs((0.5 - this.percentDone) / 0.5);
                space = 5 + 30 * bias;

                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, 640, 480);
                ctx.strokeStyle = '#000000';

                ctx.save();
                ctx.translate(20, 0);
                //ctx.rotate(0.5 * bias);
                while (y < 5) {

                    x = 0;
                    while (x < 5) {

                        ctx.strokeRect(
                            x * (size + space) + (320 - size * 5 / 2) - space * 5 / 2,
                            y * (size + space) + (240 - size * 5 / 2) - space * 5 / 2,
                            size,
                            size);

                        x += 1;

                    }

                    y += 1;

                }
                ctx.restore();

            },
            appendZ : 0,
            frameRate : 10
        });

    }

});
