<template>
    <div>
        <h1 class="text-h0 mb-16">Events</h1>
        <EventList :events="events" titles="h2" />
        <Blobs />
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const events = await $content('events', { deep: true }).sortBy('start', 'asc').fetch()
        return { events }
    }
}
</script>
