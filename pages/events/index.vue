<template>
    <div>
        <h1 class="text-h0 mb-16">Events</h1>
        <EventList :events="events" titles="h2" />
        <Blobs />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
    async asyncData({ $content }) {
        const events = await $content('events', { deep: true }).sortBy('start', 'asc').fetch()
        return { events }
    },
    head() {
        return headFactory({
            title: 'Events',
            path: this.$route.path
        })
    },
}
</script>
