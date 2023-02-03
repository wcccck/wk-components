import {defineComponent} from "vue";
import Button from './button/button'
import Icon from './icon/icon'
export default defineComponent({
  setup(){
    return ()=>{
      return <div>
        Hello I am app<br></br>
        <Button  icon={'zixun'}>
          默认插槽
        </Button>
        <Icon name={'close'}></Icon>
      </div>
    }
  }
})