import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExchangePage from 'src/modules/exchangePage';
import LandingPage from 'src/modules/landingPage';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/exchange" element={<ExchangePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter