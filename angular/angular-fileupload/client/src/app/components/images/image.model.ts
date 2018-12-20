
export class Image {

	// Additional info about the image
	// Add more when neccesary
	info: {
		imagename: string;
		description: string;
		category: string;
	}
	// Base64 string representing the binary image
	image: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}