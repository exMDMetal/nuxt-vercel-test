<script lang="ts" setup>
const { params } = useRoute()

if (!params.userid || !(typeof params.userid === 'string')) {
    throw new Error('No user id provided')
}

const { getUser, currentUser } = useUser()

await getUser(params.userid)

if (!currentUser) {
    throw new Error('User not found')
}
</script>

<template>
    <NuxtLink to="/user">Back to users list</NuxtLink>
    <div v-if="currentUser">
        <h1>User</h1>
        <p>{{ currentUser.name }}</p>
        <p>{{ currentUser.email }}</p>
        <p>{{ currentUser.phone }}</p>
    </div>
</template>