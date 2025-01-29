<template>
    <LeaderboardSummary />
    <JimmyComponent />
</template>

<script>
    import LeaderboardSummary from '../components/LeaderboardSummary.vue';
    import JimmyComponent from '../components/JimmyComponent.vue';

    export default {
        name: 'LeaderBoardPage',
        components: {
            LeaderboardSummary,
            JimmyComponent
        }
    }
</script>

<style scoped>
    .about-page {
        text-align: center;
        margin-top: 20px;
    }
</style>