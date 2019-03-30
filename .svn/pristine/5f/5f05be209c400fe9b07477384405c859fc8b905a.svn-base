<template>
    <div class="container">
        <div class="centerCont">
            <div class="equipNav">
                <div class="imgWrap">

                    <img src="../../assets/images/header_Logo.png" alt="">
                </div>

                <ul class="btnList">

                    <li :class="{active:$route.path.includes('auto')}">
                        <p @click="toMap('/msite')">自动气象站</p>
                    </li>
                    <li :class="{active:$route.path.includes('others')}">
                        <p @click="toMap('others')">其他设备汇总</p>
                    </li>
                    <li :class="{active:$route.path.includes('gnss')}" class="child">
                        <p @click="toMap('gnss')">GNSS/MET</p>
                    </li>
                    <li :class="{active:$route.path.includes('citysView')}" class="child">
                        <p @click="toMap('citysView')">大城市观测</p>
                    </li>
                    <li :class="{active:$route.path.includes('weatherRadar')}" class="child">
                        <p @click="toMap('weatherRadar')">天气雷达</p>
                    </li>
                    <li :class="{active:$route.path.includes('atmospheric')}" class="child">
                        <p @click="toMap('atmospheric')">大气成分</p>
                    </li>
                    <li :class="{active:$route.path.includes('wind')}" class="child">
                        <p @click="toMap('wind')">风廓线</p>
                    </li>
                    <li :class="{active:$route.path.includes('soil')}" class="child">
                        <p @click="toMap('soil')">土壤成分</p>
                    </li>
                </ul>
                <div class="nav_bottom">
                    <img src="../../assets/images/nav_bottom.png" alt="">
                </div>
            </div>
            <div class="mapShow">
                <div class="mapBox">
                    <router-view/>
                </div>
            </div>
            
        </div>
        
    </div>
   
</template>
<script>
export default {
    data(){
        return{
            computerSize:0
        }
    },
    mounted(){
        this.computerSize = document.documentElement.clientHeight - 66
    },
    methods:{
        toMap(map){
            this.$router.push(map)
          
        }
    }
}
</script>
<style scoped>
    .container{
        width: 100%;
        background-color:#f8f8f8;
        background-image: url('../../assets/images/header_bottom.png');
        background-repeat: no-repeat;
        background-position:8px 100%; 
    }
    .container .centerCont{
       display: flex;
       width: 85%;
       margin: 0 auto;
       overflow: hidden;
        
    }
    
    .container .centerCont .equipNav{
        width: 24%;
    }
    /* .container .centerCont .equipNav .imgWrap{
    }
    
    .container .centerCont .equipNav .btnList{
    } */
    .container .centerCont .equipNav .btnList li{
        position: relative;
        font-size: 14px;
        height: 40px;
        margin-left:60px ;
        margin-bottom: 12px;
        color:grey;
        background:url('../../assets/images/btn.png') no-repeat;
    }
    .container .centerCont .equipNav .btnList li.active{
        background:url('../../assets/images/btn_active.png') no-repeat;
        color:white;

    }
    .container .centerCont .equipNav .btnList li.child{
        margin-left: 90px;
        background:url('../../assets/images/btn_child.png') no-repeat;
    }
    .container .centerCont .equipNav .btnList li.child.active{
        background:url('../../assets/images/btn_child_active.png') no-repeat;
        color:white;

    }
    .container .centerCont .equipNav .btnList li p{
        position: absolute;
        width: 100%;
        left: 48px;
        top: 13px;
        cursor: pointer;

    }
     .container .centerCont .equipNav .nav_bottom {
         width: 100%;
        margin-top: -22px;
     }
     .container .centerCont .equipNav .nav_bottom img{
         width: 100%;
         height: 100%;
     }

    .container .centerCont .mapShow{
        position: relative;
        z-index: 2;
        width: 80%;

        
    }
    .container .centerCont .mapShow .mapBox{
        box-sizing: border-box;
        width: 90%;
        margin: 0 auto;
    }
    
</style>
