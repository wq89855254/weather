<template>
    <div class="container">
        <ul class="manageList">
            <router-link to="/historyCase"><li><img src="./imgs/manage1.png" alt=""></li></router-link>
            <router-link to="/historySearch"><li><img src="./imgs/manage5.png" alt=""></li></router-link>
            <router-link to="/msite"><li><img src="./imgs/manage2.png" alt=""></li></router-link>
            <router-link to="/msite"><li><img src="./imgs/manage3.png" alt=""></li></router-link>
            <router-link to="/msite"><li><img src="./imgs/manage4.png" alt=""></li></router-link>

        </ul>
    </div>
</template>

<script>
export default {
    

}
</script>

<style lang="stylus" scoped>
    .container
       
       .manageList
            height 100% 
            padding 0 50px
            margin 150px auto 0
            display flex
            justify-content space-around
            li
                cursor pointer

</style>


