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

	rectangle: {
		vs : [
			{x:  1.50, y:  0.25, z:  0.25},
			{x: -1.50, y:  0.25, z:  0.25},
			{x: -1.50, y: -0.25, z:  0.25},
			{x:  1.50, y: -0.25, z:  0.25},
		
			{x:  1.50, y:  0.25, z: -0.25},
			{x: -1.50, y:  0.25, z: -0.25},
			{x: -1.50, y: -0.25, z: -0.25},
			{x:  1.50, y: -0.25, z: -0.25},
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

	cylinder: {
		vs: (() => {
			const h = 1;      // half length
			const r = 0.2;      // radius
			const seg = 16;

			const pts = [];

			// front circle (z = +h)
			for (let i = 0; i < seg; i++) {
				const a = (i / seg) * Math.PI * 2;
				pts.push({
					x: Math.cos(a) * r,
					y: Math.sin(a) * r,
					z: h,
				});
			}

			// back circle (z = -h)
			for (let i = 0; i < seg; i++) {
				const a = (i / seg) * Math.PI * 2;
				pts.push({
					x: Math.cos(a) * r,
					y: Math.sin(a) * r,
					z: -h,
				});
			}

			return pts;
		})(),

		fs: (() => {
			const seg = 16;
			const faces = [];

			// front face
			const front = [];
			for (let i = 0; i < seg; i++) front.push(i);
			faces.push(front);

			// back face (reverse)
			const back = [];
			for (let i = 0; i < seg; i++) back.push(seg + (seg - i - 1));
			faces.push(back);

			// sides
			for (let i = 0; i < seg; i++) {
				const a = i;
				const b = (i + 1) % seg;
				const c = seg + i;
				const d = seg + (i + 1) % seg;

				faces.push([a, b, d, c]);
			}

			return faces;
		})(),
	},

	miku: (() => {
		const vs = [];
		const fs = [];
		const S = 0.65;

		function addVertex(x, y, z) {
			vs.push({ x: x * S, y: y * S, z: z * S });
			return vs.length - 1;
		}

		function addBox(cx, cy, cz, hx, hy, hz) {
			const v0 = addVertex(cx + hx, cy + hy, cz + hz);
			const v1 = addVertex(cx - hx, cy + hy, cz + hz);
			const v2 = addVertex(cx - hx, cy - hy, cz + hz);
			const v3 = addVertex(cx + hx, cy - hy, cz + hz);

			const v4 = addVertex(cx + hx, cy + hy, cz - hz);
			const v5 = addVertex(cx - hx, cy + hy, cz - hz);
			const v6 = addVertex(cx - hx, cy - hy, cz - hz);
			const v7 = addVertex(cx + hx, cy - hy, cz - hz);

			fs.push([v0, v1, v2, v3]); // front
			fs.push([v4, v5, v6, v7]); // back
			fs.push([v0, v4, v7, v3]); // right
			fs.push([v1, v5, v6, v2]); // left
			fs.push([v0, v1, v5, v4]); // top
			fs.push([v3, v2, v6, v7]); // bottom
		}

		function addFrustumY(cx, yTop, yBot, cz, topX, topZ, botX, botZ) {
			const t0 = addVertex(cx + topX, yTop, cz + topZ);
			const t1 = addVertex(cx - topX, yTop, cz + topZ);
			const t2 = addVertex(cx - topX, yTop, cz - topZ);
			const t3 = addVertex(cx + topX, yTop, cz - topZ);

			const b0 = addVertex(cx + botX, yBot, cz + botZ);
			const b1 = addVertex(cx - botX, yBot, cz + botZ);
			const b2 = addVertex(cx - botX, yBot, cz - botZ);
			const b3 = addVertex(cx + botX, yBot, cz - botZ);

			fs.push([t0, t1, t2, t3]); // top
			fs.push([b0, b1, b2, b3]); // bottom
			fs.push([t0, b0, b1, t1]);
			fs.push([t1, b1, b2, t2]);
			fs.push([t2, b2, b3, t3]);
			fs.push([t3, b3, b0, t0]);
		}

		// tête
		addBox(0.00, 0.72, 0.00, 0.22, 0.20, 0.18);

		// cheveux / cap arrière
		addBox(0.00, 0.78, -0.05, 0.24, 0.16, 0.22);

		// frange
		addBox(0.00, 0.71, 0.17, 0.16, 0.10, 0.03);

		// mèches latérales
		addBox( 0.24, 0.60, 0.08, 0.05, 0.18, 0.05);
		addBox(-0.24, 0.60, 0.08, 0.05, 0.18, 0.05);

		// ahoge
		addBox(0.03, 1.00, 0.00, 0.015, 0.09, 0.015);

		// casque / oreilles
		addBox( 0.24, 0.78, 0.00, 0.02, 0.05, 0.03);
		addBox(-0.24, 0.78, 0.00, 0.02, 0.05, 0.03);

		// micro
		addBox(-0.10, 0.71, 0.19, 0.12, 0.01, 0.01);
		addBox(-0.23, 0.69, 0.19, 0.02, 0.02, 0.02);

		// attaches des couettes
		addBox( 0.31, 0.73, 0.00, 0.04, 0.05, 0.05);
		addBox(-0.31, 0.73, 0.00, 0.04, 0.05, 0.05);

		// couettes droites
		addBox( 0.44,  0.54, -0.02, 0.07, 0.18, 0.08);
		addBox( 0.52,  0.22, -0.04, 0.08, 0.22, 0.09);
		addBox( 0.58, -0.14, -0.06, 0.09, 0.26, 0.10);
		addBox( 0.62, -0.54, -0.08, 0.06, 0.18, 0.07);

		// couettes gauches
		addBox(-0.44,  0.54, -0.02, 0.07, 0.18, 0.08);
		addBox(-0.52,  0.22, -0.04, 0.08, 0.22, 0.09);
		addBox(-0.58, -0.14, -0.06, 0.09, 0.26, 0.10);
		addBox(-0.62, -0.54, -0.08, 0.06, 0.18, 0.07);

		// cou
		addBox(0.00, 0.48, 0.00, 0.06, 0.05, 0.05);

		// torse
		addBox(0.00, 0.28, 0.00, 0.18, 0.17, 0.10);

		// taille
		addBox(0.00, 0.08, 0.00, 0.15, 0.08, 0.09);

		// jupe
		addFrustumY(0.00, 0.02, -0.20, 0.00, 0.17, 0.10, 0.32, 0.17);

		// cravate
		addBox(0.00, 0.36, 0.11, 0.05, 0.04, 0.02);
		addBox(0.00, 0.22, 0.11, 0.03, 0.12, 0.02);

		// manches détachées
		addBox( 0.28, 0.29, 0.00, 0.08, 0.11, 0.08);
		addBox(-0.28, 0.29, 0.00, 0.08, 0.11, 0.08);

		// avant-bras
		addBox( 0.34, 0.02, 0.00, 0.05, 0.16, 0.05);
		addBox(-0.34, 0.02, 0.00, 0.05, 0.16, 0.05);

		// mains
		addBox( 0.34, -0.18, 0.00, 0.04, 0.05, 0.04);
		addBox(-0.34, -0.18, 0.00, 0.04, 0.05, 0.04);

		// jambes
		addBox( 0.09, -0.50, 0.00, 0.07, 0.22, 0.07);
		addBox(-0.09, -0.50, 0.00, 0.07, 0.22, 0.07);

		// bottes
		addBox( 0.09, -0.82, 0.03, 0.09, 0.12, 0.11);
		addBox(-0.09, -0.82, 0.03, 0.09, 0.12, 0.11);

		// pieds
		addBox( 0.09, -0.95, 0.10, 0.12, 0.03, 0.17);
		addBox(-0.09, -0.95, 0.10, 0.12, 0.03, 0.17);

		return { vs, fs };
	})(),

	flash_mcqueen: (() => {
		const vs = [];
		const fs = [];
		const S = 0.75;

		function addVertex(x, y, z) {
			vs.push({ x: x * S, y: y * S, z: z * S });
			return vs.length - 1;
		}

		function addBox(cx, cy, cz, hx, hy, hz) {
			const v0 = addVertex(cx + hx, cy + hy, cz + hz);
			const v1 = addVertex(cx - hx, cy + hy, cz + hz);
			const v2 = addVertex(cx - hx, cy - hy, cz + hz);
			const v3 = addVertex(cx + hx, cy - hy, cz + hz);

			const v4 = addVertex(cx + hx, cy + hy, cz - hz);
			const v5 = addVertex(cx - hx, cy + hy, cz - hz);
			const v6 = addVertex(cx - hx, cy - hy, cz - hz);
			const v7 = addVertex(cx + hx, cy - hy, cz - hz);

			fs.push([v0, v1, v2, v3]);
			fs.push([v4, v5, v6, v7]);
			fs.push([v0, v4, v7, v3]);
			fs.push([v1, v5, v6, v2]);
			fs.push([v0, v1, v5, v4]);
			fs.push([v3, v2, v6, v7]);
		}

		function addFrustumZ(cx, cy, zFront, zBack, frontX, frontY, backX, backY) {
			const f0 = addVertex(cx + frontX, cy + frontY, zFront);
			const f1 = addVertex(cx - frontX, cy + frontY, zFront);
			const f2 = addVertex(cx - frontX, cy - frontY, zFront);
			const f3 = addVertex(cx + frontX, cy - frontY, zFront);

			const b0 = addVertex(cx + backX, cy + backY, zBack);
			const b1 = addVertex(cx - backX, cy + backY, zBack);
			const b2 = addVertex(cx - backX, cy - backY, zBack);
			const b3 = addVertex(cx + backX, cy - backY, zBack);

			fs.push([f0, f1, f2, f3]);
			fs.push([b0, b1, b2, b3]);
			fs.push([f0, b0, b1, f1]);
			fs.push([f1, b1, b2, f2]);
			fs.push([f2, b2, b3, f3]);
			fs.push([f3, b3, b0, f0]);
		}

		// corps principal
		addBox(0.00, -0.08, 0.00, 0.52, 0.11, 0.95);

		// capot avant plus fin
		addFrustumZ(0.00, -0.03, 1.18, 0.62, 0.40, 0.05, 0.48, 0.10);

		// nez / pare-choc avant
		addFrustumZ(0.00, -0.07, 1.34, 1.16, 0.30, 0.04, 0.40, 0.06);

		// bouche sourire
		addBox(0.00, -0.11, 1.31, 0.18, 0.015, 0.02);

		// lèvres / contour du sourire
		addBox(0.00, -0.085, 1.305, 0.22, 0.01, 0.012);

		// cabine
		addBox(0.00, 0.13, -0.05, 0.30, 0.13, 0.30);

		// toit
		addBox(0.00, 0.27, -0.10, 0.18, 0.05, 0.18);

		// pare-brise
		addFrustumZ(0.00, 0.14, 0.32, 0.55, 0.22, 0.10, 0.18, 0.04);

		// lunette arrière
		addFrustumZ(0.00, 0.14, -0.45, -0.20, 0.22, 0.10, 0.18, 0.04);

		// arrière du véhicule
		addFrustumZ(0.00, -0.01, -1.18, -0.58, 0.38, 0.08, 0.50, 0.10);

		// spoiler
		addBox(0.00, 0.18, -1.02, 0.30, 0.02, 0.05);
		addBox(0.20, 0.10, -0.96, 0.02, 0.08, 0.02);
		addBox(-0.20, 0.10, -0.96, 0.02, 0.08, 0.02);

		// ailes avant
		addBox( 0.48, -0.07,  0.58, 0.10, 0.08, 0.18);
		addBox(-0.48, -0.07,  0.58, 0.10, 0.08, 0.18);

		// ailes arrière
		addBox( 0.49, -0.07, -0.56, 0.11, 0.08, 0.22);
		addBox(-0.49, -0.07, -0.56, 0.11, 0.08, 0.22);

		// roues
		addBox( 0.52, -0.23,  0.55, 0.09, 0.14, 0.14);
		addBox(-0.52, -0.23,  0.55, 0.09, 0.14, 0.14);
		addBox( 0.52, -0.23, -0.55, 0.09, 0.14, 0.14);
		addBox(-0.52, -0.23, -0.55, 0.09, 0.14, 0.14);

		// jantes simplifiées
		addBox( 0.59, -0.23,  0.55, 0.02, 0.08, 0.08);
		addBox(-0.59, -0.23,  0.55, 0.02, 0.08, 0.08);
		addBox( 0.59, -0.23, -0.55, 0.02, 0.08, 0.08);
		addBox(-0.59, -0.23, -0.55, 0.02, 0.08, 0.08);

		// yeux sur le pare-brise
		addBox( 0.10, 0.17, 0.37, 0.08, 0.045, 0.01);
		addBox(-0.10, 0.17, 0.37, 0.08, 0.045, 0.01);

		// pupilles
		addBox( 0.10, 0.16, 0.382, 0.025, 0.025, 0.008);
		addBox(-0.10, 0.16, 0.382, 0.025, 0.025, 0.008);

		// phares
		addBox( 0.23, -0.02, 1.29, 0.08, 0.03, 0.012);
		addBox(-0.23, -0.02, 1.29, 0.08, 0.03, 0.012);

		// joues / côté cartoon
		addBox( 0.33, -0.06, 1.18, 0.05, 0.04, 0.05);
		addBox(-0.33, -0.06, 1.18, 0.05, 0.04, 0.05);

		// bas de caisse
		addBox( 0.33, -0.17, 0.00, 0.05, 0.03, 0.80);
		addBox(-0.33, -0.17, 0.00, 0.05, 0.03, 0.80);

		return { vs, fs };
	})(),

	storm_bama: (() => {
		const vs = [];
		const fs = [];
		const S = 0.72;

		function addVertex(x, y, z) {
			vs.push({ x: x * S, y: y * S, z: z * S });
			return vs.length - 1;
		}

		function addBox(cx, cy, cz, hx, hy, hz) {
			const v0 = addVertex(cx + hx, cy + hy, cz + hz);
			const v1 = addVertex(cx - hx, cy + hy, cz + hz);
			const v2 = addVertex(cx - hx, cy - hy, cz + hz);
			const v3 = addVertex(cx + hx, cy - hy, cz + hz);

			const v4 = addVertex(cx + hx, cy + hy, cz - hz);
			const v5 = addVertex(cx - hx, cy + hy, cz - hz);
			const v6 = addVertex(cx - hx, cy - hy, cz - hz);
			const v7 = addVertex(cx + hx, cy - hy, cz - hz);

			fs.push([v0, v1, v2, v3]); // front
			fs.push([v4, v5, v6, v7]); // back
			fs.push([v0, v4, v7, v3]); // right
			fs.push([v1, v5, v6, v2]); // left
			fs.push([v0, v1, v5, v4]); // top
			fs.push([v3, v2, v6, v7]); // bottom
		}

		function addFrustumY(cx, yTop, yBot, cz, topX, topZ, botX, botZ) {
			const t0 = addVertex(cx + topX, yTop, cz + topZ);
			const t1 = addVertex(cx - topX, yTop, cz + topZ);
			const t2 = addVertex(cx - topX, yTop, cz - topZ);
			const t3 = addVertex(cx + topX, yTop, cz - topZ);

			const b0 = addVertex(cx + botX, yBot, cz + botZ);
			const b1 = addVertex(cx - botX, yBot, cz + botZ);
			const b2 = addVertex(cx - botX, yBot, cz - botZ);
			const b3 = addVertex(cx + botX, yBot, cz - botZ);

			fs.push([t0, t1, t2, t3]); // top
			fs.push([b0, b1, b2, b3]); // bottom
			fs.push([t0, b0, b1, t1]);
			fs.push([t1, b1, b2, t2]);
			fs.push([t2, b2, b3, t3]);
			fs.push([t3, b3, b0, t0]);
		}

		// tête
		addFrustumY(0.00, 0.98, 0.62, 0.00, 0.17, 0.12, 0.20, 0.14);

		// arrière du crâne / cheveux courts
		addBox(0.00, 1.01, -0.015, 0.16, 0.06, 0.12);

		// front / ligne de cheveux
		addBox(0.00, 1.03, 0.09, 0.11, 0.025, 0.015);

		// oreilles
		addBox( 0.19, 0.84, 0.00, 0.02, 0.055, 0.03);
		addBox(-0.19, 0.84, 0.00, 0.02, 0.055, 0.03);

		// nez
		addBox(0.00, 0.82, 0.15, 0.025, 0.05, 0.02);

		// bouche
		addBox(0.00, 0.72, 0.14, 0.06, 0.01, 0.01);

		// cou
		addBox(0.00, 0.53, 0.00, 0.05, 0.06, 0.05);

		// col de chemise
		addBox( 0.05, 0.47, 0.09, 0.04, 0.03, 0.02);
		addBox(-0.05, 0.47, 0.09, 0.04, 0.03, 0.02);

		// torse costume
		addFrustumY(0.00, 0.47, 0.02, 0.00, 0.20, 0.10, 0.24, 0.12);

		// taille
		addFrustumY(0.00, 0.02, -0.26, 0.00, 0.18, 0.10, 0.15, 0.09);

		// veste droite/gauche pour donner le V
		addBox( 0.11, 0.22, 0.02, 0.09, 0.20, 0.08);
		addBox(-0.11, 0.22, 0.02, 0.09, 0.20, 0.08);

		// revers de veste
		addBox( 0.05, 0.28, 0.10, 0.035, 0.12, 0.015);
		addBox(-0.05, 0.28, 0.10, 0.035, 0.12, 0.015);

		// cravate
		addBox(0.00, 0.40, 0.105, 0.035, 0.04, 0.015);
		addBox(0.00, 0.19, 0.105, 0.025, 0.16, 0.015);

		// bras
		addBox( 0.29, 0.21, 0.00, 0.06, 0.20, 0.06);
		addBox(-0.29, 0.21, 0.00, 0.06, 0.20, 0.06);

		// avant-bras légèrement vers l'avant
		addBox( 0.29, -0.04, 0.03, 0.05, 0.16, 0.05);
		addBox(-0.29, -0.04, 0.03, 0.05, 0.16, 0.05);

		// mains
		addBox( 0.29, -0.24, 0.03, 0.04, 0.045, 0.035);
		addBox(-0.29, -0.24, 0.03, 0.04, 0.045, 0.035);

		// jambes costume
		addBox( 0.08, -0.56, 0.00, 0.06, 0.24, 0.06);
		addBox(-0.08, -0.56, 0.00, 0.06, 0.24, 0.06);

		// bas du pantalon
		addBox( 0.08, -0.84, 0.00, 0.055, 0.08, 0.055);
		addBox(-0.08, -0.84, 0.00, 0.055, 0.08, 0.055);

		// chaussures
		addBox( 0.08, -0.95, 0.06, 0.08, 0.03, 0.13);
		addBox(-0.08, -0.95, 0.06, 0.08, 0.03, 0.13);

		return { vs, fs };
	})(),

	dalai_lallema: (() => {
		const vs = [];
		const fs = [];
		const S = 0.82;

		function addVertex(x, y, z) {
			vs.push({ x: x * S, y: y * S, z: z * S });
			return vs.length - 1;
		}

		function addBox(cx, cy, cz, hx, hy, hz) {
			const v0 = addVertex(cx + hx, cy + hy, cz + hz);
			const v1 = addVertex(cx - hx, cy + hy, cz + hz);
			const v2 = addVertex(cx - hx, cy - hy, cz + hz);
			const v3 = addVertex(cx + hx, cy - hy, cz + hz);

			const v4 = addVertex(cx + hx, cy + hy, cz - hz);
			const v5 = addVertex(cx - hx, cy + hy, cz - hz);
			const v6 = addVertex(cx - hx, cy - hy, cz - hz);
			const v7 = addVertex(cx + hx, cy - hy, cz - hz);

			fs.push([v0, v1, v2, v3]); // front
			fs.push([v4, v5, v6, v7]); // back
			fs.push([v0, v4, v7, v3]); // right
			fs.push([v1, v5, v6, v2]); // left
			fs.push([v0, v1, v5, v4]); // top
			fs.push([v3, v2, v6, v7]); // bottom
		}

		function addFrustumY(cx, yTop, yBot, cz, topX, topZ, botX, botZ) {
			const t0 = addVertex(cx + topX, yTop, cz + topZ);
			const t1 = addVertex(cx - topX, yTop, cz + topZ);
			const t2 = addVertex(cx - topX, yTop, cz - topZ);
			const t3 = addVertex(cx + topX, yTop, cz - topZ);

			const b0 = addVertex(cx + botX, yBot, cz + botZ);
			const b1 = addVertex(cx - botX, yBot, cz + botZ);
			const b2 = addVertex(cx - botX, yBot, cz - botZ);
			const b3 = addVertex(cx + botX, yBot, cz - botZ);

			fs.push([t0, t1, t2, t3]); // top
			fs.push([b0, b1, b2, b3]); // bottom
			fs.push([t0, b0, b1, t1]);
			fs.push([t1, b1, b2, t2]);
			fs.push([t2, b2, b3, t3]);
			fs.push([t3, b3, b0, t0]);
		}

		// tête
		addFrustumY(0.00, 1.05, 0.63, 0.00, 0.16, 0.12, 0.20, 0.14);

		// cheveux arrière
		addBox(0.00, 1.00, -0.01, 0.17, 0.055, 0.13);

		// masse bouclée du dessus
		addBox( 0.00, 1.12,  0.00, 0.12, 0.05, 0.09);
		addBox( 0.11, 1.10,  0.00, 0.06, 0.045, 0.07);
		addBox(-0.11, 1.10,  0.00, 0.06, 0.045, 0.07);
		addBox( 0.05, 1.15,  0.07, 0.05, 0.035, 0.04);
		addBox(-0.05, 1.15,  0.07, 0.05, 0.035, 0.04);

		// frange / cheveux avant
		addBox( 0.00, 1.03, 0.09, 0.13, 0.03, 0.02);
		addBox( 0.10, 1.00, 0.10, 0.035, 0.04, 0.02);
		addBox(-0.10, 1.00, 0.10, 0.035, 0.04, 0.02);

		// côtés bouclés
		addBox( 0.18, 0.94, 0.01, 0.03, 0.08, 0.07);
		addBox(-0.18, 0.94, 0.01, 0.03, 0.08, 0.07);

		// oreilles
		addBox( 0.20, 0.84, 0.00, 0.02, 0.055, 0.03);
		addBox(-0.20, 0.84, 0.00, 0.02, 0.055, 0.03);

		// lunettes rondes stylisées
		addBox( 0.085, 0.84, 0.145, 0.075, 0.055, 0.012);
		addBox(-0.085, 0.84, 0.145, 0.075, 0.055, 0.012);
		addBox( 0.00,  0.84, 0.145, 0.028, 0.010, 0.010);

		// branches de lunettes
		addBox( 0.17, 0.85, 0.06, 0.03, 0.008, 0.008);
		addBox(-0.17, 0.85, 0.06, 0.03, 0.008, 0.008);

		// sourcils
		addBox( 0.08, 0.89, 0.13, 0.05, 0.010, 0.010);
		addBox(-0.08, 0.89, 0.13, 0.05, 0.010, 0.010);

		// nez
		addBox(0.00, 0.81, 0.155, 0.022, 0.050, 0.018);

		// moustache
		addBox( 0.045, 0.74, 0.148, 0.045, 0.015, 0.012);
		addBox(-0.045, 0.74, 0.148, 0.045, 0.015, 0.012);

		// bouche
		addBox(0.00, 0.71, 0.142, 0.05, 0.008, 0.010);

		// bouc / barbe
		addBox(0.00, 0.66, 0.130, 0.030, 0.025, 0.015);
		addBox(0.00, 0.60, 0.115, 0.060, 0.050, 0.022);
		addBox( 0.06, 0.66, 0.120, 0.020, 0.030, 0.015);
		addBox(-0.06, 0.66, 0.120, 0.020, 0.030, 0.015);

		// cou
		addBox(0.00, 0.51, 0.00, 0.05, 0.06, 0.05);

		// base des épaules
		addFrustumY(0.00, 0.46, 0.12, 0.00, 0.28, 0.16, 0.34, 0.20);

		// couche interne près du col
		addBox(-0.03, 0.33, 0.12, 0.07, 0.10, 0.02);
		addBox( 0.05, 0.31, 0.11, 0.18, 0.05, 0.03);

		// tissu jaune interne
		addBox(-0.07, 0.30, 0.105, 0.04, 0.08, 0.015);
		addBox(-0.02, 0.29, 0.110, 0.018, 0.07, 0.012);

		// grande robe côté droit du perso / gauche écran
		addBox( 0.20, 0.15, 0.05, 0.28, 0.28, 0.20);
		addBox( 0.26, -0.18, 0.08, 0.25, 0.22, 0.20);

		// grand pan de robe côté gauche du perso / droite écran
		addBox(-0.12, 0.08, 0.02, 0.23, 0.30, 0.18);
		addBox(-0.18, -0.24, 0.05, 0.23, 0.22, 0.18);

		// retombée générale du bas
		addFrustumY(0.02, 0.04, -0.68, 0.02, 0.38, 0.23, 0.50, 0.32);

		// plis du devant
		addBox( 0.02, 0.18, 0.16, 0.24, 0.03, 0.03);
		addBox(-0.03, -0.02, 0.17, 0.20, 0.04, 0.03);
		addBox( 0.08, -0.20, 0.16, 0.24, 0.05, 0.04);

		// épaisseur supplémentaire de la robe sur l’épaule droite
		addBox(0.20, 0.37, 0.03, 0.19, 0.07, 0.12);

		// bras nu visible sur le côté gauche de l’image
		addBox(-0.42, -0.10, -0.02, 0.05, 0.28, 0.05);

		// avant-bras / poignet qui sort du tissu
		addBox(0.06, -0.01, 0.15, 0.07, 0.12, 0.06);

		// main
		addBox(0.01, -0.05, 0.22, 0.10, 0.07, 0.05);

		// pouce
		addBox(0.09, 0.01, 0.235, 0.020, 0.070, 0.020);

		// index / pincement
		addBox(-0.015, 0.05, 0.235, 0.018, 0.060, 0.018);
		addBox( 0.020, 0.055, 0.245, 0.018, 0.055, 0.018);

		// autres doigts groupés
		addBox(0.01, -0.095, 0.25, 0.080, 0.016, 0.020);

		// petit morceau de robe pincé par la main
		addBox(0.00, 0.12, 0.18, 0.030, 0.090, 0.020);

		// bracelets
		addBox(0.08, -0.11, 0.15, 0.065, 0.010, 0.065);
		addBox(0.08, -0.135, 0.15, 0.070, 0.010, 0.070);
		addBox(0.08, -0.160, 0.15, 0.075, 0.010, 0.075);

		return { vs, fs };
	})(),

	eiffel_tower: (() => {
		const vs = [];
		const fs = [];
		const S = 0.42;

		function p(x, y, z) {
			return { x, y, z };
		}

		function lerp(a, b, t) {
			return {
				x: a.x + (b.x - a.x) * t,
				y: a.y + (b.y - a.y) * t,
				z: a.z + (b.z - a.z) * t,
			};
		}

		function addVertex(x, y, z) {
			vs.push({ x: x * S, y: y * S, z: z * S });
			return vs.length - 1;
		}

		function addPoint(pt) {
			return addVertex(pt.x, pt.y, pt.z);
		}

		function edge(a, b) {
			fs.push([a, b]);
		}

		function loop(ids) {
			for (let i = 0; i < ids.length; i++) {
				edge(ids[i], ids[(i + 1) % ids.length]);
			}
		}

		function addPolyline(points) {
			const ids = points.map(addPoint);
			for (let i = 0; i < ids.length - 1; i++) {
				edge(ids[i], ids[i + 1]);
			}
			return ids;
		}

		function ring(e, y) {
			return {
				fl: p(-e, y,  e),
				fr: p( e, y,  e),
				br: p( e, y, -e),
				bl: p(-e, y, -e),
			};
		}

		function addRing(r) {
			const ids = {
				fl: addPoint(r.fl),
				fr: addPoint(r.fr),
				br: addPoint(r.br),
				bl: addPoint(r.bl),
			};
			loop([ids.fl, ids.fr, ids.br, ids.bl]);
			return ids;
		}

		function connectRings(a, b) {
			edge(a.fl, b.fl);
			edge(a.fr, b.fr);
			edge(a.br, b.br);
			edge(a.bl, b.bl);
		}

		function addFaceGrid(A, B, C, D, rows, cols) {
			const grid = [];

			for (let r = 0; r <= rows; r++) {
				const t = r / rows;
				const left = lerp(A, D, t);
				const right = lerp(B, C, t);
				const row = [];

				for (let c = 0; c <= cols; c++) {
					const u = c / cols;
					row.push(addPoint(lerp(left, right, u)));
				}
				grid.push(row);
			}

			for (let r = 0; r <= rows; r++) {
				for (let c = 0; c < cols; c++) {
					edge(grid[r][c], grid[r][c + 1]);
				}
			}

			for (let r = 0; r < rows; r++) {
				for (let c = 0; c <= cols; c++) {
					edge(grid[r][c], grid[r + 1][c]);
				}
			}

			for (let r = 0; r < rows; r++) {
				for (let c = 0; c < cols; c++) {
					edge(grid[r][c], grid[r + 1][c + 1]);
					edge(grid[r][c + 1], grid[r + 1][c]);
				}
			}
		}

		function addArchX(z, x0, x1, yBase, rise, seg) {
			const pts = [];
			for (let i = 0; i <= seg; i++) {
				const t = i / seg;
				const x = x0 + (x1 - x0) * t;
				const y = yBase + rise * 4 * t * (1 - t);
				pts.push(p(x, y, z));
			}
			addPolyline(pts);
		}

		function addArchZ(x, z0, z1, yBase, rise, seg) {
			const pts = [];
			for (let i = 0; i <= seg; i++) {
				const t = i / seg;
				const z = z0 + (z1 - z0) * t;
				const y = yBase + rise * 4 * t * (1 - t);
				pts.push(p(x, y, z));
			}
			addPolyline(pts);
		}

		function addPlatform(y, outer, inner) {
			const ro = ring(outer, y);
			const ri = ring(inner, y);

			const o = {
				fl: addPoint(ro.fl),
				fr: addPoint(ro.fr),
				br: addPoint(ro.br),
				bl: addPoint(ro.bl),
			};
			const i = {
				fl: addPoint(ri.fl),
				fr: addPoint(ri.fr),
				br: addPoint(ri.br),
				bl: addPoint(ri.bl),
			};

			loop([o.fl, o.fr, o.br, o.bl]);
			loop([i.fl, i.fr, i.br, i.bl]);

			edge(o.fl, i.fl);
			edge(o.fr, i.fr);
			edge(o.br, i.br);
			edge(o.bl, i.bl);

			return { o, i };
		}

		const levels = [
			{ y: 0.00, e: 1.05, rows: 5, cols: 4 },
			{ y: 0.52, e: 0.88, rows: 5, cols: 4 },
			{ y: 1.05, e: 0.72, rows: 4, cols: 4 },
			{ y: 1.55, e: 0.55, rows: 4, cols: 3 },
			{ y: 2.05, e: 0.40, rows: 3, cols: 3 },
			{ y: 2.55, e: 0.28, rows: 3, cols: 3 },
			{ y: 3.02, e: 0.18, rows: 2, cols: 2 },
		];

		const rings = levels.map((lvl) => ({
			coords: ring(lvl.e, lvl.y),
			ids: addRing(ring(lvl.e, lvl.y)),
		}));

		for (let i = 0; i < rings.length - 1; i++) {
			const a = rings[i];
			const b = rings[i + 1];
			connectRings(a.ids, b.ids);

			addFaceGrid(a.coords.fl, a.coords.fr, b.coords.fr, b.coords.fl, levels[i].rows, levels[i].cols);
			addFaceGrid(a.coords.fr, a.coords.br, b.coords.br, b.coords.fr, levels[i].rows, levels[i].cols);
			addFaceGrid(a.coords.br, a.coords.bl, b.coords.bl, b.coords.br, levels[i].rows, levels[i].cols);
			addFaceGrid(a.coords.bl, a.coords.fl, b.coords.fl, b.coords.bl, levels[i].rows, levels[i].cols);
		}

		// grandes arches du bas
		addArchX( 0.90, -0.82,  0.82, 0.05, 0.28, 14);
		addArchX(-0.90, -0.82,  0.82, 0.05, 0.28, 14);
		addArchZ( 0.90, -0.82,  0.82, 0.05, 0.28, 14);
		addArchZ(-0.90, -0.82,  0.82, 0.05, 0.28, 14);

		// contreventements internes au pied
		addPolyline([p(-0.95, 0.08,  0.95), p(-0.72, 0.35,  0.72), p(-0.52, 0.68,  0.52)]);
		addPolyline([p( 0.95, 0.08,  0.95), p( 0.72, 0.35,  0.72), p( 0.52, 0.68,  0.52)]);
		addPolyline([p(-0.95, 0.08, -0.95), p(-0.72, 0.35, -0.72), p(-0.52, 0.68, -0.52)]);
		addPolyline([p( 0.95, 0.08, -0.95), p( 0.72, 0.35, -0.72), p( 0.52, 0.68, -0.52)]);

		// 1er étage
		addPlatform(1.18, 0.78, 0.62);
		addPlatform(1.26, 0.70, 0.56);

		// poutres du 1er étage
		for (let i = 0; i <= 8; i++) {
			const t = i / 8;
			const x = -0.62 + 1.24 * t;
			addPolyline([p(x, 1.18,  0.62), p(x, 1.18, -0.62)]);
			addPolyline([p(0.62, 1.18, x), p(-0.62, 1.18, x)]);
		}

		// 2e étage
		addPlatform(2.18, 0.46, 0.34);
		addPlatform(2.25, 0.38, 0.28);

		for (let i = 0; i <= 6; i++) {
			const t = i / 6;
			const x = -0.34 + 0.68 * t;
			addPolyline([p(x, 2.18,  0.34), p(x, 2.18, -0.34)]);
			addPolyline([p(0.34, 2.18, x), p(-0.34, 2.18, x)]);
		}

		// étage supérieur
		addPlatform(2.82, 0.22, 0.15);

		// pylône central
		const mast = [
			ring(0.16, 2.82),
			ring(0.11, 3.15),
			ring(0.07, 3.45),
			ring(0.04, 3.72),
		];

		const mastIds = mast.map(addRing);

		for (let i = 0; i < mast.length - 1; i++) {
			connectRings(mastIds[i], mastIds[i + 1]);
			addFaceGrid(mast[i].fl, mast[i].fr, mast[i + 1].fr, mast[i + 1].fl, 2, 2);
			addFaceGrid(mast[i].fr, mast[i].br, mast[i + 1].br, mast[i + 1].fr, 2, 2);
			addFaceGrid(mast[i].br, mast[i].bl, mast[i + 1].bl, mast[i + 1].br, 2, 2);
			addFaceGrid(mast[i].bl, mast[i].fl, mast[i + 1].fl, mast[i + 1].bl, 2, 2);
		}

		// plateforme sommitale
		addPlatform(3.78, 0.07, 0.04);

		// sommet + antenne
		const apex = addPoint(p(0, 4.10, 0));
		const topRing = ring(0.04, 3.72);
		const topIds = {
			fl: addPoint(topRing.fl),
			fr: addPoint(topRing.fr),
			br: addPoint(topRing.br),
			bl: addPoint(topRing.bl),
		};

		edge(topIds.fl, apex);
		edge(topIds.fr, apex);
		edge(topIds.br, apex);
		edge(topIds.bl, apex);

		const antennaTop = addPoint(p(0, 4.52, 0));
		edge(apex, antennaTop);

		const cross1a = addPoint(p(-0.06, 4.28, 0));
		const cross1b = addPoint(p( 0.06, 4.28, 0));
		const cross2a = addPoint(p(0, 4.28, -0.06));
		const cross2b = addPoint(p(0, 4.28,  0.06));
		edge(cross1a, cross1b);
		edge(cross2a, cross2b);

		const cross3a = addPoint(p(-0.04, 4.42, 0));
		const cross3b = addPoint(p( 0.04, 4.42, 0));
		const cross4a = addPoint(p(0, 4.42, -0.04));
		const cross4b = addPoint(p(0, 4.42,  0.04));
		edge(cross3a, cross3b);
		edge(cross4a, cross4b);

		// diagonales de silhouette en plus
		addPolyline([p(-0.82, 1.02,  0.82), p(-0.56, 1.18,  0.56)]);
		addPolyline([p( 0.82, 1.02,  0.82), p( 0.56, 1.18,  0.56)]);
		addPolyline([p(-0.82, 1.02, -0.82), p(-0.56, 1.18, -0.56)]);
		addPolyline([p( 0.82, 1.02, -0.82), p( 0.56, 1.18, -0.56)]);

		return { vs, fs };
	})(),
}

const BACKGROUND =  "#101010";
const FOREGROUND = "#50FF50";


document.body.style.margin = "0";
document.body.style.padding = "0";

game.width = window.innerWidth;
game.height = window.innerHeight;


const ctx = game.getContext("2d")

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
	const scale = Math.min(game.width, game.height) / 2;

	return {
		x: game.width / 2 + p.x * scale,
		y: game.height / 2 - p.y * scale,
	};
}

function project({x, y, z}) {
	return {
		x: x / z,
		y: y / z,
	}
}


function translate({x, y, z}, dx, dy, dz) {
	return {x: x + dx, y: y + dy, z: z + dz}
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
	z: 0,
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
    const pa = postion_by_camera(a, camera);
    const pb = postion_by_camera(b, camera);
    if (pa.z <= 0 || pb.z <= 0) return; // ← skip if behind camera
    line(screen(project(pa)), screen(project(pb)));
}

function frame() {
	const dt = 1 / FPS;
	angle += 2 * Math.PI * dt / 10;

	clear()


	for (const {shape, x, y, z} of objects) {

		let fs = shape.fs
		let vs = shape.vs

		for (const f of fs) {
			for (let i = 0; i < f.length; ++i) {
				const a = vs[f[i]];
				const b = vs[f[(i + 1) % f.length]];
				// draw_line_3d(translate(rotate_yz(rotate_xz(a, angle), angle), x, y, z), translate(rotate_yz(rotate_xz(b, angle), angle), x, y, z))
				// draw_line_3d(translate(rotate_xz(a, angle), x, y, z), translate(rotate_xz(b, angle), x, y, z))
				draw_line_3d(translate(a, x, y, z), translate(b, x, y, z))
			}
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

let objects = [
	{shape: shapes.storm_bama, x: 0, y: 0, z: 2},
]
setTimeout(frame, 1000/FPS);
