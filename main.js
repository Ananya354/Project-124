function setup(){
canvas=createCanvas(850, 600);
canvas.position(1000, 200);
video=createCapture(VIDEO);
video.size(850, 600);
video.position(110, 200);
posenet=ml5.poseNet(video, modelloaded);
posenet.on('pose', gotPoses);
 }
    
function modelloaded(){
console.log("Your Model is successfully loaded!");
}
    
function gotPoses(results){
console.log(results);
console.log(results[0].pose.leftWrist.x);
console.log(results[0].pose.rightWrist.y);
console.log(results[0].pose.nose.x);
console.log(results[0].pose.nose.y);
}
    