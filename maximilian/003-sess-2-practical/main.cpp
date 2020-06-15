
#include "maximilian.h"

maxiSample beat1, beat2, beat3, beat4;
maxiOsc sine1;

void setup() {
    
    beat1.load("/Users/moritzsalla/CCi/Mick/my-repo-mick/maximilian/003-sess-2-practical/samples/beat1.wav");
    beat2.load("/Users/moritzsalla/CCi/Mick/my-repo-mick/maximilian/003-sess-2-practical/samples/beat2.wav");
    beat3.load("/Users/moritzsalla/CCi/Mick/my-repo-mick/maximilian/003-sess-2-practical/samples/beat3.wav");
    beat4.load("/Users/moritzsalla/CCi/Mick/my-repo-mick/maximilian/003-sess-2-practical/samples/beat4.wav");
    
}

void play(double *output) {
    
    output[0] = beat1.play() + beat2.play(1) + beat3.play() + (beat4.play(2) * 0.50);
    output[1] = output[0];
    
}
