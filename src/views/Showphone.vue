
<template>
  <div class="sp" v-if="phone">
    <div class="ss">
      <p>Name: {{getname}}</p>
      <p>CPU: {{phone.cpu}}</p>
      <p>RAM: {{phone.ram}}</p>
    </div>
    <div>
      <iframe
        width="560"
        height="315"
        :src="phone.video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import data from "../data/data";
export default {
  name: "Showphone",
  computed: {
    getname() {
      return this.$route.params.name;
    }
  },
  mounted() {
    this.phone = data.find(p => p.name === this.getname);
  },
  data: () => ({
    phone: null
  })
};
</script>

<style>
p {
  color: white;
}
</style>

