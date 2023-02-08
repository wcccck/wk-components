import {defineComponent, ref, watch} from "vue";
import {List} from "../components/List/List";
export  const ListExamples = defineComponent({
  setup(){
    const CardNumber = ref(4)
    const CardArr = ref<Array<number>>([])
    const Loading = ref(true)

    const init = function (){
      // console.log('push')
      for(let i = 0;i<CardNumber.value;i++){
        CardArr.value.push(i)
      }
    }

    init()
    return ()=>{


      return <div>
        <List onBottom={()=>{
          Loading.value = true
          const p = new Promise(resolve => {
            setTimeout(()=>{
              resolve(1)
            },1500)
          })
          p.then(res=>{
            init()
          }).finally(()=>{
            Loading.value= false
          })
          // 模拟数据加载

        } } loading={Loading.value}>

          {CardArr.value.map((item,index)=>{
            return <Card>{index}</Card>
          }) }
        </List>
      </div>
    }
  }
})

const Card = defineComponent({
  setup(_,{slots}){
    return ()=><div style={{width:100 +'%',backgroundColor:"skyblue",height:"100px",marginTop:10+'px'}}>
      {slots.default?.()}
    </div>
  }
})