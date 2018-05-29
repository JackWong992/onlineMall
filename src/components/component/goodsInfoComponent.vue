<template>
  <div class="goods-info">
    <div class="goods-image">
        <img v-lazy="goodsImage" width="90%" />
    </div>
    <div class="goods-name">{{goodsName}}</div>
    <div class="goods-price">￥{{goodsPrice | moneyFilter }} <span class="good-mallprice">￥{{goodMallPrice}}</span></div>
    </div>
</template>

<script>
  import {toMoney} from '@/filter/moneyFilter.js'
  
  export default {
    props:['goodsImage','goodsName','goodsPrice','goodMallPrice'],
    filters:{
        moneyFilter(money){
            return toMoney(money)
        }  
    },
  }
</script>

<style scoped>
  .goods-name{
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap; 
    color: #ef7d7d;
    }
    .goods-price {
      text-align: left;
      padding-left: 1rem;
      color: #c8461f;
    }
    .good-mallprice {
      color: #ddd;
      text-align: right;
      font-size: 12px;
      margin-left: 3.5rem;
      text-decoration: line-through;
    }
</style>