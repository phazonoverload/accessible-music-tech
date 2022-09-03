<template>
    <div>
        <h1 class="text-h0">{{ content.title }}</h1>
        <article class="mt-12">
            <nuxt-content :document="content" class="prose" />
        </article>
        <Blobs />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
    async asyncData({ $content }) {
        const content = await $content('static/conduct').fetch()
        return { content }
    },
    head() {
        return headFactory({
            title: 'Code of Conduct',
            path: this.$route.path
        })
    },
}
</script>
