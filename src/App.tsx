import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { Information } from "./components/childComponents/childComponents2/Information";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/:id' element={<Information />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
