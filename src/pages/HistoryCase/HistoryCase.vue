<template>
    <div class="container">
        <div class="head">
            <div></div>
            <div class="imgWrap">
                <img class="save_img" src="./imgs/historySave.png" alt="">
            </div>
            <div class="back" @click="$router.back()">
                <img src="./imgs/back.png" alt="">
                <span>返回上级</span>
            </div>
        </div>
        <div class="saveFile">
            <form class="form">
                <div class="data wraper">
                    <label for="">开始日期:</label>
                        <input type="text">
                    <label for="">结束日期:</label>
                        <input type="text">
                </div>
                <div class="productType wraper">
                    <label for="">产品类型:</label>
                        <span class="choose">点击选择</span>
                </div>
                <div class="weatherType wraper">
                    <label for="">天气类型:</label>
                        <ul class="typeList">
                            <li><input type="checkbox">冰雹</li>
                            <li><input type="checkbox">大风</li>
                            <li><input type="checkbox">雾霾</li>
                            <li><input type="checkbox">强降水</li>
                            <li><input type="checkbox">雷暴大风</li>
                            <li><input type="checkbox">全选</li>
                        </ul>
                </div>
                <div class="weatherSystem wraper">
                    <label for="">天气系统:</label>
                        <ul class="systemList">
                            <li><input type="checkbox">高气压</li>
                            <li><input type="checkbox">低气压</li>
                            <li><input type="checkbox">高压脊</li>
                            <li><input type="checkbox">低压槽</li>
                            <li><input type="checkbox">气旋</li>
                            <li><input type="checkbox">反气旋</li>
                            <li><input type="checkbox">切变线</li>
                            <li><input type="checkbox">雷暴</li>
                            <li><input type="checkbox">雹暴</li>
                            <li><input type="checkbox">热带云团</li>
                            <li><input type="checkbox">冷槽</li>
                            <li><input type="checkbox">暖脊</li>
                            <li><input type="checkbox">龙卷</li>
                            <li><input type="checkbox">飑线</li>
                            <li><input type="checkbox">全选</li>
                        </ul>
                </div>
                <div class="explain wraper">
                    <label for="">归档说明:</label>
                        <input type="text" placeholder="选填">
                </div>
            </form>
            <div class="save">
                存档
            </div>
        </div>
        <div class="historyFile">
            <div class="history_head">历史存档列表</div>
            <table class="table">
                <thead>
                     <tr>
                        <th class="center">序列</th>
                        <th class="center">开始时间</th>
                        <th class="center">结束时间</th>
                        <th class="center">产品类型</th>
                        <th>天气类型</th>
                        <th>天气系统</th>
                        <th>说明</th>
                        <th>保存时间</th>
                     </tr>
                </thead>
                 <tbody>
                      <tr v-for="(a) in [1,1,1,1]">
                            <td class="num center">1</td>
                            <td class="beginDate center">2019-01-15 14:00</td>
                            <td class="endDate center">2019-01-18 14:00</td>
                            <td class="lookDetail center"><span>查看详情</span></td>
                            <td class="weatherType">冰雹/大风/强降水</td>
                            <td class="weatherSystem">高气压/高压脊/气旋/切边线</td>
                            <td class="explain">无</td>
                            <td class="saveDate">2019-01-25 12：04</td>
                      </tr>
                </tbody>
            </table> 
        </div>
        <div class="pages">
            <span class="prePage"> < </span>
            <span class="nextPage"> > </span>
            前往<input class="toPage" value=1>页
        </div>
        <!-- 遮罩 -->
        <div class="shade"></div>
        <!-- 选择产品类型 -->
        <div class="checkProduct">

            <div class="title">请选择产品类型</div>
            <ul class="productList">
                <li>
                    <!-- 一级 -->
                    <div class="first_level">
                        <img src="./imgs/jian.png" alt=""> <span class='product_type'>实况</span>  <img src="./imgs/emptBlock.png" alt="">
                        <!-- 二级 -->
                        <div class="second_level">
                            <div>
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>强天气</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>云图</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>自动站</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                            <!-- 三级 -->
                            <div class="three_level">
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>雷达拼图</span><img src="./imgs/emptBlock.png" alt="">
                                 <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>PUP拼图</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                                <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>SWAN拼图</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                                <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>雷达特征量</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <!-- 一级 -->
                    <div class="first_level">
                        <img src="./imgs/jian.png" alt=""> <span class='product_type'>监测</span>  <img src="./imgs/emptBlock.png" alt="">
                        <!-- 二级 -->
                        <div class="second_level">
                            <div>
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>强天气</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>自动站</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>闪电</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                             <!-- 三级 -->
                            <div class="three_level">
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>卫星</span><img src="./imgs/emptBlock.png" alt="">
                                 <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>时间累积次数</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                                <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>逐小时或30分</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>雷达</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>风廓线</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                           
                        </div>
                    </div>
                    
                </li>
                 <li>
                    <!-- 一级 -->
                    <div class="first_level">
                        <img src="./imgs/jian.png" alt=""> <span class='product_type'>监测</span>  <img src="./imgs/emptBlock.png" alt="">
                        <!-- 二级 -->
                        <div class="second_level">
                            <div>
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>强天气</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>自动站</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>闪电</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                             <!-- 三级 -->
                            <div class="three_level">
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>卫星</span><img src="./imgs/emptBlock.png" alt="">
                                 <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>时间累积次数</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                                <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>逐小时或30分</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>雷达</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>风廓线</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                           
                        </div>
                    </div>
                    
                </li>
                 <li>
                    <!-- 一级 -->
                    <div class="first_level">
                        <img src="./imgs/jian.png" alt=""> <span class='product_type'>监测</span>  <img src="./imgs/emptBlock.png" alt="">
                        <!-- 二级 -->
                        <div class="second_level">
                            <div>
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>强天气</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>自动站</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>闪电</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                             <!-- 三级 -->
                            <div class="three_level">
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>卫星</span><img src="./imgs/emptBlock.png" alt="">
                                 <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>时间累积次数</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                                <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>逐小时或30分</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>雷达</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>风廓线</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                           
                        </div>
                    </div>
                    
                </li>
                 <li>
                    <!-- 一级 -->
                    <div class="first_level">
                        <img src="./imgs/jian.png" alt=""> <span class='product_type'>监测</span>  <img src="./imgs/emptBlock.png" alt="">
                        <!-- 二级 -->
                        <div class="second_level">
                            <div>
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>强天气</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>自动站</span><img src="./imgs/emptBlock.png" alt="">
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>闪电</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                             <!-- 三级 -->
                            <div class="three_level">
                                <img src="./imgs/jian.png" alt=""><span class='product_type'>卫星</span><img src="./imgs/emptBlock.png" alt="">
                                 <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>时间累积次数</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                                <div>
                                    <img src="./imgs/jian.png" alt=""><span class='product_type'>逐小时或30分</span><img src="./imgs/emptBlock.png" alt="">
                                </div>
                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>雷达</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                            <div>
                                <img src="./imgs/unfold.png" alt=""><span class='product_type'>风廓线</span><img src="./imgs/emptBlock.png" alt="">

                            </div>
                           
                        </div>
                    </div>
                    
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
        .head
            display flex
            justify-content space-between
            height 64px
            line-height 64px
            border 1px solid #000
            .imgWrap
                .save_img
                    height 25px
                    vertical-align middle 
            .back
                font-size 13px
                margin-right 30px
                img
                    height 21px
                    vertical-align middle
                    cursor pointer
                span 
                    cursor pointer
        .saveFile
            width 1488px
            height 293px
            margin 0 auto
            border-radius 15px
            background #f7f7f7
            box-shadow 1px 1px 3px 1px #d0d0d0
            .form
                .wraper
                    position relative
                    height 47px
                    line-height 47px
                    padding-left 20px
                    &:not(:last-child)::before
                        position absolute
                        top 100%
                        left 85px
                        width 90%
                        height 1px
                        content ''
                        background #e9e9e9
                    label 
                        font-size 13px
                        color #43578c
                        margin-right 10px
                .data
                    label:nth-of-type(2)
                        margin-left 10px
                .productType
                    .choose
                        height 26px
                        line-height 26px
                        text-align center
                        padding 3px 7px
                        font-size 12px
                        border-radius 3px
                        border 1px solid #2275db
                        background linear-gradient(#72b6fd,#3a90e7)
                        color #fff

                .weatherType
                    display flex
                    .typeList
                        display flex
                        align-items center
                        li
                            height 26px
                            line-height 26px
                            padding 0 11px
                            margin-right 7px
                            border 1px solid #dde8f7
                            border-radius 5px
                            background:linear-gradient(#edf1fc,#dbe7f7)
                            font-size 13px
                            color #7f807b
                            input
                                vertical-align middle
                .weatherSystem
                    display flex
                    .systemList
                        display flex
                        align-items center

                        li
                            height 26px
                            line-height 26px
                            padding 0 11px
                            margin-right 7px
                            border 1px solid #dde8f7
                            border-radius 5px
                            background:linear-gradient(#edf1fc,#dbe7f7)
                            font-size 13px
                            color #7f807b
                            input
                                vertical-align middle
                            &:last-child
                                border none
                                background:#f7f7f7
                                

                .explain
                    input 
                        width 60%
                        height 39px
                        border 1px solid #d0d0d0
                        padding-left 5px
            .save
                width 91px
                height 28px
                line-height 28px
                text-align center
                margin 14px auto
                cursor pointer
                border-radius 16px
                background linear-gradient(#64b1f9,#3492ea)
                color #ffffff

        .historyFile
            width 1488px
            margin 0 auto
            .history_head
                height 50px
                line-height 70px
                text-align center
                font-size 12px
                color #6c6c6c
            .table
                width 100%
                border 1px solid #e7e7e7
                thead
                    th
                        border-bottom 1px solid #e7e7e7
                        text-align left
                        height 30px
                        line-height 30px
                        color #2b4c6f
                        font-size 14px
                        background linear-gradient(#d7e7f7,#d6e6f6)
                        &:not(.center)
                            padding-left 30px
                        &.center
                            text-align center

                tbody
                    td  
                        border-bottom 1px solid #e7e7e7
                        height 34px  
                        line-height 34px
                        text-align left
                        color #575757
                        font-size 12px
                        overflow hidden
                        &:not(.center)
                            padding-left 30px
                        &.center
                            text-align center
                        &.lookDetail
                            color #556386
                            span 
                                display inline-block
                                border 1px solid
                                height 24px
                                line-height 24px
                                border 1px solid #c6cddf
                                border-radius 5px
                                padding 0 10px
                                background linear-gradient(#f3f3f5,#deebf1)
        .pages
            width 190px
            margin 20px auto 0
            color #606165
            font-size 13px
            .prePage,.nextPage
                font-size 14px
                color #c2d2e1
                margin-right 30px
                cursor pointer
            .toPage
                display:inline-block
                width 45px
                height 28px
                line-height 28px
                border 1px solid #dcdfe6
                border-radius 5px
                margin 0 5px
                text-align center
        
        
        .checkProduct
            display none
            position fixed
            top 66px
            left 15%
            z-index 5
            
            // width 1290px
            // width auto 
            height 570px
            padding 0 15px
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
                li
                    padding 16px 20px 0 8px
                    height 429px
                    border-radius 5px
                    border 1px solid #dedede
                    margin-left 10px
                    background-color #fff
                    div
                        margin 5px 0
                        .second_level
                            div
                                padding-left 15px
                        .three_level
                            div
                                padding-left 30px
                        .product_type
                            margin 0 5px
                        img
                            vertical-align middle
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
        .shade
            display:none
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            background rgba(0,0,0,.6)
            z-index 2
</style>        
      
