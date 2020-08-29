export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// Optional object paramter allows passing props to modal component
export const openModal = (modal, object) => {

	return {
		type: OPEN_MODAL,
		modal,
		object
	}
}

export const closeModal = () => ({
	type: CLOSE_MODAL,
});