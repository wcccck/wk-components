import {defineComponent,PropType} from "vue";
import classes from './button.module.scss'

export const Button = defineComponent({
  props:{
    type:{
      type:String,
      default:"primary"
    }
  },
  setup(props,context){
    const {slots} = context
    return ()=>{
      return <span class={[classes.container,classes[props.type]]}>{slots.default?.()}</span>
    }
  }

})