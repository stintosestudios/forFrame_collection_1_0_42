# forFrame.js v1.0.42 Animation Collection.

![logo](https://raw.githubusercontent.com/stintosestudios/forFrame_collection_1_0_42/master/projects/logo/gifs/gif_1_320.gif)

This repository is a collection of animations made with the help of my HTML 5 animation framework called forFrame. All animations use features introduced in the first release of the framework (v1.0.42).

## Projects

<div>

    <a href="https://github.com/stintosestudios/forFrame_collection_1_0_42/tree/master/projects/logo"><img src="https://raw.githubusercontent.com/stintosestudios/forFrame_collection_1_0_42/master/projects/logo/thum_128.png"></a>
    <a href="https://github.com/stintosestudios/forFrame_collection_1_0_42/tree/master/projects/fractal_1"><img src="https://raw.githubusercontent.com/stintosestudios/forFrame_collection_1_0_42/master/projects/fractal_1/thum_128.png"></a>
    <a href="https://github.com/stintosestudios/forFrame_collection_1_0_42/tree/master/projects/circle_pointer"><img src="https://raw.githubusercontent.com/stintosestudios/forFrame_collection_1_0_42/master/projects/circle_pointer/thum_128.png"></a>

</div>

## Future Additions

While using a current version of forFrame it is expected that I will run into shortcomings with the framework in terms of additional features that I would like to have in the framework, as well as minor mistakes. The following is a list of changes I would like to include in the next minor release of forFrame. As so the following will likely be added, or addressed in future minor releases of the frame work.

* Logo property for main options object

I would like to add a feature where I can just add an object that contains at least an image index, draw width, draw height, drawX, and drawY position of an image of a logo that is to be drawn on the canvas for each frame.

* Part appendRender methods.

So I have what I call appendRender methods for scene.play, and scene.toPNGCollection. However it would be nice to have such methods as an option in place of an image so I can skin a part by way of javascript when doing so is called for.

* Adding static x, and y values for parts should work.

I should have the full range of static values that are given to parts working.

* The way that scene.render accepts an appendRender.

The scene.render method should accept an appendRender method as part of an object, just like the methods scene.play, and scene.toPNGCollection. This will make things easer when it is desired to just render a single given frame.

* node sever.js

Although the method of starting chrome with loose security settings works, a better way might just be to serve what is being worked on via http. As such I should provide a simple server.js file in the root name space to will just provide a simple static server to do just that.

* scene.injectUI

A method that injects a user interface that allows for playback, jump to frame, export to png collection functions among other things. This will be nice as it will allow for me to just use that to provide everything I want when working with an animation in a simple UI, so I do not have to keep changing my code around.

* opacity

add an opacity value to parts, and make the necessary change to the render method to allow for opacity effects.