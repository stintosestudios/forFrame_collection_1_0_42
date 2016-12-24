console.log('scene.js for circle_pointer');

// start by setting up the scene
scene({

    maxFrame : 100,

    // define some parts
    parts : [{
            id : 'logo', // logo
            w : 128,
            h : 56,
            skin : {
                imgIndex : 0,
                w : 128,
                h : 56
            }
        }, {
            id : 'point:0',
            w : 128,
            h : 128
        }, {
            id : 'point:1',
            w : 64,
            h : 64
        }, {
            id : 'point:2',
            w : 64,
            h : 64
        }, {
            id : 'point:3',
            w : 64,
            h : 64
        }, {
            id : 'point:4',
            w : 64,
            h : 64
        }, {
            id : 'point:5',
            w : 64,
            h : 64
        }

    ],

    // define the forFrame movement
    forFrame : function () {

        var part = this.parts['logo'],
        self = this,
        radius = 128,
        radOffset = Math.PI * 2 * this.percentDone;

        part.x = 640 - 128;
        part.y = 480 - 56;

        // loop all parts
        Object.keys(this.parts).forEach(function (id) {

            var pointIndex;

            // get the part
            part = self.parts[id];
            // is it a point?
            if (part.id.indexOf('point:') != -1) {

                pointIndex = part.id.split(':')[1];

                part.x = Math.cos(Math.PI * 2 / 6 * pointIndex) * radius + 320 - (part.w / 2);
                part.y = Math.sin(Math.PI * 2 / 6 * pointIndex) * radius + 240 - (part.h / 2);

            }

        });

    }

});

// inject a canvas into the given id.
scene.injectCanvas('apparea');

scene.load(['../mylogo_128.png'], function (progress) {

    if (progress === 1) {

        //scene.setFrame(0);
        //scene.renderFrame();

        
        scene.play({
        //scene.toPNGCollection({

        appendRender : function (ctx) {}

        });

        

    }

});
