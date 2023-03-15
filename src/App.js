import React, { useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [contacts, setContacts] = useState([]);

	console.log(contacts);

	function addContact(newContact) {
		setContacts([...contacts, newContact]);
	}

	return <MainRoutes contacts={contacts} addContact={addContact} />;
}

export default App;
