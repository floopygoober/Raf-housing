<template>
    <LeaderboardSummary />
    <JimmyComponent />
    <BenitoComponent />
</template>

<script>
    import LeaderboardSummary from '../components/LeaderboardSummary.vue';
    import JimmyComponent from '../components/JimmyComponent.vue';
    import BenitoComponent from '../components/BenitoComponent.vue';


    export default {
        name: 'LeaderBoardPage',
        components: {
            LeaderboardSummary,
            JimmyComponent,
            BenitoComponent
        }
    }
</script>

<style scoped>
    .about-page {
        text-align: center;
        margin-top: 20px;
    }
</style>