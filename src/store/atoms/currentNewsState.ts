import { atom } from 'recoil'
import { sessionStorageEffect } from '../../utils/sessionStorageEffect'

export const currentNewsState = atom<string>({
  key: 'currentNewsState',
  default: "",
  effects: [sessionStorageEffect('currentNews')]
})

export const currentNewsTitleState = atom<string>({
  key: 'currentNewsTitleState',
  default: "",
  effects: [sessionStorageEffect('currentNewsTitle')]
})