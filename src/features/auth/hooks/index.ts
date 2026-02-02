import { useAppDispatch, useAppSelector } from '@/config/store'
import { openModal, closeModal, setModalType, login, logout } from '../store/authSlice'
import { AuthModalType } from '../types'

export { openModal, closeModal, setModalType, login, logout } from '../store/authSlice'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector(state => state.auth.isModalOpen)
  const modalType = useAppSelector(state => state.auth.modalType)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const user = useAppSelector(state => state.auth.user)

  const handleOpenModal = (type: AuthModalType) => {
    dispatch(openModal(type))
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleSetModalType = (type: AuthModalType) => {
    dispatch(setModalType(type))
  }

  const handleLogin = (payload: { email: string; name?: string }) => {
    dispatch(login(payload))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return {
    isModalOpen,
    modalType,
    isAuthenticated,
    user,
    openModal: handleOpenModal,
    closeModal: handleCloseModal,
    setModalType: handleSetModalType,
    login: handleLogin,
    logout: handleLogout,
  }
}
