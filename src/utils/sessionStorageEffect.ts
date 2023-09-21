import { AtomEffect } from 'recoil'

export const sessionStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const storageValue = sessionStorage.getItem(key)

    if (storageValue !== null) {
      const savedValue = key.includes('Date')
        ? new Date(JSON.parse(storageValue))
        : JSON.parse(storageValue)

      setSelf(savedValue)
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue))
    })
  }
