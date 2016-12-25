console.log('scene.js for sections');

// start by setting up the scene
scene({

    maxFrame : 50,

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
        timeline : 'zoomout:50;zoomin:100',

        forFrame : {

            zoomout : function () {

                var part = this.parts['box'];

                part.w = 640 - 640 * this.sectionPer;
                part.h = 480 - 480 * this.sectionPer;

                part.x = 320 - part.w / 2;
                part.y = 240 - part.h / 2;

            },

            zoomin : function () {

                var part = this.parts['box'];

                part.w = 640 * this.sectionPer;
                part.h = 480 * this.sectionPer;

                part.x = 320 - part.w / 2;
                part.y = 240 - part.h / 2;

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
