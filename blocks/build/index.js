!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var l=r.apply(null,i);l&&e.push(l)}else if("object"===o)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(1),o=n.n(r),l=wp.i18n.__,a=wp.blocks,c=a.registerBlockType,u=a.getBlockDefaultClassName,s=wp.editor,d=(s.RichText,s.MediaPlaceholder),p=s.MediaUpload,f=s.InspectorControls,b=s.BlockControls,h=s.BlockAlignmentToolbar,m=wp.element.Fragment,g=wp.components,v=g.withNotices,y=g.IconButton,w=g.TextControl,E=g.TextareaControl,O=g.PanelBody,j=g.Toolbar,P=g.ResizableBox,_=wp.compose.withState,x=wp.blob.isBlobURL,S=function(e){var t=e.attributes,n=(t.title,t.description),r=t.url,o={width:t.width,height:t.height},l=u("embed-pdf-viewer/pdf");return void 0!==r&&r?Object(i.createElement)("figure",{className:"".concat(l,"__content-wrapper")},Object(i.createElement)("object",{className:"embed-pdf-viewer",data:r+"#scrollbar=1&toolbar=1",type:"application/pdf",height:o.height,width:o.width,title:n}),Object(i.createElement)("iframe",{className:"embed-pdf-viewer",src:"https://docs.google.com/viewer?url="+encodeURIComponent(r)+"&embedded=true",frameBorder:"0",height:o.height,width:o.width,title:n})):null};c("embed-pdf-viewer/pdf",{title:l("PDF"),icon:"media-document",category:"embed",attributes:{id:{type:"number"},title:{type:"string"},description:{type:"string"},url:{type:"string"},width:{type:"string",default:600},height:{type:"string",default:400},align:{type:"string"}},getEditWrapperProps:function(e){var t=e.align,n=e.width;if("left"===t||"center"===t||"right"===t)return{"data-align":t,"data-resized":!!n}},edit:v(_({isEditing:!1,hasError:!1})((function(e){var t=e.attributes,n=t.id,r=(t.title,t.description),a=t.url,c=t.width,u=t.height,s=t.align,g=e.setAttributes,v=e.isEditing,_=e.hasError,C=e.setState,D=e.className,N=(e.media,e.noticeUI,e.noticeOperations,e.toggleSelection),B=e.isRTL,R=function(e,t){return t&&!e&&!x(t)}(n,a);function T(e){return function(t){var n={};n[e]=t,g(n)}}function k(e){e&&e.url&&(C({hasError:!1}),g({url:e.url,id:e.id,title:e.title,description:e.description}))}if(void 0===a||!a||_||v)return Object(i.createElement)(d,{icon:"media-document",labels:{title:l("PDF"),instructions:l("Drag a PDF, upload a new one or select a PDF from your library.")},onSelect:k,onSelectURL:T("url"),notices:e.noticeUI,onError:e.noticeOperations.createErrorNotice,accept:"application/pdf"});var F=o()(D,{"is-transient":x(a)}),I=!1,z=!1;return"center"===s?(I=!0,z=!0):B?"left"===s?I=!0:z=!0:"right"===s?z=!0:I=!0,Object(i.createElement)(m,null,Object(i.createElement)(f,null,Object(i.createElement)(O,{title:l("Embed size"),initialOpen:!0},Object(i.createElement)("div",null,Object(i.createElement)(w,{type:"number",min:20,label:l("Width"),value:void 0===c?defaultWidth:c,onChange:T("width")}),Object(i.createElement)(w,{type:"number",label:l("Height"),value:void 0===u?defaultHeight:u,min:1,onChange:T("height")}))),Object(i.createElement)(O,{title:l("Description"),initialOpen:!0},Object(i.createElement)(E,{label:l("Long Description (optional)"),value:void 0===r?"":r,onChange:T("description"),help:l("Long Description used for `title` tag and accessibility.")}))),Object(i.createElement)(b,null,Object(i.createElement)(h,{value:s,onChange:T("align")}),Object(i.createElement)(j,null,R&&Object(i.createElement)(y,{className:"components-icon-button components-toolbar__control",label:l("Edit PDF"),onClick:function(){C({isEditing:!v})},icon:"edit"}),!R&&Object(i.createElement)(p,{onSelect:k,value:n,render:function(e){var t=e.open;return Object(i.createElement)(y,{className:"components-toolbar__control",label:l("Edit PDF"),onClick:t,icon:"edit"})}}))),Object(i.createElement)("div",{className:F},Object(i.createElement)(P,{size:c&&u?{width:c,height:u}:void 0,lockAspectRatio:!0,enable:{top:!1,right:I,bottom:!0,left:z},onResizeStart:function(){N(!1)},onResizeStop:function(e,t,n,i){g({width:parseInt(currentWidth+i.width,10),height:parseInt(currentHeight+i.height,10)}),N(!0)}},S(e))))}))),save:S})}]);