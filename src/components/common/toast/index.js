import Toast from "./Toast";
const obj={}

obj.install=function (Vue) {
  //1.创建组件构造器
  const toastcontrustor=Vue.extend(Toast)
  //2.根据组件构造器，可以创建一个新组件对象
  const toast=new toastcontrustor

  //3.将组件对象挂载到某一个元素上面
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是div,将Toast里面元素挂载到详情页上面
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast
}


export default obj
