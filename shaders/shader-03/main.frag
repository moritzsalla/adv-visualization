#ifdef GL_ES
precision mediump float;
#endif
​
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
​
void main(){
    vec2 xy = gl_FragCoord.xy / u_resolution.xy;
    vec4 outputColor = vec4(1., 0., 0., 1.);
    
    if (xy.x > 0.5) {
    outputColor = vec4(0.446,0.595,0.412, 1.);
}
    
    outputColor.r = xy.x;
    gl_FragColor = outputColor;
}
