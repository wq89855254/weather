import Vue from 'vue'
import Router from 'vue-router'

//综合
import Msite from '../pages/Msite/Msite'
import AutoMatic from '../pages/Msite/Maps/AutoMatic.vue'
import Others from '../pages/Msite/Maps/Others.vue'
import Gnss from '../pages/Msite/Maps/Gnss.vue'
import CitysView from '../pages/Msite/Maps/CitysView.vue'
import WeatherRadar from '../pages/Msite/Maps/WeatherRadar.vue'
import Atmospheric from '../pages/Msite/Maps/Atmospheric.vue'
import Wind from '../pages/Msite/Maps/Wind.vue'
import Soil from '../pages/Msite/Maps/Soil.vue'

//管理
import Manage from '../pages/Manage/Manage.vue'
import HistoryCase from '../pages/HistoryCase/HistoryCase.vue'
import HistorySearch from '../pages/HistorySearch/HistorySearch.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Msite,
      // redirect: '/msite/auto'
      redirect:'/Manage'

    },
    //主页
    {
      path: '/msite',
      component: Msite,
      redirect: '/msite/auto',
      children: [
        {
          path: '/msite/auto',
          component: AutoMatic
        },
        {
          path: '/msite/others',
          component: Others
        },
        {
          path: '/msite/gnss',
          component: Gnss
        },
        {
          path: '/msite/citysView',
          component: CitysView
        },
        {
          path: '/msite/weatherRadar',
          component: WeatherRadar
        },
        {
          path: '/msite/atmospheric',
          component: Atmospheric
        },
        {
          path: '/msite/wind',
          component: Wind
        },
        {
          path: '/msite/soil',
          component: Soil
        }
      ]
    },
    //管理
    {
      path:'/manage',
      component:Manage
    },
    //历史个例存档
    {
      path:'/historyCase',
      component:HistoryCase
    },
    //历史个例查询
    {
      path:'/historySearch',
      component:HistorySearch
    }
  ]
})
