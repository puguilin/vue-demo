import About from '@/components/About.vue'  //引入组件
import Home from '@/components/Home.vue' 
import Article from '@/components/Article.vue' 
import News from '@/components/News.vue' 
import Dtly from '@/components/Dtly.vue' 
import StoreTest from '@/components/StoreTest.vue' 
import MutationsTest from '@/components/MutationsTest.vue' 
import ActionsTest from '@/components/ActionsTest.vue' 
import Demao1 from '@/components/vueBasc/Demao1.vue' 
import Demao02 from '@/components/vueBasc/Demao02.vue' 
import Demao03 from '@/components/vueBasc/elmentBasc/Demao03.vue' 
import Demao04 from '@/components/vueBasc/elmentBasc/Demao04input.vue' 
import Demao05Select from '@/components/vueBasc/elmentBasc/Demao05Select.vue' 
import Demao06Cascader from '@/components/vueBasc/elmentBasc/Demao06Cascader.vue' 
import Demao07Switch from '@/components/vueBasc/elmentBasc/Demao07Switch.vue' 
import Demao08Slider from '@/components/vueBasc/elmentBasc/Demao08Slider.vue' 
import Demao09DateTime from '@/components/vueBasc/elmentBasc/Demao09DateTime.vue' 
import Demao10Upload from '@/components/vueBasc/elmentBasc/Demao10Upload.vue' 
import Demao11Form from '@/components/vueBasc/elmentBasc/Demao11Form.vue' 



//路由列表
const routes = [

    {
        path:'/',              //当访问根路径的时候
        redirect:'/home'        // 重定向到redirect配置路径
     },
     {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    }
    ,
    {
        name: 'article',
        path: '/article',
        component: Article, 
        // 嵌套路由  首先需要注意，当一个父组件有多个子组件的时候，要在template里面加上一个唯一的根标签。如图中的id=articlee。
        children:[
    
            {
                name: 'news',
                path: 'news',
                component: News
            },
            {
                name: 'home',
                path: 'home',
                component: Home
            }

        ]
    },
     //动态路由
    {
        name: 'dtly',  
        path: '/dtly/:id(\\d+)',
        component: Dtly

        /**
         *   id?                            参数id可以传，也可以不传。即/dtly/1和/dtly都匹配这个路由规则
         *  id([0-9])                       id 为1位0到9的数字时才能匹配
         *  id(\\d+)                        参数id必须传，并且id只能是数字                     /dtly/1 
         * 
         *  id(swq[0-9]{3})                 id 为 swq 开头加 3位0到9的数字时才能匹配           /id/swq333
         *  id(\\w\\d)                      id 为一个字母加一个数字时才能匹配                  /id/b0
         */
    },
    //store存储
    {
        name: 'store',
        path: '/store',
        component: StoreTest
    },
    {
        name: 'mutations',
        path: '/mutations',
        component: MutationsTest
    },
    {
        name: 'actions',
        path: '/actions',
        component: ActionsTest
    },
    {
        name: 'demao1',
        path: '/demao1',
        component: Demao1
    },
    {
        name: 'demao02',
        path: '/demao02',
        component: Demao02
    },
    {
        name: 'demao03',
        path: '/demao03',
        component: Demao03
    },
    {
        name: 'demao04',
        path: '/demao04',
        component: Demao04
    },
    {
        name: 'demao05',
        path: '/demao05',
        component: Demao05Select
    },
    {
        name: 'demao06',
        path: '/demao06',
        component: Demao06Cascader
    }
    ,
    {
        name: 'demao07',
        path: '/demao07',
        component: Demao07Switch
    },
    {
        name: 'demao08',
        path: '/demao08',
        component: Demao08Slider
    },
    {
        name: 'demao09',
        path: '/demao09',
        component: Demao09DateTime
    },
    {
        name: 'demao10',
        path: '/demao10',
        component: Demao10Upload
    },
    {
        name: 'demao11',
        path: '/demao11',
        component: Demao11Form
    }
    
    
];

export default routes



/**
 * Sensitive 与 strict 路由配置
 * 
 * 默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。
 * 例如，路由 /id 将匹配 /id/id/、甚至 /id/。
 * 这种行为可以通过 strict 和 sensitive 选项来修改，它们可以既可以应用在整个全局路由上，又可以应用于当前路由上：
 * 
 * 
 * 参考：https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html#sensitive-%E4%B8%8E-strict-%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE
 * 
 */