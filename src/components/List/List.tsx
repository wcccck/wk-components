import {defineComponent,onMounted, ref, watch} from "vue";
import classes from './List.module.scss'
export const List = defineComponent({
  props:{
    loading:{
      type:Boolean,
      default:false
    }
  },
  setup(props,ctx){
    const {emit} = ctx
    const BottomItem = ref<HTMLDivElement | null>(null)

    watch(BottomItem,()=>{
      if(!BottomItem){
        return
      }
      const callBack :IntersectionObserverCallback = (entries)=>{
        entries.forEach(item=>{
          item && (item.isIntersecting>=0.5) &&
          emit('bottom')
        })
      }
      const obj:IntersectionObserverInit = {
        root:null,
        threshold:0.5,
        // rootMargin:'100px'
      }
      const ob = new IntersectionObserver(callBack,obj)
      ob.observe(BottomItem.value!)
    })
    const {slots} = ctx
    return ()=>{
      return <div>

        {slots.default?.()}
        <div ref={BottomItem} style={{backgroundColor:'pink',width:"100%",height:'50px'}}></div>
        <Loading loading={props.loading}/>


      </div>
    }
  }
})

const Loading = defineComponent({
  props:{
    loading:{
      type:Boolean,
      default:false
    }
  },

  setup(props){
    let imgUrl = ref<string>('')
    let img = import('./mxb.gif')
    img.then(res=>{
      imgUrl.value = res.default
    })
    return()=>{

      console.log(img)
      return <div class={classes.Loading} style={{display:props.loading? "flex" :'none',zIndex:"10"}}>
        加载中
        <img src={imgUrl.value} style={{width:"100px"}} />
      </div>
    }
  }

})