export const setDeliveryLabel = (filter: number) => {
	switch (filter) {
		case 20:
			return "0-10 min";
		case 30:
			return "10-30 min";
		case 45:
			return "30-60 min";
		case 60:
			return "1 hour +";
		default:
			return "Unknown";
	}
};
