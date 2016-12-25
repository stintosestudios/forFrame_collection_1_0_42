console.log('scene.js for sections');

// start by setting up the scene
scene({

    maxFrame : 100,

    // define some parts
    parts : [{
            id : 'box', // logo
            w : 64,
            h : 64
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

    // use sections
    sections : {

        // the section timeline
        timeline : 'cout:20;swag:40;err:60;over:80;cin:100',

        forFrame : {

            cout : function () {

                var part = this.parts['box'];

                part.w = 640 - 640 * this.sectionPer;
                part.h = 480 - 480 * this.sectionPer;

                part.x = 320 - part.w / 2;
                part.y = 240 - part.h / 2;
                part.radian = 0;

            },

            swag : function () {

                var part = this.parts['box'],
                bias = Math.abs(.5 - this.sectionPer) / .5;

                part.w = 640 * this.sectionPer;
                part.h = 480 * this.sectionPer;

                part.x = 640 * this.sectionPer;
                part.y = 240 - part.h / 2 * bias;
                part.radian = Math.PI * this.sectionPer;

            },

            err : function () {

                var part = this.parts['box'],
                bias = Math.abs(.5 - this.sectionPer) / .5;

                part.w = 640 - 640 * this.sectionPer;
                part.h = 480 - 480 * this.sectionPer;

                part.x = 640 - 640 * this.sectionPer;
                part.y = 240 - part.h / 2 * bias;
                part.radian = Math.PI * 3 * this.sectionPer;

            },

            over : function () {

                var part = this.parts['box'],

                bias = Math.abs(.5 - this.sectionPer) / .5;

                part.w = 480 - 480 * bias;
                part.h = 480 - 480 * bias;

                part.x = 640 * this.sectionPer - part.w / 2;
                part.y = 240 - part.h / 2;
                part.radian = 0;

            },

            cin : function () {

                var part = this.parts['box'];

                part.w = 640 * this.sectionPer;
                part.h = 480 * this.sectionPer;

                part.x = 320 - part.w / 2;
                part.y = 240 - part.h / 2;

                part.radian = 0;
            }

        }

    },

    // define the forFrame movement
    forFrame : function () {

        var part;

        // ajust the logo
        part = this.parts['logo'];
        part.x = 640 - 128;
        part.y = 480 - 56;

        this.currentSection();

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

scene.load(['../mylogo_128.png'], function (progress) {

    if (progress === 1) {

        scene.play({
            //scene.toPNGCollection({

        });

    }

});
