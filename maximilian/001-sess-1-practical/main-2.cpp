#include "maximilian.h"

maxiOsc sine1, sine2, sine3, sine4, sine5;
maxiOsc myCounter,mySwitchableOsc;//
int CurrentCount;//
maxiFilter myFilter;
double myOscOutput,myCurrentVolume, myFilteredOutput;//
maxiEnv myEnvelope;

void setup() {

    myEnvelope.setAttack(100);
    myEnvelope.setDecay(1000);
    myEnvelope.setSustain(1000);
    myEnvelope.setRelease(3500);

}

void play(double *output) {

    myCurrentVolume=myEnvelope.adsr(1.,myEnvelope.trigger);
    
    CurrentCount=myCounter.phasor(1, 1, 9);
    
    if (CurrentCount==1) myEnvelope.trigger=1;
    
    else myEnvelope.trigger=0;

    myOscOutput =  ((sine1.sinewave(80) + sine2.sinewave(160)) * sine3.sinewave(2)) + (sine4.sinewave(80) * sine4.sinewave(80) * sine5.sinewave(1));
    
     myFilteredOutput=myFilter.lores(myOscOutput,myCurrentVolume*1000,10);
    
    output[0]=myFilteredOutput;
    output[1]=output[0];

}
