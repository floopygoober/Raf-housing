<script>
    export default {
        name: 'LeaderboardSummary',
      data() {
          return {
            leaderboardData: [],
            errorMessage: ''
          }
      },
      //it's a directed hook
      mounted() {
          this.fetchLeaderboardData()
      },
      methods: {
        async fetchLeaderboardData() {
          try {
            const res = await fetch('/api/leaderboard-summary')
            if (!res.ok) {
              throw new Error('Server returned status ${res.status}')
            }
            const data = await res.json();
            this.leaderboardData = data;
          } catch (err) {
            this.errorMessage = err.message;
          }
        }
      }
    }
</script>

<template>
   <div class="leaderboard-summary">
     <h2>Leaderboard Summary</h2>
     <table>
       <thead>
       <tr>
         <th>Rafs Column</th>
         <th>Quotes</th>
       </tr>
       </thead>
       <tbody>
       <tr v-for="(item, index) in leaderboardData" :key="index">
         <td>{{item.name}}</td>
         <td>{{item.quote}}</td>
       </tr>
       </tbody>
     </table>
     <p v-if="errorMessage" class="error">{{errorMessage}}</p>
   </div>
</template>

<style scoped>
.leaderboard-summary {
  margin-top: 10px;
}

table{
  margin: 0 auto;
  border-collapse: collapse;
}

th, td{
  border: 1px solid black;
  padding: 10px;
}

.error{
  color: red;
}
</style>