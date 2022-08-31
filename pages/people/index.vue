<template>
    <div>
        <h1 class="text-h0 mb-16">People</h1>
        <PeopleList :people="people" />
        <Blobs />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
    async asyncData({ $content }) {
        const people = await $content("people", { deep: true }).sortBy("title", "asc").fetch();
        return { people };
    },
    head() {
        return headFactory({
            title: 'People',
            path: this.$route.path
        })
    },
}
</script>
