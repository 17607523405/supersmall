//解决refresh函数多次刷新问题，利用防抖函数debounce
export function debounce(func,delay){
  let timer=null
  return function (...args) {
    if (timer)clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }

}
