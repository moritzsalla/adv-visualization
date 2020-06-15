#include "maximilian.h"

maxiOsc myCounter, mySwitchableOsc, sine1, sine2, sine3, sine4;
int CurrentCount;
double myOscOutput, myCurrentVolume;
maxiEnv myEnvelope;


void setup() {

    myEnvelope.setAttack(0);
    myEnvelope.setDecay(1);
    myEnvelope.setSustain(1);
    myEnvelope.setRelease(1000);

}

void play(double *output) {

    // notice that we feed in a value of 1. to create an envelope shape we can apply later.
    myCurrentVolume = myEnvelope.adsr( 1., myEnvelope.trigger );

    CurrentCount = myCounter.phasor( 1, 1, 9 ); // phasor can take three arguments; frequency, start value and end value.

    // You'll notice that these 'if' statements don't require curly braces "{}".
    // This is because there is only one outcome if the statement is true.

    if ( CurrentCount == 1 ) myEnvelope.trigger = 1; // trigger the envelope

    else myEnvelope.trigger = 0; // release the envelope to make it fade out only if it's been triggered

    if ( CurrentCount < 5 )

        myOscOutput=mySwitchableOsc.sawn( CurrentCount * 100 );

    else if ( CurrentCount >= 5 )

        myOscOutput=mySwitchableOsc.sinewave( CurrentCount * 50 ); //one osc object can produce whichever waveform you want.


    output[0] = ((myOscOutput * myCurrentVolume) + sine1.sinewave(50) + sine2.sinewave(100) + sine3.sinewave(102) + (sine1.noise() * 0.05)) * 0.5;
    output[1] = output[0];

}
