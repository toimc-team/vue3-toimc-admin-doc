import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as s,c as o,b as e,e as i,w as l,d as t}from"./app.b3032eaf.js";const c={},m=e("h1",{id:"usewatermark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usewatermark","aria-hidden":"true"},"#"),t(" useWatermark")],-1),d=e("p",null,"\u7528\u4E8E\u63D0\u4F9B\u6C34\u5370\u80FD\u529B\u7684\u652F\u6301\u3002\u7B7E\u540D\u5982\u4E0B\uFF1A",-1),u=e("div",{class:"language-typescript ext-ts"},[e("pre",{class:"language-typescript"},[e("code",null,`useWatermark(
  appendEl: Ref<HTMLElement | null> = ref(document.body) as Ref<HTMLElement>
): {
  // \u8BBE\u7F6E\u6C34\u5370
  setWatermark: (options: WatermarkOptions) => void
  // \u6E05\u9664\u6C34\u5370
  clear: () => void
}

type WatermarkOptions = string | {
  // \u6C34\u5370\u6587\u5B57
  str?: string
  // \u6587\u5B57\u5927\u5C0F
  fontSize?: number
  // \u56FE\u7247\u6C34\u5370\u7684\u5730\u5740
  imgUrl?: string
  // \u6C34\u5370\u533A\u57DF\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u6C34\u5370\u6240\u5728\u5143\u7D20\u5BBD\u5EA6
  width?: number
  // \u6C34\u5370\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u6C34\u5370\u6240\u5728\u5143\u7D20\u9AD8\u5EA6
  height?: number
  // \u6C34\u5370\u4E4B\u95F4\u7684\u8DDD\u79BB
  gap?: 'small' | 'default' | 'large'
}
`)])],-1),_=t("\u4F7F\u7528\u8BF4\u660E\u53C2\u8003"),p=t("\u6C34\u5370");function h(f,k){const n=a("RouterLink");return s(),o("div",null,[m,d,u,e("p",null,[_,i(n,{to:"/components/func/waterprint.html"},{default:l(()=>[p]),_:1})])])}var x=r(c,[["render",h],["__file","useWatermark.html.vue"]]);export{x as default};
