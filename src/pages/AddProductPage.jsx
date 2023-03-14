import React, { useState } from "react";

function AddProductPage() {
	const [contact, setContact] = useState({
		name: "",
		surname: "",
		phoneNumber: "",
	});

	function handleChange(e) {
		const obj = {
			...contact,
			[e.target.name]: e.target.value,
		};
		setContact(obj);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(contact);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={(e) => handleChange(e)}
				value={contact.name}
				type="text"
				name="name"
			/>
			<input
				onChange={(e) => handleChange(e)}
				value={contact.surname}
				type="text"
				name="surname"
			/>

			<input
				onChange={(e) => handleChange(e)}
				value={contact.phoneNumber}
				type="text"
				name="phoneNumber"
			/>
			<button>submit</button>
		</form>
	);
}

export default AddProductPage;
