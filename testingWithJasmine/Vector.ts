
export class Vector {
	constructor(private _x: number, private _y: number, private _z: number) {
	}

	get x() {
		return this._x;
	}

	get y() {
		return this._y;
	}

	get z() {
		return this._z;
	}
	
	static scale(v: Vector, k: number): Vector {
		return new Vector(k * v.x, k * v.y, k * v.z);
	}
	
	static cross(v1: Vector, v2: Vector): Vector {
		var vx = v1.y * v2.z - v1.z * v2.y;
		var vy = v1.z * v2.x - v1.x * v2.z;
		var vz = v1.x * v2.y - v1.y * v2.x;
		return new Vector(vx, vy, vz);
	}
}
