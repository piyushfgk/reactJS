const getStorage = (key) => {
    const initialValue = []

    try {
        const item = window.localStorage.getItem(key)
        // Parse stored json or if none return blank object
        return item ? JSON.parse(item) : initialValue
    } catch (error) {
        console.log(error)

        return initialValue
    }
}

const setStorage = (key, data) => {

    const Stores = getStorage(key)
    const maxId = Math.max(...Stores.map(obj => obj.id)) + 1
    const indexedData = { ...data, id: maxId }

    const valueToStore = Stores.length ? [ ...Stores, indexedData ] : [ indexedData ]

    window.localStorage.setItem(key, JSON.stringify(valueToStore));
}

const deleteStoreItem = (key, id) => {

    const Stores = getStorage(key)

    if (Stores.length) {
        try {
            const newStore = Stores.filter(store => store.id !== id)
            window.localStorage.setItem(key, JSON.stringify(newStore))
            return true
        } catch (error) {

            console.error(error)
            return false
        }
    }
}

export { getStorage, setStorage, deleteStoreItem }