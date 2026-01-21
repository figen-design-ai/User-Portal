export type AuthModalType = 'login' | 'signup' | 'forgotPassword'

export interface AuthState {
	isModalOpen: boolean
	modalType: AuthModalType
	isAuthenticated: boolean
	user: {
		email?: string
		name?: string
	} | null
}

export interface AuthModalContentProps {
	modalType: AuthModalType
	onSwitchModal: (type: AuthModalType) => void
	onSocialLogin: (provider: 'google' | 'facebook' | 'github') => void
	onSubmit: () => void
}
