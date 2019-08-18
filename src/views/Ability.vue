<template>
  <div class="v-ability">
    <p class="brand-title">产品简介</p>
    <p class="ability-text">昕誉DataMagic是昕誉信息科技自主研发的一款数据融合产品，无需任何代码，
      通过可视化图形配置界面只需 5 分钟即可自服务部署一条实时数据管道，
      并提供丰富的管理功能：数据批流一体、数据质量管控、数据任务流管理，可视化运维管理、
      错误队列管理、用户管理、元数据管理等，帮助客户实现高效地连接复杂的异构数据源和目的地，
      大数据量高并发数据同步，可视化实时监测保障数据质量等价值，为客户灵
      活的数据消费需求提供强有力的技术驱动。
    </p>
    <div class="data-img"></div>
    <!-- <img src="../assets/data.jpg" /> -->
    <p class="brand-title">功能介绍</p>
    <div class="data-img1"></div>
    <div class="introduce-wrap">
      <ul class="introduce-text">
        <li class="intro-item">
          数据源和目的地读写
          <p class="intro-text-sm">
            可批量选择数据读取对象，系统自动匹配异构数据源之间的表结构，并支持可视化配置
            所有属性。核心功能：读写个性化设置（读写方式、频率、速率等），自动匹配映射关系。</p>
        </li>
        <li class="intro-item">
          数据清洗
          <p class="intro-text-sm">通过数据清洗组件实现轻量化数据清洗，同
            时提供高级清洗组件，满足大部分数据处理需求。核心功能：可视化清洗组件，高级清洗组件
            表结构修改工具。
          </p>
        </li>
        <li class="intro-item">
          数据质量
          <p class="intro-text-sm">支持针对静态数据库数据定时进行数据质量
            检核。提供可视化工具配置数据质量检核逻辑，并支持复杂的自定义检核逻辑。
            核心功能：数据质量任务、度量规则、检核方法。
          </p>
        </li>
        <li class="intro-item">
          元数据管理
          <p class="intro-text-sm">可查看或修改已连接DataMagic的所有数据
            源的技术元数据、业务元数据、样例数据。核心功能：技术元数据、业务元数据、样例
            数据、历史表结构变化。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.v-ability {
  margin-bottom: 100px;
  .brand-title {
    font-size: 30px;
    color: $black;
    text-align: center;
    margin-top: 30px;
  }
  .ability-text {
      font-size: 18px;
      line-height: 40px;
      text-indent: 1cm;
      width: 80%;
      margin: 0 auto;
  }
  .data-img, .data-img1 {
    height: 80vh;
    background: url("../assets/data.jpg") center no-repeat;
    background-size: contain;
  }
  .data-img1 {
    background: url("../assets/data-1.jpg") center no-repeat;
  }
  .introduce-wrap {
    width: 72%;
    margin: 0 auto;
    .introduce-text {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 22px;
      .intro-item {
        width: 45%;
        @media screen and (max-width: 576px) {
          width: 98%;
        }
      }
      .intro-text-sm {
        font-size: 16px;
        margin-top: 16px;
        line-height: 40px;
      }
    }
  }
}
</style>
