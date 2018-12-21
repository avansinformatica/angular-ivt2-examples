
export class Image {

	// Additional info about the image
	// Add more when neccesary
	info: {
		imagename: string;
		description: string;
		category: string;
	}
	// Base64 string representing the binary image
	data: string;

	// MongoDB properties, set when a saved image is returned by the server.
	_id: string;
	createdAt: string;
	updatedAt: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}