<template>
    <ul>
        <li v-for="event in events" :key="event.title" class="mt-4">
            <n-link :to="event.dir" class="p-4 block bg-theme-greenDark text-white rounded-lg">
                <component :is="titles" class="text-xl">{{event.title}}</component>
                <div class="meta flex gap-4">
                    <span>{{ $moment(event.start).format('D MMMM YYYY') }}</span>
                    <span class="loc">{{ event.location }}</span>
                </div>
            </n-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            events: {
                type: Array,
                required: true
            },
            titles: {
                type: String,
                required: false,
                default: 'h2'
            }
        }
    }
</script>
