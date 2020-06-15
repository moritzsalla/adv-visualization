#include "maximilian.h"

maxiSample kick, snare, beats;

maxiOsc timer;
maxiOsc mySine, mySine2, mySine3;

int currentCount,lastCount,playHead,hit[16]={1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1};
int snarehit[16]={1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1};
int kicktrigger,snaretrigger;

double sampleOut;

void setup() {
    
    kick.load("/Users/moritzsalla/CCi/Mick/my-repo-mick/maximilian-c++/002-class-drummachine/kick.wav");
    snare.load("/Users/moritzsalla/CCi/Mick/my-repo-mick/maximilian-c++/002-class-drummachine/snare.wav");
    beats.load("/Users/moritzsalla/CCi/Mick/my-repo-mick/maximilian-c++/002-class-drummachine/kick.wav");
    
    printf("Summary:\n%s", kick.getSummary());
}

void play(double *output) { //this is where the magic happens. Very slow magic.
    
    
    currentCount = (int)timer.phasor(8); //this sets up a metronome that ticks 8 times a second
    
    if (lastCount!=currentCount) { //if we have a new timer int this sample, play the sound
        
        kicktrigger=hit[playHead%16]; //get the value out of the array for the kick
        snaretrigger=snarehit[playHead%16]; //same for the snare
        playHead++; //iterate the playhead
        lastCount = 0; //reset the metrotest
    }
    
    if (kicktrigger == 1) { //if the sequence has a 1 in it
        
        kick.trigger(); //reset the playback position of the sample to 0 (the beginning)
        snare.trigger(); //likewise for the snare
        
    }
    
    if (snaretrigger == 1) {
         
        snare.trigger(); //likewise for the snare
        
    }
    
    sampleOut=kick.playOnce() + snare.playOnce();
    
    // output[0] = sampleOut * ((mySine.sinewave(170) + mySine2.sinewave(172)) * 0.5); //left channel
    output[0] = beats.play(1);
    output[1] = output[0];
    
    kicktrigger = 0; //set trigger to 0 at the end of each sample to guarantee retriggering.
    snaretrigger = 0;
}
