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

let shape = shapes.tetrahedron
let fs = shape.fs
let vs = shape.vs
setTimeout(frame, 1000/FPS);
