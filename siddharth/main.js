function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded()
  {
    console.log('Model Loaded');
  }
  
  function draw()
  {
    image(video,0,0,300,300);
    classifier.classify(video,gotresults);
  }
  
  var previous_results='';
  function gotresults(error,results)
  {
  if(error)
  {
    console.error(error);
  }
  else
  {
    if((results[0].confidence>0.5) && (previous_results != results[0]. lablel))
    {
      console.log(results);
      previous_results=results[0].lable;
      var synth=window.speechSynthesis;
      speak_data='object detected is-'+results[0].label;
      var utterThis=new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
  
      document.getElementById("resuls_object_name").innerHTML=results[0].label;
      document.getElementById("resuls_object_accurary").innerHTML=results[0].confidence.tofixed(3);
    }
  }
  }
  