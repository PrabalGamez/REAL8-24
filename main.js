//https://teachablemachine.withgoogle.com/models/Jp4GSANL8/model.json

function preload(){
    
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Jp4GSANL8/model.json", ModelLoaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, GotResult);
}

function ModelLoaded(){
    console.log("Modal Loaded :)");
}

function GotResult(error, result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("Object_Name").innerHTML=result[0].label;
        document.getElementById("Accuracy_Name").innerHTML=floor(result[0].confidence*100)+"%";
    }
}