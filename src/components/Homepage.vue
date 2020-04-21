<template>
  <div>
    <div class="phone-list">
      <div class="ss">
        <b>Samsung</b>
      </div>
      <router-link :to="'/'+p.name" class="ssphone" v-for="p in Samsung" :key="p.id">
        <div>
          <img :src="p.pic" :alt="p.name" />
        </div>
        <span>
          <p>
            <b>{{p.name}}</b>
          </p>
          <p>
            <b>{{p.price}}</b>
          </p>
        </span>
      </router-link>
      <div class="hw">
        <b>Huawei</b>
      </div>
      <router-link :to="'/'+p.name" class="hwphone" v-for="p in Huawei" :key="p.id">
        <div>
          <img :src="p.pic" :alt="p.name" />
        </div>
        <span>
          <p>
            <b>{{p.name}}</b>
          </p>
          <p>
            <b>{{p.price}}</b>
          </p>
        </span>
      </router-link>
      <div class="op">
        <b>Oppo</b>
      </div>
      <router-link :to="'/'+p.name" class="opphone" v-for="p in Oppo" :key="p.id">
        <div>
          <img :src="p.pic" :alt="p.name" />
        </div>
        <span>
          <p>
            <b>{{p.name}}</b>
          </p>
          <p>
            <b>{{p.price}}</b>
          </p>
        </span>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "Homepage",

  data: () => ({
    Samsung: [
      {
        id: 1,
        name: "Samsung Galaxy S20",
        price: "28,900 ฿",
        pic:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/m/sm-g980_g981_s20_cloud-blue_11.png"
      },
      {
        id: 2,
        name: "Samsung Galaxy S20+",
        price: "31,900 ฿",
        pic:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/m/sm-g985_g986_s20__cosmic_gray_1_11.png"
      },
      {
        id: 3,
        name: "Samsung Galaxy S20 Ultra 5G",
        price: "39,900 ฿",
        pic:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/m/sm-g988_s20_ultra_cosmic_black_3.png"
      }
    ],
    Huawei: [
      {
        id: 1,
        name: "Huawei P40",
        price: "22,990 ฿",
        pic:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/h/u/huawei-p40-silver_7.png"
      },
      {
        id: 2,
        name: "Huawei P40 Pro",
        price: "31,990 ฿",
        pic:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/h/u/huawei-p40-pro-blue_8.png"
      }
    ],
    Oppo: [
      {
        id: 1,
        name: "Oppo Find X2 5G",
        price: "33,990 ฿",
        pic:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/o/p/oppo-find-x2-blue_11.png"
      },
      {
        id: 2,
        name: "Oppo Find X2 Pro 5G",
        price: "40,990 ฿",
        pic:
          "https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/o/p/oppo-find-x2-pro-black-01_10.png"
      }
    ]
  })
};
</script>
    


<style scoped lang = "scss">
.ssphone {
  padding-left: 1vw;
  display: flex;
  width: 705px;
  height: 141px;
  border-radius: 15px;
  margin-bottom: 0.5vh;
  transition: all 0.25s ease-out, visibility 0s;
  transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  background-color: rgb(20, 24, 28);
  &:hover {
    background-color: rgba(255, 254, 254, 0.05);
    cursor: pointer;
  }
}
.opphone {
  padding-left: 1vw;
  display: flex;
  width: 705px;
  height: 141px;
  border-radius: 15px;
  margin-bottom: 0.5vh;
  transition: all 0.25s ease-out, visibility 0s;
  transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  background-color: rgb(20, 24, 28);
  &:hover {
    background-color: rgba(255, 254, 254, 0.05);
    cursor: pointer;
  }
}
.hwphone {
  padding-left: 1vw;
  display: flex;
  width: 705px;
  height: 141px;
  border-radius: 15px;
  margin-top: 2vh;
  margin-bottom: 0.5vh;
  transition: all 0.25s ease-out, visibility 0s;
  transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  &:hover {
    background-color: rgba(255, 254, 254, 0.05);
    cursor: pointer;
  }
}

.phone-list {
  margin: auto;
  padding-left: 25vw;
}
p {
  margin-top: 3vh;
  padding-left: 1vw;
  width: 300px;
  height: 25px;
  color: #ffffff;
  text-align: left;
}
img {
  width: 150px;
  height: 145px;
  border-radius: 9px;
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
.ss {
  width: 700px;
  color: #ffffff;
  text-align: left;
  border-bottom: 1px solid #ffffff;
  margin-top: 2.5cm;
  margin-bottom: 0.15cm;
}
.hw {
  margin-top: 2.5cm;
  width: 700px;
  color: #ffffff;
  text-align: left;
  border-bottom: 1px solid #ffffff;
  margin-bottom: 0.15cm;
}
.op {
  width: 700px;
  color: #ffffff;
  text-align: left;
  border-bottom: 1px solid #ffffff;
  margin-top: 2.5cm;
  margin-bottom: 0.15cm;
}
</style>