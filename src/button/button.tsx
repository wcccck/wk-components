import {defineComponent,defineProps} from "vue";
import Icon from '../icon/icon'
import classes from "./button.module.scss";
const onClick = function (e:MouseEvent){
  e.preventDefault()
}
export default defineComponent({
  // emits:['update:modelValue'],
  props:{
    icon:{
      type:String
    },
    color:{
      type:String,
      default:"blue"
    }

  },
  setup(props, {slots,emit}){
    const onClick = function (e:MouseEvent){
      emit('click',e)
    }
    const hhh = function (){
      emit('hhh',1)
    }

    return ()=>{
      console.log(props)
      return <button  class={[classes.button,classes[props.color]]} onClick={hhh}>
          {slots.foo2?.()}
          {props.icon?  <Icon name={props.icon} size={'1.7rem'}></Icon> : ''}
          {slots.foo?.()}
        </button>


    }
  }
})