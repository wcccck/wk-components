import {Tab, Tabs} from "../components/Tabs/Tabs";
import {defineComponent} from "vue";
export const TabsExample = defineComponent({
  setup(props){
    return()=> <div style={{height:100+'%'}}>
      <Tabs activeIndex={2}>
        <Tab title={'首页'}>你麻痹</Tab>
        <Tab title={'个人'}>草泥马</Tab>
        <Tab title={'设置'}>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test</h1><h1>test1</h1>
        </Tab>
      </Tabs>
    </div>
  }
})