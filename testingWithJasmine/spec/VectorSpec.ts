/// <reference path="../typings/jasmine/jasmine.d.ts" />

import {Vector} from "../Vector";

describe("A Vector object", () => {
	it("should set the correct values for its coordinates upon initialisation", () => {
		var v = new Vector(1, 2, 3);
		
		expect(v.x).toBe(1);
		expect(v.y).toBe(2);
		expect(v.z).toBe(3);
	});
	
	it("should scale a vector v correctly by a coefficient k", () => {
		var k = 5;
		var v = new Vector(1, -2, 3);
		
		var actual = Vector.scale(v, k);
		
		expect(actual.x).toBe(5);
		expect(actual.y).toBe(-10);
		expect(actual.z).toBe(15);
	});
	
	it("should calculate the cross product of two vectors v1 and v2", () => {
		var v1 = new Vector(1, 2, 3);
		var v2 = new Vector(-3, -2, -1);
		
		var actual = Vector.cross(v1, v2);
		
		expect(actual.x).toBe(4);
		expect(actual.y).toBe(-8);
		expect(actual.z).toBe(4);
	});
});