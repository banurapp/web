import React from 'react'
import styled from 'styled-components'
import {
	GeistProvider,
	CssBaseline,
	Text,
	Page,
	Tabs,
	useTabs,
	Container,
	Spacer,
	Row,
	Col,
	Badge,
	Avatar
} from '@geist-ui/react'

const Xawef = styled(Col)<any>`
	margin-bottom: 1rem;
`

const App = () => (
	<GeistProvider theme={{ type: 'dark' }}>
		<CssBaseline />
	</GeistProvider>
)

export default App
