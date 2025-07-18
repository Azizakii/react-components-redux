import ReactDOM from "react-dom/client";
import React from 'react'
import App from "./App.js";
import "./index.css";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.js";

const root = document.getElementById("root");

const store = setupStore();

ReactDOM.createRoot(root!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
