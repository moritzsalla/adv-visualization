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
    float g = 0.4;
    float b = 0.6;

    for (int x = 0; x < 10; x++) {
        float i = float(x);
        float l = length(vec2(st.x, st.y));
        g = i * l;
    }

    g = sin(g * u_time);

    vec3 cl = vec3(r, g, b);

    gl_FragColor = vec4(cl, 1.);
}
