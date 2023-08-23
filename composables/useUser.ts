const API_HOST = 'https://jsonplaceholder.typicode.com'

type User = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export default function useUser() {
    const users = ref<User[]>([])
    const currentUser = ref<User | null>(null)

    const getUser = async (id: string) => {
        const response = await $fetch<User>(`${API_HOST}/users/${id}`)
        
        if (response) {
            currentUser.value = response
        }
    }

    const getAllUsers = async () => {
        const response = await $fetch<User[]>(`${API_HOST}/users`)
        
        if (response) {
            users.value = response
        }
    }
    
    return {
        getUser,
        getAllUsers,
        users: computed(() => users.value),
        currentUser: computed(() => currentUser.value)
    }
}