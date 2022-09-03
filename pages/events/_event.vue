<template>
    <div>
        <h1 class="text-h0">{{event.title}}</h1>

        <section class="meta flex flex-col items-center md:flex-row justify-center gap-2 md:gap-8 text-xl md:text-3xl my-4">
        <span>Date: {{ $moment(event.start).format('D MMMM YYYY') }}</span>
            <span>Location: {{ event.location }}</span>
        </section>
        <p class="text-center text-lg mt-6 mb-12">{{ event.descriptions.full }}</p>


        <section id="cal" class="mb-12 text-center" v-if="!event.save_the_date">
            <p>This event is free and there is no need to register. Just come back here at the start of the event ({{ $moment(event.start).format('HH:mm') }} in {{ $moment.tz.guess(true).split('/')[1].split('_').join(' ')}} time).</p>
            <p class="mt-4"><a :href="event.google_cal_template" class="underline">Add this event to your Google Calendar</a> or <a class="underline" :href="event.ics">download a .ics file</a>.</p>
        </section>

        <Newsletter class="mb-12" />

        <section id="people" class="pb-16" v-if="!event.save_the_date">
            <h2 class="text-h2 mb-4">Speakers</h2>
            <PeopleList :people="speakers" />
        </section>

        <section id="schedule" class="mb-12" v-if="!event.save_the_date">
            <h2 class="text-h2 mb-4">Schedule</h2>
            <p>Times are localized to {{ $moment.tz.guess(true).split('/')[1].split('_').join(' ') }}</p>
            <table class="w-full mt-6">
                <tr class="text-left text-2xl font-display">
                    <th class=" font-normal">Time</th>
                    <th class="pl-6 font-normal">Session</th>
                </tr>
                <tr v-for="session in schedule" :key="session.title" class="border-b last:border-none">
                    <td class="whitespace-nowrap">
                        <span>{{ $moment(session.start).format('HH:mm') }}</span>
                        <span v-if="session.end">- {{ $moment(session.end).format('HH:mm') }}</span>
                    </td>
                    <td class="w-[99%] py-4 pl-6">
                        <p class="font-bold">{{session.title}}</p>
                        <n-link v-for="(speaker, i) in session.people" :key="speaker.dir" :to="speaker.dir">
                            <span class="underline">{{speaker.title}}</span>
                            <span v-if="i + 1 < session.people.length"> + </span>
                        </n-link>
                    </td>
                </tr>

            </table>
        </section>

        <section id="sponsors" class="pb-12" v-if="!event.save_the_date">
            <h2 class="text-h2 mb-4">Sponsors</h2>
            <SponsorList :sponsors="sponsors" />
        </section>

        <Blobs v-if="event.blobs" />
    </div>
</template>

<script>
import headFactory from '@/utils/head-factory'
export default {
    async asyncData({ $content, params, redirect }) {
        const event = await $content("events", params.event, "index").fetch()
        const data = { event }

        if(!event.save_the_date) {
            const allPeople = await $content("people", { deep: true }).fetch();
            data.speakers = allPeople.filter(person => event.speakers.find(speaker => person.dir.split("/people/")[1] == speaker))

            data.schedule = event.schedule.map(session => {
                const people = session.people ? session.people.map(sp => data.speakers.find(s => s.dir.split("/people/")[1] == sp)) : false;
                return { ...session, people };
            });

            const allSponsors = await $content('sponsors', { deep: true }).fetch()
            console.log(allSponsors)
            data.sponsors = event.sponsors.map(sponsor => allSponsors.find(s => s.dir.split("/sponsors/")[1] == sponsor))

        }

        console.log(data)

        return data;
    },
    head() {
        return headFactory({
            title: this.event.title,
            path: this.$route.path,
            description: this.event.descriptions.short,
            image: 'og.png'
        })
    },
}
</script>
