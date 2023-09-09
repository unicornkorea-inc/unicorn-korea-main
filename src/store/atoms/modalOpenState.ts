import { atom } from 'recoil'

export const modalOpenState = atom<boolean>({
  key: 'modalOpenState',
  default: false,
})

export const currentModalState = atom<'terms' | 'personalInfo' | null>({
    key: 'currentModalState',
    default: null
})
