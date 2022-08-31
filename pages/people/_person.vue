<template>
    <div class="flex flex-col items-center gap-8">
        <img :src="`${person.dir}/${person.avatar.path}`" :alt="person.avatar.alt" class="rounded-3xl w-32">
        <h1 class="text-h0">{{person.title}} ({{person.pronouns}})</h1>
        <p class="text-h2">{{person.role}}</p>

        <nuxt-content :document="person" class="prose" />

        <ul class="w-full px-2">
            <li v-for="link in person.links" :key="link.url">
                <a :href="link.url" class="underline">{{link.text}}</a>
            </li>
        </ul>

        <Blobs />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
    async asyncData({ $content, params }) {
        const person = await $content('people', params.person, 'index').fetch()
        return { person }
    },
    head() {
        return headFactory({
            title: this.person.title,
            path: this.$route.path
        })
    },
}
</script>
