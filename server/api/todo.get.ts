import type { Todo } from '~/types/todo'

export default defineEventHandler(async (event) => {
    return await useStorage().getItem<Todo[]>('todos') || []
})
