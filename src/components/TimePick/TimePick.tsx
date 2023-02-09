import {defineComponent} from "vue";
import classes from './TimePick.module.scss'
export const TimePick = defineComponent({
  props:{
    time:String // 初始化时间位置
  },
  setup(props,context){
    const {slots} = context
    return ()=>{
      return <div class={classes.TimePick}>
        <timeTitle></timeTitle>
        <clickTime></clickTime>
      </div>
    }
  }
})
const timeTitle = defineComponent({
  setup(props,context){
    return ()=>{
      return <div class={classes.TimeTitle}>
        <button class={classes.cancel}>取消</button>
        <span class={classes.clickTime}>选择时间</span>
        <button class={classes.confirm}>确认</button>
      </div>
    }
  }
})

const clickTime = defineComponent({
  setup(props,context){
    return ()=>{
      return <div class={classes.TimeSelect}>
        <div onTouchstart={(e)=>{console.log(e)} } onTouchmove={(e)=>{console.log(e)}} onTouchend={(e)=>{console.log(e)} } draggable={true} class={classes.hour}>
          {[...new Array(24)].map((item,index)=>{
            return <div>
              {index}
            </div>
          })}

        </div>
        <div class={classes.min}>
          {[...new Array(24)].map((item,index)=>{
            return <div>
              {index}
            </div>
          })}
        </div>
        <div></div>
        <div class={classes.nowClick}></div>
      </div>
    }
  }
})