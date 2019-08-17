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
    <!-- <div class="container">
      <div class="row" style="border: 1px solid green">
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-wh" style="border: 1px solid green"><img src="../assets/fanwei.jpg"/></div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-wh" style="border: 1px solid green"><img src="../assets/yongyou.jpg"/></div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-wh" style="border: 1px solid green"><img src="../assets/fanruan.jpg"/></div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-wh" style="border: 1px solid green"><img src="../assets/jindie.jpg"/></div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-wh" style="border: 1px solid green"><img src="../assets/lanling.jpg"/></div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6 img-wh" style="border: 1px solid green"><img src="../assets/zhiyuan.png"/></div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-friends {
  // .img-wh {
  //   width: 50%;
  // }
  .brand-title {
    font-size: 34px;
    color: $black;
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
  }
}
</style>
