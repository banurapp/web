import { useState, useEffect } from 'react'
import User from '../../models/ users/index'
import AuthLogic from './logic'

const useProvideAuth = () => {
	const [user, setUser] = useState<User | null>(null)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [authPending, setAuthPending] = useState(true)

	useEffect(() => {
		// Auth logic would go here
		// TODO: Make gql api (@muirrum)
		AuthLogic.authStateChanges((u) => {
			setUser(u)
			setIsAuthenticated(!!u)
			setAuthPending(false)
		})
	}, [setUser, setIsAuthenticated, setAuthPending])

	const signUp = (email: string, password: string) => {}

	return {
		user,
		isAuthenticated,
		authPending
	}
}
