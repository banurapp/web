import User from '../../models/ users/index'

const testUser: User = {
	name: 'Rishi Kothari',
	profileImage: 'https://i.ibb.co/FwLyBcX/banur-sq.png',
	communities: ['hackclub'],
	timezone: 'EST'
}

const AuthLogic = {
	authStateChanges: (callback: (user: User | null) => void | Promise<void>) => {
		// Auth logic would go here
		// TODO: Make gql api (@muirrum)
		const authed = true

		if (authed) {
			callback(testUser)
		} else {
			callback(null)
		}
	},
	signUp: async (
		email: string,
		password: string,
		username: string,
		timezone: string,
		profileImage: string
	): Promise<User> => {
		const result = true
		return new Promise((resolve, reject) => {
			if (result) {
				resolve({
					name,
					timezone,
					profileImage,
					communities: ['hackclub']
				})
			} else {
				reject(new Error('Failed to create new user.'))
			}
		})
	},

	signIn: async (username: string, password: string): Promise<User> => {
		const result = true
		return new Promise((resolve, reject) => {
			if (result) {
				resolve(testUser)
			} else {
				reject(new Error('Failed to sign in.'))
			}
		})
	}
}

export default AuthLogic
