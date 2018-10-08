/**
 * Example stack implementation using interface and Array class.
 */

/**
 * Interface defining stack functionality.
 */
export interface StackInterface<T> {

	// Interface methods
	push(t: T): void;
	pop(): T;
	peek(): T;
	size(): number;
	isEmpty(): boolean;
}

/**
 * Generic class using Array as collection.
 */
export class ArrayStack<T> implements StackInterface<T> {

	private stack: Array<T>;

	constructor(){
		this.stack = new Array<T>();
	}

	push(t: T): void {
		this.stack.push(t);
	}	
	
	pop(): T {
		if(this.stack.length > 0) {
			return this.stack.pop();		
		} else {
			throw new Error('cannot pop: stack contains no elements!');
		}
	}
	
	peek(): T {
		return this.stack[this.stack.length - 1];
	}
	
	size(): number {
		return this.stack.length;
	}
	
	isEmpty(): boolean {
		return this.stack.length === 0;
	}

}

