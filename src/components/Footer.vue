<template>
  <footer class="v-footer">
    <div class="f-top">
      <div class="f-top-content">
        <p class="title">联系我们</p>
        <p class="space">产品销售 songfeixiang@xinyumation.com</p>
        <p>人才招聘 xiecheng@xinyumation.com</p>
      </div>
      <div class="f-top-content f-qrcode">
        <p class="title">官方微信二维码</p>
        <img src="../assets/QR-code.jpg" class="qr-img"/>
      </div>
    </div>
    <p class="c-fs-14 c-ta-c">Copyright@2019  沪ICP备19028457号</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-footer {
  padding: 40px 0px;
  background-color: rgb(46, 50, 52);
  color: rgb(155, 155, 155);
  .title {
    color: #fff;
    margin-bottom: 20px;
  }
  .qr-img {
    width: 120px;
  }
  .f-top {
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
    @media (max-width: 720px) {
      flex-direction: column;
      .f-top-content {
        width: 50%;
        padding-left: 10%;
      }
      .f-qrcode {
        margin-top: 30px;
      }
    }
    .space {
      margin-bottom: 15px;
      display: block;
    }
  }
}
</style>
