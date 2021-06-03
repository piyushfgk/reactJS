import { useState } from 'react'

function useLocalStorage(key) {
    const initialValue = []

    const [storedValue, setStoredValue] = useState(() => {
        try {
          // Get from local storage by key
          const item = window.localStorage.getItem(key);
          // Parse stored json or if none return initialValue
          return item ? JSON.parse(item) : initialValue;
        } catch (error) {
          // If error also return initialValue
          console.log(error);
          return initialValue;
        }
    });

    const setItem = (data) => {

        const Stores = storedValue
        const maxId = Stores.length === 0 ? 1 : Math.max(...Stores.map(obj => obj.id)) + 1
        const indexedData = { ...data, id: maxId }

        const valueToStore = Stores.length ? [ ...Stores, indexedData ] : [ indexedData ]
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }

    const deleteItem = (id) => {

        const Stores = storedValue

        if (Stores.length) {
            try {
                const newStore = Stores.filter(store => store.id !== id)
                // Save state
                setStoredValue(newStore);
                window.localStorage.setItem(key, JSON.stringify(newStore))
                return true
            } catch (error) {

                console.error(error)
                return false
            }
        }
    }

    return {
        storedValue,
        setItem,
        deleteItem
    }
}

export default useLocalStorage