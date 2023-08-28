export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        await useStorage('default').setItem('todos', body)
        
        
        return { ok: true }
    } catch (error) {
        return { ok: false, error }
    }
})