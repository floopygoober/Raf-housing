<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home </router-link>
        <router-link to="/about"> About</router-link>
        <router-link to="/leaderboard"> LeaderBoard</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        responseMessage: ''
      }
    },
    methods: {
      async pingBackend() {
        try {
          const res = await fetch('/api/ping');
          const data = await res.json();
          this.responseMessage = data.message;
        } catch (err) {
          console.error(err);
        }

        // THIS DOES THE SAME AS CODE ABOVE
        // fetch('/api/ping')
        // .then(req => res.json())
        // .then(data => {
        //   console.log(data.message);
        // })
        // .catch(err => console.error(err))
      }
    }
  }
</script>

<style>

</style>