import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { useAuth } from '../modules/auth/react'

export interface PrivateRouteProps {
	fallback?: string
}

export const PrivateRoute: React.FC<RouteProps & PrivateRouteProps> = ({
	children,
	fallback,
	...props
}) => {
	const { isAuthenticated } = useAuth()
	return (
		<Route {...props}>
			{!isAuthenticated ? children : <Redirect to={fallback || '/dashboard'} />}
		</Route>
	)
}
