import {computed, defineComponent, onMounted, ref} from "vue";
import classes from './TimePick.module.scss'

import {debounce} from "../../utils";

export const TimePick = defineComponent({
  props:{
    time:String // 初始化时间位置
  },
  setup(props,context){
    const {slots} = context
    const {emit} = context
    const year = ref(0)

    return ()=>{
      return <div class={classes.TimePick}>
        <timeTitle></timeTitle>
        <clickTime onGetYear={debounce((item=>{
          // console.log(item)
          year.value = item
        }),600)}></clickTime>
        <div>year:{year.value}</div>
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
    const HourScroll = function (e:any){
      const currentTop = e.target.scrollTop //首先记录当前出发时的位置
      setTimeout(() => {
        if (e.target.scrollTop === currentTop) { //如果300毫秒后仍相同 就认为停止滚动了
          //在此调用自动校准的方法
          autoFix(e, Math.round(currentTop / 30) *30, currentTop)
        }
      }, 300)
      // console.log( )
      const {emit} = context
      emit('getYear',(e.target.scrollTop + 120) / 30)
      // console.log(Math.round(currentTop / 30) *30)
    }
    function autoFix (e:any, top:number, beginTop:number) {
      let timer = setInterval(() => {
        if (Math.floor(e.target.scrollTop) > top) { // 当前scroll 四舍 之后 与
          if (beginTop < e.target.scrollTop) window.clearInterval(timer) // 防止矫正位置时再次滚动导致回滚距离变大
          --e.target.scrollTop
        } else if (Math.floor(e.target.scrollTop) < top) {
          ++e.target.scrollTop
        } else {
          // 相等
          window.clearInterval(timer)
        }
      }, 1000 / 60)
    }

    return ()=>{
      return <div class={classes.TimeSelect}>
        <div  class={classes.hour} onScroll={HourScroll}>
          {[...new Array(40)].map((item,index)=>{
            return <div class={classes.item}>
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