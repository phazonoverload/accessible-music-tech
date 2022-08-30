<template>
    <div>
        <h1 class="text-h0 mb-16">People</h1>
        <PeopleList :people="people" />
        <Blobs />
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const people = await $content("people", { deep: true }).sortBy("title", "asc").fetch();
        return { people };
    }
}
</script>
