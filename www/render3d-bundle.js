(()=>{var Lf=0,Yh=1,Nf=2;var za=1,Df=2,Ur=3,yi=0,mn=1,Vt=2,zn=0,Ki=1,dt=2,Kh=3,Zh=4,Uf=5;var ks=100,Ff=101,Of=102,Bf=103,Hf=104,kf=200,zf=201,Gf=202,Vf=203,Jh=204,$h=205,Wf=206,Xf=207,qf=208,Yf=209,Kf=210,Zf=211,Jf=212,$f=213,jf=214,el=0,tl=1,nl=2,vr=3,il=4,sl=5,rl=6,al=7,jh=0,Qf=1,ep=2,Qn=0,Ga=1,Va=2,Wa=3,Xa=4,qa=5,Ya=6,zs=7,Bh="attached",tp="detached",Qh=300,fs=301,Gs=302,Dl=303,Ul=304,Ka=306,Rn=1e3,Bn=1001,br=1002,Ht=1003,Fl=1004;var Vs=1005;var kt=1006,Fr=1007;var ei=1008;var Tn=1009,eu=1010,tu=1011,Or=1012,Ol=1013,ti=1014,Pn=1015,jt=1016,Bl=1017,Hl=1018,Br=1020,nu=35902,iu=35899,su=1021,ru=1022,In=1023,ui=1026,ps=1027,kl=1028,zl=1029,ms=1030,Gl=1031;var Vl=1033,Za=33776,Ja=33777,$a=33778,ja=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Kl=36196,Zl=37492,Jl=37496,$l=37488,jl=37489,Qa=37490,Ql=37491,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,lc=37816,cc=37817,hc=37818,uc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,_c=36283,xc=36284,eo=36285,yc=36286,np=2200,ip=2201,sp=2202,Ps=2300,Is=2301,$o=2302,Hh=2303,As=2400,Rs=2401,ma=2402,Sc=2500,rp=2501,au=0,to=1,Hr=2,ap=3200;var Mc=0,op=1,Zi="",ot="srgb",dn="srgb-linear",ga="linear",ut="srgb";var jo=7680;var lp=519,cp=512,hp=513,up=514,vc=515,dp=516,fp=517,bc=518,pp=519,ou=35044,Si=35048;var lu="300 es",Jn=2e3,Tr=2001;function Wm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){let s=Er("canvas");return s.style.display="block",s}var Vd={},wr=null;function _a(...s){let e="THREE."+s.shift();wr?wr("log",e,...s):console.log(e,...s)}function gp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Fe(...s){s=gp(s);let e="THREE."+s.shift();if(wr)wr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=gp(s);let e="THREE."+s.shift();if(wr)wr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Cs(...s){let e=s.join(" ");e in Vd||(Vd[e]=!0,Fe(...s))}function _p(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xp={[el]:tl,[nl]:rl,[il]:al,[vr]:sl,[tl]:el,[rl]:nl,[al]:il,[sl]:vr},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=1234567,Sr=Math.PI/180,Ls=180/Math.PI;function $n(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function cu(s,e){return(s%e+e)%e}function qm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ym(s,e,t){return s!==e?(t-s)/(e-s):0}function da(s,e,t){return(1-t)*s+t*e}function Km(s,e,t,n){return da(s,e,1-Math.exp(-t*n))}function Zm(s,e=1){return e-Math.abs(cu(s,e*2)-e)}function Jm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function $m(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function jm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qm(s,e){return s+Math.random()*(e-s)}function e0(s){return s*(.5-Math.random())}function t0(s){s!==void 0&&(Wd=s);let e=Wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n0(s){return s*Sr}function i0(s){return s*Ls}function s0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function r0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function a0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function o0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Mi={DEG2RAD:Sr,RAD2DEG:Ls,generateUUID:$n,clamp:$e,euclideanModulo:cu,mapLinear:qm,inverseLerp:Ym,lerp:da,damp:Km,pingpong:Zm,smoothstep:Jm,smootherstep:$m,randInt:jm,randFloat:Qm,randFloatSpread:e0,seededRandom:t0,degToRad:n0,radToDeg:i0,isPowerOfTwo:s0,ceilPowerOfTwo:r0,floorPowerOfTwo:a0,setQuaternionFromProperEuler:o0,normalize:_t,denormalize:Zn},mu=class mu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mu.prototype.isVector2=!0;var he=mu,Tt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),w=Math.sin(M);m=Math.sin(m*M)/w,o=Math.sin(o*M)/w,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+_*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+_*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gu=class gu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ch.copy(this).projectOnVector(e),this.sub(ch)}reflect(e){return this.sub(ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gu.prototype.isVector3=!0;var P=gu,ch=new P,Xd=new Tt,_u=class _u{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],M=i[1],w=i[4],y=i[7],T=i[2],b=i[5],A=i[8];return r[0]=a*_+o*M+l*T,r[3]=a*g+o*w+l*b,r[6]=a*m+o*y+l*A,r[1]=c*_+h*M+u*T,r[4]=c*g+h*w+u*b,r[7]=c*m+h*y+u*A,r[2]=d*_+f*M+p*T,r[5]=d*g+f*w+p*b,r[8]=d*m+f*y+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hh.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hh.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_u.prototype.isMatrix3=!0;var Xe=_u,hh=new Xe,qd=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l0(){let s={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(i.r=Mr(i.r),i.g=Mr(i.g),i.b=Mr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zi?ga:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[dn]:{primaries:e,whitePoint:n,transfer:ga,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),s}var Ye=l0();function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var nr,ol=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nr===void 0&&(nr=Er("canvas")),nr.width=e.width,nr.height=e.height;let i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c0=0,Ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(uh(i[a].image)):r.push(uh(i[a]))}else r=uh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function uh(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var h0=0,dh=new P,zt=class s extends jn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Bn,i=Bn,r=kt,a=ei,o=In,l=Tn,c=s.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=$n(),this.name="",this.source=new Ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Qh;zt.DEFAULT_ANISOTROPY=1;var xu=class xu{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,y=(f+1)/2,T=(m+1)/2,b=(h+d)/4,A=(u+_)/4,x=(p+g)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=b/n,r=A/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=x/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xu.prototype.isVector4=!0;var xt=xu,ll=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new zt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ar(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xa=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cl=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Nl=class Nl{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),a=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u0,e,d0)}lookAt(e,t,n){let i=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ts.crossVectors(n,wn),ts.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ts.crossVectors(n,wn)),ts.normalize(),So.crossVectors(wn,ts),i[0]=ts.x,i[4]=So.x,i[8]=wn.x,i[1]=ts.y,i[5]=So.y,i[9]=wn.y,i[2]=ts.z,i[6]=So.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],w=n[7],y=n[11],T=n[15],b=i[0],A=i[4],x=i[8],v=i[12],R=i[1],L=i[5],N=i[9],U=i[13],C=i[2],D=i[6],O=i[10],k=i[14],K=i[3],X=i[7],j=i[11],G=i[15];return r[0]=a*b+o*R+l*C+c*K,r[4]=a*A+o*L+l*D+c*X,r[8]=a*x+o*N+l*O+c*j,r[12]=a*v+o*U+l*k+c*G,r[1]=h*b+u*R+d*C+f*K,r[5]=h*A+u*L+d*D+f*X,r[9]=h*x+u*N+d*O+f*j,r[13]=h*v+u*U+d*k+f*G,r[2]=p*b+_*R+g*C+m*K,r[6]=p*A+_*L+g*D+m*X,r[10]=p*x+_*N+g*O+m*j,r[14]=p*v+_*U+g*k+m*G,r[3]=M*b+w*R+y*C+T*K,r[7]=M*A+w*L+y*D+T*X,r[11]=M*x+w*N+y*O+T*j,r[15]=M*v+w*U+y*k+T*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],M=l*f-c*d,w=o*f-c*u,y=o*d-l*u,T=a*f-c*h,b=a*d-l*h,A=a*u-o*h;return t*(_*M-g*w+m*y)-n*(p*M-g*T+m*b)+i*(p*w-_*T+m*A)-r*(p*y-_*b+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],M=t*o-n*a,w=t*l-i*a,y=t*c-r*a,T=n*l-i*o,b=n*c-r*o,A=i*c-r*l,x=h*_-u*p,v=h*g-d*p,R=h*m-f*p,L=u*g-d*_,N=u*m-f*_,U=d*m-f*g,C=M*U-w*N+y*L+T*R-b*v+A*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=(o*U-l*N+c*L)*D,e[1]=(i*N-n*U-r*L)*D,e[2]=(_*A-g*b+m*T)*D,e[3]=(d*b-u*A-f*T)*D,e[4]=(l*R-a*U-c*v)*D,e[5]=(t*U-i*R+r*v)*D,e[6]=(g*y-p*A-m*w)*D,e[7]=(h*A-d*y+f*w)*D,e[8]=(a*N-o*R+c*x)*D,e[9]=(n*R-t*N-r*x)*D,e[10]=(p*b-_*y+m*M)*D,e[11]=(u*y-h*b-f*M)*D,e[12]=(o*v-a*L-l*x)*D,e[13]=(t*L-n*v+i*x)*D,e[14]=(_*w-p*T-g*M)*D,e[15]=(h*T-u*w+d*M)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,g=a*u,m=o*u,M=l*c,w=l*h,y=l*u,T=n.x,b=n.y,A=n.z;return i[0]=(1-(_+m))*T,i[1]=(f+y)*T,i[2]=(p-w)*T,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+m))*b,i[6]=(g+M)*b,i[7]=0,i[8]=(p+w)*A,i[9]=(g-M)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ir.set(i[0],i[1],i[2]).length(),o=ir.set(i[4],i[5],i[6]).length(),l=ir.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Xn.copy(this);let c=1/a,h=1/o,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Jn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Jn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Tr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Jn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Jn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Tr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Nl.prototype.isMatrix4=!0;var ke=Nl,ir=new P,Xn=new ke,u0=new P(0,0,0),d0=new P(1,1,1),ts=new P,So=new P,wn=new P,Kd=new ke,Zd=new Tt,Oi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},f0=0,Jd=new P,sr=new Tt,Pi=new ke,Mo=new P,ta=new P,p0=new P,m0=new Tt,$d=new P(1,0,0),jd=new P(0,1,0),Qd=new P(0,0,1),ef={type:"added"},g0={type:"removed"},rr={type:"childadded",child:null},fh={type:"childremoved",child:null},It=class s extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new Oi,n=new Tt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Xe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ta,Mo,this.up):Pi.lookAt(Mo,ta,this.up),this.quaternion.setFromRotationMatrix(Pi),i&&(Pi.extractRotation(i.matrixWorld),sr.setFromRotationMatrix(Pi),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),rr.child=e,this.dispatchEvent(rr),rr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g0),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new P(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ph(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=cu(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ph(a,r,e+1/3),this.g=ph(a,r,e),this.b=ph(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=ot){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Ye.workingToColorSpace(on.copy(this),e),Math.round($e(on.r*255,0,255))*65536+Math.round($e(on.g*255,0,255))*256+Math.round($e(on.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(on.copy(this),t);let n=on.r,i=on.g,r=on.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=ot){Ye.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,i=on.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(vo);let n=da(ns.h,vo.h,t),i=da(ns.s,vo.s,t),r=da(ns.l,vo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new le;le.NAMES=yp;var Sa=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new P,Ii=new P,mh=new P,Li=new P,ar=new P,or=new P,tf=new P,gh=new P,_h=new P,xh=new P,yh=new xt,Sh=new xt,Mh=new xt,ci=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qn.subVectors(i,t),Ii.subVectors(n,t),mh.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(Ii),l=qn.dot(mh),c=Ii.dot(Ii),h=Ii.dot(mh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return yh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),yh.fromBufferAttribute(e,t),Sh.fromBufferAttribute(e,n),Mh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(yh,r.x),a.addScaledVector(Sh,r.y),a.addScaledVector(Mh,r.z),a}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),Ii.subVectors(e,t),qn.cross(Ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),qn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ar.subVectors(i,n),or.subVectors(r,n),gh.subVectors(e,n);let l=ar.dot(gh),c=or.dot(gh);if(l<=0&&c<=0)return t.copy(n);_h.subVectors(e,i);let h=ar.dot(_h),u=or.dot(_h);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ar,a);xh.subVectors(e,r);let f=ar.dot(xh),p=or.dot(xh);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(or,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return tf.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(tf,o);let m=1/(g+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),To.subVectors(this.max,na),lr.subVectors(e.a,na),cr.subVectors(e.b,na),hr.subVectors(e.c,na),is.subVectors(cr,lr),ss.subVectors(hr,cr),bs.subVectors(lr,hr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-bs.z,bs.y,is.z,0,-is.x,ss.z,0,-ss.x,bs.z,0,-bs.x,-is.y,is.x,0,-ss.y,ss.x,0,-bs.y,bs.x,0];return!vh(t,lr,cr,hr,To)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,lr,cr,hr,To))?!1:(Eo.crossVectors(is,ss),t=[Eo.x,Eo.y,Eo.z],vh(t,lr,cr,hr,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new P,new P,new P,new P,new P,new P,new P,new P],Yn=new P,bo=new fn,lr=new P,cr=new P,hr=new P,is=new P,ss=new P,bs=new P,na=new P,To=new P,Eo=new P,Ts=new P;function vh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ts.fromArray(s,r);let o=i.x*Math.abs(Ts.x)+i.y*Math.abs(Ts.y)+i.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=n.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Yt=new P,wo=new he,x0=0,lt=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ou,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ma=class extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var va=class extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=new fn,ia=new P,bh=new P,yn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(bh)),this.expandByPoint(ia.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},S0=0,On=new ke,Th=new It,ur=new P,An=new fn,sa=new fn,nn=new P,Qe=class s extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?va:Ma)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(An.min,sa.min),An.expandByPoint(nn),nn.addVectors(An.max,sa.max),An.expandByPoint(nn)):(An.expandByPoint(sa.min),An.expandByPoint(sa.max))}An.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),nn.add(ur)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;let c=new P,h=new P,u=new P,d=new he,f=new he,p=new he,_=new P,g=new P;function m(x,v,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[x].add(_),o[v].add(_),o[R].add(_),l[x].add(g),l[v].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,v=M.length;x<v;++x){let R=M[x],L=R.start,N=R.count;for(let U=L,C=L+N;U<C;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let w=new P,y=new P,T=new P,b=new P;function A(x){T.fromBufferAttribute(i,x),b.copy(T);let v=o[x];w.copy(v),w.sub(T.multiplyScalar(T.dot(v))).normalize(),y.crossVectors(b,v);let L=y.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,L)}for(let x=0,v=M.length;x<v;++x){let R=M[x],L=R.start,N=R.count;for(let U=L,C=L+N;U<C;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new lt(d,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},un=new P,os=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Eh=new P,M0=new P,v0=new Xe,Kn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Eh.subVectors(n,t).cross(M0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Eh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||v0.getNormalMatrix(e),i=this.coplanarPoint(Eh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},b0=0,pn=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Ki,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=$h,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ot=class extends pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dr,ra=new P,fr=new P,pr=new P,mr=new he,aa=new he,Sp=new ke,Ao=new P,oa=new P,Ro=new P,nf=new he,wh=new he,sf=new he,Gt=class extends It{constructor(e=new Ot){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ns(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new os(n,3,0,!1)),dr.setAttribute("uv",new os(n,2,3,!1))}this.geometry=dr,this.material=e,this.center=new he(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Sp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Co(Ao.set(-.5,-.5,0),pr,a,fr,i,r),Co(oa.set(.5,-.5,0),pr,a,fr,i,r),Co(Ro.set(.5,.5,0),pr,a,fr,i,r),nf.set(0,0),wh.set(1,0),sf.set(1,1);let o=e.ray.intersectTriangle(Ao,oa,Ro,!1,ra);if(o===null&&(Co(oa.set(-.5,.5,0),pr,a,fr,i,r),wh.set(0,1),o=e.ray.intersectTriangle(Ao,Ro,oa,!1,ra),o===null))return;let l=e.ray.origin.distanceTo(ra);l<e.near||l>e.far||t.push({distance:l,point:ra.clone(),uv:ci.getInterpolation(ra,Ao,oa,Ro,nf,wh,sf,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Co(s,e,t,n,i,r){mr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(aa.x=r*mr.x-i*mr.y,aa.y=i*mr.x+r*mr.y):aa.copy(mr),s.copy(e),s.x+=aa.x,s.y+=aa.y,s.applyMatrix4(Sp)}var Di=new P,Ah=new P,Po=new P,Io=new P,Ds=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ah.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Io.copy(this.origin).sub(Ah);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Po),o=Io.dot(this.direction),l=-Io.dot(Po),c=Io.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ah).addScaledVector(Po,d),f}intersectSphere(e,t){if(e.radius<0)return null;Di.subVectors(e.center,this.origin);let n=Di.dot(this.direction),i=Di.dot(Di)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,M=n.y-a.y,w=n.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h),A,x,v,R,L,N,U,C,D,O,k,K;if(y>=T&&y>=b?(v=l,N=u,D=p,K=m,l>=0?(A=c,x=h,R=d,L=f,U=_,C=g,O=M,k=w):(A=h,x=c,R=f,L=d,U=g,C=_,O=w,k=M)):T>=b?(v=c,N=d,D=_,K=M,c>=0?(A=h,x=l,R=f,L=u,U=g,C=p,O=w,k=m):(A=l,x=h,R=u,L=f,U=p,C=g,O=m,k=w)):(v=h,N=f,D=g,K=w,h>=0?(A=l,x=c,R=u,L=d,U=p,C=_,O=m,k=M):(A=c,x=l,R=d,L=u,U=_,C=p,O=M,k=m)),v===0)return null;let X=A/v,j=x/v,G=1/v,te=R-X*N,oe=L-j*N,re=U-X*D,$=C-j*D,Pe=O-X*K,Y=k-j*K,J=Pe*$-Y*re,Se=te*Y-oe*Pe,Ge=re*oe-$*te;if(i){if(J<0||Se<0||Ge<0)return null}else if((J<0||Se<0||Ge<0)&&(J>0||Se>0||Ge>0))return null;let be=J+Se+Ge;if(be===0)return null;let je=G*(J*N+Se*D+Ge*K);return(be>0?je<0:je>0)?null:this.at(je/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rf=new ke,Es=new Ds,Lo=new yn,af=new P,No=new P,Do=new P,Uo=new P,Rh=new P,Fo=new P,of=new P,Oo=new P,ne=class extends It{constructor(e=new Qe,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Rh.fromBufferAttribute(u,e),a?Fo.addScaledVector(Rh,h):Fo.addScaledVector(Rh.sub(t),h))}t.add(Fo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(Lo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Lo,af)===null||Es.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(rf.copy(r).invert(),Es.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=w;y<T;y+=3){let b=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);i=Bo(this,m,e,n,c,h,u,b,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);i=Bo(this,a,e,n,c,h,u,M,w,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=w;y<T;y+=3){let b=y,A=y+1,x=y+2;i=Bo(this,m,e,n,c,h,u,b,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=g,w=g+1,y=g+2;i=Bo(this,a,e,n,c,h,u,M,w,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function T0(s,e,t,n,i,r,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===yi,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:s}}function Bo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,No),s.getVertexPosition(l,Do),s.getVertexPosition(c,Uo);let h=T0(s,e,t,n,No,Do,Uo,of);if(h){let u=new P;ci.getBarycoord(of,No,Do,Uo,u),i&&(h.uv=ci.getInterpolatedAttribute(i,o,l,c,u,new he)),r&&(h.uv1=ci.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};ci.getNormal(No,Do,Uo,d.normal),h.face=d,h.barycoord=u}return h}var la=new xt,lf=new xt,cf=new xt,E0=new xt,hf=new ke,Ho=new P,Ch=new yn,uf=new ke,Ph=new Ds,ba=class extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(i),e.ray.intersectsSphere(Ch)!==!1&&(uf.copy(i).invert(),Ph.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&Ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;lf.fromBufferAttribute(i.attributes.skinIndex,e),cf.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(la.copy(t),t.set(0,0,0,0)):(la.set(...t,1),t.set(0,0,0)),la.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=cf.getComponent(r);if(a!==0){let o=lf.getComponent(r);hf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(E0.copy(la).applyMatrix4(hf),a)}}return t.isVector4&&(t.w=la.w),t.applyMatrix4(this.bindMatrixInverse)}},Cr=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Pr=class extends zt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Ht,h=Ht,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},df=new ke,w0=new ke,Ta=class s{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:w0;df.multiplyMatrices(o,t[r]),df.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Pr(t,e,e,In,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Fe("Skeleton: No bone found with UUID:",r),a=new Cr),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Bi=class extends lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new ke,ff=new ke,ko=[],pf=new fn,A0=new ke,ca=new ne,ha=new yn,Cn=class extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,A0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),pf.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),ha.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gr),ff.multiplyMatrices(n,gr),ca.matrixWorld=ff,ca.raycast(e,ko);for(let a=0,o=ko.length;a<o;a++){let l=ko[a];l.instanceId=r,l.object=this,t.push(l)}ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(i*this.count),i,this.count,kl,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new yn,R0=new he(.5,.5),zo=new P,Ir=class{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],M=r[12],w=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-a,f-h,m-p,T-M).normalize(),i[1].setComponents(c+a,f+h,m+p,T+M).normalize(),i[2].setComponents(c+o,f+u,m+_,T+w).normalize(),i[3].setComponents(c-o,f-u,m-_,T-w).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,f-d,m-g,T-y).normalize();else if(i[4].setComponents(c-l,f-d,m-g,T-y).normalize(),t===Jn)i[5].setComponents(c+l,f+d,m+g,T+y).normalize();else if(t===Tr)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=R0.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(zo.x=i.normal.x>0?e.max.x:e.min.x,zo.y=i.normal.y>0?e.max.y:e.min.y,zo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ls=class extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hl=new P,ul=new P,mf=new ke,ua=new Ds,Go=new yn,Ih=new P,gf=new P,Us=class extends It{constructor(e=new Qe,t=new ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hl.fromBufferAttribute(t,i-1),ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hl.distanceTo(ul);e.setAttribute("lineDistance",new We(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;mf.copy(i).invert(),ua.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),M=h.getX(_+1),w=Vo(this,e,ua,l,m,M,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=Vo(this,e,ua,l,_,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=c){let m=Vo(this,e,ua,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Vo(this,e,ua,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vo(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(hl.fromBufferAttribute(o,i),ul.fromBufferAttribute(o,r),t.distanceSqToSegment(hl,ul,Ih,gf)>n)return;Ih.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ih);if(!(c<e.near||c>e.far))return{distance:c,point:gf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var _f=new P,xf=new P,Fs=class extends Us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_f.fromBufferAttribute(t,i),xf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_f.distanceTo(xf);e.setAttribute("lineDistance",new We(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ea=class extends Us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hi=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yf=new ke,kh=new Ds,Wo=new yn,Xo=new P,di=class extends It{constructor(e=new Qe,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(i),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;yf.copy(i).invert(),kh.copy(e.ray).applyMatrix4(yf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);Xo.fromBufferAttribute(u,g),Sf(Xo,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)Xo.fromBufferAttribute(u,p),Sf(Xo,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sf(s,e,t,n,i,r,a){let o=kh.distanceSqToPoint(s);if(o<t){let l=new P;kh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var wa=class extends zt{constructor(e=[],t=fs,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sn=class extends zt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cs=class extends zt{constructor(e,t,n=ti,i,r,a,o=Ht,l=Ht,c,h=ui,u=1){if(h!==ui&&h!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},dl=class extends cs{constructor(e,t=ti,n=fs,i,r,a=Ht,o=Ht,l,c=ui){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fi=class s extends Qe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function p(_,g,m,M,w,y,T,b,A,x,v){let R=y/A,L=T/x,N=y/2,U=T/2,C=b/2,D=A+1,O=x+1,k=0,K=0,X=new P;for(let j=0;j<O;j++){let G=j*L-U;for(let te=0;te<D;te++){let oe=te*R-N;X[_]=oe*M,X[g]=G*w,X[m]=C,c.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[m]=b>0?1:-1,h.push(X.x,X.y,X.z),u.push(te/A),u.push(1-j/x),k+=1}}for(let j=0;j<x;j++)for(let G=0;G<A;G++){let te=d+G+D*j,oe=d+G+D*(j+1),re=d+(G+1)+D*(j+1),$=d+(G+1)+D*j;l.push(te,oe,$),l.push(oe,re,$),K+=6}o.addGroup(f,K,v),f+=K,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Hn=class s extends Qe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mn=class s extends Qe{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],g=n/2,m=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function M(){let y=new P,T=new P,b=0,A=(t-e)/n;for(let x=0;x<=r;x++){let v=[],R=x/r,L=R*(t-e)+e;for(let N=0;N<=i;N++){let U=N/i,C=U*l+o,D=Math.sin(C),O=Math.cos(C);T.x=L*D,T.y=-R*n+g,T.z=L*O,u.push(T.x,T.y,T.z),y.set(D,A,O).normalize(),d.push(y.x,y.y,y.z),f.push(U,1-R),v.push(p++)}_.push(v)}for(let x=0;x<i;x++)for(let v=0;v<r;v++){let R=_[v][x],L=_[v+1][x],N=_[v+1][x+1],U=_[v][x+1];(e>0||v!==0)&&(h.push(R,L,U),b+=3),(t>0||v!==r-1)&&(h.push(L,N,U),b+=3)}c.addGroup(m,b,0),m+=b}function w(y){let T=p,b=new he,A=new P,x=0,v=y===!0?e:t,R=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;let L=p;for(let N=0;N<=i;N++){let C=N/i*l+o,D=Math.cos(C),O=Math.sin(C);A.x=v*O,A.y=g*R,A.z=v*D,u.push(A.x,A.y,A.z),d.push(0,R,0),b.x=D*.5+.5,b.y=O*.5*R+.5,f.push(b.x,b.y),p++}for(let N=0;N<i;N++){let U=T+N,C=L+N;y===!0?h.push(C,C+1,U):h.push(C+1,C,U),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ki=class s extends Mn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fl=class s extends Qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new P,y=new P,T=new P;for(let b=0;b<t.length;b+=3)f(t[b+0],w),f(t[b+1],y),f(t[b+2],T),l(w,y,T,M)}function l(M,w,y,T){let b=T+1,A=[];for(let x=0;x<=b;x++){A[x]=[];let v=M.clone().lerp(y,x/b),R=w.clone().lerp(y,x/b),L=b-x;for(let N=0;N<=L;N++)N===0&&x===b?A[x][N]=v:A[x][N]=v.clone().lerp(R,N/L)}for(let x=0;x<b;x++)for(let v=0;v<2*(b-x)-1;v++){let R=Math.floor(v/2);v%2===0?(d(A[x][R+1]),d(A[x+1][R]),d(A[x][R])):(d(A[x][R+1]),d(A[x+1][R+1]),d(A[x+1][R]))}}function c(M){let w=new P;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let y=g(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;a.push(y,1-T)}p(),u()}function u(){for(let M=0;M<a.length;M+=6){let w=a[M+0],y=a[M+2],T=a[M+4],b=Math.max(w,y,T),A=Math.min(w,y,T);b>.9&&A<.1&&(w<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,w){let y=M*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function p(){let M=new P,w=new P,y=new P,T=new P,b=new he,A=new he,x=new he;for(let v=0,R=0;v<r.length;v+=9,R+=6){M.set(r[v+0],r[v+1],r[v+2]),w.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),b.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),T.copy(M).add(w).add(y).divideScalar(3);let L=g(T);_(b,R+0,M,L),_(A,R+2,w,L),_(x,R+4,y,L)}}function _(M,w,y,T){T<0&&M.x===1&&(a[w]=M.x-1),y.x===0&&y.z===0&&(a[w]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var qo=new P,Yo=new P,Lh=new P,Ko=new ci,Ra=class extends Qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Sr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=Ko;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Ko.getNormal(Lh),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let w=(M+1)%3,y=u[M],T=u[w],b=Ko[h[M]],A=Ko[h[w]],x=`${y}_${T}`,v=`${T}_${y}`;v in d&&d[v]?(Lh.dot(d[v].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(A.x,A.y,A.z)),d[v]=null):x in d||(d[x]={index0:c[M],index1:c[w],normal:Lh.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:g}=d[p];qo.fromBufferAttribute(o,_),Yo.fromBufferAttribute(o,g),f.push(qo.x,qo.y,qo.z),f.push(Yo.x,Yo.y,Yo.z)}this.setAttribute("position",new We(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new he:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,i=[],r=[],a=[],o=new P,l=new ke;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos($e(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ca=class extends kn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pl=class extends Ca{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hu(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Mf=new P,vf=new P,Nh=new hu,Dh=new hu,Uh=new hu,hs=class extends kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(vf.subVectors(i[0],i[1]).add(i[0]),c=vf);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Mf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Mf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Nh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Dh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),Uh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Nh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Dh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Uh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Nh.calc(l),Dh.calc(l),Uh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bf(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function C0(s,e){let t=1-s;return t*t*e}function P0(s,e){return 2*(1-s)*s*e}function I0(s,e){return s*s*e}function fa(s,e,t,n){return C0(s,e)+P0(s,t)+I0(s,n)}function L0(s,e){let t=1-s;return t*t*t*e}function N0(s,e){let t=1-s;return 3*t*t*s*e}function D0(s,e){return 3*(1-s)*s*s*e}function U0(s,e){return s*s*s*e}function pa(s,e,t,n,i){return L0(s,e)+N0(s,t)+D0(s,n)+U0(s,i)}var ml=class extends kn{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,i.x,r.x,a.x,o.x),pa(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gl=class extends kn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,i.x,r.x,a.x,o.x),pa(e,i.y,r.y,a.y,o.y),pa(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends kn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends kn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends kn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,i.x,r.x,a.x),fa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends kn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,i.x,r.x,a.x),fa(e,i.y,r.y,a.y),fa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sl=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(bf(o,l.x,c.x,h.x,u.x),bf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new he().fromArray(i))}return this}},F0=Object.freeze({__proto__:null,ArcCurve:pl,CatmullRomCurve3:hs,CubicBezierCurve:ml,CubicBezierCurve3:gl,EllipseCurve:Ca,LineCurve:_l,LineCurve3:xl,QuadraticBezierCurve:yl,QuadraticBezierCurve3:Pa,SplineCurve:Sl});var Ia=class s extends fl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var ve=class s extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let w=0;w<c;w++){let y=w*u-r;p.push(y,-M,0),_.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let w=M+c*m,y=M+c*(m+1),T=M+1+c*(m+1),b=M+1+c*m;f.push(w,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},zi=class s extends Qe{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new P,p=new he;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){let g=_*(n+1);for(let m=0;m<n;m++){let M=m+g,w=M,y=M+n+1,T=M+n+2,b=M+1;o.push(w,y,b),o.push(y,T,b)}}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var pi=class s extends Qe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],w=m/n,y=a+w*o,T=e*Math.cos(y),b=Math.sqrt(e*e-T*T),A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){let v=x/t,R=i+v*r;u.x=-b*Math.cos(R),u.y=T,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(v+A,1-w),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let w=h[m][M+1],y=h[m][M],T=h[m+1][M],b=h[m+1][M+1];(m!==0||a>0)&&f.push(w,y,b),(m!==n-1||l<Math.PI)&&f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new We(p,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var La=class s extends Qe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new P,f=new P,p=new P;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=i;m++){let M=m/i*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,M=(i+1)*(_-1)+g-1,w=(i+1)*(_-1)+g,y=(i+1)*_+g;l.push(m,M,y),l.push(M,w,y)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Os=class s extends Qe{constructor(e=new Pa(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new he,h=new P,u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function _(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),M(),m()}function g(w){h=e.getPointAt(w/t,h);let y=a.normals[w],T=a.binormals[w];for(let b=0;b<=i;b++){let A=b/i*Math.PI*2,x=Math.sin(A),v=-Math.cos(A);l.x=v*y.x+x*T.x,l.y=v*y.y+x*T.y,l.z=v*y.z+x*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=t;w++)for(let y=1;y<=i;y++){let T=(i+1)*(w-1)+(y-1),b=(i+1)*w+(y-1),A=(i+1)*w+y,x=(i+1)*(w-1)+y;p.push(T,b,x),p.push(b,A,x)}}function M(){for(let w=0;w<=t;w++)for(let y=0;y<=i;y++)c.x=w/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new F0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ws(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Tf(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Tf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ln(s){let e={};for(let t=0;t<s.length;t++){let n=Ws(s[t]);for(let i in n)e[i]=n[i]}return e}function Tf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function O0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Ji={clone:Ws,merge:ln},B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(i.value);break;case"v2":this.uniforms[n].value=new he().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lr=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ut=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ml=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vl=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function as(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Qo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function k0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ef(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function z0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bl=class extends mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:As,endingEnd:As}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rs:r=e,o=2*t-n;break;case ma:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rs:a=e,l=2*n-t;break;case ma:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,w=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+M*a[c+T]+w*a[l+T]+y*a[u+T];return r}},Na=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Tl=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},El=class extends mi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),_=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let _=a[c+p],g=a[l+p],m=f*d+p*2,M=u[m],w=u[m+1],y=e*d+p*2,T=h[y],b=h[y+1],A=V0(n,t,M,T,i);r[p]=Mp(A,_,w,b,g)}return r}};function Mp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function G0(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function V0(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Mp(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=G0(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=as(t,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:as(e.times,Array),values:as(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Qo(e.settings)&&(n.settings={inTangents:as(e.settings.inTangents,Array),outTangents:as(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new El(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break;case Hh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return $o;case this.InterpolantFactoryMethodBezier:return Hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Qo(this.settings)&&(wf(this.settings.inTangents,e),wf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Xm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$o,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Qo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function wf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Is;var Gi=class extends bn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ps;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};Da.prototype.ValueTypeName="color";var Vi=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};Vi.prototype.ValueTypeName="number";var wl=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Tt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wi=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends bn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ps;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};us.prototype.ValueTypeName="vector";var qi=class{constructor(e="",t=-1,n=[],i=Sc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(X0(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=k0(l);l=Ef(l,1,h),c=Ef(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Vi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function W0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Da;case"quaternion":return Wi;case"bool":case"boolean":return Gi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function X0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=W0(s.type);if(s.times===void 0){let n=[],i=[];z0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Qo(s.settings)&&(t.settings={inTangents:as(s.settings.inTangents,Float32Array),outTangents:as(s.settings.outTangents,Float32Array)}),t}var hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Af(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Af(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Af(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Al=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new Al,gi=class{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},zh=class extends Error{constructor(e,t){super(e),this.response=t}},Nr=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:i});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ui[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,g=new ReadableStream({start(m){M();function M(){u.read().then(({done:w,value:y})=>{if(w)m.close();else{_+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let b=0,A=h.length;b<A;b++){let x=h[b];x.onProgress&&x.onProgress(T)}m.enqueue(y),M()}},w=>{m.error(w)})}}});return new Response(g)}else throw new zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{hi.add(`file:${e}`,c);let h=Ui[e];delete Ui[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _r=new WeakMap,Rl=class extends gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=_r.get(a);u===void 0&&(u=[],_r.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Er("img");function l(){h(),t&&t(this);let u=_r.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}_r.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),hi.remove(`image:${e}`);let d=_r.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}_r.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Bs=class extends gi{constructor(e){super(e)}load(e,t,n,i){let r=new zt,a=new Rl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Hs=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ua=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fh=new ke,Rf=new P,Cf=new P,Dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zo=new P,Jo=new Tt,li=new P,Fa=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,li.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zo,Jo,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new P,Pf=new he,If=new he,Kt=class extends Fa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Pf,If),t.subVectors(If,Pf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gh=class extends Dr{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Oa=class extends Hs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Vh=class extends Dr{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},_i=class extends Hs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xi=class extends Fa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wh=class extends Dr{constructor(){super(new xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Yi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Oh=new WeakMap,Ba=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=hi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Oh.has(a)===!0?(i&&i(Oh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return hi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Oh.set(l,c),hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xr=-90,yr=1,Cl=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Kt(xr,yr,e,t);i.layers=this.layers,this.add(i);let r=new Kt(xr,yr,e,t);r.layers=this.layers,this.add(r);let a=new Kt(xr,yr,e,t);a.layers=this.layers,this.add(a);let o=new Kt(xr,yr,e,t);o.layers=this.layers,this.add(o);let l=new Kt(xr,yr,e,t);l.layers=this.layers,this.add(l);let c=new Kt(xr,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Pl=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=q0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function q0(){this._document.hidden===!1&&this.reset()}var Il=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Tt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Tt.multiplyQuaternionsFlat(e,a,e,t,e,n),Tt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},du="\\[\\]\\.:\\/",Y0=new RegExp("["+du+"]","g"),fu="[^"+du+"]",K0="[^"+du.replace("\\.","")+"]",Z0=/((?:WC+[\/:])*)/.source.replace("WC",fu),J0=/(WCOD+)?/.source.replace("WCOD",K0),$0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),j0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),Q0=new RegExp("^"+Z0+J0+$0+j0+"$"),eg=["material","materials","bones","map"],Xh=class{constructor(e,t,n){let i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y0,"")}static parseTrackName(e){let t=Q0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Xh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ll=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:As,endingEnd:As};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ip,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case rp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Sc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===sp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===np){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Rs,i.endingEnd=Rs):(e?i.endingStart=this.zeroSlopeAtStart?Rs:As:i.endingStart=ma,t?i.endingEnd=this.zeroSlopeAtEnd?Rs:As:i.endingEnd=ma)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},tg=new Float32Array(1),ka=class extends jn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;p=new Il(Mt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Na(new Float32Array(2),new Float32Array(2),1,tg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?qi.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Sc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Ll(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?qi.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var yu=class yu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};yu.prototype.isMatrix2=!0;var qh=yu;function pu(s,e,t,n){let i=ng(n);switch(t){case su:return s*e;case kl:return s*e/i.components*i.byteLength;case zl:return s*e/i.components*i.byteLength;case ms:return s*e*2/i.components*i.byteLength;case Gl:return s*e*2/i.components*i.byteLength;case ru:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case Vl:return s*e*4/i.components*i.byteLength;case Za:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $a:case ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(s,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(s,8)*Math.max(e,8)/2;case Kl:case Zl:case $l:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Qa:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case pc:case mc:case gc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _c:case xc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case eo:case yc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(s){switch(s){case Tn:case eu:return{byteLength:1,components:1};case Or:case tu:case jt:return{byteLength:2,components:1};case Bl:case Hl:return{byteLength:2,components:4};case ti:case Ol:case Pn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wp(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sg(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ag=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,__=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Px=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:rg,alphahash_pars_fragment:ag,alphamap_fragment:og,alphamap_pars_fragment:lg,alphatest_fragment:cg,alphatest_pars_fragment:hg,aomap_fragment:ug,aomap_pars_fragment:dg,batching_pars_vertex:fg,batching_vertex:pg,begin_vertex:mg,beginnormal_vertex:gg,bsdfs:_g,iridescence_fragment:xg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:Mg,clipping_planes_pars_vertex:vg,clipping_planes_vertex:bg,color_fragment:Tg,color_pars_fragment:Eg,color_pars_vertex:wg,color_vertex:Ag,common:Rg,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Pg,displacementmap_pars_vertex:Ig,displacementmap_vertex:Lg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Dg,colorspace_fragment:Ug,colorspace_pars_fragment:Fg,envmap_fragment:Og,envmap_common_pars_fragment:Bg,envmap_pars_fragment:Hg,envmap_pars_vertex:kg,envmap_physical_pars_fragment:$g,envmap_vertex:zg,fog_vertex:Gg,fog_pars_vertex:Vg,fog_fragment:Wg,fog_pars_fragment:Xg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Yg,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:Zg,lights_pars_begin:Jg,lights_toon_fragment:jg,lights_toon_pars_fragment:Qg,lights_phong_fragment:e_,lights_phong_pars_fragment:t_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:a_,lightprobes_pars_fragment:o_,logdepthbuf_fragment:l_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:u_,map_fragment:d_,map_pars_fragment:f_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:__,morphinstance_vertex:x_,morphcolor_vertex:y_,morphnormal_vertex:S_,morphtarget_pars_vertex:M_,morphtarget_vertex:v_,normal_fragment_begin:b_,normal_fragment_maps:T_,normal_pars_fragment:E_,normal_pars_vertex:w_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:L_,opaque_fragment:N_,packing:D_,premultiplied_alpha_fragment:U_,project_vertex:F_,dithering_fragment:O_,dithering_pars_fragment:B_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:k_,shadowmap_pars_fragment:z_,shadowmap_pars_vertex:G_,shadowmap_vertex:V_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:K_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:$_,tonemapping_pars_fragment:j_,transmission_fragment:Q_,transmission_pars_fragment:ex,uv_pars_fragment:tx,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:sx,background_vert:rx,background_frag:ax,backgroundCube_vert:ox,backgroundCube_frag:lx,cube_vert:cx,cube_frag:hx,depth_vert:ux,depth_frag:dx,distance_vert:fx,distance_frag:px,equirect_vert:mx,equirect_frag:gx,linedashed_vert:_x,linedashed_frag:xx,meshbasic_vert:yx,meshbasic_frag:Sx,meshlambert_vert:Mx,meshlambert_frag:vx,meshmatcap_vert:bx,meshmatcap_frag:Tx,meshnormal_vert:Ex,meshnormal_frag:wx,meshphong_vert:Ax,meshphong_frag:Rx,meshphysical_vert:Cx,meshphysical_frag:Px,meshtoon_vert:Ix,meshtoon_frag:Lx,points_vert:Nx,points_frag:Dx,shadow_vert:Ux,shadow_frag:Fx,sprite_vert:Ox,sprite_frag:Bx},xe={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},bi={basic:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:ln([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:ln([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new le(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:ln([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:ln([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:ln([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:ln([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:ln([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:ln([xe.lights,xe.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};bi.physical={uniforms:ln([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Tc={r:0,b:0,g:0},Hx=new ke,Xp=new Xe;Xp.set(-1,0,0,0,1,0,0,0,1);function kx(s,e,t,n,i,r){let a=new le(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function p(M){let w=!1,y=f(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===Ka)?(c===void 0&&(c=new ne(new fi(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Ws(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xp),c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==ut,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ne(new ve(2,2),new Et({name:"BackgroundMaterial",uniforms:Ws(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,w){M.getRGB(Tc,uu(s)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:_,dispose:m}}function zx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(L,N,U,C,D){let O=!1,k=u(L,C,U,N);r!==k&&(r=k,c(r.object)),O=f(L,C,U,D),O&&p(L,C,U,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(L,N,U,C),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,N,U,C){let D=C.wireframe===!0,O=n[N.id];O===void 0&&(O={},n[N.id]=O);let k=L.isInstancedMesh===!0?L.id:0,K=O[k];K===void 0&&(K={},O[k]=K);let X=K[U.id];X===void 0&&(X={},K[U.id]=X);let j=X[D];return j===void 0&&(j=d(l()),X[D]=j),j}function d(L){let N=[],U=[],C=[];for(let D=0;D<t;D++)N[D]=0,U[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:C,object:L,attributes:{},index:null}}function f(L,N,U,C){let D=r.attributes,O=N.attributes,k=0,K=U.getAttributes();for(let X in K)if(K[X].location>=0){let G=D[X],te=O[X];if(te===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),G===void 0||G.attribute!==te||te&&G.data!==te.data)return!0;k++}return r.attributesNum!==k||r.index!==C}function p(L,N,U,C){let D={},O=N.attributes,k=0,K=U.getAttributes();for(let X in K)if(K[X].location>=0){let G=O[X];G===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));let te={};te.attribute=G,G&&G.data&&(te.data=G.data),D[X]=te,k++}r.attributes=D,r.attributesNum=k,r.index=C}function _(){let L=r.newAttributes;for(let N=0,U=L.length;N<U;N++)L[N]=0}function g(L){m(L,0)}function m(L,N){let U=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;U[L]=1,C[L]===0&&(s.enableVertexAttribArray(L),C[L]=1),D[L]!==N&&(s.vertexAttribDivisor(L,N),D[L]=N)}function M(){let L=r.newAttributes,N=r.enabledAttributes;for(let U=0,C=N.length;U<C;U++)N[U]!==L[U]&&(s.disableVertexAttribArray(U),N[U]=0)}function w(L,N,U,C,D,O,k){k===!0?s.vertexAttribIPointer(L,N,U,D,O):s.vertexAttribPointer(L,N,U,C,D,O)}function y(L,N,U,C){_();let D=C.attributes,O=U.getAttributes(),k=N.defaultAttributeValues;for(let K in O){let X=O[K];if(X.location>=0){let j=D[K];if(j===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let G=j.normalized,te=j.itemSize,oe=e.get(j);if(oe===void 0)continue;let re=oe.buffer,$=oe.type,Pe=oe.bytesPerElement,Y=$===s.INT||$===s.UNSIGNED_INT||j.gpuType===Ol;if(j.isInterleavedBufferAttribute){let J=j.data,Se=J.stride,Ge=j.offset;if(J.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)m(X.location+be,J.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let be=0;be<X.locationSize;be++)g(X.location+be);s.bindBuffer(s.ARRAY_BUFFER,re);for(let be=0;be<X.locationSize;be++)w(X.location+be,te/X.locationSize,$,G,Se*Pe,(Ge+te/X.locationSize*be)*Pe,Y)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)m(X.location+J,j.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<X.locationSize;J++)g(X.location+J);s.bindBuffer(s.ARRAY_BUFFER,re);for(let J=0;J<X.locationSize;J++)w(X.location+J,te/X.locationSize,$,G,te*Pe,te/X.locationSize*J*Pe,Y)}}else if(k!==void 0){let G=k[K];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(X.location,G);break;case 3:s.vertexAttrib3fv(X.location,G);break;case 4:s.vertexAttrib4fv(X.location,G);break;default:s.vertexAttrib1fv(X.location,G)}}}}M()}function T(){v();for(let L in n){let N=n[L];for(let U in N){let C=N[U];for(let D in C){let O=C[D];for(let k in O)h(O[k].object),delete O[k];delete C[D]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let U in N){let C=N[U];for(let D in C){let O=C[D];for(let k in O)h(O[k].object),delete O[k];delete C[D]}}delete n[L.id]}function A(L){for(let N in n){let U=n[N];for(let C in U){let D=U[C];if(D[L.id]===void 0)continue;let O=D[L.id];for(let k in O)h(O[k].object),delete O[k];delete D[L.id]}}}function x(L){for(let N in n){let U=n[N],C=L.isInstancedMesh===!0?L.id:0,D=U[C];if(D!==void 0){for(let O in D){let k=D[O];for(let K in k)h(k[K].object),delete k[K];delete D[O]}delete U[C],Object.keys(U).length===0&&delete n[N]}}}function v(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:v,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Gx(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==In&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Tn&&A!==Pn&&!x&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:b}}function Wx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Kn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,w=M*4,y=m.clippingState||null;l.value=y,y=h(p,d,w,f);for(let T=0;T!==w;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=f;w!==_;++w,y+=4)a.copy(u[w]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var zr=4,Xx=6,qx=20,Yx=256,no=new xi,bp=new le,Su=null,Mu=0,vu=0,bu=!1,Kx=new P,Xs=new P,wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Kx}=r;Su=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,Mu,vu),this._renderer.xr.enabled=bu,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:jt,format:In,colorSpace:dn,depthBuffer:!1},i=Tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zx(r)),this._blurMaterial=$x(r,e,t),this._ggxMaterial=Jx(r,e,t)}return i}_compileMaterial(e){let t=new ne(new Qe,e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,n,i,r){let l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(bp),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new fi,new et({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(bp),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let T=this._cubeSize;kr(i,y*T,w>2?T:0,T,T),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===fs||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,no)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-zr?n-p+zr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,kr(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(o,no),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,kr(e,g,m,3*_,2*_),i.setRenderTarget(e),i.render(o,no)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-zr?i-this._lodMax+zr:0),d=4*(this._cubeSize-h);kr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,no)}};function Zx(s){let e=[],t=[],n=s,i=s-zr+1+Xx;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let m=0;m<u;m++){let M=m%3*2/3-1,w=m>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(y,f*d*m);for(let T=0;T<d;T++){let b=h[T*2]*2-1,A=h[T*2+1]*2-1;m===0?Xs.set(1,A,b):m===1?Xs.set(-b,1,-A):m===2?Xs.set(-b,A,1):m===3?Xs.set(-1,A,-b):m===4?Xs.set(-b,-1,A):Xs.set(b,A,-1),Xs.toArray(_,(m*d+T)*f)}}let g=new Qe;g.setAttribute("position",new lt(p,f)),g.setAttribute("outputDirection",new lt(_,f)),t.push(new ne(g,null)),n>zr&&n--}return{lodMeshes:t,sizeLods:e}}function Tp(s,e,t){let n=new Ft(s,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Jx(s,e,t){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function $x(s,e,t){return new Et({name:"SphericalGaussianBlur",defines:{SAMPLES:qx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ep(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function wp(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ac=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fi(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:zn});r.uniforms.tEquirect.value=t;let a=new ne(i,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=kt),new Cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function jx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Dl||f===Ul)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Ac(p.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===Dl||f===Ul,_=f===fs||f===Gs;if(p||_){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new wc(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new wc(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Dl?d.mapping=fs:f===Ul&&(d.mapping=Gs),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Qx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Cs("WebGLRenderer: "+n+" extension not supported."),i}}}function ey(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,_=0;if(p===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let w=0,y=M.length;w<y;w+=3){let T=M[w+0],b=M[w+1],A=M[w+2];d.push(T,b,b,A,A,T)}}else{let M=p.array;_=p.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let T=w+0,b=w+1,A=w+2;d.push(T,b,b,A,A,T)}}let g=new(p.count>=65535?va:Ma)(d,1);g.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ty(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ny(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function iy(s,e,t){let n=new WeakMap,i=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let y=o.attributes.position.count*w,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*u),A=new xa(b,y,T,u);A.type=Pn,A.needsUpdate=!0;let x=w*4;for(let R=0;R<u;R++){let L=g[R],N=m[R],U=M[R],C=y*T*4*R;for(let D=0;D<L.count;D++){let O=D*x;f===!0&&(i.fromBufferAttribute(L,D),b[C+O+0]=i.x,b[C+O+1]=i.y,b[C+O+2]=i.z,b[C+O+3]=0),p===!0&&(i.fromBufferAttribute(N,D),b[C+O+4]=i.x,b[C+O+5]=i.y,b[C+O+6]=i.z,b[C+O+7]=0),_===!0&&(i.fromBufferAttribute(U,D),b[C+O+8]=i.x,b[C+O+9]=i.y,b[C+O+10]=i.z,b[C+O+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new he(y,T)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function sy(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ry={[Ga]:"LINEAR_TONE_MAPPING",[Va]:"REINHARD_TONE_MAPPING",[Wa]:"CINEON_TONE_MAPPING",[Xa]:"ACES_FILMIC_TONE_MAPPING",[Ya]:"AGX_TONE_MAPPING",[zs]:"NEUTRAL_TONE_MAPPING",[qa]:"CUSTOM_TONE_MAPPING"};function ay(s,e,t,n,i,r){let a=new Ft(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qe;c.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new We([0,2,0,0,2,0],2));let h=new Lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ne(c,h),d=new xi(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,M=[],w=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<M.length;b++){let A=M[b];A.setSize&&A.setSize(y,T)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;let T=a.width,b=a.height;M.length>0&&o===null&&(o=new Ft(T,b,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new Ft(T,b,{type:jt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(T,b)}},this.begin=function(y,T){if(_||y.toneMapping===Qn&&M.length===0)return!1;if(m=T,T!==null){let b=T.width,A=T.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return w===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Qn,!0},this.hasRenderPass=function(){return w},this.end=function(y,T){y.toneMapping=g,_=!0;let b=a,A=o;for(let x=0;x<M.length;x++){let v=M[x];v.enabled!==!1&&(v.render(y,A,b,T),v.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},Ye.getTransfer(f)===ut&&(h.defines.SRGB_TRANSFER="");let x=ry[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var qp=new zt,wu=new cs(1,1),Yp=new xa,Kp=new cl,Zp=new wa,Ap=[],Rp=[],Cp=new Float32Array(16),Pp=new Float32Array(9),Ip=new Float32Array(4);function Vr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ap[i];if(r===void 0&&(r=new Float32Array(i),Ap[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pc(s,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function oy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ly(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function cy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function hy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function uy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Ip.set(n),s.uniformMatrix2fv(this.addr,!1,Ip),en(t,n)}}function dy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Pp.set(n),s.uniformMatrix3fv(this.addr,!1,Pp),en(t,n)}}function fy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Cp.set(n),s.uniformMatrix4fv(this.addr,!1,Cp),en(t,n)}}function py(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function my(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function _y(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function xy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function Sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function My(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function vy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wu.compareFunction=t.isReversedDepthBuffer()?bc:vc,r=wu):r=qp,t.setTexture2D(e||r,i)}function by(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kp,i)}function Ty(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zp,i)}function Ey(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yp,i)}function wy(s){switch(s){case 5126:return oy;case 35664:return ly;case 35665:return cy;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return xy;case 36294:return yy;case 36295:return Sy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ey}}function Ay(s,e){s.uniform1fv(this.addr,e)}function Ry(s,e){let t=Vr(e,this.size,2);s.uniform2fv(this.addr,t)}function Cy(s,e){let t=Vr(e,this.size,3);s.uniform3fv(this.addr,t)}function Py(s,e){let t=Vr(e,this.size,4);s.uniform4fv(this.addr,t)}function Iy(s,e){let t=Vr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ly(s,e){let t=Vr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ny(s,e){let t=Vr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Dy(s,e){s.uniform1iv(this.addr,e)}function Uy(s,e){s.uniform2iv(this.addr,e)}function Fy(s,e){s.uniform3iv(this.addr,e)}function Oy(s,e){s.uniform4iv(this.addr,e)}function By(s,e){s.uniform1uiv(this.addr,e)}function Hy(s,e){s.uniform2uiv(this.addr,e)}function ky(s,e){s.uniform3uiv(this.addr,e)}function zy(s,e){s.uniform4uiv(this.addr,e)}function Gy(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=wu:a=qp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Vy(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Kp,r[a])}function Wy(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Zp,r[a])}function Xy(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Yp,r[a])}function qy(s){switch(s){case 5126:return Ay;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Iy;case 35675:return Ly;case 35676:return Ny;case 5124:case 35670:return Dy;case 35667:case 35671:return Uy;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return By;case 36294:return Hy;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}var Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wy(t.type)}},Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qy(t.type)}},Cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Tu=/(\w+)(\])?(\[|\.)?/g;function Lp(s,e){s.seq.push(e),s.map[e.id]=e}function Yy(s,e,t){let n=s.name,i=n.length;for(Tu.lastIndex=0;;){let r=Tu.exec(n),a=Tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Lp(t,c===void 0?new Au(o,s,e):new Ru(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Cu(o),Lp(t,u)),t=u}}}var Gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yy(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Np(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Ky=37297,Zy=0;function Jy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Dp=new Xe;function $y(s){Ye._getMatrix(Dp,Ye.workingColorSpace,s);let e=`mat3( ${Dp.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case ga:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Up(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jy(s.getShaderSource(e),o)}else return r}function jy(s,e){let t=$y(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Qy={[Ga]:"Linear",[Va]:"Reinhard",[Wa]:"Cineon",[Xa]:"ACESFilmic",[Ya]:"AgX",[zs]:"Neutral",[qa]:"Custom"};function eS(s,e){let t=Qy[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ec=new P;function tS(){Ye.getLuminanceCoefficients(Ec);let s=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function iS(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sS(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function so(s){return s!==""}function Fp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Op(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(s){return s.replace(rS,oS)}var aS=new Map;function oS(s,e){let t=Je[e];if(t===void 0){let n=aS.get(e);if(n!==void 0)t=Je[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pu(t)}var lS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(s){return s.replace(lS,cS)}function cS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var hS={[za]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function uS(s){return hS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dS={[fs]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function fS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":dS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var pS={[Gs]:"ENVMAP_MODE_REFRACTION"};function mS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":pS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gS={[jh]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function _S(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":gS[s.combine]||"ENVMAP_BLENDING_NONE"}function xS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yS(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=uS(t),c=fS(t),h=mS(t),u=_S(t),d=xS(t),f=nS(t),p=iS(r),_=i.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(so).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(so).join(`
`),m.length>0&&(m+=`
`)):(g=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),m=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Qn?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,jy("linearToOutputTexel",t.outputColorSpace),tS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),a=Pu(a),a=Fp(a,t),a=Op(a,t),o=Pu(o),o=Fp(o,t),o=Op(o,t),a=Bp(a),o=Bp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=M+g+a,y=M+m+o,T=Np(i,i.VERTEX_SHADER,w),b=Np(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(L){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(T)||"",C=i.getShaderInfoLog(b)||"",D=N.trim(),O=U.trim(),k=C.trim(),K=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,b);else{let j=Up(i,T,"vertex"),G=Up(i,b,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+j+`
`+G)}else D!==""?Fe("WebGLProgram: Program Info Log:",D):(O===""||k==="")&&(X=!1);X&&(L.diagnostics={runnable:K,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:k,prefix:m}})}i.deleteShader(T),i.deleteShader(b),x=new Gr(i,_),v=sS(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,Ky)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}var SS=0,Iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lu(e),t.set(e,n)),n}},Lu=class{constructor(e){this.id=SS++,this.code=e,this.usedTimes=0}};function MS(s){return s===ms||s===Qa||s===eo}function vS(s,e,t,n,i,r){let a=new ya,o=new Iu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,v,R,L,N,U){let C=L.fog,D=N.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||O,k),X=K&&K.mapping===Ka?K.image.height:null,j=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Fe("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let G=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=G!==void 0?G.length:0,oe=0;D.morphAttributes.position!==void 0&&(oe=1),D.morphAttributes.normal!==void 0&&(oe=2),D.morphAttributes.color!==void 0&&(oe=3);let re,$,Pe,Y;if(j){let Rt=bi[j];re=Rt.vertexShader,$=Rt.fragmentShader}else{re=x.vertexShader,$=x.fragmentShader;let Rt=o.getVertexShaderStage(x),ft=o.getFragmentShaderStage(x);o.update(x,Rt,ft),Pe=Rt.id,Y=ft.id}let J=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Ge=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,je=!!x.map,$t=!!x.matcap,nt=!!K,ht=!!x.aoMap,At=!!x.lightMap,at=!!x.bumpMap&&x.wireframe===!1,Lt=!!x.normalMap,tn=!!x.displacementMap,xn=!!x.emissiveMap,Dt=!!x.metalnessMap,Xt=!!x.roughnessMap,H=x.anisotropy>0,sn=x.clearcoat>0,gt=x.dispersion>0,I=x.retroreflectivity>0,S=x.iridescence>0,z=x.sheen>0,q=x.transmission>0,Q=H&&!!x.anisotropyMap,ce=sn&&!!x.clearcoatMap,ue=sn&&!!x.clearcoatNormalMap,ee=sn&&!!x.clearcoatRoughnessMap,se=S&&!!x.iridescenceMap,de=S&&!!x.iridescenceThicknessMap,Oe=z&&!!x.sheenColorMap,_e=z&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Be=!!x.specularColorMap,ze=!!x.specularIntensityMap,qe=q&&!!x.transmissionMap,B=q&&!!x.thicknessMap,pe=!!x.gradientMap,ie=!!x.alphaMap,me=x.alphaTest>0,Te=!!x.alphaHash,ae=!!x.extensions,He=Qn;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=s.toneMapping);let De={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:re,fragmentShader:$,defines:x.defines,customVertexShaderID:Pe,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&N.instanceColor!==null,instancingMorph:Ge&&N.morphTexture!==null,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:$t,envMap:nt,envMapMode:nt&&K.mapping,envMapCubeUVHeight:X,aoMap:ht,lightMap:At,bumpMap:at,normalMap:Lt,displacementMap:tn,emissiveMap:xn,normalMapObjectSpace:Lt&&x.normalMapType===op,normalMapTangentSpace:Lt&&x.normalMapType===Mc,packedNormalMap:Lt&&x.normalMapType===Mc&&MS(x.normalMap.format),metalnessMap:Dt,roughnessMap:Xt,anisotropy:H,anisotropyMap:Q,clearcoat:sn,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:ee,dispersion:gt,retroreflection:I,iridescence:S,iridescenceMap:se,iridescenceThicknessMap:de,sheen:z,sheenColorMap:Oe,sheenRoughnessMap:_e,specularMap:fe,specularColorMap:Be,specularIntensityMap:ze,transmission:q,transmissionMap:qe,thicknessMap:B,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:me,alphaHash:Te,combine:x.combine,mapUv:je&&p(x.map.channel),aoMapUv:ht&&p(x.aoMap.channel),lightMapUv:At&&p(x.lightMap.channel),bumpMapUv:at&&p(x.bumpMap.channel),normalMapUv:Lt&&p(x.normalMap.channel),displacementMapUv:tn&&p(x.displacementMap.channel),emissiveMapUv:xn&&p(x.emissiveMap.channel),metalnessMapUv:Dt&&p(x.metalnessMap.channel),roughnessMapUv:Xt&&p(x.roughnessMap.channel),anisotropyMapUv:Q&&p(x.anisotropyMap.channel),clearcoatMapUv:ce&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&p(x.sheenRoughnessMap.channel),specularMapUv:fe&&p(x.specularMap.channel),specularColorMapUv:Be&&p(x.specularColorMap.channel),specularIntensityMapUv:ze&&p(x.specularIntensityMap.channel),transmissionMapUv:qe&&p(x.transmissionMap.channel),thicknessMapUv:B&&p(x.thicknessMap.channel),alphaMapUv:ie&&p(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Lt||H),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(je||ie),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&Lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:oe,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:xn&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vt,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function g(x){let v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)v.push(R),v.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(v,x),M(v,x),v.push(s.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function m(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numSunLights),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numSunLightShadows),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function M(x,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let v=f[x.type],R;if(v){let L=bi[v];R=Ji.clone(L.uniforms)}else R=x.uniforms;return R}function y(x,v){let R=h.get(v);return R!==void 0?++R.usedTimes:(R=new yS(s,v,x,i),c.push(R),h.set(v,R)),R}function T(x){if(--x.usedTimes===0){let v=c.indexOf(x);c[v]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:A}}function bS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function TS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function kp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,g,m){let M=s[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},s[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=a(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=g,M.group=m),e++,M}function l(d,f,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);let w=o(d,f,p,_,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):t.push(w)}function c(d,f,p,_,g,m){let M=o(d,f,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||TS),n.length>1&&n.sort(f||kp),i.length>1&&i.sort(f||kp)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function ES(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new zp,s.set(n,[a])):i>=r.length?(a=new zp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function wS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new le};break;case"SpotLight":t={position:new P,direction:new P,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function AS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var RS=0;function CS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function PS(s){let e=new wS,t=AS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new ke,a=new ke;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,w=0,y=0,T=0,b=0,A=0,x=0,v=0,R=0;c.sort(CS);for(let N=0,U=c.length;N<U;N++){let C=c[N],D=C.color,O=C.intensity,k=C.distance,K=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ms?K=C.shadow.map.texture:K=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],O);R++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=K;let te=j.getViewportCount();for(let oe=0;oe<te;oe++)n.sunShadowMatrix[_+oe]=j.getMatrix(oe),n.sunShadowCascade[_+oe]=j._cascadeData[oe];_+=te,p++}n.sun[f]=X,f++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=C.shadow.matrix,T++}n.directional[g]=X,g++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(D).multiplyScalar(O),X.distance=k,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[M]=X;let j=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,j.updateMatrices(C),C.castShadow&&v++),n.spotLightMatrix[M]=j.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[M]=G,n.spotShadowMap[M]=K,A++}M++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(D).multiplyScalar(O),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=X,w++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let j=C.shadow,G=t.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=C.shadow.matrix,b++}n.point[m]=X,m++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(O),X.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[y]=X,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==T||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-v,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=R,L.sunLength=f,L.directionalLength=g,L.pointLength=m,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=T,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=RS++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let y=c[M];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),d++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Gp(s){let e=new PS(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function IS(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Gp(s),e.set(i,[o])):r>=a.length?(o=new Gp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var LS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],US=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Vp=new ke,io=new P,Eu=new P;function FS(s,e,t){let n=new Ir,i=new he,r=new he,a=new xt,o=new Ml,l=new vl,c={},h=t.maxTextureSize,u={[yi]:mn,[mn]:yi,[Vt]:Vt},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:LS,fragmentShader:NS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Qe;p.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ne(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let m=this.type;this.render=function(b,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Df&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=za);let v=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(zn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=m!==this.type;U&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=b.length;C<D;C++){let O=b[C],k=O.shadow;if(k===void 0){Fe("WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();i.multiply(K),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,k.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ur){if(O.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ft(i.x,i.y,{format:ms,type:jt,minFilter:kt,magFilter:kt,generateMipmaps:!1}),k.map.texture.name=O.name+".shadowMap",k.map.depthTexture=new cs(i.x,i.y,Pn),k.map.depthTexture.name=O.name+".shadowMapDepth",k.map.depthTexture.format=ui,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht}else O.isPointLight?(k.map=new Ac(i.x),k.map.depthTexture=new dl(i.x,ti)):(k.map=new Ft(i.x,i.y),k.map.depthTexture=new cs(i.x,i.y,ti)),k.map.depthTexture.name=O.name+".shadowMap",k.map.depthTexture.format=ui,this.type===za?(k.map.depthTexture.compareFunction=X?bc:vc,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ht,k.map.depthTexture.magFilter=Ht);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();O.isPointLight!==!0&&k.updateMatrices(O,x);for(let G=0;G<j;G++){let te=k.getCamera(G);if(O.isPointLight){let oe=k.camera,re=k.matrix,$=O.distance||oe.far;$!==oe.far&&(oe.far=$,oe.updateProjectionMatrix()),io.setFromMatrixPosition(O.matrixWorld),oe.position.copy(io),Eu.copy(oe.position),Eu.add(DS[G]),oe.up.copy(US[G]),oe.lookAt(Eu),oe.updateMatrixWorld(),re.makeTranslation(-io.x,-io.y,-io.z),Vp.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Vp,oe.coordinateSystem,oe.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,G),s.clear();else{G===0&&(s.setRenderTarget(k.map),s.clear());let oe=k.getViewport(G);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),N.viewport(a)}n=k.getFrustum(G),y(A,x,te,O,this.type)}k.isPointLightShadow!==!0&&this.type===Ur&&M(k,x),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(v,R,L)};function M(b,A){let x=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ft(i.x,i.y,{format:ms,type:jt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,x,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,x,f,_,null)}function w(b,A,x,v){let R=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,U=A.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let D=C[U];D===void 0&&(D=R.clone(),C[U]=D,A.addEventListener("dispose",T)),R=D}if(R.visible=A.visible,R.wireframe=A.wireframe,v===Ur?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=x}return R}function y(b,A,x,v,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Ur)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let U=e.update(b),C=b.material;if(Array.isArray(C)){let D=U.groups;for(let O=0,k=D.length;O<k;O++){let K=D[O],X=C[K.materialIndex];if(X&&X.visible){let j=w(b,X,v,R);b.onBeforeShadow(s,b,A,x,U,j,K),s.renderBufferDirect(x,null,U,j,b,K),b.onAfterShadow(s,b,A,x,U,j,K)}}}else if(C.visible){let D=w(b,C,v,R);b.onBeforeShadow(s,b,A,x,U,D,null),s.renderBufferDirect(x,null,U,D,b,null),b.onAfterShadow(s,b,A,x,U,D,null)}}let N=b.children;for(let U=0,C=N.length;U<C;U++)y(N[U],A,x,v,R)}function T(b){b.target.removeEventListener("dispose",T);for(let x in c){let v=c[x],R=b.target.uuid;R in v&&(v[R].dispose(),delete v[R])}}}function OS(s,e){function t(){let B=!1,pe=new xt,ie=null,me=new xt(0,0,0,0);return{setMask:function(Te){ie!==Te&&!B&&(s.colorMask(Te,Te,Te,Te),ie=Te)},setLocked:function(Te){B=Te},setClear:function(Te,ae,He,De,Rt){Rt===!0&&(Te*=De,ae*=De,He*=De),pe.set(Te,ae,He,De),me.equals(pe)===!1&&(s.clearColor(Te,ae,He,De),me.copy(pe))},reset:function(){B=!1,ie=null,me.set(-1,0,0,0)}}}function n(){let B=!1,pe=!1,ie=null,me=null,Te=null;return{setReversed:function(ae){if(pe!==ae){let He=e.get("EXT_clip_control");ae?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),pe=ae;let De=Te;Te=null,this.setClear(De)}},getReversed:function(){return pe},setTest:function(ae){ae?J(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!B&&(s.depthMask(ae),ie=ae)},setFunc:function(ae){if(pe&&(ae=xp[ae]),me!==ae){switch(ae){case el:s.depthFunc(s.NEVER);break;case tl:s.depthFunc(s.ALWAYS);break;case nl:s.depthFunc(s.LESS);break;case vr:s.depthFunc(s.LEQUAL);break;case il:s.depthFunc(s.EQUAL);break;case sl:s.depthFunc(s.GEQUAL);break;case rl:s.depthFunc(s.GREATER);break;case al:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=ae}},setLocked:function(ae){B=ae},setClear:function(ae){Te!==ae&&(Te=ae,pe&&(ae=1-ae),s.clearDepth(ae))},reset:function(){B=!1,ie=null,me=null,Te=null,pe=!1}}}function i(){let B=!1,pe=null,ie=null,me=null,Te=null,ae=null,He=null,De=null,Rt=null;return{setTest:function(ft){B||(ft?J(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(ft){pe!==ft&&!B&&(s.stencilMask(ft),pe=ft)},setFunc:function(ft,Wn,ai){(ie!==ft||me!==Wn||Te!==ai)&&(s.stencilFunc(ft,Wn,ai),ie=ft,me=Wn,Te=ai)},setOp:function(ft,Wn,ai){(ae!==ft||He!==Wn||De!==ai)&&(s.stencilOp(ft,Wn,ai),ae=ft,He=Wn,De=ai)},setLocked:function(ft){B=ft},setClear:function(ft){Rt!==ft&&(s.clearStencil(ft),Rt=ft)},reset:function(){B=!1,pe=null,ie=null,me=null,Te=null,ae=null,He=null,De=null,Rt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,w=null,y=null,T=null,b=null,A=null,x=new le(0,0,0),v=0,R=!1,L=null,N=null,U=null,C=null,D=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=K>=2);let j=null,G={},te=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),re=new xt().fromArray(te),$=new xt().fromArray(oe);function Pe(B,pe,ie,me){let Te=new Uint8Array(4),ae=s.createTexture();s.bindTexture(B,ae),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<ie;He++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(pe+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return ae}let Y={};Y[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(s.DEPTH_TEST),a.setFunc(vr),at(!1),Lt(Yh),J(s.CULL_FACE),ht(zn);function J(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function Se(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Ge(B,pe){return d[B]!==pe?(s.bindFramebuffer(B,pe),d[B]=pe,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=pe),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(B,pe){let ie=p,me=!1;if(B){ie=f.get(pe),ie===void 0&&(ie=[],f.set(pe,ie));let Te=B.textures;if(ie.length!==Te.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,He=Te.length;ae<He;ae++)ie[ae]=s.COLOR_ATTACHMENT0+ae;ie.length=Te.length,me=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,me=!0);me&&s.drawBuffers(ie)}function je(B){return _!==B?(s.useProgram(B),_=B,!0):!1}let $t={[ks]:s.FUNC_ADD,[Ff]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};$t[Bf]=s.MIN,$t[Hf]=s.MAX;let nt={[kf]:s.ZERO,[zf]:s.ONE,[Gf]:s.SRC_COLOR,[Jh]:s.SRC_ALPHA,[Kf]:s.SRC_ALPHA_SATURATE,[qf]:s.DST_COLOR,[Wf]:s.DST_ALPHA,[Vf]:s.ONE_MINUS_SRC_COLOR,[$h]:s.ONE_MINUS_SRC_ALPHA,[Yf]:s.ONE_MINUS_DST_COLOR,[Xf]:s.ONE_MINUS_DST_ALPHA,[Zf]:s.CONSTANT_COLOR,[Jf]:s.ONE_MINUS_CONSTANT_COLOR,[$f]:s.CONSTANT_ALPHA,[jf]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(B,pe,ie,me,Te,ae,He,De,Rt,ft){if(B===zn){g===!0&&(Se(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),B!==Uf){if(B!==m||ft!==R){if((M!==ks||T!==ks)&&(s.blendEquation(s.FUNC_ADD),M=ks,T=ks),ft)switch(B){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dt:s.blendFunc(s.ONE,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",B);break}else switch(B){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",B);break}w=null,y=null,b=null,A=null,x.set(0,0,0),v=0,m=B,R=ft}return}Te=Te||pe,ae=ae||ie,He=He||me,(pe!==M||Te!==T)&&(s.blendEquationSeparate($t[pe],$t[Te]),M=pe,T=Te),(ie!==w||me!==y||ae!==b||He!==A)&&(s.blendFuncSeparate(nt[ie],nt[me],nt[ae],nt[He]),w=ie,y=me,b=ae,A=He),(De.equals(x)===!1||Rt!==v)&&(s.blendColor(De.r,De.g,De.b,Rt),x.copy(De),v=Rt),m=B,R=!1}function At(B,pe){B.side===Vt?Se(s.CULL_FACE):J(s.CULL_FACE);let ie=B.side===mn;pe&&(ie=!ie),at(ie),B.blending===Ki&&B.transparent===!1?ht(zn):ht(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let me=B.stencilWrite;o.setTest(me),me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),xn(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(B){L!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),L=B)}function Lt(B){B!==Lf?(J(s.CULL_FACE),B!==N&&(B===Yh?s.cullFace(s.BACK):B===Nf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),N=B}function tn(B){B!==U&&(k&&s.lineWidth(B),U=B)}function xn(B,pe,ie){B?(J(s.POLYGON_OFFSET_FILL),(C!==pe||D!==ie)&&(C=pe,D=ie,a.getReversed()&&(pe=-pe),s.polygonOffset(pe,ie))):Se(s.POLYGON_OFFSET_FILL)}function Dt(B){B?J(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Xt(B){B===void 0&&(B=s.TEXTURE0+O-1),j!==B&&(s.activeTexture(B),j=B)}function H(B,pe,ie){ie===void 0&&(j===null?ie=s.TEXTURE0+O-1:ie=j);let me=G[ie];me===void 0&&(me={type:void 0,texture:void 0},G[ie]=me),(me.type!==B||me.texture!==pe)&&(j!==ie&&(s.activeTexture(ie),j=ie),s.bindTexture(B,pe||Y[B]),me.type=B,me.texture=pe)}function sn(){let B=G[j];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function S(){try{s.texSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function z(){try{s.texSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function ce(){try{s.texStorage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function ue(){try{s.texStorage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function ee(){try{s.texImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function se(){try{s.texImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function de(B){return u[B]!==void 0?u[B]:s.getParameter(B)}function Oe(B,pe){u[B]!==pe&&(s.pixelStorei(B,pe),u[B]=pe)}function _e(B){re.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),re.copy(B))}function fe(B){$.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),$.copy(B))}function Be(B,pe){let ie=c.get(pe);ie===void 0&&(ie=new WeakMap,c.set(pe,ie));let me=ie.get(B);me===void 0&&(me=s.getUniformBlockIndex(pe,B.name),ie.set(B,me))}function ze(B,pe){let me=c.get(pe).get(B);l.get(pe)!==me&&(s.uniformBlockBinding(pe,me,B.__bindingPointIndex),l.set(pe,me))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,G={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,w=null,y=null,T=null,b=null,A=null,x=new le(0,0,0),v=0,R=!1,L=null,N=null,U=null,C=null,D=null,re.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:Se,bindFramebuffer:Ge,drawBuffers:be,useProgram:je,setBlending:ht,setMaterial:At,setFlipSided:at,setCullFace:Lt,setLineWidth:tn,setPolygonOffset:xn,setScissorTest:Dt,activeTexture:Xt,bindTexture:H,unbindTexture:sn,compressedTexImage2D:gt,compressedTexImage3D:I,texImage2D:ee,texImage3D:se,pixelStorei:Oe,getParameter:de,updateUBOMapping:Be,uniformBlockBinding:ze,texStorage2D:ce,texStorage3D:ue,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:_e,viewport:fe,reset:qe}}function BS(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,S){return p?new OffscreenCanvas(I,S):Er("canvas")}function g(I,S,z){let q=1,Q=gt(I);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let ce=Math.floor(q*Q.width),ue=Math.floor(q*Q.height);d===void 0&&(d=_(ce,ue));let ee=S?_(ce,ue):d;return ee.width=ce,ee.height=ue,ee.getContext("2d").drawImage(I,0,0,ce,ue),Fe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ce+"x"+ue+")."),ee}else return"data"in I&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){s.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,S,z,q,Q,ce=!1){if(I!==null){if(s[I]!==void 0)return s[I];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue;q&&(ue=e.get("EXT_texture_norm16"),ue||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===s.RED&&(z===s.FLOAT&&(ee=s.R32F),z===s.HALF_FLOAT&&(ee=s.R16F),z===s.UNSIGNED_BYTE&&(ee=s.R8),z===s.UNSIGNED_SHORT&&ue&&(ee=ue.R16_EXT),z===s.SHORT&&ue&&(ee=ue.R16_SNORM_EXT)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(ee=s.R8UI),z===s.UNSIGNED_SHORT&&(ee=s.R16UI),z===s.UNSIGNED_INT&&(ee=s.R32UI),z===s.BYTE&&(ee=s.R8I),z===s.SHORT&&(ee=s.R16I),z===s.INT&&(ee=s.R32I)),S===s.RG&&(z===s.FLOAT&&(ee=s.RG32F),z===s.HALF_FLOAT&&(ee=s.RG16F),z===s.UNSIGNED_BYTE&&(ee=s.RG8),z===s.UNSIGNED_SHORT&&ue&&(ee=ue.RG16_EXT),z===s.SHORT&&ue&&(ee=ue.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(ee=s.RG8UI),z===s.UNSIGNED_SHORT&&(ee=s.RG16UI),z===s.UNSIGNED_INT&&(ee=s.RG32UI),z===s.BYTE&&(ee=s.RG8I),z===s.SHORT&&(ee=s.RG16I),z===s.INT&&(ee=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),z===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),z===s.UNSIGNED_INT&&(ee=s.RGB32UI),z===s.BYTE&&(ee=s.RGB8I),z===s.SHORT&&(ee=s.RGB16I),z===s.INT&&(ee=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),z===s.UNSIGNED_INT&&(ee=s.RGBA32UI),z===s.BYTE&&(ee=s.RGBA8I),z===s.SHORT&&(ee=s.RGBA16I),z===s.INT&&(ee=s.RGBA32I)),S===s.RGB&&(z===s.UNSIGNED_SHORT&&ue&&(ee=ue.RGB16_EXT),z===s.SHORT&&ue&&(ee=ue.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),S===s.RGBA){let se=ce?ga:Ye.getTransfer(Q);z===s.FLOAT&&(ee=s.RGBA32F),z===s.HALF_FLOAT&&(ee=s.RGBA16F),z===s.UNSIGNED_BYTE&&(ee=se===ut?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&ue&&(ee=ue.RGBA16_EXT),z===s.SHORT&&ue&&(ee=ue.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(I,S){let z;return I?S===null||S===ti||S===Br?z=s.DEPTH24_STENCIL8:S===Pn?z=s.DEPTH32F_STENCIL8:S===Or&&(z=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ti||S===Br?z=s.DEPTH_COMPONENT24:S===Pn?z=s.DEPTH_COMPONENT32F:S===Or&&(z=s.DEPTH_COMPONENT16),z}function b(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ht&&I.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),v(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function x(I){let S=I.target;S.removeEventListener("dispose",x),L(S)}function v(I){let S=n.get(I);if(S.__webglInit===void 0)return;let z=I.source,q=f.get(z);if(q){let Q=q[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(I),Object.keys(q).length===0&&f.delete(z)}n.remove(I)}function R(I){let S=n.get(I);s.deleteTexture(S.__webglTexture);let z=I.source,q=f.get(z);delete q[S.__cacheKey],a.memory.textures--}function L(I){let S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Q=0;Q<S.__webglFramebuffer[q].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[q][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)s.deleteFramebuffer(S.__webglFramebuffer[q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=I.textures;for(let q=0,Q=z.length;q<Q;q++){let ce=n.get(z[q]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(I)}let N=0;function U(){N=0}function C(){return N}function D(I){N=I}function O(){let I=N;return I>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,I}function k(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function K(I,S){let z=n.get(I);if(I.isVideoTexture&&H(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){let q=I.image;if(q===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(z,I,S);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function X(I,S){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Se(z,I,S);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function j(I,S){let z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){Se(z,I,S);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function G(I,S){let z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){Ge(z,I,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let te={[Rn]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[br]:s.MIRRORED_REPEAT},oe={[Ht]:s.NEAREST,[Fl]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},re={[cp]:s.NEVER,[pp]:s.ALWAYS,[hp]:s.LESS,[vc]:s.LEQUAL,[up]:s.EQUAL,[bc]:s.GEQUAL,[dp]:s.GREATER,[fp]:s.NOTEQUAL};function $(I,S){if(S.type===Pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kt||S.magFilter===Fr||S.magFilter===Vs||S.magFilter===ei||S.minFilter===kt||S.minFilter===Fr||S.minFilter===Vs||S.minFilter===ei)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,te[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,te[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,te[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,oe[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==Vs&&S.minFilter!==ei||S.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Pe(I,S){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let q=S.source,Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));let ce=k(S);if(ce!==I.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[ce].usedTimes++;let ue=Q[I.__cacheKey];ue!==void 0&&(Q[I.__cacheKey].usedTimes--,ue.usedTimes===0&&R(S)),I.__cacheKey=ce,I.__webglTexture=Q[ce].texture}return z}function Y(I,S,z){return Math.floor(Math.floor(I/z)/S)}function J(I,S,z,q){let ce=I.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,z,q,S.data);else{ce.sort((Oe,_e)=>Oe.start-_e.start);let ue=0;for(let Oe=1;Oe<ce.length;Oe++){let _e=ce[ue],fe=ce[Oe],Be=_e.start+_e.count,ze=Y(fe.start,S.width,4),qe=Y(_e.start,S.width,4);fe.start<=Be+1&&ze===qe&&Y(fe.start+fe.count-1,S.width,4)===ze?_e.count=Math.max(_e.count,fe.start+fe.count-_e.start):(++ue,ce[ue]=fe)}ce.length=ue+1;let ee=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),de=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Oe=0,_e=ce.length;Oe<_e;Oe++){let fe=ce[Oe],Be=Math.floor(fe.start/4),ze=Math.ceil(fe.count/4),qe=Be%S.width,B=Math.floor(Be/S.width),pe=ze,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,qe,B,pe,ie,z,q,S.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function Se(I,S,z){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);let Q=Pe(I,S),ce=S.source;t.bindTexture(q,I.__webglTexture,s.TEXTURE0+z);let ue=n.get(ce);if(ce.version!==ue.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&S.image instanceof ImageBitmap)===!1){let ie=Ye.getPrimaries(Ye.workingColorSpace),me=S.colorSpace===Zi?null:Ye.getPrimaries(S.colorSpace),Te=S.colorSpace===Zi||ie===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let se=g(S.image,!1,i.maxTextureSize);se=sn(S,se);let de=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),_e=y(S.internalFormat,de,Oe,S.normalized,S.colorSpace,S.isVideoTexture);$(q,S);let fe,Be=S.mipmaps,ze=S.isVideoTexture!==!0,qe=ue.__version===void 0||Q===!0,B=ce.dataReady,pe=b(S,se);if(S.isDepthTexture)_e=T(S.format===ps,S.type),qe&&(ze?t.texStorage2D(s.TEXTURE_2D,1,_e,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,_e,se.width,se.height,0,de,Oe,null));else if(S.isDataTexture)if(Be.length>0){ze&&qe&&t.texStorage2D(s.TEXTURE_2D,pe,_e,Be[0].width,Be[0].height);for(let ie=0,me=Be.length;ie<me;ie++)fe=Be[ie],ze?B&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,Oe,fe.data):t.texImage2D(s.TEXTURE_2D,ie,_e,fe.width,fe.height,0,de,Oe,fe.data);S.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(s.TEXTURE_2D,pe,_e,se.width,se.height),B&&J(S,se,de,Oe)):t.texImage2D(s.TEXTURE_2D,0,_e,se.width,se.height,0,de,Oe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,_e,Be[0].width,Be[0].height,se.depth);for(let ie=0,me=Be.length;ie<me;ie++)if(fe=Be[ie],S.format!==In)if(de!==null)if(ze){if(B)if(S.layerUpdates.size>0){let Te=pu(fe.width,fe.height,S.format,S.type);for(let ae of S.layerUpdates){let He=fe.data.subarray(ae*Te/fe.data.BYTES_PER_ELEMENT,(ae+1)*Te/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,ae,fe.width,fe.height,1,de,He)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,se.depth,de,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,_e,fe.width,fe.height,se.depth,0,fe.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,se.depth,de,Oe,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,_e,fe.width,fe.height,se.depth,0,de,Oe,fe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ze&&qe&&t.texStorage2D(s.TEXTURE_2D,pe,_e,Be[0].width,Be[0].height);for(let ie=0,me=Be.length;ie<me;ie++)fe=Be[ie],S.format!==In?de!==null?ze?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,_e,fe.width,fe.height,0,fe.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?B&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,Oe,fe.data):t.texImage2D(s.TEXTURE_2D,ie,_e,fe.width,fe.height,0,de,Oe,fe.data)}else if(S.isDataArrayTexture)if(ze){if(qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,_e,se.width,se.height,se.depth),B)if(S.layerUpdates.size>0){let ie=pu(se.width,se.height,S.format,S.type);for(let me of S.layerUpdates){let Te=se.data.subarray(me*ie/se.data.BYTES_PER_ELEMENT,(me+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,se.width,se.height,1,de,Oe,Te)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Oe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,se.width,se.height,se.depth,0,de,Oe,se.data);else if(S.isData3DTexture)ze?(qe&&t.texStorage3D(s.TEXTURE_3D,pe,_e,se.width,se.height,se.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Oe,se.data)):t.texImage3D(s.TEXTURE_3D,0,_e,se.width,se.height,se.depth,0,de,Oe,se.data);else if(S.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(s.TEXTURE_2D,pe,_e,se.width,se.height);else{let ie=se.width,me=se.height;for(let Te=0;Te<pe;Te++)t.texImage2D(s.TEXTURE_2D,Te,_e,ie,me,0,de,Oe,null),ie>>=1,me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),u.add(S),ie.onpaint=me=>{let Te=me.changedElements;for(let ae of u)Te.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{let Te=s.RGBA,ae=s.RGBA,He=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,ae,He,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Be.length>0){if(ze&&qe){let ie=gt(Be[0]);t.texStorage2D(s.TEXTURE_2D,pe,_e,ie.width,ie.height)}for(let ie=0,me=Be.length;ie<me;ie++)fe=Be[ie],ze?B&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,de,Oe,fe):t.texImage2D(s.TEXTURE_2D,ie,_e,de,Oe,fe);S.generateMipmaps=!1}else if(ze){if(qe){let ie=gt(se);t.texStorage2D(s.TEXTURE_2D,pe,_e,ie.width,ie.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Oe,se)}else t.texImage2D(s.TEXTURE_2D,0,_e,de,Oe,se);m(S)&&M(q),ue.__version=ce.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ge(I,S,z){if(S.image.length!==6)return;let q=Pe(I,S),Q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+z);let ce=n.get(Q);if(Q.version!==ce.__version||q===!0){t.activeTexture(s.TEXTURE0+z);let ue=Ye.getPrimaries(Ye.workingColorSpace),ee=S.colorSpace===Zi?null:Ye.getPrimaries(S.colorSpace),se=S.colorSpace===Zi||ue===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let de=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!de&&!Oe?_e[ae]=g(S.image[ae],!0,i.maxCubemapSize):_e[ae]=Oe?S.image[ae].image:S.image[ae],_e[ae]=sn(S,_e[ae]);let fe=_e[0],Be=r.convert(S.format,S.colorSpace),ze=r.convert(S.type),qe=y(S.internalFormat,Be,ze,S.normalized,S.colorSpace),B=S.isVideoTexture!==!0,pe=ce.__version===void 0||q===!0,ie=Q.dataReady,me=b(S,fe);$(s.TEXTURE_CUBE_MAP,S);let Te;if(de){B&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,qe,fe.width,fe.height);for(let ae=0;ae<6;ae++){Te=_e[ae].mipmaps;for(let He=0;He<Te.length;He++){let De=Te[He];S.format!==In?Be!==null?B?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,0,0,De.width,De.height,Be,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,qe,De.width,De.height,0,De.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,0,0,De.width,De.height,Be,ze,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He,qe,De.width,De.height,0,Be,ze,De.data)}}}else{if(Te=S.mipmaps,B&&pe){Te.length>0&&me++;let ae=gt(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,qe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Oe){B?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Be,ze,_e[ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,_e[ae].width,_e[ae].height,0,Be,ze,_e[ae].data);for(let He=0;He<Te.length;He++){let Rt=Te[He].image[ae].image;B?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,0,0,Rt.width,Rt.height,Be,ze,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,qe,Rt.width,Rt.height,0,Be,ze,Rt.data)}}else{B?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Be,ze,_e[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,Be,ze,_e[ae]);for(let He=0;He<Te.length;He++){let De=Te[He];B?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,0,0,Be,ze,De.image[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,He+1,qe,Be,ze,De.image[ae])}}}m(S)&&M(s.TEXTURE_CUBE_MAP),ce.__version=Q.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function be(I,S,z,q,Q,ce){let ue=r.convert(z.format,z.colorSpace),ee=r.convert(z.type),se=y(z.internalFormat,ue,ee,z.normalized,z.colorSpace),de=n.get(S),Oe=n.get(z);if(Oe.__renderTarget=S,!de.__hasExternalTextures){let _e=Math.max(1,S.width>>ce),fe=Math.max(1,S.height>>ce);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,ce,se,_e,fe,S.depth,0,ue,ee,null):t.texImage2D(Q,ce,se,_e,fe,0,ue,ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,Q,Oe.__webglTexture,0,Dt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,Q,Oe.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(I,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){let q=S.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ce=T(S.stencilBuffer,Q),ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(S),ce,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(S),ce,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ce,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,I)}else{let q=S.textures;for(let Q=0;Q<q.length;Q++){let ce=q[Q],ue=r.convert(ce.format,ce.colorSpace),ee=r.convert(ce.type),se=y(ce.internalFormat,ue,ee,ce.normalized,ce.colorSpace);Xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt(S),se,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt(S),se,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,se,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $t(I,S,z){let q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),$(s.TEXTURE_CUBE_MAP,S.depthTexture);let de=r.convert(S.depthTexture.format),Oe=r.convert(S.depthTexture.type),_e;S.depthTexture.format===ui?_e=s.DEPTH_COMPONENT24:S.depthTexture.format===ps&&(_e=s.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,_e,S.width,S.height,0,de,Oe,null)}}else K(S.depthTexture,0);let ce=Q.__webglTexture,ue=Dt(S),ee=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,se=S.depthTexture.format===ps?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ui)Xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ee,ce,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,se,ee,ce,0);else if(S.depthTexture.format===ps)Xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ee,ce,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,se,ee,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(I){let S=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=q}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)$t(S.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?$t(S.__webglFramebuffer[0],I,0):$t(S.__webglFramebuffer,I,0)}else if(z){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=s.createRenderbuffer(),je(S.__webglDepthbuffer[q],I,!1);else{let Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ce)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),je(S.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(I,S,z){let q=n.get(I);S!==void 0&&be(q.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&nt(I)}function At(I){let S=I.texture,z=n.get(I),q=n.get(S);I.addEventListener("dispose",x);let Q=I.textures,ce=I.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ee]=[];for(let se=0;se<S.mipmaps.length;se++)z.__webglFramebuffer[ee][se]=s.createFramebuffer()}else z.__webglFramebuffer[ee]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)z.__webglFramebuffer[ee]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ue)for(let ee=0,se=Q.length;ee<se;ee++){let de=n.get(Q[ee]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&Xt(I)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){let se=Q[ee];z.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);let de=r.convert(se.format,se.colorSpace),Oe=r.convert(se.type),_e=y(se.internalFormat,de,Oe,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),fe=Dt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,_e,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),je(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),$(s.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)be(z.__webglFramebuffer[ee][se],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else be(z.__webglFramebuffer[ee],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(S)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ee=0,se=Q.length;ee<se;ee++){let de=Q[ee],Oe=n.get(de),_e=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,Oe.__webglTexture),$(_e,de),be(z.__webglFramebuffer,I,de,s.COLOR_ATTACHMENT0+ee,_e,0),m(de)&&M(_e)}t.unbindTexture()}else{let ee=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ee=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,q.__webglTexture),$(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)be(z.__webglFramebuffer[se],I,S,s.COLOR_ATTACHMENT0,ee,se);else be(z.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,ee,0);m(S)&&M(ee),t.unbindTexture()}I.depthBuffer&&nt(I)}function at(I){let S=I.textures;for(let z=0,q=S.length;z<q;z++){let Q=S[z];if(m(Q)){let ce=w(I),ue=n.get(Q).__webglTexture;t.bindTexture(ce,ue),M(ce),t.unbindTexture()}}}let Lt=[],tn=[];function xn(I){if(I.samples>0){if(Xt(I)===!1){let S=I.textures,z=I.width,q=I.height,Q=s.COLOR_BUFFER_BIT,ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(I),ee=S.length>1;if(ee)for(let de=0;de<S.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let se=I.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<S.length;de++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let Oe=n.get(S[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Oe,0)}s.blitFramebuffer(0,0,z,q,0,0,z,q,Q,s.NEAREST),l===!0&&(Lt.length=0,tn.length=0,Lt.push(s.COLOR_ATTACHMENT0+de),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Lt.push(ce),tn.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<S.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let Oe=n.get(S[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Dt(I){return Math.min(i.maxSamples,I.samples)}function Xt(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function sn(I,S){let z=I.colorSpace,q=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==dn&&z!==Zi&&(Ye.getTransfer(z)===ut?(q!==In||Q!==Tn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",z)),S}function gt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=ht,this.setupRenderTarget=At,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HS(s,e){function t(n,i=Zi){let r,a=Ye.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Bl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return s.BYTE;if(n===tu)return s.SHORT;if(n===Or)return s.UNSIGNED_SHORT;if(n===Ol)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===jt)return s.HALF_FLOAT;if(n===su)return s.ALPHA;if(n===ru)return s.RGB;if(n===In)return s.RGBA;if(n===ui)return s.DEPTH_COMPONENT;if(n===ps)return s.DEPTH_STENCIL;if(n===kl)return s.RED;if(n===zl)return s.RED_INTEGER;if(n===ms)return s.RG;if(n===Gl)return s.RG_INTEGER;if(n===Vl)return s.RGBA_INTEGER;if(n===Za||n===Ja||n===$a||n===ja)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Zl||n===Jl||n===$l||n===jl||n===Qa||n===Ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===Zl)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$l)return r.COMPRESSED_R11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qa)return r.COMPRESSED_RG11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pc)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===xc||n===eo||n===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:kS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends jn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=typeof XRWebGLBinding!="undefined",g=new Nu,m={},M=t.getContextAttributes(),w=null,y=null,T=[],b=[],A=new he,x=null,v=null,R=new Kt;R.viewport=new xt;let L=new Kt;L.viewport=new xt;let N=[R,L],U=new Pl,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=T[Y];return J===void 0&&(J=new Rr,T[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=T[Y];return J===void 0&&(J=new Rr,T[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=T[Y];return J===void 0&&(J=new Rr,T[Y]=J),J.getHandSpace()};function O(Y){let J=b.indexOf(Y.inputSource);if(J===-1)return;let Se=T[J];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,c||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<T.length;Y++){let J=b[Y];J!==null&&(b[Y]=null,T[Y].disconnect(J))}C=null,D=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(w),f=null,d=null,u=null,i=null,y=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),v!==null){let Y=v.camera;Y.fov=v.fov,Y.zoom=v.zoom,Y.updateProjectionMatrix(),v=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ge=null,be=null;M.depth&&(be=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?ps:ui,Ge=M.stencil?Br:ti);let je={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ft(d.textureWidth,d.textureHeight,{format:In,type:Tn,depthTexture:new cs(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ft(f.framebufferWidth,f.framebufferHeight,{format:In,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Pe.setContext(i),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(Y){for(let J=0;J<Y.removed.length;J++){let Se=Y.removed[J],Ge=b.indexOf(Se);Ge>=0&&(b[Ge]=null,T[Ge].disconnect(Se))}for(let J=0;J<Y.added.length;J++){let Se=Y.added[J],Ge=b.indexOf(Se);if(Ge===-1){for(let je=0;je<T.length;je++)if(je>=b.length){b.push(Se),Ge=je;break}else if(b[je]===null){b[je]=Se,Ge=je;break}if(Ge===-1)break}let be=T[Ge];be&&be.connect(Se)}}let X=new P,j=new P;function G(Y,J,Se){X.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);let Ge=X.distanceTo(j),be=J.projectionMatrix.elements,je=Se.projectionMatrix.elements,$t=be[14]/(be[10]-1),nt=be[14]/(be[10]+1),ht=(be[9]+1)/be[5],At=(be[9]-1)/be[5],at=(be[8]-1)/be[0],Lt=(je[8]+1)/je[0],tn=$t*at,xn=$t*Lt,Dt=Ge/(-at+Lt),Xt=Dt*-at;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Xt),Y.translateZ(Dt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let H=$t+Dt,sn=nt+Dt,gt=tn-Xt,I=xn+(Ge-Xt),S=ht*nt/sn*H,z=At*nt/sn*H;Y.projectionMatrix.makePerspective(gt,I,S,z,H,sn),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,Se=Y.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),U.near=L.near=R.near=J,U.far=L.far=R.far=Se,(C!==U.near||D!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,D=U.far),U.layers.mask=Y.layers.mask|6,R.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let Ge=Y.parent,be=U.cameras;te(U,Ge);for(let je=0;je<be.length;je++)te(be[je],Ge);be.length===2?G(U,R,L):U.projectionMatrix.copy(R.projectionMatrix),v===null&&Y.isPerspectiveCamera&&(v={camera:Y,fov:Y.fov,zoom:Y.zoom}),oe(Y,U,Ge)};function oe(Y,J,Se){Se===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ls*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Y){return m[Y]};let re=null;function $(Y,J){if(h=J.getViewerPose(c||a),p=J,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ge=!1;Se.length!==U.cameras.length&&(U.cameras.length=0,Ge=!0);for(let nt=0;nt<Se.length;nt++){let ht=Se[nt],At=null;if(f!==null)At=f.getViewport(ht);else{let Lt=u.getViewSubImage(d,ht);At=Lt.viewport,nt===0&&(e.setRenderTargetTextures(y,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(y))}let at=N[nt];at===void 0&&(at=new Kt,at.layers.enable(nt),at.viewport=new xt,N[nt]=at),at.matrix.fromArray(ht.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ht.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(At.x,At.y,At.width,At.height),nt===0&&(U.matrix.copy(at.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ge===!0&&U.cameras.push(at)}let be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let nt=u.getDepthInformation(Se[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,i.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<Se.length;nt++){let ht=Se[nt].camera;if(ht){let At=m[ht];At||(At=new Aa,m[ht]=At);let at=u.getCameraImage(ht);At.sourceTexture=at}}}}for(let Se=0;Se<T.length;Se++){let Ge=b[Se],be=T[Se];Ge!==null&&be!==void 0&&be.update(Ge,J,c||a)}re&&re(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}let Pe=new Wp;Pe.setAnimationLoop($),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}},GS=new ke,Jp=new Xe;Jp.set(-1,0,0,0,1,0,0,0,1);function VS(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,uu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),w=M.envMap,y=M.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(GS.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WS(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let b=T.program;n.uniformBlockBinding(y,b)}function c(y,T){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",M));let A=T.program;n.updateUBOMapping(y,A);let x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function h(y){let T=u();y.__bindingPointIndex=T;let b=s.createBuffer(),A=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let T=i[y.id],b=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let x=0,v=b.length;x<v;x++){let R=b[x];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)f(R[L],x,L,A);else f(R,x,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,T,b,A){if(_(y,T,b,A)===!0){let x=y.__offset,v=y.value;if(Array.isArray(v)){let R=0;for(let L=0;L<v.length;L++){let N=v[L],U=m(N);p(N,y.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(v,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function p(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function _(y,T,b,A){let x=y.value,v=T+"_"+b;if(A[v]===void 0)return typeof x=="number"||typeof x=="boolean"?A[v]=x:ArrayBuffer.isView(x)?A[v]=x.slice():A[v]=x.clone(),!0;{let R=A[v];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){let T=y.uniforms,b=0,A=16;for(let v=0,R=T.length;v<R;v++){let L=Array.isArray(T[v])?T[v]:[T[v]];for(let N=0,U=L.length;N<U;N++){let C=L[N],D=Array.isArray(C.value)?C.value:[C.value];for(let O=0,k=D.length;O<k;O++){let K=D[O],X=m(K),j=b%A,G=j%X.boundary,te=j+G;b+=G,te!==0&&A-te<X.storage&&(b+=A-te),C.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=X.storage}}}let x=b%A;return x>0&&(b+=A-x),y.__size=b,y.__cache={},this}function m(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",y),T}function M(y){let T=y.target;T.removeEventListener("dispose",M);let b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function w(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var XS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function qS(){return vi===null&&(vi=new Pr(XS,16,16,ms,jt),vi.name="DFG_LUT",vi.minFilter=kt,vi.magFilter=kt,vi.wrapS=Bn,vi.wrapT=Bn,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Rc=class{constructor(e={}){let{canvas:t=mp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Tn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=f,g=new Set([Vl,Gl,zl]),m=new Set([Tn,ti,Or,Br,Bl,Hl]),M=new Uint32Array(4),w=new Int32Array(4),y=new P,T=null,b=null,A=[],x=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,N=null,U=null,C=null,D=null;this._outputColorSpace=ot;let O=0,k=0,K=null,X=-1,j=null,G=new xt,te=new xt,oe=null,re=new le(0),$=0,Pe=t.width,Y=t.height,J=1,Se=null,Ge=null,be=new xt(0,0,Pe,Y),je=new xt(0,0,Pe,Y),$t=!1,nt=new Ir,ht=!1,At=!1,at=new ke,Lt=new P,tn=new xt,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function Xt(){return K===null?J:1}let H=n;function sn(E,F){return t.getContext(E,F)}let gt,I,S,z,q,Q,ce,ue,ee,se,de,Oe,_e,fe,Be,ze,qe,B,pe,ie,me,Te,ae;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Wn,!1),H===null){let F="webgl2";if(H=sn(F,E),H===null)throw sn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(E){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),Ve("WebGLRenderer: "+E.message),E}function He(){gt=new Qx(H),gt.init(),me=new HS(H,gt),I=new Vx(H,gt,e,me),S=new OS(H,gt),I.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),U=H.createFramebuffer(),C=H.createFramebuffer(),D=H.createFramebuffer(),z=new ny(H),q=new bS,Q=new BS(H,gt,S,q,I,me,z),ce=new jx(R),ue=new sg(H),Te=new zx(H,ue),ee=new ey(H,ue,z,Te),se=new sy(H,ee,ue,Te,z),B=new iy(H,I,Q),Be=new Wx(q),de=new vS(R,ce,gt,I,Te,Be),Oe=new VS(R,q),_e=new ES,fe=new IS(gt),qe=new kx(R,ce,S,se,p,l),ze=new FS(R,se,I),ae=new WS(H,z,I,S),pe=new Gx(H,gt,z),ie=new ty(H,gt,z),z.programs=de.programs,R.capabilities=I,R.extensions=gt,R.properties=q,R.renderLists=_e,R.shadowMap=ze,R.state=S,R.info=z}_!==Tn&&(v=new ay(_,t.width,t.height,o,i,r));let De=new Du(R,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(Pe,Y,!1))},this.getSize=function(E){return E.set(Pe,Y)},this.setSize=function(E,F,Z=!0){if(De.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=E,Y=F,t.width=Math.floor(E*J),t.height=Math.floor(F*J),Z===!0&&(t.style.width=E+"px",t.style.height=F+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Pe*J,Y*J).floor()},this.setDrawingBufferSize=function(E,F,Z){Pe=E,Y=F,J=Z,t.width=Math.floor(E*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===Tn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,F,Z,V){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,F,Z,V),S.viewport(G.copy(be).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(je)},this.setScissor=function(E,F,Z,V){E.isVector4?je.set(E.x,E.y,E.z,E.w):je.set(E,F,Z,V),S.scissor(te.copy(je).multiplyScalar(J).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(E){S.setScissorTest($t=E)},this.setOpaqueSort=function(E){Se=E},this.setTransparentSort=function(E){Ge=E},this.getClearColor=function(E){return E.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Z=!0){let V=0;if(E){let W=!1;if(K!==null){let Me=K.texture.format;W=g.has(Me)}if(W){let Me=K.texture.type,Ae=m.has(Me),ye=qe.getClearColor(),Ie=qe.getClearAlpha(),Ue=ye.r,Ze=ye.g,it=ye.b;Ae?(M[0]=Ue,M[1]=Ze,M[2]=it,M[3]=Ie,H.clearBufferuiv(H.COLOR,0,M)):(w[0]=Ue,w[1]=Ze,w[2]=it,w[3]=Ie,H.clearBufferiv(H.COLOR,0,w))}else V|=H.COLOR_BUFFER_BIT}F&&(V|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),qe.dispose(),_e.dispose(),fe.dispose(),q.dispose(),ce.dispose(),se.dispose(),Te.dispose(),ae.dispose(),de.dispose(),De.dispose(),De.removeEventListener("sessionstart",Dd),De.removeEventListener("sessionend",Ud),vs.stop()};function Rt(E){E.preventDefault(),_a("WebGLRenderer: Context Lost."),L=!0}function ft(){_a("WebGLRenderer: Context Restored."),L=!1;let E=z.autoReset,F=ze.enabled,Z=ze.autoUpdate,V=ze.needsUpdate,W=ze.type;He(),z.autoReset=E,ze.enabled=F,ze.autoUpdate=Z,ze.needsUpdate=V,ze.type=W}function Wn(E){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ai(E){let F=E.target;F.removeEventListener("dispose",ai),Om(F)}function Om(E){Bm(E),q.remove(E)}function Bm(E){let F=q.get(E).programs;F!==void 0&&(F.forEach(function(Z){de.releaseProgram(Z)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Z,V,W,Me){F===null&&(F=xn);let Ae=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=zm(E,F,Z,V,W);S.setMaterial(V,Ae);let Ie=Z.index,Ue=1;if(V.wireframe===!0){if(Ie=ee.getWireframeAttribute(Z),Ie===void 0)return;Ue=2}let Ze=Z.drawRange,it=Z.attributes.position,Le=Ze.start*Ue,pt=(Ze.start+Ze.count)*Ue;Me!==null&&(Le=Math.max(Le,Me.start*Ue),pt=Math.min(pt,(Me.start+Me.count)*Ue)),Ie!==null?(Le=Math.max(Le,0),pt=Math.min(pt,Ie.count)):it!=null&&(Le=Math.max(Le,0),pt=Math.min(pt,it.count));let qt=pt-Le;if(qt<0||qt===1/0)return;Te.setup(W,V,ye,Z,Ie);let Pt,bt=pe;if(Ie!==null&&(Pt=ue.get(Ie),bt=ie,bt.setIndex(Pt)),W.isMesh)V.wireframe===!0?(S.setLineWidth(V.wireframeLinewidth*Xt()),bt.setMode(H.LINES)):bt.setMode(H.TRIANGLES);else if(W.isLine){let rn=V.linewidth;rn===void 0&&(rn=1),S.setLineWidth(rn*Xt()),W.isLineSegments?bt.setMode(H.LINES):W.isLineLoop?bt.setMode(H.LINE_LOOP):bt.setMode(H.LINE_STRIP)}else W.isPoints?bt.setMode(H.POINTS):W.isSprite&&bt.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))bt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let rn=W._multiDrawStarts,we=W._multiDrawCounts,hn=W._multiDrawCount,ct=Ie?ue.get(Ie).bytesPerElement:1,Fn=q.get(V).currentProgram.getUniforms();for(let oi=0;oi<hn;oi++)Fn.setValue(H,"_gl_DrawID",oi),bt.render(rn[oi]/ct,we[oi])}else if(W.isInstancedMesh)bt.renderInstances(Le,qt,W.count);else if(Z.isInstancedBufferGeometry){let rn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,we=Math.min(Z.instanceCount,rn);bt.renderInstances(Le,qt,we)}else bt.render(Le,qt)};function Nd(E,F,Z,V){N!==null&&E.isNodeMaterial&&N.setObject(V,E),ht===!0&&Be.setState(E,Z,!1),E.transparent===!0&&E.side===Vt&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,yo(E,F,V),E.side=yi,E.needsUpdate=!0,yo(E,F,V),E.side=Vt):yo(E,F,V)}this.compile=function(E,F,Z=null){Z===null&&(Z=E),N!==null&&N.renderStart(E,F,Z),b=fe.get(Z),b.init(F),x.push(b),Z.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),E!==Z&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),At=this.localClippingEnabled,ht=Be.init(this.clippingPlanes,At),ht===!0&&Be.setGlobalState(this.clippingPlanes,F),N!==null&&ze.render(b.state.shadowsArray,Z,F);let V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Me=W.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){let ye=Me[Ae];Nd(ye,Z,F,W),V.add(ye)}else Nd(Me,Z,F,W),V.add(Me)}),b=x.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(E,F,Z=null){let V=this.compile(E,F,Z);return new Promise(W=>{function Me(){if(V.forEach(function(Ae){let Ie=q.get(Ae).currentProgram;(Ie===void 0||Ie.isReady())&&V.delete(Ae)}),V.size===0){W(E);return}setTimeout(Me,10)}gt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let oh=null;function Hm(E){oh&&oh(E)}function Dd(){vs.stop()}function Ud(){vs.start()}let vs=new Wp;vs.setAnimationLoop(Hm),typeof self!="undefined"&&vs.setContext(self),this.setAnimationLoop=function(E){oh=E,De.setAnimationLoop(E),E===null?vs.stop():vs.start()},De.addEventListener("sessionstart",Dd),De.addEventListener("sessionend",Ud),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(E,F);let Z=De.enabled===!0&&De.isPresenting===!0,V=v!==null&&(K===null||Z)&&v.begin(R,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(F),F=De.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,F,K),b=fe.get(E,x.length),b.init(F),b.state.textureUnits=Q.getTextureUnits(),x.push(b),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(at,Jn,F.reversedDepth),At=this.localClippingEnabled,ht=Be.init(this.clippingPlanes,At),T=_e.get(E,A.length),T.init(),A.push(T),De.enabled===!0&&De.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&lh(Ae,F,-1/0,R.sortObjects)}lh(E,F,0,R.sortObjects),T.finish(),N!==null&&N.updateLights(b.state.lightsArray),R.sortObjects===!0&&T.sort(Se,Ge),Dt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Dt&&qe.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Be.beginShadows();let W=b.state.shadowsArray;if(ze.render(W,E,F),ht===!0&&Be.endShadows(),(V&&v.hasRenderPass())===!1){let Ae=T.opaque,ye=T.transmissive;if(b.setupLights(),F.isArrayCamera){let Ie=F.cameras;if(ye.length>0)for(let Ue=0,Ze=Ie.length;Ue<Ze;Ue++){let it=Ie[Ue];Od(Ae,ye,E,it)}Dt&&qe.render(E);for(let Ue=0,Ze=Ie.length;Ue<Ze;Ue++){let it=Ie[Ue];Fd(T,E,it,it.viewport)}}else ye.length>0&&Od(Ae,ye,E,F),Dt&&qe.render(E),Fd(T,E,F)}K!==null&&k===0&&(Q.updateMultisampleRenderTarget(K),Q.updateRenderTargetMipmap(K)),V&&v.end(R),E.isScene===!0&&E.onAfterRender(R,E,F),Te.resetDefaultState(),X=-1,j=null,x.pop(),x.length>0?(b=x[x.length-1],Q.setTextureUnits(b.state.textureUnits),ht===!0&&Be.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,N!==null&&N.renderEnd()};function lh(E,F,Z,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(nt)){V&&tn.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);let Ae=se.update(E),ye=E.material;ye.visible&&T.push(E,Ae,ye,Z,tn.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(nt))){let Ae=se.update(E),ye=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),tn.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),tn.copy(Ae.boundingSphere.center)),tn.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(ye)){let Ie=Ae.groups;for(let Ue=0,Ze=Ie.length;Ue<Ze;Ue++){let it=Ie[Ue],Le=ye[it.materialIndex];Le&&Le.visible&&T.push(E,Ae,Le,Z,tn.z,it,F)}}else ye.visible&&T.push(E,Ae,ye,Z,tn.z,null,F)}}let Me=E.children;for(let Ae=0,ye=Me.length;Ae<ye;Ae++)lh(Me[Ae],F,Z,V)}function Fd(E,F,Z,V){let{opaque:W,transmissive:Me,transparent:Ae}=E;b.setupLightsView(Z),ht===!0&&Be.setGlobalState(R.clippingPlanes,Z),V&&S.viewport(G.copy(V)),W.length>0&&xo(W,F,Z),Me.length>0&&xo(Me,F,Z),Ae.length>0&&xo(Ae,F,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Od(E,F,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Le=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Ft(1,1,{generateMipmaps:!0,type:Le?jt:Tn,minFilter:ei,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let Me=b.state.transmissionRenderTarget[V.id],Ae=V.viewport||G;Me.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let ye=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(re),$=R.getClearAlpha(),$<1&&R.setClearColor(16777215,.5),R.clear(),Dt&&qe.render(Z);let Ze=R.toneMapping;R.toneMapping=Qn;let it=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),ht===!0&&Be.setGlobalState(R.clippingPlanes,V),xo(E,Z,V),Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let pt=0,qt=F.length;pt<qt;pt++){let Pt=F[pt],{object:bt,geometry:rn,material:we,group:hn}=Pt;if(we.side===Vt&&bt.layers.test(V.layers)){let ct=we.side;we.side=mn,we.needsUpdate=!0,Bd(bt,Z,V,rn,we,hn),we.side=ct,we.needsUpdate=!0,Le=!0}}Le===!0&&(Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me))}R.setRenderTarget(ye,Ie,Ue),R.setClearColor(re,$),it!==void 0&&(V.viewport=it),R.toneMapping=Ze}function xo(E,F,Z){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Me=E.length;W<Me;W++){let Ae=E[W],{object:ye,geometry:Ie,group:Ue}=Ae,Ze=Ae.material;Ze.allowOverride===!0&&V!==null&&(Ze=V),ye.layers.test(Z.layers)&&Bd(ye,F,Z,Ie,Ze,Ue)}}function Bd(E,F,Z,V,W,Me){N!==null&&W.isNodeMaterial&&N.setObject(E,W),E.onBeforeRender(R,F,Z,V,W,Me),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,F,Z,V,E,Me),W.transparent===!0&&W.side===Vt&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,R.renderBufferDirect(Z,F,V,W,E,Me),W.side=yi,W.needsUpdate=!0,R.renderBufferDirect(Z,F,V,W,E,Me),W.side=Vt):R.renderBufferDirect(Z,F,V,W,E,Me),E.onAfterRender(R,F,Z,V,W,Me)}function yo(E,F,Z){F.isScene!==!0&&(F=xn);let V=q.get(E),W=b.state.lights,Me=b.state.shadowsArray,Ae=W.state.version,ye=de.getParameters(E,W.state,Me,F,Z,b.state.lightProbeGridArray),Ie=de.getProgramCacheKey(ye),Ue=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=ce.get(E.envMap||V.environment,Ze),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",ai),Ue=new Map,V.programs=Ue);let it=Ue.get(Ie);if(it!==void 0){if(V.currentProgram===it&&V.lightsStateVersion===Ae)return kd(E,ye),it}else ye.uniforms=de.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,Z,ye),E.onBeforeCompile(ye,R),it=de.acquireProgram(ye,Ie),Ue.set(Ie,it),V.uniforms=ye.uniforms;let Le=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=Be.uniform),kd(E,ye),V.needsLights=Vm(E),V.lightsStateVersion=Ae,V.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.sunLights.value=W.state.sun,Le.sunLightShadows.value=W.state.sunShadow,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.sunShadowMatrix.value=W.state.sunShadowMatrix,Le.sunShadowCascade.value=W.state.sunShadowCascade,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=it,V.uniformsList=null,it}function Hd(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Gr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function kd(E,F){let Z=q.get(E);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function km(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let Z=0,V=E.length;Z<V;Z++){let W=E[Z];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function zm(E,F,Z,V,W){F.isScene!==!0&&(F=xn),Q.resetTextureUnits();let Me=F.fog,Ae=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,ye=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ye.workingColorSpace,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ue=ce.get(V.envMap||Ae,Ie),Ze=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Le=!!Z.morphAttributes.position,pt=!!Z.morphAttributes.normal,qt=!!Z.morphAttributes.color,Pt=Qn;V.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Pt=R.toneMapping);let bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rn=bt!==void 0?bt.length:0,we=q.get(V),hn=b.state.lights;if(ht===!0&&(At===!0||E!==j)){let Ct=E===j&&V.id===X;Be.setState(V,E,Ct)}let ct=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==hn.state.version||we.outputColorSpace!==ye||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ue||V.fog===!0&&we.fog!==Me||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Be.numPlanes||we.numIntersection!==Be.numIntersection)||we.vertexAlphas!==Ze||we.vertexTangents!==it||we.morphTargets!==Le||we.morphNormals!==pt||we.morphColors!==qt||we.toneMapping!==Pt||we.morphTargetsCount!==rn||!!we.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,we.__version=V.version);let Fn=we.currentProgram;ct===!0&&(Fn=yo(V,F,W),N&&V.isNodeMaterial&&N.onUpdateProgram(V,Fn,we));let oi=!1,ji=!1,er=!1,St=Fn.getUniforms(),Bt=we.uniforms;if(S.useProgram(Fn.program)&&(oi=!0,ji=!0,er=!0),V.id!==X&&(X=V.id,ji=!0),we.needsLights){let Ct=km(b.state.lightProbeGridArray,W);we.lightProbeGrid!==Ct&&(we.lightProbeGrid=Ct,ji=!0)}if(oi||j!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),St.setValue(H,"projectionMatrix",E.projectionMatrix),St.setValue(H,"viewMatrix",E.matrixWorldInverse);let es=St.map.cameraPosition;es!==void 0&&es.setValue(H,Lt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&St.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,ji=!0,er=!0)}if(we.needsLights&&(hn.state.sunShadowMap.length>0&&St.setValue(H,"sunShadowMap",hn.state.sunShadowMap,Q),hn.state.directionalShadowMap.length>0&&St.setValue(H,"directionalShadowMap",hn.state.directionalShadowMap,Q),hn.state.spotShadowMap.length>0&&St.setValue(H,"spotShadowMap",hn.state.spotShadowMap,Q),hn.state.pointShadowMap.length>0&&St.setValue(H,"pointShadowMap",hn.state.pointShadowMap,Q)),W.isSkinnedMesh){St.setOptional(H,W,"bindMatrix"),St.setOptional(H,W,"bindMatrixInverse");let Ct=W.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),St.setValue(H,"boneTexture",Ct.boneTexture,Q))}W.isBatchedMesh&&(St.setOptional(H,W,"batchingTexture"),St.setValue(H,"batchingTexture",W._matricesTexture,Q),St.setOptional(H,W,"batchingIdTexture"),St.setValue(H,"batchingIdTexture",W._indirectTexture,Q),St.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&St.setValue(H,"batchingColorTexture",W._colorsTexture,Q));let Qi=Z.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&B.update(W,Z,Fn),(ji||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,St.setValue(H,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Bt.envMapIntensity.value=F.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=qS()),ji){if(St.setValue(H,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Gm(Bt,er),Me&&V.fog===!0&&Oe.refreshFogUniforms(Bt,Me),Oe.refreshMaterialUniforms(Bt,V,J,Y,b.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){let Ct=we.lightProbeGrid;Bt.probesSH.value=Ct.texture,Bt.probesMin.value.copy(Ct.boundingBox.min),Bt.probesMax.value.copy(Ct.boundingBox.max),Bt.probesResolution.value.copy(Ct.resolution)}Gr.upload(H,Hd(we),Bt,Q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gr.upload(H,Hd(we),Bt,Q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(H,"center",W.center),St.setValue(H,"modelViewMatrix",W.modelViewMatrix),St.setValue(H,"normalMatrix",W.normalMatrix),St.setValue(H,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Ct=V.uniformsGroups;for(let es=0,tr=Ct.length;es<tr;es++){let Gd=Ct[es];ae.update(Gd,Fn),ae.bind(Gd,Fn)}}return Fn}function Gm(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Vm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,F,Z){let V=q.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=F,q.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let Z=q.get(E);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Z=0){K=E,O=F,k=Z;let V=null,W=!1,Me=!1;if(E){let ye=q.get(E);if(ye.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(H.FRAMEBUFFER,ye.__webglFramebuffer),G.copy(E.viewport),te.copy(E.scissor),oe=E.scissorTest,S.viewport(G),S.scissor(te),S.setScissorTest(oe),X=-1;return}else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(ye.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ze=E.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&q.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);let Ue=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?V=Ue[F][Z]:V=Ue[F],W=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?V=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[Z]:V=Ue,G.copy(E.viewport),te.copy(E.scissor),oe=E.scissorTest}else G.copy(be).multiplyScalar(J).floor(),te.copy(je).multiplyScalar(J).floor(),oe=$t;if(Z!==0&&(V=U),S.bindFramebuffer(H.FRAMEBUFFER,V)&&S.drawBuffers(E,V),S.viewport(G),S.scissor(te),S.setScissorTest(oe),W){let ye=q.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,Z)}else if(Me){let ye=F;for(let Ie=0;Ie<E.textures.length;Ie++){let Ue=q.get(E.textures[Ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,Z,ye)}}else if(E!==null&&Z!==0){let ye=q.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ye.__webglTexture,Z)}X=-1};function zd(E){let F=q.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=I.textureFormatReadable(E.format),F.__typeReadable=I.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Z,V,W,Me,Ae,ye=0){if(!(E&&E.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){S.bindFramebuffer(H.FRAMEBUFFER,Ie);try{let Ue=E.textures[ye],Ze=Ue.format,it=Ue.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ye);let Le=zd(Ue);if(Le.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&Z>=0&&Z<=E.height-W&&H.readPixels(F,Z,V,W,me.convert(Ze),me.convert(it),Me)}finally{let Ue=K!==null?q.get(K).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,F,Z,V,W,Me,Ae,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(F>=0&&F<=E.width-V&&Z>=0&&Z<=E.height-W){S.bindFramebuffer(H.FRAMEBUFFER,Ie);let Ue=E.textures[ye],Ze=Ue.format,it=Ue.type;E.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ye);let Le=zd(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(F,Z,V,W,me.convert(Ze),me.convert(it),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let qt=K!==null?q.get(K).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,qt);let Pt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _p(H,Pt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(pt),H.deleteSync(Pt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Z=0){let V=Math.pow(2,-Z),W=Math.floor(E.image.width*V),Me=Math.floor(E.image.height*V),Ae=F!==null?F.x:0,ye=F!==null?F.y:0;Q.setTexture2D(E,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,Ae,ye,W,Me),S.unbindTexture()},this.copyTextureToTexture=function(E,F,Z=null,V=null,W=0,Me=0){let Ae,ye,Ie,Ue,Ze,it,Le,pt,qt,Pt=E.isCompressedTexture?E.mipmaps[Me]:E.image;if(Z!==null)Ae=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,Ze=Z.min.y,it=Z.isBox3?Z.min.z:0;else{let Bt=Math.pow(2,-W);Ae=Math.floor(Pt.width*Bt),ye=Math.floor(Pt.height*Bt),E.isDataArrayTexture?Ie=Pt.depth:E.isData3DTexture?Ie=Math.floor(Pt.depth*Bt):Ie=1,Ue=0,Ze=0,it=0}V!==null?(Le=V.x,pt=V.y,qt=V.z):(Le=0,pt=0,qt=0);let bt=me.convert(F.format),rn=me.convert(F.type),we;F.isData3DTexture?(Q.setTexture3D(F,0),we=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),we=H.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),we=H.TEXTURE_2D),S.activeTexture(H.TEXTURE0),S.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);let hn=S.getParameter(H.UNPACK_ROW_LENGTH),ct=S.getParameter(H.UNPACK_IMAGE_HEIGHT),Fn=S.getParameter(H.UNPACK_SKIP_PIXELS),oi=S.getParameter(H.UNPACK_SKIP_ROWS),ji=S.getParameter(H.UNPACK_SKIP_IMAGES);S.pixelStorei(H.UNPACK_ROW_LENGTH,Pt.width),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt.height),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Ue),S.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),S.pixelStorei(H.UNPACK_SKIP_IMAGES,it);let er=E.isDataArrayTexture||E.isData3DTexture,St=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Bt=q.get(E),Qi=q.get(F),Ct=q.get(Bt.__renderTarget),es=q.get(Qi.__renderTarget);S.bindFramebuffer(H.READ_FRAMEBUFFER,Ct.__webglFramebuffer),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let tr=0;tr<Ie;tr++)er&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,it+tr),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,q.get(F).__webglTexture,Me,qt+tr)),H.blitFramebuffer(Ue,Ze,Ae,ye,Le,pt,Ae,ye,H.DEPTH_BUFFER_BIT,H.NEAREST);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){let Bt=q.get(E),Qi=q.get(F);S.bindFramebuffer(H.READ_FRAMEBUFFER,C),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,D);for(let Ct=0;Ct<Ie;Ct++)er?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bt.__webglTexture,W,it+Ct):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,W),St?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qi.__webglTexture,Me,qt+Ct):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qi.__webglTexture,Me),W!==0?H.blitFramebuffer(Ue,Ze,Ae,ye,Le,pt,Ae,ye,H.COLOR_BUFFER_BIT,H.NEAREST):St?H.copyTexSubImage3D(we,Me,Le,pt,qt+Ct,Ue,Ze,Ae,ye):H.copyTexSubImage2D(we,Me,Le,pt,Ue,Ze,Ae,ye);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else St?E.isDataTexture||E.isData3DTexture?H.texSubImage3D(we,Me,Le,pt,qt,Ae,ye,Ie,bt,rn,Pt.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(we,Me,Le,pt,qt,Ae,ye,Ie,bt,Pt.data):H.texSubImage3D(we,Me,Le,pt,qt,Ae,ye,Ie,bt,rn,Pt):E.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,Le,pt,Ae,ye,bt,rn,Pt.data):E.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,Le,pt,Pt.width,Pt.height,bt,Pt.data):H.texSubImage2D(H.TEXTURE_2D,Me,Le,pt,Ae,ye,bt,rn,Pt);S.pixelStorei(H.UNPACK_ROW_LENGTH,hn),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ct),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Fn),S.pixelStorei(H.UNPACK_SKIP_ROWS,oi),S.pixelStorei(H.UNPACK_SKIP_IMAGES,ji),Me===0&&F.generateMipmaps&&H.generateMipmap(we),S.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){O=0,k=0,K=null,S.reset(),Te.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var Wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},YS=new xi(-1,1,1,-1,0,1),Uu=class extends Qe{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}},KS=new Uu,gs=class{constructor(e){this._mesh=new ne(KS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xr=class extends Ln{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ji.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ro=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ic=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xr(Wr),this.copyPass.material.blending=zn,this.timer=new Ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ro!==void 0&&(a instanceof ro?n=!0:a instanceof Ic&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nc=class extends Ln{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new le}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var $p={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var qr=class s extends Ln{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,a,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ft(r,a,{type:jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ft(r,a,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=$p;this.highPassUniforms=Ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new he(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ji.clone(Wr.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader,premultipliedAlpha:!0,blending:dt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new le,this._oldClearAlpha=1,this._basic=new et,this._fsQuad=new gs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new Et({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};qr.BlurDirectionX=new he(1,0);qr.BlurDirectionY=new he(0,1);var ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Dc=class extends Ln{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ji.clone(ao.uniforms),this.material=new Lr({name:ao.name,uniforms:this.uniforms,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader}),this._fsQuad=new gs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ga?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function _s(s){let e=document.createElement("canvas");return e.width=e.height=s,e}function xs(s,e=!0){let t=new Sn(s);return e&&(t.colorSpace=ot),t.anisotropy=4,t}var Fu=null;function ni(){if(Fu)return Fu;let s=_s(128),e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.55)"),t.addColorStop(.6,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Fu=xs(s)}var Ou=null;function Yr(){if(Ou)return Ou;let s=_s(64),e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(0,0,0,.75)"),t.addColorStop(.5,"rgba(0,0,0,.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ou=xs(s,!1)}function jp(s=1024){let e=_s(s),t=e.getContext("2d"),n=s/2;t.fillStyle="#0b0807",t.fillRect(0,0,s,s);for(let i=n*.3;i<n*.985;i+=1.6){let r=.05+.05*Math.random();t.strokeStyle=`rgba(255,255,255,${r})`,t.lineWidth=.7,t.beginPath(),t.arc(n,n,i,0,Math.PI*2),t.stroke()}for(let i of[.52,.7,.86])t.strokeStyle="rgba(0,0,0,.85)",t.lineWidth=5,t.beginPath(),t.arc(n,n,n*i,0,Math.PI*2),t.stroke();return t.strokeStyle="rgba(255,255,255,.18)",t.lineWidth=3,t.beginPath(),t.arc(n,n,n*.99,0,Math.PI*2),t.stroke(),xs(e)}function Qp(s=512){let e=_s(s),t=e.getContext("2d"),n=s/2;t.fillStyle="#6a6a6a",t.fillRect(0,0,s,s);for(let i=n*.3;i<n*.985;i+=1.2){let r=60+Math.floor(Math.random()*90);t.strokeStyle=`rgb(${r},${r},${r})`,t.lineWidth=.6,t.beginPath(),t.arc(n,n,i,0,Math.PI*2),t.stroke()}return xs(e,!1)}function em(s=512){let e=_s(s),t=e.getContext("2d"),n=s/2;if(typeof t.createConicGradient=="function"){let i=t.createConicGradient(-Math.PI/4,n,n);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.06,"rgba(255,255,255,.55)"),i.addColorStop(.14,"rgba(255,255,255,0)"),i.addColorStop(.5,"rgba(255,255,255,0)"),i.addColorStop(.56,"rgba(255,255,255,.4)"),i.addColorStop(.64,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i}else t.fillStyle="rgba(255,255,255,.08)";return t.beginPath(),t.arc(n,n,n,0,Math.PI*2),t.arc(n,n,n*.3,0,Math.PI*2,!0),t.fill(),xs(e)}function tm(s,e=512){let t=_s(e),n=t.getContext("2d"),i=e/2,r=n.createRadialGradient(i*.8,i*.7,0,i,i,i);r.addColorStop(0,"#ffffff"),r.addColorStop(.18,s),r.addColorStop(1,Uc(s,-.35)),n.fillStyle=r,n.beginPath(),n.arc(i,i,i,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4;for(let a of[.92,.62])n.beginPath(),n.arc(i,i,i*a,0,Math.PI*2),n.stroke();return n.fillStyle="rgba(20,10,8,.85)",n.font=`900 ${Math.round(e*.11)}px Orbitron, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText("BEAT",i,i*.62),n.fillText("ORBIT",i,i*1.38),xs(t)}var Bu=null;function Kr(){if(Bu)return Bu;let s=_s(64),e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,.8)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Bu=xs(s)}var Hu=null;function nm(){if(Hu)return Hu;let s=_s(128),e=s.getContext("2d");return e.strokeStyle="#ffd24a",e.lineWidth=7,e.setLineDash([14,9]),e.beginPath(),e.arc(64,64,54,0,Math.PI*2),e.stroke(),Hu=xs(s)}function Uc(s,e){let t=s.replace("#",""),n=parseInt(t.length===3?t.split("").map(l=>l+l).join(""):t,16),i=l=>Math.max(0,Math.min(255,Math.round(l+(e<0?l*e:(255-l)*e)))),r=i(n>>16&255),a=i(n>>8&255),o=i(n&255);return"#"+(1<<24|r<<16|a<<8|o).toString(16).slice(1)}function Fc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Qe,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=im(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let p=im(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function im(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new lt(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let _=h.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function ku(s,e){if(e===au)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Hr||e===to){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Hr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Oc(s){let e=new Map,t=new Map,n=s.clone();return sm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function sm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)sm(s.children[n],e.children[n],t)}var Bc=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Hc(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hc(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ad(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Yi.extractUrlBase(e);a=Yi.resolveURL(c,this.path)}else a=Yi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Nr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===cm){try{a[tt.KHR_BINARY_GLTF]=new od(e)}catch(u){i&&i(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new Xu;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new ld(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new cd;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new hd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ZS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Wt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],dn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ds(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _i(h),c.distance=u;break;case"spot":c=new Oa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Xu=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return et}extendParams(e,t,n){let i=[];e.color=new le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],dn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ot))}return Promise.all(i)}},qu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(r,r)}return Promise.all(i)}},Ku=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Zu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Ju=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ot)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},$u=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},ju=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new le().setRGB(r[0],r[1],r[2],dn),Promise.all(i)}},Qu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new le().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ot)),Promise.all(i)}},td=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},nd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},id=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},sd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},rd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Hc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},ad=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let _=new ke,g=new P,m=new Tt,M=new P(1,1,1),w=new Cn(p.geometry,p.material,d);for(let T=0;T<d;T++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&M.fromBufferAttribute(l.SCALE,T),w.setMatrixAt(T,_.compose(g,m,M));let y=null;for(let T in l)if(T==="_COLOR_0"){let b=l[T];w.instanceColor=new Bi(b.array,b.itemSize,b.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(y===null){let A=w.geometry;y=new Qe,y.name=A.name;for(let x in A.attributes)y.setAttribute(x,A.attributes[x]);for(let x in A.morphAttributes)y.morphAttributes[x]=A.morphAttributes[x];A.index!==null&&y.setIndex(A.index),y.morphTargetsRelative=A.morphTargetsRelative;for(let x of A.groups)y.addGroup(x.start,x.count,x.materialIndex);A.boundingBox!==null&&(y.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(y.boundingSphere=A.boundingSphere.clone()),y.drawRange.start=A.drawRange.start,y.drawRange.count=A.drawRange.count,y.userData=Object.assign({},A.userData),w.geometry=y}let b=l[T];y.setAttribute(T,new Bi(b.array,b.itemSize,b.normalized))}It.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},cm="glTF",oo=12,rm={JSON:1313821514,BIN:5130562},od=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,oo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-oo,r=new DataView(e,oo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===rm.JSON){let c=new Uint8Array(e,oo+a,o);this.content=n.decode(c)}else if(l===rm.BIN){let c=oo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ld=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=dd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=dd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Zr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let _=f.attributes[p],g=l[p];g!==void 0&&(_.normalized=g)}u(f)},o,c,dn,d)})})}},cd=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},hd=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},kc=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,g=-2*f+3*d,m=f-d,M=1-g,w=m-d+u;for(let y=0;y!==o;y++){let T=a[_+y+o],b=a[_+y+l]*h,A=a[p+y+o],x=a[p+y]*h;r[y]=M*T+w*b+g*A+m*x}return r}},JS=new Tt,ud=class extends kc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return JS.fromArray(r).normalize().toArray(r),r}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},am={9728:Ht,9729:kt,9984:Fl,9985:Fr,9986:Vs,9987:ei},om={33071:Bn,33648:br,10497:Rn},zu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$S={CUBICSPLINE:void 0,LINEAR:Is,STEP:Ps},Gu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),s.DefaultMaterial}function Ys(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function eM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tM(s){let e,t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vu(t.attributes):e=s.indices+":"+Vu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Vu(s.targets[n]);return e}function Vu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function fd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var iM=new ke,pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new Bs(this.options.manager):this.textureLoader=new Ba(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ys(r,o,i),Ti(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Yi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=zu[i.type],o=Zr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new lt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=zu[i.type],c=Zr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,g;if(f&&f!==u){let m=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,w=t.cache.get(M);w||(_=new c(o,m*f,i.count*f/h),w=new Ns(_,f/h),t.cache.add(M,w)),g=new os(w,l,d%f/h,p)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),g=new lt(_,l,p);if(i.sparse!==void 0){let m=zu.SCALAR,M=Zr[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new M(a[1],w,i.sparse.count*m),b=new c(a[2],y,i.sparse.count*l);o!==null&&(g=new lt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,x=T.length;A<x;A++){let v=T[A];if(g.setX(v,b[A*l]),l>=2&&g.setY(v,b[A*l+1]),l>=3&&g.setZ(v,b[A*l+2]),l>=4&&g.setW(v,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=am[d.magFilter]||kt,h.minFilter=am[d.minFilter]||ei,h.wrapS=om[d.wrapS]||Rn,h.wrapT=om[d.wrapT]||Rn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==kt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){let g=new zt(_);g.needsUpdate=!0,d(g)}),t.load(Yi.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ti(u,a),u.userData.mimeType=a.mimeType||nM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Hi,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ls,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ut}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=i[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],dn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);let h=r.alphaMode||Gu.OPAQUE;if(h===Gu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Gu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==et&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==et&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==et){let u=r.emissiveFactor;o.emissive=new le().setRGB(u[0],u[1],u[2],dn)}return r.emissiveTexture!==void 0&&a!==et&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ot)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ti(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ys(i,u,r),u})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return lm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=tM(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=lm(new Qe,c,t),c.mode===Gn.TRIANGLE_STRIP?d=d.then(f=>ku(f,to)):c.mode===Gn.TRIANGLE_FAN&&(d=d.then(f=>ku(f,Hr))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?jS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let _=h[f],g=a[f],m,M=c[f];if(g.mode===Gn.TRIANGLES||g.mode===Gn.TRIANGLE_STRIP||g.mode===Gn.TRIANGLE_FAN||g.mode===void 0){let w=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&y?new ba(_,M):new ne(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Gn.LINES)m=new Fs(_,M);else if(g.mode===Gn.LINE_STRIP)m=new Us(_,M);else if(g.mode===Gn.LINE_LOOP)m=new Ea(_,M);else if(g.mode===Gn.POINTS)m=new di(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&eM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ti(m,r),g.extensions&&Ys(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ys(i,u[0],r),u[0];let d=new ge;r.extensions&&Ys(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Mi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ta(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],p=i.samplers[f.sampler],_=f.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let w=0,y=d.length;w<y;w++){let T=d[w],b=f[w],A=p[w],x=_[w],v=g[w];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let R=n._createAnimationTracks(T,b,A,x,v);if(R)for(let L=0;L<R.length;L++)m.push(R[L])}let M=new qi(r,void 0,m);return Ti(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iM)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Cr:c.length>1?h=new ge:c.length===1?h=c[0]:h=new It,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ti(h,r),r.extensions&&Ys(n,h,r),r.matrix!==void 0){let u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ge;n.name&&(r.name=i.createUniqueName(n.name)),Ti(r,n),n.extensions&&Ys(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Oc(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof pn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ys[r.path]===ys.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ys[r.path]){case ys.weights:h=Vi;break;case ys.rotation:h=Wi;break;case ys.translation:case ys.scale:h=us;break;default:n.itemSize===1?h=Vi:h=us;break}let u=i.interpolation!==void 0?$S[i.interpolation]:Is,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new h(l[f]+"."+ys[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=fd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Wi?ud:kc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function sM(s,e,t){let n=e.attributes,i=new fn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=fd(Zr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=fd(Zr[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new yn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function lm(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=dd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Ti(s,e),sM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?QS(s,e.targets,t):s})}var rM=new Bs,aM=new Bc,md=new Map,gd=new Map,_d=[];function hm(s,e){_d.push(s),console.warn("[Render3D] asset y\xFCklenemedi:",s,e&&e.message?e.message:e)}function lo(s){if(!s)return Promise.resolve(null);if(md.has(s))return md.get(s);let e=new Promise(t=>{rM.load(s,n=>{n.colorSpace=ot,n.anisotropy=4,t(n)},void 0,n=>{hm(s,n),t(null)})});return md.set(s,e),e}function oM(s){if(!s)return Promise.resolve(null);if(gd.has(s))return gd.get(s);let e=new Promise(t=>{aM.load(s,n=>t(n),void 0,n=>{hm(s,n),t(null)})});return gd.set(s,e),e}function lM(s){return s?typeof s=="string"?/\.(glb|gltf)$/i.test(s)?{model:s}:{image:s}:typeof s=="object"&&(s.image||s.sheet||s.model)?s:null:null}async function En(s){let e=lM(s);if(!e)return null;if(e.model){let n=await oM(e.model);return n?{kind:"model",gltf:n,opts:e}:null}if(e.sheet){let n=await lo(e.sheet);if(!n)return null;let i=Math.max(1,e.cols|0||1),r=Math.max(1,e.rows|0||1);return n.repeat.set(1/i,1/r),{kind:"sheet",texture:n,opts:Object.assign({cols:i,rows:r,frames:i*r,fps:12,loop:!0},e)}}let t=await lo(e.image);return t?{kind:"image",texture:t,opts:e}:null}function xd(s,e){let t=s.opts,n=Math.floor(e*t.fps);n=t.loop===!1?Math.min(n,t.frames-1):n%t.frames;let i=n%t.cols,r=Math.floor(n/t.cols);s.texture.offset.set(i/t.cols,1-(r+1)/t.rows)}function Ks(s,e){let t=s.gltf.scene,n=Oc(t),i=new fn().setFromObject(n),r=new P;i.getSize(r);let a=new P;i.getCenter(a);let o=Math.max(r.x,r.y,r.z)||1,l=e/o,c=new ge;n.position.sub(a),c.add(n);let h=new ge;c.scale.setScalar(l);let u=s.opts.rotation;Array.isArray(u)&&c.rotation.set(Mi.degToRad(u[0]||0),Mi.degToRad(u[1]||0),Mi.degToRad(u[2]||0)),h.add(c);let d=null,f=s.gltf.animations||[];if(f.length){d=new ka(n);let p=s.opts.animation&&qi.findByName(f,s.opts.animation)||f[0];d.clipAction(p).play()}return n.traverse(p=>{p.isMesh&&(p.castShadow=!1,p.receiveShadow=!1)}),{object:h,mixer:d}}var Jr=class{constructor(e){this.maxPts=e;let t=e*2;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.side=new Float32Array(t),this.index=new Uint16Array(e*6),this.tmp=new Float32Array(e*8);let n=new Qe;n.setAttribute("position",new lt(this.pos,3).setUsage(Si)),n.setAttribute("aColor",new lt(this.col,4).setUsage(Si)),n.setAttribute("aSide",new lt(this.side,1).setUsage(Si)),n.setIndex(new lt(this.index,1).setUsage(Si)),n.setDrawRange(0,0),this.geo=n,this.mat=new Et({vertexShader:`
        attribute vec4 aColor; attribute float aSide; varying vec4 vC; varying float vS;
        void main(){ vC=aColor; vS=aSide; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`
        varying vec4 vC; varying float vS;
        void main(){
          float e = 1.0-abs(vS);
          float core = smoothstep(0.6,1.0,e);
          float a = vC.a*(e*e*0.75 + core*0.5);
          gl_FragColor = vec4(vC.rgb + core*0.45, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:dt}),this.mesh=new ne(n,this.mat),this.mesh.frustumCulled=!1,this.v=0,this.i=0,this.sn=0}begin(){this.v=0,this.i=0}strip(){this.sn=0}p(e,t,n,i,r,a,o,l){if(this.sn>=this.maxPts)return;let c=this.sn*8,h=this.tmp;h[c]=e,h[c+1]=t,h[c+2]=n,h[c+3]=i,h[c+4]=r,h[c+5]=a,h[c+6]=o,h[c+7]=l,this.sn++}endStrip(){let e=this.sn,t=this.tmp;if(e<2||this.v+e*2>this.maxPts*2||this.i+(e-1)*6>this.index.length)return;let n=this.v;for(let i=0;i<e;i++){let r=i*8,a=(i>0?i-1:i)*8,o=(i<e-1?i+1:i)*8,l=t[o]-t[a],c=t[o+2]-t[a+2],h=Math.hypot(l,c)||1;l/=h,c/=h;let u=t[r+3]*.5,d=-c*u,f=l*u;for(let p=-1;p<=1;p+=2){let _=this.v++;this.pos[_*3]=t[r]+d*p,this.pos[_*3+1]=t[r+1],this.pos[_*3+2]=t[r+2]+f*p,this.col[_*4]=t[r+4],this.col[_*4+1]=t[r+5],this.col[_*4+2]=t[r+6],this.col[_*4+3]=t[r+7],this.side[_]=p}}for(let i=0;i<e-1;i++){let r=n+i*2,a=r+2,o=this.index,l=this.i;o[l++]=r,o[l++]=r+1,o[l++]=a,o[l++]=r+1,o[l++]=a+1,o[l++]=a,this.i=l}}end(){let e=this.geo;e.setDrawRange(0,this.i),e.attributes.position.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0,e.attributes.aSide.needsUpdate=!0,e.index.needsUpdate=!0}};function um(s,e,t,n,i,r,a,o,l){let c=i-e,h=a-n,u=Math.hypot(c,h)||1,d=-h/u,f=c/u;for(let p=0;p<=o;p++){let _=p/o,g=Math.sin(_*Math.PI),m=p===0||p===o?0:(Math.random()*2-1)*l*u*g;s[p*3]=e+c*_+d*m,s[p*3+1]=t+(r-t)*_,s[p*3+2]=n+h*_+f*m}return o+1}var st=.44,Zt=.012;var Ke=dt;function Re(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e||s,t}function Ce(s,e){let t=new Sn(s);return t.colorSpace=ot,t.anisotropy=4,e&&(t.wrapS=Rn),t}function Ss(s,e,t,n,i){let r=[],a=[],o=[];for(let c=0;c<=t;c++){let h=c/t*Math.PI*2,u=Math.cos(h),d=Math.sin(h),f=c/t*n;if(r.push(u*(s-e/2),i,d*(s-e/2),u*(s+e/2),i,d*(s+e/2)),a.push(f,0,f,1),c<t){let p=c*2;o.push(p,p+2,p+1,p+1,p+2,p+3)}}let l=new Qe;return l.setAttribute("position",new We(r,3)),l.setAttribute("uv",new We(a,2)),l.setIndex(o),l}function ii(s,e,t,n){return new ne(Ss(e,t,160,1,Zt+.002),new et({color:s,transparent:!0,opacity:n,depthWrite:!1,blending:Ke,side:Vt,forceSinglePass:!0}))}function Ei(s){return s.aspect<.9?{bl:[-.5,-.74],br:[.52,-.78],ul:[-.6,.52],ur:[.6,.52],bc:[0,-.86],sky:.58}:{bl:[-.8,-.5],br:[.86,-.45],ul:[-.8,.42],ur:[.82,.38],bc:[0,-.9],sky:.55}}function yt(s,e,t,n,i,r){let a=e.ground(t,n,i),o=st+(r||.06),l=a&&Math.hypot(a.x-.36,a.z+.42)<.1+(r||.06);return s.visible=!!a&&Math.hypot(a.x,a.z)>o&&!l,a&&s.position.set(a.x,i,a.z),e.camPos?(s.up.copy(e.camUp),s.lookAt(e.camPos)):s.rotation.set(-e.tilt,0,0),s.visible}function Ee(s){return new et(Object.assign({transparent:!0,depthWrite:!1,side:Vt,forceSinglePass:!0},s))}function Nn(){let s=Re(64),e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ce(s)}function ym(){let s=Re(256,16),e=s.getContext("2d"),t=e.createLinearGradient(0,0,256,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.8,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,1)"),e.fillStyle=t,e.fillRect(0,0,256,16),e.globalCompositeOperation="destination-in";let n=e.createLinearGradient(0,0,0,16);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,16),Ce(s)}function Sm(s,e){let t=new ve(1,1);return t.translate(-.5,0,0),new ne(t,Ee({map:s,color:e,blending:Ke,opacity:0}))}var Ne=(s,e)=>s+Math.random()*(e-s),Sd=s=>Math.pow(Math.max(0,Math.sin(s*Math.PI*2*1.6)),6);function cM(s,e){let n=Re(512),i=n.getContext("2d"),r=i.createRadialGradient(512*.55,512*.35,0,512/2,512/2,512*.75);return r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,512,512),Ce(n)}function hM(){let t=Re(320,200),n=t.getContext("2d"),i=(_,g,m,M,w)=>{n.beginPath(),n.moveTo(_+w,g),n.arcTo(_+m,g,_+m,g+M,w),n.arcTo(_+m,g+M,_,g+M,w),n.arcTo(_,g+M,_,g,w),n.arcTo(_,g,_+m,g,w),n.closePath()},r=n.createLinearGradient(0,0,0,200);r.addColorStop(0,"#5a3220"),r.addColorStop(1,"#2a160d"),n.fillStyle=r,i(0,0,320,200,18),n.fill();let a=n.createRadialGradient(320/2,200*.85,10,320/2,200*.7,320*.6);a.addColorStop(0,"#ffe6b0"),a.addColorStop(.6,"#f0c47c"),a.addColorStop(1,"#a8743c"),n.fillStyle=a,i(14,14,292,172,10),n.fill();let o=320/2,l=200*.92,c=128,h=-Math.PI/2-.82,u=-Math.PI/2+.82,d=h+(u-h)*.7;n.lineCap="round",n.strokeStyle="#2a1a10",n.lineWidth=3,n.beginPath(),n.arc(o,l,c,h,d),n.stroke(),n.strokeStyle="#c0281c",n.lineWidth=7,n.beginPath(),n.arc(o,l,c+2,d,u),n.stroke();let f=[0,.18,.33,.45,.56,.7,.8,.9,1];for(let _ of f){let g=h+(u-h)*_,m=_>.7;n.strokeStyle=m?"#c0281c":"#2a1a10",n.lineWidth=3,n.beginPath(),n.moveTo(o+Math.cos(g)*(c+4),l+Math.sin(g)*(c+4)),n.lineTo(o+Math.cos(g)*(c+16),l+Math.sin(g)*(c+16)),n.stroke()}n.fillStyle="#2a1a10",n.font="bold 30px Georgia, serif",n.textAlign="center",n.fillText("VU",o,l-46),n.font="15px Georgia, serif",n.fillStyle="#5a3a22",n.fillText("-20",o+Math.cos(h)*(c-14),l+Math.sin(h)*(c-14)+6),n.fillStyle="#c0281c",n.fillText("+3",o+Math.cos(u)*(c-14),l+Math.sin(u)*(c-14)+6);let p=n.createLinearGradient(0,14,0,200*.5);return p.addColorStop(0,"rgba(255,255,255,.22)"),p.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=p,i(14,14,292,200*.42,10),n.fill(),{tex:Ce(t),pivot:[o/320,l/200],len:(c+6)/320,a:.82}}function uM(){let s=Re(64,256),e=s.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256),e.globalCompositeOperation="destination-in";let n=e.createLinearGradient(0,0,0,256);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.7,"rgba(0,0,0,.45)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,256),Ce(s)}function dM(){let s=new ge,e=ii("#ff8a3d",st*1.008,.0035,.55),t=ii("#ff6a2a",st*1.008,.018,.1);s.add(e,t);let n=new ge;s.add(n);let i=uM(),r=new ne(new ve(.42,3.4),Ee({map:i,color:"#ffb36b",blending:Ke,opacity:.05}));n.add(r);let a=-1.25,o=1.55,l=-.5,c=Math.sin(-l),h=-Math.cos(-l);r.position.set(a+c*1.7,o+h*1.7,0),r.rotation.z=l;let u=34,d=Nn(),f=new Cn(new ve(1,1),Ee({map:d,blending:Ke,opacity:1}),u);f.frustumCulled=!1,n.add(f);let p=Array.from({length:u},()=>({x:Ne(-1.3,1.3),y:Ne(-1.6,1.6),s:Ne(.006,.013),ph:Ne(0,9),sp:Ne(.5,1.2)})),_=new ke,g=new Tt,m=new P,M=new P,w=new le,y=new le("#ffc58a"),T=new ge;s.add(T);let b=hM(),A=.12,x=A*200/320;T.add(new ne(new ve(A,x),Ee({map:b.tex,color:"#a8927c"})));let v=b.len*A,R=new ve(.0016,v);R.translate(0,v/2,0);let L=new ne(R,Ee({color:"#1a0f08",opacity:.92}));L.position.set((b.pivot[0]-.5)*A,(.5-b.pivot[1])*x,8e-4),T.add(L);let N=new ne(new Hn(.006,16),Ee({color:"#2a1a10"}));N.position.copy(L.position),N.position.z=.001,T.add(N);let U=new ne(new Hn(.0042,16),Ee({color:"#ff3a22",opacity:.15}));U.position.set(A*.39,x*.33,.001),T.add(U);let C=.2,D=0,O=0;return{group:s,label:"assets3d/themes/neon/label.jpg",background:cM("#2b1610","#070302"),vinyl:"#d9d3cf",armMetal:"#b8925a",stars:0,nebula:0,dust:0,sheen:.1,bloom:.4,ringColor:"#d9b48a",ringBaseColor:"#d9b48a",ringBase:.13,ringFlash:"#ffc27a",layout(k){let K=Ei(k);n.position.set(0,-.12,0),n.rotation.set(-Math.PI/2,0,0),yt(T,k,K.br[0],K.br[1],.02,.1)},onNote(){D=Math.min(1,D+.45)},update(k,K,X){t.material.opacity=.08+Math.sin(K*2)*.03,r.material.opacity=.065+Math.sin(K*.37)*.015+Math.sin(K*1.13)*.006;for(let re=0;re<u;re++){let $=p[re];$.x+=(Math.sin(K*.21*$.sp+$.ph)*35e-5+12e-5)*k,$.y+=(Math.cos(K*.17*$.sp+$.ph*1.3)*3e-4-8e-5)*k,$.x>1.35&&($.x=-1.35),$.y<-1.65&&($.y=1.65);let Pe=$.x-a,Y=$.y-o,J=Math.abs(Pe*h-Y*c),Se=Pe*c+Y*h,Ge=Math.exp(-(J*J)/(.17*.17))*Math.max(0,1-Se/3.2),be=.75+.25*Math.sin(K*2.3*$.sp+$.ph);M.set($.x,$.y,.01),m.set($.s,$.s,1),_.compose(M,g,m),f.setMatrixAt(re,_),f.setColorAt(re,w.copy(y).multiplyScalar((.03+Ge*1.1)*be))}f.instanceMatrix.needsUpdate=!0,f.instanceColor.needsUpdate=!0;let j=Sd(K),G=.5+.5*Math.sin(K*.9)*Math.sin(K*2.7+1),te=X.inGame?.32+(X.player?Math.min(.2,(X.player.speed-1.5)*.1):0):.2,oe=Math.min(1.08,te+j*.22+G*.12+D*.5);C+=(oe-C)*Math.min(1,(oe>C?.35:.06)*k),D=Math.max(0,D-.03*k),L.rotation.z=b.a-Math.min(1.04,C)*b.a*2,C>.86?O=1:O=Math.max(0,O-.04*k),U.material.opacity=.15+O*.85}}}function fM(s){let e=new ge,t=new ge,n=12;for(let C=0;C<n;C++){let D=C/n*Math.PI*2,O=C%2?"#19e3ff":"#ff2f8a",k=st*.99-.14,K=new ve(k,.0035);K.rotateX(-Math.PI/2),K.translate(.14+k/2,Zt+.0015,0);let X=new ne(K,new et({color:O,transparent:!0,opacity:.16,depthWrite:!1,blending:Ke}));X.rotation.y=D,t.add(X)}s.recordSpin.add(t);let i=Re(512,4),r=i.getContext("2d"),a=r.createLinearGradient(0,0,512,0);a.addColorStop(0,"#ff2f8a"),a.addColorStop(.25,"#a64bff"),a.addColorStop(.5,"#19e3ff"),a.addColorStop(.75,"#a64bff"),a.addColorStop(1,"#ff2f8a"),r.fillStyle=a,r.fillRect(0,0,512,4);let o=Ce(i,!0),l=new ne(Ss(st*1.012,.006,200,1,Zt+.002),new et({map:o,transparent:!0,opacity:.42,depthWrite:!1,blending:Ke,side:Vt,forceSinglePass:!0})),c=new ne(Ss(st*1.012,.04,200,1,Zt+.0018),new et({map:o,transparent:!0,opacity:.25,depthWrite:!1,blending:Ke,side:Vt,forceSinglePass:!0}));e.add(l,c);let h=180,u=new ve(1,1);u.rotateX(-Math.PI/2),u.translate(.5,0,0);let d=new Cn(u,new et({transparent:!0,opacity:.38,depthWrite:!1,blending:Ke}),h),f=new le("#ff2f8a"),p=new le("#19e3ff"),_=new le;for(let C=0;C<h;C++){let D=C/h,O=.5-.5*Math.cos(D*Math.PI*2);d.setColorAt(C,_.copy(f).lerp(p,O))}d.frustumCulled=!1,e.add(d);let g=new ke,m=new Tt,M=new P,w=new P,y=new P(0,1,0),T=Array.from({length:h},()=>Math.random()*10),b=new Et({transparent:!0,depthWrite:!1,blending:Ke,uniforms:{uTime:{value:0},uPulse:{value:-1},uA:{value:new le("#ff2f8a")},uB:{value:new le("#19e3ff")}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
      varying vec2 vP; uniform float uTime, uPulse; uniform vec3 uA, uB;
      void main(){
        vec2 q = (vP + vec2(0.0, uTime*0.035)) / 0.085;
        vec2 gd = abs(fract(q - 0.5) - 0.5) / fwidth(q);
        float line = 1.0 - min(min(gd.x, gd.y), 1.0);
        float r = length(vP);
        float fade = smoothstep(0.47, 0.62, r) * (1.0 - smoothstep(0.7, 1.25, r)) * smoothstep(-1.0, -0.55, vP.y);
        float pulse = uPulse > 0.0 ? exp(-pow((r - uPulse)*9.0, 2.0)) * (1.0 - smoothstep(0.9, 1.6, uPulse)) : 0.0;
        vec3 col = mix(uA, uB, clamp(0.5 - vP.y*0.45, 0.0, 1.0));
        float a = line * fade * (0.06 + pulse*0.3);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),A=new ve(4,4);A.rotateX(-Math.PI/2);let x=new ne(A,b);x.position.y=-.04,x.renderOrder=-1,e.add(x);let v=[],R=(C,D)=>{let O=new ge,k=new Fs(new Ra(C),new ls({color:D,transparent:!0,opacity:.5,depthWrite:!1,blending:Ke}));return C.dispose(),O.add(k),e.add(O),v.push({o:O,m:k,ph:Math.random()*6}),O},L=R(new Ia(.034,0),"#19e3ff"),N=R(new ki(.03,.05,4),"#ff4fa8"),U=-10;return{group:e,label:"assets3d/themes/synthbeats/label.jpg",vinyl:"#d8d8e8",armMetal:"#c9ced8",stars:.1,nebula:.05,dust:0,bloom:.3,ringColor:"#5fc3d3",ringBaseColor:"#c9cbe0",ringBase:.11,ringFlash:"#5fe8ff",update(C,D,O){let k=Math.pow(Math.max(0,Math.sin(D*Math.PI*2*1.6)),6),K=.6+(O.inGame&&O.player?Math.min(1,(O.player.speed-1.5)*.4):0);for(let G=0;G<h;G++){let te=G/h*Math.PI*2,oe=T[G],re=.006+(Math.abs(Math.sin(D*3.1+oe))*.017+Math.abs(Math.sin(D*7.3+oe*2))*.008+k*.02)*K;m.setFromAxisAngle(y,-te),w.set(Math.cos(te)*st*1.04,Zt-.004,Math.sin(te)*st*1.04),M.set(re,1,.006),g.compose(w,m,M),d.setMatrixAt(G,g)}d.instanceMatrix.needsUpdate=!0,c.material.opacity=.05+k*.07,o.offset.x=D*.05%1,b.uniforms.uTime.value=D;let X=Math.floor(D*1.6-.25);X%4===0&&D-U>1&&(U=(X+.25)/1.6);let j=(D-U)*.75;b.uniforms.uPulse.value=j<1.2?.44+j:-1;for(let G of v)G.m.rotation.x+=.0035*C,G.m.rotation.y+=.006*C,G.m.position.y=Math.sin(D*.8+G.ph)*.006,G.m.material.opacity=.32+k*.25},layout(C){let D=Ei(C);yt(L,C,D.ul[0],D.ul[1],.04,.06),yt(N,C,D.br[0],D.br[1],.04,.06)},dispose(){s.recordSpin.remove(t),t.traverse(C=>{C.geometry&&C.geometry.dispose(),C.material&&C.material.dispose()})}}}function pM(){let t=Re(1024,1024),n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#0b0618"),i.addColorStop(.55,"#1a0b22"),i.addColorStop(1,"#08050c"),n.fillStyle=i,n.fillRect(0,0,1024,1024);let r=0;for(;r<1024;){let l=50+Math.random()*90,c=250+Math.random()*520,h=1024-c;n.fillStyle=`rgba(${10+Math.random()*12},${8+Math.random()*10},${20+Math.random()*16},0.95)`,n.fillRect(r,h,l,c);for(let u=h+12;u<1014;u+=16)for(let d=r+8;d<r+l-8;d+=12)Math.random()<.22&&(n.fillStyle=Math.random()<.5?"rgba(255,190,110,.22)":"rgba(120,200,255,.15)",n.fillRect(d,u,5,7));r+=l+6}let a=["255,47,160","255,140,60","60,220,255","170,90,255"];for(let l=0;l<70;l++){let c=12+Math.random()*60,h=Math.random()*1024,u=Math.random()*1024*.9,d=n.createRadialGradient(h,u,0,h,u,c),f=a[l%a.length],p=.04+Math.random()*.09;d.addColorStop(0,`rgba(${f},${p})`),d.addColorStop(1,`rgba(${f},0)`),n.fillStyle=d,n.beginPath(),n.arc(h,u,c,0,Math.PI*2),n.fill()}let o=n.createRadialGradient(1024/2,1024/2,1024*.2,1024/2,1024/2,1024*.75);return o.addColorStop(0,"rgba(0,0,0,0.35)"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,1024,1024),Ce(t)}function dm(s){let n=Re(512,330),i=n.getContext("2d"),r=(c,h,u)=>{for(let[d,f]of[[u*5,.07],[u*2.6,.16],[u*1.4,.5]])i.strokeStyle=`rgba(${h},${f})`,i.lineWidth=d,c(),i.stroke();i.strokeStyle="rgba(255,255,255,.9)",i.lineWidth=u*.45,c(),i.stroke()};i.lineCap="round",i.lineJoin="round";let a=(c,h,u,d,f)=>()=>{i.beginPath(),i.moveTo(c+f,h),i.arcTo(c+u,h,c+u,h+d,f),i.arcTo(c+u,h+d,c,h+d,f),i.arcTo(c,h+d,c,h,f),i.arcTo(c,h,c+u,h,f),i.closePath()},o="255,60,170",l="80,230,255";r(a(46,40,420,250,26),o,7),r(a(110,92,292,104,16),o,5),r(()=>{i.beginPath(),i.moveTo(150,290),i.lineTo(176,236),i.lineTo(336,236),i.lineTo(362,290)},o,5);for(let c of[185,327])r(()=>{i.beginPath(),i.arc(c,144,30,0,Math.PI*2)},l,5),r(()=>{i.beginPath();for(let h=0;h<3;h++){let u=s*Math.PI/3+h*Math.PI*2/3;i.moveTo(c,144),i.lineTo(c+Math.cos(u)*22,144+Math.sin(u)*22)}},l,4);return Ce(n)}function mM(s){let e=new ge,t=ii("#d04bff",st*1.01,.004,.6),n=ii("#ff3fae",st*1.01,.022,.14);e.add(t,n);let i=dm(0),r=dm(1),a=.15,o=new ne(new ve(a,a*330/512),Ee({map:i,blending:Ke,opacity:.75})),l=new ge;l.add(o),e.add(l);let c=null,h=6+Math.random()*8,u=ym(),d=new ge;e.add(d);let f=[];for(let b=0;b<2;b++){let A=Sm(u,"#ffffff");d.add(A),f.push({m:A,on:!1})}let p=2.5,_=new ge;e.add(_);let g=Nn(),m=new ne(new ve(.014,.014),Ee({map:g,color:"#ff3b30",blending:Ke,opacity:0})),M=new ne(new ve(.012,.012),Ee({map:g,color:"#ffffff",blending:Ke,opacity:0}));M.position.x=-.012,_.add(m,M);let w=null,y=9+Math.random()*8,T=null;return{group:e,label:"assets3d/themes/urbansounds/label.jpg",background:pM(),vinyl:"#77727c",armMetal:"#c9ced8",stars:0,nebula:0,dust:0,bloom:.3,ringColor:"#ffd45a",ringBaseColor:"#d6c8e6",ringBase:.11,ringFlash:"#ffd45a",layout(b){T=b;let A=Ei(b);yt(l,b,A.ul[0],A.ul[1],.03,.1),yt(d,b,0,A.bc[1],-.1,-1),d.visible=!0,yt(_,b,0,A.sky,-.1,-1),_.visible=!0},update(b,A){n.material.opacity=.12+Math.sin(A*1.7)*.03,o.material.map=Math.floor(A*1.6)%2?r:i;let x=1;if(!c&&A>h&&(c={t0:A,seq:[.06,.05,.09,.04,.22,.5].map(v=>v*(.7+Math.random()*.6))}),c){let v=A-c.t0,R=0;for(;R<c.seq.length&&v>c.seq[R];)v-=c.seq[R],R++;R>=c.seq.length?(c=null,h=A+7+Math.random()*10):x=R%2?.08:.85}if(o.material.opacity=.7*x*(.96+Math.sin(A*41)*.04),A>p){let v=f.find(R=>!R.on);if(v){let R=Math.random()<.6?1:-1;v.on=!0,v.dir=R,v.x=-1.5*R,v.sp=Ne(1.3,1.9),v.y=Ne(-.02,.02),v.m.rotation.z=R>0?0:Math.PI,v.m.material.color.set(R>0?"#fff1d6":"#ff3b2f")}p=A+Ne(3,8)}for(let v of f){if(!v.on){v.m.material.opacity=0;continue}v.x+=v.dir*v.sp*b/60,v.m.position.set(v.x,v.y,0),v.m.scale.set(.42,.006,1);let R=1-Math.min(1,Math.max(0,Math.abs(v.x)-.9)/.6);v.m.material.opacity=.55*R,Math.abs(v.x)>1.6&&Math.sign(v.x)===v.dir&&(v.on=!1)}if(!w&&A>y){let v=Math.random()<.5?1:-1;w={d:v,x:-1.3*v,y:Ne(-.03,.03)}}if(w){w.x+=w.d*.0018*b,m.position.set(w.x,w.y,0),M.position.set(w.x-.014*w.d,w.y,0);let v=A%1.4;m.material.opacity=v<.5?.75:.12,M.material.opacity=v>.7&&v<.76||v>.86&&v<.92?.9:0,Math.abs(w.x)>1.35&&Math.sign(w.x)===w.d&&(w=null,y=A+20+Math.random()*15,m.material.opacity=M.material.opacity=0)}},dispose(){i.dispose(),r.dispose()}}}function gM(){let e=Re(1024),t=e.getContext("2d"),n=1024/2,i=["120,170,255","170,120,255","90,220,255","255,255,255"];for(let a=0;a<3;a++)for(let o=0;o<1400;o++){let l=Math.random(),c=a*2*Math.PI/3+l*5.2,h=40+l*430,u=(1-l*.5)*38*(Math.random()-.5)*2,d=n+Math.cos(c)*h+u,f=n+Math.sin(c)*h+u,p=Math.random()<.08?10+Math.random()*16:2+Math.random()*6,_=i[Math.floor(Math.random()*i.length)],g=(1-l)*.35+.05,m=t.createRadialGradient(d,f,0,d,f,p);m.addColorStop(0,`rgba(${_},${g})`),m.addColorStop(1,`rgba(${_},0)`),t.fillStyle=m,t.beginPath(),t.arc(d,f,p,0,Math.PI*2),t.fill()}let r=t.createRadialGradient(n,n,0,n,n,120);return r.addColorStop(0,"rgba(200,230,255,.0)"),r.addColorStop(.4,"rgba(160,200,255,.35)"),r.addColorStop(1,"rgba(80,120,255,0)"),t.fillStyle=r,t.beginPath(),t.arc(n,n,120,0,Math.PI*2),t.fill(),Ce(e)}function _M(){let e=Re(1024),t=e.getContext("2d"),n=t.createRadialGradient(1024/2,1024/2,0,1024/2,1024/2,1024*.75);n.addColorStop(0,"#0b1236"),n.addColorStop(.6,"#050a22"),n.addColorStop(1,"#02040f"),t.fillStyle=n,t.fillRect(0,0,1024,1024);for(let i=0;i<14;i++){let r=Math.random()*1024,a=Math.random()*1024,o=80+Math.random()*220,l=i%2?"90,70,200":"40,120,220",c=t.createRadialGradient(r,a,0,r,a,o);c.addColorStop(0,`rgba(${l},.1)`),c.addColorStop(1,`rgba(${l},0)`),t.fillStyle=c,t.beginPath(),t.arc(r,a,o,0,Math.PI*2),t.fill()}for(let i=0;i<900;i++){let r=Math.random();t.fillStyle=`rgba(255,255,255,${r*r})`;let a=Math.random()<.05?1.8:.9;t.fillRect(Math.random()*1024,Math.random()*1024,a,a)}return Ce(e)}function xM(s,e){let i=Re(512,256),r=i.getContext("2d"),a=0,o=0;for(;a<256;){let c=6+Math.random()*22,h=s[o++%s.length];r.fillStyle=h,r.fillRect(0,a,512,c+1),a+=c}for(let c=0;c<260;c++){let h=Math.random()*512,u=Math.random()*256,d=20+Math.random()*90;r.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,r.fillRect(h,u,d,1+Math.random()*2),r.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,r.fillRect(Math.random()*512,Math.random()*256,d,1+Math.random()*2)}if(e){let c=r.createRadialGradient(153.6,158.72,0,153.6,158.72,26);c.addColorStop(0,e),c.addColorStop(1,"rgba(0,0,0,0)"),r.save(),r.scale(1.8,1),r.translate(-512*.3*.44,0),r.fillStyle=c,r.beginPath(),r.arc(512*.3,256*.62,26,0,Math.PI*2),r.fill(),r.restore()}let l=r.createLinearGradient(0,0,0,256);return l.addColorStop(0,"rgba(0,0,0,.35)"),l.addColorStop(.2,"rgba(0,0,0,0)"),l.addColorStop(.8,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,.35)"),r.fillStyle=l,r.fillRect(0,0,512,256),Ce(i,!0)}function yM(){let e=Math.round(317.44),t=Re(512,e),n=t.getContext("2d"),i=512/2,r=e/2,a=e*.3,o=-.32,l=h=>{n.save(),n.translate(i,r),n.rotate(o),n.beginPath(),h?n.ellipse(0,0,a*2.05,a*.52,0,0,Math.PI):n.ellipse(0,0,a*2.05,a*.52,0,Math.PI,Math.PI*2),n.lineWidth=a*.34,n.strokeStyle="#e9cf95",n.stroke(),n.lineWidth=a*.07,n.strokeStyle="rgba(120,80,40,.55)",n.stroke(),n.beginPath(),h?n.ellipse(0,0,a*1.62,a*.4,0,0,Math.PI):n.ellipse(0,0,a*1.62,a*.4,0,Math.PI,Math.PI*2),n.lineWidth=a*.12,n.strokeStyle="#c99e5c",n.stroke(),n.restore()};l(!1),n.save(),n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.clip(),n.fillStyle="#f0d49a",n.fillRect(i-a,r-a,a*2,a*2),n.translate(i,r),n.rotate(o);let c=[[-.62,.16,"#e2b874"],[-.28,.12,"#f6e2b4"],[.02,.2,"#d9a560"],[.36,.1,"#f3dca8"],[.6,.16,"#c98f4e"]];for(let[h,u,d]of c)n.fillStyle=d,n.fillRect(-a*1.2,h*a,a*2.4,u*a);return n.rotate(-o),n.translate(-i,-r),n.fillStyle="rgba(40,20,50,.38)",n.beginPath(),n.arc(i+a*.42,r+a*.36,a*1.05,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.35)",n.beginPath(),n.ellipse(i-a*.42,r-a*.45,a*.2,a*.11,-.6,0,Math.PI*2),n.fill(),n.restore(),n.lineWidth=3,n.strokeStyle="rgba(90,60,40,.7)",n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.stroke(),l(!0),Ce(t)}function SM(s){let e=new ge,t=gM(),n=new Hn(st*.98,96);n.rotateX(-Math.PI/2);let i=new ne(n,new et({map:t,transparent:!0,opacity:.26,depthWrite:!1,blending:Ke}));i.position.y=Zt+7e-4,i.renderOrder=-2,e.add(i);let r=ii("#5ad1ff",st*1.012,.0035,.45);e.add(r);let a=new ge;e.add(a);let o=.085,l=new ne(new ve(o,o*.62),Ee({map:yM(),opacity:.95}));a.add(l);let c=new ge;e.add(c);let h=new ne(new pi(.024,32,20),new Ut({map:xM(["#7fb6ff","#9cc7ff","#6a9ff0","#b5d6ff"]),roughness:.6,metalness:0,emissive:"#10224a",emissiveIntensity:.35}));c.add(h);let u=new ge;u.rotation.x=1.15,u.rotation.z=.3,c.add(u);let d=new ne(new pi(.0055,16,10),new Ut({color:"#d9dde6",roughness:.95,emissive:"#222833",emissiveIntensity:.4}));d.position.x=.05,u.add(d);let f=ym(),p=Nn(),_=new ge;e.add(_);let g=Sm(f,"#cfe6ff");_.add(g);let m=new ne(new ve(.016,.016),Ee({map:p,color:"#ffffff",blending:Ke,opacity:0}));_.add(m);let M=null,w=2+Math.random()*4,y=null,T=b=>{for(let A=0;A<6;A++){let x=Ne(-.9,.9),v=Ne(-.85,y.aspect<.9?.6:.5),R=y.ground(x,v,-.12);if(!R||Math.hypot(R.x,R.z)<st+.1)continue;_.position.set(R.x,-.12,R.z);let L=Math.random()<.5?1:-1;_.rotation.set(-y.tilt,0,L>0?-Ne(.25,.6):Math.PI+Ne(.25,.6)),M={t0:b,dur:Ne(.7,1.1),len:Ne(.14,.22),sp:Ne(.35,.5)};return}};return{group:e,label:"assets3d/themes/cosmicsoundwave/label.jpg",background:_M(),vinyl:"#9fb4ff",armMetal:"#c9ced8",stars:.5,nebula:.08,dust:0,bloom:.3,ringColor:"#6fa6d6",ringBaseColor:"#c8ccd8",ringBase:.1,ringFlash:"#9fd6ff",layout(b){y=b;let A=Ei(b);yt(a,b,A.bl[0],A.bl[1],.05,.1),yt(c,b,A.ul[0],A.ul[1],.05,.08)},update(b,A){if(i.rotation.y-=.0012*b,l.position.y=Math.sin(A*.5)*.003,l.rotation.z=Math.sin(A*.23)*.06,h.rotation.y+=.0025*b,c.children[0].position.y=Math.sin(A*.6+2)*.003,u.rotation.y+=.006*b,!M&&y&&A>w&&T(A),M){let x=(A-M.t0)/M.dur;if(x>=1)M=null,w=A+Ne(4,10),g.material.opacity=m.material.opacity=0;else{let v=x*M.sp,R=Math.sin(Math.PI*Math.min(1,x*1.15));g.position.x=m.position.x=v,g.scale.set(Math.min(M.len,v+.01),.0035,1),g.material.opacity=.75*R,m.material.opacity=.9*R}}}}}function vt(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Gc(s,e,t,n){let i=new Hn(st*.996,128);i.rotateX(-Math.PI/2);let r=new ne(i,new et(Object.assign({map:e,transparent:!0,depthWrite:!1},t)));return r.position.y=Zt+n,r.renderOrder=-2,s.recordSpin.add(r),r}function fm(s,e,t,n,i,r){let a=new zi(st*r,st,128,1);a.rotateX(-Math.PI/2);let o=new ne(a,new et(Object.assign({map:e,transparent:!0,depthWrite:!1},t)));return o.position.y=Zt+n,o.renderOrder=i,s.add(o),o}function MM(){let t=Re(256,200),n=t.getContext("2d");n.strokeStyle="#1c1512",n.lineWidth=9,n.lineCap="round";for(let[a,o]of[[70,40],[128,128],[186,216]])n.beginPath(),n.moveTo(a,92),n.lineTo(o,192),n.stroke();let i=n.createLinearGradient(0,40,0,110);i.addColorStop(0,"#3a2c26"),i.addColorStop(1,"#120c0a"),n.fillStyle=i,n.beginPath(),n.moveTo(28,52),n.quadraticCurveTo(128,150,228,52),n.closePath(),n.fill();let r=n.createRadialGradient(128,50,4,128,50,100);return r.addColorStop(0,"#ffd27a"),r.addColorStop(.35,"#ff6a1a"),r.addColorStop(1,"#5a1004"),n.fillStyle=r,n.beginPath(),n.ellipse(128,52,100,15,0,0,Math.PI*2),n.fill(),n.strokeStyle="#6a4a3a",n.lineWidth=4,n.beginPath(),n.ellipse(128,52,101,16,0,0,Math.PI*2),n.stroke(),Ce(t)}function vM(){let t=Re(128,192),n=t.getContext("2d"),i=n.createLinearGradient(0,192,0,0);return i.addColorStop(0,"rgba(255,240,190,1)"),i.addColorStop(.35,"rgba(255,150,40,.9)"),i.addColorStop(.75,"rgba(220,40,0,.5)"),i.addColorStop(1,"rgba(120,0,0,0)"),n.fillStyle=i,n.beginPath(),n.moveTo(128*.5,0),n.bezierCurveTo(128*.62,192*.3,128*.98,192*.55,128*.82,192*.88),n.quadraticCurveTo(128*.5,192*1.02,128*.18,192*.88),n.bezierCurveTo(128*.02,192*.55,128*.38,192*.3,128*.5,0),n.fill(),Ce(t)}function bM(){let t=Re(512,96),n=t.getContext("2d"),i=vt(99),r=[];for(let a=0;a<=24;a++)r.push([a/24*512,96/2+(i()-.5)*36*Math.sin(a/24*Math.PI)]);for(let[a,o]of[[26,"rgba(255,60,0,.18)"],[11,"rgba(255,110,20,.6)"],[3.5,"rgba(255,230,150,1)"]])n.strokeStyle=o,n.lineWidth=a,n.lineCap="round",n.lineJoin="round",n.beginPath(),r.forEach(([l,c],h)=>{let u=Math.sin(h/24*Math.PI);n.lineWidth=a*(.25+u*.75),h?n.lineTo(l,c):n.moveTo(l,c)}),n.stroke();return Ce(t)}function pm(s){let n=Re(128,64),i=n.getContext("2d");i.fillStyle="#0b0606",i.strokeStyle="rgba(255,90,30,.35)",i.lineWidth=1.5;let r=s?46:10,a=32;return i.beginPath(),i.moveTo(64,a-4),i.quadraticCurveTo(40,r,4,r+(s?-8:12)),i.quadraticCurveTo(20,a+2,30,a+8),i.quadraticCurveTo(40,a+2,48,a+10),i.quadraticCurveTo(56,a+4,64,a+10),i.quadraticCurveTo(72,a+4,80,a+10),i.quadraticCurveTo(88,a+2,98,a+8),i.quadraticCurveTo(108,a+2,124,r+(s?-8:12)),i.quadraticCurveTo(88,r,64,a-4),i.fill(),i.stroke(),i.beginPath(),i.ellipse(64,a+2,7,9,0,0,Math.PI*2),i.fill(),Ce(n)}function TM(){let t=Re(256,320),n=t.getContext("2d"),i=vt(31),r=n.createLinearGradient(0,0,0,320);r.addColorStop(0,"#1d2a3a"),r.addColorStop(1,"#2e3346"),n.fillStyle=r,n.fillRect(16,16,224,288);for(let o=0;o<14;o++){let l=30+i()*196,c=40+i()*(320*.45);n.fillStyle=`rgba(255,${200+i()*40},${120+i()*60},${.25+i()*.4})`,n.fillRect(l,c,3+i()*4,4+i()*5)}let a=n.createRadialGradient(256*.7,320*.85,0,256*.7,320*.85,256*.7);return a.addColorStop(0,"rgba(255,190,120,.25)"),a.addColorStop(1,"rgba(255,190,120,0)"),n.fillStyle=a,n.fillRect(0,0,256,320),n.strokeStyle="#6a4630",n.lineWidth=16,n.strokeRect(8,8,240,304),n.lineWidth=9,n.beginPath(),n.moveTo(256/2,12),n.lineTo(256/2,308),n.moveTo(12,320*.48),n.lineTo(244,320*.48),n.stroke(),n.fillStyle="#7a5238",n.fillRect(0,300,256,20),Ce(t)}function EM(){let t=Re(128,256),n=t.getContext("2d"),i=vt(8);for(let a=0;a<26;a++){let o=i()*128,l=i()*256,c=10+i()*30,h=n.createLinearGradient(0,l-c,0,l);h.addColorStop(0,"rgba(200,230,255,0)"),h.addColorStop(1,"rgba(220,240,255,.7)"),n.strokeStyle=h,n.lineWidth=1.5,n.beginPath(),n.moveTo(o,l-c),n.lineTo(o,l),n.stroke(),n.fillStyle="rgba(230,245,255,.8)",n.beginPath(),n.arc(o,l,1.8,0,Math.PI*2),n.fill()}let r=Ce(t,!0);return r.wrapT=Rn,r}function wM(){let t=Re(256,320),n=t.getContext("2d"),i=(a,o,l,c,h)=>{n.save(),n.translate(a,o),n.rotate(l),n.fillStyle=h,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(c*.9,-c*.3,c*.8,-c*1.2,0,-c*1.35),n.bezierCurveTo(-c*.8,-c*1.2,-c*.9,-c*.3,0,0),n.fill(),n.strokeStyle="rgba(20,40,20,.8)",n.lineWidth=3;for(let u of[.35,.65,.95])n.beginPath(),n.moveTo(c*.75,-c*u),n.lineTo(c*.25,-c*(u+.05)),n.moveTo(-c*.75,-c*u),n.lineTo(-c*.25,-c*(u+.05)),n.stroke();n.beginPath(),n.moveTo(0,0),n.lineTo(0,-c*1.3),n.stroke(),n.restore()};i(128,210,-.9,70,"#3f6a3a"),i(128,210,.85,72,"#4c7a42"),i(128,200,-.25,82,"#5a8a4c"),i(128,205,.3,68,"#46743f");let r=n.createLinearGradient(80,0,176,0);return r.addColorStop(0,"#9a5a3a"),r.addColorStop(.5,"#c27a52"),r.addColorStop(1,"#8a4e30"),n.fillStyle=r,n.beginPath(),n.moveTo(76,210),n.lineTo(180,210),n.lineTo(166,312),n.lineTo(90,312),n.closePath(),n.fill(),n.fillStyle="#b06a46",n.fillRect(70,204,116,16),Ce(t)}function AM(){let t=Re(256,220),n=t.getContext("2d");n.strokeStyle="#e8dccb",n.lineWidth=18,n.beginPath(),n.ellipse(196,120,34,44,0,-1.2,1.2),n.stroke();let i=n.createLinearGradient(40,0,200,0);i.addColorStop(0,"#cfc2b0"),i.addColorStop(.45,"#f6ecdf"),i.addColorStop(1,"#bfb19e"),n.fillStyle=i,n.beginPath(),n.moveTo(40,60),n.lineTo(44,190),n.quadraticCurveTo(122,218,200,190),n.lineTo(204,60),n.closePath(),n.fill(),n.fillStyle="#efe5d6",n.beginPath(),n.ellipse(122,60,82,22,0,0,Math.PI*2),n.fill();let r=n.createRadialGradient(110,56,4,122,60,74);return r.addColorStop(0,"#7a4a2c"),r.addColorStop(1,"#3a2014"),n.fillStyle=r,n.beginPath(),n.ellipse(122,61,72,17,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,240,220,.35)",n.beginPath(),n.ellipse(100,58,20,5,-.2,0,Math.PI*2),n.fill(),n.fillStyle="#e9a0a6",n.beginPath(),n.arc(122,130,13,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(109,132),n.lineTo(122,150),n.lineTo(135,132),n.fill(),Ce(t)}function RM(){let t=Re(64,192),n=t.getContext("2d");for(let i=0;i<3;i++)n.strokeStyle=`rgba(255,255,255,${.1+i*.06})`,n.lineWidth=14-i*4,n.lineCap="round",n.beginPath(),n.moveTo(64/2,192),n.bezierCurveTo(64*.1,192*.7,64*.9,192*.45,64/2,192*.25),n.quadraticCurveTo(64*.2,192*.12,64*.5,0),n.stroke();return Ce(t)}function CM(){let t=Re(256,160),n=t.getContext("2d"),i=n.createRadialGradient(110,80,10,120,92,110);i.addColorStop(0,"#e2a066"),i.addColorStop(1,"#a8622e"),n.fillStyle=i,n.beginPath(),n.ellipse(122,98,92,52,0,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(64,86,40,34,-.2,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(36,66),n.lineTo(40,36),n.lineTo(60,58),n.fill(),n.beginPath(),n.moveTo(70,56),n.lineTo(86,32),n.lineTo(94,62),n.fill(),n.strokeStyle="#a8622e",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(200,120),n.quadraticCurveTo(170,158,100,140),n.stroke(),n.strokeStyle="rgba(110,55,20,.55)",n.lineWidth=6;for(let r of[120,145,170])n.beginPath(),n.moveTo(r,52),n.quadraticCurveTo(r+10,80,r-4,108),n.stroke();return n.strokeStyle="#3a2010",n.lineWidth=3,n.beginPath(),n.arc(52,86,7,.2,Math.PI-.2),n.stroke(),n.beginPath(),n.arc(76,82,7,.2,Math.PI-.2),n.stroke(),n.fillStyle="#e88a8a",n.beginPath(),n.arc(64,98,3.5,0,Math.PI*2),n.fill(),Ce(t)}function PM(){let s=Re(64),e=s.getContext("2d");return e.fillStyle="#ffffff",e.font="bold 46px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillText("z",32,34),Ce(s)}function IM(s){let e=vt(666),t=7,n=s/t,i=[];for(let o=0;o<t;o++)for(let l=0;l<t;l++)i.push([(l+.15+e()*.7)*n,(o+.15+e()*.7)*n,e()]);let r=new Float32Array(s*s),a=new Float32Array(s*s);for(let o=0;o<s;o++){let l=Math.floor(o/n);for(let c=0;c<s;c++){let h=c+Math.sin(o*.021)*9+Math.sin(o*.067)*3,u=o+Math.sin(c*.019)*9+Math.cos(c*.071)*3,d=Math.floor(c/n),f=1e9,p=1e9,_=0;for(let g=l-1;g<=l+1;g++)for(let m=d-1;m<=d+1;m++){if(m<0||g<0||m>=t||g>=t)continue;let M=i[g*t+m],w=h-M[0],y=u-M[1],T=w*w+y*y;T<f?(p=f,f=T,_=M[2]):T<p&&(p=T)}r[o*s+c]=Math.sqrt(p)-Math.sqrt(f),a[o*s+c]=_}}return{edge:r,id:a}}function LM(){let{edge:e,id:t}=IM(512),n=vt(13),i=Re(512),r=Re(512),a=i.getContext("2d"),o=r.getContext("2d"),l=a.createImageData(512,512),c=o.createImageData(512,512);for(let h=0;h<512;h++)for(let u=0;u<512;u++){let d=h*512+u,f=e[d],p=Math.hypot(u-512/2,h-512/2)/(512/2),_=p<.27,g=_?0:Math.max(0,1-f/2.6),m=_?0:Math.max(0,1-f/9),M=n()*18,w=38+t[d]*30+M-Math.min(1,p)*14;w*=1-Math.max(0,1-f/5)*.75,l.data[d*4]=w+m*55,l.data[d*4+1]=w*.92+m*8,l.data[d*4+2]=w*.88,l.data[d*4+3]=255;let y=Math.min(1,g*1.1+m*.35);c.data[d*4]=255,c.data[d*4+1]=70+g*170,c.data[d*4+2]=10+g*g*110,c.data[d*4+3]=y*255}return a.putImageData(l,0,0),o.putImageData(c,0,0),{rock:Ce(i),lava:Ce(r)}}function mm(){let t=Re(512,128),n=t.getContext("2d"),i=vt(7);for(let r=0;r<70;r++){let a=i()*512,o=128*(.35+i()*.6),l=10+i()*26;for(let c of[-512,0,512]){let h=n.createLinearGradient(0,0,0,o);h.addColorStop(0,"rgba(255,200,90,.9)"),h.addColorStop(.35,"rgba(255,110,20,.6)"),h.addColorStop(1,"rgba(200,30,0,0)"),n.fillStyle=h,n.beginPath(),n.moveTo(a+c-l,0),n.quadraticCurveTo(a+c-l*.4,o*.6,a+c+(i()-.5)*l,o),n.quadraticCurveTo(a+c+l*.4,o*.6,a+c+l,0),n.closePath(),n.fill()}}return Ce(t,!0)}function NM(){let t=Re(64,256),n=t.getContext("2d"),i=n.createLinearGradient(0,0,64,0);i.addColorStop(0,"#2a140a"),i.addColorStop(.45,"#8a4a26"),i.addColorStop(.55,"#c27a44"),i.addColorStop(1,"#1e0f08"),n.fillStyle=i,n.beginPath(),n.moveTo(64*.1,256),n.lineTo(64/2,0),n.lineTo(64*.9,256),n.closePath(),n.fill();let r=n.createLinearGradient(0,0,0,256);return r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(.75,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(255,90,20,.55)"),n.fillStyle=r,n.beginPath(),n.moveTo(64*.1,256),n.lineTo(64/2,0),n.lineTo(64*.9,256),n.closePath(),n.fill(),Ce(t)}function gm(s){let n=Re(512,128),i=n.getContext("2d"),r=vt(s),a=(c,h,u,d,f)=>{let p=[[c,h]];for(let _=1;_<=d;_++)p.push([c+(u-c)*_/d,h+(r()-.5)*f]);return p},o=a(0,128/2,512,22,46),l=a(o[9][0],o[9][1],o[9][0]+150,8,40).map(([c,h],u)=>[c,h+u*4]);for(let[c,h]of[[14,"rgba(90,150,255,.18)"],[6,"rgba(150,200,255,.5)"],[2.2,"rgba(255,255,255,1)"]]){i.strokeStyle=h,i.lineCap="round",i.lineJoin="round";for(let[u,d]of[[o,1],[l,.6]])i.lineWidth=c*d,i.beginPath(),u.forEach(([f,p],_)=>_?i.lineTo(f,p):i.moveTo(f,p)),i.stroke()}return Ce(n)}function DM(){let e=Re(1024),t=e.getContext("2d"),n=vt(21),i=t.createRadialGradient(1024/2,1024*.55,0,1024/2,1024*.55,1024*.7);i.addColorStop(0,"#4a0f05"),i.addColorStop(.45,"#1c0604"),i.addColorStop(1,"#060202"),t.fillStyle=i,t.fillRect(0,0,1024,1024);for(let r=0;r<26;r++){let a=n()*1024,o=n()*1024,l=80+n()*220,c=t.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,`rgba(${30+n()*30},${12+n()*10},10,${.25})`),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}for(let r=0;r<260;r++){let a=n()*1024,o=n()*1024,l=n()<.1?3:1.5;t.fillStyle=`rgba(255,${120+n()*100},40,${.25+n()*.6})`,t.fillRect(a,o,l,l)}return Ce(e)}function UM(s){let e=new ge,t=LM(),n=Gc(s,t.rock,{opacity:1},3e-4),i=Gc(s,t.lava,{blending:Ke,opacity:.9},6e-4),r=mm(),a=mm();r.flipY=a.flipY=!1,a.repeat.x=-1;let o=new ne(Ss(st*1.075,st*.17,200,5,Zt-.001),Ee({map:r,blending:Ke,opacity:.8})),l=new ne(Ss(st*1.06,st*.13,200,4,Zt-8e-4),Ee({map:a,blending:Ke,opacity:.55}));e.add(o,l,ii("#ff4a12",st*1.004,.005,.7)),o.renderOrder=l.renderOrder=-1;let c=Nn(),h=Mm(Ee({map:NM(),opacity:1}),20,.08,st*.97,G=>G%2===0?[.034,.2]:[.026,.13]);s.recordSpin.add(h);let u=new ge;e.add(u);let d=46,f=new Cn(new ve(1,1),Ee({map:c,blending:Ke,opacity:1}),d);f.frustumCulled=!1,u.add(f);let p=Array.from({length:d},()=>({x:Ne(-1.3,1.3),y:Ne(-1.7,1.7),s:Ne(.006,.016),sp:Ne(.6,1.4),ph:Ne(0,9)})),_=new ke,g=new Tt,m=new P,M=new P,w=new le,y=new le("#ff7a2a"),T=vM(),b=MM(),A=Nn(),x=[0,1].map(G=>{let te=new ge;e.add(te);let oe=.085,re=oe*200/256,$=re*.24,Pe=new ne(new ve(.2,.2),Ee({map:A,color:"#ff6a1a",blending:Ke,opacity:.35}));Pe.position.set(0,$+.02,-.001);let Y=new ne(new ve(oe,re),Ee({map:b})),J=[0,1].map(Se=>{let Ge=new ve(Se?.034:.05,Se?.055:.078);Ge.translate(0,Se?.0275:.039,0);let be=new ne(Ge,Ee({map:T,blending:Ke,opacity:Se?1:.85}));return be.position.set(Se?.004:-.002,$,.001+Se*5e-4),be});return te.add(Pe,Y,...J),te.scale.setScalar(1.2),{o:te,fl:J,glow:Pe,ph:G*1.7}}),v=new ne(new ve(.5,.094),Ee({map:bM(),blending:Ke,opacity:.7})),R=new ge;R.add(v),e.add(R);let L=pm(0),N=pm(1),U=new ge;e.add(U);let C=[0,1,2].map(()=>{let G=new ne(new ve(.045,.0225),Ee({map:L,opacity:0}));return U.add(G),{m:G,on:!1}}),D=4,O=[gm(3),gm(11)].map(G=>{let te=new ne(new ve(1,.25),Ee({map:G,blending:Ke,opacity:0,depthTest:!1}));return te.rotation.x=-Math.PI/2,te.renderOrder=5,e.add(te),{m:te,t:-1}}),k=0,K=0,X=6,j=G=>{let te=O.find($=>$.t<0)||O[0],oe=Math.random()*Math.PI*2,re=Ne(.5,.8);te.m.scale.set(re,1,Ne(.8,1.2)),te.m.position.set(Math.cos(oe)*Ne(.05,.2),Zt+.03,Math.sin(oe)*Ne(.05,.2)),te.m.rotation.z=Ne(0,Math.PI*2),te.t=G};return{group:e,label:"assets3d/themes/hellsanthem/label.jpg",background:DM(),vinyl:"#2a2522",armMetal:"#6a5c55",stars:0,nebula:0,dust:0,sheen:.03,bloom:.55,ringColor:"#ffb066",ringBaseColor:"#e0a272",ringBase:.22,ringFlash:"#ff6a1a",layout(G){let te=Ei(G);u.position.set(0,-.12,0),u.rotation.set(-Math.PI/2,0,0),yt(x[0].o,G,te.bl[0],te.bl[1],.03,.08),yt(x[1].o,G,te.br[0],te.br[1],.03,.08),yt(R,G,0,te.bc[1],-.02,.06),yt(U,G,0,te.sky,-.1,-1),U.visible=!0},onNote(){K=1,k++,k%5===0&&(X=0)},update(G,te,oe){K=Math.max(0,K-.03*G),i.material.opacity=.7+.2*Math.sin(te*2.2)+K*.3,r.offset.x=te*.03%1,a.offset.x=-te*.045%1,o.material.opacity=.72+Math.sin(te*9)*.06+Math.sin(te*23)*.04;for(let re=0;re<d;re++){let $=p[re];$.y+=.0012*$.sp*G,$.x+=Math.sin(te*.8*$.sp+$.ph)*4e-4*G,$.y>1.75&&($.y=-1.75,$.x=Ne(-1.3,1.3)),M.set($.x,$.y,.01),m.set($.s,$.s,1),_.compose(M,g,m),f.setMatrixAt(re,_),f.setColorAt(re,w.copy(y).multiplyScalar(.5+.5*Math.sin(te*4*$.sp+$.ph)))}f.instanceMatrix.needsUpdate=!0,f.instanceColor.needsUpdate=!0,oe.inGame&&te>X&&(j(te),X=te+Ne(7,14));for(let re of x){let $=te*1+re.ph;re.fl[0].scale.set(1+Math.sin($*11)*.07,1+Math.sin($*13.7)*.12+Math.sin($*5.3)*.08,1),re.fl[1].scale.set(1+Math.sin($*17)*.1,1+Math.sin($*19.3)*.16,1),re.fl[0].rotation.z=Math.sin($*3.1)*.06,re.fl[1].rotation.z=Math.sin($*4.7)*.09,re.glow.material.opacity=.3+Math.sin($*9)*.06+K*.15}if(v.material.opacity=.55+Math.sin(te*1.7)*.2+K*.25,te>D&&C.every(re=>!re.on)){let re=Math.random()<.5?1:-1;C.forEach(($,Pe)=>{$.on=!0,$.d=re,$.x=-1.3*re-Pe*.09*re,$.y=Ne(-.05,.05),$.ph=Ne(0,6),$.sp=Ne(.9,1.15),$.m.scale.x=re}),D=te+Ne(12,22)}for(let re of C){if(!re.on){re.m.material.opacity=0;continue}re.x+=re.d*.0042*re.sp*G,re.m.position.set(re.x,re.y+Math.sin(te*3+re.ph)*.012,0),re.m.material.map=Math.floor(te*9+re.ph)%2?N:L,re.m.material.opacity=.9,Math.abs(re.x)>1.4&&Math.sign(re.x)===re.d&&(re.on=!1)}for(let re of O){if(re.t<0)continue;let $=te-re.t;if($>.38){re.t=-1,re.m.material.opacity=0;continue}re.m.material.opacity=($<.06||$>.12&&$<.2?1:.25)*(1-$/.38)}},dispose(){L.dispose(),N.dispose();for(let G of[n,i,h])s.recordSpin.remove(G),G.traverse(te=>{te.geometry&&te.geometry.dispose(),te.material&&(te.material.map&&te.material.map.dispose(),te.material.dispose())})}}}function FM(){let e=Re(1024),t=e.getContext("2d"),n=vt(42),i=1024/2,r=t.createLinearGradient(0,0,1024,1024*.7);r.addColorStop(0,"#b97f86"),r.addColorStop(.5,"#9d8fae"),r.addColorStop(1,"#78aaa6"),t.fillStyle=r,t.fillRect(0,0,1024,1024);for(let l=0;l<9e3;l++){let c=n()<.5?255:0;t.fillStyle=`rgba(${c},${c},${c},${.03+n()*.04})`,t.fillRect(n()*1024,n()*1024,2,2)}for(let l=i*.98;l>i*.3;l-=4+n()*6)t.strokeStyle=`rgba(255,255,255,${.03+n()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(i,i,l,0,Math.PI*2),t.stroke();let a=(l,c,h)=>{for(let d=0;d<3;d++){t.strokeStyle=`rgba(110,62,36,${.18+n()*.12})`,t.lineWidth=5+n()*7,t.beginPath();for(let f=0;f<=40;f++){let p=f/40*Math.PI*2,_=h*(.92+n()*.16)+d*3,g=l+Math.cos(p)*_,m=c+Math.sin(p)*_;f?t.lineTo(g,m):t.moveTo(g,m)}t.stroke()}let u=t.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(120,70,40,.05)"),u.addColorStop(1,"rgba(120,70,40,.16)"),t.fillStyle=u,t.beginPath(),t.arc(l,c,h,0,Math.PI*2),t.fill()};a(i+260,i-330,62),a(i-300,i+280,74),a(i-340,i-60,48),a(i+210,i+330,34);for(let l=0;l<80;l++){let c=n()*Math.PI*2,h=i*(.32+n()*.62),u=i+Math.cos(c)*h,d=i+Math.sin(c)*h,f=4+n()*5;t.fillStyle="rgba(40,70,80,.25)",t.beginPath(),t.ellipse(u+1.5,d+2,f*.7,f,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(190,240,235,.55)",t.beginPath(),t.ellipse(u,d,f*.6,f*.9,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,.8)",t.fillRect(u-f*.25,d-f*.5,1.6,2.4)}let o=t.createRadialGradient(i,i,i*.5,i,i,i);return o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(40,20,30,.35)"),t.fillStyle=o,t.fillRect(0,0,1024,1024),Ce(e)}function OM(){let e=Re(1024),t=e.getContext("2d"),n=vt(17),i=t.createRadialGradient(1024*.5,1024*.42,0,1024*.5,1024*.5,1024*.72);i.addColorStop(0,"#4a3329"),i.addColorStop(.55,"#2a1c17"),i.addColorStop(1,"#120b09"),t.fillStyle=i,t.fillRect(0,0,1024,1024);for(let r=0;r<18;r++){let a=n()*1024,o=n()*1024,l=30+n()*90,c=n()<.5?"255,190,140":"160,220,210",h=t.createRadialGradient(a,o,0,a,o,l);h.addColorStop(0,`rgba(${c},.07)`),h.addColorStop(1,`rgba(${c},0)`),t.fillStyle=h,t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}return Ce(e)}function BM(){let s=Re(8,128),e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,128);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(1,"rgba(255,255,255,1)"),e.fillStyle=t,e.fillRect(3,0,2,128),Ce(s)}function HM(s){let e=new ge,t=Gc(s,FM(),{opacity:1},3e-4),n=.27,i=n*600/512,r=new ve(n,i);r.rotateX(-Math.PI/2);let a=new et({color:"#ece4da",transparent:!0,depthWrite:!1}),o=new ne(r,a);o.position.y=Zt+.0022,o.rotation.y=.2,o.renderOrder=-1;let l=new ve(n*1.08,i*1.06);l.rotateX(-Math.PI/2);let c=new ne(l,new et({map:Nn(),color:"#000000",transparent:!0,opacity:.45,depthWrite:!1}));c.position.set(.006,Zt+.0018,.008),c.rotation.y=.2,c.renderOrder=-1,s.recordSpin.add(c,o),lo("assets3d/themes/lofichillhop/polaroid.jpg").then($=>{$&&o.parent&&(a.map=$,a.needsUpdate=!0)}),e.add(ii("#f2c6b4",st*1.006,.004,.35));let h=new ge;e.add(h);let u=40,d=new Cn(new ve(1,1),Ee({map:BM(),color:"#bfe6e2",blending:Ke,opacity:.22}),u);d.frustumCulled=!1,h.add(d);let f=Array.from({length:u},()=>({x:Ne(-1.4,1.4),y:Ne(-1.8,1.8),sp:Ne(.9,1.5),l:Ne(.05,.11)})),p=new ke,_=new Tt().setFromAxisAngle(new P(0,0,1),.12),g=new P,m=new P,M=0,w=new ge;e.add(w),w.scale.setScalar(1.2);let y=.12,T=y*320/256;w.add(new ne(new ve(y,T),Ee({map:TM()})));let b=EM(),A=new ne(new ve(y*.86,T*.8),Ee({map:b,opacity:.75}));A.position.set(0,.004,5e-4),w.add(A);let x=new ge;e.add(x),x.scale.setScalar(1.3);let v=.1,R=v*320/256,L=new ve(v,R);L.translate(0,R/2,0);let N=new ne(L,Ee({map:wM()}));N.position.y=-R/2,x.add(N);let U=new ge;e.add(U),U.scale.setScalar(1.3);let C=.085,D=C*220/256;U.add(new ne(new ve(C,D),Ee({map:AM()})));let O=RM(),k=[0,1,2].map($=>{let Pe=new ve(.02,.06);Pe.translate(0,.03,0);let Y=new ne(Pe,Ee({map:O,opacity:0}));return Y.position.set(($-1)*.012-.004,D*.22,.001),U.add(Y),{m:Y,ph:$/3}}),K=new ge;e.add(K),K.scale.setScalar(1.35);let X=.11,j=X*160/256,G=new ve(X,j);G.translate(0,j/2,0);let te=new ne(G,Ee({map:CM()}));te.position.y=-j/2,K.add(te);let oe=PM(),re=[0,1].map($=>{let Pe=new ne(new ve(.016,.016),Ee({map:oe,color:"#fff3ea",opacity:0}));return K.add(Pe),{m:Pe,ph:$*.5}});return{group:e,label:"assets3d/themes/lofichillhop/label.jpg",background:OM(),vinyl:"#9d8fae",armMetal:"#c9a46a",stars:0,nebula:0,dust:.15,sheen:.08,bloom:.25,noSpindle:!0,ringColor:"#8fe3d8",ringBaseColor:"#fff3ea",ringBase:.2,ringFlash:"#5fe8d6",layout($){let Pe=Ei($);h.position.set(0,-.12,0),h.rotation.set(-Math.PI/2,0,0),yt(w,$,Pe.ul[0],Pe.ul[1],.03,.08),yt(x,$,Pe.bl[0],Pe.bl[1],.03,.08),yt(U,$,Pe.br[0],Pe.br[1],.03,.08),yt(K,$,0,Pe.bc[1],.02,.06)},onNote(){M=1},update($,Pe){b.offset.y=-Pe*.05%1,N.rotation.z=Math.sin(Pe*.55)*.035+Math.sin(Pe*1.3)*.01;for(let Y of k){let J=(Pe*.32+Y.ph)%1;Y.m.position.y=D*.22+J*.03,Y.m.scale.set(1+J*.6,1+J*.3,1),Y.m.material.opacity=Math.sin(Math.PI*J)*.5}te.scale.y=1+Math.sin(Pe*1.7)*.025;for(let Y of re){let J=(Pe*.22+Y.ph)%1;Y.m.position.set(-X*.3+J*.02,j*.1+J*.05,.001),Y.m.scale.setScalar(.6+J*.8),Y.m.material.opacity=Math.sin(Math.PI*J)*.7}M=Math.max(0,M-.04*$),a.color.setScalar(.92+M*.08);for(let Y=0;Y<u;Y++){let J=f[Y];J.y-=.006*J.sp*$,J.x-=7e-4*J.sp*$,J.y<-1.85&&(J.y=1.85,J.x=Ne(-1.4,1.4)),m.set(J.x,J.y,.01),g.set(.0035,J.l,1),p.compose(m,_,g),d.setMatrixAt(Y,p)}d.instanceMatrix.needsUpdate=!0},dispose(){for(let $ of[t,o,c])s.recordSpin.remove($),$.geometry.dispose(),$.material.map&&$.material.map.dispose(),$.material.dispose()}}}function Vc(s){let e=new ge;return s.recordSpin.add(e),e}function $r(s,e,t,n,i){let r=Gc(e,t,n,i);return s.add(r),r}function Wc(s,e){s.recordSpin.remove(e),e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())})}function kM(s,e,t,n,i,r,a){let o=new ve(e,t);o.rotateX(-Math.PI/2);let l=new ne(o,n);return l.position.set(Math.cos(i)*r,Zt+a,Math.sin(i)*r),l.renderOrder=-1,s.add(l),l}function Mm(s,e,t,n,i){let r=[];for(let o=0;o<e;o++){let[l,c]=i(o),h=o/e*Math.PI*2+t,u=new ve(l,c);u.translate(0,c/2,0),u.rotateX(-Math.PI/2),u.rotateY(-h-Math.PI/2),u.translate(Math.cos(h)*n,Zt-.004,Math.sin(h)*n),r.push(u)}let a=new ne(Fc(r),s);return r.forEach(o=>o.dispose()),a.renderOrder=-1,a}function vm(s,e,t,n){let i=new ve(t,t);i.rotateX(-Math.PI/2);let r=new Cn(i,n,e);r.frustumCulled=!1,r.renderOrder=-1;let a=new le(0,0,0);for(let o=0;o<e;o++)r.setColorAt(o,a);return s.add(r),r}function Xc(s,e,t){let n=new ge;s.add(n);let i=new Cn(new ve(1,1),t,e);return i.frustumCulled=!1,n.add(i),{air:n,mesh:i}}function zM(){let s=Re(64),e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.3)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),e.fillStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(32,0),e.quadraticCurveTo(34,30,64,32),e.quadraticCurveTo(34,34,32,64),e.quadraticCurveTo(30,34,0,32),e.quadraticCurveTo(30,30,32,0),e.fill(),Ce(s)}function Md(s,e,t,n){s.beginPath(),s.moveTo(0,-t),s.lineTo(0,t),e===0?(s.moveTo(0,-t),s.lineTo(n,-t*.4),s.moveTo(0,-t*.2),s.lineTo(n,t*.3)):e===1?(s.moveTo(-n,-t*.5),s.lineTo(n,t*.5)):e===2?(s.moveTo(-n,-t*.7),s.lineTo(0,-t*.2),s.lineTo(n,-t*.7)):e===3?(s.moveTo(0,-t),s.lineTo(n,-t*.5),s.lineTo(0,0)):e===4?(s.moveTo(0,-t*.4),s.lineTo(n,-t),s.moveTo(0,t*.1),s.lineTo(n,-t*.5)):(s.moveTo(0,t*.2),s.lineTo(n,-t*.2),s.lineTo(n,t)),s.stroke()}function bm(s,e,t,n,i,r){s.lineCap="round",s.lineJoin="round",s.lineWidth=i*.14;for(let a=0;a<n;a++){let o=a/n*Math.PI*2,l=Math.floor(r()*6);s.save(),s.translate(e+Math.cos(o)*t,e+Math.sin(o)*t),s.rotate(o+Math.PI/2),Md(s,l,i/2,i*.32),s.restore()}}function GM(){let e=Re(1024),t=e.getContext("2d"),n=vt(61),i=1024/2,r=t.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"#1d3266"),r.addColorStop(.6,"#101e45"),r.addColorStop(1,"#080e26"),t.fillStyle=r,t.fillRect(0,0,1024,1024);for(let a=i*.85;a>i*.3;a-=3+n()*5)t.strokeStyle=`rgba(160,205,255,${.03+n()*.05})`,t.lineWidth=1,t.beginPath(),t.arc(i,i,a,0,Math.PI*2),t.stroke();for(let a=0;a<1600;a++){let o=n()*Math.PI*2,l=i*Math.sqrt(n())*.86;t.fillStyle=`rgba(210,240,255,${.04+n()*.14})`,t.fillRect(i+Math.cos(o)*l,i+Math.sin(o)*l,1.6,1.6)}return Ce(e)}function VM(){let e=Re(1024),t=e.getContext("2d"),n=1024/2;t.strokeStyle="#24170b",t.lineWidth=n*.12,t.beginPath(),t.arc(n,n,n*.93,0,Math.PI*2),t.stroke(),t.strokeStyle="#d98a2e";for(let[i,r]of[[n*.872,3],[n*.988,5]])t.lineWidth=r,t.beginPath(),t.arc(n,n,i,0,Math.PI*2),t.stroke();return t.strokeStyle="#a8682a",bm(t,n,n*.93,40,n*.075,vt(77)),Ce(e)}function WM(){let e=Re(1024),t=e.getContext("2d"),n=1024/2;return t.shadowColor="#ffa030",t.shadowBlur=14,t.strokeStyle="#ffd08a",bm(t,n,n*.93,40,n*.075,vt(77)),Ce(e)}function XM(){let e=Re(1024),t=e.getContext("2d"),n=vt(5),i=1024/2,r=12;for(let a=0;a<r;a++){let o=a/r*Math.PI*2+(n()-.5)*.18,l=i*(a%2?.32+n()*.12:.48+n()*.12),c=i*(a%2?.045:.06),h=i*.28,u=h+l,d=c*1.8;t.save(),t.translate(i,i),t.rotate(o);let f=()=>{t.beginPath(),t.moveTo(h,-c),t.lineTo(u-d,-c),t.lineTo(u,0),t.lineTo(u-d,c),t.lineTo(h,c),t.closePath()},p=t.createLinearGradient(h,0,u,0);p.addColorStop(0,"rgba(70,170,230,.28)"),p.addColorStop(.7,"rgba(130,230,255,.38)"),p.addColorStop(1,"rgba(225,255,255,.6)"),t.fillStyle=p,f(),t.fill(),t.fillStyle="rgba(235,255,255,.15)",t.beginPath(),t.moveTo(h,-c),t.lineTo(u-d,-c),t.lineTo(u,0),t.lineTo(h,0),t.closePath(),t.fill(),t.strokeStyle="rgba(205,250,255,.75)",t.lineWidth=2.5,f(),t.stroke(),t.strokeStyle="rgba(255,255,255,.4)",t.lineWidth=1.2,t.beginPath(),t.moveTo(h,0),t.lineTo(u,0),t.stroke(),t.restore()}return Ce(e)}function qM(){let t=Re(64,256),n=t.getContext("2d"),i=n.createLinearGradient(0,0,64,0);return i.addColorStop(0,"rgba(60,150,220,.8)"),i.addColorStop(.45,"rgba(170,240,255,.92)"),i.addColorStop(.55,"rgba(235,255,255,.96)"),i.addColorStop(1,"rgba(50,130,210,.8)"),n.fillStyle=i,n.beginPath(),n.moveTo(64*.14,256),n.lineTo(64*.14,256*.3),n.lineTo(64/2,0),n.lineTo(64*.86,256*.3),n.lineTo(64*.86,256),n.closePath(),n.fill(),n.strokeStyle="rgba(255,255,255,.85)",n.lineWidth=2,n.stroke(),n.strokeStyle="rgba(255,255,255,.5)",n.beginPath(),n.moveTo(64/2,2),n.lineTo(64/2,256),n.stroke(),Ce(t)}function YM(){let e=Re(1024),t=e.getContext("2d"),n=vt(33),i=t.createRadialGradient(1024/2,1024*.5,0,1024/2,1024*.5,1024*.72);i.addColorStop(0,"#143a62"),i.addColorStop(.5,"#0a1d38"),i.addColorStop(1,"#03070f"),t.fillStyle=i,t.fillRect(0,0,1024,1024),t.globalCompositeOperation="lighter";for(let r=0;r<3;r++){let a=1024*(.1+r*.075),o=r===1?"120,140,255":"80,255,200";for(let l=96;l>8;l-=12){t.strokeStyle=`rgba(${o},0.02)`,t.lineWidth=l,t.beginPath();for(let c=-20;c<=1044;c+=16){let h=a+Math.sin(c*.006+r*2)*1024*.04+Math.sin(c*.017+r)*1024*.012;c===-20?t.moveTo(c,h):t.lineTo(c,h)}t.stroke()}}for(let r=0;r<320;r++){let a=n()<.08?2.5:1.2;t.fillStyle=`rgba(200,235,255,${.2+n()*.6})`,t.fillRect(n()*1024,n()*1024,a,a)}return t.globalCompositeOperation="source-over",Ce(e)}function KM(s){let n=Re(256,256),i=n.getContext("2d"),r=vt(s);i.fillStyle="#1a2436",i.beginPath(),i.ellipse(256/2,256*.88,256*.42,256*.09,0,0,Math.PI*2),i.fill(),i.fillStyle="#2e3c56",i.beginPath(),i.ellipse(256/2,256*.855,256*.34,256*.06,0,0,Math.PI*2),i.fill();let a=[[-.6,.5,.1],[.62,.46,.1],[-.28,.78,.13],[.3,.7,.12],[0,.95,.16]];for(let[o,l,c]of a){i.save(),i.translate(256/2+o*256*.32,256*.86),i.rotate(o*.55);let h=l*256*.76*(.92+r()*.16),u=c*256*.5,d=u*1.7,f=i.createLinearGradient(-u,0,u,0);f.addColorStop(0,"#2a7fc0"),f.addColorStop(.48,"#9cf0ff"),f.addColorStop(.55,"#eaffff"),f.addColorStop(1,"#3a9ad6"),i.fillStyle=f,i.beginPath(),i.moveTo(-u,0),i.lineTo(-u,-h+d),i.lineTo(0,-h),i.lineTo(u,-h+d),i.lineTo(u,0),i.closePath(),i.fill(),i.strokeStyle="rgba(255,255,255,.75)",i.lineWidth=2,i.stroke(),i.fillStyle="rgba(255,255,255,.22)",i.beginPath(),i.moveTo(-u,-h+d),i.lineTo(0,-h),i.lineTo(0,0),i.lineTo(-u,0),i.closePath(),i.fill(),i.restore()}return Ce(n)}function ZM(s,e,t){s.beginPath(),s.moveTo(e*.2,t*.06),s.lineTo(e*.78,t*.02),s.lineTo(e*.94,t*.3),s.lineTo(e*.88,t*.94),s.lineTo(e*.14,t*.98),s.lineTo(e*.05,t*.4),s.closePath()}function JM(){let t=Re(192,256),n=t.getContext("2d"),i=n.createLinearGradient(0,0,192,256);return i.addColorStop(0,"#64707f"),i.addColorStop(1,"#262c38"),n.fillStyle=i,ZM(n,192,256),n.fill(),n.strokeStyle="rgba(0,0,0,.5)",n.lineWidth=4,n.stroke(),n.fillStyle="rgba(225,245,255,.55)",n.beginPath(),n.moveTo(192*.2,256*.06),n.lineTo(192*.78,256*.02),n.lineTo(192*.86,256*.15),n.quadraticCurveTo(192*.5,256*.21,192*.11,256*.22),n.closePath(),n.fill(),n.strokeStyle="#1a1410",n.lineCap="round",n.lineJoin="round",n.lineWidth=16,n.save(),n.translate(192/2,256*.57),Md(n,0,256*.27,192*.24),n.restore(),Ce(t)}function $M(){let t=Re(192,256),n=t.getContext("2d");return n.strokeStyle="#ffc070",n.shadowColor="#ff8a20",n.shadowBlur=18,n.lineCap="round",n.lineJoin="round",n.lineWidth=9,n.save(),n.translate(192/2,256*.57),Md(n,0,256*.27,192*.24),n.restore(),Ce(t)}function jM(s){let e=new ge,t=Vc(s);$r(t,s,GM(),{opacity:1},3e-4),$r(t,s,XM(),{opacity:.95},6e-4),fm(e,VM(),{opacity:1},8e-4,-1.8,.84);let n=fm(e,WM(),{blending:Ke,opacity:.5},9e-4,-1.7,.84);e.add(Mm(Ee({map:qM(),opacity:.92}),12,.26,st*.95,L=>L%2===0?[.03,.14]:[.022,.09]));let i=vt(9),r=new le("#e2fbff"),a=new P(0,1,0),o=vm(t,14,.032,Ee({map:zM(),blending:Ke})),l=Array.from({length:14},()=>{let L=i()*Math.PI*2,N=st*(.32+i()*.55);return{x:Math.cos(L)*N,z:Math.sin(L)*N,ph:i()*10,sp:.5+i()*.8}});e.add(ii("#ffa640",st*1.004,.005,.55));let c=44,{air:h,mesh:u}=Xc(e,c,Ee({map:Nn(),color:"#dff4ff",blending:Ke,opacity:.8})),d=Array.from({length:c},()=>({x:Ne(-1.4,1.4),y:Ne(-1.8,1.8),s:Ne(.008,.02),sp:Ne(.5,1.1),ph:Ne(0,9)})),f=new ke,p=new Tt,_=new P,g=new P,m=new le,M=Nn(),w=[11,23].map((L,N)=>{let U=new ge;e.add(U);let C=new ne(new ve(.22,.22),Ee({map:M,color:"#4fd8ff",blending:Ke,opacity:.3}));C.position.set(0,.015,-.001);let D=new ne(new ve(.13,.13),Ee({map:KM(L)}));return N&&(D.scale.x=-1),U.add(C,D),U.scale.setScalar(1.25),{o:U,glow:C,ph:N*2.1}}),y=new ge,T=new ge;e.add(y),y.add(T),y.scale.setScalar(1.3);let b=.072,A=b*256/192,x=new ne(new ve(.17,.17),Ee({map:M,color:"#ff9a3a",blending:Ke,opacity:.2}));x.position.z=-.001;let v=new ne(new ve(b,A),Ee({map:$M(),blending:Ke,opacity:.6}));v.position.z=5e-4,T.add(x,new ne(new ve(b,A),Ee({map:JM()})),v);let R=0;return{group:e,label:"assets3d/themes/crystalrune/label.jpg",background:YM(),vinyl:"#3a4f8a",armMetal:"#d9b37a",stars:.35,nebula:.05,dust:0,sheen:.1,bloom:.4,ringColor:"#9fe8ff",ringBaseColor:"#cfeeff",ringBase:.18,ringFlash:"#7ff3ff",layout(L){let N=Ei(L);h.position.set(0,-.12,0),h.rotation.set(-Math.PI/2,0,0),yt(w[0].o,L,N.bl[0],N.bl[1],.03,.08),yt(w[1].o,L,N.br[0],N.br[1],.03,.08),yt(y,L,N.ul[0],N.ul[1],.03,.08)},onNote(){R=1},update(L,N){R=Math.max(0,R-.035*L),n.material.opacity=.4+Math.sin(N*1.4)*.12+R*.45,l.forEach((U,C)=>{let D=Math.pow(Math.max(0,Math.sin(N*U.sp*2+U.ph)),8);g.set(U.x,Zt+.003,U.z),p.setFromAxisAngle(a,N*.6+U.ph),_.setScalar(.5+D*.7),f.compose(g,p,_),o.setMatrixAt(C,f),o.setColorAt(C,m.copy(r).multiplyScalar(D*.95))}),o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,p.identity();for(let U of w)U.glow.material.opacity=.24+Math.sin(N*1.3+U.ph)*.08+R*.25;T.position.y=Math.sin(N*.9)*.006,T.rotation.z=Math.sin(N*.6)*.05,v.material.opacity=.45+Math.sin(N*2)*.15+R*.4,x.material.opacity=.14+R*.25;for(let U=0;U<c;U++){let C=d[U];C.y-=9e-4*C.sp*L,C.x+=Math.sin(N*.7*C.sp+C.ph)*5e-4*L,C.y<-1.85&&(C.y=1.85,C.x=Ne(-1.4,1.4)),g.set(C.x,C.y,.01),_.set(C.s,C.s,1),f.compose(g,p,_),u.setMatrixAt(U,f)}u.instanceMatrix.needsUpdate=!0},dispose(){Wc(s,t)}}}function vd(s,e,t,n,i,r){let a=n*.84;s.beginPath();for(let o=0;o<i;o++){let l=o/i*Math.PI*2,c=Math.PI*2/i;[[l,a],[l+c*.12,n],[l+c*.42,n],[l+c*.54,a]].forEach(([h,u],d)=>{let f=e+Math.cos(h)*u,p=t+Math.sin(h)*u;o||d?s.lineTo(f,p):s.moveTo(f,p)})}s.closePath(),r&&(s.moveTo(e+n*.3,t),s.arc(e,t,n*.3,0,Math.PI*2))}function zc(s,e,t,n){let r=Re(256),a=r.getContext("2d"),o=256/2;vd(a,o,o,o*.98,s);let l=a.createRadialGradient(o*.7,o*.6,o*.1,o,o,o);l.addColorStop(0,t),l.addColorStop(1,n),a.fillStyle=l,a.fill(),a.strokeStyle="rgba(30,15,5,.85)",a.lineWidth=3,a.stroke(),a.globalCompositeOperation="destination-out";let c=Math.PI*2/e;for(let h=0;h<e;h++){let u=h*c;a.beginPath(),a.arc(o,o,o*.66,u+.14,u+c-.14),a.arc(o,o,o*.3,u+c-.3,u+.3,!0),a.closePath(),a.fill()}return a.globalCompositeOperation="source-over",a.strokeStyle="rgba(30,15,5,.6)",a.lineWidth=3,a.beginPath(),a.arc(o,o,o*.7,0,Math.PI*2),a.stroke(),a.fillStyle=n,a.beginPath(),a.arc(o,o,o*.18,0,Math.PI*2),a.fill(),a.stroke(),a.fillStyle=t,a.beginPath(),a.arc(o,o,o*.1,0,Math.PI*2),a.fill(),a.fillStyle="#1a0d05",a.beginPath(),a.arc(o,o,o*.045,0,Math.PI*2),a.fill(),Ce(r)}function QM(){let e=Re(1024),t=e.getContext("2d"),n=vt(44),i=1024/2,r=t.createRadialGradient(i*.8,i*.7,0,i,i,i);r.addColorStop(0,"#a86a30"),r.addColorStop(.55,"#7a4a1e"),r.addColorStop(1,"#3e230e"),t.fillStyle=r,t.fillRect(0,0,1024,1024);for(let o=i*.99;o>i*.25;o-=2+n()*3)t.strokeStyle=n()<.5?`rgba(255,220,160,${.02+n()*.04})`:`rgba(30,15,5,${.03+n()*.05})`,t.lineWidth=1.5,t.beginPath(),t.arc(i,i,o,0,Math.PI*2),t.stroke();for(let o=0;o<9;o++){let l=n()*Math.PI*2,c=i*(.36+n()*.44),h=i*(.08+n()*.12);vd(t,i+Math.cos(l)*c,i+Math.sin(l)*c,h,10+Math.floor(n()*8),!0),t.strokeStyle="rgba(40,20,6,.35)",t.lineWidth=4,t.stroke(),t.strokeStyle="rgba(255,215,150,.12)",t.lineWidth=1.5,t.stroke()}for(let o=0;o<40;o++){let l=n()*1024,c=n()*1024,h=10+n()*40,u=t.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(70,140,110,.12)"),u.addColorStop(1,"rgba(70,140,110,0)"),t.fillStyle=u,t.fillRect(l-h,c-h,h*2,h*2)}t.strokeStyle="#5a3414",t.lineWidth=i*.12,t.beginPath(),t.arc(i,i,i*.93,0,Math.PI*2),t.stroke();let a=t.createRadialGradient(i,i,i*.87,i,i,i*.99);a.addColorStop(0,"#6a4018"),a.addColorStop(.5,"#d89a4c"),a.addColorStop(1,"#5a3412"),t.strokeStyle=a,t.lineWidth=i*.105,t.beginPath(),t.arc(i,i,i*.93,0,Math.PI*2),t.stroke();for(let o=0;o<12;o++){let l=o/12*Math.PI*2;t.strokeStyle="rgba(40,20,6,.7)",t.lineWidth=3,t.beginPath(),t.moveTo(i+Math.cos(l)*i*.877,i+Math.sin(l)*i*.877),t.lineTo(i+Math.cos(l)*i*.983,i+Math.sin(l)*i*.983),t.stroke()}for(let o=0;o<48;o++){let l=(o+.5)/48*Math.PI*2;for(let c of[.897,.963]){let h=i+Math.cos(l)*i*c,u=i+Math.sin(l)*i*c;t.fillStyle="#3a1f0a",t.beginPath(),t.arc(h+1,u+1,5,0,Math.PI*2),t.fill(),t.fillStyle="#e8b878",t.beginPath(),t.arc(h,u,4,0,Math.PI*2),t.fill()}}return t.strokeStyle="rgba(40,20,6,.6)",t.lineWidth=6,t.beginPath(),t.arc(i,i,i*.33,0,Math.PI*2),t.stroke(),Ce(e)}function ev(){let e=Re(1024),t=e.getContext("2d"),n=vt(52),i=t.createRadialGradient(1024/2,1024*.5,0,1024/2,1024*.5,1024*.72);i.addColorStop(0,"#3e2614"),i.addColorStop(.55,"#1e1209"),i.addColorStop(1,"#0a0603"),t.fillStyle=i,t.fillRect(0,0,1024,1024);for(let a=0;a<7;a++)vd(t,n()*1024,n()*1024,60+n()*120,12+Math.floor(n()*8),!0),t.strokeStyle="rgba(150,90,40,.1)",t.lineWidth=3,t.stroke();let r=(a,o,l,c,h)=>{let u=Math.abs(c-o)<Math.abs(l-a),d=u?t.createLinearGradient(0,o-h/2,0,o+h/2):t.createLinearGradient(a-h/2,0,a+h/2,0);d.addColorStop(0,"rgba(50,25,10,.55)"),d.addColorStop(.4,"rgba(180,105,48,.38)"),d.addColorStop(1,"rgba(35,18,8,.55)"),t.strokeStyle=d,t.lineWidth=h,t.beginPath(),t.moveTo(a,o),t.lineTo(l,c),t.stroke();let f=Math.hypot(l-a,c-o);for(let p=90;p<f;p+=210){let _=a+(l-a)*p/f,g=o+(c-o)*p/f;t.fillStyle="rgba(120,70,30,.45)",u?t.fillRect(_-6,g-h*.75,12,h*1.5):t.fillRect(_-h*.75,g-6,h*1.5,12)}};r(0,1024*.1,1024,1024*.1,26),r(0,1024*.92,1024*.62,1024*.92,22),r(1024*.07,0,1024*.07,1024,20),r(1024*.94,1024*.28,1024*.94,1024,24);for(let a=0;a<120;a++)t.fillStyle=`rgba(255,190,110,${.05+n()*.2})`,t.fillRect(n()*1024,n()*1024,1.5,1.5);return Ce(e)}function tv(){let e=Re(256),t=e.getContext("2d"),n=256/2,i=t.createLinearGradient(0,0,256,256);i.addColorStop(0,"#f2c474"),i.addColorStop(.5,"#9a6424"),i.addColorStop(1,"#5a3410"),t.fillStyle=i,t.beginPath(),t.arc(n,n,n*.96,0,Math.PI*2),t.fill(),t.strokeStyle="#3a1f0a",t.lineWidth=3,t.stroke();for(let r=0;r<8;r++){let a=r/8*Math.PI*2+.39;t.fillStyle="#4a2a10",t.beginPath(),t.arc(n+Math.cos(a)*n*.87,n+Math.sin(a)*n*.87,5,0,Math.PI*2),t.fill()}i=t.createRadialGradient(n*.85,n*.8,0,n,n,n*.8),i.addColorStop(0,"#fbf1d8"),i.addColorStop(1,"#d2bb92"),t.fillStyle=i,t.beginPath(),t.arc(n,n,n*.76,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(200,40,20,.85)",t.lineWidth=10,t.beginPath(),t.arc(n,n,n*.6,Math.PI*1.875,Math.PI*2.25),t.stroke(),t.strokeStyle="#3a2410",t.lineCap="round";for(let r=0;r<=20;r++){let a=Math.PI*.75+r/20*Math.PI*1.5,o=r%5===0,l=n*(o?.54:.62);t.lineWidth=o?4:2,t.beginPath(),t.moveTo(n+Math.cos(a)*l,n+Math.sin(a)*l),t.lineTo(n+Math.cos(a)*n*.7,n+Math.sin(a)*n*.7),t.stroke()}return t.fillStyle="#3a2410",t.font="bold 28px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText("PSI",n,n*1.42),t.fillStyle="rgba(255,255,255,.2)",t.beginPath(),t.ellipse(n*.74,n*.64,n*.36,n*.17,-.6,0,Math.PI*2),t.fill(),Ce(e)}function nv(){let t=Re(200,256),n=t.getContext("2d"),i=(r,a)=>{let o=n.createLinearGradient(r-a/2,0,r+a/2,0);return o.addColorStop(0,"#4a2610"),o.addColorStop(.35,"#e8a060"),o.addColorStop(.55,"#b8693a"),o.addColorStop(1,"#3a1d0a"),o};n.fillStyle="#7a4520",n.fillRect(200*.2,256*.47,200*.3,12),n.fillStyle=i(200/2,52),n.fillRect(200/2-26,256*.16,52,256*.84),n.fillStyle=i(200/2,34),n.fillRect(200/2-17,256*.03,34,256*.14);for(let r of[256*.17,256*.6,256*.95]){n.fillStyle=i(200/2,76),n.fillRect(200/2-38,r-9,76,18),n.fillStyle="#2a1406";for(let a of[-29,29])n.beginPath(),n.arc(200/2+a,r,3.5,0,Math.PI*2),n.fill()}return n.strokeStyle="#b8302a",n.lineWidth=7,n.beginPath(),n.arc(200*.2,256*.49,24,0,Math.PI*2),n.stroke(),n.lineWidth=5,n.beginPath(),n.moveTo(200*.2-24,256*.49),n.lineTo(200*.2+24,256*.49),n.moveTo(200*.2,256*.49-24),n.lineTo(200*.2,256*.49+24),n.stroke(),n.fillStyle="#e8c070",n.beginPath(),n.arc(200*.2,256*.49,6,0,Math.PI*2),n.fill(),Ce(t)}function iv(s){let e=new ge,t=Vc(s);$r(t,s,QM(),{opacity:1},3e-4);let n=zc(14,5,"#e0ac5e","#7a4a1a"),i=zc(10,4,"#c98f48","#5e3612"),r=[[.4,.66,.13,1],[1.55,.6,.1,-1.4],[2.7,.68,.15,.9],[3.85,.58,.11,-1.25],[5.05,.67,.12,1.1]].map(([U,C,D,O],k)=>({m:kM(t,D,D,Ee({map:k%2?i:n,opacity:.85}),U,st*C,8e-4),sp:O}));e.add(ii("#ffb347",st*1.004,.004,.4));let a=12,{air:o,mesh:l}=Xc(e,a,Ee({map:Nn(),color:"#f0e0c8",opacity:.07})),c=Array.from({length:a},()=>({x:Ne(-1.3,1.3),y:Ne(-1.8,1.8),s:Ne(.25,.45),sp:Ne(.6,1.1),ph:Ne(0,9)})),h=new ke,u=new Tt,d=new P,f=new P,p=Nn(),_=new ge;e.add(_),_.scale.setScalar(1.25),_.add(new ne(new ve(.1,.1),Ee({map:tv()})));let g=new ve(.0045,.036);g.translate(0,.014,0);let m=new ne(g,Ee({color:"#9a1a10"}));m.position.z=6e-4,_.add(m);let M=new ne(new Hn(.005,16),Ee({color:"#c8913f"}));M.position.z=8e-4,_.add(M);let w=.08,y=w*256/200,T=new ge;e.add(T),T.scale.setScalar(1.25),T.add(new ne(new ve(w,y),Ee({map:nv()})));let b=y/2-y*.03,A=Array.from({length:6},(U,C)=>{let D=new ne(new ve(.05,.05),Ee({map:p,color:"#f6efe2",opacity:0}));return D.position.set(0,b,.001),T.add(D),{m:D,ph:C/6}}),x=new ge;e.add(x),x.scale.setScalar(1.25);let v=new ne(new ve(.12,.12),Ee({map:zc(16,6,"#e8b464","#6a3e14")})),R=new ne(new ve(.072,.072),Ee({map:zc(10,4,"#d09a50","#5a3410")}));R.position.set(.07,.052,5e-4),x.add(v,R);let L=0,N=.35;return{group:e,label:"assets3d/themes/steamfunk/label.jpg",background:ev(),vinyl:"#8a5a2a",armMetal:"#c8913f",stars:0,nebula:0,dust:.2,sheen:.12,bloom:.35,ringColor:"#ffcf6a",ringBaseColor:"#f6deb0",ringBase:.22,ringFlash:"#ffb347",layout(U){let C=Ei(U);o.position.set(0,-.12,0),o.rotation.set(-Math.PI/2,0,0),yt(_,U,C.ul[0],C.ul[1],.03,.08),yt(T,U,C.bl[0],C.bl[1],.03,.08),yt(x,U,C.br[0],C.br[1],.03,.08)},onNote(){L=1},update(U,C){L=Math.max(0,L-.03*U);for(let O of r)O.m.rotation.y+=O.sp*.008*U*(1+L*1.5);let D=.32+Math.sin(C*.7)*.06+Math.sin(C*5.3)*.012+L*.55;N+=(D-N)*Math.min(1,.12*U),m.rotation.z=(.5-N)*Math.PI*1.5;for(let O of A){let k=(C*.45+O.ph)%1;O.m.position.set(Math.sin(k*3+O.ph*6)*.006+k*.01,b+k*.075,.001),O.m.scale.setScalar(.35+k*1.1),O.m.material.opacity=Math.sin(Math.PI*k)*(.4+L*.35)}v.rotation.z-=.006*U,R.rotation.z+=.006*1.6*U;for(let O=0;O<a;O++){let k=c[O];k.y+=5e-4*k.sp*U,k.x+=Math.sin(C*.3+k.ph)*3e-4*U,k.y>1.9&&(k.y=-1.9,k.x=Ne(-1.3,1.3)),f.set(k.x,k.y,.01),d.set(k.s,k.s,1),h.compose(f,u,d),l.setMatrixAt(O,h)}l.instanceMatrix.needsUpdate=!0},dispose(){Wc(s,t)}}}var Zs=["#ff5fae","#ffd93d","#41d7f0","#ff9f3a","#b77bff","#ffffff"];function sv(s,e,t,n,i){for(let r=0;r<i;r++){let a=r/i*Math.PI*2,o=(r+1)/i*Math.PI*2;s.fillStyle=n[r%n.length],s.beginPath(),s.moveTo(e,e);for(let l=0;l<=20;l++){let c=l/20,h=a+c*2.2;s.lineTo(e+Math.cos(h)*t*c,e+Math.sin(h)*t*c)}for(let l=0;l<=6;l++){let c=a+2.2+(o-a)*l/6;s.lineTo(e+Math.cos(c)*t,e+Math.sin(c)*t)}for(let l=20;l>=0;l--){let c=l/20,h=o+c*2.2;s.lineTo(e+Math.cos(h)*t*c,e+Math.sin(h)*t*c)}s.closePath(),s.fill()}}function ho(s,e,t,n,i,r,a){s.save(),s.translate(e,t),s.rotate(n),s.fillStyle=a,s.beginPath(),s.moveTo(-i/2+r/2,-r/2),s.lineTo(i/2-r/2,-r/2),s.arc(i/2-r/2,0,r/2,-Math.PI/2,Math.PI/2),s.lineTo(-i/2+r/2,r/2),s.arc(-i/2+r/2,0,r/2,Math.PI/2,Math.PI*1.5),s.fill(),s.restore()}function yd(s,e,t,n,i){let r=o=>t+Math.sin(o*.011+t)*e*.02;s.fillStyle=n,s.beginPath(),s.moveTo(-10,-10),s.lineTo(e+10,-10);for(let o=e+10;o>=-10;o-=e/32)s.lineTo(o,r(o));s.closePath(),s.fill();let a=[];for(let o=0;o<7;o++){let l=i()*e,c=e*(.022+i()*.03),h=e*(.05+i()*.14),u=r(l)-4;s.beginPath(),s.moveTo(l-c,u),s.lineTo(l-c,u+h),s.arc(l,u+h,c,Math.PI,0,!0),s.lineTo(l+c,u),s.closePath(),s.fill(),a.push([l,c,u,h])}s.strokeStyle="rgba(255,255,255,.45)",s.lineWidth=e*.006,s.lineCap="round",s.beginPath();for(let o=-10;o<=e+10;o+=e/32){let l=r(o)-e*.014;o===-10?s.moveTo(o,l):s.lineTo(o,l)}s.stroke();for(let[o,l,c,h]of a)s.beginPath(),s.moveTo(o-l*.45,c+e*.012),s.lineTo(o-l*.45,c+h),s.stroke()}function rv(){let e=Re(1024),t=e.getContext("2d"),n=vt(19);t.fillStyle="#41d7f0",t.fillRect(0,0,1024,1024),yd(t,1024,1024*.76,"#ffd93d",n),yd(t,1024,1024*.52,"#ff5fae",n),yd(t,1024,1024*.27,"#ff9f3a",n);for(let r=0;r<150;r++)ho(t,n()*1024,n()*1024,n()*Math.PI,18+n()*8,6,Zs[Math.floor(n()*Zs.length)]);t.fillStyle="rgba(50,0,60,.3)",t.fillRect(0,0,1024,1024);let i=t.createRadialGradient(1024/2,1024/2,1024*.3,1024/2,1024/2,1024/2);return i.addColorStop(0,"rgba(40,0,40,0)"),i.addColorStop(1,"rgba(40,0,40,.4)"),t.fillStyle=i,t.fillRect(0,0,1024,1024),Ce(e)}function av(){let e=Re(1024),t=e.getContext("2d"),n=vt(27),i=t.createRadialGradient(1024/2,1024*.45,0,1024/2,1024*.5,1024*.72);i.addColorStop(0,"#45205e"),i.addColorStop(.55,"#221034"),i.addColorStop(1,"#0d0616"),t.fillStyle=i,t.fillRect(0,0,1024,1024);for(let r=0;r<22;r++){let a=n()*1024,o=n()*1024,l=30+n()*110,c=["255,95,174","65,215,240","255,217,61","183,123,255"][r%4],h=t.createRadialGradient(a,o,0,a,o,l);h.addColorStop(0,`rgba(${c},.12)`),h.addColorStop(1,`rgba(${c},0)`),t.fillStyle=h,t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}t.globalAlpha=.35;for(let r=0;r<90;r++)ho(t,n()*1024,n()*1024,n()*Math.PI,14,5,Zs[Math.floor(n()*Zs.length)]);return t.globalAlpha=1,Ce(e)}function ov(){let t=Re(128,32),n=t.getContext("2d");n.fillStyle="#fff6f8",n.fillRect(0,0,128,32),n.fillStyle="#ff3d7a";for(let r of[-128/2,0,128/2,128])n.beginPath(),n.moveTo(r,32),n.lineTo(r+128*.2,32),n.lineTo(r+128*.2+32,0),n.lineTo(r+32,0),n.closePath(),n.fill();let i=n.createLinearGradient(0,0,0,32);return i.addColorStop(0,"rgba(80,0,30,.3)"),i.addColorStop(.4,"rgba(255,255,255,.35)"),i.addColorStop(1,"rgba(80,0,30,.35)"),n.fillStyle=i,n.fillRect(0,0,128,32),Ce(t,!0)}function lv(){let s=Re(32,8),e=s.getContext("2d");return ho(e,16,4,0,30,7,"#ffffff"),Ce(s)}function cv(){let e=Re(256),t=e.getContext("2d"),n=256/2;return t.save(),t.beginPath(),t.arc(n,n,n*.94,0,Math.PI*2),t.clip(),sv(t,n,n*.96,["#ff5fae","#ffffff","#41d7f0","#ffffff","#ffd93d","#ffffff"],6),t.restore(),t.strokeStyle="rgba(160,20,90,.6)",t.lineWidth=5,t.beginPath(),t.arc(n,n,n*.94,0,Math.PI*2),t.stroke(),Ce(e)}function hv(){let t=Re(256,256),n=t.getContext("2d"),i=vt(3);n.save(),n.beginPath(),n.moveTo(256*.25,256*.96),n.lineTo(256*.75,256*.96),n.lineTo(256*.86,256*.56),n.lineTo(256*.14,256*.56),n.closePath(),n.clip(),n.fillStyle="#5fd0e8",n.fillRect(0,0,256,256),n.fillStyle="#35a8c6";for(let a=0;a<9;a++){let o=256*(.16+a*.085);n.beginPath(),n.moveTo(o,256*.56),n.lineTo(o+256*.03,256*.56),n.lineTo(256/2+(o-256/2)*.7+256*.02,256*.96),n.lineTo(256/2+(o-256/2)*.7,256*.96),n.closePath(),n.fill()}n.restore();let r=[[.53,.4,.1],[.43,.33,.09],[.34,.24,.08],[.26,.12,.06]];for(let[a,o,l]of r)n.fillStyle="#ff7cc0",n.beginPath(),n.ellipse(256/2,256*a,256*o,256*l,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.35)",n.beginPath(),n.ellipse(256/2-256*o*.25,256*a-256*l*.35,256*o*.55,256*l*.35,0,0,Math.PI*2),n.fill();for(let a=0;a<22;a++){let o=i()*Math.PI*2,l=i();ho(n,256/2+Math.cos(o)*256*.3*l,256*.42+Math.sin(o)*256*.1*l,i()*Math.PI,14,5,Zs[a%5])}return Ce(t)}function uv(){let e=Re(64),t=e.getContext("2d");t.strokeStyle="#3a8a2a",t.lineWidth=3,t.beginPath(),t.moveTo(64*.5,64*.4),t.quadraticCurveTo(64*.55,64*.1,64*.8,64*.04),t.stroke();let n=t.createRadialGradient(64*.42,64*.55,2,64*.5,64*.64,64*.3);return n.addColorStop(0,"#ff6a7a"),n.addColorStop(1,"#b0101e"),t.fillStyle=n,t.beginPath(),t.arc(64*.5,64*.64,64*.28,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.ellipse(64*.4,64*.54,5,3,-.6,0,Math.PI*2),t.fill(),Ce(e)}function dv(){let t=Re(160,200),n=t.getContext("2d"),i=()=>{n.beginPath(),n.arc(160*.3,200*.12,160*.1,0,Math.PI*2),n.moveTo(160*.8,200*.12),n.arc(160*.7,200*.12,160*.1,0,Math.PI*2),n.moveTo(160*.75,200*.27),n.arc(160/2,200*.27,160*.25,0,Math.PI*2),n.moveTo(160*.8,200*.62),n.ellipse(160/2,200*.62,160*.3,200*.27,0,0,Math.PI*2),n.moveTo(160*.3,200*.5),n.ellipse(160*.2,200*.5,160*.11,200*.09,-.5,0,Math.PI*2),n.moveTo(160*.9,200*.5),n.ellipse(160*.8,200*.5,160*.11,200*.09,.5,0,Math.PI*2),n.moveTo(160*.4,200*.88),n.ellipse(160*.3,200*.88,160*.13,200*.09,0,0,Math.PI*2),n.moveTo(160*.83,200*.88),n.ellipse(160*.7,200*.88,160*.13,200*.09,0,0,Math.PI*2)};n.fillStyle="rgba(255,55,95,.88)",i(),n.fill(),n.strokeStyle="rgba(150,0,40,.5)",n.lineWidth=3,i(),n.stroke(),n.fillStyle="rgba(255,255,255,.35)",n.beginPath(),n.ellipse(160*.4,200*.2,160*.08,200*.04,-.5,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(160*.36,200*.52,160*.07,200*.12,-.2,0,Math.PI*2),n.fill(),n.fillStyle="rgba(110,0,30,.55)";for(let r of[.41,.59])n.beginPath(),n.arc(160*r,200*.25,4,0,Math.PI*2),n.fill();return n.beginPath(),n.ellipse(160/2,200*.32,6,4,0,0,Math.PI*2),n.fill(),Ce(t)}function fv(){let e=Re(256),t=e.getContext("2d"),n=256/2,i=vt(8),r=t.createRadialGradient(n*.9,n*.85,n*.2,n,n,n);r.addColorStop(0,"#f2c07a"),r.addColorStop(1,"#b8742e"),t.fillStyle=r,t.beginPath(),t.arc(n,n,n*.95,0,Math.PI*2),t.fill(),t.fillStyle="#ff7cc0",t.beginPath();for(let a=0;a<=48;a++){let o=a/48*Math.PI*2,l=n*(.78+Math.sin(a*1.7)*.05+(a%6===0?.07:0));a?t.lineTo(n+Math.cos(o)*l,n+Math.sin(o)*l):t.moveTo(n+Math.cos(o)*l,n+Math.sin(o)*l)}t.closePath(),t.fill(),t.fillStyle="rgba(255,255,255,.3)",t.beginPath(),t.ellipse(n*.7,n*.6,n*.32,n*.12,-.7,0,Math.PI*2),t.fill();for(let a=0;a<34;a++){let o=i()*Math.PI*2,l=n*(.42+i()*.32);ho(t,n+Math.cos(o)*l,n+Math.sin(o)*l,i()*Math.PI,18,6,Zs[a%5])}return t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(n,n,n*.3,0,Math.PI*2),t.fill(),t.globalCompositeOperation="source-over",t.strokeStyle="rgba(120,60,20,.45)",t.lineWidth=4,t.beginPath(),t.arc(n,n,n*.3,0,Math.PI*2),t.stroke(),Ce(e)}function pv(s){let e=new ge,t=Vc(s);$r(t,s,rv(),{opacity:1},3e-4);let n=ov(),i=new ne(Ss(st*1.03,st*.055,200,30,Zt-6e-4),Ee({map:n}));i.renderOrder=-1,e.add(i);let r=36,{air:a,mesh:o}=Xc(e,r,Ee({map:lv(),opacity:.85})),l=Zs.map(D=>new le(D)),c=new P(0,0,1),h=Array.from({length:r},(D,O)=>(o.setColorAt(O,l[O%l.length]),{x:Ne(-1.4,1.4),y:Ne(-1.8,1.8),a:Ne(0,6.28),va:Ne(-.04,.04),sp:Ne(.6,1.2)})),u=new ke,d=new Tt,f=new P,p=new P,_=Nn(),g=new ge,m=new ge;e.add(g),g.add(m),g.scale.setScalar(1.3);let M=new ne(new ve(.007,.075),Ee({color:"#f4ece6"}));M.position.y=-.04;let w=new ne(new ve(.075,.075),Ee({map:cv()}));w.position.set(0,.005,5e-4);let y=new ne(new ve(.03,.02),Ee({map:_,color:"#ffffff",opacity:.55}));y.position.set(-.014,.02,.001),y.rotation.z=.6,m.add(M,w,y);let T=new ge;e.add(T),T.scale.setScalar(1.3),T.add(new ne(new ve(.095,.095),Ee({map:hv()})));let b=new ne(new ve(.026,.026),Ee({map:uv()}));T.add(b);let A=.095*.26+.004,x=new ge,v=new ge;e.add(x),x.add(v),x.scale.setScalar(1.25);let R=new ne(new ve(.14,.14),Ee({map:_,color:"#ff5f8a",blending:Ke,opacity:.18}));R.position.z=-.001,v.add(R,new ne(new ve(.064,.08),Ee({map:dv()})));let L=new ge;e.add(L),L.scale.setScalar(1.25);let N=new ne(new ve(.08,.08),Ee({map:fv()}));L.add(N);let U=0,C=0;return{group:e,label:"assets3d/themes/candydrip/label.jpg",background:av(),vinyl:"#ff8ac8",armMetal:"#f7b6d8",stars:0,nebula:0,dust:0,sheen:.16,bloom:.22,ringColor:"#ffffff",ringBaseColor:"#ffffff",ringBase:.3,ringFlash:"#ff4fd8",layout(D){let O=Ei(D);a.position.set(0,-.12,0),a.rotation.set(-Math.PI/2,0,0),yt(g,D,O.bl[0],O.bl[1],.03,.08),yt(T,D,O.br[0],O.br[1],.03,.08),yt(x,D,O.ul[0],O.ul[1],.03,.08),yt(L,D,0,O.bc[1],.02,.06)},onNote(){U=1,C=1},update(D,O){U=Math.max(0,U-.04*D),C=Math.max(0,C-.05*D),n.offset.x=O*.02%1,w.rotation.z=-O*.8,m.rotation.z=Math.sin(O*.7)*.06,b.position.set(0,A+Math.sin(C*Math.PI)*.018+Math.abs(Math.sin(O*2.2))*.002,.001),b.rotation.z=Math.sin(C*Math.PI*2)*.3,v.position.y=Math.sin(O*1.1)*.007,v.rotation.z=Math.sin(O*.8)*.12,R.material.opacity=.14+U*.25,N.rotation.z=Math.sin(O*.5)*.15;for(let k=0;k<r;k++){let K=h[k];K.y-=.0011*K.sp*D,K.a+=K.va*D,K.x+=Math.sin(O*.6+k)*3e-4*D,K.y<-1.85&&(K.y=1.85,K.x=Ne(-1.4,1.4)),p.set(K.x,K.y,.01),d.setFromAxisAngle(c,K.a),f.set(.024,.006,1),u.compose(p,d,f),o.setMatrixAt(k,u)}o.instanceMatrix.needsUpdate=!0},dispose(){Wc(s,t)}}}var co=["#2ee6ff","#3f7bff","#ff3df0","#9b5bff","#2ee6ff"];function mv(){let e=vt(88),t=1024/2,n=16,i=Re(1024),r=i.getContext("2d"),a=Re(1024),o=a.getContext("2d"),l=r.createRadialGradient(t,t,0,t,t,t);l.addColorStop(0,"#16124a"),l.addColorStop(.6,"#0d0b30"),l.addColorStop(1,"#07061c"),r.fillStyle=l,r.fillRect(0,0,1024,1024),r.strokeStyle="rgba(90,120,255,.06)",r.lineWidth=1;for(let f=0;f<1024;f+=32)r.beginPath(),r.moveTo(f,0),r.lineTo(f,1024),r.moveTo(0,f),r.lineTo(1024,f),r.stroke();let c=[1,1,0,-1,-1,-1,0,1],h=[0,1,1,1,0,-1,-1,-1],u=[];for(let f=0;f<70;f++){let p=Math.round(e()*1024/n)*n,_=Math.round(e()*1024/n)*n,g=Math.floor(e()*8),m=[[p,_]],M=3+Math.floor(e()*6);for(let w=0;w<M;w++){e()<.5&&(g=(g+(e()<.5?1:7))%8);let y=n*(2+Math.floor(e()*6));p+=c[g]*y,_+=h[g]*y,m.push([p,_])}u.push({pts:m,col:co[Math.floor(e()*co.length)],w:e()<.3?4:2.2})}let d=(f,p,_,g)=>{f.lineJoin="round",f.globalAlpha=p;for(let m of u){g&&(f.shadowColor=m.col,f.shadowBlur=10),f.strokeStyle=f.fillStyle=m.col,f.lineWidth=m.w*_,f.beginPath(),m.pts.forEach(([b,A],x)=>x?f.lineTo(b,A):f.moveTo(b,A)),f.stroke();let[M,w]=m.pts[m.pts.length-1],[y,T]=m.pts[0];f.beginPath(),f.arc(M,w,m.w*1.8,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(y,T,m.w*1.5,0,Math.PI*2),f.stroke()}f.globalAlpha=1,f.shadowBlur=0};d(r,.34,1,!1);for(let f=0;f<14;f++){let p=n*(2+Math.floor(e()*4)),_=n*(2+Math.floor(e()*3)),g=Math.round(e()*1024/n)*n,m=Math.round(e()*1024/n)*n;r.fillStyle="#1a1746",r.fillRect(g,m,p,_),r.strokeStyle="rgba(120,160,255,.5)",r.lineWidth=1.5,r.strokeRect(g,m,p,_),r.strokeStyle="rgba(180,200,255,.35)",r.lineWidth=2,r.beginPath();for(let M=g+5;M<g+p-3;M+=7)r.moveTo(M,m-5),r.lineTo(M,m),r.moveTo(M,m+_),r.lineTo(M,m+_+5);r.stroke(),e()<.6&&(o.fillStyle=co[Math.floor(e()*co.length)],o.globalAlpha=.5,o.fillRect(g+4,m+4,p*.3,_*.3),o.globalAlpha=1)}return d(o,.9,.8,!0),{base:Ce(i),glow:Ce(a)}}function gv(){let e=Re(1024),t=e.getContext("2d"),n=vt(66),i=t.createRadialGradient(1024/2,1024*.45,0,1024/2,1024*.5,1024*.72);i.addColorStop(0,"#1a0f4a"),i.addColorStop(.5,"#0a0624"),i.addColorStop(1,"#030208"),t.fillStyle=i,t.fillRect(0,0,1024,1024),t.strokeStyle="rgba(80,200,255,.06)",t.lineWidth=1.5;let r=34,a=r*Math.sqrt(3);for(let l=0;l*r*1.5<1024+r;l++)for(let c=0;c*a<1024+a;c++){let h=c*a+(l%2?a/2:0),u=l*r*1.5;t.beginPath();for(let d=0;d<6;d++){let f=Math.PI/6+d*Math.PI/3,p=h+Math.cos(f)*r,_=u+Math.sin(f)*r;d?t.lineTo(p,_):t.moveTo(p,_)}t.closePath(),t.stroke()}for(let l=0;l<60;l++){let c=n()*1024,h=n()*1024,u=6+n()*16,d=n()<.5?"46,230,255":"255,61,240",f=t.createRadialGradient(c,h,0,c,h,u);f.addColorStop(0,`rgba(${d},.5)`),f.addColorStop(1,`rgba(${d},0)`),t.fillStyle=f,t.fillRect(c-u,h-u,u*2,u*2)}let o=t.createLinearGradient(0,1024*.7,0,1024);return o.addColorStop(0,"rgba(255,61,240,0)"),o.addColorStop(1,"rgba(255,61,240,.14)"),t.fillStyle=o,t.fillRect(0,1024*.7,1024,1024*.3),Ce(e)}function _v(){let t=vt(31),n=Re(512,64),i=n.getContext("2d"),r=Re(512,64),a=r.getContext("2d"),o=i.createLinearGradient(0,0,0,64);o.addColorStop(0,"#05040f"),o.addColorStop(.2,"#1b1747"),o.addColorStop(.5,"#0f0c2c"),o.addColorStop(.8,"#1b1747"),o.addColorStop(1,"#05040f"),i.fillStyle=o,i.fillRect(0,0,512,64),i.fillStyle="rgba(46,230,255,.75)",i.fillRect(0,5,512,2),i.fillRect(0,57,512,2),i.fillStyle="rgba(160,190,255,.35)";for(let c=0;c<512;c+=8)i.fillRect(c+2,9,3,5);i.fillStyle="rgba(0,0,0,.45)";for(let c=4;c<512;c+=16)i.fillRect(c,46,8,3);let l=0;for(;l<502;){let c=30+Math.floor(t()*50),h=t()<.28,u=h?14:c,d=h?"#ff3df0":t()<.2?"#9b5bff":"#2ee6ff";i.fillStyle="rgba(10,8,30,.9)",i.fillRect(l,22,u,20),i.strokeStyle=d,i.globalAlpha=.45,i.lineWidth=1.5,i.strokeRect(l+.5,22.5,u-1,19),i.globalAlpha=1,a.fillStyle=d,a.shadowColor=d,a.shadowBlur=8,a.fillRect(l+3,28,u-6,8),l+=u+8+Math.floor(t()*10)}return a.shadowBlur=0,a.fillStyle="#2ee6ff",a.fillRect(0,5,512,2),a.fillRect(0,57,512,2),{base:Ce(n,!0),glow:Ce(r,!0)}}function xv(){let t=Re(32,512),n=t.getContext("2d"),i=vt(14),r="01ABCDEF<>/#$%";n.font="bold 22px monospace",n.textAlign="center",n.textBaseline="middle";for(let a=0;a<20;a++){let o=Math.pow(a/19,1.6);n.fillStyle=`rgba(255,255,255,${.08+o*.92})`,n.fillText(r[Math.floor(i()*r.length)],32/2,12+a*25)}return Ce(t)}function yv(){let e=Re(256),t=e.getContext("2d"),n=256/2;t.strokeStyle="#7fe9ff",t.lineWidth=6,t.beginPath();for(let r=0;r<7;r++){let a=64+r*256*.083;t.moveTo(a,256*.06),t.lineTo(a,256*.2),t.moveTo(a,256*.8),t.lineTo(a,256*.94),t.moveTo(256*.06,a),t.lineTo(256*.2,a),t.moveTo(256*.8,a),t.lineTo(256*.94,a)}t.stroke(),t.fillStyle="#141235",t.fillRect(256*.18,256*.18,256*.64,256*.64),t.strokeStyle="#2ee6ff",t.lineWidth=4,t.strokeRect(256*.18,256*.18,256*.64,256*.64),t.strokeStyle="rgba(155,91,255,.8)",t.lineWidth=3,t.strokeRect(256*.3,256*.3,256*.4,256*.4),t.strokeStyle="rgba(46,230,255,.5)",t.lineWidth=2,t.beginPath();for(let[r,a,o,l]of[[.3,.4,.22,.4],[.7,.45,.78,.45],[.45,.3,.45,.22],[.55,.7,.55,.78],[.3,.6,.24,.66]])t.moveTo(256*r,256*a),t.lineTo(256*o,256*l);t.stroke();let i=t.createRadialGradient(n,n,0,n,n,256*.16);return i.addColorStop(0,"#ffd0fb"),i.addColorStop(.4,"#ff3df0"),i.addColorStop(1,"rgba(255,61,240,0)"),t.fillStyle=i,t.fillRect(256*.3,256*.3,256*.4,256*.4),Ce(e)}function Sv(){let t=Re(160,256),n=t.getContext("2d"),i=n.createLinearGradient(0,0,160,0);i.addColorStop(0,"#0e0c26"),i.addColorStop(.5,"#1c1946"),i.addColorStop(1,"#0b0a20"),n.fillStyle=i,n.fillRect(160*.08,256*.02,160*.84,256*.96),n.strokeStyle="rgba(46,230,255,.7)",n.lineWidth=3,n.strokeRect(160*.08,256*.02,160*.84,256*.96);for(let r=0;r<8;r++){let a=256*(.07+r*.113);n.fillStyle="#25225a",n.fillRect(160*.14,a,160*.72,256*.08),n.strokeStyle="rgba(120,160,255,.35)",n.lineWidth=1.5,n.beginPath();for(let o=160*.2;o<160*.6;o+=6)n.moveTo(o,a+256*.018),n.lineTo(o,a+256*.062);n.stroke()}return Ce(t)}function _m(s,e){let n=Re(256),i=n.getContext("2d"),r=256/2;i.strokeStyle="#ffffff",i.lineCap="butt",i.lineWidth=10;for(let a=0;a<s;a++){let o=a/s*Math.PI*2;i.beginPath(),i.arc(r,r,r*.86,o,o+Math.PI*2/s*(1-e)),i.stroke()}i.lineWidth=2,i.globalAlpha=.6,i.beginPath(),i.arc(r,r,r*.72,0,Math.PI*2),i.stroke();for(let a=0;a<36;a++){let o=a/36*Math.PI*2;i.beginPath(),i.moveTo(r+Math.cos(o)*r*.74,r+Math.sin(o)*r*.74),i.lineTo(r+Math.cos(o)*r*(a%3?.78:.82),r+Math.sin(o)*r*(a%3?.78:.82)),i.stroke()}return Ce(n)}function Mv(s){let e=new ge,t=Vc(s),n=mv();$r(t,s,n.base,{opacity:1},3e-4);let i=$r(t,s,n.glow,{blending:Ke,opacity:.55},6e-4),r=Nn(),a=vt(4),o=vm(t,14,.022,Ee({map:r,blending:Ke})),l=[new le("#2ee6ff"),new le("#ff3df0")],c=Array.from({length:14},()=>({a:a()*Math.PI*2,u:a(),sp:.7+a()*.7})),h=_v(),u=new ne(Ss(st*1.068,st*.125,220,6,Zt-6e-4),Ee({map:h.base})),d=new ne(Ss(st*1.068,st*.125,220,6,Zt-4e-4),Ee({map:h.glow,blending:Ke,opacity:.75}));u.renderOrder=-1,d.renderOrder=-1,e.add(u,d,ii("#ff3df0",st*1.006,.007,.85),ii("#2ee6ff",st*1.132,.004,.55));let f=24,{air:p,mesh:_}=Xc(e,f,Ee({map:xv(),blending:Ke,opacity:.35})),g=["#2ee6ff","#ff3df0","#3f7bff"].map(te=>new le(te)),m=Array.from({length:f},(te,oe)=>(_.setColorAt(oe,g[oe%3]),{x:Ne(-1.4,1.4),y:Ne(-1.8,1.8),sp:Ne(.8,1.6),l:Ne(.18,.32)})),M=new ke,w=new Tt,y=new P,T=new P,b=new le,A=Nn(),x=new ge,v=new ge;e.add(x),x.add(v),x.scale.setScalar(1.3);let R=new ne(new ve(.17,.17),Ee({map:A,color:"#2ee6ff",blending:Ke,opacity:.25}));R.position.z=-.001;let L=new ne(new ve(.09,.004),Ee({map:A,color:"#7ff3ff",blending:Ke,opacity:.8}));L.position.z=.001,v.add(R,new ne(new ve(.085,.085),Ee({map:yv(),opacity:.95})),L);let N=.06,U=N*256/160,C=new ge;e.add(C),C.scale.setScalar(1.3),C.add(new ne(new ve(N,U),Ee({map:Sv()})));let D=new Cn(new ve(.0042,.0042),Ee({blending:Ke}),16);D.frustumCulled=!1,C.add(D);let O=Array.from({length:16},(te,oe)=>{let re=oe>>1,$=new ke().makeTranslation(N*(.22+(oe&1)*.1),U/2-U*(.07+re*.113+.04),5e-4);return D.setMatrixAt(oe,$),D.setColorAt(oe,new le(0,0,0)),{col:new le(co[oe%4]),on:!1,next:0}}),k=new ge;e.add(k),k.scale.setScalar(1.25);let K=new ne(new ve(.11,.11),Ee({map:_m(6,.25),color:"#2ee6ff",blending:Ke,opacity:.75})),X=new ne(new ve(.075,.075),Ee({map:_m(3,.4),color:"#ff3df0",blending:Ke,opacity:.75})),j=new ne(new ve(.05,.05),Ee({map:A,color:"#b9f6ff",blending:Ke,opacity:.6}));X.position.z=5e-4,j.position.z=.001,k.add(K,X,j);let G=0;return{group:e,label:"assets3d/themes/cybercircuit/label.jpg",background:gv(),vinyl:"#1a1440",armMetal:"#9aa6c8",stars:.2,nebula:.06,dust:0,sheen:.08,bloom:.5,ringColor:"#2ee6ff",ringBaseColor:"#8fe9ff",ringBase:.2,ringFlash:"#ff3df0",layout(te){let oe=Ei(te);p.position.set(0,-.12,0),p.rotation.set(-Math.PI/2,0,0),yt(x,te,oe.bl[0],oe.bl[1],.03,.08),yt(C,te,oe.br[0],oe.br[1],.03,.08),yt(k,te,oe.ul[0],oe.ul[1],.03,.08)},onNote(){G=1},update(te,oe){G=Math.max(0,G-.035*te),i.material.opacity=.32+Sd(oe)*.18+G*.45,h.glow.offset.x=oe*.012%1,d.material.opacity=.7+Sd(oe)*.2+G*.3,c.forEach((re,$)=>{re.u+=.004*re.sp*te*(1+G*2),re.u>1&&(re.u=0,re.a=Math.random()*Math.PI*2);let Pe=st*(.32+re.u*.64);T.set(Math.cos(re.a)*Pe,Zt+.0035,Math.sin(re.a)*Pe),y.setScalar(1),M.compose(T,w,y),o.setMatrixAt($,M),o.setColorAt($,b.copy(l[$%2]).multiplyScalar(Math.sin(Math.PI*re.u)*.9))}),o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,v.position.y=Math.sin(oe*1.2)*.005,L.position.y=Math.sin(oe*1.6)*.038,L.material.opacity=.5+G*.5,R.material.opacity=.2+Math.sin(oe*2)*.05+G*.3,O.forEach((re,$)=>{oe>re.next&&(re.on=Math.random()<.55,re.next=oe+Ne(.08,.5)),D.setColorAt($,b.copy(re.col).multiplyScalar(G>.6?1:re.on?.95:.2))}),D.instanceColor.needsUpdate=!0,K.rotation.z=oe*.5,X.rotation.z=-oe*.9,j.material.opacity=.45+Math.sin(oe*3)*.12+G*.4,k.children[0].material.opacity=.6+G*.35;for(let re=0;re<f;re++){let $=m[re];$.y-=.0045*$.sp*te,$.y<-1.95&&($.y=1.95,$.x=Ne(-1.4,1.4)),T.set($.x,$.y,.01),y.set(.016,$.l,1),M.compose(T,w,y),_.setMatrixAt(re,M)}_.instanceMatrix.needsUpdate=!0},dispose(){Wc(s,t)}}}var xm={neon:dM,synthbeats:fM,urbansounds:mM,cosmicsoundwave:SM,hellsanthem:UM,lofichillhop:HM,crystalrune:jM,steamfunk:iv,candydrip:pv,cybercircuit:Mv};function Tm(s,e){let t=xm[s]||xm.neon,n=performance.now(),i=t(e);return i.buildMs=Math.round(performance.now()-n),i.key=s,i.labelPromise=i.label?lo(i.label):Promise.resolve(null),i}function Em(s){s&&(s.dispose&&s.dispose(),s.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),s.group.parent&&s.group.parent.remove(s.group),s.background&&s.background.dispose())}var bd=[.19,.285,.38],wi=.44,qc=.012,Td=.105,gn=qc,vv={land:{pivot:[.36,-.42],rest:.5,sRest:1,sFull:1},port:{pivot:[.3,-.55],rest:-Math.PI/2,sRest:null,sFull:null}},cn=.5,Ms=.05,$i=-.04,bv=s=>Math.asin(Math.max(0,Ms-.038-qc)/s),Ed="#7fe8ff";function wd(s){let e=Math.max(0,Math.min(1,(s-.55)/.35));return $i*e*e*(3-2*e)}var Yc=class{constructor(e,t){this.scene=e,this.manifest=t||{},this.root=new ge,this.recordSpin=new ge,this.root.add(this.recordSpin),e.add(this.root),this.themeKey=null,this._buildLights(),this._buildBackground(),this._buildPlatter(),this._buildRecord(),this._buildRings(),this._buildTonearm(),this._buildElectric(),this._applyManifest(),this.ringFlash=[0,0,0],this.afterT=0}_buildLights(){this.hemi=new Ua(16777215,0,.55),this.key=new ds(16777215,1.6),this.key.position.set(-.5,1.2,.6),this.rim=new ds(16777215,.7),this.rim.position.set(.7,.4,-.9),this.centerLight=new _i(16777215,2.2,0,0),this.centerLight.position.set(0,.06,0),this.root.add(this.hemi,this.key,this.rim,this.centerLight)}_buildBackground(){let t=new Float32Array(4200),n=new Float32Array(1400*3);for(let c=0;c<1400;c++){let h=Math.random()*2-1,u=Math.random()*Math.PI*2,d=9+Math.random()*6,f=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*f*d,t[c*3+1]=h*d-3,t[c*3+2]=Math.sin(u)*f*d;let p=.5+Math.random()*.5;n[c*3]=p,n[c*3+1]=p,n[c*3+2]=p}let i=new Qe;i.setAttribute("position",new lt(t,3)),i.setAttribute("color",new lt(n,3)),this.starMat=new Hi({size:.035,map:Kr(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:dt,fog:!1}),this.stars=new di(i,this.starMat),this.root.add(this.stars),this.nebula=[];let r=[[-1.6,-1.2,-2.4,3.2],[1.8,-1.4,-1.6,2.6],[.2,-1.8,1.6,3]];for(let[c,h,u,d]of r){let f=new Ot({map:ni(),transparent:!0,opacity:.22,depthWrite:!1,blending:dt,fog:!1}),p=new Gt(f);p.position.set(c,h,u),p.scale.setScalar(d),this.root.add(p),this.nebula.push(p)}let a=90,o=new Float32Array(a*3);this.dustSeed=new Float32Array(a*3);for(let c=0;c<a;c++){let h=Math.random()*Math.PI*2,u=Math.random()*.6;this.dustSeed[c*3]=h,this.dustSeed[c*3+1]=u,this.dustSeed[c*3+2]=.02+Math.random()*.18}let l=new Qe;l.setAttribute("position",new lt(o,3)),this.dustMat=new Hi({size:.006,map:Kr(),transparent:!0,opacity:.55,depthWrite:!1,blending:dt}),this.dust=new di(l,this.dustMat),this.root.add(this.dust)}_buildPlatter(){let e=new Mn(wi*1.035,wi*1.05,.03,128,1),t=new Ut({color:9080729,metalness:.9,roughness:.32});this.platter=new ne(e,t),this.platter.position.y=-.015,this.root.add(this.platter);let n=new ge,i=new pi(.0035,8,6),r=new et({color:16769712});for(let a=0;a<72;a++){let o=a/72*Math.PI*2,l=new ne(i,r);l.position.set(Math.cos(o)*wi*1.045,-.01,Math.sin(o)*wi*1.045),n.add(l)}this.strobe=n,n.visible=!1,this.recordSpin.add(n)}_buildRecord(){let e=new Ut({color:1118481,roughness:.4,metalness:.2});this.vinylMat=new Ut({map:jp(),roughnessMap:Qp(),roughness:.55,metalness:.35,color:16777215});let t=new Mn(wi,wi,qc,160,1);this.disc=new ne(t,[e,this.vinylMat,e]),this.disc.position.y=qc/2,this.recordSpin.add(this.disc);let n=new Hn(wi*.995,128);n.rotateX(-Math.PI/2),this.sheen=new ne(n,new et({map:em(),transparent:!0,opacity:.12,depthWrite:!1,blending:dt})),this.sheen.position.y=gn+6e-4,this.root.add(this.sheen);let i=new Hn(Td,96);i.rotateX(-Math.PI/2),this.labelMat=new Ut({roughness:.6,metalness:.05,emissive:16777215,emissiveIntensity:.35}),this.label=new ne(i,this.labelMat),this.label.position.y=gn+.0012,this.recordSpin.add(this.label),this.labelGlow=new Gt(new Ot({map:ni(),transparent:!0,opacity:.55,depthWrite:!1,depthTest:!1,blending:dt})),this.labelGlow.position.y=gn+.02,this.labelGlow.scale.setScalar(Td*4),this.root.add(this.labelGlow);let r=new ne(new Mn(.008,.008,.03,20),new Ut({color:14212582,metalness:1,roughness:.2}));r.position.y=gn+.015,this.root.add(r),this.spindle=r}_buildRings(){this.rings=[];for(let e of bd){let t=new ne(this._ringGeo(e,.0028),new et({transparent:!0,opacity:.5,depthWrite:!1,blending:dt})),n=new ne(this._ringGeo(e,.013),new et({transparent:!0,opacity:.1,depthWrite:!1,blending:dt})),i=new ne(this._ringGeo(e+.009,.0016),t.material.clone());i.visible=!1;for(let r of[t,n,i])r.position.y=gn+9e-4,this.root.add(r);this.rings.push({core:t,halo:n,twin:i})}}_ringGeo(e,t){let n=new zi(e-t,e+t,160,1);return n.rotateX(-Math.PI/2),n}_buildTonearm(){this.arm=new ge;let e=new Ut({color:12096090,metalness:.85,roughness:.32});this.armMetal=e;let t=new Ut({color:1840402,metalness:.4,roughness:.6}),n=new Ut({color:2760988,metalness:.7,roughness:.4}),i=new ne(new Mn(.085,.09,.012,48),t);i.position.y=.006;let r=new ne(new La(.072,.0025,8,64),n);r.rotation.x=Math.PI/2,r.position.y=.0125;let a=new ne(new Mn(.014,.016,Ms,20),n);a.position.y=Ms/2,this.arm.add(i,r,a),this.armSwing=new ge,this.armTilt=new ge,this.armSwing.position.y=Ms,this.armSwing.add(this.armTilt),this.arm.add(this.armSwing);let o=new ne(new fi(.06,.05,.065),e);o.position.set(0,.004,0);let l=new hs([new P(0,0,.01),new P(0,0,.26),new P(-.012,0,.33),new P(-.03,0,.39),new P($i,-.004,.44)]),c=new ne(new Os(l,48,.015,16,!1),e),h=new ne(new Mn(.03,.03,.06,28),n);h.rotation.x=Math.PI/2,h.position.z=-.06;let u=new ne(new Mn(.02,.02,.008,28),e);u.rotation.x=Math.PI/2,u.position.z=-.088,this.armHead=new ge;let d=new ne(new fi(.056,.024,.09),e);d.position.set($i,-.01,cn-.035);let f=new ne(new fi(.04,.014,.05),n);f.position.set($i,-.026,cn-.025);let p=new ne(new Mn(.0025,.0025,.03,8),e);p.rotation.z=Math.PI/2,p.position.set($i-.032,-.004,cn-.045),this.stylusMat=new Ut({color:16734751,emissive:16730640,emissiveIntensity:.9,roughness:.4});let _=new ne(new ki(.006,.016,12),this.stylusMat);_.rotation.x=Math.PI,_.position.set($i,-.03,cn-.004),this.armSwing.add(o),this.armTube=c,this.armHead.add(d,f,p,_),this.armTilt.add(c,h,u,this.armHead);let g=new ve(1,1);g.rotateX(-Math.PI/2),this.armShadow=new ne(g,new et({map:Yr(),transparent:!0,opacity:.5,depthWrite:!1})),this.armShadow.scale.set(.09,1,.58),this.armShadow.position.set(.012,-Ms+gn+.0015,.25),this.armSwing.add(this.armShadow),this.armProcedural=[i,r,a,o,c,h,u,d,f,p,_],this.armGlow=new Gt(new Ot({map:ni(),color:5951999,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt})),this.armGlow.position.set($i,-.024,cn),this.armHead.add(this.armGlow),this.stylusGlow=new Gt(new Ot({map:ni(),color:16738858,transparent:!0,opacity:.55,depthWrite:!1,depthTest:!1,blending:dt})),this.stylusGlow.position.set($i,-.03,cn-.004),this.stylusGlow.scale.setScalar(.03),this.armHead.add(this.stylusGlow),this.armLight=new _i(5951999,0,.35,0),this.armLight.position.set($i,-.02,cn),this.armTilt.add(this.armLight),this.root.add(this.arm),this._layoutArm("land")}_layoutArm(e){var i,r;if(this.armLayoutKind===e)return;this.armLayoutKind=e;let t=vv[e];this.armPivot=new P(t.pivot[0],0,t.pivot[1]),this.arm.position.copy(this.armPivot);let n=Math.hypot(t.pivot[0],t.pivot[1]);this.armSFull=(i=t.sFull)!=null?i:(n-.07)/cn,this.armSRest=(r=t.sRest)!=null?r:this.armSFull*.625,this.armRestYaw=t.rest,this.armStrikeYaw=Math.atan2(-t.pivot[0],-t.pivot[1])+.06,this.armStrikeTilt=bv(cn*this.armSFull),this.armYaw=this.armRestYaw,this.armTiltX=-.04,this._setArmScale(this.armSRest)}_setArmScale(e){this.armS=e,this.armTube.scale.z=e,this.armHead.position.z=cn*(e-1),this.armShadow.scale.z=.58*e,this.armShadow.position.z=.25*e}_buildElectric(){let e=dt;this.bolts=new Jr(900),this.root.add(this.bolts.mesh);let t=new Mn(.0095,.0095,1,12,1,!0);t.rotateX(Math.PI/2),t.translate(0,0,.5),this.chargeBar=new ne(t,new et({color:Ed,transparent:!0,opacity:0,depthWrite:!1,blending:e})),this.chargeBar.visible=!1,this.armTilt.add(this.chargeBar);let n=new Ot({map:ni(),color:12581119,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:e});this.chargeOrb=new Gt(n),this.armTilt.add(this.chargeOrb),this.baseGlow=new Gt(new Ot({map:ni(),color:Ed,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:e})),this.baseGlow.position.y=Ms,this.arm.add(this.baseGlow),this._jag=new Float32Array(72),this._boltShapes=[],this._boltTs=-1,this._elecCol=new le(Ed)}_armPoint(e,t){let n=this.armYaw,i=this.armTiltX,r=wd(t),a=-.038*t*t,o=cn*this.armS*t,l=a*Math.cos(i)-o*Math.sin(i),c=a*Math.sin(i)+o*Math.cos(i),h=this.armPivot;return e.set(h.x+r*Math.cos(n)+c*Math.sin(n),Ms+l,h.z-r*Math.sin(n)+c*Math.cos(n)),e}_addBolt(e,t,n,i,r,a,o,l,c,h,u){let d=um(this._jag,e,t,n,i,r,a,o,l);this._boltShapes.push({pts:this._jag.slice(0,d*3),n:d,w:c,a:h,grow:u==null?1:u})}_regenBolts(e,t){this._boltShapes.length=0;let n=this._p1||(this._p1=new P),i=this._p2||(this._p2=new P),r=gn+.002;if(e&&e.gather>0&&e.travel<1){let a=this._armPoint(n,0),o=2+Math.round(e.gather*3);for(let l=0;l<o;l++){let c=Math.random()*Math.PI*2,h=.03+Math.random()*.05*e.gather;this._addBolt(a.x,a.y,a.z,a.x+Math.cos(c)*h,Ms*(.2+Math.random()*.8),a.z+Math.sin(c)*h,6,.35,.0045,.9)}}if(e&&e.travel>0&&e.discharge<1){let a=this._armPoint(n,e.travel);for(let l=0;l<3;l++){let c=Math.max(0,e.travel-(.05+Math.random()*.25)),h=this._armPoint(i,c);this._addBolt(a.x,a.y,a.z,h.x,h.y,h.z,7,.22,.004,.85)}let o=Math.random()*Math.PI*2;this._addBolt(a.x,a.y,a.z,a.x+Math.cos(o)*.05,a.y,a.z+Math.sin(o)*.05,5,.4,.0035,.7)}if(e&&e.discharge>0){let a=this._armPoint(n,1),o=Math.min(1,e.discharge*1.4);for(let l=0;l<8;l++){let c=l/8*Math.PI*2+Math.random()*.5,h=bd[l%3]+(Math.random()-.5)*.03,u=Math.cos(c)*h,d=Math.sin(c)*h;if(this._addBolt(a.x,r,a.z,u,r,d,14,.16,.009,1,o),Math.random()<.7){let f=.35+Math.random()*.35,p=a.x+(u-a.x)*f,_=a.z+(d-a.z)*f,g=c+(Math.random()-.5)*1.4,m=.05+Math.random()*.08;this._addBolt(p,r,_,p+Math.cos(g)*m,r,_+Math.sin(g)*m,6,.3,.005,.8,Math.max(0,(o-f)/(1-f)))}}this._addBolt(a.x,a.y,a.z,a.x+(Math.random()-.5)*.02,r,a.z+(Math.random()-.5)*.02,4,.5,.006,1)}if(this.afterT>0)for(let a=0;a<10;a++){let o=a/10*Math.PI*2+Math.random()*.4,l=bd[2]+Math.random()*.05;this._addBolt(0,r,0,Math.cos(o)*l,r,Math.sin(o)*l,16,.14,.01,1,1)}}_updateElectric(e,t,n){let i=n.bossPh;if(i)this.armYaw=this.armRestYaw+(this.armStrikeYaw-this.armRestYaw)*i.swing,this.armTiltX=-.04+(this.armStrikeTilt+.04)*i.swing,this._setArmScale(this.armSRest+(this.armSFull-this.armSRest)*i.swing),i.discharge>.85&&(this._discharging=!0);else{let f=Math.min(1,.035*e);this.armYaw+=(this.armRestYaw-this.armYaw)*f,Math.abs(this.armS-this.armSRest)>1e-4&&this._setArmScale(this.armS+(this.armSRest-this.armS)*f),this.armTiltX+=(-.04-this.armTiltX)*f,this._discharging&&(this._discharging=!1,this.afterT=1)}this.afterT=Math.max(0,this.afterT-e*.03),this.armSwing.rotation.y=this.armYaw,this.armTilt.rotation.x=this.armTiltX;let r=.75+Math.random()*.25,a=i?i.gather:0,o=i?i.travel:0,l=i?i.discharge:0,c=i&&a>0&&l<1;this.baseGlow.material.opacity=i&&o<1?a*(.9-o*.6)*r:0,this.baseGlow.scale.setScalar(.05+.09*a),this.chargeOrb.material.opacity=c?r:0,this.chargeOrb.position.set(wd(o),.004,cn*this.armS*o),this.chargeOrb.scale.setScalar((.045+.03*a+.035*o+.08*l)*r),this.chargeBar.visible=!1,this.chargeBar.scale.set(1,1,Math.max(.001,cn*this.armS*o)),this.chargeBar.material.opacity=.55*r,this.armLight.position.set(wd(o),-.01,cn*this.armS*o),this.armLight.intensity=i?(a*2.5+o*3+l*7)*r:this.afterT*8,this.armGlow.material.opacity=l*r,this.armGlow.scale.setScalar(.08+l*.2),t-this._boltTs>.055&&(this._boltTs=t,this._regenBolts(i,t));let h=this.bolts,u=this._elecCol;h.begin();let d=i?1:this.afterT;for(let f of this._boltShapes){let p=Math.max(0,Math.min(f.n,Math.ceil(f.n*f.grow)));if(!(p<2)){h.strip();for(let _=0;_<p;_++)h.p(f.pts[_*3],f.pts[_*3+1],f.pts[_*3+2],f.w,u.r,u.g,u.b,f.a*d*r);h.endStrip()}}h.end(),this.elec=Math.max(l,this.afterT)}flashRing(e){e>=0&&e<3&&(this.ringFlash[e]=1),this.themeScene&&this.themeScene.onNote&&this.themeScene.onNote(e)}setView(e){this.view=e,this._layoutArm(e.aspect<.9?"port":"land"),this.themeScene&&this.themeScene.layout&&this.themeScene.layout(e)}async _applyManifest(){let e=this.manifest,t=e.record||{},[n,i]=await Promise.all([En(t.texture),En(t.label)]);n&&n.texture&&(this.vinylMat.map=n.texture,this.vinylMat.needsUpdate=!0),i&&i.texture&&(this.customLabel=!0,this.labelMat.map=i.texture,this.labelMat.emissiveMap=i.texture,this.labelMat.needsUpdate=!0);let r=await En(t.model);if(r&&r.kind==="model"){let{object:l,mixer:c}=Ks(r,wi*2*(r.opts.size||1));this.disc.visible=!1,this.label.visible=!1,this.recordSpin.add(l),this.mixers.push(c)}let a=await En((e.tonearm||{}).model);if(a&&a.kind==="model"){let{object:l,mixer:c}=Ks(a,cn*1.2*(a.opts.size||1));l.position.z=cn*.45;for(let h of this.armProcedural)h.visible=!1;this.armTilt.add(l),this.mixers.push(c)}let o=await En(e.turntable);if(o&&o.kind==="model"){let{object:l,mixer:c}=Ks(o,o.opts.size||2.2);l.position.y=-.04-(o.opts.sink||0),this.root.add(l),this.mixers.push(c)}}get mixers(){return this._mixers||(this._mixers=[])}resize(e){this.root.scale.setScalar(e),this.armLight.distance=.35*e,this.starMat.size=.035*e,this.dustMat.size=.006*e}_setLabel(e,t){this.labelArtMat||(this.labelArtMat=new et({color:14277081}));let n=t?this.labelArtMat.map:this.labelMat.map;t?(this.labelArtMat.map=e,this.labelArtMat.needsUpdate=!0,this.label.material=this.labelArtMat):(this.labelMat.map=e,this.labelMat.emissiveMap=e,this.labelMat.emissiveIntensity=.35,this.labelMat.needsUpdate=!0,this.label.material=this.labelMat),this.label.scale.setScalar(t?1.28:1),this.labelGlow.material.opacity=t?0:.35,n&&n!==e&&(t||n.userData.generated)&&n.dispose()}setTheme(e,t){var r,a,o,l,c,h;if(this.themeKey===e)return;this.themeKey=e,this.themeScene&&Em(this.themeScene);let n=this.themeScene=Tm(e,this);if(this.root.add(n.group),this.view&&n.layout&&n.layout(this.view),this.themeBackground=n.background||null,this.vinylMat.color.set(n.vinyl||"#ffffff"),this.armMetal.color.set(n.armMetal||"#cfd5e0"),this.starMat.opacity=(r=n.stars)!=null?r:1,this.stars.visible=((a=n.stars)!=null?a:1)>0,this.nebula.forEach(u=>{var d,f;u.material.opacity=(d=n.nebula)!=null?d:.22,u.visible=((f=n.nebula)!=null?f:.22)>0}),this.dustMat.opacity=(o=n.dust)!=null?o:.3,this.dust.visible=((l=n.dust)!=null?l:.3)>0,this.sheen.material.opacity=(c=n.sheen)!=null?c:.12,this.strobe.visible=!!n.strobe,this.spindle.visible=!n.noSpindle,this.bloomBase=(h=n.bloom)!=null?h:.45,!this.customLabel){this.labelMat.map&&this.labelMat.map.userData.generated&&this.labelMat.map.dispose();let u=tm(t.sun);u.userData.generated=!0,this._setLabel(u,!1),n.labelPromise.then(d=>{d&&this.themeScene===n&&!this.customLabel&&this._setLabel(d,!0)})}this.labelGlow.material.color.set(t.sun),this.centerLight.color.set(t.sun),this.hemi.color.set(t.sf),this.hemi.groundColor.set(t.bg1),this.rim.color.set(t.star),this.starMat.color.set(Uc(t.sf,.4)),this.dustMat.color.set(t.star);let i=[t.bg1,t.peril,t.player];this.nebula.forEach((u,d)=>u.material.color.set(Uc(i[d%i.length],.1))),this.ringColor=this.themeScene&&this.themeScene.ringColor||t.star,this.ringStyle=null}setRingStyle(e){var r;if(this.ringStyle===e)return;this.ringStyle=e;let t=this.themeScene||{},n=new le(t.ringBaseColor||"#d8d2c8"),i=new le(t.ringFlash||this.ringColor||"#ffcf7a");for(let a of this.rings)a.baseCol=n,a.flashCol=i,a.baseOp=(r=t.ringBase)!=null?r:.12,a.core.material.color.copy(n),a.core.material.opacity=a.baseOp,a.halo.material.color.copy(i),a.halo.material.opacity=0,a.twin.visible=!1}update(e,t,n){let i=n.inGame?.35+(n.player?n.player.speed*.12:0):.25;this.recordSpin.rotation.y-=i*e/60,this.stars.rotation.y+=4e-4*e;let r=1+Math.sin(t*2)*.05;this.labelGlow.scale.setScalar(Td*4*r),this.centerLight.intensity=.6+Math.sin(t*2)*.1;let a=this.dust.geometry.attributes.position.array,o=this.dustSeed;for(let c=0;c<o.length/3;c++){let h=o[c*3]+t*.03*(c%3+1),u=o[c*3+1];a[c*3]=Math.cos(h)*u,a[c*3+1]=o[c*3+2]+Math.sin(t*.6+c)*.01,a[c*3+2]=Math.sin(h)*u}this.dust.geometry.attributes.position.needsUpdate=!0,this._updateElectric(e,t,n),this.themeScene&&this.themeScene.update&&this.themeScene.update(e,t,n);let l=this.elec>0?this.elec*(.6+Math.random()*.4):0;for(let c=0;c<3;c++){let h=this.rings[c];if(!h.baseCol)continue;this.ringFlash[c]=Math.max(0,this.ringFlash[c]-e*.045);let u=this.ringFlash[c]*this.ringFlash[c];h.core.material.color.copy(h.baseCol).lerp(h.flashCol,Math.min(1,u*1.1)).lerp(this._elecCol,l),h.core.material.opacity=Math.min(1,h.baseOp+u*.38+l*.6),h.halo.material.color.copy(h.flashCol).lerp(this._elecCol,l),h.halo.material.opacity=u*.1+l*.35}for(let c of this.mixers)c&&c.update(e/60)}};var Qr={hazard:["#ff3b3b","#ffb340"],hazardJump:["#3b8bff","#ff5fd0"],hazardBomb:["#3bea6a","#2fd9ff"],hazardPull:["#ffd23b","#ff6a2a"],hazardTwin:["#b04bff","#4fd2ff"],hazardTwinDecoy:["#b04bff","#4fd2ff"],hazardPulse:["#ff8a1f","#ff3b6b"],hazardCreep:["#ff4fd8","#8a5bff"]},Pd=1.6,Kc=null;function Tv(s){return()=>(s=s*16807%2147483647)/2147483647}function Ev(){if(Kc)return Kc;let s=Tv(91),e=[],t=14,n=80,i=7;for(let r=0;r<t;r++){let a=s()*2-1,o=s()*Math.PI*2,l=new P(Math.sqrt(1-a*a)*Math.cos(o),a,Math.sqrt(1-a*a)*Math.sin(o)),c=new P(1,0,0);Math.abs(l.x)>.9&&c.set(0,1,0);let h=new P().crossVectors(l,c).normalize(),u=new P().crossVectors(l,h),d=.06+s()*.08,f=2+Math.floor(s()*3),p=s()*6.28,_=Pd*(.86+s()*.14),g=[];for(let b=0;b<24;b++){let A=b/24*Math.PI*2,x=_*(1+d*Math.sin(A*f+p));g.push(new P().addScaledVector(h,Math.cos(A)*x).addScaledVector(u,Math.sin(A)*x).addScaledVector(l,Math.sin(A*f+p)*d*_*.6))}let m=new hs(g,!0),M=new Os(m,n,.075+s()*.035,i,!0),w=r%3===1,y=M.attributes.position.count,T=new Float32Array(y);T.fill(w?1:0),M.setAttribute("aSide",new lt(T,1)),e.push(M)}for(let r=0;r<6;r++){let a=s()*2-1,o=s()*Math.PI*2,l=new P(Math.sqrt(1-a*a)*Math.cos(o),a,Math.sqrt(1-a*a)*Math.sin(o)),c=new ki(.09,.26,6);c.translate(0,Pd*1.02+.1,0),c.applyQuaternion(new Tt().setFromUnitVectors(new P(0,1,0),l));let h=c.toNonIndexed&&c.index?c.toNonIndexed():c,u=h.attributes.position.count,d=new Float32Array(u);d.fill(0),h.setAttribute("aSide",new lt(d,1)),h.attributes.uv&&h.deleteAttribute("uv"),e.push(h)}return e.forEach(r=>{if(r.index){let a=r.toNonIndexed();e[e.indexOf(r)]=a}}),e.forEach(r=>{r.attributes.uv&&r.deleteAttribute("uv")}),Kc=Fc(e,!1),Kc}var wm=new Map;function wv(s){let e=wm.get(s);if(e)return e;let[t,n]=Qr[s]||Qr.hazard,i=new le(t),r=new le(n);return e=new Ut({color:16777215,roughness:.35,metalness:.15,emissive:16777215,emissiveIntensity:.55,transparent:s==="hazardTwinDecoy",opacity:s==="hazardTwinDecoy"?.45:1}),e.onBeforeCompile=a=>{a.uniforms.uCa={value:i},a.uniforms.uCb={value:r},a.vertexShader=`attribute float aSide; varying float vSide;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vSide = aSide;`),a.fragmentShader=`uniform vec3 uCa; uniform vec3 uCb; varying float vSide;
`+a.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec3 yarnCol = mix(uCa, uCb, vSide); vec4 diffuseColor = vec4( yarnCol, opacity );").replace("vec3 totalEmissiveRadiance = emissive;","vec3 totalEmissiveRadiance = emissive * yarnCol;")},e.customProgramCacheKey=()=>"yarn",wm.set(s,e),e}var Ad=null;function Av(){return Ad||(Ad=new Ut({color:657426,roughness:.6,metalness:.2,transparent:!0,opacity:.85})),new ne(Am||(Am=new pi(Pd*.78,20,14)),Ad)}var Am=null,Rm=["star","gold","diamond","coin","heart","shield","slow","magnet","mult","hazard","hazardJump","hazardBomb","hazardPull","hazardTwin","hazardTwinDecoy","hazardPulse","hazardCreep"];function Rv(s,e,t,n){let i=[],r=[],a=[];for(let l=0;l<=n;l++){let c=l/n,h=c*t,u=Math.cos(h),d=Math.sin(h);if(i.push(u*(s-e/2),0,d*(s-e/2),u*(s+e/2),0,d*(s+e/2)),r.push(c,0,c,1),l<n){let f=l*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}}let o=new Qe;return o.setAttribute("position",new We(i,3)),o.setAttribute("uv",new We(r,2)),o.setIndex(a),o}var jr=null;function Cv(){if(jr)return jr;let s=document.createElement("canvas");s.width=128,s.height=64;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,64);t.addColorStop(0,"rgba(255,233,168,0.95)"),t.addColorStop(.12,"rgba(255,106,42,0.35)"),t.addColorStop(.88,"rgba(255,106,42,0.35)"),t.addColorStop(1,"rgba(255,233,168,0.95)"),e.fillStyle=t,e.fillRect(0,0,128,64),e.fillStyle="rgba(255,210,59,0.95)";for(let n=-1;n<3;n++)e.beginPath(),e.moveTo(n*64+8,14),e.lineTo(n*64+40,14),e.lineTo(n*64+72,50),e.lineTo(n*64+40,50),e.closePath(),e.fill();return jr=new Sn(s),jr.colorSpace=ot,jr.wrapS=Rn,jr}var Pv=!1,Rd=new Set(["hazard","hazardJump","hazardBomb","hazardPull","hazardTwin","hazardTwinDecoy","hazardPulse","hazardCreep"]),Iv={hazardBomb:1.5,diamond:1,coin:.9,heart:1.1},si=1.55,Lv=[[1.25,-1.15,0],[-1.3,-.5,1.6],[1.35,.75,3.1],[-.9,1.25,4.5],[.2,-1.6,5.6]],uo=null;function Nv(){if(uo)return uo;let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,20);t.addColorStop(0,"rgba(200,255,250,.6)"),t.addColorStop(1,"rgba(120,230,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,20,0,7),e.fill(),e.fillStyle="#fff",e.beginPath();for(let n=0;n<8;n++){let i=n*Math.PI/4,r=n%2?3.5:22;n?e.lineTo(32+Math.cos(i)*r,32+Math.sin(i)*r):e.moveTo(32+Math.cos(i)*r,32+Math.sin(i)*r)}return e.closePath(),e.fill(),uo=new Sn(s),uo.colorSpace=ot,uo}var Dv=22,Uv=160,Zc=new Map;function Ai(s){let e=Zc.get(s);if(!e){e=new le;try{e.setStyle(s)}catch{e.set("#ffffff")}Zc.set(s,e),Zc.size>512&&Zc.clear()}return e}function Fv(s){return new Et({uniforms:{map:{value:s},uScale:{value:500}},vertexShader:`
      attribute float aSize; attribute vec4 aColor; varying vec4 vColor; uniform float uScale;
      void main(){ vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0);
        gl_PointSize = aSize*uScale/max(0.001,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`
      uniform sampler2D map; varying vec4 vColor;
      void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vColor.rgb, vColor.a*t.a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,blending:dt})}var Jc=class{constructor(e,t){this.cap=e,this.pos=new Float32Array(e*3),this.size=new Float32Array(e),this.color=new Float32Array(e*4);let n=new Qe;n.setAttribute("position",new lt(this.pos,3).setUsage(Si)),n.setAttribute("aSize",new lt(this.size,1).setUsage(Si)),n.setAttribute("aColor",new lt(this.color,4).setUsage(Si)),n.setDrawRange(0,0),this.geo=n,this.mat=Fv(t),this.obj=new di(n,this.mat),this.obj.frustumCulled=!1,this.n=0}begin(){this.n=0}push(e,t,n,i,r,a){if(this.n>=this.cap)return;let o=this.n++;this.pos[o*3]=e,this.pos[o*3+1]=t,this.pos[o*3+2]=n,this.size[o]=i,this.color[o*4]=r.r,this.color[o*4+1]=r.g,this.color[o*4+2]=r.b,this.color[o*4+3]=a}end(){let e=this.geo;e.setDrawRange(0,this.n),e.attributes.position.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0}setMap(e){this.mat.uniforms.map.value=e}};function Cm(s,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.strokeStyle=s,n.lineWidth=e?5:6,e&&n.setLineDash([12,14]),n.shadowColor=s,n.shadowBlur=10,n.beginPath(),n.arc(64,64,52,0,Math.PI*2),n.stroke();let i=new Sn(t);return i.colorSpace=ot,i}function Ov(){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.strokeStyle="rgba(0,0,0,.55)",e.lineWidth=12,e.beginPath(),e.arc(64,64,50,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.95)",e.lineWidth=5,e.beginPath(),e.arc(64,64,50,0,Math.PI*2),e.stroke();let t=new Sn(s);return t.colorSpace=ot,t}function Cd(s,e,t){let n=new ve(1,1);return n.rotateX(-Math.PI/2),new ne(n,new et({map:s,transparent:!0,opacity:e,depthWrite:!1,blending:t?dt:Ki}))}var $c=class{constructor(e,t,n){this.scene=e,this.manifest=t||{},this.hooks=n||{},this.group=new ge,e.add(this.group),this.defs={},this.fallbackTex=new Map,this.pool=new Map,this.live=new Map,this.frame=0,this.ready=this._resolveManifest().catch(()=>{}),this._buildPlayer(),this.trail=new Jc(140,Kr()),this.scratch={batch:new Jr(300),pts:[],sparks:[],sparkAcc:0,flare:0},this.group.add(this.scratch.batch.mesh),this.ripples=[];for(let i=0;i<5;i++){let r=new zi(.9,1,64);r.rotateX(-Math.PI/2);let a=new ne(r,new et({transparent:!0,opacity:0,depthWrite:!1,blending:dt}));a.visible=!1,this.group.add(a),this.ripples.push({mesh:a,life:0,x:0,z:0})}this.lastNotes=0,this.particles=new Jc(900,Kr()),this.particles.mat.blending=Ki,this.group.add(this.trail.obj,this.particles.obj)}async _resolveManifest(){let e=this.manifest.items||{};await Promise.all(Rm.map(async a=>{let o=e[a]||(a==="hazardTwinDecoy"?e.hazardTwin:null);this.defs[a]=await En(o)}));let t=this.manifest.player||{};this.playerDefault=await En(t.default),this.playerSkinDefs={};for(let a of Object.keys(t.skins||{}))this.playerSkinDefs[a]=await En(t.skins[a]);let n=this.manifest.particles||{},i=await En(n.spark);i&&i.texture&&this.particles.setMap(i.texture);let r=await En(n.trail);r&&r.texture&&this.trail.setMap(r.texture),this.defsVersion=(this.defsVersion||0)+1;for(let[a,o]of this.live)this._release(o);this.live.clear()}_fallbackTexture(e,t){let n=e==="hazardTwinDecoy"?"hazardTwin":e,i=n+"|"+t;if(this._fbStyle!==t){for(let[a,o]of this.fallbackTex)a.endsWith("|"+t)||(o.tex.dispose(),this.fallbackTex.delete(a));this._fbStyle=t}let r=this.fallbackTex.get(i);if(!r){let a=document.createElement("canvas");a.width=a.height=Uv;let o=new Sn(a);o.colorSpace=ot,r={canvas:a,tex:o,ready:!1,lastTry:-999,type:n},this.fallbackTex.set(i,r)}return!r.ready&&this.frame-r.lastTry>20&&this.hooks.paintItem&&(r.lastTry=this.frame,r.ready=!!this.hooks.paintItem(r.type,r.canvas),r.tex.needsUpdate=!0),r.tex}_poolKey(e){let t=this.defs[e];return e+"|"+(t?t.kind:"fb")+"|"+(this.defsVersion||0)}_create(e){let t=this.defs[e],n=new ge,i={type:e,def:t,root:n,body:null,mat:null,glow:null,mixer:null,key:this._poolKey(e)},r=new ne(this._shadowGeo||(this._shadowGeo=(()=>{let o=new ve(1,1);return o.rotateX(-Math.PI/2),o})()),this._shadowMat||(this._shadowMat=new et({map:Yr(),transparent:!0,opacity:.55,depthWrite:!1})));r.scale.setScalar(2.2),r.position.y=.02,n.add(r),i.shadow=r;let a=(Iv[e]||1)*(t&&t.opts.size||1);if(Pv&&!t&&Rd.has(e)){let o=new ge;return o.add(Av()),o.add(new ne(Ev(),wv(e))),o.position.y=si,o.scale.setScalar(a),n.add(o),i.body=o,i.yarn=!0,i.yarnSize=a,i.glow=new Gt(new Ot({map:ni(),color:(Qr[e]||Qr.hazard)[0],transparent:!0,opacity:.5,depthWrite:!1,depthTest:!1,blending:dt})),i.glow.position.y=si,i.glow.scale.setScalar(4.4*a),i.yarnGlowCol=(Qr[e]||Qr.hazard)[0],n.add(i.glow),i}if(t&&t.kind==="model"){let{object:o,mixer:l}=Ks(t,2.6*a);o.position.y=si,n.add(o),i.body=o,i.mixer=l}else{let o=t?t.texture:null;i.mat=new Ot({map:o,transparent:!0,depthWrite:!1,depthTest:!1}),i.body=new Gt(i.mat),i.body.position.y=si,i.baseScale=t?2.6*a:2*2.6,i.body.scale.setScalar(i.baseScale),n.add(i.body)}return e==="diamond"&&(i.sparks=Lv.map(o=>{let l=new Gt(new Ot({map:Nv(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt}));return l.position.set(o[0],si-o[1],.01),l.userData.phase=o[2],n.add(l),l})),t&&t.opts.glow!==!1&&(i.glow=new Gt(new Ot({map:ni(),transparent:!0,opacity:.55,depthWrite:!1,depthTest:!1,blending:dt})),i.glow.position.y=si,i.glow.scale.setScalar(4.6*a),n.add(i.glow)),i}warmBegin(e){return Rm.map(n=>{let i=this._acquire(n);return!i.def&&i.mat&&fo(i.mat,this._fallbackTexture(n,e)),i.root.position.set(0,-1e4,0),i.root.traverse(r=>{r.userData.warmCull=r.frustumCulled,r.frustumCulled=!1}),i})}warmEnd(e){for(let t of e)t.root.traverse(n=>{"warmCull"in n.userData&&(n.frustumCulled=n.userData.warmCull,delete n.userData.warmCull)}),this._release(t)}_acquire(e){let t=this._poolKey(e),n=this.pool.get(t),i=n&&n.length?n.pop():this._create(e);return i.root.visible=!0,this.group.add(i.root),i}_release(e){this.group.remove(e.root),e.bossRing&&(e.bossRing.visible=!1),this.pool.has(e.key)||this.pool.set(e.key,[]),this.pool.get(e.key).push(e)}_itemColor(e,t,n){let i=t.theme;return e==="hazardPull"?"#ffb454":e==="hazardTwin"||e==="hazardTwinDecoy"?"#ff8a3d":e==="hazardPulse"?n&&n.pulseDanger===!1?"#ffd9dc":"#ff3b52":e==="hazardCreep"?"#d94a1f":Rd.has(e)?i.peril:e==="star"?i.star:e==="gold"?i.gold:e==="coin"?"#ffb454":e==="heart"?"#ff5d8f":e==="diamond"?"#fff4e0":"#ffffff"}_updateItems(e,t,n,i){let r=new Set,a=gn*e.base+.5;if(e.inGame)for(let o of e.items){if(!o.alive)continue;let l=e.easeOut(Math.max(0,o.pop));if(l<=0)continue;let c=this.live.get(o);c&&c.key!==this._poolKey(o.type)&&(this._release(c),c=null),c||(c=this._acquire(o.type),this.live.set(o,c)),r.add(o);let h=e.RINGS[o.ring],u=e.PLAYER_R*.95*l;c.root.position.set(Math.cos(o.ang)*h,a,Math.sin(o.ang)*h),c.root.scale.setScalar(u),this._animateItem(c,o,t,n,e,i)}for(let[o,l]of this.live)r.has(o)||(this._release(l),this.live.delete(o));this._updateSeals(e,t,a)}_updateSeals(e,t,n){this.seals||(this.seals=new Map);let i=new Set;if(e.inGame)for(let r of e.items){if(!r.alive||r.type!=="hazardPull"||r.bossStatic)continue;let a=Math.max(0,Math.min(1,r.pop));if(a<=0)continue;let o=e.RINGS[r.ring],l=e.PLAYER_R*1.5,c=o.toFixed(1)+"|"+l.toFixed(1),h=this.seals.get(r);if(h&&h.userData.key!==c&&(this.group.remove(h),h.geometry.dispose(),h.material.dispose(),h=null),!h){let d=Cv().clone();d.needsUpdate=!0,d.repeat.x=14,h=new ne(Rv(o,l,Math.PI,72),new et({map:d,transparent:!0,depthWrite:!1,blending:dt,side:Vt,forceSinglePass:!0})),h.userData.key=c,h.renderOrder=2,this.group.add(h),this.seals.set(r,h)}i.add(r),h.position.y=n+.15,h.rotation.y=-(r.ang-Math.PI),h.material.map.offset.x=-t*1.6,h.material.opacity=Math.min(1,a*(.8+Math.sin(t*5)*.12)+(r.sealBump||0)*.8);let u=1+(r.sealBump||0)*.04;h.scale.set(u,1,u)}for(let[r,a]of this.seals)i.has(r)||(this.group.remove(a),a.geometry.dispose(),a.material.map.dispose(),a.material.dispose(),this.seals.delete(r))}_animateItem(e,t,n,i,r,a){let o=t.type,l=e.def,c=Rd.has(o),h=o==="star"||o==="gold"?Math.sin(n*3.2+t.ang*3)*.32:o==="diamond"?0:Math.sin(n*2.4+t.ang*3)*.14,u=1,d=1,f=0,p=1;if(c?(f=o==="hazardJump"?0:n*(o==="hazardCreep"?1.1:o==="hazardPulse"?1:.6),o==="hazardPulse"&&(u=(.55+(Math.sin(t.pulsePhase||0)*.5+.5)*.85)/.975,t.pulseDanger||(d=.55)),o==="hazardTwinDecoy"&&(d=.4+Math.sin(n*9)*.25),d*=.82+Math.random()*.18):o==="coin"?p=.35+.65*Math.abs(Math.cos(n*1.6+t.ang*2)):o==="diamond"?(p=1,u=1.08):o==="heart"&&(u=1+Math.sin(n*5)*.08),e.yarn){let _=t.ang*7.3,g=o==="hazardCreep"?1.6:o==="hazardPulse"?1.2:1;e.body.rotation.set(n*.55*g+_,n*.8*g+_*.7,n*.35*g),e.body.scale.setScalar(e.yarnSize*u),e.body.position.y=si+h,e.glow&&(e.glow.position.y=si+h,e.glow.material.color.set(e.yarnGlowCol),e.glow.material.opacity=.42*d),e.shadow.material.opacity=.5}else e.mat?(l?l.kind==="sheet"&&xd(l,n):fo(e.mat,this._fallbackTexture(o,a)),e.mat.rotation=l&&l.opts.spin===!1?0:f,e.mat.opacity=d,e.body.scale.set(e.baseScale*u*p,e.baseScale*u,1)):e.body&&(e.body.rotation.y=l.opts.spin===!1?0:c?f:n*1.5,e.body.scale.setScalar(u),e.mixer&&e.mixer.update(i/60));if(e.yarn||(e.body.position.y=si+h,e.glow&&(e.glow.position.y=si+h,e.glow.material.color.copy(Ai(this._itemColor(o,r,t))),e.glow.material.opacity=.5*d)),e.shadow.material.opacity=.5,e.sparks)for(let _ of e.sparks){let g=Math.max(0,Math.sin(n*2.2+_.userData.phase));_.material.opacity=g,_.scale.setScalar(.35+g*.55),_.material.rotation=n*2+_.userData.phase}if(t.boss){e.bossRing||(e.bossRing=new Gt(new Ot({map:nm(),transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:dt})),e.root.add(e.bossRing));let _=t.type==="hazardBomb"?1.5:t.type==="hazardPulse"?1.4:1;e.bossRing.visible=!0,e.bossRing.position.y=si,e.bossRing.scale.setScalar(2*1.75*_*1.22/(54/64)),e.bossRing.material.rotation=n*1.5,e.bossRing.material.opacity=.55+Math.sin(n*6)*.25}else e.bossRing&&(e.bossRing.visible=!1)}_buildPlayer(){let e=this.player={root:new ge};e.shadow=Cd(Yr(),.6,!1),e.shadow.scale.setScalar(2.6),e.shadow.position.y=.02,e.glow=new Gt(new Ot({map:ni(),transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1,blending:dt})),e.glow.scale.setScalar(4.6),e.mat=new Ot({transparent:!0,depthWrite:!1,depthTest:!1}),e.sprite=new Gt(e.mat),e.sprite.scale.setScalar(2.7),e.shield=new Gt(new Ot({map:Cm("#5efc82",!1),transparent:!0,depthWrite:!1,depthTest:!1,blending:dt})),e.shield.scale.setScalar(4),e.halo=new Gt(new Ot({map:Yr(),transparent:!0,opacity:.6,depthWrite:!1,depthTest:!1})),e.halo.scale.setScalar(4.4),e.outlineMat=new Ot({transparent:!0,depthWrite:!1,depthTest:!1}),e.outline=new Gt(e.outlineMat),e.locator=Cd(Ov(),.8,!1),e.locator.position.y=.04,e.locator.renderOrder=9,e.halo.renderOrder=10,e.glow.renderOrder=11,e.outline.renderOrder=12,e.sprite.renderOrder=13,e.shield.renderOrder=14,e.magnet=Cd(Cm("#ff7ae0",!0),.6,!0),e.magnet.scale.setScalar(6.4),e.magnet.position.y=.06,e.light=new _i(16777215,1.8,100,0),e.root.add(e.shadow,e.locator,e.halo,e.glow,e.outline,e.sprite,e.shield,e.magnet,e.light),this.group.add(e.root),this.penaTex=new Map,this.penaOutline=new Map}_penaOutlineTexture(e,t){let n=this.penaOutline.get(e);if(n)return n;if(!t||!t.complete||!t.naturalWidth)return null;let i=t.naturalWidth,r=t.naturalHeight,a=Math.max(3,Math.round(i*.04)),o=document.createElement("canvas");o.width=i,o.height=r;let l=o.getContext("2d");for(let c=0;c<16;c++){let h=c/16*Math.PI*2;l.drawImage(t,Math.cos(h)*a,Math.sin(h)*a,i,r)}return l.globalCompositeOperation="source-in",l.fillStyle="#ffffff",l.fillRect(0,0,i,r),n=new Sn(o),n.colorSpace=ot,this.penaOutline.set(e,n),n}_penaTexture(e,t){let n=this.penaTex.get(e);return!n&&t&&(n=new zt(t),n.colorSpace=ot,t.complete&&t.naturalWidth>0?n.needsUpdate=!0:t.addEventListener("load",()=>{n.needsUpdate=!0},{once:!0}),this.penaTex.set(e,n)),n||null}_updatePlayer(e,t,n){let i=this.player,r=e.player,a=(e.inGame||e.inMenu)&&r;if(i.root.visible=!!a,!a)return;let o=r.curRadius,l=e.PLAYER_R;i.root.position.set(Math.cos(r.ang)*o,gn*e.base+.5,Math.sin(r.ang)*o),i.root.scale.setScalar(l);let h=1.12+(e.inGame?Math.sin(t*47)*.035+Math.sin(t*31)*.025:Math.sin(t*3)*.05),u=this.playerSkinDefs&&this.playerSkinDefs[e.skin]||this.playerDefault||null;if(u&&u.kind==="model"){if(i.modelDef!==u){i.model&&i.root.remove(i.model);let p=Ks(u,2.7*(u.opts.size||1));i.model=p.object,i.mixer=p.mixer,i.modelDef=u,i.root.add(i.model)}i.sprite.visible=!1,i.model.visible=!0,i.model.position.y=h,i.model.rotation.y=-r.ang,i.mixer&&i.mixer.update(n/60)}else{i.model&&(i.model.visible=!1),i.sprite.visible=!0,u?(fo(i.mat,u.texture),u.kind==="sheet"&&xd(u,t)):fo(i.mat,this._penaTexture(e.skin,e.skinImg)),i.sprite.visible=!!i.mat.map,i.sprite.position.y=h,i.sprite.scale.setScalar(3*(u&&u.opts.size||1));let p=u?u.kind==="image"?this._penaOutlineTexture("m:"+(e.skin||""),u.texture.image):null:this._penaOutlineTexture(e.skin,e.skinImg);fo(i.outlineMat,p),i.outline.visible=i.sprite.visible&&!!p,i.outline.position.y=h,i.outline.scale.copy(i.sprite.scale);let _=Math.max(-1,Math.min(1,(Bv(e)-o)/(l*4)));i.mat.rotation=i.outlineMat.rotation=-_*.35+(e.inGame?Math.sin(t*39)*.04:0)}let d=r.invulT>0&&Math.floor(r.invulT/4)%2===0,f=d?0:1;if(i.mat.opacity=f,i.outlineMat.opacity=.95*f,i.halo.position.y=h*.9,i.halo.material.opacity=.6*f,i.locator.visible=!!e.inGame,e.inGame){let p=Math.sin(t*4);i.locator.scale.setScalar(3.3+p*.15),i.locator.material.opacity=(.6+p*.15)*(d?.4:1)}i.model&&(i.outline.visible=!1),i.model&&(i.model.visible=i.model.visible&&!d),i.glow.position.y=.35,i.glow.scale.setScalar(3.6),i.glow.material.color.copy(Ai(e.playerColor)),i.glow.material.opacity=.4*f,i.light.color.copy(Ai(e.playerColor)),i.light.position.y=h*.9,i.light.distance=l*14,i.shield.visible=r.shieldHits>0,i.shield.visible&&(i.shield.position.y=h,i.shield.material.opacity=.8+Math.sin(t*8)*.2),i.magnet.visible=r.magnetT>0,i.magnet.visible&&(i.magnet.rotation.y=t*1.6,i.magnet.material.opacity=.45+Math.sin(t*6)*.2)}_scratchColor(e,t,n,i,r){let a=this._tmpCol||(this._tmpCol=new le);switch(e){case"rainbow":return a.setHSL((i*60+t*9)%360/360,.9,.62);case"sparkle":return Ai(t%3===0?"#ffffff":"#fff2c4");case"quantum":return(t>>2)%2===0?r:Ai("#7fe8ff");case"phantom":return Ai("#eaf2ff");case"season1_trail":return Ai((t>>2)%2===0?"#54e0ff":"#fff6c8");case"season2_trail":return a.setHSL((28+Math.sin(i*3-t*.2)*10)/360,.95,.55);case"pixel":return r;default:return r}}_updateScratch(e,t,n){let i=this.scratch,r=e.player,a=e.PLAYER_R,o=t,l=3,c=e.recordAngle||0,h=Math.cos(c),u=Math.sin(c),d=(e.inGame||e.inMenu)&&r,f=gn*e.base+.9,p=Ai(e.playerColor);if(d){let x=r.curRadius,v=Math.cos(r.ang)*x,R=Math.sin(r.ang)*x,L=v*h-R*u,N=v*u+R*h,U=i.pts[i.pts.length-1],C=U?Math.hypot(L-U.x,N-U.z):1/0;C>a*6?i.pts.push({x:L,z:N,born:o,brk:!0}):C>a*.22&&i.pts.push({x:L,z:N,born:o,brk:!1}),i.pts.length>290&&i.pts.splice(0,i.pts.length-290);let D=(e.inGame?.35+Math.min(1.2,(r.speed-1.5)*.6):.12)*(e.trail==="sparkle"?2.2:1);for(i.sparkAcc+=D*n;i.sparkAcc>=1&&(i.sparkAcc-=1,!(i.sparks.length>=120));){let O=Math.random()*Math.PI*2,k=(.6+Math.random()*1.6)*a*.06;i.sparks.push({x:v,y:f,z:R,vx:Math.cos(O)*k,vy:(.5+Math.random())*a*.07,vz:Math.sin(O)*k,life:1,hot:Math.random()<.6})}}for(;i.pts.length&&o-i.pts[0].born>l*1.5;)i.pts.shift();let _=a*Dv*(e.trail==="comet"?1.4:1),g=i.dist||(i.dist=new Float32Array(512));{let x=i.pts.length;x&&(g[x-1]=0);for(let R=x-2;R>=0;R--){let L=i.pts[R],N=i.pts[R+1];g[R]=N.brk?1/0:g[R+1]+Math.hypot(N.x-L.x,N.z-L.z)}let v=0;for(;v<x&&g[v]>_;)v++;v&&(i.pts.splice(0,v),g.copyWithin(0,v,x))}i.flare=Math.max(0,i.flare-n*.035);let m=i.batch;m.begin(),m.strip();let M=e.trail,w=i.pts.length,y=Ai("#ffffff"),T=M==="comet"?l*1.5:l,b=M==="comet"?1.35:M==="phantom"?1.2:1;for(let x=0;x<w;x++){let v=i.pts[x],R=o-v.born,L=Math.max(0,Math.min(1-R/T,(_-g[x])/(_*.6)));if((v.brk||M==="pixel"&&x%4===0)&&(m.endStrip(),m.strip()),M==="pixel"&&x%4===3)continue;let N=Math.max(0,1-R/.3),U=this._scratchColor(M,w-x,R,t,p),C=Math.min(1,N*.75+i.flare*.35),D=U.r+(y.r-U.r)*C,O=U.g+(y.g-U.g)*C,k=U.b+(y.b-U.b)*C,K=a*(.42+N*.45+i.flare*.35*L)*b,X=Math.min(1,Math.pow(L,1.4)*(M==="phantom"?.5:.95)*(1+i.flare*.8)),j=v.x*h+v.z*u,G=-v.x*u+v.z*h;if(M==="ribbon"){let te=Math.hypot(j,G)||1,oe=Math.sin(x*.45-t*3)*a*.45;j+=j/te*oe,G+=G/te*oe}m.p(j,f,G,K,D,O,k,X)}if(d&&w){let x=r.curRadius;m.p(Math.cos(r.ang)*x,f,Math.sin(r.ang)*x,a*.7,1,1,1,1)}m.endStrip(),m.end();let A=this.trail;A.begin();for(let x of i.sparks)x.x+=x.vx*n,x.y+=x.vy*n,x.z+=x.vz*n,x.vy-=a*.006*n,x.vx*=.96,x.vz*=.96,x.life-=.045*n,x.y<f&&(x.y=f,x.vy*=-.3),x.life>0&&A.push(x.x,x.y,x.z,a*.32*x.life,x.hot?y:p,x.life);i.sparks=i.sparks.filter(x=>x.life>0),A.end()}_noteHit(e){let t=e.player,n=t.curRadius;this.scratch.flare=.5,this.onNote&&this.onNote(t.targetRing)}_updateRipples(e,t){let n=e.PLAYER_R,i=gn*e.base+.7;for(let r of this.ripples){if(r.life<=0){r.mesh.visible=!1;continue}r.life-=t*.06;let a=1-Math.max(0,r.life);r.mesh.visible=r.life>0,r.mesh.position.set(r.x,i,r.z),r.mesh.scale.setScalar(n*(1.1+a*2.4)),r.mesh.material.opacity=Math.max(0,r.life)*.5}}_updateParticles(e){let t=this.particles;t.begin();let n=e.PLAYER_R,i=gn*e.base+.5;for(let r of e.particles){if(r.life<=0)continue;let a=i+n*(1.2+(1-r.life)*1.4),o=Math.min(1,(1-r.life)/.12);t.push(r.x-e.CX,a,r.y-e.CY,r.r*r.life*3.2,Ai(r.color),Math.min(1,r.life*1.2)*o*.85)}t.end()}setPointScale(e){this.trail.mat.uniforms.uScale.value=e,this.particles.mat.uniforms.uScale.value=e}update(e,t,n){this.frame++;let i=(n.themeKey||"")+"|"+(n.colorblind?1:0);this._updateItems(n,t,e,i),this._updatePlayer(n,t,e);let r=n.notes||0;n.inGame&&r>this.lastNotes&&this._noteHit(n),this.lastNotes=r,this._updateScratch(n,t,e),this._updateRipples(n,e),this._updateParticles(n)}};function fo(s,e){if(s.map===e)return;let t=!!s.map;s.map=e,t!==!!e&&(s.needsUpdate=!0)}function Bv(s){return s.RINGS[s.player.targetRing]}var Hv={uniforms:{tDiffuse:{value:null},uMax:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
    void main(){ vec4 c=texture2D(tDiffuse,vUv); c.rgb=min(max(c.rgb,vec3(0.0)),vec3(uMax)); gl_FragColor=c; }`},ih={low:{dpr:1.25,minDpr:.85,maxPx:8e5,bloom:!0,bloomScale:.25,msaa:0,fxLights:!1},medium:{dpr:1.5,minDpr:1,maxPx:125e4,bloom:!0,bloomScale:.5,msaa:0,fxLights:!0},high:{dpr:2,minDpr:1.35,maxPx:22e5,bloom:!0,bloomScale:1,msaa:4,fxLights:!0}},jc=["low","medium","high"],wt,_n,mt,Jt,Ri,Lm,Nt,Un,Vn=1,Dn=1,ri=1,$s="auto",js="medium",Qs=!1,Id=null,Ci=1,sh=!1,nh="",mo="medium";function kv(s){try{let i=s.getExtension("WEBGL_debug_renderer_info");nh=String(i?s.getParameter(i.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER)||"")}catch{nh=""}let e=nh.toLowerCase(),t=navigator.deviceMemory||0,n;return/apple/.test(e)?"medium":(n=e.match(/adreno[^0-9]*(\d{3})/))?+n[1]>=640?"medium":"low":(n=e.match(/mali-g(\d+)/))?+n[1]>=68?"medium":"low":/immortalis|xclipse/.test(e)?"medium":/mali|powervr|sgx|vivante|tegra|videocore/.test(e)||t&&t<=3?"low":"medium"}var Js={tilt:68,fov:38,zoom:1},rh=null,Qc=new P,po={aspect:1,tilt:0,ground(s,e,t){if(!mt)return null;Qc.set(s,e,.5).unproject(mt).sub(mt.position).normalize();let n=mt.position,i=((t||0)*ri-n.y)/Qc.y;return i>0?{x:(n.x+Qc.x*i)/ri,z:(n.z+Qc.z*i)/ri}:null}},rt={acc:0,frames:0,lowFor:0,highFor:0,downgraded:!1,dprDropped:!1,value:60},ea=0;function zv(){if(!wt||!Ri)return;let s=wt.getRenderTarget(),e=[...Ri.renderTargetsHorizontal||[],...Ri.renderTargetsVertical||[],Ri.renderTargetBright,Jt&&Jt.renderTarget1,Jt&&Jt.renderTarget2].filter(Boolean);for(let t of e)wt.setRenderTarget(t),wt.clear(!0,!0,!0);wt.setRenderTarget(s),ea=0}function Nm(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function Gv(s){if(wt)return!0;if(!Nm())return!1;let e=s.manifest||{};Id=s.onFail||null,$s=s.quality||"auto",Object.assign(Js,e.camera||{});try{wt=new Rc({canvas:s.canvas,antialias:!1,alpha:!1,powerPreference:"high-performance"})}catch(t){return console.warn("[Render3D] WebGL ba\u015Flat\u0131lamad\u0131",t),!1}return mo=kv(wt.getContext()),wt.outputColorSpace=ot,wt.toneMapping=zs,wt.toneMappingExposure=e.exposure||1.05,s.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),Fm("context-lost")}),_n=new Sa,_n.background=new le("#170a08"),mt=new Kt(Js.fov,1,1,1e4),Nt=new Yc(_n,e),Un=new $c(_n,e,s.hooks||{}),Un.onNote=t=>Nt.flashRing(t),En((e.background||{}).image).then(t=>{t&&t.texture&&(rh=t,_n.background=t.texture,Um())}),Lm=new Nc(_n,mt),ah($s==="auto"?mo:$s),!0}function Dm(s){if(Jt&&(Jt.dispose(),Jt=null,Ri=null),!s.bloom||sh)return;let e=new Ft(1,1,{type:jt,samples:s.msaa});Jt=new Lc(wt,e),Jt.addPass(Lm),Jt.addPass(new Xr(Hv)),Ri=new qr(new he(1,1),.45,.4,.85),Jt.addPass(Ri),Jt.addPass(new Dc)}function go(s){let e=Vn>1&&Dn>1?Math.sqrt(s.maxPx/(Vn*Dn)):1/0;return Math.max(.75,Math.min(window.devicePixelRatio||1,s.dpr,e))}function Pm(s){return Math.min(s.minDpr,go(s))}function Vv(s){Nt&&Nt.armLight&&(Nt.armLight.visible=s),Un&&Un.player&&Un.player.light&&(Un.player.light.visible=s)}function ah(s,e){js=s;let t=ih[s];Ci=go(t),sh=!1,wt.setPixelRatio(Ci),Dm(t),e||Vv(t.fxLights),_o(Vn,Dn,ri)}function Im(s){Ci=s,wt.setPixelRatio(s),_o(Vn,Dn,ri)}function Wv(s){$s=s,rt.downgraded=!1,rt.dprDropped=!1,rt.lowFor=0,rt.highFor=0,wt&&ah(s==="auto"?mo:s)}function Ld(s){if(!s||!s.image)return;let e=s.image,t=e.width/e.height,n=Vn/Dn;t>n?(s.repeat.set(n/t,1),s.offset.set((1-n/t)/2,0)):(s.repeat.set(1,t/n),s.offset.set(0,(1-t/n)/2))}function Um(){rh?Ld(rh.texture):Nt&&Nt.themeBackground&&Ld(Nt.themeBackground)}function _o(s,e,t){if(Vn=s,Dn=e,ri=t||Math.min(s,e),!wt)return;let n=go(ih[js]);Ci>n+.01&&(Ci=n,wt.setPixelRatio(n)),wt.setSize(Vn,Dn,!1),mt.aspect=Vn/Dn,mt.fov=Js.fov;let i=(Js.zoom||1)*(mt.aspect<.9?Js.portraitZoom||1.15:1),r=ri*.5/i,a=Mi.degToRad(Js.fov)/2,o=Math.atan(Math.tan(a)*mt.aspect),l=Math.max(r/Math.tan(o),r*.85/Math.tan(a))+r*.35,c=Mi.degToRad(Js.tilt);mt.userData.basePos=new P(0,Math.sin(c)*l,Math.cos(c)*l),mt.userData.target=new P(0,0,ri*.015),mt.position.copy(mt.userData.basePos),mt.lookAt(mt.userData.target),mt.near=Math.max(1,l*.02),mt.far=ri*40,mt.updateProjectionMatrix(),mt.updateMatrixWorld(),po.aspect=mt.aspect,po.tilt=c,po.camPos=mt.userData.basePos,po.camUp=new P(0,1,0).applyQuaternion(mt.quaternion),Nt.resize(ri),Nt.setView(po);let h=wt.getPixelRatio();if(Un.setPointScale(Dn*h/(2*Math.tan(a))),Jt){Jt.setPixelRatio(h),Jt.setSize(Vn,Dn);let u=ih[js].bloomScale;Ri.resolution.set(Vn*h*u,Dn*h*u),zv()}Um()}function Xv(s){if(rt.acc+=s,rt.frames++,rt.acc<1e3)return;rt.value=rt.frames*1e3/rt.acc,rt.acc=0,rt.frames=0;let e=ih[js],t=jc.indexOf(js);if(rt.value<50?(rt.lowFor++,rt.highFor=0):rt.value>57?(rt.highFor++,rt.lowFor=0):(rt.lowFor=0,rt.highFor=0),rt.lowFor>=2){if(rt.lowFor=0,Ci>Pm(e)+.01){rt.dprDropped=!0,Im(Math.max(Pm(e),Ci-.15));return}if($s==="auto"&&t>0){rt.downgraded=!0,ah(jc[t-1],!0);return}js==="low"&&!sh&&(sh=!0,Dm(e),_o(Vn,Dn,ri));return}if(rt.highFor>=(rt.dprDropped?15:5)){if(rt.highFor=0,Ci<go(e)-.01){Im(Math.min(go(e),Ci+.1));return}$s==="auto"&&t<jc.indexOf(mo)&&!rt.downgraded&&ah(jc[t+1],!0)}}var eh=0,qv=0;function Yv(s){let e=s.material?Array.isArray(s.material)?s.material:[s.material]:null;if(e)for(let t of e)t.transparent&&t.side===Vt&&!t.forceSinglePass&&(t.forceSinglePass=!0)}function Kv(s){var h;if(!wt||Qs)return;let e=performance.now(),t=eh?e-eh:0,n=eh?Math.min(100,t):16.7;eh=e,t>250?(rt.acc=0,rt.frames=0,rt.lowFor=0,rt.highFor=0,ea=0):s.inMenu?(rt.acc=0,rt.frames=0,rt.lowFor=0,rt.highFor=0):Xv(n);let i=e*.001,r=s.dt||1;if((s.W!==Vn||s.H!==Dn)&&_o(s.W,s.H,s.base),Nt.setTheme(s.themeKey,s.theme),!rh){let u=Nt.themeBackground;u?_n.background!==u&&(_n.background=u,Ld(u)):(_n.background&&_n.background.isColor||(_n.background=new le),_n.background.set(s.theme.bg0))}Nt.setRingStyle(s.ringStyle),++qv%60===1&&_n.traverse(Yv),Nt.update(r,i,s),s.recordAngle=Nt.recordSpin.rotation.y,Un.update(r,i,s);let a=mt.userData.basePos,o=mt.userData.target,l=s.inGame&&s.shake||0,c=1-(s.bossIntensity||0)*.06;mt.position.set(a.x+(Math.random()-.5)*l*1.2,a.y*c+(Math.random()-.5)*l*.6,a.z*c),mt.lookAt(o),ea=Math.min(1,ea+.08*r),Ri&&(Ri.strength=(((h=Nt.bloomBase)!=null?h:.45)+(s.flash||0)*.15+(s.bossIntensity||0)*.3+(Nt.elec||0)*.6)*ea*ea),Jt?Jt.render():wt.render(_n,mt)}function Zv(s){return!wt||Qs?Promise.resolve():Un.ready.then(()=>{if(Qs)return;let e=Un.warmBegin(s||"");try{Jt?Jt.render():wt.render(_n,mt)}finally{Un.warmEnd(e)}}).catch(e=>console.warn("[Render3D] warm",e))}function Fm(s){Qs||(Qs=!0,console.warn("[Render3D] devre d\u0131\u015F\u0131:",s),Id&&Id(s))}var th=new P;function Jv(s,e){if(!wt||!Nt||Qs)return null;let t=wt.domElement.getBoundingClientRect();if(!t.width||!t.height)return null;s==null&&(s=-1/0,e=1/0);let n=u=>(u.project(mt),{x:t.left+(u.x+1)/2*t.width,y:t.top+(1-u.y)/2*t.height}),i=-1/0,r=1/0,a=(u,d)=>u.traverse(f=>{if(!f.isMesh||!f.visible||!f.geometry||!f.geometry.attributes.position)return;let p=f.geometry.attributes.position,_=Math.max(1,Math.floor(p.count/400));for(let g=0;g<p.count;g+=_){th.fromBufferAttribute(p,g),f.localToWorld(th);let m=n(th);d?m.x<r&&(r=m.x):m.x>=s&&m.x<=e&&m.y>i&&(i=m.y)}}),o=Nt.armProcedural||[],l=[o[4],o[7],o[8],o[9],o[10]].filter(u=>u&&u.visible),c=[o[0],o[1],o[2],o[3],o[5],o[6]].filter(u=>u&&u.visible);l.length?(l.forEach(u=>a(u,!1)),c.forEach(u=>a(u,!0))):a(Nt.armTilt,!1);let h=n(Nt.root.localToWorld(th.set(0,gn,-wi)));return{armBottom:i,baseLeft:r,recordTop:h.y}}function $v(){return{quality:js,preference:$s,fps:Math.round(rt.value),dpr:Math.round(Ci*100)/100,bloom:!!Jt,gpu:nh,gpuTier:mo,failed:Qs,missingAssets:_d.slice(),scratchPoints:Un?Un.scratch.pts.length:0,gpuMem:wt?Object.assign({},wt.info.memory):null,themeMs:Nt&&Nt.themeScene?Nt.themeScene.buildMs:null}}window.Render3D={supported:Nm,init:Gv,warm:Zv,resize:_o,render:Kv,setQuality:Wv,info:$v,fail:Fm,menuAnchors:Jv};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
