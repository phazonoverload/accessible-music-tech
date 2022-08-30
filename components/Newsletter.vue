<template>
     <form action="https://buttondown.email/api/emails/embed-subscribe/accessiblemusicevents" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/accessiblemusicevents', 'popupwindow')">
        <div>
            <label for="bd-email">Email Address</label>
            <input type="email" name="email" id="bd-email" />
        </div>
        <input type="submit" value="Subscribe for updates" />
    </form>
</template>

<style scoped>
form {
    @apply flex flex-col md:flex-row md:items-end gap-4 max-w-[960px];
}
form div {
    @apply flex flex-col flex-1;
}
</style>
