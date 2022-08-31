<template>
  <div>
    <div class="flex flex-col w-full items-center">
      <h1 class="text-h0">Accessible Music Tech</h1>
      <p class="text-center mt-4">Community events focused on the intersection between accessibility and technology.</p>
      <Newsletter class="my-8 w-full" />
    </div>

    <h2 class="text-h2 mt-4">Upcoming Events</h2>
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
    return headFactory()
  },
}
</script>
