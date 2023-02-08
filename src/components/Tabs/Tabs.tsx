import {defineComponent, PropType, Ref, ref, provide, inject, computed} from "vue";
import classes from './Tabs.module.scss'
import Icon from "../../icon/icon";


export const Tabs = defineComponent({
  props:{
    activeIndex:{
      type:Number
    },

  },
  setup(props,context){
    const {slots} = context

    const activeIndex = ref(props.activeIndex || 0)
    const tabs = ref([])
    provide('activeIndex',activeIndex) // 注入活跃对象
    provide('Tabs',tabs)
    return ()=>{
      const TabArr = slots.default?.().map((item,index)=>{
        if(!item.props){
          item.props = {}
        }
        item.props.index = index
        return item
      })
      return <div class={classes.Tabs}>
        {/*{slots.default?.()}*/}
        {TabArr}
        <TabsMenu></TabsMenu>
      </div>
    }
  }
})

export const Tab = defineComponent({
  props:{
    title:{
      type:String,
      required:true
    },
    index:{
      type:Number
    }
  },
  setup(props,{slots}){
    const activeIndex = inject('activeIndex') as Ref<number>
    const tabs = inject('Tabs') as Ref<Array<any>>
    tabs.value.push({title:props.title,index:props.index})
    return()=>{
      return <div class={classes.Tab} style={{display:activeIndex.value === props.index ? 'block' : 'none',overflow:'unset'}}>
        {slots.default?.()}
      </div>
    }
  }
})

const TabsMenu = defineComponent({
  setup(){
    return ()=>{
      const tabs = inject("Tabs") as Ref<Array<any>>
      const activeIndex = inject('activeIndex') as Ref<number>
      return <ul class={classes.TabsMenu}>
        {tabs.value.map(item=>{
            return <span onClick={()=>{activeIndex.value = item.index} } class={activeIndex.value === item.index ? classes.activeMenuBtn :''}>{item.title}</span>
        })}
      </ul>


    }
  }
})