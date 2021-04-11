Webcam.set({
    width:170,
    height:170,
    image_format:'jpeg',
    jpeg_quality:90
});
Webcam.attach("#camera");

Favourite= document.getElementById("camera");
console.log(Favourite);

function capture()
{
    Webcam.snap(function(variable){
        document.getElementById("result").innerHTML = '<img id="id" src="'+variable+'">';
    });
}

console.log("ML5 version",ml5.version);
var ty = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Zzzdd5siv/model.json',cypher);

function cypher()
{
    console.log('model loaded');
}

function identify()
{
    Img = document.getElementById("id");
    ty.classify(Img, fun);
}

function fun(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

