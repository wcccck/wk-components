import {defineComponent, h, PropType, ref, inject, provide, Ref} from "vue";
import {RouteRecordRaw, RouterLink, RouterView} from "vue-router";
import Button from './button/button'
import Icon from './icon/icon'
import classes from './App.module.scss'
export default defineComponent({
  props:{
    routes:{
      type:Array as PropType<RouteRecordRaw[]>,
      required:true
    }
  },
  setup(props){
    const width = window.innerWidth
    const height = window.innerHeight
    const showList = ref(false)
    provide('showList',showList)
    return ()=>{

      return <div style={{width:width+'px',height:height+'px'}}>
        <button class={classes.btn} onClick={()=>{
          showList.value = true
        }}>展开菜单</button>
        <RouterView></RouterView>
        <Menu routes={props.routes}></Menu>

        {/*<Icon name={'close'}></Icon>*/}
      </div>
    }
  }
})

const Menu = defineComponent({
  props:{
    routes:{
      type:Array as PropType<RouteRecordRaw[]>,
      required:true
    }
  },
  setup(props){
    const showList = inject('showList') as Ref<Boolean>
    // console.log(showList.value)
    return ()=>{

      return <div class={classes.menu} style={{display:showList.value ? 'block' : 'none',zIndex:10}}>
        <ul>
          {props.routes.map(item => {
            return <li>
              <RouterLink to={item.path}>{item.name}</RouterLink>
            </li>
          })}
        </ul>
        <button class={classes.btn} onClick={()=>{showList.value = false}}>收起菜单</button>
      </div>
    }
  }
})