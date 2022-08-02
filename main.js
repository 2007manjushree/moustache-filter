noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/jjcJz4yb/moustache-PNG18.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 35, 35);
}

function takesnapshot(){
    save('moustachefilter.png');
}

function modelLoaded(){
    console.log("Pose Net is initialised");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 18;
        noseY = results[0].pose.nose.y + 3;
        console.log("noseX =" +noseX);
        console.log("noseY =" +noseY);
    }
}