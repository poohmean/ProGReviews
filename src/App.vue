<template>
  <div id="app">
    <h1 class="head">
      <router-link to="/"><b>ProG Reviews</b></router-link>
    </h1>
    <router-view />
  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Baloo Paaji 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.head {
  margin: 0;
  text-align: left;
  font-size: 45px;
  font-weight: 400;
  color: #ffffff;
  background-color: black;
  padding-left: 2cm;
}
a{
  text-decoration: none;
  color: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  user-select: none;
  background-color: rgb(20, 24, 28);
  margin: 0;
}
</style>
