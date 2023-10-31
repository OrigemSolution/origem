import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
	primaryColor: "Neon-Carrot",
	colors: {
		"Neon-Carrot": [
			"#fde5c4",
			"#fcdcb0",
			"#faca89",
			"#f9c175",
			"#f9b961",
			"#f8b04e",
			"#F7A73A",
			"#de9634",
			"#c6862e",
			"#ad7529",
			"#946423",
			"#7c541d"
		],
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineProvider theme={theme}>
				<App />
			</MantineProvider>
		</BrowserRouter>
	</React.StrictMode>
);
