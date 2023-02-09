import {defineComponent, ref} from "vue";
import classes from './Uploader.module.scss'
import * as events from "events";
import serve from '../../utils/http'

function sendImg(File:any){
  let ff = new FormData()
  ff.append("files",File)
  serve({
    headers:{
      "Context-Type":"multipart/form-data"
    },
    method:"POST",
    url:"/upload",
    data:ff
  }).then(res=>{
    console.log(res)
  })
}

// async function sendImg(file:any){
//   console.log(file)
//   const params = new FormData();
//   params.append('img',file)
//   const result = await serve({
//     url:'/api',
//     method:"post",
//     // params,
//     data:params,
//     headers:{
//       "Context-Type":"multipart/form-data"
//     }
//     // headers:['']
//   })
//   // console.log(result)
//   return result
// }
export const Uploader = defineComponent({
  setup(props,context){
    const {slots} = context
    const imgUrl = ref('')
    const Input = ref()
    const getFile = function(file:events){
      imgUrl.value = window.URL.createObjectURL(file.target.files[0])
      sendImg(file.target.files[0])
    }


    return ()=>{
      return <div class={classes.container}>
        <div class={classes.Input} onClick={()=>{
          Input.value.click()
        } }></div>
        <input ref={Input} type="file" onChange={getFile} style={{display:'none'}}/>
        <img class={classes.preview} style={{display:imgUrl.value? "block":'none' }} src={imgUrl.value} />
        <button onClick={()=>{

        } }>发送至服务器</button>
        {slots.default?.()}
      </div>
    }
  }
})