# Exam Prep Advanced Frameworks

**Write a paragraph for each question**

https://ual-cci.github.io/mick/ACC-1-3D-graphics/3D%20graphics/assets/player/KeynoteDHTMLPlayer.html#58

## Questions

**Whats the difference between polar an cartesian coordinates?**

Different ways of representing point sin a plane. 

**How do we convert from polar to cartesian and vice versa?**

POLTOCAR

x = (r * cos( θ ))<br />
y = (r * sin( θ ))

CARTOPOL

Arc tan 5 / x<br />
Inverse tangent of y, tan over x (or smth)

angle = Math.atan(y/x)

**What is the most interesting and challenging aspect of the Mandelbrot algorithm?**

The Mandelbrot algorithm is a visualisation of complex numbers. When you zoom in on a piece of the Mandelbrot set, you realise that that piece contains, and consists of, another Mandelbrot set. Unsymmetrical nature of shape (unintuitive). Plotting a graph on a complex plane. Complex numbers are basically a vector of two vectors that are considered as single number.

https://www.bowdoin.edu/~dfrancis/askanerd/mandelbrot/

**How do we get the distance between two 2D points?**

d(a, b) = sqrt((ax.bx)^2 + (ay-by)^2) ??<br />
A^2 + b^2 = c^2 (Pythagoras theorem)

**How do we get the distance between two 2D points?**

d(a, b) = sqrt((ax.bx)^2 + (ay-by)^2 + (az-bz)^2)

**Whats a platonic solid?**

Primitives. One of five regular solids (a tetrahedron, cube, octahedron, dodecahedron, or icosahedron). Each face of a platonic solid is the same size and shape.

**Whats a good way of thinking about the structure of a sphere?**

The points of a sphere can be thought of as a series of rings, with each ring being different in size. The size of each ring can be computed by using the first 180 degrees of a sine wave. 

**Whats is a normal?**

A Normal is a vector perpendicular to the surface either from the surface centre, the vertex, or the object centre. Normals tell the renderer which direction the object or surface is facing. If the vertex Normal is pointing away from the viewer, you might not see the surface.

**What’s the difference between the difference and the distance?**

Difference between two vectors: one take the other. B minus A.<br />
Distance between two vectors: Magnitude of difference. (How long it is (Pythagoras))

**With respect to distances between vectors, what is the magnitude?**

The magnitude of a vector is the distance between the initial point and the end point. Magnitude does not include direction.

**How do we calculate a unit vector?**

The unit vector gives you a normalised vector with the length of 1. It doesn’t tell you how far things are. It tells you what direction you need to go in order to get to them. It provides this information as a cartesian coordinate. 

To calculate, get the difference v between points a and b. Then, divide each element by the magnitude of v. 

Difference divided by the magnitude. A unit vector is normalized.

**Can you explain what bump mapping is?**

Bump mapping is a technique in computer graphics for simulating bumps and wrinkles on the surface of an object. It uses less resources than the equivalence in geometry detail and hence reduces stress on the GPU. This is achieved by perturbing the surface normals of the object and using the perturbed normal during lighting calculations.

## Practical Exam

More complex, higher marc. Combine operations to produce interesting outcomes. Minimum threshhold: get the program to run. If using GLSL, javascript setup can be forked.

Mick recommends creating a shader. Do the thing you feel most comfortable doing.
