const getStorage = (key) => {
    const initialValue = {}

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
    const id = Object.keys(Stores).length ? Object.keys(Stores).length + 1 : 1
    const indexedData = { ...data, id: id }

    const valueToStore = Object.keys(Stores).length ? [ ...Stores, indexedData ] : [ indexedData ]

    window.localStorage.setItem(key, JSON.stringify(valueToStore));
}

const deleteStoreItem = (key, id) => {

    const Stores = getStorage(key)

    if (Object.keys(Stores).length) {
        try {
            setStorage(key, Stores.filter(store => store.id !== id))

            return true
        } catch (error) {

            console.error(error)
            return false
        }
    }
}

export { getStorage, setStorage, deleteStoreItem }