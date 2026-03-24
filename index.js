const shapes = {

	cube : {
		vs : [
			{x:  0.25, y:  0.25, z:  0.25},
			{x: -0.25, y:  0.25, z:  0.25},
			{x: -0.25, y: -0.25, z:  0.25},
			{x:  0.25, y: -0.25, z:  0.25},
		
			{x:  0.25, y:  0.25, z: -0.25},
			{x: -0.25, y:  0.25, z: -0.25},
			{x: -0.25, y: -0.25, z: -0.25},
			{x:  0.25, y: -0.25, z: -0.25},
		],
		fs : [
			[0, 1, 2, 3],
			[4, 5, 6, 7],
			[0, 4],
			[1, 5],
			[2, 6],
			[3, 7],
		],
	},
	
	pyramid : {
		vs : [
			{x:  0.25, y: -0.25, z: -0.25},
			{x: -0.25, y: -0.25, z: -0.25},
			{x: -0.25, y: -0.25, z:  0.25},
			{x:  0.25, y: -0.25, z:  0.25},
		 
			{x: 0, y: 0.25, z: 0},
		 ],
	 
		 fs : [
			[0, 1, 2, 3],
		 
			[4, 0],
			[4, 1],
			[4, 2],
			[4, 3],
		]
	},

	tetrahedron: {
		vs : [
			{x:  0.3, y:  0, z:  2*0.3}, // 0
			{x: -0.3, y:  0, z:  2*0.3}, // 1
			{x:  0, y:  0.3, z:  2*0.3}, // 2
			{x:  0, y: -0.3, z:  2*0.3}, // 3
			{x:  2*0.3, y:  0.3, z:  0}, // 4
			{x:  2*0.3, y: -0.3, z:  0}, // 5
			{x:  2*0.3, y:  0, z:  0.3}, // 6
			{x:  2*0.3, y:  0, z: -0.3}, // 7
			{x: -2*0.3, y:  0.3, z:  0}, // 8
			{x: -2*0.3, y: -0.3, z:  0}, // 9
			{x: -2*0.3, y:  0, z:  0.3}, // 10
			{x: -2*0.3, y:  0, z: -0.3}, // 11
			{x:  0.3, y:  0, z: -2*0.3}, // 12
			{x: -0.3, y:  0, z: -2*0.3}, // 13
			{x:  0, y:  0.3, z: -2*0.3}, // 14
			{x:  0, y: -0.3, z: -2*0.3}, // 15
			{x:  0, y:  2*0.3, z:  0.3}, // 16
			{x:  0, y:  2*0.3, z: -0.3}, // 17
			{x:  0.3, y:  2*0.3, z:  0}, // 18
			{x: -0.3, y:  2*0.3, z:  0}, // 19
			{x:  0, y: -2*0.3, z:  0.3}, // 20
			{x:  0, y: -2*0.3, z: -0.3}, // 21
			{x:  0.3, y: -2*0.3, z:  0}, // 22
			{x: -0.3, y: -2*0.3, z:  0}, // 23
		],
		fs : [
		    [2,  0,  6,  4, 18, 16], // +z/+x/+y
		    [3,  1, 10,  9, 23, 20], // +z/-x/-y
		    [2,  1, 10,  8, 19, 16], // +z/-x/+y
		    [3,  0,  6,  5, 22, 20], // +z/+x/-y
		    [14, 12,  7,  4, 18, 17], // -z/+x/+y
		    [14, 17, 19,  8, 11, 13], // -z/-x/+y  ← fixed
		    [15, 13, 11,  9, 23, 21], // -z/-x/-y
		    [15, 21, 22,  5,  7, 12], // -z/+x/-y  ← fixed
		]
	},

	octahedron: {
		vs: [
			{x:  0.4, y:  0, z:  0}, // 0 right
			{x: -0.4, y:  0, z:  0}, // 1 left
			{x:  0, y:  0.4, z:  0}, // 2 top
			{x:  0, y: -0.4, z:  0}, // 3 bottom
			{x:  0, y:  0, z:  0.4}, // 4 front
			{x:  0, y:  0, z: -0.4}, // 5 back
		],
		fs: [
			[2, 0, 4], [2, 4, 1], [2, 1, 5], [2, 5, 0], // top 4 faces
			[3, 4, 0], [3, 1, 4], [3, 5, 1], [3, 0, 5], // bottom 4 faces
		]
	},

	icosahedron: {
		vs: (() => {
			const t = (1 + Math.sqrt(5)) / 2 * 0.2;
			const s = 0.2;
			return [
				{x: -s, y:  t, z:  0}, // 0
				{x:  s, y:  t, z:  0}, // 1
				{x: -s, y: -t, z:  0}, // 2
				{x:  s, y: -t, z:  0}, // 3
				{x:  0, y: -s, z:  t}, // 4
				{x:  0, y:  s, z:  t}, // 5
				{x:  0, y: -s, z: -t}, // 6
				{x:  0, y:  s, z: -t}, // 7
				{x:  t, y:  0, z: -s}, // 8
				{x:  t, y:  0, z:  s}, // 9
				{x: -t, y:  0, z: -s}, // 10
				{x: -t, y:  0, z:  s}, // 11
			];
		})(),
		fs: [
			[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
			[1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
			[3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
			[4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
		]
	},

	diamond: {
		vs: [
			{x:  0,    y:  0.4,  z:  0   }, // 0 top
			{x:  0.25, y:  0.1,  z:  0   }, // 1
			{x:  0,    y:  0.1,  z:  0.25}, // 2
			{x: -0.25, y:  0.1,  z:  0   }, // 3
			{x:  0,    y:  0.1,  z: -0.25}, // 4
			{x:  0.15, y: -0.1,  z:  0.15}, // 5
			{x: -0.15, y: -0.1,  z:  0.15}, // 6
			{x: -0.15, y: -0.1,  z: -0.15}, // 7
			{x:  0.15, y: -0.1,  z: -0.15}, // 8
			{x:  0,    y: -0.4,  z:  0   }, // 9 bottom
		],
		fs: [
			[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], // top crown
			[1, 2, 5], [2, 3, 6], [3, 4, 7], [4, 1, 8], // upper girdle
			[2, 5, 6], [3, 6, 7], [4, 7, 8], [1, 8, 5], // lower girdle
			[5, 9, 6], [6, 9, 7], [7, 9, 8], [8, 9, 5], // bottom pavilion
		]
	},

	torus: {
		vs: (() => {
			const R = 0.3, r = 0.12;
			const seg = 10, tube = 8;
			const pts = [];
			for (let i = 0; i < seg; i++) {
				const a = (i / seg) * Math.PI * 2;
				for (let j = 0; j < tube; j++) {
					const b = (j / tube) * Math.PI * 2;
					pts.push({
						x: (R + r * Math.cos(b)) * Math.cos(a),
						y: r * Math.sin(b),
						z: (R + r * Math.cos(b)) * Math.sin(a),
					});
				}
			}
			return pts;
		})(),
		fs: (() => {
			const seg = 10, tube = 8;
			const faces = [];
			for (let i = 0; i < seg; i++) {
				for (let j = 0; j < tube; j++) {
					const a = i * tube + j;
					const b = i * tube + (j + 1) % tube;
					const c = ((i + 1) % seg) * tube + j;
					const d = ((i + 1) % seg) * tube + (j + 1) % tube;
					faces.push([a, b, d, c]);
				}
			}
			return faces;
		})(),
	},

	star: {
		vs: [
			{x:  0,    y:  0.4,  z:  0   }, // 0 top point
			{x:  0.4,  y:  0,    z:  0   }, // 1 right point
			{x:  0,    y: -0.4,  z:  0   }, // 2 bottom point
			{x: -0.4,  y:  0,    z:  0   }, // 3 left point
			{x:  0,    y:  0,    z:  0.4 }, // 4 front point
			{x:  0,    y:  0,    z: -0.4 }, // 5 back point
			{x:  0.15, y:  0.15, z:  0.15}, // 6 inner
			{x: -0.15, y:  0.15, z:  0.15}, // 7 inner
			{x: -0.15, y: -0.15, z:  0.15}, // 8 inner
			{x:  0.15, y: -0.15, z:  0.15}, // 9 inner
			{x:  0.15, y:  0.15, z: -0.15}, // 10 inner
			{x: -0.15, y:  0.15, z: -0.15}, // 11 inner
			{x: -0.15, y: -0.15, z: -0.15}, // 12 inner
			{x:  0.15, y: -0.15, z: -0.15}, // 13 inner
		],
		fs: [
			[0, 6, 7], [0, 7, 11], [0, 11, 10], [0, 10, 6],
			[2, 8, 9], [2, 9, 13], [2, 13, 12], [2, 12, 8],
			[1, 6, 9], [1, 9, 13], [1, 13, 10], [1, 10, 6],
			[3, 7, 8], [3, 8, 12], [3, 12, 11], [3, 11, 7],
			[4, 6, 7], [4, 7, 8],  [4, 8, 9],   [4, 9, 6],
			[5, 10, 11], [5, 11, 12], [5, 12, 13], [5, 13, 10],
		]
	},
}

const BACKGROUND =  "#101010";
const FOREGROUND = "#50FF50";


console.log(game)
game.width = 800
game.height = 800

const ctx = game.getContext("2d")
console.log(ctx)

function clear() {
	ctx.fillStyle = BACKGROUND
	ctx.fillRect(0, 0, game.width, game.height)
}


function point({x, y}) {
	const size = 20;

	ctx.fillStyle = FOREGROUND;
	ctx.fillRect(x - size / 2, y - size / 2, size, size);
}

function rad(angle) {
	return (angle * Math.PI / 180)
}

function line(p1, p2) {
	ctx.lineWidth = 3;
	ctx.strokeStyle = FOREGROUND;

	ctx.beginPath();

	ctx.moveTo(p1.x, p1.y);
	ctx.lineTo(p2.x, p2.y);

	ctx.stroke();
}

function screen(p) {
	// -1..1 => 0..2 => 0..1 =>0 ..w
	return {
		x: (p.x + 1) / 2 * game.width,
		y: (1 - (p.y + 1) / 2) * game.height,
	}
}

function project({x, y, z}) {
	return {
		x: x / z,
		y: y / z,
	}
}


function translate_z({x, y, z}, dz) {
	return {x, y, z: z + dz}
}

function rotate_yz({x, y, z}, angle) {
    const c = Math.cos(angle)
    const s = Math.sin(angle)

    return {
        x,
        y: y * c - z * s,
        z: y * s + z * c,
    };
}

function rotate_xz({x, y, z}, angle) {
	const c = Math.cos(angle)
	const s = Math.sin(angle)

 	return {
 		x: x * c - z * s,
 		y,
 		z: x * s + z * c,
 	};
} 



const FPS = 50;
let dz = 2;
let angle = 0;

let camera = {
	x: 0,
	y: 0,
	z: -2,
	angle: 0,
	up_angle: 0
}

function postion_by_camera(p, c) {
	offset = {
		x: p.x - c.x,
		y: p.y - c.y,
		z: p.z - c.z,
	}
	angle_applied = rotate_xz(offset, -rad(c.angle))
	up_angle_applied = rotate_yz(angle_applied, rad(c.up_angle))
	return up_angle_applied
}

function draw_line_3d(a, b) {
    const pa = postion_by_camera(translate_z(a, dz), camera);
    const pb = postion_by_camera(translate_z(b, dz), camera);
    if (pa.z <= 0 || pb.z <= 0) return; // ← skip if behind camera
    line(screen(project(pa)), screen(project(pb)));
}

function frame() {
	const dt = 1 / FPS;
	angle += 2 * Math.PI * dt / 10;

	clear()


	for (const f of fs) {
		for (let i = 0; i < f.length; ++i) {
			const a = vs[f[i]];
			const b = vs[f[(i + 1) % f.length]];
			// draw_line_3d(rotate_yz(rotate_xz(a, angle), angle), rotate_yz(rotate_xz(b, angle), angle))
			draw_line_3d(rotate_xz(a, angle), rotate_xz(b, angle))
			// draw_line_3d(a, b)
		}
	}
	setTimeout(frame, 1000/FPS);
}


document.addEventListener("keydown", (e) => {
	if 		(e.key == "ArrowLeft") camera.angle = (camera.angle + 4) % 360;
	else if (e.key == "ArrowRight") camera.angle = (camera.angle - 4) % 360;
	else if (e.key == "ArrowUp") camera.up_angle = (camera.up_angle + 4) % 360;
	else if (e.key == "ArrowDown") camera.up_angle = (camera.up_angle - 4) % 360;
	else if (e.key === "w") {
		camera.x -= Math.sin(rad(camera.angle)) * 0.25
		camera.z += Math.cos(rad(camera.angle)) * 0.25
	}
	else if (e.key === "s") {
		camera.x += Math.sin(rad(camera.angle)) * 0.25
		camera.z -= Math.cos(rad(camera.angle)) * 0.25
	}
	else if (e.key == "a") {
		camera.x -= Math.cos(rad(camera.angle)) * 0.25
		camera.z -= Math.sin(rad(camera.angle)) * 0.25
	}
	else if (e.key == "d") {
		camera.x += Math.cos(rad(camera.angle)) * 0.25
		camera.z += Math.sin(rad(camera.angle)) * 0.25
	}
	else if (e.key == " ") camera.y += 0.25
	else if (e.key == "c") camera.y -= 0.25
})

let shape = shapes.torus
let fs = shape.fs
let vs = shape.vs
setTimeout(frame, 1000/FPS);
