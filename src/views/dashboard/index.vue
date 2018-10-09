<template>
  <div>
    <el-row class="sales-brief">
      <el-col :span="6" class="sales-brief-item">
        <p class="sales-brief-title">{{$store.state.dashboard.Sales}}</p>
        <span class="sales-brief-info">销售额</span>
      </el-col>
      <el-col :span="6" class="sales-brief-item">
        <p class="sales-brief-title">{{$store.state.dashboard.salesVolume}}</p>
        <span class="sales-brief-info">销量</span>
      </el-col>
      <el-col :span="6" class="sales-brief-item">
        <p class="sales-brief-title">{{$store.state.dashboard.year2year}}</p>
        <span class="sales-brief-info">同比</span>
      </el-col>
      <el-col :span="6" class="sales-brief-item">
        <p class="sales-brief-title">{{$store.state.dashboard.month2month}}</p>
        <span class="sales-brief-info">环比</span>
      </el-col>
    </el-row>

  <el-row>
    <el-col :span="10">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="14">
      <div id="chartLine" style="width:100%; height:300px;"></div>
    </el-col>

  </el-row>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import echarts from 'echarts'
export default {
  data() {
    return {
      chartColumn: null,
      chartLine: null,
      form: {
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  created() {
    const self = this;
    setInterval(() => {
      this.$store.dispatch({
        type: "dashboard/updateSales"
      });
      self.drawLineChart();
    }, 5000);
  },
  mounted: function() {
    this.drawLineChart();
  },
  methods: {
    drawLineChart() {
      let series = this.$store.state.dashboard.series;
      this.chartLine = echarts.init(document.getElementById("chartLine"));
      this.chartLine.setOption({
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["中国移动", "中国联通", "中国电信"]
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "0",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "中国移动",
            type: "line",
            data: series[0]
          },
          {
            name: "中国联通",
            type: "line",
            data: series[1]
          },
          {
            name: "中国电信",
            type: "line",
            data: series[2]
          }
        ]
      });
    }
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 30px;
  opacity: 0.75;
  text-align: center;
  height: 300px;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<style lang="scss" scoped>
.sales-brief {
  height: 107px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  &-title {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .el-col {
    background: #20a033;
    padding: 20px 0;
    &:hover {
      background: #20a000;
    }
  }
}
</style>

