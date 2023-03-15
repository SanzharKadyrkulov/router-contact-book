import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";

function MainRoutes({ addContact, contacts }) {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage contacts={contacts} />} />
				<Route
					path="/add"
					element={<AddProductPage addContact={addContact} />}
				/>
			</Route>
		</Routes>
	);
}

export default MainRoutes;
