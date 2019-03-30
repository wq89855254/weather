<template>
    <div class="container">
        <div class="head_title">
            <div class="left_title">
                <img src="./imgs/history_search.png" alt="">
            </div>
            <div class="right_title">
                <ul class="product_list">
                    <li>产品类型</li>
                    <li class="filt"><span> <img src="./imgs/filt.png" alt=""> 筛选</span></li>
                    <li class="selected">已选:短期-多模式-NCEP-会商</li>
                </ul>
                 <ul class="date_list">
                    <li>1小时</li>
                    <li>5分钟</li>
                    <li class="area">
                        区域
                        <select name="" id="">
                            <option value="">全国</option>
                        </select>
                    </li>
                </ul>
            </div>
            
        </div>
        <!-- 历史个例查询 -->
        <div class="history_search">
            <div class="weather_info_search">
                <!-- 选择日期 -->
                <div class="date_search">
                    <h2 class="w_title">
                        <img src="./imgs/a1.png" alt="">
                    </h2>
                    <div class="date_group">
                        <div class="begintime">
                            <label for="">开始时间</label>
                            <input type="text">
                            <select name="" id="">
                                <option value="">16</option>
                            </select>
                        </div>
                        <div class="endtime">
                            <label for="">结束时间</label>
                            <input type="text">
                             <select name="" id="">
                                <option value="">18</option>
                            </select>
                        </div>
                      
                    </div>
                </div>
                <!-- 天气类型 -->
                <div class="weather_type">
                    <h2 class="w_title">
                        <img src="./imgs/a2.png" alt="">
                    </h2>
                    <ul class="weatherType_list">
                        <li class="active">
                            <input type="checkbox">冰雹
                        </li>
                        <li class="active">
                            <input type="checkbox">大风
                        </li>
                        <li>
                            <input type="checkbox">雾霾
                        </li>
                        <li>
                            <input type="checkbox">强降水
                        </li>
                        <li>
                            <input type="checkbox">雷暴大风
                        </li>
                    </ul>
                </div>
                <!-- 天气系统 -->
                <div class="weather_system">
                    <h2 class="w_title">
                        <img src="./imgs/a3.png" alt="">
                    </h2>
                    <div class="check">点击选择</div>
                    
                </div>
                <!-- 选择地区 -->
                <div class="region_check">
                    <h2 class="w_title">
                        <img src="./imgs/a4.png" alt=""> 
                        <input type="checkbox"><span class="checkall">全选</span>
                    </h2>
                    <ul class="region_list">
                        <li>
                            <img src="./imgs/nocheck.png" alt="">全国
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">华北
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">东北
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">华东
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">华南
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">西南
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">西北
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">青藏
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">新疆
                        </li>
                        <li>
                            <img src="./imgs/nocheck.png" alt="">近海
                        </li>
                        
                    </ul>
                </div>
                <!-- 查询 -->
                <div class="seach_info"> <img src="" alt=""> 查询</div>
            </div>

            <!-- 查询结果 -->
            <div class="weather_info_result">
                <div class="result_title">
                    <div></div>
                    <h2>共有<span class="result_count">18</span>条查询结果</h2>
                    <span class="click_check">点击下列选择</span>    
                </div>
                <table class="table" cellspacing="0">
                    <thead>
                         <tr>
                            <th >序号</th>
                            <th class="begin_head">开始/结束</th>
                            <th class="type_head">天气类型/天气系统</th>
                            <th class="explain_head">说明</th>
                         </tr>
                    </thead>
                     <tbody >
                        <tr>
                            <td class="center" rowspan="2" align='center'><span class="num">1</span></td>
                            <td class="beginDate">2018-12-30 14:00</td>
                            <td class="weatherType">冰雹</td>
                            <td class="explain" rowspan="2">全国范围</td>
                        </tr>
                        <tr>
                            <td class="endDate">2019-01-18 14:00</td>
                            <td class="weatherSystem">高气压/高压脊/气旋/切边线</td>
                        </tr>
                    </tbody>
                     <tbody >
                        <tr>
                            <td class="center" rowspan="2" align='center'><span class="num">2</span></td>
                            <td class="beginDate">2018-12-30 14:00</td>
                            <td class="weatherType">冰雹</td>
                            <td class="explain" rowspan="2">全国范围</td>
                        </tr>
                        <tr>
                            <td class="endDate">2019-01-18 14:00</td>
                            <td class="weatherSystem">高气压/高压脊/气旋/切边线</td>
                        </tr>
                    </tbody>
                    <tbody class="active">
                        <tr>
                            <td class="center" rowspan="2" align='center'><span class="num">3</span></td>
                            <td class="beginDate">2018-12-30 14:00</td>
                            <td class="weatherType">冰雹</td>
                            <td class="explain" rowspan="2">全国范围</td>
                        </tr>
                        <tr>
                            <td class="endDate">2019-01-18 14:00</td>
                            <td class="weatherSystem">高气压/高压脊/气旋/切边线</td>
                        </tr>
                    </tbody>
                    <tbody class="active">
                        <tr>
                            <td class="center" rowspan="2" align='center'><span class="num">3</span></td>
                            <td class="beginDate">2018-12-30 14:00</td>
                            <td class="weatherType">冰雹</td>
                            <td class="explain" rowspan="2">全国范围</td>
                        </tr>
                        <tr>
                            <td class="endDate">2019-01-18 14:00</td>
                            <td class="weatherSystem">高气压/高压脊/气旋/切边线</td>
                        </tr>
                    </tbody>
                    </table> 
            </div>
        </div>
        <!-- 地图展示 -->
        <div class="product_show">
            <div class="product_title"></div>
            <div class="map_show">
                <img src="./imgs/map1.png" alt="">
            </div>
        </div>

        <!-- 遮罩 -->
        <div class="shade"></div>
        <!-- 选择图片 -->
        <div class="checkProduct">

            <ul class="productList">
                <li>
                    <h2 class="title">请从下列已存档产品中选择</h2>
                    <div class="level_cont">
                        <!-- 一级 -->
                        <div class="first_level">
                            <img src="./imgs/jian.png" alt=""> <span class='product_type'>诊断</span>
                            <!-- 二级 -->
                            <div class="second_level">
                                <div  class="three_level">
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>高空</span>
                                    <!-- 三级 -->
                                    <div>
                                        <img src="./imgs/jian.png" alt=""><span class='product_type'>无层次</span><img src="./imgs/circle_blank.png" alt="">
                                    </div>
                                    <div>
                                        <img src="./imgs/jian.png" alt=""><span class='product_type'>等高面</span><img src="./imgs/circle_active.png" alt="">
                                    </div>
                                    <div>
                                        <img src="./imgs/jian.png" alt=""><span class='product_type'>等熵面</span><img src="./imgs/circle_blank.png" alt="">
                                    </div>
                                </div>
                                <div class="three_level">
                                    <img src="./imgs/jian.png" alt="" ><span class='product_type'>自动站</span>
                                    <!-- 三级 -->
                                    <div>
                                        <img src="./imgs/jian.png" alt="" ><span class='product_type'>站点</span><img src="./imgs/circle_blank.png" alt="">
                                    </div>
                                    <div>
                                        <img src="./imgs/jian.png" alt="" ><span class='product_type'>非站点</span><img src="./imgs/circle_blank.png" alt="">
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div class="level_cont">
                        <!-- 一级 -->
                        <div class="first_level">
                            <img src="./imgs/jian.png" alt=""> <span class='product_type'>短临</span>
                            <!-- 二级 -->
                            <div class="second_level">
                                <div  class="three_level">
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>客观预报</span>
                                    <!-- 三级 -->
                                    <div>
                                        <img src="./imgs/jian.png" alt=""><span class='product_type'>客观预报</span><img src="./imgs/circle_blank.png" alt="">
                                    </div>
                                    <div>
                                        <img src="./imgs/jian.png" alt=""><span class='product_type'>多模式集成</span><img src="./imgs/circle_blank.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="level_cont">
                        <!-- 一级 -->
                        <div class="first_level">
                            <img src="./imgs/jian.png" alt=""> <span class='product_type'>短期</span>
                            <!-- 二级 -->
                            <div class="second_level">
                                <div  class="three_level">
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>多模式预报</span>
                                    <!-- 三级 -->
                                    <div class="four_level">
                                        <img src="./imgs/jian.png" alt=""><span class='product_type'>NCEP</span>
                                        <!-- 四级 -->
                                        <div class="five_level">
                                            <img src="./imgs/jian.png" alt=""><span class='product_type'>综合图</span>
                                            <!-- 五级 -->
                                            <div>
                                                <img src="./imgs/jian.png" alt=""><span class='product_type'>会商</span><img src="./imgs/circle_blank.png" alt="">

                                            </div>
                                            <div>
                                                <img src="./imgs/jian.png" alt=""><span class='product_type'>通用</span><img src="./imgs/circle_blank.png" alt="">

                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    
                   
                </li>
                <li class="jiantou">
                    <img src="./imgs/jiantou.png" alt="">
                </li>
                <li class="child_choose">
                    <h2 class="title">选择子类</h2>
                    <ul>   
                        <li class="active">温度平流</li>
                        <li>涡度平流</li>
                        <li>散度</li>
                        <li>水汽通量散度</li>
                        <li>水汽通量大小</li>
                        <li>水汽通量U</li>
                        <li>水汽通量V</li>
                        <li>位势高度</li>
                        <li>湿位涡</li>
                        <li>湿位涡项1</li>
                        <li>湿位涡项2</li>
                        <li>垂直速度</li>
                        <li>位涡</li>
                        <li>比湿</li>
                        <li>相对湿度</li>
                        <li>全风速</li>
                        <li>温度</li>
                        <li>露点温度</li>
                        <li>露点温度差</li>
                        <li>位温</li>

                    </ul>
                </li>
                <li class="jiantou">
                    <img src="./imgs/jiantou.png" alt="">
                </li>
                <li class="picture_choose">
                    <h2 class="title">图片列表</h2>
                    <ul>
                        <li class="active">2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>
                        <li>2019032208.png</li>

                    </ul>
                </li>

            </ul>
            <div class="btn_group">
                <span class="confirm">确定</span>
                <span class="cancel">取消</span>
            </div>
            <div class="close">
                <img src="./imgs/close.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    

}
</script>
<style lang="stylus" scoped>
    .container
        background-image linear-gradient(to right,#d9e4f6,#dee7f8)
        overflow hidden
        &>.head_title
            padding-left 50px
            overflow hidden
            .left_title
                float left
                width 490px
            .right_title
                width 906px
                height 42.6px
                line-height 42.6px
                float left
                .product_list
                    float left
                    li
                        float left
                        font-size 12px
                        color: rgb( 44, 76, 112 )
                        &.filt
                            span    
                                display inline-block
                                width 81px
                                height 24px
                                margin 0 15px
                                line-height 24px 
                                text-align center
                                border-color: rgb( 98, 171, 246 );
                                border-radius: 12px;
                                color: rgb( 255, 255, 255 );
                                text-shadow: 0.5px 0.866px 2px rgb( 80, 138, 195 )
                                background-image:linear-gradient( 90deg, rgb(53,145,235) 0%, rgb(101,177,250) 100%);
                                img
                                    vertical-align middle
                .date_list
                    float right
                    li
                        float left
                        margin-left 10px
                        font-size 12px
                        color #515151
                        &.area
                            select
                                width 56px
                                height 23px
                                line-height 23px
                                border-radius 3px
                                border 1px solid #7b9cc2
                                font-size 11px
        .history_search 
            float left
            margin-left 50px
            box-sizing border-box
            padding 0 9px
            width 480px
            .weather_info_search
                border 1px solid #a6c1d6
                border-radius 3px
                background-image url('./imgs/search_top.png'),url('./imgs/search_foot.png')
                background-repeat no-repeat
                background-position top,bottom
                background-color #fff

                

                input 
                    vertical-align middle
                .w_title
                    height 40px
                    line-height 40px
                    text-align center
                    font-size 14px
                    font-weight 500
                    vertical-align middle
                    img
                        vertical-align middle
                        height 28px
                    .checkall
                        color #7f7f7f
                        font-size 14px
                .date_search
                    .date_group
                        display flex
                        justify-content space-around
                        .begintime,.endtime
                            display flex
                            label 
                                display inline-block
                                font-size 12px
                                line-height 19px
                                vertical-align middle
                                color #40598b
                                margin-right 3px
                            input 
                                width  97px
                                height 13px
                                margin-right 3px
                .weather_type
                    .weatherType_list
                        display flex
                        justify-content space-around
                        li
                            border 1px solid #ccdcf3   
                            padding 0 8px
                            height 26px
                            line-height 26px
                            color #737172
                            border-radius 5px
                            background linear-gradient(#f0f5fb 10%,#dbe7f7)
                            &.active
                                color #ffffff
                                background linear-gradient(#87b3f0 10%,#4c8deb)
                .weather_system
                    .check
                        width 90%
                        height 27px
                        margin 0 auto
                        line-height 27px
                        border 1px solid #d2d2d2
                        border-radius 8px
                        color #1958b5
                        padding-left 15px  
                // 选择地区    
                .region_check
                    .w_title
                        padding-left 45px
                    .region_list
                        width 90%
                        margin 0 auto
                        display flex
                        flex-wrap wrap
                        li
                            color #737373
                            font-size 14px
                            margin-right 20px
                            margin-bottom 5px
                            img 
                                vertical-align middle                            
                .seach_info
                    width 84px
                    height 28px
                    text-align center
                    line-height 28px
                    margin 15px auto
                    color #fff
                    border-radius 20px
                    background linear-gradient(#63abf7,#3692e9)

            .weather_info_result
                border 1px solid #a6c1d6
                border-radius 3px
                margin-top 13px
                background #fff
                padding 0 8px
                .result_title
                    display flex
                    justify-content space-between
                    height 39px
                    line-height 39px
                    color #57607f
                    h2
                        padding 0 0 0 87px
                        font-size 14px
                    .click_check
                        color #7f7f7f
                        font-size small
                .table
                    display block
                    width 100%
                    max-height 230px;
                    text-align left
                    overflow auto
                    thead
                        display block
                        width 100%
                        height 26px
                        line-height 26px
                        font-size 12px
                        background-color #d7e7f7
                     
                        th
                            padding-left 11px
                            &.type_head
                                padding-left 67px
                            &.explain_head
                                padding-left 67px

                    tbody
                        display block
                        height 57px
                        border 1px solid #e1e1e1
                        margin-top 6px
                        &.active
                            border-radius: 2px;
                            background-image:linear-gradient( 90deg, rgb(79,114,205) 0%, rgb(68,105,191) 20%, rgb(56,96,177) 50%, rgb(72,107,188) 85%, rgb(87,118,199) 100%);
                            td
                                color #fff
                                &.center
                                    .num
                                        background-color: rgb( 71, 116, 213 );
                                        color #fff



                        td
                            display table-cell
                            vertical-align middle
                            height 28px
                            font-size 13px
                            padding-left 10px
                            &.center
                               .num 
                                    display block
                                    width: 24px;
                                    height: 24px
                                    text-align center
                                    font-size: 12px;
                                    font-family: "Microsoft YaHei";
                                    color: rgb( 82, 82, 82 )
                                    line-height 24px
                                    border-radius 50%
                                    background-color: rgb( 215, 234, 255 )
        .product_show
            float left
            img
                height 640px
        .shade
            display:none
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            background rgba(0,0,0,.6)
            z-index 2


        .checkProduct
            display none
            position fixed
            top 66px
            left 25%
            z-index 5
           
            
            // width 1290px
            // width auto 
            padding 10px 15px 0
            background-color #eff2f5
            border-radius 5px
            .title
                height 46px
                line-height 46px
                text-align center
                boder 1px solid 
                font-size 14px
                color #3d3d3d
            .productList
                display flex
                color #303030
                font-size 14px
                &>li
                    min-height 500px
                    padding 16px 8px 0 8px
                    border-radius 5px
                    border 1px solid #dedede
                    margin-left 10px
                    background-color #fff
                    font-size 14px
                    color: rgb( 86, 86, 86 )
                    &.jiantou
                        background #eff2f5
                        border none
                        width 45px
                        &::after
                            content:''
                            display inline-block
                            height 100%
                            vertical-align middle
                        img
                            vertical-align middle
                    div
                        margin 5px 0
                        .second_level
                            div
                                padding-left 20px
                        
                        .product_type
                            margin 0 5px
                        img
                            vertical-align middle

                    .level_cont:not(:last-child)
                        border-bottom 1px solid #e8e8e8
                    &.child_choose
                        li
                            padding-left 10px
                            width: 208px;
                            height: 23px
                            line-height 23px
                            &.active
                                background-color: rgb( 212, 233, 253 );
                    &.picture_choose
                        li
                            padding-left 10px
                            width: 208px;
                            height: 23px
                            line-height 23px
                            &.active
                                background-color: rgb( 212, 233, 253 );
            .btn_group
                width 213px
                margin 20px auto
                span
                    display inline-block
                    width 90px
                    text-align center
                    height 30px
                    line-height 30px
                    border-radius 20px
                    font-weight bold
                    &.confirm
                        color #fff
                        background linear-gradient(#63b0f9,#3591eb)
                    &.cancel
                        background-color #e3e3e3
                        color #b8b8b8
                        margin-left 10px
            .close
                position absolute
                right -40px
                top 10px
</style>                    


