import { LoadingOverlay } from "@mantine/core";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));

const MainRoute = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<React.Suspense
						fallback={
							<LoadingOverlay
								visible
								overlayProps={{ radius: "sm", blur: 2 }}
								loaderProps={{ type: "dots" }}
							/>
						}
					>
						<Home />
					</React.Suspense>
				}
			/>
			<Route
				path="*"
				element={
					<React.Suspense
						fallback={
							<LoadingOverlay
								visible
								overlayProps={{ radius: "sm", blur: 2 }}
								loaderProps={{ type: "dots" }}
							/>
						}
					>
						<Home />
					</React.Suspense>
				}
			/>
		</Routes>
	);
};

export default MainRoute;
