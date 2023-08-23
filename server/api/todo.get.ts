import type { Todo } from '~/types/todo'

export default defineEventHandler(async (event) => {
    const todos = await useStorage().getItem<Todo[]>('todos') || []

    return todos
})