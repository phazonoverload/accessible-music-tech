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
export default {
    async asyncData({ $content }) {
        const content = await $content('static/conduct').fetch()
        console.log(content)
        return { content }
    }
}
</script>
