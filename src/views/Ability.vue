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
    <div class="area">
      <p class="brand-title">产品特点</p>
      <p class="desc1">B/S架构/自定义表单/自定义流程/简化工作/移动端构建</p>
      <section class="fast card">
        <div class="item">
          <!-- <img src="../assets/index/icon12.png"> -->
          <div class="circle">Browser</div>
          <div>
            <p class="title">B/S架构</p>
            <p class="desc">网页登录方便无需客户端安装，随时随地进行操作效率，提升90%。</p>
          </div>
        </div>
        <div class="item">
          <!-- <img src="../assets/index/icon13.png"> -->
          <div class="circle">Form</div>
          <div>
            <p class="title">自定义表单</p>
            <p class="desc">浏览器自定义配置表单，拖拉拽即可实现构建模板</p>
          </div>
        </div>
        <div class="item">
          <!-- <img src="../assets/index/icon14.png"> -->
          <div class="circle">Activiti</div>
          <div>
            <p class="title">自定义流程</p>
            <p class="desc">业务流程组装，规范各个部门的流程，进行高效率提升</p>
          </div>
        </div>
        <div class="item">
          <!-- <img src="../assets/index/icon15.png"> -->
          <div class="circle">Efficiency</div>
          <div>
            <p class="title">简化工作</p>
            <p class="desc">操作简单数据，安全简便易用，使得员工操作不再出错，工作效率倍增</p>
          </div>
        </div>
        <div class="item">
          <!-- <img src="../assets/index/icon16.png"> -->
          <div class="circle">Function</div>
          <div>
            <p class="title">功能打造</p>
            <p class="desc">综合各大行业市场调查整合功能，使用频率进行结合而成</p>
          </div>
        </div>
        <div class="item">
          <!-- <img src="../assets/index/icon17.png"> -->
          <div class="circle">Mobile</div>
          <div>
            <p class="title">移动端构建</p>
            <p class="desc">电脑端，移动端，一体化建造，可接通钉钉，微信端口等等。</p>
          </div>
        </div>
        <!-- <div class="item">
          <img src="../assets/index/icon18.png">
          <div>
            <p class="title">咨询服务</p>
            <p class="desc">全程为客户提供信息化建设咨询服务</p>
          </div>
        </div>
        <div class="item">
          <img src="../assets/index/icon19.png">
          <div>
            <p class="title">支持多种设备</p>
            <p class="desc">支持IOS、Android、微信、电脑平板、手机</p>
          </div>
        </div> -->
      </section>
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
    font-weight: 300;
    text-align: center;
    margin-top: 50px;
  }
  .ability-text {
      font-size: 18px;
      font-weight: 300;
      line-height: 40px;
      text-indent: 1cm;
      width: 80%;
      margin: 0 auto;
  }
  .data-img, .data-img1 {
    width: 80%;
    height: 60vh;
    @media screen and (max-width: 768px) {
      height: 40vh;
    }
    @media screen and (max-width: 768px) {
      height: 30vh;
    }
    margin: 0 auto;
    background: url("../assets/data.jpg") center no-repeat;
    background-size: contain;
  }
  .data-img1 {
    background: url("../assets/data-1.jpg") center no-repeat;
  }
  .introduce-wrap {
    width: 72%;
    margin: 0 auto;
    padding-top: 30px;
    .introduce-text {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 20px;
      font-weight: 300;
      .intro-item {
        width: 45%;
        @media screen and (max-width: 576px) {
          width: 98%;
        }
      }
      .intro-text-sm {
        font-size: 14px;
        margin-top: 16px;
        line-height: 40px;
      }
    }
  }
  .area {
    &:nth-child(2n) {
      background: #f6f9fc;
    }
    padding-bottom: 30px;
    .section-title {
      font-weight: 300;
      text-align: center;
    }
    .desc1 {
      color: #666;
      font-size: 14px;
      text-align: center;
    }
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &.production {
      .item {
        width: 90%;
        @media (min-width: 768px) {
          &.item {
            width: 45%;
          }
        }
      }
    }
    &.advantage {
      .item {
        width: 90%;
        @media (min-width: 768px) {
          &.item {
            width: 45%;
          }
        }
        @media (min-width: 1200px) {
          &.item {
            width: 30%;
          }
        }
      }
    }
    &.fast {
      .item {
        width: 90%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        @media (min-width: 768px) {
          &.item {
            width: 45%;
          }
        }
        @media (min-width: 1200px) {
          &.item {
            width: 15%;
          }
        }
      }
    }
    .item {
      display: flex;
      padding: 30px 15px;
      margin: 10px auto;
      &:hover {
        background: #fff;
        box-shadow: 0 10px 30px 0 rgba(70, 100, 180, .1);
      }
      @media (min-width: 768px) {
        &.item {
          margin: 10px 0;
        }
      }
      .title {
        font-size: 14px;
        margin-bottom: 5px;
        color: #333;
      }
      .desc {
        color: #666;
        font-size: 14px;
        margin-bottom: 0;
      }
      .circle {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #265ffcec;
        font-size: 10px;
        color: white;
        opacity: .8;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
