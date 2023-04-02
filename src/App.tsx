import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Home from './pages/home'
import PodcastPage from './pages/podcast'
import Episode from './pages/episode'

const App = () => {
	const [loading, setLoading] = useState<boolean>(false)

	const onChangeLoading = (status: boolean) => {
		setLoading(status)
	}

	return (
		<BrowserRouter>
			<div className="ui container">
				<Header loading={loading} />
				<Routes>
					<Route path="/" element={<Home loading={loading} updateLoading={onChangeLoading} />} />
					<Route
						path="/podcast/:podcastId"
						element={<PodcastPage loading={loading} updateLoading={onChangeLoading} />}
					/>
					<Route path="/podcast/:id/episode/:id" element={<Episode />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
