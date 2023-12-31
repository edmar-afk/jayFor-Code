import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Works from "./routes/Works.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import About from "./routes/About.jsx";
import Shop from "./routes/Shop.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <App />,
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
