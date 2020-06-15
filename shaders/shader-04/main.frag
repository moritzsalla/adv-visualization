#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float sinwavethis (float i) {
    i = sin(i * u_time);
    return i;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    st.x *= sinwavethis(sinwavethis(st.x));
    st.y = sinwavethis(st.x);

    gl_FragColor = vec4(st.xy, st.x, 1.);
}
