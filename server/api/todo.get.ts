import type { Todo } from '~/types/todo'

export default defineEventHandler(async (event) => {
    const { getItem } = useStorage('default')

    return await getItem<Todo[]>('todos') || []
})
