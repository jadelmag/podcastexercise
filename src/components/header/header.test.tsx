import { RenderResult, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './header'

describe('Unit Test Header', () => {
	test('render component with title', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)
		const title = screen.getByText('Podcaster')
		expect(title).toBeInTheDocument()
	})

	test('render component with link', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)
		const link = screen.getByRole('link')
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('href', '/')
	})

	test('render component with loader', () => {
		const component = render(
			<BrowserRouter>
				<Header loading />
			</BrowserRouter>
		)
		const loader = component.container.querySelector('#loader')
		expect(loader).toBeInTheDocument()
	})
})
