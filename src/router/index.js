import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from 'src/modules/landingPage';

const AppRouter = () => {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter