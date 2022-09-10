import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExchangePage from 'src/modules/exchangePage';
import ExchangeTransactionPage from 'src/modules/exchangePage/[id]';
import LandingPage from 'src/modules/landingPage';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/exchange" element={<ExchangePage />} />
				<Route path="/exchange/:id" element ={<ExchangeTransactionPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter