import {defineComponent,defineProps} from "vue";
import Icon from '../icon/icon'
import classes from "./button.module.scss";

export default defineComponent({
  props:{
    icon:{
      type:String
    },
    color:{
      type:String,
      default:"blue"
    }

  },
  setup(props, {slots}){
    return ()=>{
      // console.log(slots.footer)
      return <span>
        <button class={[classes.button,classes[props.color]]}>
          {slots.default?.()}
          {props.icon?  <Icon name={props.icon} size={'1.7rem'}></Icon> : ''}
        </button>
      </span>

    }
  }
})