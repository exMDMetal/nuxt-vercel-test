<script setup lang="ts">
const { getAllUsers, users } = useUser()

await getAllUsers()
</script>

<template>
    <div>
        <h1>Users</h1>
        <ul>
        <li v-for="user in users" :key="user.id">
            <NuxtLink :to="`/user/${user.id}`">
                {{ user.name }}
            </NuxtLink>
        </li>
        </ul>
    </div>
</template>