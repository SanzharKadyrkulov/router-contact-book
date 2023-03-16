import React, { useState } from "react";

function AddProductPage({ addContact }) {
	const [contact, setContact] = useState({
		name: "",
		surname: "",
		phoneNumber: "",
		image: "",
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
		if (
			!contact.name.trim() ||
			!contact.surname.trim() ||
			!contact.phoneNumber.trim()
		) {
			alert("Fill the fields");
			return;
		}
		addContact({
			...contact,
			id: Date.now(),
		});
		setContact({
			name: "",
			surname: "",
			phoneNumber: "",
			image: "",
		});
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
			<input
				onChange={(e) => handleChange(e)}
				value={contact.image}
				type="text"
				name="image"
			/>
			<button>submit</button>
		</form>
	);
}

export default AddProductPage;
