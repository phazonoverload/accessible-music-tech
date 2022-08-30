<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
        <a v-for="sponsor in sponsors" :key="sponsor.dir" :href="sponsor.url">
            <img :src="`${sponsor.dir}/${sponsor.image}`" :alt="sponsor.title" class="rounded-3xl w-full">
        </a>
    </div>
</template>

<script>
export default {
    props: {
        sponsors: {
            type: Array,
            required: true
        }
    }
}
</script>
