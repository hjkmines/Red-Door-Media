(this.webpackJsonpred_door_media=this.webpackJsonpred_door_media||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},25:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(18),i=t.n(s),c=t(1),o=t.n(c),l=t(7),m=t(2),u=t(3),d=t(5),p=t(4),h=(t(25),n.Component,function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={term:"",type:"News"},e.onChange=function(a){e.setState({term:a.target.value})},e.onSelect=function(a){e.setState({type:a.target.value})},e.onSubmit=function(a){a.preventDefault(),e.props.onSearchSubmit(),e.props.setMediaType(e.state.type),"News"===e.state.type?e.props.onNewsSearch(e.state.term):"Videos"===e.state.type?e.props.onYoutubeSearch(e.state.term):"Images"===e.state.type&&e.props.onImageSearch(e.state.term)},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("select",{value:this.state.type,onChange:this.onSelect,className:"form-control"},r.a.createElement("option",{value:"News"},"News"),r.a.createElement("option",{value:"Videos"},"Videos"),r.a.createElement("option",{value:"Images"},"Images")),r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Explore","aria-label":"Search",onChange:this.onChange}),r.a.createElement("button",{className:"btn btn-danger my-2 my-sm-0",type:"submit"},"Search")))}}]),t}(n.Component)),v=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"},r.a.createElement("a",{className:"navbar-brand",href:"./home.html"},r.a.createElement("strong",{id:"brand"},"RedDoor Media \ud83d\udeaa")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"./news.html"},"News ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"./videos.html"},"Videos",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"./images.html"},"Images ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"./favorites.html"},"Favorites ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"./upload.html"},"Upload ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"./index.html"},"Log Out ",r.a.createElement("span",{className:"sr-only"},"(current)")))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement(h,{onNewsSearch:this.props.onNewsSearch,onYoutubeSearch:this.props.onYoutubeSearch,onImageSearch:this.props.onImageSearch,onSearchSubmit:this.props.onSearchSubmit,mediaType:this.props.mediaType,setMediaType:this.props.setMediaType}))))}}]),t}(n.Component),g=t(8),b=t.n(g),f=b.a.create({baseURL:"https://newsapi.org/v2"}),E=function(e){var a=e.slides,t=a.slice(0,1),n=a.slice(1,11),s=t.map((function(e){return r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("div",{id:"text-links"},r.a.createElement("a",{id:"linkers",href:e.url},e.title)),r.a.createElement("img",{className:"d-block w-100 articles",src:e.urlToImage,alt:e.title}))})),i=n.map((function(e){return r.a.createElement("div",{className:"carousel-item"},r.a.createElement("div",{id:"text-links"},r.a.createElement("a",{id:"linkers",href:e.url},e.title)),r.a.createElement("img",{className:"d-block w-100 articles",src:e.urlToImage,alt:e.title}))}));return r.a.createElement("div",null,s,i)},N=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={slides:[]},e.loadSlides=Object(l.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.get("/top-headlines",{params:{country:"us",apiKey:"2a717d771d85444cb9cb8eda83414b88"}});case 2:t=a.sent,e.setState({slides:t.data.articles});case 4:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadSlides()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"news-slide",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner carousel-news"},r.a.createElement(E,{slides:this.state.slides})),r.a.createElement("a",{className:"carousel-control-prev arrow left-arrow",href:"#news-slide",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next arrow right-arrow",href:"#news-slide",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))}}]),t}(n.Component),y=function(e){var a=e.video,t="https://www.youtube.com/embed/".concat(a.id.videoId);return r.a.createElement("section",{className:"main-videos"},r.a.createElement("iframe",{className:"top-video",width:"700",height:"470",src:t,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},w=function(e){var a=e.videos.slice(0,3).map((function(e){var a="https://www.youtube.com/embed/".concat(e.id.videoId);return r.a.createElement("section",{className:"trendings"},r.a.createElement("iframe",{className:"top-video",width:"580",height:"350",src:a,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}));return r.a.createElement("div",null,a)},S=function(e){var a=e.news.slice(0,6).map((function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top news-picture",src:e.urlToImage,alt:"image"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},e.title),r.a.createElement("section",{className:"article-button"},r.a.createElement("a",{href:e.url,className:"btn btn-primary"},"Go to full article"))))}));return r.a.createElement("div",null,a)},T=b.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:50,key:"sdfoijoijsi"}}),j=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={mainVideo:null,main:"news",trendingVideos:"random",trendingVideosList:[],trendingNews:"popular",trendingNewsList:[]},e.loadVideos=Object(l.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.get("/search",{params:{q:e.state.main}});case 2:t=a.sent,e.setState({mainVideo:t.data.items[0]});case 4:case"end":return a.stop()}}),a)}))),e.loadTrendingVideos=Object(l.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.get("/search",{params:{q:e.state.trendingVideos}});case 2:t=a.sent,e.setState({trendingVideosList:t.data.items});case 4:case"end":return a.stop()}}),a)}))),e.loadTrendingNews=Object(l.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.get("/everything",{params:{q:e.state.trendingNews,apiKey:"2a717d771d85444cb9cb8eda83414b88"}});case 2:t=a.sent,e.setState({trendingNewsList:t.data.articles});case 4:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadVideos(),this.loadTrendingVideos(),this.loadTrendingNews()}},{key:"render",value:function(){return r.a.createElement("body",{className:"body"},r.a.createElement(v,{onSearchSubmit:this.props.onSearchSubmit,mediaType:this.props.mediaType,setMediaType:this.props.setMediaType,onImageSearch:this.props.onImageSearch,onNewsSearch:this.props.onNewsSearch,onYoutubeSearch:this.props.onYoutubeSearch,images:this.props.images,videos:this.props.videos,news:this.props.news}),r.a.createElement("div",{className:"top-titles"},r.a.createElement("h1",null,"Today's Top Headlines"),r.a.createElement("h1",null,"Top News Clip")),r.a.createElement("div",{className:"toppers"},r.a.createElement(N,{className:"topper"}),null!==this.state.mainVideo?r.a.createElement(y,{video:this.state.mainVideo,className:"topper vid"}):r.a.createElement("div",null)),r.a.createElement("div",{className:"trending-videos"},r.a.createElement("h1",{className:"trending-video-text"},"Trending Videos")),r.a.createElement("div",{className:"trending-clips-container"},this.state.trendingVideosList.length>0?r.a.createElement(w,{videos:this.state.trendingVideosList,className:"trending-clips"}):r.a.createElement("div",null)),r.a.createElement("div",{className:"trending-news-label"},r.a.createElement("h1",{className:"trending-videos-text"},"Trending News")),r.a.createElement("div",{className:"trending-news-container"},this.state.trendingNewsList.length>0?r.a.createElement(S,{news:this.state.trendingNewsList,className:"trending-news"}):r.a.createElement("div",null)))}}]),t}(n.Component),O=b.a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID VE7dHBlfJnjUzOB7G4vP3vth2XkNZhZF_l3SWMgs1i8"}}),k=(t(43),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,a=Math.ceil(e/10);n.setState({spans:a})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:this.props.image.description,src:this.props.image.urls.regular}))}}]),t}(n.Component)),x=function(e){var a=e.images.map((function(e){return r.a.createElement(k,{image:e,key:e.id})}));return r.a.createElement("div",{className:"image-list"},a)},I=function(e){var a=e.news.map((function(e){return r.a.createElement("div",{className:"card news-card"},r.a.createElement("img",{className:"card-img-top news-picture",src:e.urlToImage,alt:"image"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},e.title),r.a.createElement("div",{className:"buttons"},r.a.createElement("section",{className:"article-button"},r.a.createElement("a",{href:e.url,className:"btn btn-primary"},"Go to full article")))))}));return r.a.createElement("div",null,a)},V=(t(44),function(e){var a=e.videos.slice(0,12).map((function(e){var a="https://www.youtube.com/embed/".concat(e.id.videoId);return r.a.createElement("section",{className:"trendings"},r.a.createElement("iframe",{className:"top-video",width:"590",height:"400",src:a,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}));return r.a.createElement("div",null,a)}),M=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{onImageSearch:this.props.onImageSearch,onNewsSearch:this.props.onNewsSearch,onYoutubeSearch:this.props.onYoutubeSearch,onSearchSubmit:this.props.onSearchSubmit,mediaType:this.props.mediaType,setMediaType:this.props.setMediaType}),"Images"===this.props.mediaType?r.a.createElement("div",{className:"images"},r.a.createElement(x,{images:this.props.images,className:"images"})):"News"===this.props.mediaType?r.a.createElement("div",{className:"news-results"},r.a.createElement(I,{news:this.props.news})):"Videos"===this.props.mediaType?r.a.createElement("div",{className:"videos"},r.a.createElement(V,{videos:this.props.videos,className:"videos"})):r.a.createElement("div",null))}}]),t}(n.Component),C=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={onSearchSubmit:"no",mediaType:"",videos:[],news:[],images:[]},e.setMediaType=function(a){e.setState({mediaType:a})},e.onSearchSubmit=function(){e.setState({onSearchSubmit:"yes"})},e.goHome=function(){e.setState({onSearchSubmit:"no"})},e.onYoutubeSearch=function(){var a=Object(l.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.get("/search",{params:{q:t}});case 2:n=a.sent,e.setState({videos:n.data.items});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.onNewsSearch=function(){var a=Object(l.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.get("/everything",{params:{q:t,apiKey:"2a717d771d85444cb9cb8eda83414b88"}});case 2:n=a.sent,e.setState({news:n.data.articles});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.onImageSearch=function(){var a=Object(l.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.get("/search/photos",{params:{query:t,per_page:100}});case 2:n=a.sent,e.setState({images:n.data.results});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onYoutubeSearch(),this.onNewsSearch(),this.onImageSearch()}},{key:"render",value:function(){return r.a.createElement("div",null,"no"===this.state.onSearchSubmit?r.a.createElement(j,{onSearchSubmit:this.onSearchSubmit,setMediaType:this.setMediaType,mediaType:this.state.mediaType,onImageSearch:this.onImageSearch,onNewsSearch:this.onNewsSearch,onYoutubeSearch:this.onYoutubeSearch,images:this.state.images,videos:this.state.videos,news:this.state.news}):r.a.createElement(M,{onSearchSubmit:this.onSearchSubmit,setMediaType:this.setMediaType,mediaType:this.state.mediaType,onImageSearch:this.onImageSearch,onNewsSearch:this.onNewsSearch,onYoutubeSearch:this.onYoutubeSearch,images:this.state.images,videos:this.state.videos,news:this.state.news}))}}]),t}(n.Component);i.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.df466c16.chunk.js.map