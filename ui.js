kColorHexRegex=/^#[0-9A-F]{6}$/i
kColorRGBRegex=/^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/i
__HTMLColorsToHex={"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"};function interpolatedColor(min,max,percent){var minIsRGB=kColorRGBRegex.test(min);var minRGB;if(!minIsRGB){var minIsHexColor=kColorHexRegex.test(min);if(!minIsHexColor){min=_hexForCSSDefault(min);if(min==null){console.error("Could not find color "+min);return max;}}
minRGB=_hexToRgb(min);}else{minRGB=min.substring(4,min.length-1).replace(/[^\d,]/g,'').split(',');minRGB={'r':parseInt(minRGB[0]),'g':parseInt(minRGB[1]),'b':parseInt(minRGB[2])};}
var maxIsRGB=kColorRGBRegex.test(max);var maxRGB;if(!maxIsRGB){var maxIsHexColor=kColorHexRegex.test(max);if(!maxIsHexColor){max=_hexForCSSDefault(max);if(max==null){console.error("Could not find color "+max);return min;}}
maxRGB=_hexToRgb(max);}else{maxRGB=max.substring(4,max.length-1).replace(/[^\d,]/g,'').split(',');maxRGB={'r':parseInt(maxRGB[0]),'g':parseInt(maxRGB[1]),'b':parseInt(maxRGB[2])};}
var lerpRed=Math.floor(flerp(minRGB['r'],maxRGB['r'],percent));var lerpGreen=Math.floor(flerp(minRGB['g'],maxRGB['g'],percent));var lerpBlue=Math.floor(flerp(minRGB['b'],maxRGB['b'],percent));var lerpColor=_rgbToHex(lerpRed,lerpGreen,lerpBlue);return lerpColor;}
function _hexForCSSDefault(color){if(typeof __HTMLColorsToHex[color.toLowerCase()]!='undefined')
return __HTMLColorsToHex[color.toLowerCase()];return null;}
function _componentToHex(c){var hex=c.toString(16);return hex.length==1?"0"+hex:hex;}
function _rgbToHex(r,g,b){return"#"+_componentToHex(r)+_componentToHex(g)+_componentToHex(b);}
function _hexToRgb(hex){var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null;}
var FLOAT_EPISLON=0.0001;function fequal(a,b){var absA=Math.abs(a);var absB=Math.abs(b);var diff=Math.abs(a-b);if(a==b){return true;}else{return diff/(absA+absB)<FLOAT_EPISLON;}}
function fpercent(min,current,max){return(current-min)/(max-min);}
function flerp(min,max,percent){return percent*(max-min)+min;}
function fgreater(a,b){return(a-b)>FLOAT_EPISLON;}
class Transform{constructor(){this.x=0;this.y=0;this.widthScale=1.0;this.heightScale=1.0;}
static identity(){return new Transform();}
static translate(x,y){var transform=new Transform();transform.x=x;transform.y=y;return transform;}
static scale(width,height){var transform=new Transform();transform.widthScale=width;transform.heightScale=height;return transform;}
copy(){var transform=new Transform();transform.x=this.x;transform.y=this.y;transform.widthScale=this.widthScale;transform.heightScale=this.heightScale;return transform;}
asString(){return"matrix("+this.widthScale+",0.0,0.0,"+this.heightScale+","+this.x+","+this.y+")";}}
function interpolatedTransform(min,max,percent){var x=flerp(min.x,max.x,percent);var y=flerp(min.y,max.y,percent);var widthScale=flerp(min.widthScale,max.widthScale,percent);var heightScale=flerp(min.heightScale,max.heightScale,percent);var transform=new Transform();transform.x=x;transform.y=y;transform.widthScale=widthScale;transform.heightScale=heightScale;return transform;}
class View{static viewWithFrame(x,y,width,height){var newView=new View();newView.init();newView.setX(x);newView.setY(y);newView.setWidth(width);newView.setHeight(height);return newView;}
init(){this.view=document.createElement('div');this.view.id=Date.now();this.superview=null;this.subviews=[];this.setTransform(Transform.identity());this.setPosition('absolute');this.setX(0.0);this.setY(0.0);this.setWidth(0.0);this.setHeight(0.0);this.setBackgroundColor('');this.setBorderRadius(0.0);this.setBorderColor('');this.setOpacity(1.0);this.setOverflow('visible');this.borderColor='black';this.setBorderWidth(0.0);this.eventListeners={};}
copy(){var copyView=View.viewWithFrame(this.x,this.y,this.width,this.height);this.copyParams(copyView);return copyView;}
copyParams(copyView){copyView.setTransform(this.transform);copyView.setBackgroundColor(this.backgroundColor);copyView.setBorderRadius(this.borderRadius);copyView.setOpacity(this.opacity);copyView.setOverflow(this.overflow);copyView.setBorderWidth(this.borderWidth);copyView.setBorderColor(this.borderColor);}
embedIn(element){element.appendChild(this.view);}
addSubview(view){this.view.appendChild(view.view);view.superview=this;this.subviews.push(view);}
removeFromSuperview(){this.view.parentNode.removeChild(this.view);var indexOfSelfInParentsSubviews=this.superview.subviews.indexOf(this);console.log(this.superview.subviews);this.superview.subviews.splice(indexOfSelfInParentsSubviews,1);this.view.superview=null;}
addEventHandler(eventHandler){if(this.eventListeners[eventHandler.eventName]==null){this.eventListeners[eventHandler.eventName]=eventHandler;}else{console.log.error("Need to add support for handling collision of eventHanlders, and removing them.");}
eventHandler.target=this;this.view.addEventListener(eventHandler.eventName,this.callbackEventHandler.bind(this));}
callbackEventHandler(event){var eventHandler=this.eventListeners[event.type];eventHandler.performAction(event);event.stopPropagation();}
setKeyValue(key,value){switch(key){case'transform':this.setTransform(value);break;case'position':this.setPosition(value);break;case'x':this.setX(value);break;case'y':this.setY(value);break;case'width':this.setWidth(value);break;case'height':this.setHeight(value);break;case'backgroundColor':this.setBackgroundColor(value);break;case'borderRadius':this.setBorderRadius(value);break;case'opacity':this.setOpacity(value);break;case'borderWidth':this.setBorderWidth(value);break;case'borderColor':this.setBorderColor(value);break;default:console.error("View: setKeyValue not implemented for key "+key);break;}}
setTransform(transform){this.transform=transform;var transformString=transform.asString();this.view.style.webkitTransform=transformString;this.view.style.MozTransform=transformString;this.view.style.msTransform=transformString;this.view.style.OTransform=transformString;this.view.style.transform=transformString;}
setPosition(position){this.position=position;this.view.style.position=position;}
setX(x){this.x=x;this.view.style.left=x;}
setY(y){this.y=y;this.view.style.top=y;}
setWidth(width){this.width=width;this.view.style.width=width;}
setHeight(height){this.height=height;this.view.style.height=height;}
setBackgroundColor(color){this.backgroundColor=color;this.view.style.background=color;}
setBorderRadius(radius){this.borderRadius=radius;this.view.style.borderRadius=radius;}
setOpacity(opacity){this.opacity=opacity;this.view.style.opacity=opacity;if(opacity==0.0){this.view.style.pointerEvents="none";}}
setOverflow(overflow){this.overflow=overflow;this.view.style.overflow=overflow;console.log("Set overflow to ",overflow);}
setBorderWidth(borderWidth){this.borderWidth=borderWidth;this.updateBorder();}
setBorderColor(borderColor){this.borderColor=borderColor;this.updateBorder();}
updateBorder(){if(this.borderWidth==0.0){this.view.style.border='none';}else{this.view.style.border=this.borderWidth+"px solid "+this.borderColor;}}}
KEYFRAME_KEY=0;KEYFRAME_FROM=1;KEYFRAME_TO=2;Easing={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(--t)*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1-(--t)*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*(--t)*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+(--t)*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*(--t)*t*t*t*t}}
class Animation{static animate(view,duration,updateCallback,completion,curve,delay){if(delay==null){delay=0.0;}
if(curve==null){curve=Easing.linear;}
var mutatableView=view.copy();updateCallback(mutatableView);var keyframes=Animation._keyframes(view,mutatableView);if(keyframes.length==0){console.log("Animation: No keyframes detected.");return;}
var startTime=Date.now()+delay*1000.0;var finishTime=startTime+duration*1000.0;function update(){var currentTime=Date.now();var percent=fpercent(startTime,currentTime,finishTime);var timeValue=curve(percent);if(fgreater(timeValue,1.0)){for(var i=0;i<keyframes.length;i++){var keyframe=keyframes[i];view.setKeyValue(keyframe[0],keyframe[2]);}
if(completion!=null){completion();}
return;}
requestAnimationFrame(update);for(var i=0;i<keyframes.length;i++){var keyframe=keyframes[i];var interpolatingFunction=Animation._interpolatingFunctionForKey(keyframe[0]);var interpolatedPosition=interpolatingFunction(keyframe[KEYFRAME_FROM],keyframe[KEYFRAME_TO],timeValue);view.setKeyValue(keyframe[KEYFRAME_KEY],interpolatedPosition);}}
requestAnimationFrame(update);}
static _interpolatingFunctionForKey(key){switch(key){case'backgroundColor':case'borderColor':return interpolatedColor;break;case'transform':return interpolatedTransform;break;default:return flerp;break;}}
static _keyframes(oldView,newView){var keys=['transform','x','y','width','height','backgroundColor','borderRadius','opacity','borderWidth','borderColor'];var keyframes=[];for(var i=0;i<keys.length;i++){var key=keys[i];var oldValue=oldView[key];var newValue=newView[key];if(!fequal(oldValue,newValue)){keyframes.push([key,oldValue,newValue]);}}
return keyframes;}}
class EventHandler{static clickHandler(action){var handler=new EventHandler(action);handler.eventName="click";return handler;}
constructor(action){this.action=action;this.eventName="";this.target=null;this.lastEvent=null;}
performAction(event){this.lastEvent=event;this.action(this);}
locationInView(view){return{x:this.lastEvent.x,y:this.lastEvent.y};}}
class ViewController{constructor(){this.view=this.loadView();this.viewDidLoad();}
loadView(){return View.viewWithFrame(0,0,0,0);}
viewDidLoad(){return;}
viewDidAppear(){document.title=this.title;return;}
windowDidResize(){return;}
setTitle(title){this.title=title;document.title=title;}}
class ImageView extends View{static imageViewWithFrame(x,y,width,height){var newImageView=new ImageView();newImageView.init();newImageView.setX(x);newImageView.setY(y);newImageView.setWidth(width);newImageView.setHeight(height);return newImageView;}
init(){this.imageView=document.createElement('img');this.imageView.style.width="100%";this.imageView.style.height="100%";this.imageView.style.position='relative';super.init();this.view.appendChild(this.imageView);}
setImage(src){this.imageView.src=src;}}
var __mainWindow;class Window{static mainWindow(){if(__mainWindow==null){__mainWindow=new Window();__mainWindow.setContainee(document.body);}
return __mainWindow;}
setContainee(containee){this.containee=containee;}
layoutContainee(){this.rootViewController.view.setWidth(document.body.clientWidth);this.rootViewController.view.setHeight(document.body.clientHeight);this.rootViewController.view.setX(0.0);this.rootViewController.view.setY(0.0);this.rootViewController.windowDidResize();}
load(){this.rootViewController.viewDidAppear();}
setRootViewController(viewController){viewController.view.embedIn(this.containee);this.rootViewController=viewController;window.addEventListener("resize",this.layoutContainee.bind(this));window.onload=this.load.bind(this);this.layoutContainee();}}
class ScrollView extends View{static viewWithFrame(x,y,width,height){var view=new ScrollView();view.init();view.setX(x);view.setY(y);view.setWidth(width);view.setHeight(height);return view;}
init(){super.init();}}
var DummyLabel=(function(){var instance;function createInstance(){var testDummy=document.createElement("div");testDummy.style.position='absolute';testDummy.style.top=-1000;testDummy.style.left=-1000;testDummy.style.height='auto';testDummy.style.width='auto';testDummy.style.whiteSpace='none';document.body.appendChild(testDummy);return testDummy;}
return{getInstance:function(){if(!instance){instance=createInstance();}
return instance;}};})();class Label extends View{static textSize(text,fontSize){var testDummy=Label.textSize.testDummy||function(){Label.textSize.testDummy=document.createElement("div");Label.textSize.testDummy.style.position='absolute';Label.textSize.testDummy.style.top=-1000;Label.textSize.testDummy.style.left=-1000;Label.textSize.testDummy.style.height='auto';Label.textSize.testDummy.style.width='auto';Label.textSize.testDummy.style.whiteSpace='nowrap';document.body.appendChild(Label.textSize.testDummy);return Label.textSize.testDummy;}();testDummy.innerHTML=text;testDummy.style.fontSize=fontSize;var dummyWidth=(testDummy.clientWidth+1);var dummyHeight=(testDummy.clientHeight+1);return{'width':dummyWidth,'height':dummyHeight};}
heightForWidth(){var test=DummyLabel.getInstance();test.style.height='auto';test.style.width=this.width;test.style.fontSize=this.fontSize;test.style.fontFamily=this.fontFamily;test.innerHTML=this.text;return test.clientHeight+1;}
static labelWithFrame(x,y,width,height){var newLabel=new Label();newLabel.init();newLabel.setX(x);newLabel.setY(y);newLabel.setWidth(width);newLabel.setHeight(height);return newLabel;}
init(){super.init();this.text='';this.setFontFamily('monospace');this.setFontSize(16.0);this.setFontColor('black');this.setFontWeight('normal');this.setTextAlign('left');}
copy(){var copyView=Label.labelWithFrame(this.x,this.y,this.width,this.height);this.copyParams(copyView);return copyView;}
copyParams(copyView){super.copyParams(copyView);copyView.setText(this.text);copyView.setFontFamily(this.fontFamily);copyView.setFontSize(this.fontSize);copyView.setFontColor(this.fontColor);copyView.setFontWeight(this.fontWeight);copyView.setTextAlign(this.textAlign);}
setText(text){this.text=text;this.view.innerHTML=text;}
setFontFamily(fontFamily){this.fontFamily=fontFamily;this.view.style.fontFamily=fontFamily;}
setFontSize(fontSize){this.fontSize=fontSize;this.view.style.fontSize=fontSize;}
setFontColor(fontColor){this.fontColor=fontColor;this.view.style.color=fontColor;}
setFontWeight(fontWeight){this.fontWeight=fontWeight;this.view.style.fontWeight=fontWeight;}
setTextAlign(textAlign){this.textAlign=textAlign;this.view.style.textAlign=textAlign;}}