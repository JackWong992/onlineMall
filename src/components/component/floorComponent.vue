<template>
  <div>
    <!-- floor one area -->
    <div class="floor">
      <!-- floor tip Number-1 -->
      <div class="floor-tip-1">
        <span>{{floorTitleNumber}}F</span><span>{{floorTitle}}</span>
      </div>
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.image" width="100%">
        </div>
        <div>
          <div class="floor-two">
            <img :src="floorData1.image" width="100%">
          </div>
          <div>
            <img :src="floorData2.image" width="100%">
          </div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item , index) in floorData.slice(3)" :key="index">
          <img :src="item.image" width="100%" >
        </div>
      </div>
    </div>
    <!-- floor tip Number-2 -->
    
  </div>
</template>

<script>
  export default {
    props: ['floorData','floorTitle','floorTitleNumber'],
    data(){
      return {
        floorData0: {},
        floorData1: {},
        floorData2: {},        
      }
    },
    created(){
      
    },
    watch: {
      floorData:function(val){
        console.log(this.floorData)
        this.floorData0 = this.floorData[0]
        this.floorData1 = this.floorData[1]
        this.floorData2 = this.floorData[2]      
      }
    }
  }
</script>

<style scoped>
 .floor-tip-1,.floor-tip-2  {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .3rem 0;
  }
  .floor-tip-1 >span:nth-child(1),
  .floor-tip-2 >span:nth-child(1) {
    margin-right: .4rem;
    background: #d74226;
    color: #fff;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
  /* floor-1 css */
  .floor-anomaly {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .floor-anomaly div {
    width: 10rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .floor-one {
    border-right: 1px solid #ddd;
  }
  .floor-two {
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .floor-rule {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
  }
  .floor-rule div {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 10rem;
    border-bottom: 1px solid #ddd;
  }
  .floor-rule div:nth-child(odd) {
    border-right: 1px solid #ddd;
  }

</style>