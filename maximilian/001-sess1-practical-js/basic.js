//create a maximilian object
var maxi = maximilian();

//create an audio engine
var maxiEngine = new maxi.maxiAudio();

//create oscillators
var osc = new maxi.maxiOsc();

var oscilloscope, spectrogram;

//when the play button is pressed...
let playAudio = () => {
  //start the audio engine
  maxiEngine.init();

  //audio code goes here!
  maxiEngine.play = function() {
    return osc.saw(200);
  }
}

// when page is loada, init audio

playAudio()