import type { Todo } from '~/types/todo'

export default defineEventHandler(async (event) => {
    const raw = await useStorage('default').getItemRaw('todos')

    if (!raw) {
        return []
    }

    return await useStorage('default').getItem<Todo[]>('todos') || []
})
