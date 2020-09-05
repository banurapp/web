import { Route } from 'react-router-dom'
import React from 'react'
import { PrivateRoute } from './PrivateRoute'
import LandingPage from '../pages/Landing'

export const Routes: React.FC = () => (
	<>
		<Route exact path="/">
			<LandingPage />
		</Route>

		<PrivateRoute exact path="/explore" />
		<PrivateRoute exact path="" />
	</>
)

export * from './PrivateRoute'
