<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
        <div v-for="person in people" :key="person.dir">
            <img :src="`${person.dir}/${person.avatar.path}`" :alt="person.avatar.alt" class="rounded-3xl w-full">
            <n-link :to="person.dir" class="underline"><h3 class="font-display text-lg mt-2">{{person.title}}</h3></n-link>
            <p>{{person.role}}</p>
            <p>Pronouns: {{person.pronouns}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        people: {
            type: Array,
            required: true
        }
    }
}
</script>
