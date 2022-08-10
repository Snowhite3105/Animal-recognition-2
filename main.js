function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/z-ALxPh-7/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if (error) {
    console.error(error);
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence * 100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_b+","+random_number_g+","+random_number_b+")";

img = document.getElementById('Catface');
img1 = document.getElementById('Chickenface');
img2 = document.getElementById('Cowface');
img3 = document.getElementById('Pigface');
img4 = document.getElementById('pupace');

if (results[0].label == "Cat"){
    img.src = 'my_cat.gif';
    img1.src = 'Cowface.png';
    img2.src = 'Chickface.png';
    img3.src = 'Puppyface.png';
    img4.src = 'Pugface.png';
}else if (results[0].label == "Chicken"){
    img.src = 'Catface.png';
    img1.src = 'my_chick.gif';
    img2.src = 'Cowface.png'
    img3.src = 'Puppyface.png';
    img4.src = 'Pugface.png';
}
else if (results[0].label == "Cow"){
    img.src = 'Catface.png';
    img1.src = 'Chickface.png';
    img2.src = 'my_cow.gif';
    img3.src = 'Puppyface.png';
    img4.src = 'Pugface.png'
else if (results[0].label == "Puppy"){
        img.src = 'Catface.png';
        img1.src = 'Chickface.png';
        img2.src = 'Cowface.png';
        img3.src = 'my_puppy.gif';
        img4.src = 'Pugface.png'
}else{
    img.src = 'Catface.png';
    img1.src = 'Chick.png';
    img2.src = 'Cowface.png';
    img3.src = 'Puppyface.png';
    img4.src = 'my_pig.gif'
}
}