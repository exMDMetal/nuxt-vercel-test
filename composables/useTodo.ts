import type { Todo } from '~/types/todo'

export function useTodo() {
    const todos = ref<Todo[]>([])

    const load = async () => {
        todos.value = await $fetch('/api/todo')
    }

    const save = async () => {
        await $fetch('/api/todo', {
            method: 'POST',
            body: JSON.stringify(todos.value)
        })
    }

    const add = async (todoText: string) => {
        const todo: Todo = {
            id: todos.value.length + 1,
            title: todoText,
            completed: false,
        }
        todos.value.push(todo)
        await save()
    }

    const remove = async (todo: Todo) => {
        todos.value = todos.value.filter((t) => t.id !== todo.id)
        await save()
    }

    const initialization = load()

    return {
        todos,
        add,
        remove,
        initialization,
    }
}