(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{2:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",metadata:"video_item_metadata__N-I6a",thumbnail:"video_item_thumbnail__1w2AL",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},21:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},26:function(e,t,a){e.exports=a(52)},3:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl"}},31:function(e,t,a){},4:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(20),r=a.n(i),o=(a(31),a(9)),l=a(4),s=a.n(l),u=a(3),m=a.n(u),d=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;t(e)};return c.a.createElement("header",{className:m.a.header},c.a.createElement("div",{className:m.a.logo},c.a.createElement("img",{className:m.a.img,src:"/youtube_clone_hook/images/logo.png",alt:"logo"}),c.a.createElement("h1",{className:m.a.title},"Youtube")),c.a.createElement("input",{className:m.a.input,ref:a,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),c.a.createElement("button",{className:m.a.button,type:"submit",onClick:function(){i()}},c.a.createElement("img",{className:m.a.buttonImg,src:"/youtube_clone_hook/images/search.png",alt:"search"})))})),p=a(6),_=a.n(p),h=function(e){var t=e.video,a=e.video.snippet,n="https://www.youtube.com/embed/".concat(t.id);return c.a.createElement("section",{className:_.a.detail},c.a.createElement("h1",null,a.title),c.a.createElement("iframe",{className:_.a.video,title:"video_player",type:"text/html",width:"100%",height:"500px",src:n,frameBorder:"0",allowFullScreen:!0}),c.a.createElement("h2",null,a.title),c.a.createElement("h3",null,a.channelTitle),c.a.createElement("pre",{className:_.a.description},a.description))},v=a(2),b=a.n(v),f=Object(n.memo)((function(e){var t=e.video,a=e.onSelectedVideo,n="list"===e.display?b.a.list:b.a.grid;return c.a.createElement("li",{onClick:function(){a(t)},className:"".concat(b.a.container," ").concat(n)},c.a.createElement("div",{className:b.a.video},c.a.createElement("img",{className:b.a.thumbnail,src:t.snippet.thumbnails.medium.url,alt:"video thumbnail"}),c.a.createElement("div",{className:b.a.metadata},c.a.createElement("p",{className:b.a.title},t.snippet.title),c.a.createElement("p",{className:b.a.channel},t.snippet.channelTitle))))})),E=a(21),g=a.n(E),y=function(e){var t=e.videos,a=e.onSelectedVideo,n=e.display;return c.a.createElement("ul",{className:g.a.videos},t.map((function(e){return c.a.createElement(f,{key:e.id,video:e,onSelectedVideo:a,display:n})})))};var N=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(o.a)(a,2),r=i[0],l=i[1],u=Object(n.useState)(null),m=Object(o.a)(u,2),p=m[0],_=m[1],v=Object(n.useCallback)((function(e){_(null),t.search(e).catch((function(e){return console.log(e)})).then((function(e){return console.log(e),l(e)}))}),[t]);return Object(n.useEffect)((function(){t.search("\ub3d9\uae30\ubd80\uc5ec").catch((function(e){return console.log(e)})).then((function(e){return console.log(e),l(e)}))}),[t]),c.a.createElement("div",{className:s.a.app},c.a.createElement(d,{onSearch:v}),c.a.createElement("section",{className:s.a.content},p&&c.a.createElement("div",{className:s.a.detail},c.a.createElement(h,{video:p})),c.a.createElement("div",{className:s.a.list},c.a.createElement(y,{videos:r,onSelectedVideo:function(e){_(e)},display:p?"list":"grid"}))))},w=(a(32),a(5)),k=a.n(w),j=a(25),x=a(8),O=a(22),S=a(23),I=function(){function e(t){Object(O.a)(this,e),this.youtube=t}return Object(S.a)(e,[{key:"search",value:function(){var e=Object(x.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",chart:"mostPopular",maxResults:25,q:t,type:"video"}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(j.a)({},e,{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"mostPopular",value:function(){var e=Object(x.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),P=a(24),A=new I(a.n(P).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{key:"AIzaSyAPNdSvq-5GxPqPZ945HNI7rAJxlb8AeJQ"}}));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,{youtube:A})),document.getElementById("root"))},6:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[26,1,2]]]);
//# sourceMappingURL=main.f66f6bf1.chunk.js.map