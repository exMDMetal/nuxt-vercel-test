<script setup lang="ts">
const { todos, add, remove, initialization } = useTodo()

await initialization
const newTodo = ref('')
</script>

<template>
    <div>
        <h1>Todos</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.title }}
                <button @click="remove(todo)">Remove</button>
            </li>
        </ul>
        <input type="text" placeholder="New todo" v-model="newTodo">
        <button @click="add(newTodo).then(() => newTodo = '')">Add</button>
    </div>
</template>