import {defineComponent, ref} from "vue";

export const test = defineComponent({
  setup(props,context){
    const number = ref(0)
    // console.log(1)
    console.log(number.value + 'setup')
    // setTimeout(()=>{number.value = 2},1000)
    return ()=>{
      console.log(number.value + 'render')
      return <div>
        {number.value}
        <button onClick={()=>{
          number.value++
        }}> +</button>
      </div>
    }
  }
})