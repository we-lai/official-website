<template>
  <div class="v-friends">
    <p class="brand-title">合作品牌</p>
    <div class="img-wrap">
      <div class="img-border bg-pic1">
      </div>
      <div class="img-border bg-pic2">
      </div>
      <div class="img-border bg-pic3">
      </div>
      <div class="img-border bg-pic4">
      </div>
      <div class="img-border bg-pic5">
      </div>
      <div class="img-border bg-pic6">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-friends {
  margin-bottom: 100px;
  min-height: 50vh;
  .brand-title {
    font-size: 30px;
    font-weight: 300;
    color: $black;
    text-align: center;
    margin-top: 50px;
  }
  .img-wrap {
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    margin: 30px auto;
    .img-border {
      display: block;
      width: 15%;
      margin-left: 1%;
      opacity: .75;
      @media screen and (max-width: 960px) {
        width: 30%;
        margin-left: 2%;
      }
      @media screen and (max-width: 768px) {
        width: 44%;
        margin-left: 4%;
      }
       @media screen and (max-width: 414px) {
        width: 90%;
        margin-left: 5%;
      }
      height: 120px;
      margin-bottom: 10px;
      border: 1px solid rgb(236, 234, 234);
      &:hover {
        opacity: 1;
      }
    }
    .bg-pic1 {
      background: url("../assets/fanwei.png") center no-repeat;
      background-size: contain;
    }
    .bg-pic2 {
      background: url("../assets/yongyou.png") center no-repeat;
      background-size: contain;
    }
    .bg-pic3 {
      background: url("../assets/fanruan.png") center no-repeat;
      background-size: contain;
    }
    .bg-pic4 {
      background: url("../assets/lanling.png") center no-repeat;
      background-size: contain;
    }
    .bg-pic5 {
      background: url("../assets/zhiyuan.png") center no-repeat;
      background-size: contain;
    }
    .bg-pic6 {
      background: url("../assets/jindie.png") center no-repeat;
      background-size: contain;
    }
  }
}
</style>
