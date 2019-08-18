<template>
  <footer class="v-footer">
    <div class="f-top">
      <div class="f-top-content">
        <p >联系我们</p>
        <p class="font-grey tp-20">产品销售 songfeixiang@xinyumation.com</p>
        <p class="font-grey">人才招聘 xiecheng@xinyumation.com</p>
      </div>
      <div class="f-top-content">
        <p>官方微信二维码</p>
        <img src="../assets/QR-code.jpg" class="qr-img tp-20"/>
      </div>
    </div>
    <div class="font-grey">
      <p class="c-fs-14">Copyright@2019  沪ICP备19028457号</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  @media screen and (max-width: 720px) {
    height: 650px;
  }
  background-color: rgb(46, 50, 52);
  .font-grey {
      font-size: 16px;
      color: rgb(155, 155, 155);
  }
  .qr-img {
    width: 120px;
  }
  .f-top {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 720px) {
      flex-direction: column;
    }
    width: 80%;
    padding-bottom: 20px;
    color: #fff;
    font-size: 18px;
    a {
      text-decoration: none;
    }
    .tp-20 {
      margin: 30px auto;
      display: block;
    }
  }
}
</style>
