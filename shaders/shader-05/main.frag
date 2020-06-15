#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
//gt
void main( void ) {
	
	vec3 color;
	float sum = 0.0;
	float size = 20.0;
	float r = 2.0;
	float g = 1.0;
	
	const float k = 5.;
	
	vec2 uPos = ( gl_FragCoord.xy / u_resolution.xy );
	float dx = exp( uPos.x*0.885);
	float dy = exp( uPos.x*0.085);
	float t = u_time * exp(4.0*dx) * (1.5);
	float t2 = u_time * exp(1.0*dy) * (1.0);
		

	for (int i = 0; i < 42; ++i) {
		vec2 u_position = u_resolution / 2.0;
		u_position.x += sin(t +310.0 * float(i)) * abs(sin(u_time) * u_mouse.y);
		u_position.y += cos(t2+ 53.0 * float(i)) * abs(cos(u_time) * u_mouse.x);
		
		float dist = length(gl_FragCoord.xy - u_position);

		sum += size / pow(dist, g);
	}
	
	if (sum > r) color = vec3(1,1,1);
	color = vec3( floor(sum*50.0)/(50.0*12.0) );
	gl_FragColor = vec4(color, 1);
}