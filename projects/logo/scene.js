console.log('scene.js for logo');

// start by setting up the scene
scene({

    maxFrame : 50,

    // define some parts
    parts : [{
            id : 'for',
            w : 128,
            h : 32
        }, {
            id : 'Frame',
            w : 128,
            h : 32
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
                pt.w = 128;
                pt.h = 32;

                pt = this.parts['Frame'];

                pt.x = 529 - 200 * this.sectionPer;
                pt.y = 224;
                pt.w = 128;
                pt.h = 32;

            },

            hold : function () {

                var pt = this.parts['for'];

                pt.x = 200;
                pt.y = 224;
                pt.w = 128;
                pt.h = 32;

                pt = this.parts['Frame'];

                pt.x = 329;
                pt.y = 224;
                pt.w = 128;
                pt.h = 32;

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

                pt = this.parts['Frame'];

                pt.x = 329;
                pt.y = 224 - hSize * bias;
                pt.w = 128 + size * bias;
                pt.h = 32 + size * bias;
            },

            back : function () {

                var pt = this.parts['for'];

                pt.x = 200 - 200 * this.sectionPer;
                pt.y = 240 - 16;
                pt.w = 128;
                pt.h = 32;

                pt = this.parts['Frame'];

                pt.x = 329 + 200 * this.sectionPer;
                pt.y = 240 - 16;
                pt.w = 128;
                pt.h = 32;

            }

        }

    },

    // define the forFrame movement
    forFrame : function () {

        this.currentSection();

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

//scene.setFrame(0);

//scene.renderFrame();

// play the scene
scene.play({
    frameRate : 10
});
