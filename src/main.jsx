import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Works from "./routes/Works.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About.jsx";
import Shop from "./routes/Shop.jsx";
import Homepage from "./routes/Homepage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Homepage />,
			},
			{
				path: "/works",
				element: <Works />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
