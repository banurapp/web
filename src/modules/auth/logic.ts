import User from '../../models/ users/index'

const AuthLogic = {
	authStateChanges: (callback: (user: User | null) => void | Promise<void>) => {
		// Auth logic would go here
		// TODO: Make gql api (@muirrum)
		const authed = true

		if (authed) {
			callback({
				name: 'Rishi Kothari',
				profileImage: 'https://i.ibb.co/FwLyBcX/banur-sq.png',
				communities: ['hackclub'],
				timezone: 'EST'
			})
		} else {
			callback(null)
		}
    },
    signUp: async (email: string, password: string, username: string, timezone: string, profileImage: string): Promise<User> => {
        const result = true
        return new Promise((resolve, reject) => {
            if(result) {
                resolve({
                    name: name,
                    timezone: timezone,
                    profileImage: profileImage,
                    communities: ['hackclub']
                })
            } else {
                reject(new Error("Failed to create new user."))
            }
        })
    },

    signIn:
}

export default AuthLogic
