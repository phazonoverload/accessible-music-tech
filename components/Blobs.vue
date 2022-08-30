<template>
    <div class="blobs">
        <img src="/tl.svg" alt="" class="tl">
        <img src="/bl.svg" alt="" class="bl">
        <img src="/tr.svg" alt="" class="tr">
        <img src="/br.svg" alt="" class="br">
    </div>
</template>

<style scoped>
.blobs * { position: fixed; z-index: -1; }
.blobs .tl { left: 0; @apply top-20 sm:top-14 w-12 md:w-32; }
.blobs .bl { bottom: 0; left: 0; @apply w-12 md:w-32; }
.blobs .tr { right: 0; @apply top-20 sm:top-14 w-12 md:w-32; }
.blobs .br { bottom: 0; right: 0; @apply w-12 md:w-32; }

</style>
