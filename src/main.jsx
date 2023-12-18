import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import cx from "clsx";
import { BrowserRouter } from "react-router-dom";
import { Container, MantineProvider, TextInput, createTheme } from "@mantine/core";
import "./index.css";
import "@mantine/core/styles.css";
import classes from "./Index.module.css";

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
			"#7c541d",
		],
	},
	components: {
		Container: Container.extend({
			classNames: (_, { size }) => ({
				root: cx({ [classes.responsiveContainer]: size === "responsive" }),
			}),
		}),
		TextInput: TextInput.extend({
			vars: (theme, props) => {
				if (props.hiddenFrom === "xxxl") {
					return {
						root: {
							"display":"none",
						},
					};
				}
			},
		}),
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
