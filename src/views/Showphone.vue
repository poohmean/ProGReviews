
<template>
  <div class="sp" v-if="phone">
    <div class="name">
      <b>
        <p>{{getname}}</p>
      </b>
    </div>

    <div class="dp">
      <div class="spec">
        <p class="sname">Spec:</p>
        <div class="spe">
          <table>
            <tr>
              <td>หน้าจอ:</td>
              <td>{{phone.panel}}</td>
            </tr>
            <tr>
              <td>CPU:</td>
              <td>{{phone.cpu}}</td>
            </tr>
            <tr>
              <td>GPU:</td>
              <td>{{phone.gpu}}</td>
            </tr>
            <tr>
              <td>RAM:</td>
              <td>{{phone.ram}}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="camera">
        <p class="cname">Camera:</p>
        <div class="cam">
          <table>
            <tr>
              <td>Main:</td>
              <td>{{phone.main}}</td>
            </tr>
            <tr>
              <td>Ultra Wide:</td>
              <td>{{phone.ultrawide}}</td>
            </tr>
            <tr>
              <td>Telephoto:</td>
              <td>{{phone.tele}}</td>
            </tr>
            <tr>
              <td>Other:</td>
              <td>{{phone.other}}</td>
            </tr>
            <tr>
              <td>Front camera:</td>
              <td>{{phone.front}}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="op">
        <p class="oname">อื่น ๆ:</p>
        <div class="other">
          <table>
            <tr>
              <td>ระบบเสียง:</td>
              <td>{{phone.sound}}</td>
            </tr>
            <tr>
              <td>BATTERY:</td>
              <td>{{phone.battery}}</td>
            </tr>
            <tr>
              <td>CHARGER:</td>
              <td>{{phone.charge}}</td>
            </tr>
            <tr>
              <td>มาตรฐานกันน้ำกันฝุ่น:</td>
              <td>{{phone.ipx}}</td>
            </tr>
            <tr>
              <td>ระบบปฏิบัติการ:</td>
              <td>{{phone.os}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="review">
      <table>
        <tr>
          <td>Review:</td>
          <td>{{phone.review}}</td>
        </tr>
      </table>
    </div>
    <div class="video">
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

<style scoped lang = "scss">
p {
  color: white;
  margin: auto;
}

table,
th,
td {
  padding-left: 0.25cm;
  border: none;
  border-collapse: collapse;
  color: white;
}

.review {
  width: 1080px;
  height: 141px;
  color: white;
  margin: auto;
  margin-top: 5%;
}
.dp {
  text-align: left;
  display: flex;
  width: 100%;
  height: 5%;
}
.video {
  width: 100%;
  height: 320px;
  justify-content: center;
  display: flex;
  direction: column;
}
.camera {
  color: white;
}
.spe {
  padding-left: 3%;
  color: white;
}
.cam {
  padding-left: 3%;
  margin-left: 3cm;
  width: 15cm;
  height: 5cm;
}
.spec {
  padding-left: 3cm;
  width: 25cm;
  height: 5cm;
}
.op {
  padding-left: 0cm;
  width: 20cm;
  height: 5cm;
}
.name {
  margin-top: 5%;
  margin: auto;
  text-align: center;
  font-size: 30px;
  margin-bottom: 3%;
}
.cname {
  padding-left: 3cm;
}
.sname {
  padding-left: 0;
}
.oname {
  padding-left: 0;
}
.other {
  padding-left: 3%;
}
</style>

