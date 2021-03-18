(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__38uPp",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3SlF8","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__5PmlM"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2HH1U",Modal:"Modal_Modal__20CRU"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2wh8v"}},16:function(e,t,a){e.exports={Button:"Button_Button__bl9x3"}},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),s=a(14),i=a(3),l=a(4),u=a(6),m=a(5),h=a(9),g=a(8),d=a.n(g),b=a(1),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.reset=function(){e.setState({query:""})},e.onFormSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.reset()):h.b.error("write smth")},e.onInpChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:d.a.Searchbar,children:Object(b.jsxs)("form",{onSubmit:this.onFormSubmit,className:d.a.SearchForm,children:[Object(b.jsx)("button",{type:"submit",className:d.a.SearchFormBtn,children:Object(b.jsx)("span",{className:d.a.SearchFormBtnLabel,children:"Search"})}),Object(b.jsx)("input",{onChange:this.onInpChange,className:d.a.SearchFormInput,value:this.state.query,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"search images and photos"})]})})}}]),a}(r.Component);function p(e,t){var a=new URLSearchParams({q:e,page:t,per_page:12,key:"20710753-e9f2c037f579edfcd595b7386"});return fetch("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal&").concat(a)).then((function(t){return t.ok?t.json():Promise.reject(new Error("can't find ".concat(e,". try smth else")))}))}var f=a(10),y=a.n(f),I=a(15),O=a.n(I),S=a(12),v=a.n(S);function _(e){var t=e.src,a=e.alt,r=e.largeImageUrl;return Object(b.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:t,alt:a,"data-large-url":r,className:v.a.ImageGalleryItemImage})})}var x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.imageList;return Object(b.jsx)("ul",{className:O.a.ImageGallery,onClick:t,children:a.map((function(e,t){var a=e.webformatURL,r=e.type,n=e.largeImageURL;return Object(b.jsx)(_,{src:a,alt:r,largeImageUrl:n},t)}))})}}]),a}(r.Component),w=a(16),k=a.n(w);function C(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:k.a.Button,onClick:function(){t()},children:"Load more..."})}var L=a(13),F=a.n(L),G=document.querySelector("#modal-root"),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={isImageLoading:!0},e.handleKeyDown=function(t){"Escape"===t.code&&(e.props.onClose(),e.setState({isImageLoading:!0}))},e.handleBackdropClick=function(t){t.currentTarget===t.target&&(e.props.onClose(),e.setState({isImageLoading:!0}))},e.onImageLoad=function(){e.setState({isImageLoading:!1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(o.createPortal)(Object(b.jsx)("div",{className:F.a.Overlay,onClick:this.handleBackdropClick,children:Object(b.jsxs)("div",{className:F.a.Modal,children:[this.state.isImageLoading&&Object(b.jsx)(y.a,{className:"loader",type:"ThreeDots",color:"#3f51b5",height:100,width:100}),Object(b.jsx)("img",{src:t,alt:a,onLoad:this.onImageLoad}),this.props.children]})}),G)}}]),a}(r.Component),B="idle",N="pending",q="resolved",U="rejected",P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:"",page:1,imageList:[],error:"",status:B,showModal:!1,currentImgObj:{largeUrl:"",alt:""}},e.handleFormSubmit=function(t){e.setState({query:t}),e.resetPage()},e.handleButtonClick=function(){var t=e.state.query;e.setState({status:N}),e.fetchProcessing(t)},e.fetchProcessing=function(t){p(t,e.state.page).then((function(t){if(0===t.hits.length)return e.setState({status:B}),h.b.error("can't find. try again");e.setState((function(e){return{imageList:[].concat(Object(s.a)(e.imageList),Object(s.a)(t.hits)),status:q}}))})).catch((function(t){var a=t.message;return e.setState({error:a,status:U})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState((function(e){return{page:e.page+=1}}))}))},e.onFormSubmit=function(t){e.setState({query:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleGalleryItemClick=function(t){var a=t.target.dataset.largeUrl,r=t.target.alt;"IMG"===t.target.nodeName&&e.setState({currentImgObj:{largeUrl:a,alt:r}}),e.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.query,r=this.state.query;a!==r&&(this.setState({imageList:[],status:N}),this.fetchProcessing(r))}},{key:"render",value:function(){var e=this.state,t=e.imageList,a=e.error,r=e.status,n=e.showModal,o=e.currentImgObj;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{onSubmit:this.onFormSubmit}),a&&Object(b.jsx)("h1",{children:a}),Object(b.jsx)(x,{imageList:t,onClick:this.handleGalleryItemClick}),n&&Object(b.jsx)(M,{src:o.largeUrl,alt:o.alt,onClose:this.toggleModal}),Object(b.jsxs)("div",{className:"container",children:[r===N&&Object(b.jsx)(y.a,{className:"loader",type:"ThreeDots",color:"#3f51b5",height:100,width:100}),r===q&&Object(b.jsx)(C,{onClick:this.handleButtonClick})]}),Object(b.jsx)(h.a,{autoClose:2e3})]})}}]),a}(r.Component);c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1m4uM",SearchForm:"Searchbar_SearchForm__1id4t",SearchFormBtn:"Searchbar_SearchFormBtn__1VlWR",SearchFormBtnLabel:"Searchbar_SearchFormBtnLabel__21g7f",SearchFormInput:"Searchbar_SearchFormInput__3PTTU"}}},[[42,1,2]]]);
//# sourceMappingURL=main.2259b614.chunk.js.map