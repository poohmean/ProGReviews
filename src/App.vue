<template>
  <div id="app">
    <div class="same">
      <h1 class="head">
        <router-link class="Name" to="/">
          <b>ProG Reviews™</b>
        </router-link>
      </h1>
      <router-link class="credit" to="/credit">
        <b>Credit</b>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Kanit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.credit {
  font-size: 30px;
  margin-top: 8px;
  padding-right: 2%;
}
.Name {
  text-align: left;
  font-size: 40px;
  color: #ffffff;
  padding-left: 1cm;
}

.head {
  height: 60px;
  margin: 0;
  color: #ffffff;
  background-color: black;
}

.same {
  height: 60px;
  display: flex;
  background-color: black;
  justify-content: space-between;
}
a {
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
