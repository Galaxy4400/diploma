import { Header } from "../../widgets/header";
import { Footer } from "../../widgets/footer";


export const ErrorLayout = ({ children }) => {
	return (
		<div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh', padding: '20px' }}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};