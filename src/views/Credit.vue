<template>
  <div class="b">
    <div class="pre">
      <p>จัดทำโดย</p>
      <p>นส. ปิติณา ปรางค์สมบัติ 610510696</p>
      <p>นาย พิชัย นามวรรณ์ 610510808</p>
    </div>
    <div class="thank">
      <p>ขอขอบคุณ</p>
      <p>
        ข้อมูลการรีวิวและคลิปวีดีโอจาก:
        <b>DroidSans</b>
      </p>
      <img
        class="thk"
        src="https://images.droidsans.com/wp-content/uploads/2017/02/logo.png"
        alt="droidsans"
      />
      <p class="aa">
        <a href="https://www.facebook.com/droidsans/" target="_blank" rel="noopener">Facebook</a>
      </p>
      <p class="bb">
        <a
          href="https://www.youtube.com/channel/UCsbSEW758I5Uow-5cCMUSow"
          target="_blank"
          rel="noopener"
        >Youtube</a>
      </p>
    </div>
  </div>
</template>

<style scpoed lang="scss">
.pre {
  padding-top: 50px;
  text-align: center;
  margin: auto;
  color: #ffff;
}
.thank {
  padding-top: 50px;
  text-align: center;
  margin: auto;
  color: #ffff;
}
.aa,
.bb {
  border-bottom: 1px solid #ffff;
  width: 95px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 3px;
  transition: all 0.25s ease-out, visibility 0s;
  transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  &:hover {
    background-color: rgba(255, 254, 254, 0.05);
    cursor: pointer;
  }
}
p {
  font-size: 20px;
}
.thk {
  margin-top: 25px;
  width: 307.5px;
  height: 75px;
  margin-bottom: 25px;
}
</style>

<script>
export default {
  name: "Credit"
};
</script>
