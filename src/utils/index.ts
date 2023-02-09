export function throttle(Fn:Function,time:number){
  let flag:boolean = true;
  let args = Fn.arguments
  let timer :any = 0;
  return function (){
    if(flag){
      Fn(...args)
      flag = false
      timer = setTimeout(()=>{
        flag = true
      },time)
    }
  }
}

export function debounce(Fn: (item:any) => void, time: number){
  let timer: NodeJS.Timeout  ;
  return function (){

    timer && clearTimeout(timer)
    timer = setTimeout(()=>{
      // debugger
      Fn(...arguments)
    },time)
  }
}


// let n = throttle(()=>{
//   console.log(1)
// },1000)
// for (let i = 0; i < 10; i++) {
//   n()
// }
// export default {}