import {Button} from "../components/Button/button";
import {ref,defineComponent} from 'vue'
export const BtnExample = defineComponent({
  setup(){
    const loading = ref(false)
    const disable = ref(false)
    return ()=>{
      return <div style={{display:'flex',justifyContent:'center',height:'500px',alignItems:"center"}}>
        <Button btnType={'danger'} icon={'close'} onMyclick={()=>{
          console.log('cck btn click')
          loading.value = true
          disable.value = true
          setTimeout(()=>{
            loading.value = false
            disable.value = false
          },3000)
        }} disable={disable.value} loading={loading.value}>wk的按钮</Button>
      </div>
    }
  }
})