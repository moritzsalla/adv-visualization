#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float genericWave( float i ) {
    float x = sin(i * u_time);
    return x;
}


void main( void ) {
    
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    float r = 0.4;

    for (int i = 0; i <= 10; i++) {
        float x = float(i);
        r =  genericWave(x  / gl_FragCoord.y) * 200.;
    }


    float g = genericWave(1.);
    float b = step(genericWave(r), .1);
    
    vec3 cl = vec3(r, g, b);

    gl_FragColor = vec4(cl, 1.);
}
