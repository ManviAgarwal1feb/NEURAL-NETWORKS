Webcam.set({
    width:400,
    height:350,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}
console.log('ml5.version=',ml5.version);
classifier=ml5.imageClassifier("link from teachble machine",modelLoaded);
function modelLoaded(){
    console.log("Model I=is Loaded");
}