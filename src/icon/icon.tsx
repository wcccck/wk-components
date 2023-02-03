import {computed, defineComponent} from "vue";

export default defineComponent({
  props:{
    prefix:{
      type:String,
      default:"icon"
    },
    name:{
      type:String,
      required:true
    },
    color:{
      type:String,
      default:"#333"
    },
    size:{
      type:String,
      default:"3em"
    }


  },
  setup(props){
    const symbolId = computed(()=> `#${props.prefix}-${props.name}`)
    return ()=> <svg aria-hidden="true" class="svg-icon" width={props.size} height={props.size}>
                    <use xlink:href={symbolId.value} rel="external nofollow"  fill={props.color} />
                </svg>
  }

})