# 3D Renderer

A lightweight 3D wireframe renderer built from scratch in JavaScript, using a Canvas 2D context. No libraries, no WebGL — just math.

## Features

- Perspective projection
- Free camera movement (WASD + arrow keys)
- Multiple 3D shapes (cube, pyramid, truncated octahedron)
- Object rotation animation
- Back-face clipping (lines behind the camera are skipped)

## Controls

| Key | Action |
|-----|--------|
| `W` | Move forward |
| `S` | Move backward |
| `A` | Strafe left |
| `D` | Strafe right |
| `←` | Turn camera left |
| `→` | Turn camera right |

## How It Works

Each frame, every vertex goes through this pipeline:

```
object vertex
  → rotate_xz / rotate_yz   (spin the object)
  → subtract camera position (move to camera space)
  → rotate by -camera.angle  (apply camera orientation)
  → project (x/z, y/z)       (perspective divide)
  → screen                   (map -1..1 to canvas pixels)
```

### Key Functions

- `rotate_xz(p, angle)` — rotates a point in the XZ plane (horizontal, around Y axis)
- `rotate_yz(p, angle)` — rotates a point in the YZ plane (vertical, around X axis)
- `project(p)` — perspective projection: divides X and Y by Z
- `screen(p)` — maps normalized coordinates to canvas pixel coordinates
- `postion_by_camera(p, camera)` — translates and rotates a point into camera space
- `draw_line_3d(a, b)` — projects and draws a line, skipping it if either point is behind the camera (`z <= 0`)

### Shapes

Shapes are defined as `{ vs, fs }` where:

- `vs` — array of 3D vertices `{x, y, z}`
- `fs` — array of faces, each face being an ordered list of vertex indices

Edges are drawn by connecting each index in a face to the next, wrapping around at the end.

## Adding a New Shape

```js
const shapes = {
  myShape: {
    vs: [
      {x:  0.25, y:  0.25, z:  0.25},
      // ...more vertices
    ],
    fs: [
      [0, 1, 2, 3], // a face connecting vertices 0→1→2→3→0
      // ...more faces
    ]
  }
}

// Then at the bottom:
let shape = shapes.myShape
let fs = shape.fs
let vs = shape.vs
```

## Notes

- Angles are stored in **degrees** internally and converted to radians with `rad()` when passed to `Math.sin/cos`
- The camera's forward direction is `(sin(angle), cos(angle))` in the XZ plane, so movement uses this vector to stay relative to where you're looking
- `dz` can be used to push the object away from the world origin if needed (currently `0`)
