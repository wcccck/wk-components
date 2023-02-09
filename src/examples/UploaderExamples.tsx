import {defineComponent} from "vue";
import {Uploader} from "../components/Uploader/Uploader";

export const UploaderExamples = defineComponent({
  setup(props,context){
    return ()=>{
      return <Uploader></Uploader>
    }
  }

})
