import {defineComponent} from "vue";
import {TimePick} from "../components/TimePick/TimePick";
export const TimePickExample = defineComponent({
  setup(props,context){
    return ()=>{
      return <div >
        <TimePick></TimePick>
      </div>
    }
  }
})