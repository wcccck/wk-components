import {defineComponent,PropType} from "vue";
import classes from './button.module.scss'
import Icon from "../../icon/icon";
import button from "../../button/button";
enum Type{
  primary='primary',
  info='info',
  danger = 'danger'
}
export const Button = defineComponent({
  props:{
    btnType:{
      type:String,
      // default:"primary"
      required:true
    },
    icon:{
      type:String,
    },
    disable:{
      type:Boolean,
      default:false
    },
    btnSize:{
      type:String,
      default:"max"
    },
    loading:{ // 加载中
      type:Boolean,
      // default:false
    }
    // onClick:{
    //   type:Function,
    // }
  },
  setup(props,context){
    const {slots,emit} = context
    return ()=>{
      return <button onClick={(e)=>{
        emit('myclick',e)
        // props.onClick?.()
      } } disabled={props.disable} class={[classes.container,classes[props.btnType]]} style={{fontSize:'17px'}}>

        {props.loading?'': props.icon? <Icon name={props.icon} size={'30px'}></Icon> : ''}
        {props.loading?<loading/>:slots.default?.()}
      </button>
    }
  }

})

const loading = defineComponent({
  setup(props){
    return ()=>{
      return <span class={classes.loading}></span>
    }
  }
})