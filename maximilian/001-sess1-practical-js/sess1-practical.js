const playButton = document.getElementById('playButton')
playButton.addEventListener("click", () => playAudio())


//create maximilian object
var maxi = maximilian()

//create audio engine
var maxiEngine = new maxi.maxiAudio()

var osc1 = new maxi.maxiOsc()
var osc2 = new maxi.maxiOsc()
var osc3 = new maxi.maxiOsc()
var osc4 = new maxi.maxiOsc()
var filter = new maxi.maxiFilter()

// load sample
// maxiEngine.loadSample("#", sampler)

var oscilloscope, spectrogram


let playAudio = () => {
  //arrange play button
  playButton.style.display = "none"
  //initiate audio engine
  maxiEngine.init()

  //show nexus scopes
  Nexus.context = maxiEngine.context
  oscilloscope = new Nexus.Oscilloscope('oscilloscope', {
    'size': [400, 100]
  }).connect(maxiEngine.maxiAudioProcessor)
  spectrogram = new Nexus.Spectrogram('spectrogram', {
    'size': [400, 100]
  }).connect(maxiEngine.maxiAudioProcessor)


  maxiEngine.play = function() {
    return [osc1.saw(100)] * 0.4
		// return sampler.play() * 4.0
  }
}
