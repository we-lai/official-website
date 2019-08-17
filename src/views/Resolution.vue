<template>
  <div class="v-resolution">
    <p class="brand-title">业务案例</p>
    <p class="brand-title-grey">每个案例都是你的参考</p>
    <div class="img-wrap">
      <div class="img-border bg-pic1">
      </div>
      <div class="img-border bg-pic5">
      </div>
      <div class="img-border bg-pic3">
      </div>
      <div class="img-border bg-pic4">
      </div>
      <div class="img-border bg-pic8">
      </div>
      <div class="img-border bg-pic6">
      </div>
    </div>

    <p class="brand-title">服务客户</p>
    <p class="brand-title-grey">大家的支持与认可，我们非常感谢</p>
    <div class="img-wrap">
      <div class="img-border bg-pic10">
      </div>
      <div class="img-border bg-pic9">
      </div>
      <div class="img-border bg-pic8">
      </div>
      <div class="img-border bg-pic2">
      </div>
      <div class="img-border bg-pic5">
      </div>
      <div class="img-border bg-pic7">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-resolution {
  .brand-title {
    font-size: 28px;
    color: $black;
    text-align: center;
  }
  .brand-title-grey {
    color: gray;
    text-align: center;
  }
  .img-wrap {
    display: flex;
    flex-wrap: wrap;
    max-width: 82%;
    margin: 30px auto;
    .img-border {
      display: block;
      width: 180px;
      height: 120px;
      border: 1px solid rgb(216, 215, 215);
      margin: 10px;
    }
    .bg-pic1 {
      background: url("../assets/fanwei.jpg") center no-repeat;
      background-size: contain;
    }
    .bg-pic2 {
      background: url("../assets/yongyou.jpg") center no-repeat;
      background-size: contain;
    }
    .bg-pic3 {
      background: url("../assets/fanruan.jpg") center no-repeat;
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
      background: url("../assets/jindie.jpg") center no-repeat;
      background-size: contain;
    }
    .bg-pic7 {
      background: url("../assets/anjuke.jpg") center no-repeat;
      background-size: contain;
    }
    .bg-pic8 {
      background: url("../assets/guangfa.jpg") center no-repeat;
      background-size: contain;
    }
    .bg-pic9 {
      background: url("../assets/yidong.jpeg") center no-repeat;
      background-size: contain;
    }
    .bg-pic10 {
      background: url("../assets/shunfeng.jpeg") center no-repeat;
      background-size: contain;
    }
  }
}
</style>
