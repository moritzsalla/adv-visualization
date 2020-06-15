# Oscillation

__Phase:__ The speaker moves air. The position of the speaker is the phase of the wave.

__Frequency:__ How often they move up and down each second (comparable to fps)

__Amplitude:__ How much membrane is moving up and down

_Adding sounds together will increase amplitude. This creates distortion._

# Coordinate Systems

-> What are cartesian & polar coordinate systems?  
-> How can we convert between the two?

### Visualizing Maximilian

Sounds from maximilian can be visualized by grabbing the audio buffer and writing it to an array. We can then create a draw loop and use the buffer output to draw lines of different lengths for each amplitude value.

### Cartesian

A Cartesian coordinate system that specifies each point uniquely in a plane by a set of __numerical coordinates__, which are the signed distances to the point from __two fixed perpendicular oriented lines__, measured in the same unit of length. Each reference line is called a coordinate axis or just axis (plural axes) of the system, and the point where they meet is its origin, at ordered pair (0, 0).

_We need these to do anything other than draw straight lines. There are other systems._

![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cartesian-coordinate-system.svg/1920px-Cartesian-coordinate-system.svg.png)

### Polar

A two-dimensional coordinate system in which each point on a plane is determined by a __distance from a reference point__ and an __angle from a reference direction__.

![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Examples_of_Polar_Coordinates.svg/500px-Examples_of_Polar_Coordinates.svg.png)

### Radius

- Radius / magnitude = distance from the origin
- We can use to scale polar coordinates easily
- This is because the angle contains the direction of travel

### POLTOCAR

- In order to draw polar systems, we need to convert from polar to cartesian coordinates
- __x = (r * cos( θ ))__
- __y = (r * sin( θ ))__
- θ is the angle in radians (we often call this 'theta', or 'phase')
- r is the radius (or magnitude, or amplitude)

### CARTOPOL

- We can use Pythagoras’ theorem to convert cartesian coordinates to a radius
- The radius (magnitude) is the length of the hypotenuse from the origin to (x,y)
- Useful for finding out how far away you are from something

### CARTOPOL Theta

- tan( θ ) = y / x
- θ = tan-1 ( 5 / 12 )
- tan-1 is atan()
- So the angle in radians = atan(y/x) for positive nonzero numbers
- atan2 is used for all four quadrants of a cartesian coordinate space and cases where x=0

### Circles

- Spacing = circle around circle
- x = cos(spacing*n)*a
- y = sin(spacing*n)*b

# Pixel Manipulation and Image Processing

```javascript
// access image data
getImageData()

// create image data
createImageData()
```

### Writing out pixels

```javascript
position=(x+y*imageData.width)*4;
imageData.data[position] = c%255;
imageData.data[position+1] = c%255;
imageData.data[position+2] = c%255
imageData.data[position+3] = 255;
```

- The modulo operator is to ensure that the output never goes over 255 (max color value)
- The 'position' line moves through the Image Data 'array', writing colour channels for each position.

### Manual Rotation

```javascript
var x = Math.floor((Math.cos(theta) * j) - (Math.sin(theta) * i));
var y = Math.floor((Math.sin(theta) * j) + (Math.cos(theta) * i));
```

- j is the current pixel's original Y position
- i is the current pixel's original X position
- theta is the angle
- The two new vars, x and y, are going to be where we are copying from - we want these colour values to be written to the current pixel

```javascript
imageData2.data[((imageWidth * i) + j) * 4] = data[((imageWidth * y) + x) * 4];
```

### Image Convolution

- Produces wide range of image filters
- We create what is called a 'kernel'
- The kernel decides what the central output pixel is by multiplying the surrounding pixels by values in grid
- After multiplication, all the values get added together and averaged

![Image](https://docs-assets.developer.apple.com/published/0889ed702f/41089827-bfec-47e9-a51f-541ab29ebf34.png)

### Edge Detection

Edge detection is also based on this. How do they work?

### 3D Graphics from Scratch

- __How do we calculate distance in 3D?__ Right angled triangle!
- __For two vectors, a & b:__ Same as in 2D, plus an additional dimension
- Returns magnitude of distance between two points

```javascript
d(a,b) = sqrt((ax-bx)^2 + (ay-by)^2 + (az-bz)^2);

result = sqrt(((x-px)*(x-px)) + ((y-py)*(y-py)) + ((z-pz)*(z-pz)));
```

### Unit Vector

- __Normalized vector with a length of 1__
- What direction one must face to reach point
- Doesn't tell you distance

__Calculating the Unit Vector |v|__
- distance v between points a and b
- Simple subtraction, then divide by magnitude of v
- v = distance in 3D
- Magnitude of v = distance between a & b

To make vec b slighlty move to vec a: Multiply unit vector by small amount, add result to vector a.

### Vertices

_Collections of vectors_

__Platonic solids__: Primitives. Each face is same size and shape.

- Tetrahedron
- Cube
- Octahedron
- Dodecahedron
- Icosahedron

### Perspective Projection

- Projection of points on 2D surface to create perspective.
- Distortion of position of all vertices (z)
- Each vertex is independent

```javascript
scale = fov / (fov + z3d);
x = x * scale;
y = y * scale;
z = z;
```

### Scaling entire object

NEEDS REVISION

```javascript
x = x * scale2;
y = y * scale2;
z = z * scale2;
```

### Translation

NEEDS REVISION

Adding or subtracting values along axis. 

```javascript
x = (x * scale) + HALF_WIDTH;
y = (y * scale) + HALF_WIDTH;
```

### Rotation

NEEDS REVISION

```javascript
var cosRY = Math.cos(angle);
var sinRY = Math.sin(angle);
```

JUMPED REST OF SLIDESHOW

# three.js

### Models

- Usually imported
- Often groups of meshes
- openGL has nodes (..children..parents)
- Parents and Children
- Baked
- Entire Package: Resource

### Skeleton

```javascript
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);

var scene = new THREE.Scene();

var geometry = new THREE.BoxGeometry(200, 200, 200);

var myTextureLoader = new THREE.TextureLoader();

var myTexture = myTextureLoader.load('sgpic10.jpg');   

var material = new THREE.MeshPhongMaterial({map: myTexture});

var mesh = new THREE.Mesh(geometry, material);

var light = new THREE.DirectionalLight("rgb(255,255,255)"); 
      
var renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });

var controls = new THREE.OrbitControls(camera, renderer.domElement); 
```

### Lighting

- Ambient, average emission from all sources
- Diffuse, directional light cast by a light source
- Specular, (shininess) directional light that reflects off an object
- Emissive, colour of the object being lit

### Vertex

- Vector perpendicular to the surface either from the surface centre, the vertex, or the object centre.
- Tells the renderer which direction the object or surface is facing.
- Not visible if pointing away
- The Vertex normal is the unit vector of the vertex position - the origin

```javascript
// invert normal
Material.side = THREE.BackSide
// double sided normal
THREE.DoubleSide
```

![Image](https://camo.githubusercontent.com/5cdbecb831cdb5496d04358b5051330baed96420/68747470733a2f2f75616c2d6363692e6769746875622e696f2f6d69636b2f696d616765732f31302e6a7067)

### Bump Map

Give the effect of altering the geometry by simply adjusting the direction of the normal. Makes the light reflect differently.

### Textures
- Needs to be uploaded to graphics card
- Once there, you can bind it to the scene, draw with it, then unbind it.

# GLSL
- Runs on GPU
- Calculation run in parallel
- C like language
- HLSL = alternative
- Compiles at runtime

```GLSL
// ALWAYS SET PRECISION
precision mediump float;

// ALWAYS USE 1. NOT 1 (INTEGER LITERAL)
vec2(1., 0.5);

// current 2d fragment coordinate
gl_FragCoord

// 3d or 4d color in normalized units
gl_FragColor

// data types
float, int, bool, array, struct, vec2, vec3, vec4, ivec2, ivec3, ivec4, bvec2, bvec3, bvec4, mat2, mat3, mat4

// boolean vector
bvec2(true, false);

// int vectors
ivec3(1, 1, 1);

float len;

vec3(1., 1., 1.)
vec3(1.)

vec3 output (x, y, z);
output.x
output.y
output.z
```

### Matrices

```GLSL
mat4 myMat = mat4(1.0, 0.0, 0.0, 0.0,
                  0.0, 1.0, 0.0, 0.0,
                  0.0, 0.0, 1.0, 0.0,
                  0.0, 0.0, 0.0, 1.0);

// rotation
mat2 rotation = mat2(cos(angle), sin(angle), -sin(angle), cos(angle))

// access elements
mat4 m;

m[1] = vec4(2.0); // sets all of column 2 to 2
m[0,0] = 1.; // column 1, row 1 set to 1.
```

### Uniforms

Variable of any kind passed into main program. 

```GLSL
uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

// Images can be passed into fragment shaders and accessed as uniform shaders with smapler2D type
uniform sampler2D myTexture;
```

# Mandelbrot

Why is it interesting?

- Mapping complex numbers on a plane
- Asymmetrical
- Zoom in->more, slightly alternated versions of MS 
- colors: stable vs unstable regions (levels of instability )
- map/geography of iterative stability

zn+1 = zn2 + c
