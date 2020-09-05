import React, { useState, useEffect } from 'react'

import User from '../../models/ users/index'
import AuthLogic from './logic'

export const useProvideAuth = (): AuthHook => {
	const [user, setUser] = useState<User | null>(null)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [authPending, setAuthPending] = useState(true)

	useEffect(() => {
		AuthLogic.authStateChanges((u) => {
			setUser(u)
			setIsAuthenticated(!!u)
			setAuthPending(false)
		})
	}, [setUser, setIsAuthenticated, setAuthPending])

	const signUp = async (
		email: string,
		password: string,
		username: string,
		timezone: string,
		profileImage: string
	): Promise<User> =>
		AuthLogic.signUp(email, password, username, timezone, profileImage)

	const signIn = async (username: string, password: string): Promise<User> =>
		AuthLogic.signIn(username, password)

	const { authStateChanges } = AuthLogic

	return {
		user,
		isAuthenticated,
		authPending,
		signUp,
		signIn,
		authStateChanges
	}
}

type AuthHook = {
	user: User | null
	isAuthenticated: boolean
	authPending: boolean
	authStateChanges: (
		callback: (user: User | null) => void | Promise<void>
	) => void
	signUp: (
		email: string,
		password: string,
		username: string,
		timezone: string,
		profileImage: string
	) => Promise<User>
	signIn: (username: string, password: string) => Promise<User>
}

export const AuthContext = React.createContext({} as AuthHook)

export const useAuth = () => React.useContext(AuthContext)

export const AuthProvider: React.FC<{}> = ({ children }) => {
	const auth = useProvideAuth()
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
