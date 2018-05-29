<template>
  <div>
    <!-- search area -->
    <div class="search-bar">
      <van-row >
        <van-col span="3">
          <img :src="locationIcon" width="62%" class="location-icon">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5" class="search-button-r">
          <van-button size="mini" class="search-button">查找</van-button>
        </van-col>      
      </van-row>
    </div>
  <!-- swiper area -->
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index"> 
          <img v-lazy="banner.image" alt="" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar -->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="98%">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!-- adbannerr area -->
    <div>
      <img v-lazy="adBanner" width="100%">
    </div>
    <!-- recommend good area -->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item , index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%">
              <div class="recommend-tip">
                推荐
              </div>
              <div>{{item.goodsName}}</div>
              <div class="price">￥{{item.price | moneyFilter}}</div>
              <div class="mall-price">￥{{item.mallPrice | moneyFilter}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floor-component :floorData="floor1" :floorTitle="floorName.floor1" :floorTitleNumber="floortitlenumber.floortitlenumber1"></floor-component>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2" :floorTitleNumber="floortitlenumber.floortitlenumber2"></floor-component> 
    <floor-component :floorData="floor3" :floorTitle="floorName.floor3" :floorTitleNumber="floortitlenumber.floortitlenumber3"></floor-component>    
    <div class="hot-area">
      <div class="hot-title">
        <span>火</span>火爆专区</div>
      <div class="hot-goods">
        <!-- 热卖商品List组件 -->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
              <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price" :goodMallPrice="item.mallPrice"></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
  import {swiper , swiperSlide} from 'vue-awesome-swiper'
  import floorComponent from '../component/floorComponent'
  import {toMoney} from '@/filter/moneyFilter.js'
  import goodsInfo from '../component/goodsInfoComponent'  
  // import url from '@/serviceAPI.config.js'
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3
        },
        msg: 'shopping Mall',
        locationIcon: require('../../assets/images/realtime.png'),
        bannerPicArray:[],
        category:[],
        adBanner:'',
        recommendGoods:[],
        floor1:[],
        floor2:[],      
        floor3:[],
        floorName: {},    
        floortitlenumber: {},
        hotGoods: []
              
      }
    },
    filters:{
      moneyFilter(money){
        return toMoney(money)
      }
    },
    components: { swiper,swiperSlide,floorComponent , goodsInfo},
    created(){
        axios({
            url: 'https://www.easy-mock.com/mock/5b063126d14ea45a9a89551b/onlinemall/index',
            method: 'get',
        })
        .then(response => {
            console.log(response)
            if(response.status ===200){
              this.category = response.data.data.category
              this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS
              this.bannerPicArray = response.data.data.slides
              this.recommendGoods = response.data.data.recommend
              this.floor1 = response.data.data.floor1
              this.floor2 = response.data.data.floor2
              this.floor3 = response.data.data.floor3
              this.floorName = response.data.data.floorName
              this.floortitlenumber = response.data.data.floortitlenumber
              this.hotGoods = response.data.data.hotGoods  
                                              
            }
        })
        .catch((error) => {     
        })
    }
  }
</script>

<style scoped>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }
  .location-icon {
    padding-top: .4rem;
    padding-left: .5rem; 
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #fff !important;
    color: #000;
    border-radius: .3rem;
    text-indent: .3rem;
    font-size: 14px;
  }
  .search-button {
    position: absolute;
    left: .2rem;
    top: .47rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .search-button-r {
    position: relative;
  }
  .swiper-area {
    clear: both;
    height: 8.4rem;
    overflow: hidden;
  }
  .type-bar {
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .type-bar div {
    padding: .3rem;
    font-size: 12px;
    text-align: center;
  }
  .recommend-area {
    background-color: #fff;
    margin-top: .3rem;
  }
  .recommend-title {
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    padding-left: .5rem;
    color: #e5017d;
  }
  .recommend-body {
    border-bottom: 1px solid #eee;
    position: relative;
  }
  .recommend-body .price {
    color: #fc0e3d;
  }
  .recommend-body .mall-price {
    color: #ddd;
    text-decoration: line-through;
    font-size: 16px;
    -webkit-transform: scale(0.7);
    margin-top: -.3rem;
    margin-bottom: -.2rem;
  }
  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
  }
  .recommend-item .recommend-tip {
    position: absolute;
    right: 0;
    top: 3rem;
    background: red ;
    padding-left: .4rem;
    padding-right: .2rem;
    border-radius: .4rem 0 0 .4rem;
    color: #fff;
    font-size: 12px;
    
  }
  
  .floor-tip-1  {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem 0;
  }
  .floor-tip-1 >span:nth-child(1) {
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
  .hot-area {
    text-align: center;
    font-size: 14px;
    height: 1.8rem;
    line-height: 1.8rem;
  }
   .hot-title  {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hot-title >span:nth-child(1) {
    margin-right: .4rem;
    background: #d74226;
    color: #fff;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
</style>