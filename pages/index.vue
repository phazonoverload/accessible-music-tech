<template>
  <div>
    <div class="flex flex-col w-full items-center">
      <h1 class="text-h0">Accessible Music Tech</h1>
      <p class="text-center mt-4">Community events focused on the intersection between accessibility and technology.</p>
      <Newsletter class="my-8 w-full" />
    </div>

    <div v-if="events.length > 0">
      <h2 class="text-h2 mt-4">Events</h2>
      <EventList :events="events" titles="h2" />
    </div>
    <Blobs />
  </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
  async asyncData({ $content }) {
    const events = await $content('events', { deep: true }).where({ hidden: { $ne: true } }).sortBy('start', 'asc').fetch()
    return { events }
  },
  head() {
    return headFactory()
  },
}
</script>
