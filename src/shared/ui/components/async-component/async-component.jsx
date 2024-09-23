import { Suspense } from "react";
import { Await } from "react-router-dom";

export const AsyncComponent = ({ resolve, element, fallback, children }) => {
	return (
		<Suspense fallback={fallback}>
			<Await resolve={resolve}>
				{ element || children }
			</Await>
		</Suspense>
	)
};