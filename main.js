function yeet() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/r7LTMW8oc/model.json", modelReady);
}

function modelReady() {
    classifier.classifiy(gotResults);
}

function gotResults() {
    console.log("got results");
}