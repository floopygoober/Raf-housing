<template>
    <div class="cat-container">
        <h2>I found Jimmy</h2>
        <img :src='Jimmy' alt="Jimmy Himself">
        <p>Clearly he didnt want to be found</p>
    </div>
</template>

<script>

const Jimmy = new URL('./assets/Jimmy.jpg', import.meta.url).href;
//yeah im not gunna lie i ran out of ideas and this one seemed funny. but it is rather simple. 
    export default {
        name: 'JimmyComponent',
        data() {
            return {
            Jimmy: new URL('@/assets/Jimmy.jpg', import.meta.url).href
        }
    }
}
</script>