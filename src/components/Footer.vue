<template>
  <footer class="v-footer">
    <div class="c-d-f c-js-sb f-top">
      <div class="f-top-content">
        <p>关于昕誉</p>
        <a href="" class="font-grey tp-20">公司 简介</a>
      </div>
      <div class="f-top-content">
        <p >联系我们</p>
        <p class="font-grey tp-20">产品销售 zkqd@fosun.com</p>
        <p class="font-grey">人才招聘 hr@fosun.com</p>
      </div>
      <div class="f-top-content">
        <p>官方微信二维码</p>
        <img src="../assets/QR-code.jpg" class="qr-img tp-20"/>
      </div>
    </div>
    <div class="font-grey">
      <p>@2019 上海昕誉信息科技有限公司 版权所有.</p>
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
  height: 350px;
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
    height: 70%;
    padding-bottom: 20px;
    color: #fff;
    font-size: 18px;
    border-bottom: 1px solid grey;
    a {
      text-decoration: none;
    }
    .tp-20 {
      margin-top: 30px;
      display: block;
    }
  }
}
</style>
