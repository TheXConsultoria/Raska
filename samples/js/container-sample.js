﻿/// <reference path="../../src/raska.js" />

/// Configures raska to a given Canvas element
raska.installUsing({ targetCanvasId: "raskaContent" });

var head = raska.newCircle();
head.radius = 80;
head.x = 150;
head.y = 150;
head.fillColor = "yellow";
head.border.color = "black";

var leftEye = raska.newCircle();
leftEye.position = raska.positionTypes.relative;
leftEye.x = -40;
leftEye.y = -20;
leftEye.fillColor = "white";
leftEye.border.width = 1;
leftEye.border.color = "black";

var leftEyeBall = raska.newCircle();
leftEyeBall.position = raska.positionTypes.relative;
leftEyeBall.x = 0;
leftEyeBall.y = 0;
leftEyeBall.radius = 5;
leftEyeBall.fillColor = "silver";
leftEyeBall.border.width = 1;
leftEyeBall.border.color = "black";

var rightEye = raska.newCircle();
rightEye.position = raska.positionTypes.relative;
rightEye.x = 40;
rightEye.y = -20;
rightEye.fillColor = "white";
rightEye.border.width = 1;
rightEye.border.color = "black";

var rightEyeBall = raska.newCircle();
rightEyeBall.position = raska.positionTypes.relative;
rightEyeBall.x = 0;
rightEyeBall.y = 0;
rightEyeBall.radius = 5;
rightEyeBall.fillColor = "silver";
rightEyeBall.border.width = 1;
rightEyeBall.border.color = "black";


raska.plot(

    /// Head contains
    head.addChild(

            // the left eye that contains an eyeBall
            leftEye.addChild(leftEyeBall))

        /// and
        .addChild(

            // the right eye that contains another eyeBall
            rightEye.addChild(rightEyeBall)))

/// Helper function to link the coordinates from two objects
.onCanvasInteraction("mousemove",
    function (evtData) {

        rightEyeBall.adjustPosition(evtData.x, evtData.y);
        leftEyeBall.adjustPosition(evtData.x, evtData.y);

    });
