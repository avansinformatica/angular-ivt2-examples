/**
 * Base class for all entities that are part of communication to/from services.
 */
export abstract class Entity {
	id: number;
	description: string;
	// _createdAt: Date;
	// _updatedAt: Date;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

/**
 * Interface defining functions for (de)serializing objects from/to JSON
 */
export interface Serializer<T extends Entity> {
	fromJson(json: any): T;
	toJson(resource: T): any;
}

/**
 * Generic serializer immplementation class.
 */
export class EntitySerializer<T extends Entity> implements Serializer<T> {

	fromJson(json: any): T {
		return JSON.parse(json);
	}

	toJson(resource: T): any {
		return JSON.stringify(resource);
	}

}
