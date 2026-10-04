(()=>{var hf=0,wh=1,uf=2;var Pa=1,df=2,br=3,ci=0,on=1,zt=2,Pn=0,Ui=1,st=2,Ah=3,Rh=4,ff=5;var Ls=100,pf=101,mf=102,gf=103,_f=104,xf=200,yf=201,vf=202,Mf=203,Ch=204,Ph=205,Sf=206,bf=207,Tf=208,Ef=209,wf=210,Af=211,Rf=212,Cf=213,Pf=214,Ho=0,zo=1,ko=2,hr=3,Go=4,Vo=5,Wo=6,Xo=7,Ih=0,If=1,Lf=2,Wn=0,Ia=1,La=2,Na=3,Da=4,Ua=5,Fa=6,Ns=7,_h="attached",Nf="detached",Lh=300,is=301,Ds=302,yl=303,vl=304,Oa=306,An=1e3,wn=1001,ur=1002,Rt=1003,Ml=1004;var Us=1005;var Ct=1006,Tr=1007;var Xn=1008;var mn=1009,Nh=1010,Dh=1011,Er=1012,Sl=1013,qn=1014,yn=1015,kt=1016,bl=1017,Tl=1018,wr=1020,Uh=35902,Fh=35899,Oh=1021,Bh=1022,vn=1023,ei=1026,ss=1027,El=1028,wl=1029,rs=1030,Al=1031;var Rl=1033,Ba=33776,Ha=33777,za=33778,ka=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Nl=36196,Dl=37492,Ul=37496,Fl=37488,Ol=37489,Ga=37490,Bl=37491,Hl=37808,zl=37809,kl=37810,Gl=37811,Vl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Kl=37817,Zl=37818,Jl=37819,$l=37820,jl=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,Va=36285,sc=36286,Df=2200,Uf=2201,Ff=2202,Ms=2300,Ss=2301,Fo=2302,xh=2303,xs=2400,ys=2401,sa=2402,rc=2500,Of=2501,Hh=0,Wa=1,Ar=2,Bf=3200;var ac=0,Hf=1,Fi="",tt="srgb",sn="srgb-linear",ra="linear",it="srgb";var Oo=7680;var zf=519,kf=512,Gf=513,Vf=514,oc=515,Wf=516,Xf=517,lc=518,qf=519,zh=35044,hi=35048;var kh="300 es",kn=2e3,dr=2001;function fm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yf(){let s=fr("canvas");return s.style.display="block",s}var Md={},pr=null;function aa(...s){let e="THREE."+s.shift();pr?pr("log",e,...s):console.log(e,...s)}function Kf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ae(...s){s=Kf(s);let e="THREE."+s.shift();if(pr)pr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ne(...s){s=Kf(s);let e="THREE."+s.shift();if(pr)pr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function vs(...s){let e=s.join(" ");e in Md||(Md[e]=!0,Ae(...s))}function Zf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Jf={[Ho]:zo,[ko]:Wo,[Go]:Xo,[hr]:Vo,[zo]:Ho,[Wo]:ko,[Xo]:Go,[Vo]:hr},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=1234567,lr=Math.PI/180,bs=180/Math.PI;function Gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function Gh(s,e){return(s%e+e)%e}function mm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gm(s,e,t){return s!==e?(t-s)/(e-s):0}function ta(s,e,t){return(1-t)*s+t*e}function _m(s,e,t,n){return ta(s,e,1-Math.exp(-t*n))}function xm(s,e=1){return e-Math.abs(Gh(s,e*2)-e)}function ym(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Mm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sm(s,e){return s+Math.random()*(e-s)}function bm(s){return s*(.5-Math.random())}function Tm(s){s!==void 0&&(Sd=s);let e=Sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(s){return s*lr}function wm(s){return s*bs}function Am(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Rm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pm(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ui={DEG2RAD:lr,RAD2DEG:bs,generateUUID:Gn,clamp:Ve,euclideanModulo:Gh,mapLinear:mm,inverseLerp:gm,lerp:ta,damp:_m,pingpong:xm,smoothstep:ym,smootherstep:vm,randInt:Mm,randFloat:Sm,randFloatSpread:bm,seededRandom:Tm,degToRad:Em,radToDeg:wm,isPowerOfTwo:Am,ceilPowerOfTwo:Rm,floorPowerOfTwo:Cm,setQuaternionFromProperEuler:Pm,normalize:ct,denormalize:zn},Kh=class Kh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kh.prototype.isVector2=!0;var se=Kh,At=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+x*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zh=class Zh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gc.copy(this).projectOnVector(e),this.sub(Gc)}reflect(e){return this.sub(Gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zh.prototype.isVector3=!0;var P=Zh,Gc=new P,bd=new At,Jh=class Jh{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],g=i[3],m=i[6],M=i[1],A=i[4],v=i[7],E=i[2],b=i[5],w=i[8];return r[0]=a*x+o*M+l*E,r[3]=a*g+o*A+l*b,r[6]=a*m+o*v+l*w,r[1]=c*x+h*M+u*E,r[4]=c*g+h*A+u*b,r[7]=c*m+h*v+u*w,r[2]=d*x+f*M+p*E,r[5]=d*g+f*A+p*b,r[8]=d*m+f*v+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jh.prototype.isMatrix3=!0;var Oe=Jh,Vc=new Oe,Td=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ed=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Im(){let s={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?ra:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[sn]:{primaries:e,whitePoint:n,transfer:ra,toXYZ:Td,fromXYZ:Ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tt},outputColorSpaceConfig:{drawingBufferColorSpace:tt}},[tt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Td,fromXYZ:Ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tt}}}),s}var ze=Im();function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ws,qo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=fr("canvas")),Ws.width=e.width,Ws.height=e.height;let i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lm=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Wc(i[a].image)):r.push(Wc(i[a]))}else r=Wc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}var Nm=0,Xc=new P,Pt=class s extends Vn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=wn,i=wn,r=Ct,a=Xn,o=vn,l=mn,c=s.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Gn(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Lh;Pt.DEFAULT_ANISOTROPY=1;var $h=class $h{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,v=(f+1)/2,E=(m+1)/2,b=(h+d)/4,w=(u+x)/4,_=(p+g)/4;return A>v&&A>E?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=b/n,r=w/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=_/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=_/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$h.prototype.isVector4=!0;var ht=$h,Yo=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Pt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Et=class extends Yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oa=class extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var xl=class xl{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,x,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Um)}lookAt(e,t,n){let i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Wi.crossVectors(n,_n),Wi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Wi.crossVectors(n,_n)),Wi.normalize(),so.crossVectors(_n,Wi),i[0]=Wi.x,i[4]=so.x,i[8]=_n.x,i[1]=Wi.y,i[5]=so.y,i[9]=_n.y,i[2]=Wi.z,i[6]=so.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],A=n[7],v=n[11],E=n[15],b=i[0],w=i[4],_=i[8],S=i[12],R=i[1],L=i[5],U=i[9],H=i[13],I=i[2],O=i[6],W=i[10],V=i[14],j=i[3],q=i[7],$=i[11],J=i[15];return r[0]=a*b+o*R+l*I+c*j,r[4]=a*w+o*L+l*O+c*q,r[8]=a*_+o*U+l*W+c*$,r[12]=a*S+o*H+l*V+c*J,r[1]=h*b+u*R+d*I+f*j,r[5]=h*w+u*L+d*O+f*q,r[9]=h*_+u*U+d*W+f*$,r[13]=h*S+u*H+d*V+f*J,r[2]=p*b+x*R+g*I+m*j,r[6]=p*w+x*L+g*O+m*q,r[10]=p*_+x*U+g*W+m*$,r[14]=p*S+x*H+g*V+m*J,r[3]=M*b+A*R+v*I+E*j,r[7]=M*w+A*L+v*O+E*q,r[11]=M*_+A*U+v*W+E*$,r[15]=M*S+A*H+v*V+E*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],M=l*f-c*d,A=o*f-c*u,v=o*d-l*u,E=a*f-c*h,b=a*d-l*h,w=a*u-o*h;return t*(x*M-g*A+m*v)-n*(p*M-g*E+m*b)+i*(p*A-x*E+m*w)-r*(p*v-x*b+g*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],M=t*o-n*a,A=t*l-i*a,v=t*c-r*a,E=n*l-i*o,b=n*c-r*o,w=i*c-r*l,_=h*x-u*p,S=h*g-d*p,R=h*m-f*p,L=u*g-d*x,U=u*m-f*x,H=d*m-f*g,I=M*H-A*U+v*L+E*R-b*S+w*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return e[0]=(o*H-l*U+c*L)*O,e[1]=(i*U-n*H-r*L)*O,e[2]=(x*w-g*b+m*E)*O,e[3]=(d*b-u*w-f*E)*O,e[4]=(l*R-a*H-c*S)*O,e[5]=(t*H-i*R+r*S)*O,e[6]=(g*v-p*w-m*A)*O,e[7]=(h*w-d*v+f*A)*O,e[8]=(a*U-o*R+c*_)*O,e[9]=(n*R-t*U-r*_)*O,e[10]=(p*b-x*v+m*M)*O,e[11]=(u*v-h*b-f*M)*O,e[12]=(o*S-a*L-l*_)*O,e[13]=(t*L-n*S+i*_)*O,e[14]=(x*A-p*E-g*M)*O,e[15]=(h*E-u*A+d*M)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,x=a*h,g=a*u,m=o*u,M=l*c,A=l*h,v=l*u,E=n.x,b=n.y,w=n.z;return i[0]=(1-(x+m))*E,i[1]=(f+v)*E,i[2]=(p-A)*E,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(d+m))*b,i[6]=(g+M)*b,i[7]=0,i[8]=(p+A)*w,i[9]=(g-M)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Xs.set(i[0],i[1],i[2]).length(),o=Xs.set(i[4],i[5],i[6]).length(),l=Xs.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Fn.copy(this);let c=1/a,h=1/o,u=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=kn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===kn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===dr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=kn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===kn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===dr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xl.prototype.isMatrix4=!0;var De=xl,Xs=new P,Fn=new De,Dm=new P(0,0,0),Um=new P(1,1,1),Wi=new P,so=new P,_n=new P,wd=new De,Ad=new At,Ei=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fm=0,Rd=new P,qs=new At,xi=new De,ro=new P,Wr=new P,Om=new P,Bm=new At,Cd=new P(1,0,0),Pd=new P(0,1,0),Id=new P(0,0,1),Ld={type:"added"},Hm={type:"removed"},Ys={type:"childadded",child:null},qc={type:"childremoved",child:null},vt=class s extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new P,t=new Ei,n=new At,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Oe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Pd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Pd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Wr,ro,this.up):xi.lookAt(ro,Wr,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),qs.setFromRotationMatrix(xi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hm),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zm={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=Gh(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yc(a,r,e+1/3),this.g=Yc(a,r,e),this.b=Yc(a,r,e-1/3)}return ze.colorSpaceToWorking(this,i),this}setStyle(e,t=tt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){let n=$f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return ze.workingToColorSpace(jt.copy(this),e),Math.round(Ve(jt.r*255,0,255))*65536+Math.round(Ve(jt.g*255,0,255))*256+Math.round(Ve(jt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.workingToColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,r=jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=tt){ze.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ao);let n=ta(Xi.h,ao.h,t),i=ta(Xi.s,ao.s,t),r=ta(Xi.l,ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new ae;ae.NAMES=$f;var ca=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},On=new P,yi=new P,Kc=new P,vi=new P,Ks=new P,Zs=new P,Nd=new P,Zc=new P,Jc=new P,$c=new P,jc=new ht,Qc=new ht,eh=new ht,jn=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){On.subVectors(i,t),yi.subVectors(n,t),Kc.subVectors(e,t);let a=On.dot(On),o=On.dot(yi),l=On.dot(Kc),c=yi.dot(yi),h=yi.dot(Kc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return jc.setScalar(0),Qc.setScalar(0),eh.setScalar(0),jc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,n),eh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jc,r.x),a.addScaledVector(Qc,r.y),a.addScaledVector(eh,r.z),a}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),yi.subVectors(e,t),On.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),On.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ks.subVectors(i,n),Zs.subVectors(r,n),Zc.subVectors(e,n);let l=Ks.dot(Zc),c=Zs.dot(Zc);if(l<=0&&c<=0)return t.copy(n);Jc.subVectors(e,i);let h=Ks.dot(Jc),u=Zs.dot(Jc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ks,a);$c.subVectors(e,r);let f=Ks.dot($c),p=Zs.dot($c);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Nd.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Nd,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Ks,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),lo.subVectors(this.max,Xr),Js.subVectors(e.a,Xr),$s.subVectors(e.b,Xr),js.subVectors(e.c,Xr),qi.subVectors($s,Js),Yi.subVectors(js,$s),ps.subVectors(Js,js);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-ps.z,ps.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,ps.z,0,-ps.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-ps.y,ps.x,0];return!th(t,Js,$s,js,lo)||(t=[1,0,0,0,1,0,0,0,1],!th(t,Js,$s,js,lo))?!1:(co.crossVectors(qi,Yi),t=[co.x,co.y,co.z],th(t,Js,$s,js,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,oo=new rn,Js=new P,$s=new P,js=new P,qi=new P,Yi=new P,ps=new P,Xr=new P,lo=new P,co=new P,ms=new P;function th(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ms.fromArray(s,r);let o=i.x*Math.abs(ms.x)+i.y*Math.abs(ms.y)+i.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Dt=new P,ho=new se,km=0,Je=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ha=class extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ua=class extends Je{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Fe=class extends Je{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gm=new rn,qr=new P,nh=new P,un=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(nh)),this.expandByPoint(qr.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vm=0,En=new De,ih=new vt,Qs=new P,xn=new rn,Yr=new rn,Xt=new P,Xe=class s extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?ua:ha)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(xn.min,Yr.min),xn.expandByPoint(Xt),Xt.addVectors(xn.max,Yr.max),xn.expandByPoint(Xt)):(xn.expandByPoint(Yr.min),xn.expandByPoint(Yr.max))}xn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(e,c),Xt.add(Qs)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,u=new P,d=new se,f=new se,p=new se,x=new P,g=new P;function m(_,S,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),o[_].add(x),o[S].add(x),o[R].add(x),l[_].add(g),l[S].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,S=M.length;_<S;++_){let R=M[_],L=R.start,U=R.count;for(let H=L,I=L+U;H<I;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let A=new P,v=new P,E=new P,b=new P;function w(_){E.fromBufferAttribute(i,_),b.copy(E);let S=o[_];A.copy(S),A.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(b,S);let L=v.dot(l[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,L)}for(let _=0,S=M.length;_<S;++_){let R=M[_],L=R.start,U=R.count;for(let H=L,I=L+U;H<I;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Je(d,h,u)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zh,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nn=new P,Ji=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sh=new P,Wm=new P,Xm=new Oe,Hn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=sh.subVectors(n,t).cross(Wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(sh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xm.getNormalMatrix(e),i=this.coplanarPoint(sh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qm=0,an=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=Ui,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Ph,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ft=class extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,Kr=new P,tr=new P,nr=new P,ir=new se,Zr=new se,jf=new De,uo=new P,Jr=new P,fo=new P,Dd=new se,rh=new se,Ud=new se,Ht=class extends vt{constructor(e=new Ft){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new Xe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ts(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new Ji(n,3,0,!1)),er.setAttribute("uv",new Ji(n,2,3,!1))}this.geometry=er,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;po(uo.set(-.5,-.5,0),nr,a,tr,i,r),po(Jr.set(.5,-.5,0),nr,a,tr,i,r),po(fo.set(.5,.5,0),nr,a,tr,i,r),Dd.set(0,0),rh.set(1,0),Ud.set(1,1);let o=e.ray.intersectTriangle(uo,Jr,fo,!1,Kr);if(o===null&&(po(Jr.set(-.5,.5,0),nr,a,tr,i,r),rh.set(0,1),o=e.ray.intersectTriangle(uo,fo,Jr,!1,Kr),o===null))return;let l=e.ray.origin.distanceTo(Kr);l<e.near||l>e.far||t.push({distance:l,point:Kr.clone(),uv:jn.getInterpolation(Kr,uo,Jr,fo,Dd,rh,Ud,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function po(s,e,t,n,i,r){ir.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Zr.x=r*ir.x-i*ir.y,Zr.y=i*ir.x+r*ir.y):Zr.copy(ir),s.copy(e),s.x+=Zr.x,s.y+=Zr.y,s.applyMatrix4(jf)}var Si=new P,ah=new P,mo=new P,go=new P,Es=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ah.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),go.copy(this.origin).sub(ah);let r=e.distanceTo(t)*.5,a=-this.direction.dot(mo),o=go.dot(this.direction),l=-go.dot(mo),c=go.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ah).addScaledVector(mo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),i=Si.dot(Si)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,v=Math.abs(l),E=Math.abs(c),b=Math.abs(h),w,_,S,R,L,U,H,I,O,W,V,j;if(v>=E&&v>=b?(S=l,U=u,O=p,j=m,l>=0?(w=c,_=h,R=d,L=f,H=x,I=g,W=M,V=A):(w=h,_=c,R=f,L=d,H=g,I=x,W=A,V=M)):E>=b?(S=c,U=d,O=x,j=M,c>=0?(w=h,_=l,R=f,L=u,H=g,I=p,W=A,V=m):(w=l,_=h,R=u,L=f,H=p,I=g,W=m,V=A)):(S=h,U=f,O=g,j=A,h>=0?(w=l,_=c,R=u,L=d,H=p,I=x,W=m,V=M):(w=c,_=l,R=d,L=u,H=x,I=p,W=M,V=m)),S===0)return null;let q=w/S,$=_/S,J=1/S,Se=R-q*U,Me=L-$*U,$e=H-q*O,Ie=I-$*O,je=W-q*j,Y=V-$*j,te=je*Ie-Y*$e,ye=Se*Y-Me*je,Ue=$e*Me-Ie*Se;if(i){if(te<0||ye<0||Ue<0)return null}else if((te<0||ye<0||Ue<0)&&(te>0||ye>0||Ue>0))return null;let _e=te+ye+Ue;if(_e===0)return null;let We=J*(te*U+ye*O+Ue*j);return(_e>0?We<0:We>0)?null:this.at(We/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fd=new De,gs=new Es,_o=new un,Od=new P,xo=new P,yo=new P,vo=new P,oh=new P,Mo=new P,Bd=new P,So=new P,ge=class extends vt{constructor(e=new Xe,t=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(oh.fromBufferAttribute(u,e),a?Mo.addScaledVector(oh,h):Mo.addScaledVector(oh.sub(t),h))}t.add(Mo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(_o.containsPoint(gs.origin)===!1&&(gs.intersectSphere(_o,Od)===null||gs.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Fd.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Fd),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,E=A;v<E;v+=3){let b=o.getX(v),w=o.getX(v+1),_=o.getX(v+2);i=bo(this,m,e,n,c,h,u,b,w,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=o.getX(g),A=o.getX(g+1),v=o.getX(g+2);i=bo(this,a,e,n,c,h,u,M,A,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,E=A;v<E;v+=3){let b=v,w=v+1,_=v+2;i=bo(this,m,e,n,c,h,u,b,w,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,A=g+1,v=g+2;i=bo(this,a,e,n,c,h,u,M,A,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Ym(s,e,t,n,i,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ci,o),l===null)return null;So.copy(o),So.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:s}}function bo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,xo),s.getVertexPosition(l,yo),s.getVertexPosition(c,vo);let h=Ym(s,e,t,n,xo,yo,vo,Bd);if(h){let u=new P;jn.getBarycoord(Bd,xo,yo,vo,u),i&&(h.uv=jn.getInterpolatedAttribute(i,o,l,c,u,new se)),r&&(h.uv1=jn.getInterpolatedAttribute(r,o,l,c,u,new se)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};jn.getNormal(xo,yo,vo,d.normal),h.face=d,h.barycoord=u}return h}var $r=new ht,Hd=new ht,zd=new ht,Km=new ht,kd=new De,To=new P,lh=new un,Gd=new De,ch=new Es,da=class extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lh.copy(this.boundingSphere),lh.applyMatrix4(i),e.ray.intersectsSphere(lh)!==!1&&(Gd.copy(i).invert(),ch.copy(e.ray).applyMatrix4(Gd),!(this.boundingBox!==null&&ch.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ch)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ae("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hd.fromBufferAttribute(i.attributes.skinIndex,e),zd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?($r.copy(t),t.set(0,0,0,0)):($r.set(...t,1),t.set(0,0,0)),$r.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=zd.getComponent(r);if(a!==0){let o=Hd.getComponent(r);kd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Km.copy($r).applyMatrix4(kd),a)}}return t.isVector4&&(t.w=$r.w),t.applyMatrix4(this.bindMatrixInverse)}},_r=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},xr=class extends Pt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Rt,h=Rt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vd=new De,Zm=new De,fa=class s{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ae("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Zm;Vd.multiplyMatrices(o,t[r]),Vd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xr(t,e,e,vn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ae("Skeleton: No bone found with UUID:",r),a=new _r),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},wi=class extends Je{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new De,Wd=new De,Eo=[],Xd=new rn,Jm=new De,jr=new ge,Qr=new un,$i=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Xd.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Qr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),Wd.multiplyMatrices(n,sr),jr.matrixWorld=Wd,jr.raycast(e,Eo);for(let a=0,o=Eo.length;a<o;a++){let l=Eo[a];l.instanceId=r,l.object=this,t.push(l)}Eo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(i*this.count),i,this.count,El,yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_s=new un,$m=new se(.5,.5),wo=new P,yr=class{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],A=r[13],v=r[14],E=r[15];if(i[0].setComponents(c-a,f-h,m-p,E-M).normalize(),i[1].setComponents(c+a,f+h,m+p,E+M).normalize(),i[2].setComponents(c+o,f+u,m+x,E+A).normalize(),i[3].setComponents(c-o,f-u,m-x,E-A).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,f-d,m-g,E-v).normalize();else if(i[4].setComponents(c-l,f-d,m-g,E-v).normalize(),t===kn)i[5].setComponents(c+l,f+d,m+g,E+v).normalize();else if(t===dr)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);let t=$m.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ji=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zo=new P,Jo=new P,qd=new De,ea=new Es,Ao=new un,hh=new P,Yd=new P,ws=class extends vt{constructor(e=new Xe,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Zo.fromBufferAttribute(t,i-1),Jo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zo.distanceTo(Jo);e.setAttribute("lineDistance",new Fe(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;qd.copy(i).invert(),ea.copy(e.ray).applyMatrix4(qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=h.getX(x),M=h.getX(x+1),A=Ro(this,e,ea,l,m,M,x);A&&t.push(A)}if(this.isLineLoop){let x=h.getX(p-1),g=h.getX(f),m=Ro(this,e,ea,l,x,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){let m=Ro(this,e,ea,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ro(this,e,ea,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ro(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Zo.fromBufferAttribute(o,i),Jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Zo,Jo,hh,Yd)>n)return;hh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(hh);if(!(c<e.near||c>e.far))return{distance:c,point:Yd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Kd=new P,Zd=new P,As=class extends ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Kd.fromBufferAttribute(t,i),Zd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kd.distanceTo(Zd);e.setAttribute("lineDistance",new Fe(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pa=class extends ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ai=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jd=new De,yh=new Es,Co=new un,Po=new P,ti=class extends vt{constructor(e=new Xe,t=new Ai){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;Jd.copy(i).invert(),yh.copy(e.ray).applyMatrix4(Jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);Po.fromBufferAttribute(u,g),$d(Po,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)Po.fromBufferAttribute(u,p),$d(Po,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $d(s,e,t,n,i,r,a){let o=yh.distanceSqToPoint(s);if(o<t){let l=new P;yh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ma=class extends Pt{constructor(e=[],t=is,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rn=class extends Pt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends Pt{constructor(e,t,n=qn,i,r,a,o=Rt,l=Rt,c,h=ei,u=1){if(h!==ei&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$o=class extends Qi{constructor(e,t=qn,n=is,i,r,a=Rt,o=Rt,l,c=ei){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ga=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ni=class s extends Xe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function p(x,g,m,M,A,v,E,b,w,_,S){let R=v/w,L=E/_,U=v/2,H=E/2,I=b/2,O=w+1,W=_+1,V=0,j=0,q=new P;for(let $=0;$<W;$++){let J=$*L-H;for(let Se=0;Se<O;Se++){let Me=Se*R-U;q[x]=Me*M,q[g]=J*A,q[m]=I,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=b>0?1:-1,h.push(q.x,q.y,q.z),u.push(Se/w),u.push(1-$/_),V+=1}}for(let $=0;$<_;$++)for(let J=0;J<w;J++){let Se=d+J+O*$,Me=d+J+O*($+1),$e=d+(J+1)+O*($+1),Ie=d+(J+1)+O*$;l.push(Se,Me,Ie),l.push(Me,$e,Ie),j+=6}o.addGroup(f,j,S),f+=j,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ii=class s extends Xe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(o,3)),this.setAttribute("uv",new Fe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},dn=class s extends Xe{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=n/2,m=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(f,2));function M(){let v=new P,E=new P,b=0,w=(t-e)/n;for(let _=0;_<=r;_++){let S=[],R=_/r,L=R*(t-e)+e;for(let U=0;U<=i;U++){let H=U/i,I=H*l+o,O=Math.sin(I),W=Math.cos(I);E.x=L*O,E.y=-R*n+g,E.z=L*W,u.push(E.x,E.y,E.z),v.set(O,w,W).normalize(),d.push(v.x,v.y,v.z),f.push(H,1-R),S.push(p++)}x.push(S)}for(let _=0;_<i;_++)for(let S=0;S<r;S++){let R=x[S][_],L=x[S+1][_],U=x[S+1][_+1],H=x[S][_+1];(e>0||S!==0)&&(h.push(R,L,H),b+=3),(t>0||S!==r-1)&&(h.push(L,U,H),b+=3)}c.addGroup(m,b,0),m+=b}function A(v){let E=p,b=new se,w=new P,_=0,S=v===!0?e:t,R=v===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),p++;let L=p;for(let U=0;U<=i;U++){let I=U/i*l+o,O=Math.cos(I),W=Math.sin(I);w.x=S*W,w.y=g*R,w.z=S*O,u.push(w.x,w.y,w.z),d.push(0,R,0),b.x=O*.5+.5,b.y=W*.5*R+.5,f.push(b.x,b.y),p++}for(let U=0;U<i;U++){let H=E+U,I=L+U;v===!0?h.push(I,I+1,H):h.push(I+1,I,H),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class s extends dn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jo=class s extends Xe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Fe(r,3)),this.setAttribute("normal",new Fe(r.slice(),3)),this.setAttribute("uv",new Fe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new P,v=new P,E=new P;for(let b=0;b<t.length;b+=3)f(t[b+0],A),f(t[b+1],v),f(t[b+2],E),l(A,v,E,M)}function l(M,A,v,E){let b=E+1,w=[];for(let _=0;_<=b;_++){w[_]=[];let S=M.clone().lerp(v,_/b),R=A.clone().lerp(v,_/b),L=b-_;for(let U=0;U<=L;U++)U===0&&_===b?w[_][U]=S:w[_][U]=S.clone().lerp(R,U/L)}for(let _=0;_<b;_++)for(let S=0;S<2*(b-_)-1;S++){let R=Math.floor(S/2);S%2===0?(d(w[_][R+1]),d(w[_+1][R]),d(w[_][R])):(d(w[_][R+1]),d(w[_+1][R+1]),d(w[_+1][R]))}}function c(M){let A=new P;for(let v=0;v<r.length;v+=3)A.x=r[v+0],A.y=r[v+1],A.z=r[v+2],A.normalize().multiplyScalar(M),r[v+0]=A.x,r[v+1]=A.y,r[v+2]=A.z}function h(){let M=new P;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let v=g(M)/2/Math.PI+.5,E=m(M)/Math.PI+.5;a.push(v,1-E)}p(),u()}function u(){for(let M=0;M<a.length;M+=6){let A=a[M+0],v=a[M+2],E=a[M+4],b=Math.max(A,v,E),w=Math.min(A,v,E);b>.9&&w<.1&&(A<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),E<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,A){let v=M*3;A.x=e[v+0],A.y=e[v+1],A.z=e[v+2]}function p(){let M=new P,A=new P,v=new P,E=new P,b=new se,w=new se,_=new se;for(let S=0,R=0;S<r.length;S+=9,R+=6){M.set(r[S+0],r[S+1],r[S+2]),A.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),b.set(a[R+0],a[R+1]),w.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),E.copy(M).add(A).add(v).divideScalar(3);let L=g(E);x(b,R+0,M,L),x(w,R+2,A,L),x(_,R+4,v,L)}}function x(M,A,v,E){E<0&&M.x===1&&(a[A]=M.x-1),v.x===0&&v.z===0&&(a[A]=E/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Io=new P,Lo=new P,uh=new P,No=new jn,_a=class extends Xe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(lr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:x,b:g,c:m}=No;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),No.getNormal(uh),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let A=(M+1)%3,v=u[M],E=u[A],b=No[h[M]],w=No[h[A]],_=`${v}_${E}`,S=`${E}_${v}`;S in d&&d[S]?(uh.dot(d[S].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(w.x,w.y,w.z)),d[S]=null):_ in d||(d[_]={index0:c[M],index1:c[A],normal:uh.clone()})}}for(let p in d)if(d[p]){let{index0:x,index1:g}=d[p];Io.fromBufferAttribute(o,x),Lo.fromBufferAttribute(o,g),f.push(Io.x,Io.y,Io.z),f.push(Lo.x,Lo.y,Lo.z)}this.setAttribute("position",new Fe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new se:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,i=[],r=[],a=[],o=new P,l=new De;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xa=class extends Cn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qo=class extends xa{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var jd=new P,Qd=new P,dh=new Vh,fh=new Vh,ph=new Vh,es=class extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Qd.subVectors(i[0],i[1]).add(i[0]),c=Qd);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(jd.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=jd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),dh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),fh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),ph.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),fh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ph.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(dh.calc(l),fh.calc(l),ph.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ef(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function jm(s,e){let t=1-s;return t*t*e}function Qm(s,e){return 2*(1-s)*s*e}function eg(s,e){return s*s*e}function na(s,e,t,n){return jm(s,e)+Qm(s,t)+eg(s,n)}function tg(s,e){let t=1-s;return t*t*t*e}function ng(s,e){let t=1-s;return 3*t*t*s*e}function ig(s,e){return 3*(1-s)*s*s*e}function sg(s,e){return s*s*s*e}function ia(s,e,t,n,i){return tg(s,e)+ng(s,t)+ig(s,n)+sg(s,i)}var el=class extends Cn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ia(e,i.x,r.x,a.x,o.x),ia(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends Cn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ia(e,i.x,r.x,a.x,o.x),ia(e,i.y,r.y,a.y,o.y),ia(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends Cn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends Cn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Cn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(na(e,i.x,r.x,a.x),na(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Cn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(na(e,i.x,r.x,a.x),na(e,i.y,r.y,a.y),na(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ef(o,l.x,c.x,h.x,u.x),ef(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},rg=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:es,CubicBezierCurve:el,CubicBezierCurve3:tl,EllipseCurve:xa,LineCurve:nl,LineCurve3:il,QuadraticBezierCurve:sl,QuadraticBezierCurve3:ya,SplineCurve:rl});var va=class s extends jo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var St=class s extends Xe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*d-a;for(let A=0;A<c;A++){let v=A*u-r;p.push(v,-M,0),x.push(0,0,1),g.push(A/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let A=M+c*m,v=M+c*(m+1),E=M+1+c*(m+1),b=M+1+c*m;f.push(A,v,b),f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Rs=class s extends Xe{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new P,p=new se;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let m=0;m<n;m++){let M=m+g,A=M,v=M+n+1,E=M+n+2,b=M+1;o.push(A,v,b),o.push(v,E,b)}}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var si=class s extends Xe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],A=m/n,v=a+A*o,E=e*Math.cos(v),b=Math.sqrt(e*e-E*E),w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){let S=_/t,R=i+S*r;u.x=-b*Math.cos(R),u.y=E,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(S+w,1-A),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let A=h[m][M+1],v=h[m][M],E=h[m+1][M],b=h[m+1][M+1];(m!==0||a>0)&&f.push(A,v,b),(m!==n-1||l<Math.PI)&&f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ma=class s extends Xe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new P,f=new P,p=new P;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=i;m++){let M=m/i*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let m=(i+1)*x+g-1,M=(i+1)*(x-1)+g-1,A=(i+1)*(x-1)+g,v=(i+1)*x+g;l.push(m,M,v),l.push(M,A,v)}this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Cs=class s extends Xe{constructor(e=new ya(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new se,h=new P,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(f,2));function x(){for(let A=0;A<t;A++)g(A);g(r===!1?t:0),M(),m()}function g(A){h=e.getPointAt(A/t,h);let v=a.normals[A],E=a.binormals[A];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,_=Math.sin(w),S=-Math.cos(w);l.x=S*v.x+_*E.x,l.y=S*v.y+_*E.y,l.z=S*v.z+_*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let A=1;A<=t;A++)for(let v=1;v<=i;v++){let E=(i+1)*(A-1)+(v-1),b=(i+1)*A+(v-1),w=(i+1)*A+v,_=(i+1)*(A-1)+v;p.push(E,b,_),p.push(b,w,_)}}function M(){for(let A=0;A<=t;A++)for(let v=0;v<=i;v++)c.x=A/t,c.y=v/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new rg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Fs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(tf(i))i.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(tf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Qt(s){let e={};for(let t=0;t<s.length;t++){let n=Fs(s[t]);for(let i in n)e[i]=n[i]}return e}function tf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ag(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var Oi={clone:Fs,merge:Qt},og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mt=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ae().setHex(i.value);break;case"v2":this.uniforms[n].value=new se().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new De().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vr=class extends mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tt=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fn=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var al=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function cg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function hg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ys:r=e,o=2*t-n;break;case sa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ys:a=e,l=2*n-t;break;case sa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,A=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+M*a[c+E]+A*a[l+E]+v*a[u+E];return r}},Sa=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},cl=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},hl=class extends ri{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*d+p*2,M=u[m],A=u[m+1],v=e*d+p*2,E=h[v],b=h[v+1],w=dg(n,t,M,E,i);r[p]=Qf(w,x,A,b,g)}return r}};function Qf(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ug(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function dg(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Qf(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=ug(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Bo(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break;case xh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ae("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return Fo;case this.InterpolantFactoryMethodBezier:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Bo(this.settings)&&(sf(this.settings.inTangents,e),sf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&pm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Bo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function sf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Ss;var Ci=class extends pn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ms;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}};ba.prototype.ValueTypeName="color";var Pi=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}};Pi.prototype.ValueTypeName="number";var ul=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)At.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ii=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Ii.prototype.ValueTypeName="quaternion";Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends pn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Ms;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends pn{constructor(e,t,n,i){super(e,t,n,i)}};ts.prototype.ValueTypeName="vector";var Ni=class{constructor(e="",t=-1,n=[],i=rc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(pg(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=cg(l);l=nf(l,1,h),c=nf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Pi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function fg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pi;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return ba;case"quaternion":return Ii;case"bool":case"boolean":return Ci;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fg(s.type);if(s.times===void 0){let n=[],i=[];hg(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Bo(s.settings)&&(t.settings={inTangents:Zi(s.settings.inTangents,Float32Array),outTangents:Zi(s.settings.outTangents,Float32Array)}),t}var Qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(rf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!rf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function rf(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dl=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new dl,ai=class{constructor(e){this.manager=e!==void 0?e:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},vh=class extends Error{constructor(e,t){super(e),this.response=t}},Mr=class extends ai{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ae("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=bi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){M();function M(){u.read().then(({done:A,value:v})=>{if(A)m.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,w=h.length;b<w;b++){let _=h[b];_.onProgress&&_.onProgress(E)}m.enqueue(v),M()}},A=>{m.error(A)})}}});return new Response(g)}else throw new vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Qn.add(`file:${e}`,c);let h=bi[e];delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rr=new WeakMap,fl=class extends ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=rr.get(a);u===void 0&&(u=[],rr.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=fr("img");function l(){h(),t&&t(this);let u=rr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}rr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Qn.remove(`image:${e}`);let d=rr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}rr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ps=class extends ai{constructor(e){super(e)}load(e,t,n,i){let r=new Pt,a=new fl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Is=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ta=class extends Is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mh=new De,af=new P,of=new P,Sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){mh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===dr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Do=new P,Uo=new At,$n=new P,Ea=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,Uo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Uo,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Do,Uo,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,Uo,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new P,lf=new se,cf=new se,Ut=class extends Ea{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mh=class extends Sr{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wa=class extends Is{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Sh=class extends Sr{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},oi=class extends Is{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},li=class extends Ea{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bh=class extends Sr{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Di=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gh=new WeakMap,Aa=class extends ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Ae("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Ae("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{gh.has(a)===!0?(i&&i(gh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),gh.set(l,c),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ar=-90,or=1,pl=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ut(ar,or,e,t);i.layers=this.layers,this.add(i);let r=new Ut(ar,or,e,t);r.layers=this.layers,this.add(r);let a=new Ut(ar,or,e,t);a.layers=this.layers,this.add(a);let o=new Ut(ar,or,e,t);o.layers=this.layers,this.add(o);let l=new Ut(ar,or,e,t);l.layers=this.layers,this.add(l);let c=new Ut(ar,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ml=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ra=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=mg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function mg(){this._document.hidden===!1&&this.reset()}var gl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){At.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;At.multiplyQuaternionsFlat(e,a,e,t,e,n),At.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Xh="\\[\\]\\.:\\/",gg=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",_g="[^"+Xh.replace("\\.","")+"]",xg=/((?:WC+[\/:])*)/.source.replace("WC",qh),yg=/(WCOD+)?/.source.replace("WCOD",_g),vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),Sg=new RegExp("^"+xg+yg+vg+Mg+"$"),bg=["material","materials","bones","map"],Th=class{constructor(e,t,n){let i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gg,"")}static parseTrackName(e){let t=Sg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Th;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _l=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:xs,endingEnd:xs};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Uf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Of:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case rc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Ff;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Df){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ys,i.endingEnd=ys):(e?i.endingStart=this.zeroSlopeAtStart?ys:xs:i.endingStart=sa,t?i.endingEnd=this.zeroSlopeAtEnd?ys:xs:i.endingEnd=sa)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Tg=new Float32Array(1),Ca=class extends Vn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new gl(ft.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Sa(new Float32Array(2),new Float32Array(2),1,Tg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ni.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=rc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new _l(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ni.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var jh=class jh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};jh.prototype.isMatrix2=!0;var Eh=jh;function Yh(s,e,t,n){let i=Eg(n);switch(t){case Oh:return s*e;case El:return s*e/i.components*i.byteLength;case wl:return s*e/i.components*i.byteLength;case rs:return s*e*2/i.components*i.byteLength;case Al:return s*e*2/i.components*i.byteLength;case Bh:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case Rl:return s*e*4/i.components*i.byteLength;case Ba:case Ha:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case za:case ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Ll:return Math.max(s,16)*Math.max(e,8)/4;case Cl:case Il:return Math.max(s,8)*Math.max(e,8)/2;case Nl:case Dl:case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Ga:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $l:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Va:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eg(s){switch(s){case mn:case Nh:return{byteLength:1,components:1};case Er:case Dh:case kt:return{byteLength:2,components:1};case bl:case Tl:return{byteLength:2,components:4};case qn:case Sl:case yn:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sp(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ag(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
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
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Gg=`#ifdef USE_BUMPMAP
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
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,w0=`uniform sampler2D dfgLUT;
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
}`,A0=`
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,__=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,b_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
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
}`,U_=`#if DEPTH_PACKING == 3200
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
}`,F_=`#define DISTANCE
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
}`,O_=`#define DISTANCE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`uniform float scale;
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
}`,k_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,K_=`#define NORMAL
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
}`,Z_=`#define NORMAL
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
}`,J_=`#define PHONG
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
}`,$_=`#define PHONG
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
}`,j_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,ex=`#define TOON
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
}`,tx=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Ig,alphatest_fragment:Lg,alphatest_pars_fragment:Ng,aomap_fragment:Dg,aomap_pars_fragment:Ug,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:Bg,beginnormal_vertex:Hg,bsdfs:zg,iridescence_fragment:kg,bumpmap_pars_fragment:Gg,clipping_planes_fragment:Vg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:Kg,color_pars_vertex:Zg,color_vertex:Jg,common:$g,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:s0,colorspace_pars_fragment:r0,envmap_fragment:a0,envmap_common_pars_fragment:o0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:v0,envmap_vertex:h0,fog_vertex:u0,fog_pars_vertex:d0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:x0,lights_pars_begin:y0,lights_toon_fragment:M0,lights_toon_pars_fragment:S0,lights_phong_fragment:b0,lights_phong_pars_fragment:T0,lights_physical_fragment:E0,lights_physical_pars_fragment:w0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,lightprobes_pars_fragment:P0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:D0,map_fragment:U0,map_pars_fragment:F0,map_particle_fragment:O0,map_particle_pars_fragment:B0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:z0,morphinstance_vertex:k0,morphcolor_vertex:G0,morphnormal_vertex:V0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:K0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:e_,iridescence_pars_fragment:t_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:r_,dithering_fragment:a_,dithering_pars_fragment:o_,roughnessmap_fragment:l_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:u_,shadowmap_vertex:d_,shadowmask_pars_fragment:f_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:__,specularmap_fragment:x_,specularmap_pars_fragment:y_,tonemapping_fragment:v_,tonemapping_pars_fragment:M_,transmission_fragment:S_,transmission_pars_fragment:b_,uv_pars_fragment:T_,uv_pars_vertex:E_,uv_vertex:w_,worldpos_vertex:A_,background_vert:R_,background_frag:C_,backgroundCube_vert:P_,backgroundCube_frag:I_,cube_vert:L_,cube_frag:N_,depth_vert:D_,depth_frag:U_,distance_vert:F_,distance_frag:O_,equirect_vert:B_,equirect_frag:H_,linedashed_vert:z_,linedashed_frag:k_,meshbasic_vert:G_,meshbasic_frag:V_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:K_,meshnormal_frag:Z_,meshphong_vert:J_,meshphong_frag:$_,meshphysical_vert:j_,meshphysical_frag:Q_,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ax,sprite_frag:ox},de={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},fi={basic:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ae(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Qt([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Qt([de.lights,de.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};fi.physical={uniforms:Qt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var cc={r:0,b:0,g:0},lx=new De,bp=new Oe;bp.set(-1,0,0,0,1,0,0,0,1);function cx(s,e,t,n,i,r){let a=new ae(0),o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=e.get(A,v)}return A}function p(M){let A=!1,v=f(M);v===null?g(a,o):v&&v.isColor&&(g(v,1),A=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Oa)?(c===void 0&&(c=new ge(new ni(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Fs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lx.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bp),c.material.toneMapped=ze.getTransfer(v.colorSpace)!==it,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ge(new St(2,2),new mt({name:"BackgroundMaterial",uniforms:Fs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ze.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,A){M.getRGB(cc,Wh(s)),t.buffers.color.setClear(cc.r,cc.g,cc.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:x,dispose:m}}function hx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(L,U,H,I,O){let W=!1,V=u(L,I,H,U);r!==V&&(r=V,c(r.object)),W=f(L,I,H,O),W&&p(L,I,H,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(L,U,H,I),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,U,H,I){let O=I.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let V=L.isInstancedMesh===!0?L.id:0,j=W[V];j===void 0&&(j={},W[V]=j);let q=j[H.id];q===void 0&&(q={},j[H.id]=q);let $=q[O];return $===void 0&&($=d(l()),q[O]=$),$}function d(L){let U=[],H=[],I=[];for(let O=0;O<t;O++)U[O]=0,H[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,U,H,I){let O=r.attributes,W=U.attributes,V=0,j=H.getAttributes();for(let q in j)if(j[q].location>=0){let J=O[q],Se=W[q];if(Se===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),J===void 0||J.attribute!==Se||Se&&J.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function p(L,U,H,I){let O={},W=U.attributes,V=0,j=H.getAttributes();for(let q in j)if(j[q].location>=0){let J=W[q];J===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let Se={};Se.attribute=J,J&&J.data&&(Se.data=J.data),O[q]=Se,V++}r.attributes=O,r.attributesNum=V,r.index=I}function x(){let L=r.newAttributes;for(let U=0,H=L.length;U<H;U++)L[U]=0}function g(L){m(L,0)}function m(L,U){let H=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;H[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),O[L]!==U&&(s.vertexAttribDivisor(L,U),O[L]=U)}function M(){let L=r.newAttributes,U=r.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==L[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function A(L,U,H,I,O,W,V){V===!0?s.vertexAttribIPointer(L,U,H,O,W):s.vertexAttribPointer(L,U,H,I,O,W)}function v(L,U,H,I){x();let O=I.attributes,W=H.getAttributes(),V=U.defaultAttributeValues;for(let j in W){let q=W[j];if(q.location>=0){let $=O[j];if($===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let J=$.normalized,Se=$.itemSize,Me=e.get($);if(Me===void 0)continue;let $e=Me.buffer,Ie=Me.type,je=Me.bytesPerElement,Y=Ie===s.INT||Ie===s.UNSIGNED_INT||$.gpuType===Sl;if($.isInterleavedBufferAttribute){let te=$.data,ye=te.stride,Ue=$.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)m(q.location+_e,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<q.locationSize;_e++)g(q.location+_e);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let _e=0;_e<q.locationSize;_e++)A(q.location+_e,Se/q.locationSize,Ie,J,ye*je,(Ue+Se/q.locationSize*_e)*je,Y)}else{if($.isInstancedBufferAttribute){for(let te=0;te<q.locationSize;te++)m(q.location+te,$.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let te=0;te<q.locationSize;te++)g(q.location+te);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let te=0;te<q.locationSize;te++)A(q.location+te,Se/q.locationSize,Ie,J,Se*je,Se/q.locationSize*te*je,Y)}}else if(V!==void 0){let J=V[j];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(q.location,J);break;case 3:s.vertexAttrib3fv(q.location,J);break;case 4:s.vertexAttrib4fv(q.location,J);break;default:s.vertexAttrib1fv(q.location,J)}}}}M()}function E(){S();for(let L in n){let U=n[L];for(let H in U){let I=U[H];for(let O in I){let W=I[O];for(let V in W)h(W[V].object),delete W[V];delete I[O]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let H in U){let I=U[H];for(let O in I){let W=I[O];for(let V in W)h(W[V].object),delete W[V];delete I[O]}}delete n[L.id]}function w(L){for(let U in n){let H=n[U];for(let I in H){let O=H[I];if(O[L.id]===void 0)continue;let W=O[L.id];for(let V in W)h(W[V].object),delete W[V];delete O[L.id]}}}function _(L){for(let U in n){let H=n[U],I=L.isInstancedMesh===!0?L.id:0,O=H[I];if(O!==void 0){for(let W in O){let V=O[W];for(let j in V)h(V[j].object),delete V[j];delete O[W]}delete H[I],Object.keys(H).length===0&&delete n[U]}}}function S(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:S,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function ux(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==vn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mn&&w!==yn&&!_&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ae("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:E,samples:b}}function fx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Hn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,A=M*4,v=m.clippingState||null;l.value=v,v=h(p,d,A,f);for(let E=0;E!==A;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,v=f;A!==x;++A,v+=4)a.copy(u[A]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Cr=4,px=6,mx=20,gx=256,Xa=new li,tp=new ae,Qh=null,eu=0,tu=0,nu=!1,_x=new P,Os=new P,uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=_x}=r;Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:kt,format:vn,colorSpace:sn,depthBuffer:!1},i=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xx(r)),this._blurMaterial=vx(r,e,t),this._ggxMaterial=yx(r,e,t)}return i}_compileMaterial(e){let t=new ge(new Xe,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,i,r){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tp),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new ni,new Qe({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(tp),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let E=this._cubeSize;Rr(i,v*E,A>2?E:0,E,E),u.setRenderTarget(i),m&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===is||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Cr?n-p+Cr:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Rr(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(o,Xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Rr(e,g,m,3*x,2*x),i.setRenderTarget(e),i.render(o,Xa)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Cr?i-this._lodMax+Cr:0),d=4*(this._cubeSize-h);Rr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Xa)}};function xx(s){let e=[],t=[],n=s,i=s-Cr+1+px;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let m=0;m<u;m++){let M=m%3*2/3-1,A=m>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];p.set(v,f*d*m);for(let E=0;E<d;E++){let b=h[E*2]*2-1,w=h[E*2+1]*2-1;m===0?Os.set(1,w,b):m===1?Os.set(-b,1,-w):m===2?Os.set(-b,w,1):m===3?Os.set(-1,w,-b):m===4?Os.set(-b,-1,w):Os.set(b,w,-1),Os.toArray(x,(m*d+E)*f)}}let g=new Xe;g.setAttribute("position",new Je(p,f)),g.setAttribute("outputDirection",new Je(x,f)),t.push(new ge(g,null)),n>Cr&&n--}return{lodMeshes:t,sizeLods:e}}function np(s,e,t){let n=new Et(s,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function yx(s,e,t){return new mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function vx(s,e,t){return new mt({name:"SphericalGaussianBlur",defines:{SAMPLES:mx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ip(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function sp(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dc=class extends Et{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ma(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ni(5,5,5),r=new mt({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Pn});r.uniforms.tEquirect.value=t;let a=new ge(i,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Ct),new pl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function Mx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===yl||f===vl)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new dc(p.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,p=f===yl||f===vl,x=f===is||f===Ds;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new uc(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new uc(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===yl?d.mapping=is:f===vl&&(d.mapping=Ds),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Sx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&vs("WebGLRenderer: "+n+" extension not supported."),i}}}function bx(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let A=0,v=M.length;A<v;A+=3){let E=M[A+0],b=M[A+1],w=M[A+2];d.push(E,b,b,w,w,E)}}else{let M=p.array;x=p.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let E=A+0,b=A+1,w=A+2;d.push(E,b,b,w,w,E)}}let g=new(p.count>=65535?ua:ha)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tx(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ex(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wx(s,e,t){let n=new WeakMap,i=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),x===!0&&(A=3);let v=o.attributes.position.count*A,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*E*4*u),w=new oa(b,v,E,u);w.type=yn,w.needsUpdate=!0;let _=A*4;for(let R=0;R<u;R++){let L=g[R],U=m[R],H=M[R],I=v*E*4*R;for(let O=0;O<L.count;O++){let W=O*_;f===!0&&(i.fromBufferAttribute(L,O),b[I+W+0]=i.x,b[I+W+1]=i.y,b[I+W+2]=i.z,b[I+W+3]=0),p===!0&&(i.fromBufferAttribute(U,O),b[I+W+4]=i.x,b[I+W+5]=i.y,b[I+W+6]=i.z,b[I+W+7]=0),x===!0&&(i.fromBufferAttribute(H,O),b[I+W+8]=i.x,b[I+W+9]=i.y,b[I+W+10]=i.z,b[I+W+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new se(v,E)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ax(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Rx={[Ia]:"LINEAR_TONE_MAPPING",[La]:"REINHARD_TONE_MAPPING",[Na]:"CINEON_TONE_MAPPING",[Da]:"ACES_FILMIC_TONE_MAPPING",[Fa]:"AGX_TONE_MAPPING",[Ns]:"NEUTRAL_TONE_MAPPING",[Ua]:"CUSTOM_TONE_MAPPING"};function Cx(s,e,t,n,i,r){let a=new Et(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Xe;c.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fe([0,2,0,0,2,0],2));let h=new vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ge(c,h),d=new li(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],A=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let b=0;b<M.length;b++){let w=M[b];w.setSize&&w.setSize(v,E)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let E=a.width,b=a.height;M.length>0&&o===null&&(o=new Et(E,b,{type:kt,depthBuffer:!1,stencilBuffer:!1}),l=new Et(E,b,{type:kt,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let _=M[w];_.setSize&&_.setSize(E,b)}},this.begin=function(v,E){if(x||v.toneMapping===Wn&&M.length===0)return!1;if(m=E,E!==null){let b=E.width,w=E.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return A===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Wn,!0},this.hasRenderPass=function(){return A},this.end=function(v,E){v.toneMapping=g,x=!0;let b=a,w=o;for(let _=0;_<M.length;_++){let S=M[_];S.enabled!==!1&&(S.render(v,w,b,E),S.needsSwap!==!1&&(b=w,w=w===o?l:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},ze.getTransfer(f)===it&&(h.defines.SRGB_TRANSFER="");let _=Rx[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Tp=new Pt,ru=new Qi(1,1),Ep=new oa,wp=new Ko,Ap=new ma,rp=[],ap=[],op=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Ir(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=rp[i];if(r===void 0&&(r=new Float32Array(i),rp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function mc(s,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Px(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ix(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function Lx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function Nx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function Dx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;cp.set(n),s.uniformMatrix2fv(this.addr,!1,cp),Vt(t,n)}}function Ux(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;lp.set(n),s.uniformMatrix3fv(this.addr,!1,lp),Vt(t,n)}}function Fx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;op.set(n),s.uniformMatrix4fv(this.addr,!1,op),Vt(t,n)}}function Ox(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2iv(this.addr,e),Vt(t,e)}}function Hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3iv(this.addr,e),Vt(t,e)}}function zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4iv(this.addr,e),Vt(t,e)}}function kx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2uiv(this.addr,e),Vt(t,e)}}function Vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;s.uniform3uiv(this.addr,e),Vt(t,e)}}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4uiv(this.addr,e),Vt(t,e)}}function Xx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ru.compareFunction=t.isReversedDepthBuffer()?lc:oc,r=ru):r=Tp,t.setTexture2D(e||r,i)}function qx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wp,i)}function Yx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ap,i)}function Kx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ep,i)}function Zx(s){switch(s){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Nx;case 35674:return Dx;case 35675:return Ux;case 35676:return Fx;case 5124:case 35670:return Ox;case 35667:case 35671:return Bx;case 35668:case 35672:return Hx;case 35669:case 35673:return zx;case 5125:return kx;case 36294:return Gx;case 36295:return Vx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Kx}}function Jx(s,e){s.uniform1fv(this.addr,e)}function $x(s,e){let t=Ir(e,this.size,2);s.uniform2fv(this.addr,t)}function jx(s,e){let t=Ir(e,this.size,3);s.uniform3fv(this.addr,t)}function Qx(s,e){let t=Ir(e,this.size,4);s.uniform4fv(this.addr,t)}function ey(s,e){let t=Ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ty(s,e){let t=Ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ny(s,e){let t=Ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function iy(s,e){s.uniform1iv(this.addr,e)}function sy(s,e){s.uniform2iv(this.addr,e)}function ry(s,e){s.uniform3iv(this.addr,e)}function ay(s,e){s.uniform4iv(this.addr,e)}function oy(s,e){s.uniform1uiv(this.addr,e)}function ly(s,e){s.uniform2uiv(this.addr,e)}function cy(s,e){s.uniform3uiv(this.addr,e)}function hy(s,e){s.uniform4uiv(this.addr,e)}function uy(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ru:a=Tp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function dy(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wp,r[a])}function fy(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ap,r[a])}function py(s,e,t){let n=this.cache,i=e.length,r=mc(t,i);Gt(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ep,r[a])}function my(s){switch(s){case 5126:return Jx;case 35664:return $x;case 35665:return jx;case 35666:return Qx;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return oy;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}var au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zx(t.type)}},ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=my(t.type)}},lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},iu=/(\w+)(\])?(\[|\.)?/g;function hp(s,e){s.seq.push(e),s.map[e.id]=e}function gy(s,e,t){let n=s.name,i=n.length;for(iu.lastIndex=0;;){let r=iu.exec(n),a=iu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hp(t,c===void 0?new au(o,s,e):new ou(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new lu(o),hp(t,u)),t=u}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gy(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function up(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var _y=37297,xy=0;function yy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dp=new Oe;function vy(s){ze._getMatrix(dp,ze.workingColorSpace,s);let e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(s)){case ra:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yy(s.getShaderSource(e),o)}else return r}function My(s,e){let t=vy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Sy={[Ia]:"Linear",[La]:"Reinhard",[Na]:"Cineon",[Da]:"ACESFilmic",[Fa]:"AgX",[Ns]:"Neutral",[Ua]:"Custom"};function by(s,e){let t=Sy[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hc=new P;function Ty(){ze.getLuminanceCoefficients(hc);let s=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function wy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ay(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ya(s){return s!==""}function pp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(s){return s.replace(Ry,Py)}var Cy=new Map;function Py(s,e){let t=Ge[e];if(t===void 0){let n=Cy.get(e);if(n!==void 0)t=Ge[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cu(t)}var Iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(s){return s.replace(Iy,Ly)}function Ly(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _p(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var Ny={[Pa]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function Dy(s){return Ny[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uy={[is]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"};function Fy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Uy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Oy={[Ds]:"ENVMAP_MODE_REFRACTION"};function By(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hy={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function zy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Hy[s.combine]||"ENVMAP_BLENDING_NONE"}function ky(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Gy(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Dy(t),c=Fy(t),h=By(t),u=zy(t),d=ky(t),f=Ey(t),p=wy(r),x=i.createProgram(),g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ya).join(`
`),m.length>0&&(m+=`
`)):(g=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),m=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Wn?by("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,My("linearToOutputTexel",t.outputColorSpace),Ty(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),a=cu(a),a=pp(a,t),a=mp(a,t),o=cu(o),o=pp(o,t),o=mp(o,t),a=gp(a),o=gp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+g+a,v=M+m+o,E=up(i,i.VERTEX_SHADER,A),b=up(i,i.FRAGMENT_SHADER,v);i.attachShader(x,E),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(L){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(E)||"",I=i.getShaderInfoLog(b)||"",O=U.trim(),W=H.trim(),V=I.trim(),j=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,b);else{let $=fp(i,E,"vertex"),J=fp(i,b,"fragment");Ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+$+`
`+J)}else O!==""?Ae("WebGLProgram: Program Info Log:",O):(W===""||V==="")&&(q=!1);q&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:V,prefix:m}})}i.deleteShader(E),i.deleteShader(b),_=new Pr(i,x),S=Ay(i,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,_y)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}var Vy=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uu(e),t.set(e,n)),n}},uu=class{constructor(e){this.id=Vy++,this.code=e,this.usedTimes=0}};function Wy(s){return s===rs||s===Ga||s===Va}function Xy(s,e,t,n,i,r){let a=new la,o=new hu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,S,R,L,U,H){let I=L.fog,O=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||W,V),q=j&&j.mapping===Oa?j.image.height:null,$=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ae("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=J!==void 0?J.length:0,Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let $e,Ie,je,Y;if($){let _t=fi[$];$e=_t.vertexShader,Ie=_t.fragmentShader}else{$e=_.vertexShader,Ie=_.fragmentShader;let _t=o.getVertexShaderStage(_),rt=o.getFragmentShaderStage(_);o.update(_,_t,rt),je=_t.id,Y=rt.id}let te=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,We=!!_.map,Bt=!!_.matcap,Ye=!!j,nt=!!_.aoMap,gt=!!_.lightMap,Ze=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,Wt=!!_.displacementMap,hn=!!_.emissiveMap,bt=!!_.metalnessMap,Lt=!!_.roughnessMap,F=_.anisotropy>0,Zt=_.clearcoat>0,lt=_.dispersion>0,C=_.retroreflectivity>0,y=_.iridescence>0,B=_.sheen>0,G=_.transmission>0,K=F&&!!_.anisotropyMap,ie=Zt&&!!_.clearcoatMap,re=Zt&&!!_.clearcoatNormalMap,Z=Zt&&!!_.clearcoatRoughnessMap,ee=y&&!!_.iridescenceMap,oe=y&&!!_.iridescenceThicknessMap,Re=B&&!!_.sheenColorMap,ue=B&&!!_.sheenRoughnessMap,le=!!_.specularMap,Ce=!!_.specularColorMap,Le=!!_.specularIntensityMap,He=G&&!!_.transmissionMap,D=G&&!!_.thicknessMap,ce=!!_.gradientMap,Q=!!_.alphaMap,he=_.alphaTest>0,me=!!_.alphaHash,ne=!!_.extensions,Pe=Wn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Pe=s.toneMapping);let Ee={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:$e,fragmentShader:Ie,defines:_.defines,customVertexShaderID:je,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:Bt,envMap:Ye,envMapMode:Ye&&j.mapping,envMapCubeUVHeight:q,aoMap:nt,lightMap:gt,bumpMap:Ze,normalMap:Mt,displacementMap:Wt,emissiveMap:hn,normalMapObjectSpace:Mt&&_.normalMapType===Hf,normalMapTangentSpace:Mt&&_.normalMapType===ac,packedNormalMap:Mt&&_.normalMapType===ac&&Wy(_.normalMap.format),metalnessMap:bt,roughnessMap:Lt,anisotropy:F,anisotropyMap:K,clearcoat:Zt,clearcoatMap:ie,clearcoatNormalMap:re,clearcoatRoughnessMap:Z,dispersion:lt,retroreflection:C,iridescence:y,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:B,sheenColorMap:Re,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Ce,specularIntensityMap:Le,transmission:G,transmissionMap:He,thicknessMap:D,gradientMap:ce,opaque:_.transparent===!1&&_.blending===Ui&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:me,combine:_.combine,mapUv:We&&p(_.map.channel),aoMapUv:nt&&p(_.aoMap.channel),lightMapUv:gt&&p(_.lightMap.channel),bumpMapUv:Ze&&p(_.bumpMap.channel),normalMapUv:Mt&&p(_.normalMap.channel),displacementMapUv:Wt&&p(_.displacementMap.channel),emissiveMapUv:hn&&p(_.emissiveMap.channel),metalnessMapUv:bt&&p(_.metalnessMap.channel),roughnessMapUv:Lt&&p(_.roughnessMap.channel),anisotropyMapUv:K&&p(_.anisotropyMap.channel),clearcoatMapUv:ie&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&p(_.sheenRoughnessMap.channel),specularMapUv:le&&p(_.specularMap.channel),specularColorMapUv:Ce&&p(_.specularColorMap.channel),specularIntensityMapUv:Le&&p(_.specularIntensityMap.channel),transmissionMapUv:He&&p(_.transmissionMap.channel),thicknessMapUv:D&&p(_.thicknessMap.channel),alphaMapUv:Q&&p(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Mt||F),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(We||Q),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&ze.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:hn&&_.emissiveMap.isVideoTexture===!0&&ze.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zt,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(S,_),M(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let S=f[_.type],R;if(S){let L=fi[S];R=Oi.clone(L.uniforms)}else R=_.uniforms;return R}function v(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new Gy(s,S,_,i),c.push(R),h.set(S,R)),R}function E(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:w}}function qy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Yy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function xp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,g,m){let M=s[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},s[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=a(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=m),e++,M}function l(d,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let A=o(d,f,p,x,g,m);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):t.push(A)}function c(d,f,p,x,g,m){let M=o(d,f,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Yy),n.length>1&&n.sort(f||xp),i.length>1&&i.sort(f||xp)}function u(){for(let d=e,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Ky(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new yp,s.set(n,[a])):i>=r.length?(a=new yp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Zy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ae};break;case"SpotLight":t={position:new P,direction:new P,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Jy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var $y=0;function jy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qy(s){let e=new Zy,t=Jy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new De,a=new De;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,A=0,v=0,E=0,b=0,w=0,_=0,S=0,R=0;c.sort(jy);for(let U=0,H=c.length;U<H;U++){let I=c[U],O=I.color,W=I.intensity,V=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===rs?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*W,u+=O.g*W,d+=O.b*W;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],W);R++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,J=t.get(I);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=j;let Se=$.getViewportCount();for(let Me=0;Me<Se;Me++)n.sunShadowMatrix[x+Me]=$.getMatrix(Me),n.sunShadowCascade[x+Me]=$._cascadeData[Me];x+=Se,p++}n.sun[f]=q,f++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,J=t.get(I);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=I.shadow.matrix,E++}n.directional[g]=q,g++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(W),q.distance=V,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[M]=q;let $=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,$.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[M]=$.matrix,I.castShadow){let J=t.get(I);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=j,w++}M++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(O).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=q,A++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let $=I.shadow,J=t.get(I);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=I.shadow.matrix,b++}n.point[m]=q,m++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(W),q.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[v]=q,v++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==w||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,L.sunLength=f,L.directionalLength=g,L.pointLength=m,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=w,L.numSpotMaps=_,L.numLightProbes=R,n.version=$y++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let v=c[M];if(v.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),d++}else if(v.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function vp(s){let e=new Qy(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ev(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new vp(s),e.set(i,[o])):r>=a.length?(o=new vp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
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
}`,iv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],sv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Mp=new De,qa=new P,su=new P;function rv(s,e,t){let n=new yr,i=new se,r=new se,a=new ht,o=new al,l=new ol,c={},h=t.maxTextureSize,u={[ci]:on,[on]:ci,[zt]:zt},d=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:tv,fragmentShader:nv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Xe;p.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let m=this.type;this.render=function(b,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===df&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pa);let S=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Pn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=m!==this.type;H&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=b.length;I<O;I++){let W=b[I],V=W.shadow;if(V===void 0){Ae("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let j=V.getFrameExtents();i.multiply(j),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,V.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===br){if(W.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Et(i.x,i.y,{format:rs,type:kt,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new Qi(i.x,i.y,yn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=ei,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt}else W.isPointLight?(V.map=new dc(i.x),V.map.depthTexture=new $o(i.x,qn)):(V.map=new Et(i.x,i.y),V.map.depthTexture=new Qi(i.x,i.y,qn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=ei,this.type===Pa?(V.map.depthTexture.compareFunction=q?lc:oc,V.map.depthTexture.minFilter=Ct,V.map.depthTexture.magFilter=Ct):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let $=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,_);for(let J=0;J<$;J++){let Se=V.getCamera(J);if(W.isPointLight){let Me=V.camera,$e=V.matrix,Ie=W.distance||Me.far;Ie!==Me.far&&(Me.far=Ie,Me.updateProjectionMatrix()),qa.setFromMatrixPosition(W.matrixWorld),Me.position.copy(qa),su.copy(Me.position),su.add(iv[J]),Me.up.copy(sv[J]),Me.lookAt(su),Me.updateMatrixWorld(),$e.makeTranslation(-qa.x,-qa.y,-qa.z),Mp.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Mp,Me.coordinateSystem,Me.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,J),s.clear();else{J===0&&(s.setRenderTarget(V.map),s.clear());let Me=V.getViewport(J);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),U.viewport(a)}n=V.getFrustum(J),v(w,_,Se,W,this.type)}V.isPointLightShadow!==!0&&this.type===br&&M(V,_),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,R,L)};function M(b,w){let _=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Et(i.x,i.y,{format:rs,type:kt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,_,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,_,f,x,null)}function A(b,w,_,S){let R=null,L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=R.uuid,H=w.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let O=I[H];O===void 0&&(O=R.clone(),I[H]=O,w.addEventListener("dispose",E)),R=O}if(R.visible=w.visible,R.wireframe=w.wireframe,S===br?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=s.properties.get(R);U.light=_}return R}function v(b,w,_,S,R){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===br)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let H=e.update(b),I=b.material;if(Array.isArray(I)){let O=H.groups;for(let W=0,V=O.length;W<V;W++){let j=O[W],q=I[j.materialIndex];if(q&&q.visible){let $=A(b,q,S,R);b.onBeforeShadow(s,b,w,_,H,$,j),s.renderBufferDirect(_,null,H,$,b,j),b.onAfterShadow(s,b,w,_,H,$,j)}}}else if(I.visible){let O=A(b,I,S,R);b.onBeforeShadow(s,b,w,_,H,O,null),s.renderBufferDirect(_,null,H,O,b,null),b.onAfterShadow(s,b,w,_,H,O,null)}}let U=b.children;for(let H=0,I=U.length;H<I;H++)v(U[H],w,_,S,R)}function E(b){b.target.removeEventListener("dispose",E);for(let _ in c){let S=c[_],R=b.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function av(s,e){function t(){let D=!1,ce=new ht,Q=null,he=new ht(0,0,0,0);return{setMask:function(me){Q!==me&&!D&&(s.colorMask(me,me,me,me),Q=me)},setLocked:function(me){D=me},setClear:function(me,ne,Pe,Ee,_t){_t===!0&&(me*=Ee,ne*=Ee,Pe*=Ee),ce.set(me,ne,Pe,Ee),he.equals(ce)===!1&&(s.clearColor(me,ne,Pe,Ee),he.copy(ce))},reset:function(){D=!1,Q=null,he.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,Q=null,he=null,me=null;return{setReversed:function(ne){if(ce!==ne){let Pe=e.get("EXT_clip_control");ne?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;let Ee=me;me=null,this.setClear(Ee)}},getReversed:function(){return ce},setTest:function(ne){ne?te(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!D&&(s.depthMask(ne),Q=ne)},setFunc:function(ne){if(ce&&(ne=Jf[ne]),he!==ne){switch(ne){case Ho:s.depthFunc(s.NEVER);break;case zo:s.depthFunc(s.ALWAYS);break;case ko:s.depthFunc(s.LESS);break;case hr:s.depthFunc(s.LEQUAL);break;case Go:s.depthFunc(s.EQUAL);break;case Vo:s.depthFunc(s.GEQUAL);break;case Wo:s.depthFunc(s.GREATER);break;case Xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=ne}},setLocked:function(ne){D=ne},setClear:function(ne){me!==ne&&(me=ne,ce&&(ne=1-ne),s.clearDepth(ne))},reset:function(){D=!1,Q=null,he=null,me=null,ce=!1}}}function i(){let D=!1,ce=null,Q=null,he=null,me=null,ne=null,Pe=null,Ee=null,_t=null;return{setTest:function(rt){D||(rt?te(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!D&&(s.stencilMask(rt),ce=rt)},setFunc:function(rt,Un,Zn){(Q!==rt||he!==Un||me!==Zn)&&(s.stencilFunc(rt,Un,Zn),Q=rt,he=Un,me=Zn)},setOp:function(rt,Un,Zn){(ne!==rt||Pe!==Un||Ee!==Zn)&&(s.stencilOp(rt,Un,Zn),ne=rt,Pe=Un,Ee=Zn)},setLocked:function(rt){D=rt},setClear:function(rt){_t!==rt&&(s.clearStencil(rt),_t=rt)},reset:function(){D=!1,ce=null,Q=null,he=null,me=null,ne=null,Pe=null,Ee=null,_t=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,A=null,v=null,E=null,b=null,w=null,_=new ae(0,0,0),S=0,R=!1,L=null,U=null,H=null,I=null,O=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=j>=2);let $=null,J={},Se=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),$e=new ht().fromArray(Se),Ie=new ht().fromArray(Me);function je(D,ce,Q,he){let me=new Uint8Array(4),ne=s.createTexture();s.bindTexture(D,ne),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<Q;Pe++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(ce+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return ne}let Y={};Y[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(s.DEPTH_TEST),a.setFunc(hr),Ze(!1),Mt(wh),te(s.CULL_FACE),nt(Pn);function te(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ue(D,ce){return d[D]!==ce?(s.bindFramebuffer(D,ce),d[D]=ce,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ce),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(D,ce){let Q=p,he=!1;if(D){Q=f.get(ce),Q===void 0&&(Q=[],f.set(ce,Q));let me=D.textures;if(Q.length!==me.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,Pe=me.length;ne<Pe;ne++)Q[ne]=s.COLOR_ATTACHMENT0+ne;Q.length=me.length,he=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,he=!0);he&&s.drawBuffers(Q)}function We(D){return x!==D?(s.useProgram(D),x=D,!0):!1}let Bt={[Ls]:s.FUNC_ADD,[pf]:s.FUNC_SUBTRACT,[mf]:s.FUNC_REVERSE_SUBTRACT};Bt[gf]=s.MIN,Bt[_f]=s.MAX;let Ye={[xf]:s.ZERO,[yf]:s.ONE,[vf]:s.SRC_COLOR,[Ch]:s.SRC_ALPHA,[wf]:s.SRC_ALPHA_SATURATE,[Tf]:s.DST_COLOR,[Sf]:s.DST_ALPHA,[Mf]:s.ONE_MINUS_SRC_COLOR,[Ph]:s.ONE_MINUS_SRC_ALPHA,[Ef]:s.ONE_MINUS_DST_COLOR,[bf]:s.ONE_MINUS_DST_ALPHA,[Af]:s.CONSTANT_COLOR,[Rf]:s.ONE_MINUS_CONSTANT_COLOR,[Cf]:s.CONSTANT_ALPHA,[Pf]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(D,ce,Q,he,me,ne,Pe,Ee,_t,rt){if(D===Pn){g===!0&&(ye(s.BLEND),g=!1);return}if(g===!1&&(te(s.BLEND),g=!0),D!==ff){if(D!==m||rt!==R){if((M!==Ls||E!==Ls)&&(s.blendEquation(s.FUNC_ADD),M=Ls,E=Ls),rt)switch(D){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case st:s.blendFunc(s.ONE,s.ONE);break;case Ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ne("WebGLState: Invalid blending: ",D);break}else switch(D){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case st:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ah:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",D);break}A=null,v=null,b=null,w=null,_.set(0,0,0),S=0,m=D,R=rt}return}me=me||ce,ne=ne||Q,Pe=Pe||he,(ce!==M||me!==E)&&(s.blendEquationSeparate(Bt[ce],Bt[me]),M=ce,E=me),(Q!==A||he!==v||ne!==b||Pe!==w)&&(s.blendFuncSeparate(Ye[Q],Ye[he],Ye[ne],Ye[Pe]),A=Q,v=he,b=ne,w=Pe),(Ee.equals(_)===!1||_t!==S)&&(s.blendColor(Ee.r,Ee.g,Ee.b,_t),_.copy(Ee),S=_t),m=D,R=!1}function gt(D,ce){D.side===zt?ye(s.CULL_FACE):te(s.CULL_FACE);let Q=D.side===on;ce&&(Q=!Q),Ze(Q),D.blending===Ui&&D.transparent===!1?nt(Pn):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let he=D.stencilWrite;o.setTest(he),he&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),hn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(D){L!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),L=D)}function Mt(D){D!==hf?(te(s.CULL_FACE),D!==U&&(D===wh?s.cullFace(s.BACK):D===uf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),U=D}function Wt(D){D!==H&&(V&&s.lineWidth(D),H=D)}function hn(D,ce,Q){D?(te(s.POLYGON_OFFSET_FILL),(I!==ce||O!==Q)&&(I=ce,O=Q,a.getReversed()&&(ce=-ce),s.polygonOffset(ce,Q))):ye(s.POLYGON_OFFSET_FILL)}function bt(D){D?te(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Lt(D){D===void 0&&(D=s.TEXTURE0+W-1),$!==D&&(s.activeTexture(D),$=D)}function F(D,ce,Q){Q===void 0&&($===null?Q=s.TEXTURE0+W-1:Q=$);let he=J[Q];he===void 0&&(he={type:void 0,texture:void 0},J[Q]=he),(he.type!==D||he.texture!==ce)&&($!==Q&&(s.activeTexture(Q),$=Q),s.bindTexture(D,ce||Y[D]),he.type=D,he.texture=ce)}function Zt(){let D=J[$];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function y(){try{s.texSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function B(){try{s.texSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function ie(){try{s.texStorage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function re(){try{s.texStorage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Z(){try{s.texImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function ee(){try{s.texImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function oe(D){return u[D]!==void 0?u[D]:s.getParameter(D)}function Re(D,ce){u[D]!==ce&&(s.pixelStorei(D,ce),u[D]=ce)}function ue(D){$e.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),$e.copy(D))}function le(D){Ie.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Ie.copy(D))}function Ce(D,ce){let Q=c.get(ce);Q===void 0&&(Q=new WeakMap,c.set(ce,Q));let he=Q.get(D);he===void 0&&(he=s.getUniformBlockIndex(ce,D.name),Q.set(D,he))}function Le(D,ce){let he=c.get(ce).get(D);l.get(ce)!==he&&(s.uniformBlockBinding(ce,he,D.__bindingPointIndex),l.set(ce,he))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,J={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,A=null,v=null,E=null,b=null,w=null,_=new ae(0,0,0),S=0,R=!1,L=null,U=null,H=null,I=null,O=null,$e.set(0,0,s.canvas.width,s.canvas.height),Ie.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:Ue,drawBuffers:_e,useProgram:We,setBlending:nt,setMaterial:gt,setFlipSided:Ze,setCullFace:Mt,setLineWidth:Wt,setPolygonOffset:hn,setScissorTest:bt,activeTexture:Lt,bindTexture:F,unbindTexture:Zt,compressedTexImage2D:lt,compressedTexImage3D:C,texImage2D:Z,texImage3D:ee,pixelStorei:Re,getParameter:oe,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:ie,texStorage3D:re,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:ue,viewport:le,reset:He}}function ov(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return p?new OffscreenCanvas(C,y):fr("canvas")}function g(C,y,B){let G=1,K=lt(C);if((K.width>B||K.height>B)&&(G=B/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ie=Math.floor(G*K.width),re=Math.floor(G*K.height);d===void 0&&(d=x(ie,re));let Z=y?x(ie,re):d;return Z.width=ie,Z.height=re,Z.getContext("2d").drawImage(C,0,0,ie,re),Ae("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ie+"x"+re+")."),Z}else return"data"in C&&Ae("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){s.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,y,B,G,K,ie=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re;G&&(re=e.get("EXT_texture_norm16"),re||Ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===s.RED&&(B===s.FLOAT&&(Z=s.R32F),B===s.HALF_FLOAT&&(Z=s.R16F),B===s.UNSIGNED_BYTE&&(Z=s.R8),B===s.UNSIGNED_SHORT&&re&&(Z=re.R16_EXT),B===s.SHORT&&re&&(Z=re.R16_SNORM_EXT)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.R8UI),B===s.UNSIGNED_SHORT&&(Z=s.R16UI),B===s.UNSIGNED_INT&&(Z=s.R32UI),B===s.BYTE&&(Z=s.R8I),B===s.SHORT&&(Z=s.R16I),B===s.INT&&(Z=s.R32I)),y===s.RG&&(B===s.FLOAT&&(Z=s.RG32F),B===s.HALF_FLOAT&&(Z=s.RG16F),B===s.UNSIGNED_BYTE&&(Z=s.RG8),B===s.UNSIGNED_SHORT&&re&&(Z=re.RG16_EXT),B===s.SHORT&&re&&(Z=re.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RG8UI),B===s.UNSIGNED_SHORT&&(Z=s.RG16UI),B===s.UNSIGNED_INT&&(Z=s.RG32UI),B===s.BYTE&&(Z=s.RG8I),B===s.SHORT&&(Z=s.RG16I),B===s.INT&&(Z=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),B===s.UNSIGNED_INT&&(Z=s.RGB32UI),B===s.BYTE&&(Z=s.RGB8I),B===s.SHORT&&(Z=s.RGB16I),B===s.INT&&(Z=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),B===s.UNSIGNED_INT&&(Z=s.RGBA32UI),B===s.BYTE&&(Z=s.RGBA8I),B===s.SHORT&&(Z=s.RGBA16I),B===s.INT&&(Z=s.RGBA32I)),y===s.RGB&&(B===s.UNSIGNED_SHORT&&re&&(Z=re.RGB16_EXT),B===s.SHORT&&re&&(Z=re.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),y===s.RGBA){let ee=ie?ra:ze.getTransfer(K);B===s.FLOAT&&(Z=s.RGBA32F),B===s.HALF_FLOAT&&(Z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Z=ee===it?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&re&&(Z=re.RGBA16_EXT),B===s.SHORT&&re&&(Z=re.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function E(C,y){let B;return C?y===null||y===qn||y===wr?B=s.DEPTH24_STENCIL8:y===yn?B=s.DEPTH32F_STENCIL8:y===Er&&(B=s.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qn||y===wr?B=s.DEPTH_COMPONENT24:y===yn?B=s.DEPTH_COMPONENT32F:y===Er&&(B=s.DEPTH_COMPONENT16),B}function b(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Rt&&C.minFilter!==Ct?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){let y=C.target;y.removeEventListener("dispose",w),S(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),L(y)}function S(C){let y=n.get(C);if(y.__webglInit===void 0)return;let B=C.source,G=f.get(B);if(G){let K=G[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(C),Object.keys(G).length===0&&f.delete(B)}n.remove(C)}function R(C){let y=n.get(C);s.deleteTexture(y.__webglTexture);let B=C.source,G=f.get(B);delete G[y.__cacheKey],a.memory.textures--}function L(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let K=0;K<y.__webglFramebuffer[G].length;K++)s.deleteFramebuffer(y.__webglFramebuffer[G][K]);else s.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)s.deleteFramebuffer(y.__webglFramebuffer[G]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,K=B.length;G<K;G++){let ie=n.get(B[G]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(C)}let U=0;function H(){U=0}function I(){return U}function O(C){U=C}function W(){let C=U;return C>=i.maxTextures&&Ae("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function V(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function j(C,y){let B=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,C,y);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function q(C,y){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ye(B,C,y);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function $(C,y){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ye(B,C,y);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function J(C,y){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ue(B,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}let Se={[An]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[ur]:s.MIRRORED_REPEAT},Me={[Rt]:s.NEAREST,[Ml]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[Tr]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},$e={[kf]:s.NEVER,[qf]:s.ALWAYS,[Gf]:s.LESS,[oc]:s.LEQUAL,[Vf]:s.EQUAL,[lc]:s.GEQUAL,[Wf]:s.GREATER,[Xf]:s.NOTEQUAL};function Ie(C,y){if(y.type===yn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ct||y.magFilter===Tr||y.magFilter===Us||y.magFilter===Xn||y.minFilter===Ct||y.minFilter===Tr||y.minFilter===Us||y.minFilter===Xn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Se[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Se[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Se[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Me[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,$e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rt||y.minFilter!==Us&&y.minFilter!==Xn||y.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function je(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));let G=y.source,K=f.get(G);K===void 0&&(K={},f.set(G,K));let ie=V(y);if(ie!==C.__cacheKey){K[ie]===void 0&&(K[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ie].usedTimes++;let re=K[C.__cacheKey];re!==void 0&&(K[C.__cacheKey].usedTimes--,re.usedTimes===0&&R(y)),C.__cacheKey=ie,C.__webglTexture=K[ie].texture}return B}function Y(C,y,B){return Math.floor(Math.floor(C/B)/y)}function te(C,y,B,G){let ie=C.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,B,G,y.data);else{ie.sort((Re,ue)=>Re.start-ue.start);let re=0;for(let Re=1;Re<ie.length;Re++){let ue=ie[re],le=ie[Re],Ce=ue.start+ue.count,Le=Y(le.start,y.width,4),He=Y(ue.start,y.width,4);le.start<=Ce+1&&Le===He&&Y(le.start+le.count-1,y.width,4)===Le?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++re,ie[re]=le)}ie.length=re+1;let Z=t.getParameter(s.UNPACK_ROW_LENGTH),ee=t.getParameter(s.UNPACK_SKIP_PIXELS),oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Re=0,ue=ie.length;Re<ue;Re++){let le=ie[Re],Ce=Math.floor(le.start/4),Le=Math.ceil(le.count/4),He=Ce%y.width,D=Math.floor(Ce/y.width),ce=Le,Q=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,He),t.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,He,D,ce,Q,B,G,y.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,oe)}}function ye(C,y,B){let G=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=s.TEXTURE_3D);let K=je(C,y),ie=y.source;t.bindTexture(G,C.__webglTexture,s.TEXTURE0+B);let re=n.get(ie);if(ie.version!==re.__version||K===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let Q=ze.getPrimaries(ze.workingColorSpace),he=y.colorSpace===Fi?null:ze.getPrimaries(y.colorSpace),me=y.colorSpace===Fi||Q===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=g(y.image,!1,i.maxTextureSize);ee=Zt(y,ee);let oe=r.convert(y.format,y.colorSpace),Re=r.convert(y.type),ue=v(y.internalFormat,oe,Re,y.normalized,y.colorSpace,y.isVideoTexture);Ie(G,y);let le,Ce=y.mipmaps,Le=y.isVideoTexture!==!0,He=re.__version===void 0||K===!0,D=ie.dataReady,ce=b(y,ee);if(y.isDepthTexture)ue=E(y.format===ss,y.type),He&&(Le?t.texStorage2D(s.TEXTURE_2D,1,ue,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,ue,ee.width,ee.height,0,oe,Re,null));else if(y.isDataTexture)if(Ce.length>0){Le&&He&&t.texStorage2D(s.TEXTURE_2D,ce,ue,Ce[0].width,Ce[0].height);for(let Q=0,he=Ce.length;Q<he;Q++)le=Ce[Q],Le?D&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,oe,Re,le.data):t.texImage2D(s.TEXTURE_2D,Q,ue,le.width,le.height,0,oe,Re,le.data);y.generateMipmaps=!1}else Le?(He&&t.texStorage2D(s.TEXTURE_2D,ce,ue,ee.width,ee.height),D&&te(y,ee,oe,Re)):t.texImage2D(s.TEXTURE_2D,0,ue,ee.width,ee.height,0,oe,Re,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,ue,Ce[0].width,Ce[0].height,ee.depth);for(let Q=0,he=Ce.length;Q<he;Q++)if(le=Ce[Q],y.format!==vn)if(oe!==null)if(Le){if(D)if(y.layerUpdates.size>0){let me=Yh(le.width,le.height,y.format,y.type);for(let ne of y.layerUpdates){let Pe=le.data.subarray(ne*me/le.data.BYTES_PER_ELEMENT,(ne+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,ne,le.width,le.height,1,oe,Pe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,ee.depth,oe,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,ue,le.width,le.height,ee.depth,0,le.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,ee.depth,oe,Re,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,ue,le.width,le.height,ee.depth,0,oe,Re,le.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Le&&He&&t.texStorage2D(s.TEXTURE_2D,ce,ue,Ce[0].width,Ce[0].height);for(let Q=0,he=Ce.length;Q<he;Q++)le=Ce[Q],y.format!==vn?oe!==null?Le?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,ue,le.width,le.height,0,le.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,le.width,le.height,oe,Re,le.data):t.texImage2D(s.TEXTURE_2D,Q,ue,le.width,le.height,0,oe,Re,le.data)}else if(y.isDataArrayTexture)if(Le){if(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,ue,ee.width,ee.height,ee.depth),D)if(y.layerUpdates.size>0){let Q=Yh(ee.width,ee.height,y.format,y.type);for(let he of y.layerUpdates){let me=ee.data.subarray(he*Q/ee.data.BYTES_PER_ELEMENT,(he+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ee.width,ee.height,1,oe,Re,me)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,Re,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,ee.width,ee.height,ee.depth,0,oe,Re,ee.data);else if(y.isData3DTexture)Le?(He&&t.texStorage3D(s.TEXTURE_3D,ce,ue,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,Re,ee.data)):t.texImage3D(s.TEXTURE_3D,0,ue,ee.width,ee.height,ee.depth,0,oe,Re,ee.data);else if(y.isFramebufferTexture){if(He)if(Le)t.texStorage2D(s.TEXTURE_2D,ce,ue,ee.width,ee.height);else{let Q=ee.width,he=ee.height;for(let me=0;me<ce;me++)t.texImage2D(s.TEXTURE_2D,me,ue,Q,he,0,oe,Re,null),Q>>=1,he>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),u.add(y),Q.onpaint=he=>{let me=he.changedElements;for(let ne of u)me.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ee);else{let me=s.RGBA,ne=s.RGBA,Pe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,me,ne,Pe,ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Le&&He){let Q=lt(Ce[0]);t.texStorage2D(s.TEXTURE_2D,ce,ue,Q.width,Q.height)}for(let Q=0,he=Ce.length;Q<he;Q++)le=Ce[Q],Le?D&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,oe,Re,le):t.texImage2D(s.TEXTURE_2D,Q,ue,oe,Re,le);y.generateMipmaps=!1}else if(Le){if(He){let Q=lt(ee);t.texStorage2D(s.TEXTURE_2D,ce,ue,Q.width,Q.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Re,ee)}else t.texImage2D(s.TEXTURE_2D,0,ue,oe,Re,ee);m(y)&&M(G),re.__version=ie.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ue(C,y,B){if(y.image.length!==6)return;let G=je(C,y),K=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);let ie=n.get(K);if(K.version!==ie.__version||G===!0){t.activeTexture(s.TEXTURE0+B);let re=ze.getPrimaries(ze.workingColorSpace),Z=y.colorSpace===Fi?null:ze.getPrimaries(y.colorSpace),ee=y.colorSpace===Fi||re===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let oe=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let ne=0;ne<6;ne++)!oe&&!Re?ue[ne]=g(y.image[ne],!0,i.maxCubemapSize):ue[ne]=Re?y.image[ne].image:y.image[ne],ue[ne]=Zt(y,ue[ne]);let le=ue[0],Ce=r.convert(y.format,y.colorSpace),Le=r.convert(y.type),He=v(y.internalFormat,Ce,Le,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,ce=ie.__version===void 0||G===!0,Q=K.dataReady,he=b(y,le);Ie(s.TEXTURE_CUBE_MAP,y);let me;if(oe){D&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,He,le.width,le.height);for(let ne=0;ne<6;ne++){me=ue[ne].mipmaps;for(let Pe=0;Pe<me.length;Pe++){let Ee=me[Pe];y.format!==vn?Ce!==null?D?Q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,He,Ee.width,Ee.height,0,Ee.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,0,0,Ee.width,Ee.height,Ce,Le,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe,He,Ee.width,Ee.height,0,Ce,Le,Ee.data)}}}else{if(me=y.mipmaps,D&&ce){me.length>0&&he++;let ne=lt(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ue[ne].width,ue[ne].height,Ce,Le,ue[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,ue[ne].width,ue[ne].height,0,Ce,Le,ue[ne].data);for(let Pe=0;Pe<me.length;Pe++){let _t=me[Pe].image[ne].image;D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,_t.width,_t.height,Ce,Le,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,He,_t.width,_t.height,0,Ce,Le,_t.data)}}else{D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Le,ue[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,Ce,Le,ue[ne]);for(let Pe=0;Pe<me.length;Pe++){let Ee=me[Pe];D?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,0,0,Ce,Le,Ee.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Pe+1,He,Ce,Le,Ee.image[ne])}}}m(y)&&M(s.TEXTURE_CUBE_MAP),ie.__version=K.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function _e(C,y,B,G,K,ie){let re=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),ee=v(B.internalFormat,re,Z,B.normalized,B.colorSpace),oe=n.get(y),Re=n.get(B);if(Re.__renderTarget=y,!oe.__hasExternalTextures){let ue=Math.max(1,y.width>>ie),le=Math.max(1,y.height>>ie);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,ie,ee,ue,le,y.depth,0,re,Z,null):t.texImage2D(K,ie,ee,ue,le,0,re,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Lt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,K,Re.__webglTexture,0,bt(y)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,K,Re.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(C,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){let G=y.depthTexture,K=G&&G.isDepthTexture?G.type:null,ie=E(y.stencilBuffer,K),re=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Lt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(y),ie,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(y),ie,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ie,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,C)}else{let G=y.textures;for(let K=0;K<G.length;K++){let ie=G[K],re=r.convert(ie.format,ie.colorSpace),Z=r.convert(ie.type),ee=v(ie.internalFormat,re,Z,ie.normalized,ie.colorSpace);Lt(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(y),ee,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(y),ee,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ee,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(C,y,B){let G=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,y.depthTexture);let oe=r.convert(y.depthTexture.format),Re=r.convert(y.depthTexture.type),ue;y.depthTexture.format===ei?ue=s.DEPTH_COMPONENT24:y.depthTexture.format===ss&&(ue=s.DEPTH24_STENCIL8);for(let le=0;le<6;le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,y.width,y.height,0,oe,Re,null)}}else j(y.depthTexture,0);let ie=K.__webglTexture,re=bt(y),Z=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,ee=y.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ei)Lt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Z,ie,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Z,ie,0);else if(y.depthTexture.format===ss)Lt(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Z,ie,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,ee,Z,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(C){let y=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=G}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)Bt(y.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?Bt(y.__webglFramebuffer[0],C,0):Bt(y.__webglFramebuffer,C,0)}else if(B){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=s.createRenderbuffer(),We(y.__webglDepthbuffer[G],C,!1);else{let K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ie)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),We(y.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(C,y,B){let G=n.get(C);y!==void 0&&_e(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ye(C)}function gt(C){let y=C.texture,B=n.get(C),G=n.get(y);C.addEventListener("dispose",_);let K=C.textures,ie=C.isWebGLCubeRenderTarget===!0,re=K.length>1;if(re||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=y.version,a.memory.textures++),ie){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let ee=0;ee<y.mipmaps.length;ee++)B.__webglFramebuffer[Z][ee]=s.createFramebuffer()}else B.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)B.__webglFramebuffer[Z]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(re)for(let Z=0,ee=K.length;Z<ee;Z++){let oe=n.get(K[Z]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Lt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let ee=K[Z];B.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let oe=r.convert(ee.format,ee.colorSpace),Re=r.convert(ee.type),ue=v(ee.internalFormat,oe,Re,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),le=bt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,ue,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),We(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)_e(B.__webglFramebuffer[Z][ee],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else _e(B.__webglFramebuffer[Z],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Z=0,ee=K.length;Z<ee;Z++){let oe=K[Z],Re=n.get(oe),ue=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Re.__webglTexture),Ie(ue,oe),_e(B.__webglFramebuffer,C,oe,s.COLOR_ATTACHMENT0+Z,ue,0),m(oe)&&M(ue)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,G.__webglTexture),Ie(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)_e(B.__webglFramebuffer[ee],C,y,s.COLOR_ATTACHMENT0,Z,ee);else _e(B.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,Z,0);m(y)&&M(Z),t.unbindTexture()}C.depthBuffer&&Ye(C)}function Ze(C){let y=C.textures;for(let B=0,G=y.length;B<G;B++){let K=y[B];if(m(K)){let ie=A(C),re=n.get(K).__webglTexture;t.bindTexture(ie,re),M(ie),t.unbindTexture()}}}let Mt=[],Wt=[];function hn(C){if(C.samples>0){if(Lt(C)===!1){let y=C.textures,B=C.width,G=C.height,K=s.COLOR_BUFFER_BIT,ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(C),Z=y.length>1;if(Z)for(let oe=0;oe<y.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let oe=0;oe<y.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let Re=n.get(y[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,B,G,0,0,B,G,K,s.NEAREST),l===!0&&(Mt.length=0,Wt.length=0,Mt.push(s.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Mt.push(ie),Wt.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let oe=0;oe<y.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,re.__webglColorRenderbuffer[oe]);let Re=n.get(y[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function bt(C){return Math.min(i.maxSamples,C.samples)}function Lt(C){let y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Zt(C,y){let B=C.colorSpace,G=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==sn&&B!==Fi&&(ze.getTransfer(B)===it?(G!==vn||K!==mn)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",B)),y}function lt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=nt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lv(s,e){function t(n,i=Fi){let r,a=ze.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===bl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return s.BYTE;if(n===Dh)return s.SHORT;if(n===Er)return s.UNSIGNED_SHORT;if(n===Sl)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===kt)return s.HALF_FLOAT;if(n===Oh)return s.ALPHA;if(n===Bh)return s.RGB;if(n===vn)return s.RGBA;if(n===ei)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===El)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===rs)return s.RG;if(n===Al)return s.RG_INTEGER;if(n===Rl)return s.RGBA_INTEGER;if(n===Ba||n===Ha||n===za||n===ka)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Pl||n===Il||n===Ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Dl||n===Ul||n===Fl||n===Ol||n===Ga||n===Bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Dl)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fl)return r.COMPRESSED_R11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ga)return r.COMPRESSED_RG11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hl||n===zl||n===kl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl||n===Jl||n===$l||n===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===ec||n===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ql)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===Va||n===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hv=`
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

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mt({vertexShader:cv,fragmentShader:hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new St(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Vn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding!="undefined",g=new du,m={},M=t.getContextAttributes(),A=null,v=null,E=[],b=[],w=new se,_=null,S=null,R=new Ut;R.viewport=new ht;let L=new Ut;L.viewport=new ht;let U=[R,L],H=new ml,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=E[Y];return te===void 0&&(te=new gr,E[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=E[Y];return te===void 0&&(te=new gr,E[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=E[Y];return te===void 0&&(te=new gr,E[Y]=te),te.getHandSpace()};function W(Y){let te=b.indexOf(Y.inputSource);if(te===-1)return;let ye=E[te];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,c||a),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",j);for(let Y=0;Y<E.length;Y++){let te=b[Y];te!==null&&(b[Y]=null,E[Y].disconnect(te))}I=null,O=null,g.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(A),f=null,d=null,u=null,i=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),S!==null){let Y=S.camera;Y.fov=S.fov,Y.zoom=S.zoom,Y.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ue=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?ss:ei,Ue=M.stencil?wr:qn);let We={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Et(d.textureWidth,d.textureHeight,{format:vn,type:mn,depthTexture:new Qi(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Et(f.framebufferWidth,f.framebufferHeight,{format:vn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Y){for(let te=0;te<Y.removed.length;te++){let ye=Y.removed[te],Ue=b.indexOf(ye);Ue>=0&&(b[Ue]=null,E[Ue].disconnect(ye))}for(let te=0;te<Y.added.length;te++){let ye=Y.added[te],Ue=b.indexOf(ye);if(Ue===-1){for(let We=0;We<E.length;We++)if(We>=b.length){b.push(ye),Ue=We;break}else if(b[We]===null){b[We]=ye,Ue=We;break}if(Ue===-1)break}let _e=E[Ue];_e&&_e.connect(ye)}}let q=new P,$=new P;function J(Y,te,ye){q.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(ye.matrixWorld);let Ue=q.distanceTo($),_e=te.projectionMatrix.elements,We=ye.projectionMatrix.elements,Bt=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),nt=(_e[9]+1)/_e[5],gt=(_e[9]-1)/_e[5],Ze=(_e[8]-1)/_e[0],Mt=(We[8]+1)/We[0],Wt=Bt*Ze,hn=Bt*Mt,bt=Ue/(-Ze+Mt),Lt=bt*-Ze;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let F=Bt+bt,Zt=Ye+bt,lt=Wt-Lt,C=hn+(Ue-Lt),y=nt*Ye/Zt*F,B=gt*Ye/Zt*F;Y.projectionMatrix.makePerspective(lt,C,y,B,F,Zt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Se(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,ye=Y.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),H.near=L.near=R.near=te,H.far=L.far=R.far=ye,(I!==H.near||O!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,O=H.far),H.layers.mask=Y.layers.mask|6,R.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Ue=Y.parent,_e=H.cameras;Se(H,Ue);for(let We=0;We<_e.length;We++)Se(_e[We],Ue);_e.length===2?J(H,R,L):H.projectionMatrix.copy(R.projectionMatrix),S===null&&Y.isPerspectiveCamera&&(S={camera:Y,fov:Y.fov,zoom:Y.zoom}),Me(Y,H,Ue)};function Me(Y,te,ye){ye===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(Y){return m[Y]};let $e=null;function Ie(Y,te){if(h=te.getViewerPose(c||a),p=te,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ue=!1;ye.length!==H.cameras.length&&(H.cameras.length=0,Ue=!0);for(let Ye=0;Ye<ye.length;Ye++){let nt=ye[Ye],gt=null;if(f!==null)gt=f.getViewport(nt);else{let Mt=u.getViewSubImage(d,nt);gt=Mt.viewport,Ye===0&&(e.setRenderTargetTextures(v,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(v))}let Ze=U[Ye];Ze===void 0&&(Ze=new Ut,Ze.layers.enable(Ye),Ze.viewport=new ht,U[Ye]=Ze),Ze.matrix.fromArray(nt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(nt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(gt.x,gt.y,gt.width,gt.height),Ye===0&&(H.matrix.copy(Ze.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ue===!0&&H.cameras.push(Ze)}let _e=i.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ye=u.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,i.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ye=0;Ye<ye.length;Ye++){let nt=ye[Ye].camera;if(nt){let gt=m[nt];gt||(gt=new ga,m[nt]=gt);let Ze=u.getCameraImage(nt);gt.sourceTexture=Ze}}}}for(let ye=0;ye<E.length;ye++){let Ue=b[ye],_e=E[ye];Ue!==null&&_e!==void 0&&_e.update(Ue,te,c||a)}$e&&$e(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let je=new Sp;je.setAnimationLoop(Ie),this.setAnimationLoop=function(Y){$e=Y},this.dispose=function(){}}},uv=new De,Rp=new Oe;Rp.set(-1,0,0,0,1,0,0,0,1);function dv(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Wh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,A):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,v=M.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fv(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let b=E.program;n.uniformBlockBinding(v,b)}function c(v,E){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",M));let w=E.program;n.updateUBOMapping(v,w);let _=e.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){let E=u();v.__bindingPointIndex=E;let b=s.createBuffer(),w=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,b),b}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let E=i[v.id],b=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let _=0,S=b.length;_<S;_++){let R=b[_];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)f(R[L],_,L,w);else f(R,_,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,E,b,w){if(x(v,E,b,w)===!0){let _=v.__offset,S=v.value;if(Array.isArray(S)){let R=0;for(let L=0;L<S.length;L++){let U=S[L],H=m(U);p(U,v.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function p(v,E,b){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,b)}function x(v,E,b,w){let _=v.value,S=E+"_"+b;if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{let R=w[S];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(v){let E=v.uniforms,b=0,w=16;for(let S=0,R=E.length;S<R;S++){let L=Array.isArray(E[S])?E[S]:[E[S]];for(let U=0,H=L.length;U<H;U++){let I=L[U],O=Array.isArray(I.value)?I.value:[I.value];for(let W=0,V=O.length;W<V;W++){let j=O[W],q=m(j),$=b%w,J=$%q.boundary,Se=$+J;b+=J,Se!==0&&w-Se<q.storage&&(b+=w-Se),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=q.storage}}}let _=b%w;return _>0&&(b+=w-_),v.__size=b,v.__cache={},this}function m(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ae("WebGLRenderer: Unsupported uniform value type.",v),E}function M(v){let E=v.target;E.removeEventListener("dispose",M);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function A(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:A}}var pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function mv(){return di===null&&(di=new xr(pv,16,16,rs,kt),di.name="DFG_LUT",di.minFilter=Ct,di.magFilter=Ct,di.wrapS=wn,di.wrapT=wn,di.generateMipmaps=!1,di.needsUpdate=!0),di}var fc=class{constructor(e={}){let{canvas:t=Yf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Rl,Al,wl]),m=new Set([mn,qn,Er,wr,bl,Tl]),M=new Uint32Array(4),A=new Int32Array(4),v=new P,E=null,b=null,w=[],_=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,H=null,I=null,O=null;this._outputColorSpace=tt;let W=0,V=0,j=null,q=-1,$=null,J=new ht,Se=new ht,Me=null,$e=new ae(0),Ie=0,je=t.width,Y=t.height,te=1,ye=null,Ue=null,_e=new ht(0,0,je,Y),We=new ht(0,0,je,Y),Bt=!1,Ye=new yr,nt=!1,gt=!1,Ze=new De,Mt=new P,Wt=new ht,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Lt(){return j===null?te:1}let F=n;function Zt(T,N){return t.getContext(T,N)}let lt,C,y,B,G,K,ie,re,Z,ee,oe,Re,ue,le,Ce,Le,He,D,ce,Q,he,me,ne;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Un,!1),F===null){let N="webgl2";if(F=Zt(N,T),F===null)throw Zt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(T){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),Ne("WebGLRenderer: "+T.message),T}function Pe(){lt=new Sx(F),lt.init(),he=new lv(F,lt),C=new dx(F,lt,e,he),y=new av(F,lt),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),H=F.createFramebuffer(),I=F.createFramebuffer(),O=F.createFramebuffer(),B=new Ex(F),G=new qy,K=new ov(F,lt,y,G,C,he,B),ie=new Mx(R),re=new Ag(F),me=new hx(F,re),Z=new bx(F,re,B,me),ee=new Ax(F,Z,re,me,B),D=new wx(F,C,K),Ce=new fx(G),oe=new Xy(R,ie,lt,C,me,Ce),Re=new dv(R,G),ue=new Ky,le=new ev(lt),He=new cx(R,ie,y,ee,p,l),Le=new rv(R,ee,C),ne=new fv(F,B,C,y),ce=new ux(F,lt,B),Q=new Tx(F,lt,B),B.programs=oe.programs,R.capabilities=C,R.extensions=lt,R.properties=G,R.renderLists=ue,R.shadowMap=Le,R.state=y,R.info=B}x!==mn&&(S=new Cx(x,t.width,t.height,o,i,r));let Ee=new fu(R,F);this.xr=Ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(je,Y,!1))},this.getSize=function(T){return T.set(je,Y)},this.setSize=function(T,N,X=!0){if(Ee.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}je=T,Y=N,t.width=Math.floor(T*te),t.height=Math.floor(N*te),X===!0&&(t.style.width=T+"px",t.style.height=N+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(je*te,Y*te).floor()},this.setDrawingBufferSize=function(T,N,X){je=T,Y=N,te=X,t.width=Math.floor(T*X),t.height=Math.floor(N*X),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(x===mn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,N,X,z){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,N,X,z),y.viewport(J.copy(_e).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(We)},this.setScissor=function(T,N,X,z){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,N,X,z),y.scissor(Se.copy(We).multiplyScalar(te).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){y.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){ye=T},this.setTransparentSort=function(T){Ue=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,X=!0){let z=0;if(T){let k=!1;if(j!==null){let pe=j.texture.format;k=g.has(pe)}if(k){let pe=j.texture.type,ve=m.has(pe),fe=He.getClearColor(),be=He.getClearAlpha(),we=fe.r,ke=fe.g,Ke=fe.b;ve?(M[0]=we,M[1]=ke,M[2]=Ke,M[3]=be,F.clearBufferuiv(F.COLOR,0,M)):(A[0]=we,A[1]=ke,A[2]=Ke,A[3]=be,F.clearBufferiv(F.COLOR,0,A))}else z|=F.COLOR_BUFFER_BIT}N&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),He.dispose(),ue.dispose(),le.dispose(),G.dispose(),ie.dispose(),ee.dispose(),me.dispose(),ne.dispose(),oe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",dd),Ee.removeEventListener("sessionend",fd),fs.stop()};function _t(T){T.preventDefault(),aa("WebGLRenderer: Context Lost."),L=!0}function rt(){aa("WebGLRenderer: Context Restored."),L=!1;let T=B.autoReset,N=Le.enabled,X=Le.autoUpdate,z=Le.needsUpdate,k=Le.type;Pe(),B.autoReset=T,Le.enabled=N,Le.autoUpdate=X,Le.needsUpdate=z,Le.type=k}function Un(T){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Zn(T){let N=T.target;N.removeEventListener("dispose",Zn),am(N)}function am(T){om(T),G.remove(T)}function om(T){let N=G.get(T).programs;N!==void 0&&(N.forEach(function(X){oe.releaseProgram(X)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,X,z,k,pe){N===null&&(N=hn);let ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,fe=hm(T,N,X,z,k);y.setMaterial(z,ve);let be=X.index,we=1;if(z.wireframe===!0){if(be=Z.getWireframeAttribute(X),be===void 0)return;we=2}let ke=X.drawRange,Ke=X.attributes.position,Te=ke.start*we,at=(ke.start+ke.count)*we;pe!==null&&(Te=Math.max(Te,pe.start*we),at=Math.min(at,(pe.start+pe.count)*we)),be!==null?(Te=Math.max(Te,0),at=Math.min(at,be.count)):Ke!=null&&(Te=Math.max(Te,0),at=Math.min(at,Ke.count));let Nt=at-Te;if(Nt<0||Nt===1/0)return;me.setup(k,z,fe,X,be);let yt,pt=ce;if(be!==null&&(yt=re.get(be),pt=Q,pt.setIndex(yt)),k.isMesh)z.wireframe===!0?(y.setLineWidth(z.wireframeLinewidth*Lt()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(k.isLine){let Jt=z.linewidth;Jt===void 0&&(Jt=1),y.setLineWidth(Jt*Lt()),k.isLineSegments?pt.setMode(F.LINES):k.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else k.isPoints?pt.setMode(F.POINTS):k.isSprite&&pt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Jt=k._multiDrawStarts,xe=k._multiDrawCounts,tn=k._multiDrawCount,et=be?re.get(be).bytesPerElement:1,Tn=G.get(z).currentProgram.getUniforms();for(let Jn=0;Jn<tn;Jn++)Tn.setValue(F,"_gl_DrawID",Jn),pt.render(Jt[Jn]/et,xe[Jn])}else if(k.isInstancedMesh)pt.renderInstances(Te,Nt,k.count);else if(X.isInstancedBufferGeometry){let Jt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xe=Math.min(X.instanceCount,Jt);pt.renderInstances(Te,Nt,xe)}else pt.render(Te,Nt)};function ud(T,N,X,z){U!==null&&T.isNodeMaterial&&U.setObject(z,T),nt===!0&&Ce.setState(T,X,!1),T.transparent===!0&&T.side===zt&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,io(T,N,z),T.side=ci,T.needsUpdate=!0,io(T,N,z),T.side=zt):io(T,N,z)}this.compile=function(T,N,X=null){X===null&&(X=T),U!==null&&U.renderStart(T,N,X),b=le.get(X),b.init(N),_.push(b),X.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),T!==X&&T.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),gt=this.localClippingEnabled,nt=Ce.init(this.clippingPlanes,gt),nt===!0&&Ce.setGlobalState(this.clippingPlanes,N),U!==null&&Le.render(b.state.shadowsArray,X,N);let z=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){let fe=pe[ve];ud(fe,X,N,k),z.add(fe)}else ud(pe,X,N,k),z.add(pe)}),b=_.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(T,N,X=null){let z=this.compile(T,N,X);return new Promise(k=>{function pe(){if(z.forEach(function(ve){let be=G.get(ve).currentProgram;(be===void 0||be.isReady())&&z.delete(ve)}),z.size===0){k(T);return}setTimeout(pe,10)}lt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let zc=null;function lm(T){zc&&zc(T)}function dd(){fs.stop()}function fd(){fs.start()}let fs=new Sp;fs.setAnimationLoop(lm),typeof self!="undefined"&&fs.setContext(self),this.setAnimationLoop=function(T){zc=T,Ee.setAnimationLoop(T),T===null?fs.stop():fs.start()},Ee.addEventListener("sessionstart",dd),Ee.addEventListener("sessionend",fd),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(T,N);let X=Ee.enabled===!0&&Ee.isPresenting===!0,z=S!==null&&(j===null||X)&&S.begin(R,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(N),N=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,N,j),b=le.get(T,_.length),b.init(N),b.state.textureUnits=K.getTextureUnits(),_.push(b),Ze.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(Ze,kn,N.reversedDepth),gt=this.localClippingEnabled,nt=Ce.init(this.clippingPlanes,gt),E=ue.get(T,w.length),E.init(),w.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){let ve=R.xr.getDepthSensingMesh();ve!==null&&kc(ve,N,-1/0,R.sortObjects)}kc(T,N,0,R.sortObjects),E.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(ye,Ue),bt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,bt&&He.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ce.beginShadows();let k=b.state.shadowsArray;if(Le.render(k,T,N),nt===!0&&Ce.endShadows(),(z&&S.hasRenderPass())===!1){let ve=E.opaque,fe=E.transmissive;if(b.setupLights(),N.isArrayCamera){let be=N.cameras;if(fe.length>0)for(let we=0,ke=be.length;we<ke;we++){let Ke=be[we];md(ve,fe,T,Ke)}bt&&He.render(T);for(let we=0,ke=be.length;we<ke;we++){let Ke=be[we];pd(E,T,Ke,Ke.viewport)}}else fe.length>0&&md(ve,fe,T,N),bt&&He.render(T),pd(E,T,N)}j!==null&&V===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),z&&S.end(R),T.isScene===!0&&T.onAfterRender(R,T,N),me.resetDefaultState(),q=-1,$=null,_.pop(),_.length>0?(b=_[_.length-1],K.setTextureUnits(b.state.textureUnits),nt===!0&&Ce.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,U!==null&&U.renderEnd()};function kc(T,N,X,z){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ye)){z&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ze);let ve=ee.update(T),fe=T.material;fe.visible&&E.push(T,ve,fe,X,Wt.z,null,N)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ye))){let ve=ee.update(T),fe=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Wt.copy(ve.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(Ze)),Array.isArray(fe)){let be=ve.groups;for(let we=0,ke=be.length;we<ke;we++){let Ke=be[we],Te=fe[Ke.materialIndex];Te&&Te.visible&&E.push(T,ve,Te,X,Wt.z,Ke,N)}}else fe.visible&&E.push(T,ve,fe,X,Wt.z,null,N)}}let pe=T.children;for(let ve=0,fe=pe.length;ve<fe;ve++)kc(pe[ve],N,X,z)}function pd(T,N,X,z){let{opaque:k,transmissive:pe,transparent:ve}=T;b.setupLightsView(X),nt===!0&&Ce.setGlobalState(R.clippingPlanes,X),z&&y.viewport(J.copy(z)),k.length>0&&no(k,N,X),pe.length>0&&no(pe,N,X),ve.length>0&&no(ve,N,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function md(T,N,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let Te=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new Et(1,1,{generateMipmaps:!0,type:Te?kt:mn,minFilter:Xn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}let pe=b.state.transmissionRenderTarget[z.id],ve=z.viewport||J;pe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);let fe=R.getRenderTarget(),be=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor($e),Ie=R.getClearAlpha(),Ie<1&&R.setClearColor(16777215,.5),R.clear(),bt&&He.render(X);let ke=R.toneMapping;R.toneMapping=Wn;let Ke=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),nt===!0&&Ce.setGlobalState(R.clippingPlanes,z),no(T,X,z),K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let at=0,Nt=N.length;at<Nt;at++){let yt=N[at],{object:pt,geometry:Jt,material:xe,group:tn}=yt;if(xe.side===zt&&pt.layers.test(z.layers)){let et=xe.side;xe.side=on,xe.needsUpdate=!0,gd(pt,X,z,Jt,xe,tn),xe.side=et,xe.needsUpdate=!0,Te=!0}}Te===!0&&(K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe))}R.setRenderTarget(fe,be,we),R.setClearColor($e,Ie),Ke!==void 0&&(z.viewport=Ke),R.toneMapping=ke}function no(T,N,X){let z=N.isScene===!0?N.overrideMaterial:null;for(let k=0,pe=T.length;k<pe;k++){let ve=T[k],{object:fe,geometry:be,group:we}=ve,ke=ve.material;ke.allowOverride===!0&&z!==null&&(ke=z),fe.layers.test(X.layers)&&gd(fe,N,X,be,ke,we)}}function gd(T,N,X,z,k,pe){U!==null&&k.isNodeMaterial&&U.setObject(T,k),T.onBeforeRender(R,N,X,z,k,pe),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(R,N,X,z,T,pe),k.transparent===!0&&k.side===zt&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,R.renderBufferDirect(X,N,z,k,T,pe),k.side=ci,k.needsUpdate=!0,R.renderBufferDirect(X,N,z,k,T,pe),k.side=zt):R.renderBufferDirect(X,N,z,k,T,pe),T.onAfterRender(R,N,X,z,k,pe)}function io(T,N,X){N.isScene!==!0&&(N=hn);let z=G.get(T),k=b.state.lights,pe=b.state.shadowsArray,ve=k.state.version,fe=oe.getParameters(T,k.state,pe,N,X,b.state.lightProbeGridArray),be=oe.getProgramCacheKey(fe),we=z.programs;z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;z.envMap=ie.get(T.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,we===void 0&&(T.addEventListener("dispose",Zn),we=new Map,z.programs=we);let Ke=we.get(be);if(Ke!==void 0){if(z.currentProgram===Ke&&z.lightsStateVersion===ve)return xd(T,fe),Ke}else fe.uniforms=oe.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,X,fe),T.onBeforeCompile(fe,R),Ke=oe.acquireProgram(fe,be),we.set(be,Ke),z.uniforms=fe.uniforms;let Te=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=Ce.uniform),xd(T,fe),z.needsLights=dm(T),z.lightsStateVersion=ve,z.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.sunLights.value=k.state.sun,Te.sunLightShadows.value=k.state.sunShadow,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.sunShadowMatrix.value=k.state.sunShadowMatrix,Te.sunShadowCascade.value=k.state.sunShadowCascade,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Ke,z.uniformsList=null,Ke}function _d(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Pr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function xd(T,N){let X=G.get(T);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function cm(T,N){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let X=0,z=T.length;X<z;X++){let k=T[X];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function hm(T,N,X,z,k){N.isScene!==!0&&(N=hn),K.resetTextureUnits();let pe=N.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,fe=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ze.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=ie.get(z.envMap||ve,be),ke=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Nt=!!X.morphAttributes.color,yt=Wn;z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(yt=R.toneMapping);let pt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Jt=pt!==void 0?pt.length:0,xe=G.get(z),tn=b.state.lights;if(nt===!0&&(gt===!0||T!==$)){let xt=T===$&&z.id===q;Ce.setState(z,T,xt)}let et=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==tn.state.version||xe.outputColorSpace!==fe||k.isBatchedMesh&&xe.batching===!1||!k.isBatchedMesh&&xe.batching===!0||k.isBatchedMesh&&xe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&xe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&xe.instancing===!1||!k.isInstancedMesh&&xe.instancing===!0||k.isSkinnedMesh&&xe.skinning===!1||!k.isSkinnedMesh&&xe.skinning===!0||k.isInstancedMesh&&xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xe.instancingMorph===!1&&k.morphTexture!==null||xe.envMap!==we||z.fog===!0&&xe.fog!==pe||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ce.numPlanes||xe.numIntersection!==Ce.numIntersection)||xe.vertexAlphas!==ke||xe.vertexTangents!==Ke||xe.morphTargets!==Te||xe.morphNormals!==at||xe.morphColors!==Nt||xe.toneMapping!==yt||xe.morphTargetsCount!==Jt||!!xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,xe.__version=z.version);let Tn=xe.currentProgram;et===!0&&(Tn=io(z,N,k),U&&z.isNodeMaterial&&U.onUpdateProgram(z,Tn,xe));let Jn=!1,ki=!1,Gs=!1,dt=Tn.getUniforms(),wt=xe.uniforms;if(y.useProgram(Tn.program)&&(Jn=!0,ki=!0,Gs=!0),z.id!==q&&(q=z.id,ki=!0),xe.needsLights){let xt=cm(b.state.lightProbeGridArray,k);xe.lightProbeGrid!==xt&&(xe.lightProbeGrid=xt,ki=!0)}if(Jn||$!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),dt.setValue(F,"projectionMatrix",T.projectionMatrix),dt.setValue(F,"viewMatrix",T.matrixWorldInverse);let Vi=dt.map.cameraPosition;Vi!==void 0&&Vi.setValue(F,Mt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,ki=!0,Gs=!0)}if(xe.needsLights&&(tn.state.sunShadowMap.length>0&&dt.setValue(F,"sunShadowMap",tn.state.sunShadowMap,K),tn.state.directionalShadowMap.length>0&&dt.setValue(F,"directionalShadowMap",tn.state.directionalShadowMap,K),tn.state.spotShadowMap.length>0&&dt.setValue(F,"spotShadowMap",tn.state.spotShadowMap,K),tn.state.pointShadowMap.length>0&&dt.setValue(F,"pointShadowMap",tn.state.pointShadowMap,K)),k.isSkinnedMesh){dt.setOptional(F,k,"bindMatrix"),dt.setOptional(F,k,"bindMatrixInverse");let xt=k.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),dt.setValue(F,"boneTexture",xt.boneTexture,K))}k.isBatchedMesh&&(dt.setOptional(F,k,"batchingTexture"),dt.setValue(F,"batchingTexture",k._matricesTexture,K),dt.setOptional(F,k,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",k._indirectTexture,K),dt.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",k._colorsTexture,K));let Gi=X.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&D.update(k,X,Tn),(ki||xe.receiveShadow!==k.receiveShadow)&&(xe.receiveShadow=k.receiveShadow,dt.setValue(F,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(wt.envMapIntensity.value=N.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=mv()),ki){if(dt.setValue(F,"toneMappingExposure",R.toneMappingExposure),xe.needsLights&&um(wt,Gs),pe&&z.fog===!0&&Re.refreshFogUniforms(wt,pe),Re.refreshMaterialUniforms(wt,z,te,Y,b.state.transmissionRenderTarget[T.id]),xe.needsLights&&xe.lightProbeGrid){let xt=xe.lightProbeGrid;wt.probesSH.value=xt.texture,wt.probesMin.value.copy(xt.boundingBox.min),wt.probesMax.value.copy(xt.boundingBox.max),wt.probesResolution.value.copy(xt.resolution)}Pr.upload(F,_d(xe),wt,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pr.upload(F,_d(xe),wt,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(F,"center",k.center),dt.setValue(F,"modelViewMatrix",k.modelViewMatrix),dt.setValue(F,"normalMatrix",k.normalMatrix),dt.setValue(F,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let xt=z.uniformsGroups;for(let Vi=0,Vs=xt.length;Vi<Vs;Vi++){let vd=xt[Vi];ne.update(vd,Tn),ne.bind(vd,Tn)}}return Tn}function um(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function dm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,N,X){let z=G.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(T.texture).__webglTexture=N,G.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let X=G.get(T);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,X=0){j=T,W=N,V=X;let z=null,k=!1,pe=!1;if(T){let fe=G.get(T);if(fe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,fe.__webglFramebuffer),J.copy(T.viewport),Se.copy(T.scissor),Me=T.scissorTest,y.viewport(J),y.scissor(Se),y.setScissorTest(Me),q=-1;return}else if(fe.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(fe.__hasExternalTextures)K.rebindTextures(T,G.get(T.texture).__webglTexture,G.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ke=T.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&G.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}let be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);let we=G.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(we[N])?z=we[N][X]:z=we[N],k=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?z=G.get(T).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[X]:z=we,J.copy(T.viewport),Se.copy(T.scissor),Me=T.scissorTest}else J.copy(_e).multiplyScalar(te).floor(),Se.copy(We).multiplyScalar(te).floor(),Me=Bt;if(X!==0&&(z=H),y.bindFramebuffer(F.FRAMEBUFFER,z)&&y.drawBuffers(T,z),y.viewport(J),y.scissor(Se),y.setScissorTest(Me),k){let fe=G.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,X)}else if(pe){let fe=N;for(let be=0;be<T.textures.length;be++){let we=G.get(T.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,we.__webglTexture,X,fe)}}else if(T!==null&&X!==0){let fe=G.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,X)}q=-1};function yd(T){let N=G.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=C.textureFormatReadable(T.format),N.__typeReadable=C.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,X,z,k,pe,ve,fe=0){if(!(T&&T.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){y.bindFramebuffer(F.FRAMEBUFFER,be);try{let we=T.textures[fe],ke=we.format,Ke=we.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);let Te=yd(we);if(Te.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-z&&X>=0&&X<=T.height-k&&F.readPixels(N,X,z,k,he.convert(ke),he.convert(Ke),pe)}finally{let we=j!==null?G.get(j).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,N,X,z,k,pe,ve,fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=G.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(N>=0&&N<=T.width-z&&X>=0&&X<=T.height-k){y.bindFramebuffer(F.FRAMEBUFFER,be);let we=T.textures[fe],ke=we.format,Ke=we.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);let Te=yd(we);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(N,X,z,k,he.convert(ke),he.convert(Ke),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Nt=j!==null?G.get(j).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Nt);let yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Zf(F,yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(at),F.deleteSync(yt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,X=0){let z=Math.pow(2,-X),k=Math.floor(T.image.width*z),pe=Math.floor(T.image.height*z),ve=N!==null?N.x:0,fe=N!==null?N.y:0;K.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,ve,fe,k,pe),y.unbindTexture()},this.copyTextureToTexture=function(T,N,X=null,z=null,k=0,pe=0){let ve,fe,be,we,ke,Ke,Te,at,Nt,yt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(X!==null)ve=X.max.x-X.min.x,fe=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,we=X.min.x,ke=X.min.y,Ke=X.isBox3?X.min.z:0;else{let wt=Math.pow(2,-k);ve=Math.floor(yt.width*wt),fe=Math.floor(yt.height*wt),T.isDataArrayTexture?be=yt.depth:T.isData3DTexture?be=Math.floor(yt.depth*wt):be=1,we=0,ke=0,Ke=0}z!==null?(Te=z.x,at=z.y,Nt=z.z):(Te=0,at=0,Nt=0);let pt=he.convert(N.format),Jt=he.convert(N.type),xe;N.isData3DTexture?(K.setTexture3D(N,0),xe=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),xe=F.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),xe=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let tn=y.getParameter(F.UNPACK_ROW_LENGTH),et=y.getParameter(F.UNPACK_IMAGE_HEIGHT),Tn=y.getParameter(F.UNPACK_SKIP_PIXELS),Jn=y.getParameter(F.UNPACK_SKIP_ROWS),ki=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,we),y.pixelStorei(F.UNPACK_SKIP_ROWS,ke),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);let Gs=T.isDataArrayTexture||T.isData3DTexture,dt=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let wt=G.get(T),Gi=G.get(N),xt=G.get(wt.__renderTarget),Vi=G.get(Gi.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,xt.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Vs=0;Vs<be;Vs++)Gs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(T).__webglTexture,k,Ke+Vs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(N).__webglTexture,pe,Nt+Vs)),F.blitFramebuffer(we,ke,ve,fe,Te,at,ve,fe,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||G.has(T)){let wt=G.get(T),Gi=G.get(N);y.bindFramebuffer(F.READ_FRAMEBUFFER,I),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let xt=0;xt<be;xt++)Gs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,k,Ke+xt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wt.__webglTexture,k),dt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Gi.__webglTexture,pe,Nt+xt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Gi.__webglTexture,pe),k!==0?F.blitFramebuffer(we,ke,ve,fe,Te,at,ve,fe,F.COLOR_BUFFER_BIT,F.NEAREST):dt?F.copyTexSubImage3D(xe,pe,Te,at,Nt+xt,we,ke,ve,fe):F.copyTexSubImage2D(xe,pe,Te,at,we,ke,ve,fe);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(xe,pe,Te,at,Nt,ve,fe,be,pt,Jt,yt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(xe,pe,Te,at,Nt,ve,fe,be,pt,yt.data):F.texSubImage3D(xe,pe,Te,at,Nt,ve,fe,be,pt,Jt,yt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Te,at,ve,fe,pt,Jt,yt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Te,at,yt.width,yt.height,pt,yt.data):F.texSubImage2D(F.TEXTURE_2D,pe,Te,at,ve,fe,pt,Jt,yt);y.pixelStorei(F.UNPACK_ROW_LENGTH,tn),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Tn),y.pixelStorei(F.UNPACK_SKIP_ROWS,Jn),y.pixelStorei(F.UNPACK_SKIP_IMAGES,ki),pe===0&&N.generateMipmaps&&F.generateMipmap(xe),y.unbindTexture()},this.initRenderTarget=function(T){G.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){W=0,V=0,j=null,y.reset(),me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};var Lr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},gv=new li(-1,1,1,-1,0,1),pu=class extends Xe{constructor(){super(),this.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Fe([0,2,0,0,2,0],2))}},_v=new pu,as=class{constructor(e){this._mesh=new ge(_v,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Nr=class extends Mn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oi.clone(e.uniforms),this.material=new mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new as(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ka=class extends Mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},gc=class extends Mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var _c=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Et(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nr(Lr),this.copyPass.material.blending=Pn,this.timer=new Ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ka!==void 0&&(a instanceof Ka?n=!0:a instanceof gc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xc=class extends Mn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ae}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var Cp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Dr=class s extends Mn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Et(r,a,{type:kt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Et(r,a,{type:kt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Et(r,a,{type:kt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Cp;this.highPassUniforms=Oi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Oi.clone(Lr.uniforms),this.blendMaterial=new mt({uniforms:this.copyUniforms,vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,premultipliedAlpha:!0,blending:st,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ae,this._oldClearAlpha=1,this._basic=new Qe,this._fsQuad=new as(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new mt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Dr.BlurDirectionX=new se(1,0);Dr.BlurDirectionY=new se(0,1);var Za={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var yc=class extends Mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Oi.clone(Za.uniforms),this.material=new vr({name:Za.name,uniforms:this.uniforms,vertexShader:Za.vertexShader,fragmentShader:Za.fragmentShader}),this._fsQuad=new as(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===La?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ns?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ua&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function os(s){let e=document.createElement("canvas");return e.width=e.height=s,e}function ls(s,e=!0){let t=new Rn(s);return e&&(t.colorSpace=tt),t.anisotropy=4,t}var mu=null;function Yn(){if(mu)return mu;let s=os(128),e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.55)"),t.addColorStop(.6,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),mu=ls(s)}var gu=null;function Ja(){if(gu)return gu;let s=os(64),e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(0,0,0,.75)"),t.addColorStop(.5,"rgba(0,0,0,.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),gu=ls(s,!1)}function Pp(s=1024){let e=os(s),t=e.getContext("2d"),n=s/2;t.fillStyle="#0b0807",t.fillRect(0,0,s,s);for(let i=n*.3;i<n*.985;i+=1.6){let r=.05+.05*Math.random();t.strokeStyle=`rgba(255,255,255,${r})`,t.lineWidth=.7,t.beginPath(),t.arc(n,n,i,0,Math.PI*2),t.stroke()}for(let i of[.52,.7,.86])t.strokeStyle="rgba(0,0,0,.85)",t.lineWidth=5,t.beginPath(),t.arc(n,n,n*i,0,Math.PI*2),t.stroke();return t.strokeStyle="rgba(255,255,255,.18)",t.lineWidth=3,t.beginPath(),t.arc(n,n,n*.99,0,Math.PI*2),t.stroke(),ls(e)}function Ip(s=512){let e=os(s),t=e.getContext("2d"),n=s/2;t.fillStyle="#6a6a6a",t.fillRect(0,0,s,s);for(let i=n*.3;i<n*.985;i+=1.2){let r=60+Math.floor(Math.random()*90);t.strokeStyle=`rgb(${r},${r},${r})`,t.lineWidth=.6,t.beginPath(),t.arc(n,n,i,0,Math.PI*2),t.stroke()}return ls(e,!1)}function Lp(s=512){let e=os(s),t=e.getContext("2d"),n=s/2;if(typeof t.createConicGradient=="function"){let i=t.createConicGradient(-Math.PI/4,n,n);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.06,"rgba(255,255,255,.55)"),i.addColorStop(.14,"rgba(255,255,255,0)"),i.addColorStop(.5,"rgba(255,255,255,0)"),i.addColorStop(.56,"rgba(255,255,255,.4)"),i.addColorStop(.64,"rgba(255,255,255,0)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i}else t.fillStyle="rgba(255,255,255,.08)";return t.beginPath(),t.arc(n,n,n,0,Math.PI*2),t.arc(n,n,n*.3,0,Math.PI*2,!0),t.fill(),ls(e)}function Np(s,e=512){let t=os(e),n=t.getContext("2d"),i=e/2,r=n.createRadialGradient(i*.8,i*.7,0,i,i,i);r.addColorStop(0,"#ffffff"),r.addColorStop(.18,s),r.addColorStop(1,vc(s,-.35)),n.fillStyle=r,n.beginPath(),n.arc(i,i,i,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4;for(let a of[.92,.62])n.beginPath(),n.arc(i,i,i*a,0,Math.PI*2),n.stroke();return n.fillStyle="rgba(20,10,8,.85)",n.font=`900 ${Math.round(e*.11)}px Orbitron, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText("BEAT",i,i*.62),n.fillText("ORBIT",i,i*1.38),ls(t)}var _u=null;function Ur(){if(_u)return _u;let s=os(64),e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,.8)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),_u=ls(s)}var xu=null;function Dp(){if(xu)return xu;let s=os(128),e=s.getContext("2d");return e.strokeStyle="#ffd24a",e.lineWidth=7,e.setLineDash([14,9]),e.beginPath(),e.arc(64,64,54,0,Math.PI*2),e.stroke(),xu=ls(s)}function vc(s,e){let t=s.replace("#",""),n=parseInt(t.length===3?t.split("").map(l=>l+l).join(""):t,16),i=l=>Math.max(0,Math.min(255,Math.round(l+(e<0?l*e:(255-l)*e)))),r=i(n>>16&255),a=i(n>>8&255),o=i(n&255);return"#"+(1<<24|r<<16|a<<8|o).toString(16).slice(1)}function Fp(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Xe,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Up(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=Up(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Up(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Je(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function yu(s,e){if(e===Hh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ar||e===Wa){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ar)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function Mc(s){let e=new Map,t=new Map,n=s.clone();return Op(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Op(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Op(s.children[n],e.children[n],t)}var Sc=class extends ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new bc(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bc(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Di.extractUrlBase(e);a=Di.resolveURL(c,this.path)}else a=Di.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gp){try{a[qe.KHR_BINARY_GLTF]=new zu(e)}catch(u){i&&i(u);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new Tu;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new ku(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new Gu;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new Vu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function xv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function It(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bu=class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ns(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oi(h),c.distance=u;break;case"spot":c=new wa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Tu=class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Qe}extendParams(e,t,n){let i=[];e.color=new ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,tt))}return Promise.all(i)}},Eu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},wu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(r,r)}return Promise.all(i)}},Au=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Cu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new ae(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,tt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Pu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Iu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ae().setRGB(r[0],r[1],r[2],sn),Promise.all(i)}},Lu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Nu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ae().setRGB(r[0],r[1],r[2],sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,tt)),Promise.all(i)}},Du=class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Uu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?fn:null}extendMaterialParams(e,t){let n=It(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Fu=class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ou=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Bu=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},bc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Hu=class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let x=new De,g=new P,m=new At,M=new P(1,1,1),A=new $i(p.geometry,p.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&M.fromBufferAttribute(l.SCALE,E),A.setMatrixAt(E,x.compose(g,m,M));let v=null;for(let E in l)if(E==="_COLOR_0"){let b=l[E];A.instanceColor=new wi(b.array,b.itemSize,b.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(v===null){let w=A.geometry;v=new Xe,v.name=w.name;for(let _ in w.attributes)v.setAttribute(_,w.attributes[_]);for(let _ in w.morphAttributes)v.morphAttributes[_]=w.morphAttributes[_];w.index!==null&&v.setIndex(w.index),v.morphTargetsRelative=w.morphTargetsRelative;for(let _ of w.groups)v.addGroup(_.start,_.count,_.materialIndex);w.boundingBox!==null&&(v.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(v.boundingSphere=w.boundingSphere.clone()),v.drawRange.start=w.drawRange.start,v.drawRange.count=w.drawRange.count,v.userData=Object.assign({},w.userData),A.geometry=v}let b=l[E];v.setAttribute(E,new wi(b.array,b.itemSize,b.normalized))}vt.prototype.copy.call(A,p),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Gp="glTF",$a=12,Bp={JSON:1313821514,BIN:5130562},zu=class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,$a),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-$a,r=new DataView(e,$a),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Bp.JSON){let c=new Uint8Array(e,$a+a,o);this.content=n.decode(c)}else if(l===Bp.BIN){let c=$a+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ku=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Xu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Xu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Fr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=l[p];g!==void 0&&(x.normalized=g)}u(f)},o,c,sn,d)})})}},Gu=class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Vu=class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},Tc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,x=p-c,g=-2*f+3*d,m=f-d,M=1-g,A=m-d+u;for(let v=0;v!==o;v++){let E=a[x+v+o],b=a[x+v+l]*h,w=a[p+v+o],_=a[p+v]*h;r[v]=M*E+A*b+g*w+m*_}return r}},yv=new At,Wu=class extends Tc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return yv.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hp={9728:Rt,9729:Ct,9984:Ml,9985:Tr,9986:Us,9987:Xn},zp={33071:wn,33648:ur,10497:An},vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vv={CUBICSPLINE:void 0,LINEAR:Ss,STEP:Ms},Mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),s.DefaultMaterial}function Hs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function bv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tv(s){let e,t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Su(t.attributes):e=s.indices+":"+Su(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Su(s.targets[n]);return e}function Su(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function qu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ev(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wv=new De,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new Ps(this.options.manager):this.textureLoader=new Aa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Hs(r,o,i),pi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Di.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=vu[i.type],o=Fr[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Je(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=vu[i.type],c=Fr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,g;if(f&&f!==u){let m=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,A=t.cache.get(M);A||(x=new c(o,m*f,i.count*f/h),A=new Ts(x,f/h),t.cache.add(M,A)),g=new Ji(A,l,d%f/h,p)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),g=new Je(x,l,p);if(i.sparse!==void 0){let m=vu.SCALAR,M=Fr[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new M(a[1],A,i.sparse.count*m),b=new c(a[2],v,i.sparse.count*l);o!==null&&(g=new Je(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,_=E.length;w<_;w++){let S=E[w];if(g.setX(S,b[w*l]),l>=2&&g.setY(S,b[w*l+1]),l>=3&&g.setZ(S,b[w*l+2]),l>=4&&g.setW(S,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hp[d.magFilter]||Ct,h.minFilter=Hp[d.minFilter]||Xn,h.wrapS=zp[d.wrapS]||An,h.wrapT=zp[d.wrapT]||An,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new Pt(x);g.needsUpdate=!0,d(g)}),t.load(Di.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),pi(u,a),u.userData.mimeType=a.mimeType||Ev(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ai,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ji,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Tt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){let u=i[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=zt);let h=r.alphaMode||Mu.OPAQUE;if(h===Mu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Mu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qe&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Qe&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qe){let u=r.emissiveFactor;o.emissive=new ae().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&a!==Qe&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,tt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Hs(i,u,r),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return kp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Tv(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=kp(new Xe,c,t),c.mode===In.TRIANGLE_STRIP?d=d.then(f=>yu(f,Wa)):c.mode===In.TRIANGLE_FAN&&(d=d.then(f=>yu(f,Ar))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Mv(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=a[f],m,M=c[f];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0){let A=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");A&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=A&&v?new da(x,M):new ge(x,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===In.LINES)m=new As(x,M);else if(g.mode===In.LINE_STRIP)m=new ws(x,M);else if(g.mode===In.LINE_LOOP)m=new pa(x,M);else if(g.mode===In.POINTS)m=new ti(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&bv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),pi(m,r),g.extensions&&Hs(i,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Hs(i,u[0],r),u[0];let d=new Be;r.extensions&&Hs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(ui.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new li(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new fa(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],p=i.samplers[f.sampler],x=f.target,g=x.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,M=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let A=0,v=d.length;A<v;A++){let E=d[A],b=f[A],w=p[A],_=x[A],S=g[A];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let R=n._createAnimationTracks(E,b,w,_,S);if(R)for(let L=0;L<R.length;L++)m.push(R[L])}let M=new Ni(r,void 0,m);return pi(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,wv)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new _r:c.length>1?h=new Be:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),pi(h,r),r.extensions&&Hs(n,h,r),r.matrix!==void 0){let u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Be;n.name&&(r.name=i.createUniqueName(n.name)),pi(r,n),n.extensions&&Hs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Mc(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof an||d instanceof Pt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}cs[r.path]===cs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(cs[r.path]){case cs.weights:h=Pi;break;case cs.rotation:h=Ii;break;case cs.translation:case cs.scale:h=ts;break;default:n.itemSize===1?h=Pi:h=ts;break}let u=i.interpolation!==void 0?vv[i.interpolation]:Ss,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+cs[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ii?Wu:Tc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Av(s,e,t){let n=e.attributes,i=new rn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let h=qu(Fr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=qu(Fr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function kp(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Xu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return ze.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),pi(s,e),Av(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Sv(s,e.targets,t):s})}var Rv=new Ps,Cv=new Sc,Ku=new Map,Zu=new Map,Ju=[];function Vp(s,e){Ju.push(s),console.warn("[Render3D] asset y\xFCklenemedi:",s,e&&e.message?e.message:e)}function Ec(s){if(!s)return Promise.resolve(null);if(Ku.has(s))return Ku.get(s);let e=new Promise(t=>{Rv.load(s,n=>{n.colorSpace=tt,n.anisotropy=4,t(n)},void 0,n=>{Vp(s,n),t(null)})});return Ku.set(s,e),e}function Pv(s){if(!s)return Promise.resolve(null);if(Zu.has(s))return Zu.get(s);let e=new Promise(t=>{Cv.load(s,n=>t(n),void 0,n=>{Vp(s,n),t(null)})});return Zu.set(s,e),e}function Iv(s){return s?typeof s=="string"?/\.(glb|gltf)$/i.test(s)?{model:s}:{image:s}:typeof s=="object"&&(s.image||s.sheet||s.model)?s:null:null}async function gn(s){let e=Iv(s);if(!e)return null;if(e.model){let n=await Pv(e.model);return n?{kind:"model",gltf:n,opts:e}:null}if(e.sheet){let n=await Ec(e.sheet);if(!n)return null;let i=Math.max(1,e.cols|0||1),r=Math.max(1,e.rows|0||1);return n.repeat.set(1/i,1/r),{kind:"sheet",texture:n,opts:Object.assign({cols:i,rows:r,frames:i*r,fps:12,loop:!0},e)}}let t=await Ec(e.image);return t?{kind:"image",texture:t,opts:e}:null}function $u(s,e){let t=s.opts,n=Math.floor(e*t.fps);n=t.loop===!1?Math.min(n,t.frames-1):n%t.frames;let i=n%t.cols,r=Math.floor(n/t.cols);s.texture.offset.set(i/t.cols,1-(r+1)/t.rows)}function zs(s,e){let t=s.gltf.scene,n=Mc(t),i=new rn().setFromObject(n),r=new P;i.getSize(r);let a=new P;i.getCenter(a);let o=Math.max(r.x,r.y,r.z)||1,l=e/o,c=new Be;n.position.sub(a),c.add(n);let h=new Be;c.scale.setScalar(l);let u=s.opts.rotation;Array.isArray(u)&&c.rotation.set(ui.degToRad(u[0]||0),ui.degToRad(u[1]||0),ui.degToRad(u[2]||0)),h.add(c);let d=null,f=s.gltf.animations||[];if(f.length){d=new Ca(n);let p=s.opts.animation&&Ni.findByName(f,s.opts.animation)||f[0];d.clipAction(p).play()}return n.traverse(p=>{p.isMesh&&(p.castShadow=!1,p.receiveShadow=!1)}),{object:h,mixer:d}}var Or=class{constructor(e){this.maxPts=e;let t=e*2;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.side=new Float32Array(t),this.index=new Uint16Array(e*6),this.tmp=new Float32Array(e*8);let n=new Xe;n.setAttribute("position",new Je(this.pos,3).setUsage(hi)),n.setAttribute("aColor",new Je(this.col,4).setUsage(hi)),n.setAttribute("aSide",new Je(this.side,1).setUsage(hi)),n.setIndex(new Je(this.index,1).setUsage(hi)),n.setDrawRange(0,0),this.geo=n,this.mat=new mt({vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:st}),this.mesh=new ge(n,this.mat),this.mesh.frustumCulled=!1,this.v=0,this.i=0,this.sn=0}begin(){this.v=0,this.i=0}strip(){this.sn=0}p(e,t,n,i,r,a,o,l){if(this.sn>=this.maxPts)return;let c=this.sn*8,h=this.tmp;h[c]=e,h[c+1]=t,h[c+2]=n,h[c+3]=i,h[c+4]=r,h[c+5]=a,h[c+6]=o,h[c+7]=l,this.sn++}endStrip(){let e=this.sn,t=this.tmp;if(e<2||this.v+e*2>this.maxPts*2||this.i+(e-1)*6>this.index.length)return;let n=this.v;for(let i=0;i<e;i++){let r=i*8,a=(i>0?i-1:i)*8,o=(i<e-1?i+1:i)*8,l=t[o]-t[a],c=t[o+2]-t[a+2],h=Math.hypot(l,c)||1;l/=h,c/=h;let u=t[r+3]*.5,d=-c*u,f=l*u;for(let p=-1;p<=1;p+=2){let x=this.v++;this.pos[x*3]=t[r]+d*p,this.pos[x*3+1]=t[r+1],this.pos[x*3+2]=t[r+2]+f*p,this.col[x*4]=t[r+4],this.col[x*4+1]=t[r+5],this.col[x*4+2]=t[r+6],this.col[x*4+3]=t[r+7],this.side[x]=p}}for(let i=0;i<e-1;i++){let r=n+i*2,a=r+2,o=this.index,l=this.i;o[l++]=r,o[l++]=r+1,o[l++]=a,o[l++]=r+1,o[l++]=a+1,o[l++]=a,this.i=l}}end(){let e=this.geo;e.setDrawRange(0,this.i),e.attributes.position.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0,e.attributes.aSide.needsUpdate=!0,e.index.needsUpdate=!0}};function Wp(s,e,t,n,i,r,a,o,l){let c=i-e,h=a-n,u=Math.hypot(c,h)||1,d=-h/u,f=c/u;for(let p=0;p<=o;p++){let x=p/o,g=Math.sin(x*Math.PI),m=p===0||p===o?0:(Math.random()*2-1)*l*u*g;s[p*3]=e+c*x+d*m,s[p*3+1]=t+(r-t)*x,s[p*3+2]=n+h*x+f*m}return o+1}var Sn=.44,Br=.012;var ln=st;function Nn(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e||s,t}function Dn(s,e){let t=new Rn(s);return t.colorSpace=tt,t.anisotropy=4,e&&(t.wrapS=An),t}function ju(s,e,t,n,i){let r=[],a=[],o=[];for(let c=0;c<=t;c++){let h=c/t*Math.PI*2,u=Math.cos(h),d=Math.sin(h),f=c/t*n;if(r.push(u*(s-e/2),i,d*(s-e/2),u*(s+e/2),i,d*(s+e/2)),a.push(f,0,f,1),c<t){let p=c*2;o.push(p,p+2,p+1,p+1,p+2,p+3)}}let l=new Xe;return l.setAttribute("position",new Fe(r,3)),l.setAttribute("uv",new Fe(a,2)),l.setIndex(o),l}function ja(s,e,t,n){return new ge(ju(e,t,160,1,Br+.002),new Qe({color:s,transparent:!0,opacity:n,depthWrite:!1,blending:ln,side:zt}))}function wc(s){return s.aspect<.9?{bl:[-.5,-.74],br:[.52,-.78],ul:[-.6,.52],ur:[.6,.52],bc:[0,-.86],sky:.58}:{bl:[-.8,-.5],br:[.86,-.45],ul:[-.8,.42],ur:[.82,.38],bc:[0,-.9],sky:.55}}function hs(s,e,t,n,i,r){let a=e.ground(t,n,i),o=Sn+(r||.06),l=a&&Math.hypot(a.x-.36,a.z+.42)<.1+(r||.06);return s.visible=!!a&&Math.hypot(a.x,a.z)>o&&!l,a&&s.position.set(a.x,i,a.z),e.camPos?(s.up.copy(e.camUp),s.lookAt(e.camPos)):s.rotation.set(-e.tilt,0,0),s.visible}function Ln(s){return new Qe(Object.assign({transparent:!0,depthWrite:!1,side:zt},s))}function Qu(){let s=Nn(64),e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Dn(s)}function Yp(){let s=Nn(256,16),e=s.getContext("2d"),t=e.createLinearGradient(0,0,256,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.8,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,1)"),e.fillStyle=t,e.fillRect(0,0,256,16),e.globalCompositeOperation="destination-in";let n=e.createLinearGradient(0,0,0,16);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(0,0,0,1)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,16),Dn(s)}function Kp(s,e){let t=new St(1,1);return t.translate(-.5,0,0),new ge(t,Ln({map:s,color:e,blending:ln,opacity:0}))}var Yt=(s,e)=>s+Math.random()*(e-s),Lv=s=>Math.pow(Math.max(0,Math.sin(s*Math.PI*2*1.6)),6);function Nv(s,e){let n=Nn(512),i=n.getContext("2d"),r=i.createRadialGradient(512*.55,512*.35,0,512/2,512/2,512*.75);return r.addColorStop(0,s),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,512,512),Dn(n)}function Dv(){let t=Nn(320,200),n=t.getContext("2d"),i=(x,g,m,M,A)=>{n.beginPath(),n.moveTo(x+A,g),n.arcTo(x+m,g,x+m,g+M,A),n.arcTo(x+m,g+M,x,g+M,A),n.arcTo(x,g+M,x,g,A),n.arcTo(x,g,x+m,g,A),n.closePath()},r=n.createLinearGradient(0,0,0,200);r.addColorStop(0,"#5a3220"),r.addColorStop(1,"#2a160d"),n.fillStyle=r,i(0,0,320,200,18),n.fill();let a=n.createRadialGradient(320/2,200*.85,10,320/2,200*.7,320*.6);a.addColorStop(0,"#ffe6b0"),a.addColorStop(.6,"#f0c47c"),a.addColorStop(1,"#a8743c"),n.fillStyle=a,i(14,14,292,172,10),n.fill();let o=320/2,l=200*.92,c=128,h=-Math.PI/2-.82,u=-Math.PI/2+.82,d=h+(u-h)*.7;n.lineCap="round",n.strokeStyle="#2a1a10",n.lineWidth=3,n.beginPath(),n.arc(o,l,c,h,d),n.stroke(),n.strokeStyle="#c0281c",n.lineWidth=7,n.beginPath(),n.arc(o,l,c+2,d,u),n.stroke();let f=[0,.18,.33,.45,.56,.7,.8,.9,1];for(let x of f){let g=h+(u-h)*x,m=x>.7;n.strokeStyle=m?"#c0281c":"#2a1a10",n.lineWidth=3,n.beginPath(),n.moveTo(o+Math.cos(g)*(c+4),l+Math.sin(g)*(c+4)),n.lineTo(o+Math.cos(g)*(c+16),l+Math.sin(g)*(c+16)),n.stroke()}n.fillStyle="#2a1a10",n.font="bold 30px Georgia, serif",n.textAlign="center",n.fillText("VU",o,l-46),n.font="15px Georgia, serif",n.fillStyle="#5a3a22",n.fillText("-20",o+Math.cos(h)*(c-14),l+Math.sin(h)*(c-14)+6),n.fillStyle="#c0281c",n.fillText("+3",o+Math.cos(u)*(c-14),l+Math.sin(u)*(c-14)+6);let p=n.createLinearGradient(0,14,0,200*.5);return p.addColorStop(0,"rgba(255,255,255,.22)"),p.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=p,i(14,14,292,200*.42,10),n.fill(),{tex:Dn(t),pivot:[o/320,l/200],len:(c+6)/320,a:.82}}function Uv(){let s=Nn(64,256),e=s.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,256),e.globalCompositeOperation="destination-in";let n=e.createLinearGradient(0,0,0,256);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.7,"rgba(0,0,0,.45)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,256),Dn(s)}function Fv(){let s=new Be,e=ja("#ff8a3d",Sn*1.008,.0035,.55),t=ja("#ff6a2a",Sn*1.008,.018,.1);s.add(e,t);let n=new Be;s.add(n);let i=Uv(),r=new ge(new St(.42,3.4),Ln({map:i,color:"#ffb36b",blending:ln,opacity:.05}));n.add(r);let a=-1.25,o=1.55,l=-.5,c=Math.sin(-l),h=-Math.cos(-l);r.position.set(a+c*1.7,o+h*1.7,0),r.rotation.z=l;let u=34,d=Qu(),f=new $i(new St(1,1),Ln({map:d,blending:ln,opacity:1}),u);f.frustumCulled=!1,n.add(f);let p=Array.from({length:u},()=>({x:Yt(-1.3,1.3),y:Yt(-1.6,1.6),s:Yt(.006,.013),ph:Yt(0,9),sp:Yt(.5,1.2)})),x=new De,g=new At,m=new P,M=new P,A=new ae,v=new ae("#ffc58a"),E=new Be;s.add(E);let b=Dv(),w=.12,_=w*200/320;E.add(new ge(new St(w,_),Ln({map:b.tex,color:"#a8927c"})));let S=b.len*w,R=new St(.0016,S);R.translate(0,S/2,0);let L=new ge(R,Ln({color:"#1a0f08",opacity:.92}));L.position.set((b.pivot[0]-.5)*w,(.5-b.pivot[1])*_,8e-4),E.add(L);let U=new ge(new ii(.006,16),Ln({color:"#2a1a10"}));U.position.copy(L.position),U.position.z=.001,E.add(U);let H=new ge(new ii(.0042,16),Ln({color:"#ff3a22",opacity:.15}));H.position.set(w*.39,_*.33,.001),E.add(H);let I=.2,O=0,W=0;return{group:s,label:"assets3d/themes/neon/label.jpg",background:Nv("#2b1610","#070302"),vinyl:"#d9d3cf",armMetal:"#b8925a",stars:0,nebula:0,dust:0,sheen:.1,bloom:.4,ringColor:"#d9b48a",ringBaseColor:"#d9b48a",ringBase:.13,ringFlash:"#ffc27a",layout(V){let j=wc(V);n.position.set(0,-.12,0),n.rotation.set(-Math.PI/2,0,0),hs(E,V,j.br[0],j.br[1],.02,.1)},onNote(){O=Math.min(1,O+.45)},update(V,j,q){t.material.opacity=.08+Math.sin(j*2)*.03,r.material.opacity=.065+Math.sin(j*.37)*.015+Math.sin(j*1.13)*.006;for(let $e=0;$e<u;$e++){let Ie=p[$e];Ie.x+=(Math.sin(j*.21*Ie.sp+Ie.ph)*35e-5+12e-5)*V,Ie.y+=(Math.cos(j*.17*Ie.sp+Ie.ph*1.3)*3e-4-8e-5)*V,Ie.x>1.35&&(Ie.x=-1.35),Ie.y<-1.65&&(Ie.y=1.65);let je=Ie.x-a,Y=Ie.y-o,te=Math.abs(je*h-Y*c),ye=je*c+Y*h,Ue=Math.exp(-(te*te)/(.17*.17))*Math.max(0,1-ye/3.2),_e=.75+.25*Math.sin(j*2.3*Ie.sp+Ie.ph);M.set(Ie.x,Ie.y,.01),m.set(Ie.s,Ie.s,1),x.compose(M,g,m),f.setMatrixAt($e,x),f.setColorAt($e,A.copy(v).multiplyScalar((.03+Ue*1.1)*_e))}f.instanceMatrix.needsUpdate=!0,f.instanceColor.needsUpdate=!0;let $=Lv(j),J=.5+.5*Math.sin(j*.9)*Math.sin(j*2.7+1),Se=q.inGame?.32+(q.player?Math.min(.2,(q.player.speed-1.5)*.1):0):.2,Me=Math.min(1.08,Se+$*.22+J*.12+O*.5);I+=(Me-I)*Math.min(1,(Me>I?.35:.06)*V),O=Math.max(0,O-.03*V),L.rotation.z=b.a-Math.min(1.04,I)*b.a*2,I>.86?W=1:W=Math.max(0,W-.04*V),H.material.opacity=.15+W*.85}}}function Ov(s){let e=new Be,t=new Be,n=12;for(let I=0;I<n;I++){let O=I/n*Math.PI*2,W=I%2?"#19e3ff":"#ff2f8a",V=Sn*.99-.14,j=new St(V,.0035);j.rotateX(-Math.PI/2),j.translate(.14+V/2,Br+.0015,0);let q=new ge(j,new Qe({color:W,transparent:!0,opacity:.16,depthWrite:!1,blending:ln}));q.rotation.y=O,t.add(q)}s.recordSpin.add(t);let i=Nn(512,4),r=i.getContext("2d"),a=r.createLinearGradient(0,0,512,0);a.addColorStop(0,"#ff2f8a"),a.addColorStop(.25,"#a64bff"),a.addColorStop(.5,"#19e3ff"),a.addColorStop(.75,"#a64bff"),a.addColorStop(1,"#ff2f8a"),r.fillStyle=a,r.fillRect(0,0,512,4);let o=Dn(i,!0),l=new ge(ju(Sn*1.012,.006,200,1,Br+.002),new Qe({map:o,transparent:!0,opacity:.42,depthWrite:!1,blending:ln,side:zt})),c=new ge(ju(Sn*1.012,.04,200,1,Br+.0018),new Qe({map:o,transparent:!0,opacity:.25,depthWrite:!1,blending:ln,side:zt}));e.add(l,c);let h=180,u=new St(1,1);u.rotateX(-Math.PI/2),u.translate(.5,0,0);let d=new $i(u,new Qe({transparent:!0,opacity:.38,depthWrite:!1,blending:ln}),h),f=new ae("#ff2f8a"),p=new ae("#19e3ff"),x=new ae;for(let I=0;I<h;I++){let O=I/h,W=.5-.5*Math.cos(O*Math.PI*2);d.setColorAt(I,x.copy(f).lerp(p,W))}d.frustumCulled=!1,e.add(d);let g=new De,m=new At,M=new P,A=new P,v=new P(0,1,0),E=Array.from({length:h},()=>Math.random()*10),b=new mt({transparent:!0,depthWrite:!1,blending:ln,uniforms:{uTime:{value:0},uPulse:{value:-1},uA:{value:new ae("#ff2f8a")},uB:{value:new ae("#19e3ff")}},vertexShader:"varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
      }`}),w=new St(4,4);w.rotateX(-Math.PI/2);let _=new ge(w,b);_.position.y=-.04,_.renderOrder=-1,e.add(_);let S=[],R=(I,O)=>{let W=new Be,V=new As(new _a(I),new ji({color:O,transparent:!0,opacity:.5,depthWrite:!1,blending:ln}));return I.dispose(),W.add(V),e.add(W),S.push({o:W,m:V,ph:Math.random()*6}),W},L=R(new va(.034,0),"#19e3ff"),U=R(new Ri(.03,.05,4),"#ff4fa8"),H=-10;return{group:e,label:"assets3d/themes/synthbeats/label.jpg",vinyl:"#d8d8e8",armMetal:"#c9ced8",stars:.1,nebula:.05,dust:0,bloom:.3,ringColor:"#5fc3d3",ringBaseColor:"#c9cbe0",ringBase:.11,ringFlash:"#5fe8ff",update(I,O,W){let V=Math.pow(Math.max(0,Math.sin(O*Math.PI*2*1.6)),6),j=.6+(W.inGame&&W.player?Math.min(1,(W.player.speed-1.5)*.4):0);for(let J=0;J<h;J++){let Se=J/h*Math.PI*2,Me=E[J],$e=.006+(Math.abs(Math.sin(O*3.1+Me))*.017+Math.abs(Math.sin(O*7.3+Me*2))*.008+V*.02)*j;m.setFromAxisAngle(v,-Se),A.set(Math.cos(Se)*Sn*1.04,Br-.004,Math.sin(Se)*Sn*1.04),M.set($e,1,.006),g.compose(A,m,M),d.setMatrixAt(J,g)}d.instanceMatrix.needsUpdate=!0,c.material.opacity=.05+V*.07,o.offset.x=O*.05%1,b.uniforms.uTime.value=O;let q=Math.floor(O*1.6-.25);q%4===0&&O-H>1&&(H=(q+.25)/1.6);let $=(O-H)*.75;b.uniforms.uPulse.value=$<1.2?.44+$:-1;for(let J of S)J.m.rotation.x+=.0035*I,J.m.rotation.y+=.006*I,J.m.position.y=Math.sin(O*.8+J.ph)*.006,J.m.material.opacity=.32+V*.25},layout(I){let O=wc(I);hs(L,I,O.ul[0],O.ul[1],.04,.06),hs(U,I,O.br[0],O.br[1],.04,.06)},dispose(){s.recordSpin.remove(t),t.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&I.material.dispose()})}}}function Bv(){let t=Nn(1024,1024),n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,1024);i.addColorStop(0,"#0b0618"),i.addColorStop(.55,"#1a0b22"),i.addColorStop(1,"#08050c"),n.fillStyle=i,n.fillRect(0,0,1024,1024);let r=0;for(;r<1024;){let l=50+Math.random()*90,c=250+Math.random()*520,h=1024-c;n.fillStyle=`rgba(${10+Math.random()*12},${8+Math.random()*10},${20+Math.random()*16},0.95)`,n.fillRect(r,h,l,c);for(let u=h+12;u<1014;u+=16)for(let d=r+8;d<r+l-8;d+=12)Math.random()<.22&&(n.fillStyle=Math.random()<.5?"rgba(255,190,110,.22)":"rgba(120,200,255,.15)",n.fillRect(d,u,5,7));r+=l+6}let a=["255,47,160","255,140,60","60,220,255","170,90,255"];for(let l=0;l<70;l++){let c=12+Math.random()*60,h=Math.random()*1024,u=Math.random()*1024*.9,d=n.createRadialGradient(h,u,0,h,u,c),f=a[l%a.length],p=.04+Math.random()*.09;d.addColorStop(0,`rgba(${f},${p})`),d.addColorStop(1,`rgba(${f},0)`),n.fillStyle=d,n.beginPath(),n.arc(h,u,c,0,Math.PI*2),n.fill()}let o=n.createRadialGradient(1024/2,1024/2,1024*.2,1024/2,1024/2,1024*.75);return o.addColorStop(0,"rgba(0,0,0,0.35)"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,1024,1024),Dn(t)}function Xp(s){let n=Nn(512,330),i=n.getContext("2d"),r=(c,h,u)=>{for(let[d,f]of[[u*5,.07],[u*2.6,.16],[u*1.4,.5]])i.strokeStyle=`rgba(${h},${f})`,i.lineWidth=d,c(),i.stroke();i.strokeStyle="rgba(255,255,255,.9)",i.lineWidth=u*.45,c(),i.stroke()};i.lineCap="round",i.lineJoin="round";let a=(c,h,u,d,f)=>()=>{i.beginPath(),i.moveTo(c+f,h),i.arcTo(c+u,h,c+u,h+d,f),i.arcTo(c+u,h+d,c,h+d,f),i.arcTo(c,h+d,c,h,f),i.arcTo(c,h,c+u,h,f),i.closePath()},o="255,60,170",l="80,230,255";r(a(46,40,420,250,26),o,7),r(a(110,92,292,104,16),o,5),r(()=>{i.beginPath(),i.moveTo(150,290),i.lineTo(176,236),i.lineTo(336,236),i.lineTo(362,290)},o,5);for(let c of[185,327])r(()=>{i.beginPath(),i.arc(c,144,30,0,Math.PI*2)},l,5),r(()=>{i.beginPath();for(let h=0;h<3;h++){let u=s*Math.PI/3+h*Math.PI*2/3;i.moveTo(c,144),i.lineTo(c+Math.cos(u)*22,144+Math.sin(u)*22)}},l,4);return Dn(n)}function Hv(s){let e=new Be,t=ja("#d04bff",Sn*1.01,.004,.6),n=ja("#ff3fae",Sn*1.01,.022,.14);e.add(t,n);let i=Xp(0),r=Xp(1),a=.15,o=new ge(new St(a,a*330/512),Ln({map:i,blending:ln,opacity:.75})),l=new Be;l.add(o),e.add(l);let c=null,h=6+Math.random()*8,u=Yp(),d=new Be;e.add(d);let f=[];for(let b=0;b<2;b++){let w=Kp(u,"#ffffff");d.add(w),f.push({m:w,on:!1})}let p=2.5,x=new Be;e.add(x);let g=Qu(),m=new ge(new St(.014,.014),Ln({map:g,color:"#ff3b30",blending:ln,opacity:0})),M=new ge(new St(.012,.012),Ln({map:g,color:"#ffffff",blending:ln,opacity:0}));M.position.x=-.012,x.add(m,M);let A=null,v=9+Math.random()*8,E=null;return{group:e,label:"assets3d/themes/urbansounds/label.jpg",background:Bv(),vinyl:"#77727c",armMetal:"#c9ced8",stars:0,nebula:0,dust:0,bloom:.3,ringColor:"#ffd45a",ringBaseColor:"#d6c8e6",ringBase:.11,ringFlash:"#ffd45a",layout(b){E=b;let w=wc(b);hs(l,b,w.ul[0],w.ul[1],.03,.1),hs(d,b,0,w.bc[1],-.1,-1),d.visible=!0,hs(x,b,0,w.sky,-.1,-1),x.visible=!0},update(b,w){n.material.opacity=.12+Math.sin(w*1.7)*.03,o.material.map=Math.floor(w*1.6)%2?r:i;let _=1;if(!c&&w>h&&(c={t0:w,seq:[.06,.05,.09,.04,.22,.5].map(S=>S*(.7+Math.random()*.6))}),c){let S=w-c.t0,R=0;for(;R<c.seq.length&&S>c.seq[R];)S-=c.seq[R],R++;R>=c.seq.length?(c=null,h=w+7+Math.random()*10):_=R%2?.08:.85}if(o.material.opacity=.7*_*(.96+Math.sin(w*41)*.04),w>p){let S=f.find(R=>!R.on);if(S){let R=Math.random()<.6?1:-1;S.on=!0,S.dir=R,S.x=-1.5*R,S.sp=Yt(1.3,1.9),S.y=Yt(-.02,.02),S.m.rotation.z=R>0?0:Math.PI,S.m.material.color.set(R>0?"#fff1d6":"#ff3b2f")}p=w+Yt(3,8)}for(let S of f){if(!S.on){S.m.material.opacity=0;continue}S.x+=S.dir*S.sp*b/60,S.m.position.set(S.x,S.y,0),S.m.scale.set(.42,.006,1);let R=1-Math.min(1,Math.max(0,Math.abs(S.x)-.9)/.6);S.m.material.opacity=.55*R,Math.abs(S.x)>1.6&&Math.sign(S.x)===S.dir&&(S.on=!1)}if(!A&&w>v){let S=Math.random()<.5?1:-1;A={d:S,x:-1.3*S,y:Yt(-.03,.03)}}if(A){A.x+=A.d*.0018*b,m.position.set(A.x,A.y,0),M.position.set(A.x-.014*A.d,A.y,0);let S=w%1.4;m.material.opacity=S<.5?.75:.12,M.material.opacity=S>.7&&S<.76||S>.86&&S<.92?.9:0,Math.abs(A.x)>1.35&&Math.sign(A.x)===A.d&&(A=null,v=w+20+Math.random()*15,m.material.opacity=M.material.opacity=0)}},dispose(){i.dispose(),r.dispose()}}}function zv(){let e=Nn(1024),t=e.getContext("2d"),n=1024/2,i=["120,170,255","170,120,255","90,220,255","255,255,255"];for(let a=0;a<3;a++)for(let o=0;o<1400;o++){let l=Math.random(),c=a*2*Math.PI/3+l*5.2,h=40+l*430,u=(1-l*.5)*38*(Math.random()-.5)*2,d=n+Math.cos(c)*h+u,f=n+Math.sin(c)*h+u,p=Math.random()<.08?10+Math.random()*16:2+Math.random()*6,x=i[Math.floor(Math.random()*i.length)],g=(1-l)*.35+.05,m=t.createRadialGradient(d,f,0,d,f,p);m.addColorStop(0,`rgba(${x},${g})`),m.addColorStop(1,`rgba(${x},0)`),t.fillStyle=m,t.beginPath(),t.arc(d,f,p,0,Math.PI*2),t.fill()}let r=t.createRadialGradient(n,n,0,n,n,120);return r.addColorStop(0,"rgba(200,230,255,.0)"),r.addColorStop(.4,"rgba(160,200,255,.35)"),r.addColorStop(1,"rgba(80,120,255,0)"),t.fillStyle=r,t.beginPath(),t.arc(n,n,120,0,Math.PI*2),t.fill(),Dn(e)}function kv(){let e=Nn(1024),t=e.getContext("2d"),n=t.createRadialGradient(1024/2,1024/2,0,1024/2,1024/2,1024*.75);n.addColorStop(0,"#0b1236"),n.addColorStop(.6,"#050a22"),n.addColorStop(1,"#02040f"),t.fillStyle=n,t.fillRect(0,0,1024,1024);for(let i=0;i<14;i++){let r=Math.random()*1024,a=Math.random()*1024,o=80+Math.random()*220,l=i%2?"90,70,200":"40,120,220",c=t.createRadialGradient(r,a,0,r,a,o);c.addColorStop(0,`rgba(${l},.1)`),c.addColorStop(1,`rgba(${l},0)`),t.fillStyle=c,t.beginPath(),t.arc(r,a,o,0,Math.PI*2),t.fill()}for(let i=0;i<900;i++){let r=Math.random();t.fillStyle=`rgba(255,255,255,${r*r})`;let a=Math.random()<.05?1.8:.9;t.fillRect(Math.random()*1024,Math.random()*1024,a,a)}return Dn(e)}function Gv(s,e){let i=Nn(512,256),r=i.getContext("2d"),a=0,o=0;for(;a<256;){let c=6+Math.random()*22,h=s[o++%s.length];r.fillStyle=h,r.fillRect(0,a,512,c+1),a+=c}for(let c=0;c<260;c++){let h=Math.random()*512,u=Math.random()*256,d=20+Math.random()*90;r.fillStyle=`rgba(255,255,255,${Math.random()*.05})`,r.fillRect(h,u,d,1+Math.random()*2),r.fillStyle=`rgba(0,0,0,${Math.random()*.06})`,r.fillRect(Math.random()*512,Math.random()*256,d,1+Math.random()*2)}if(e){let c=r.createRadialGradient(153.6,158.72,0,153.6,158.72,26);c.addColorStop(0,e),c.addColorStop(1,"rgba(0,0,0,0)"),r.save(),r.scale(1.8,1),r.translate(-512*.3*.44,0),r.fillStyle=c,r.beginPath(),r.arc(512*.3,256*.62,26,0,Math.PI*2),r.fill(),r.restore()}let l=r.createLinearGradient(0,0,0,256);return l.addColorStop(0,"rgba(0,0,0,.35)"),l.addColorStop(.2,"rgba(0,0,0,0)"),l.addColorStop(.8,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,.35)"),r.fillStyle=l,r.fillRect(0,0,512,256),Dn(i,!0)}function Vv(){let e=Math.round(317.44),t=Nn(512,e),n=t.getContext("2d"),i=512/2,r=e/2,a=e*.3,o=-.32,l=h=>{n.save(),n.translate(i,r),n.rotate(o),n.beginPath(),h?n.ellipse(0,0,a*2.05,a*.52,0,0,Math.PI):n.ellipse(0,0,a*2.05,a*.52,0,Math.PI,Math.PI*2),n.lineWidth=a*.34,n.strokeStyle="#e9cf95",n.stroke(),n.lineWidth=a*.07,n.strokeStyle="rgba(120,80,40,.55)",n.stroke(),n.beginPath(),h?n.ellipse(0,0,a*1.62,a*.4,0,0,Math.PI):n.ellipse(0,0,a*1.62,a*.4,0,Math.PI,Math.PI*2),n.lineWidth=a*.12,n.strokeStyle="#c99e5c",n.stroke(),n.restore()};l(!1),n.save(),n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.clip(),n.fillStyle="#f0d49a",n.fillRect(i-a,r-a,a*2,a*2),n.translate(i,r),n.rotate(o);let c=[[-.62,.16,"#e2b874"],[-.28,.12,"#f6e2b4"],[.02,.2,"#d9a560"],[.36,.1,"#f3dca8"],[.6,.16,"#c98f4e"]];for(let[h,u,d]of c)n.fillStyle=d,n.fillRect(-a*1.2,h*a,a*2.4,u*a);return n.rotate(-o),n.translate(-i,-r),n.fillStyle="rgba(40,20,50,.38)",n.beginPath(),n.arc(i+a*.42,r+a*.36,a*1.05,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,.35)",n.beginPath(),n.ellipse(i-a*.42,r-a*.45,a*.2,a*.11,-.6,0,Math.PI*2),n.fill(),n.restore(),n.lineWidth=3,n.strokeStyle="rgba(90,60,40,.7)",n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.stroke(),l(!0),Dn(t)}function Wv(s){let e=new Be,t=zv(),n=new ii(Sn*.98,96);n.rotateX(-Math.PI/2);let i=new ge(n,new Qe({map:t,transparent:!0,opacity:.26,depthWrite:!1,blending:ln}));i.position.y=Br+7e-4,e.add(i);let r=ja("#5ad1ff",Sn*1.012,.0035,.45);e.add(r);let a=new Be;e.add(a);let o=.085,l=new ge(new St(o,o*.62),Ln({map:Vv(),opacity:.95}));a.add(l);let c=new Be;e.add(c);let h=new ge(new si(.024,32,20),new Tt({map:Gv(["#7fb6ff","#9cc7ff","#6a9ff0","#b5d6ff"]),roughness:.6,metalness:0,emissive:"#10224a",emissiveIntensity:.35}));c.add(h);let u=new Be;u.rotation.x=1.15,u.rotation.z=.3,c.add(u);let d=new ge(new si(.0055,16,10),new Tt({color:"#d9dde6",roughness:.95,emissive:"#222833",emissiveIntensity:.4}));d.position.x=.05,u.add(d);let f=Yp(),p=Qu(),x=new Be;e.add(x);let g=Kp(f,"#cfe6ff");x.add(g);let m=new ge(new St(.016,.016),Ln({map:p,color:"#ffffff",blending:ln,opacity:0}));x.add(m);let M=null,A=2+Math.random()*4,v=null,E=b=>{for(let w=0;w<6;w++){let _=Yt(-.9,.9),S=Yt(-.85,v.aspect<.9?.6:.5),R=v.ground(_,S,-.12);if(!R||Math.hypot(R.x,R.z)<Sn+.1)continue;x.position.set(R.x,-.12,R.z);let L=Math.random()<.5?1:-1;x.rotation.set(-v.tilt,0,L>0?-Yt(.25,.6):Math.PI+Yt(.25,.6)),M={t0:b,dur:Yt(.7,1.1),len:Yt(.14,.22),sp:Yt(.35,.5)};return}};return{group:e,label:"assets3d/themes/cosmicsoundwave/label.jpg",background:kv(),vinyl:"#9fb4ff",armMetal:"#c9ced8",stars:.5,nebula:.08,dust:0,bloom:.3,ringColor:"#6fa6d6",ringBaseColor:"#c8ccd8",ringBase:.1,ringFlash:"#9fd6ff",layout(b){v=b;let w=wc(b);hs(a,b,w.bl[0],w.bl[1],.05,.1),hs(c,b,w.ul[0],w.ul[1],.05,.08)},update(b,w){if(i.rotation.y-=.0012*b,l.position.y=Math.sin(w*.5)*.003,l.rotation.z=Math.sin(w*.23)*.06,h.rotation.y+=.0025*b,c.children[0].position.y=Math.sin(w*.6+2)*.003,u.rotation.y+=.006*b,!M&&v&&w>A&&E(w),M){let _=(w-M.t0)/M.dur;if(_>=1)M=null,A=w+Yt(4,10),g.material.opacity=m.material.opacity=0;else{let S=_*M.sp,R=Math.sin(Math.PI*Math.min(1,_*1.15));g.position.x=m.position.x=S,g.scale.set(Math.min(M.len,S+.01),.0035,1),g.material.opacity=.75*R,m.material.opacity=.9*R}}}}}var qp={neon:Fv,synthbeats:Ov,urbansounds:Hv,cosmicsoundwave:Wv};function Zp(s,e){let n=(qp[s]||qp.neon)(e);return n.key=s,n.labelPromise=n.label?Ec(n.label):Promise.resolve(null),n}function Jp(s){s&&(s.dispose&&s.dispose(),s.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),s.group.parent&&s.group.parent.remove(s.group),s.background&&s.background.dispose())}var ed=[.19,.285,.38],mi=.44,Ac=.012,td=.105,cn=Ac,Xv={land:{pivot:[.36,-.42],rest:.5,sRest:1,sFull:1},port:{pivot:[.3,-.55],rest:-Math.PI/2,sRest:null,sFull:null}},en=.5,us=.05,Bi=-.04,qv=s=>Math.asin(Math.max(0,us-.038-Ac)/s),nd="#7fe8ff";function id(s){let e=Math.max(0,Math.min(1,(s-.55)/.35));return Bi*e*e*(3-2*e)}var Rc=class{constructor(e,t){this.scene=e,this.manifest=t||{},this.root=new Be,this.recordSpin=new Be,this.root.add(this.recordSpin),e.add(this.root),this.themeKey=null,this._buildLights(),this._buildBackground(),this._buildPlatter(),this._buildRecord(),this._buildRings(),this._buildTonearm(),this._buildElectric(),this._applyManifest(),this.ringFlash=[0,0,0],this.afterT=0}_buildLights(){this.hemi=new Ta(16777215,0,.55),this.key=new ns(16777215,1.6),this.key.position.set(-.5,1.2,.6),this.rim=new ns(16777215,.7),this.rim.position.set(.7,.4,-.9),this.centerLight=new oi(16777215,2.2,0,0),this.centerLight.position.set(0,.06,0),this.root.add(this.hemi,this.key,this.rim,this.centerLight)}_buildBackground(){let t=new Float32Array(4200),n=new Float32Array(1400*3);for(let c=0;c<1400;c++){let h=Math.random()*2-1,u=Math.random()*Math.PI*2,d=9+Math.random()*6,f=Math.sqrt(1-h*h);t[c*3]=Math.cos(u)*f*d,t[c*3+1]=h*d-3,t[c*3+2]=Math.sin(u)*f*d;let p=.5+Math.random()*.5;n[c*3]=p,n[c*3+1]=p,n[c*3+2]=p}let i=new Xe;i.setAttribute("position",new Je(t,3)),i.setAttribute("color",new Je(n,3)),this.starMat=new Ai({size:.035,map:Ur(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:st,fog:!1}),this.stars=new ti(i,this.starMat),this.root.add(this.stars),this.nebula=[];let r=[[-1.6,-1.2,-2.4,3.2],[1.8,-1.4,-1.6,2.6],[.2,-1.8,1.6,3]];for(let[c,h,u,d]of r){let f=new Ft({map:Yn(),transparent:!0,opacity:.22,depthWrite:!1,blending:st,fog:!1}),p=new Ht(f);p.position.set(c,h,u),p.scale.setScalar(d),this.root.add(p),this.nebula.push(p)}let a=90,o=new Float32Array(a*3);this.dustSeed=new Float32Array(a*3);for(let c=0;c<a;c++){let h=Math.random()*Math.PI*2,u=Math.random()*.6;this.dustSeed[c*3]=h,this.dustSeed[c*3+1]=u,this.dustSeed[c*3+2]=.02+Math.random()*.18}let l=new Xe;l.setAttribute("position",new Je(o,3)),this.dustMat=new Ai({size:.006,map:Ur(),transparent:!0,opacity:.55,depthWrite:!1,blending:st}),this.dust=new ti(l,this.dustMat),this.root.add(this.dust)}_buildPlatter(){let e=new dn(mi*1.035,mi*1.05,.03,128,1),t=new Tt({color:9080729,metalness:.9,roughness:.32});this.platter=new ge(e,t),this.platter.position.y=-.015,this.root.add(this.platter);let n=new Be,i=new si(.0035,8,6),r=new Qe({color:16769712});for(let a=0;a<72;a++){let o=a/72*Math.PI*2,l=new ge(i,r);l.position.set(Math.cos(o)*mi*1.045,-.01,Math.sin(o)*mi*1.045),n.add(l)}this.strobe=n,n.visible=!1,this.recordSpin.add(n)}_buildRecord(){let e=new Tt({color:1118481,roughness:.4,metalness:.2});this.vinylMat=new Tt({map:Pp(),roughnessMap:Ip(),roughness:.55,metalness:.35,color:16777215});let t=new dn(mi,mi,Ac,160,1);this.disc=new ge(t,[e,this.vinylMat,e]),this.disc.position.y=Ac/2,this.recordSpin.add(this.disc);let n=new ii(mi*.995,128);n.rotateX(-Math.PI/2),this.sheen=new ge(n,new Qe({map:Lp(),transparent:!0,opacity:.12,depthWrite:!1,blending:st})),this.sheen.position.y=cn+6e-4,this.root.add(this.sheen);let i=new ii(td,96);i.rotateX(-Math.PI/2),this.labelMat=new Tt({roughness:.6,metalness:.05,emissive:16777215,emissiveIntensity:.35}),this.label=new ge(i,this.labelMat),this.label.position.y=cn+.0012,this.recordSpin.add(this.label),this.labelGlow=new Ht(new Ft({map:Yn(),transparent:!0,opacity:.55,depthWrite:!1,depthTest:!1,blending:st})),this.labelGlow.position.y=cn+.02,this.labelGlow.scale.setScalar(td*4),this.root.add(this.labelGlow);let r=new ge(new dn(.008,.008,.03,20),new Tt({color:14212582,metalness:1,roughness:.2}));r.position.y=cn+.015,this.root.add(r)}_buildRings(){this.rings=[];for(let e of ed){let t=new ge(this._ringGeo(e,.0028),new Qe({transparent:!0,opacity:.5,depthWrite:!1,blending:st})),n=new ge(this._ringGeo(e,.013),new Qe({transparent:!0,opacity:.1,depthWrite:!1,blending:st})),i=new ge(this._ringGeo(e+.009,.0016),t.material.clone());i.visible=!1;for(let r of[t,n,i])r.position.y=cn+9e-4,this.root.add(r);this.rings.push({core:t,halo:n,twin:i})}}_ringGeo(e,t){let n=new Rs(e-t,e+t,160,1);return n.rotateX(-Math.PI/2),n}_buildTonearm(){this.arm=new Be;let e=new Tt({color:12096090,metalness:.85,roughness:.32});this.armMetal=e;let t=new Tt({color:1840402,metalness:.4,roughness:.6}),n=new Tt({color:2760988,metalness:.7,roughness:.4}),i=new ge(new dn(.085,.09,.012,48),t);i.position.y=.006;let r=new ge(new Ma(.072,.0025,8,64),n);r.rotation.x=Math.PI/2,r.position.y=.0125;let a=new ge(new dn(.014,.016,us,20),n);a.position.y=us/2,this.arm.add(i,r,a),this.armSwing=new Be,this.armTilt=new Be,this.armSwing.position.y=us,this.armSwing.add(this.armTilt),this.arm.add(this.armSwing);let o=new ge(new ni(.06,.05,.065),e);o.position.set(0,.004,0);let l=new es([new P(0,0,.01),new P(0,0,.26),new P(-.012,0,.33),new P(-.03,0,.39),new P(Bi,-.004,.44)]),c=new ge(new Cs(l,48,.015,16,!1),e),h=new ge(new dn(.03,.03,.06,28),n);h.rotation.x=Math.PI/2,h.position.z=-.06;let u=new ge(new dn(.02,.02,.008,28),e);u.rotation.x=Math.PI/2,u.position.z=-.088,this.armHead=new Be;let d=new ge(new ni(.056,.024,.09),e);d.position.set(Bi,-.01,en-.035);let f=new ge(new ni(.04,.014,.05),n);f.position.set(Bi,-.026,en-.025);let p=new ge(new dn(.0025,.0025,.03,8),e);p.rotation.z=Math.PI/2,p.position.set(Bi-.032,-.004,en-.045),this.stylusMat=new Tt({color:16734751,emissive:16730640,emissiveIntensity:.9,roughness:.4});let x=new ge(new Ri(.006,.016,12),this.stylusMat);x.rotation.x=Math.PI,x.position.set(Bi,-.03,en-.004),this.armSwing.add(o),this.armTube=c,this.armHead.add(d,f,p,x),this.armTilt.add(c,h,u,this.armHead);let g=new St(1,1);g.rotateX(-Math.PI/2),this.armShadow=new ge(g,new Qe({map:Ja(),transparent:!0,opacity:.5,depthWrite:!1})),this.armShadow.scale.set(.09,1,.58),this.armShadow.position.set(.012,-us+cn+.0015,.25),this.armSwing.add(this.armShadow),this.armProcedural=[i,r,a,o,c,h,u,d,f,p,x],this.armGlow=new Ht(new Ft({map:Yn(),color:5951999,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:st})),this.armGlow.position.set(Bi,-.024,en),this.armHead.add(this.armGlow),this.stylusGlow=new Ht(new Ft({map:Yn(),color:16738858,transparent:!0,opacity:.55,depthWrite:!1,depthTest:!1,blending:st})),this.stylusGlow.position.set(Bi,-.03,en-.004),this.stylusGlow.scale.setScalar(.03),this.armHead.add(this.stylusGlow),this.armLight=new oi(5951999,0,.35,0),this.armLight.position.set(Bi,-.02,en),this.armTilt.add(this.armLight),this.root.add(this.arm),this._layoutArm("land")}_layoutArm(e){var i,r;if(this.armLayoutKind===e)return;this.armLayoutKind=e;let t=Xv[e];this.armPivot=new P(t.pivot[0],0,t.pivot[1]),this.arm.position.copy(this.armPivot);let n=Math.hypot(t.pivot[0],t.pivot[1]);this.armSFull=(i=t.sFull)!=null?i:(n-.07)/en,this.armSRest=(r=t.sRest)!=null?r:this.armSFull*.625,this.armRestYaw=t.rest,this.armStrikeYaw=Math.atan2(-t.pivot[0],-t.pivot[1])+.06,this.armStrikeTilt=qv(en*this.armSFull),this.armYaw=this.armRestYaw,this.armTiltX=-.04,this._setArmScale(this.armSRest)}_setArmScale(e){this.armS=e,this.armTube.scale.z=e,this.armHead.position.z=en*(e-1),this.armShadow.scale.z=.58*e,this.armShadow.position.z=.25*e}_buildElectric(){let e=st;this.bolts=new Or(900),this.root.add(this.bolts.mesh);let t=new dn(.0095,.0095,1,12,1,!0);t.rotateX(Math.PI/2),t.translate(0,0,.5),this.chargeBar=new ge(t,new Qe({color:nd,transparent:!0,opacity:0,depthWrite:!1,blending:e})),this.chargeBar.visible=!1,this.armTilt.add(this.chargeBar);let n=new Ft({map:Yn(),color:12581119,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:e});this.chargeOrb=new Ht(n),this.armTilt.add(this.chargeOrb),this.baseGlow=new Ht(new Ft({map:Yn(),color:nd,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:e})),this.baseGlow.position.y=us,this.arm.add(this.baseGlow),this._jag=new Float32Array(72),this._boltShapes=[],this._boltTs=-1,this._elecCol=new ae(nd)}_armPoint(e,t){let n=this.armYaw,i=this.armTiltX,r=id(t),a=-.038*t*t,o=en*this.armS*t,l=a*Math.cos(i)-o*Math.sin(i),c=a*Math.sin(i)+o*Math.cos(i),h=this.armPivot;return e.set(h.x+r*Math.cos(n)+c*Math.sin(n),us+l,h.z-r*Math.sin(n)+c*Math.cos(n)),e}_addBolt(e,t,n,i,r,a,o,l,c,h,u){let d=Wp(this._jag,e,t,n,i,r,a,o,l);this._boltShapes.push({pts:this._jag.slice(0,d*3),n:d,w:c,a:h,grow:u==null?1:u})}_regenBolts(e,t){this._boltShapes.length=0;let n=this._p1||(this._p1=new P),i=this._p2||(this._p2=new P),r=cn+.002;if(e&&e.gather>0&&e.travel<1){let a=this._armPoint(n,0),o=2+Math.round(e.gather*3);for(let l=0;l<o;l++){let c=Math.random()*Math.PI*2,h=.03+Math.random()*.05*e.gather;this._addBolt(a.x,a.y,a.z,a.x+Math.cos(c)*h,us*(.2+Math.random()*.8),a.z+Math.sin(c)*h,6,.35,.0045,.9)}}if(e&&e.travel>0&&e.discharge<1){let a=this._armPoint(n,e.travel);for(let l=0;l<3;l++){let c=Math.max(0,e.travel-(.05+Math.random()*.25)),h=this._armPoint(i,c);this._addBolt(a.x,a.y,a.z,h.x,h.y,h.z,7,.22,.004,.85)}let o=Math.random()*Math.PI*2;this._addBolt(a.x,a.y,a.z,a.x+Math.cos(o)*.05,a.y,a.z+Math.sin(o)*.05,5,.4,.0035,.7)}if(e&&e.discharge>0){let a=this._armPoint(n,1),o=Math.min(1,e.discharge*1.4);for(let l=0;l<8;l++){let c=l/8*Math.PI*2+Math.random()*.5,h=ed[l%3]+(Math.random()-.5)*.03,u=Math.cos(c)*h,d=Math.sin(c)*h;if(this._addBolt(a.x,r,a.z,u,r,d,14,.16,.009,1,o),Math.random()<.7){let f=.35+Math.random()*.35,p=a.x+(u-a.x)*f,x=a.z+(d-a.z)*f,g=c+(Math.random()-.5)*1.4,m=.05+Math.random()*.08;this._addBolt(p,r,x,p+Math.cos(g)*m,r,x+Math.sin(g)*m,6,.3,.005,.8,Math.max(0,(o-f)/(1-f)))}}this._addBolt(a.x,a.y,a.z,a.x+(Math.random()-.5)*.02,r,a.z+(Math.random()-.5)*.02,4,.5,.006,1)}if(this.afterT>0)for(let a=0;a<10;a++){let o=a/10*Math.PI*2+Math.random()*.4,l=ed[2]+Math.random()*.05;this._addBolt(0,r,0,Math.cos(o)*l,r,Math.sin(o)*l,16,.14,.01,1,1)}}_updateElectric(e,t,n){let i=n.bossPh;if(i)this.armYaw=this.armRestYaw+(this.armStrikeYaw-this.armRestYaw)*i.swing,this.armTiltX=-.04+(this.armStrikeTilt+.04)*i.swing,this._setArmScale(this.armSRest+(this.armSFull-this.armSRest)*i.swing),i.discharge>.85&&(this._discharging=!0);else{let f=Math.min(1,.035*e);this.armYaw+=(this.armRestYaw-this.armYaw)*f,Math.abs(this.armS-this.armSRest)>1e-4&&this._setArmScale(this.armS+(this.armSRest-this.armS)*f),this.armTiltX+=(-.04-this.armTiltX)*f,this._discharging&&(this._discharging=!1,this.afterT=1)}this.afterT=Math.max(0,this.afterT-e*.03),this.armSwing.rotation.y=this.armYaw,this.armTilt.rotation.x=this.armTiltX;let r=.75+Math.random()*.25,a=i?i.gather:0,o=i?i.travel:0,l=i?i.discharge:0,c=i&&a>0&&l<1;this.baseGlow.material.opacity=i&&o<1?a*(.9-o*.6)*r:0,this.baseGlow.scale.setScalar(.05+.09*a),this.chargeOrb.material.opacity=c?r:0,this.chargeOrb.position.set(id(o),.004,en*this.armS*o),this.chargeOrb.scale.setScalar((.045+.03*a+.035*o+.08*l)*r),this.chargeBar.visible=!1,this.chargeBar.scale.set(1,1,Math.max(.001,en*this.armS*o)),this.chargeBar.material.opacity=.55*r,this.armLight.position.set(id(o),-.01,en*this.armS*o),this.armLight.intensity=i?(a*2.5+o*3+l*7)*r:this.afterT*8,this.armGlow.material.opacity=l*r,this.armGlow.scale.setScalar(.08+l*.2),t-this._boltTs>.055&&(this._boltTs=t,this._regenBolts(i,t));let h=this.bolts,u=this._elecCol;h.begin();let d=i?1:this.afterT;for(let f of this._boltShapes){let p=Math.max(0,Math.min(f.n,Math.ceil(f.n*f.grow)));if(!(p<2)){h.strip();for(let x=0;x<p;x++)h.p(f.pts[x*3],f.pts[x*3+1],f.pts[x*3+2],f.w,u.r,u.g,u.b,f.a*d*r);h.endStrip()}}h.end(),this.elec=Math.max(l,this.afterT)}flashRing(e){e>=0&&e<3&&(this.ringFlash[e]=1),this.themeScene&&this.themeScene.onNote&&this.themeScene.onNote(e)}setView(e){this.view=e,this._layoutArm(e.aspect<.9?"port":"land"),this.themeScene&&this.themeScene.layout&&this.themeScene.layout(e)}async _applyManifest(){let e=this.manifest,t=e.record||{},[n,i]=await Promise.all([gn(t.texture),gn(t.label)]);n&&n.texture&&(this.vinylMat.map=n.texture,this.vinylMat.needsUpdate=!0),i&&i.texture&&(this.customLabel=!0,this.labelMat.map=i.texture,this.labelMat.emissiveMap=i.texture,this.labelMat.needsUpdate=!0);let r=await gn(t.model);if(r&&r.kind==="model"){let{object:l,mixer:c}=zs(r,mi*2*(r.opts.size||1));this.disc.visible=!1,this.label.visible=!1,this.recordSpin.add(l),this.mixers.push(c)}let a=await gn((e.tonearm||{}).model);if(a&&a.kind==="model"){let{object:l,mixer:c}=zs(a,en*1.2*(a.opts.size||1));l.position.z=en*.45;for(let h of this.armProcedural)h.visible=!1;this.armTilt.add(l),this.mixers.push(c)}let o=await gn(e.turntable);if(o&&o.kind==="model"){let{object:l,mixer:c}=zs(o,o.opts.size||2.2);l.position.y=-.04-(o.opts.sink||0),this.root.add(l),this.mixers.push(c)}}get mixers(){return this._mixers||(this._mixers=[])}resize(e){this.root.scale.setScalar(e),this.armLight.distance=.35*e,this.starMat.size=.035*e,this.dustMat.size=.006*e}_setLabel(e,t){this.labelArtMat||(this.labelArtMat=new Qe({color:14277081}));let n=t?this.labelArtMat.map:this.labelMat.map;t?(this.labelArtMat.map=e,this.labelArtMat.needsUpdate=!0,this.label.material=this.labelArtMat):(this.labelMat.map=e,this.labelMat.emissiveMap=e,this.labelMat.emissiveIntensity=.35,this.labelMat.needsUpdate=!0,this.label.material=this.labelMat),this.label.scale.setScalar(t?1.28:1),this.labelGlow.material.opacity=t?0:.35,n&&n!==e&&n.userData.generated&&t&&n.dispose()}setTheme(e,t){var r,a,o,l,c,h;if(this.themeKey===e)return;this.themeKey=e,this.themeScene&&Jp(this.themeScene);let n=this.themeScene=Zp(e,this);if(this.root.add(n.group),this.view&&n.layout&&n.layout(this.view),this.themeBackground=n.background||null,this.vinylMat.color.set(n.vinyl||"#ffffff"),this.armMetal.color.set(n.armMetal||"#cfd5e0"),this.starMat.opacity=(r=n.stars)!=null?r:1,this.stars.visible=((a=n.stars)!=null?a:1)>0,this.nebula.forEach(u=>{var d,f;u.material.opacity=(d=n.nebula)!=null?d:.22,u.visible=((f=n.nebula)!=null?f:.22)>0}),this.dustMat.opacity=(o=n.dust)!=null?o:.3,this.dust.visible=((l=n.dust)!=null?l:.3)>0,this.sheen.material.opacity=(c=n.sheen)!=null?c:.12,this.strobe.visible=!!n.strobe,this.bloomBase=(h=n.bloom)!=null?h:.45,!this.customLabel){this.labelMat.map&&this.labelMat.map.userData.generated&&this.labelMat.map.dispose();let u=Np(t.sun);u.userData.generated=!0,this._setLabel(u,!1),n.labelPromise.then(d=>{d&&this.themeScene===n&&!this.customLabel&&this._setLabel(d,!0)})}this.labelGlow.material.color.set(t.sun),this.centerLight.color.set(t.sun),this.hemi.color.set(t.sf),this.hemi.groundColor.set(t.bg1),this.rim.color.set(t.star),this.starMat.color.set(vc(t.sf,.4)),this.dustMat.color.set(t.star);let i=[t.bg1,t.peril,t.player];this.nebula.forEach((u,d)=>u.material.color.set(vc(i[d%i.length],.1))),this.ringColor=this.themeScene&&this.themeScene.ringColor||t.star,this.ringStyle=null}setRingStyle(e){var r;if(this.ringStyle===e)return;this.ringStyle=e;let t=this.themeScene||{},n=new ae(t.ringBaseColor||"#d8d2c8"),i=new ae(t.ringFlash||this.ringColor||"#ffcf7a");for(let a of this.rings)a.baseCol=n,a.flashCol=i,a.baseOp=(r=t.ringBase)!=null?r:.12,a.core.material.color.copy(n),a.core.material.opacity=a.baseOp,a.halo.material.color.copy(i),a.halo.material.opacity=0,a.twin.visible=!1}update(e,t,n){let i=n.inGame?.35+(n.player?n.player.speed*.12:0):.25;this.recordSpin.rotation.y-=i*e/60,this.stars.rotation.y+=4e-4*e;let r=1+Math.sin(t*2)*.05;this.labelGlow.scale.setScalar(td*4*r),this.centerLight.intensity=.6+Math.sin(t*2)*.1;let a=this.dust.geometry.attributes.position.array,o=this.dustSeed;for(let c=0;c<o.length/3;c++){let h=o[c*3]+t*.03*(c%3+1),u=o[c*3+1];a[c*3]=Math.cos(h)*u,a[c*3+1]=o[c*3+2]+Math.sin(t*.6+c)*.01,a[c*3+2]=Math.sin(h)*u}this.dust.geometry.attributes.position.needsUpdate=!0,this._updateElectric(e,t,n),this.themeScene&&this.themeScene.update&&this.themeScene.update(e,t,n);let l=this.elec>0?this.elec*(.6+Math.random()*.4):0;for(let c=0;c<3;c++){let h=this.rings[c];if(!h.baseCol)continue;this.ringFlash[c]=Math.max(0,this.ringFlash[c]-e*.045);let u=this.ringFlash[c]*this.ringFlash[c];h.core.material.color.copy(h.baseCol).lerp(h.flashCol,Math.min(1,u*1.1)).lerp(this._elecCol,l),h.core.material.opacity=Math.min(1,h.baseOp+u*.38+l*.6),h.halo.material.color.copy(h.flashCol).lerp(this._elecCol,l),h.halo.material.opacity=u*.1+l*.35}for(let c of this.mixers)c&&c.update(e/60)}};var zr={hazard:["#ff3b3b","#ffb340"],hazardJump:["#3b8bff","#ff5fd0"],hazardBomb:["#3bea6a","#2fd9ff"],hazardPull:["#ffd23b","#ff6a2a"],hazardTwin:["#b04bff","#4fd2ff"],hazardTwinDecoy:["#b04bff","#4fd2ff"],hazardPulse:["#ff8a1f","#ff3b6b"],hazardCreep:["#ff4fd8","#8a5bff"]},od=1.6,Cc=null;function Yv(s){return()=>(s=s*16807%2147483647)/2147483647}function Kv(){if(Cc)return Cc;let s=Yv(91),e=[],t=14,n=80,i=7;for(let r=0;r<t;r++){let a=s()*2-1,o=s()*Math.PI*2,l=new P(Math.sqrt(1-a*a)*Math.cos(o),a,Math.sqrt(1-a*a)*Math.sin(o)),c=new P(1,0,0);Math.abs(l.x)>.9&&c.set(0,1,0);let h=new P().crossVectors(l,c).normalize(),u=new P().crossVectors(l,h),d=.06+s()*.08,f=2+Math.floor(s()*3),p=s()*6.28,x=od*(.86+s()*.14),g=[];for(let b=0;b<24;b++){let w=b/24*Math.PI*2,_=x*(1+d*Math.sin(w*f+p));g.push(new P().addScaledVector(h,Math.cos(w)*_).addScaledVector(u,Math.sin(w)*_).addScaledVector(l,Math.sin(w*f+p)*d*x*.6))}let m=new es(g,!0),M=new Cs(m,n,.075+s()*.035,i,!0),A=r%3===1,v=M.attributes.position.count,E=new Float32Array(v);E.fill(A?1:0),M.setAttribute("aSide",new Je(E,1)),e.push(M)}for(let r=0;r<6;r++){let a=s()*2-1,o=s()*Math.PI*2,l=new P(Math.sqrt(1-a*a)*Math.cos(o),a,Math.sqrt(1-a*a)*Math.sin(o)),c=new Ri(.09,.26,6);c.translate(0,od*1.02+.1,0),c.applyQuaternion(new At().setFromUnitVectors(new P(0,1,0),l));let h=c.toNonIndexed&&c.index?c.toNonIndexed():c,u=h.attributes.position.count,d=new Float32Array(u);d.fill(0),h.setAttribute("aSide",new Je(d,1)),h.attributes.uv&&h.deleteAttribute("uv"),e.push(h)}return e.forEach(r=>{if(r.index){let a=r.toNonIndexed();e[e.indexOf(r)]=a}}),e.forEach(r=>{r.attributes.uv&&r.deleteAttribute("uv")}),Cc=Fp(e,!1),Cc}var $p=new Map;function Zv(s){let e=$p.get(s);if(e)return e;let[t,n]=zr[s]||zr.hazard,i=new ae(t),r=new ae(n);return e=new Tt({color:16777215,roughness:.35,metalness:.15,emissive:16777215,emissiveIntensity:.55,transparent:s==="hazardTwinDecoy",opacity:s==="hazardTwinDecoy"?.45:1}),e.onBeforeCompile=a=>{a.uniforms.uCa={value:i},a.uniforms.uCb={value:r},a.vertexShader=`attribute float aSide; varying float vSide;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vSide = aSide;`),a.fragmentShader=`uniform vec3 uCa; uniform vec3 uCb; varying float vSide;
`+a.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec3 yarnCol = mix(uCa, uCb, vSide); vec4 diffuseColor = vec4( yarnCol, opacity );").replace("vec3 totalEmissiveRadiance = emissive;","vec3 totalEmissiveRadiance = emissive * yarnCol;")},e.customProgramCacheKey=()=>"yarn",$p.set(s,e),e}var sd=null;function Jv(){return sd||(sd=new Tt({color:657426,roughness:.6,metalness:.2,transparent:!0,opacity:.85})),new ge(jp||(jp=new si(od*.78,20,14)),sd)}var jp=null,$v=["star","gold","diamond","coin","heart","shield","slow","magnet","mult","hazard","hazardJump","hazardBomb","hazardPull","hazardTwin","hazardTwinDecoy","hazardPulse","hazardCreep"];function jv(s,e,t,n){let i=[],r=[],a=[];for(let l=0;l<=n;l++){let c=l/n,h=c*t,u=Math.cos(h),d=Math.sin(h);if(i.push(u*(s-e/2),0,d*(s-e/2),u*(s+e/2),0,d*(s+e/2)),r.push(c,0,c,1),l<n){let f=l*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}}let o=new Xe;return o.setAttribute("position",new Fe(i,3)),o.setAttribute("uv",new Fe(r,2)),o.setIndex(a),o}var Hr=null;function Qv(){if(Hr)return Hr;let s=document.createElement("canvas");s.width=128,s.height=64;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,64);t.addColorStop(0,"rgba(255,233,168,0.95)"),t.addColorStop(.12,"rgba(255,106,42,0.35)"),t.addColorStop(.88,"rgba(255,106,42,0.35)"),t.addColorStop(1,"rgba(255,233,168,0.95)"),e.fillStyle=t,e.fillRect(0,0,128,64),e.fillStyle="rgba(255,210,59,0.95)";for(let n=-1;n<3;n++)e.beginPath(),e.moveTo(n*64+8,14),e.lineTo(n*64+40,14),e.lineTo(n*64+72,50),e.lineTo(n*64+40,50),e.closePath(),e.fill();return Hr=new Rn(s),Hr.colorSpace=tt,Hr.wrapS=An,Hr}var eM=!1,rd=new Set(["hazard","hazardJump","hazardBomb","hazardPull","hazardTwin","hazardTwinDecoy","hazardPulse","hazardCreep"]),tM={hazardBomb:1.5,diamond:1,coin:.9,heart:1.1},Kn=1.55,nM=[[1.25,-1.15,0],[-1.3,-.5,1.6],[1.35,.75,3.1],[-.9,1.25,4.5],[.2,-1.6,5.6]],Qa=null;function iM(){if(Qa)return Qa;let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,20);t.addColorStop(0,"rgba(200,255,250,.6)"),t.addColorStop(1,"rgba(120,230,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(32,32,20,0,7),e.fill(),e.fillStyle="#fff",e.beginPath();for(let n=0;n<8;n++){let i=n*Math.PI/4,r=n%2?3.5:22;n?e.lineTo(32+Math.cos(i)*r,32+Math.sin(i)*r):e.moveTo(32+Math.cos(i)*r,32+Math.sin(i)*r)}return e.closePath(),e.fill(),Qa=new Rn(s),Qa.colorSpace=tt,Qa}var sM=22,rM=160,Pc=new Map;function gi(s){let e=Pc.get(s);if(!e){e=new ae;try{e.setStyle(s)}catch{e.set("#ffffff")}Pc.set(s,e),Pc.size>512&&Pc.clear()}return e}function aM(s){return new mt({uniforms:{map:{value:s},uScale:{value:500}},vertexShader:`
      attribute float aSize; attribute vec4 aColor; varying vec4 vColor; uniform float uScale;
      void main(){ vColor=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0);
        gl_PointSize = aSize*uScale/max(0.001,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`
      uniform sampler2D map; varying vec4 vColor;
      void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vColor.rgb, vColor.a*t.a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,transparent:!0,depthWrite:!1,blending:st})}var Ic=class{constructor(e,t){this.cap=e,this.pos=new Float32Array(e*3),this.size=new Float32Array(e),this.color=new Float32Array(e*4);let n=new Xe;n.setAttribute("position",new Je(this.pos,3).setUsage(hi)),n.setAttribute("aSize",new Je(this.size,1).setUsage(hi)),n.setAttribute("aColor",new Je(this.color,4).setUsage(hi)),n.setDrawRange(0,0),this.geo=n,this.mat=aM(t),this.obj=new ti(n,this.mat),this.obj.frustumCulled=!1,this.n=0}begin(){this.n=0}push(e,t,n,i,r,a){if(this.n>=this.cap)return;let o=this.n++;this.pos[o*3]=e,this.pos[o*3+1]=t,this.pos[o*3+2]=n,this.size[o]=i,this.color[o*4]=r.r,this.color[o*4+1]=r.g,this.color[o*4+2]=r.b,this.color[o*4+3]=a}end(){let e=this.geo;e.setDrawRange(0,this.n),e.attributes.position.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0}setMap(e){this.mat.uniforms.map.value=e}};function Qp(s,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.strokeStyle=s,n.lineWidth=e?5:6,e&&n.setLineDash([12,14]),n.shadowColor=s,n.shadowBlur=10,n.beginPath(),n.arc(64,64,52,0,Math.PI*2),n.stroke();let i=new Rn(t);return i.colorSpace=tt,i}function em(s,e,t){let n=new St(1,1);return n.rotateX(-Math.PI/2),new ge(n,new Qe({map:s,transparent:!0,opacity:e,depthWrite:!1,blending:t?st:Ui}))}var Lc=class{constructor(e,t,n){this.scene=e,this.manifest=t||{},this.hooks=n||{},this.group=new Be,e.add(this.group),this.defs={},this.fallbackTex=new Map,this.pool=new Map,this.live=new Map,this.frame=0,this._resolveManifest(),this._buildPlayer(),this.trail=new Ic(140,Ur()),this.scratch={batch:new Or(300),pts:[],sparks:[],sparkAcc:0,flare:0},this.group.add(this.scratch.batch.mesh),this.ripples=[];for(let i=0;i<5;i++){let r=new Rs(.9,1,64);r.rotateX(-Math.PI/2);let a=new ge(r,new Qe({transparent:!0,opacity:0,depthWrite:!1,blending:st}));a.visible=!1,this.group.add(a),this.ripples.push({mesh:a,life:0,x:0,z:0})}this.lastNotes=0,this.particles=new Ic(900,Ur()),this.particles.mat.blending=Ui,this.group.add(this.trail.obj,this.particles.obj)}async _resolveManifest(){let e=this.manifest.items||{};await Promise.all($v.map(async a=>{let o=e[a]||(a==="hazardTwinDecoy"?e.hazardTwin:null);this.defs[a]=await gn(o)}));let t=this.manifest.player||{};this.playerDefault=await gn(t.default),this.playerSkinDefs={};for(let a of Object.keys(t.skins||{}))this.playerSkinDefs[a]=await gn(t.skins[a]);let n=this.manifest.particles||{},i=await gn(n.spark);i&&i.texture&&this.particles.setMap(i.texture);let r=await gn(n.trail);r&&r.texture&&this.trail.setMap(r.texture),this.defsVersion=(this.defsVersion||0)+1;for(let[a,o]of this.live)this._release(o);this.live.clear()}_fallbackTexture(e,t){let n=e==="hazardTwinDecoy"?"hazardTwin":e,i=n+"|"+t,r=this.fallbackTex.get(i);if(!r){let a=document.createElement("canvas");a.width=a.height=rM;let o=new Rn(a);o.colorSpace=tt,r={canvas:a,tex:o,ready:!1,lastTry:-999,type:n},this.fallbackTex.set(i,r)}return!r.ready&&this.frame-r.lastTry>20&&this.hooks.paintItem&&(r.lastTry=this.frame,r.ready=!!this.hooks.paintItem(r.type,r.canvas),r.tex.needsUpdate=!0),r.tex}_poolKey(e){let t=this.defs[e];return e+"|"+(t?t.kind:"fb")+"|"+(this.defsVersion||0)}_create(e){let t=this.defs[e],n=new Be,i={type:e,def:t,root:n,body:null,mat:null,glow:null,mixer:null,key:this._poolKey(e)},r=new ge(this._shadowGeo||(this._shadowGeo=(()=>{let o=new St(1,1);return o.rotateX(-Math.PI/2),o})()),this._shadowMat||(this._shadowMat=new Qe({map:Ja(),transparent:!0,opacity:.55,depthWrite:!1})));r.scale.setScalar(2.2),r.position.y=.02,n.add(r),i.shadow=r;let a=(tM[e]||1)*(t&&t.opts.size||1);if(eM&&!t&&rd.has(e)){let o=new Be;return o.add(Jv()),o.add(new ge(Kv(),Zv(e))),o.position.y=Kn,o.scale.setScalar(a),n.add(o),i.body=o,i.yarn=!0,i.yarnSize=a,i.glow=new Ht(new Ft({map:Yn(),color:(zr[e]||zr.hazard)[0],transparent:!0,opacity:.5,depthWrite:!1,depthTest:!1,blending:st})),i.glow.position.y=Kn,i.glow.scale.setScalar(4.4*a),i.yarnGlowCol=(zr[e]||zr.hazard)[0],n.add(i.glow),i}if(t&&t.kind==="model"){let{object:o,mixer:l}=zs(t,2.6*a);o.position.y=Kn,n.add(o),i.body=o,i.mixer=l}else{let o=t?t.texture:null;i.mat=new Ft({map:o,transparent:!0,depthWrite:!1,depthTest:!1}),i.body=new Ht(i.mat),i.body.position.y=Kn,i.baseScale=t?2.6*a:2*2.6,i.body.scale.setScalar(i.baseScale),n.add(i.body)}return e==="diamond"&&(i.sparks=nM.map(o=>{let l=new Ht(new Ft({map:iM(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:st}));return l.position.set(o[0],Kn-o[1],.01),l.userData.phase=o[2],n.add(l),l})),t&&t.opts.glow!==!1&&(i.glow=new Ht(new Ft({map:Yn(),transparent:!0,opacity:.55,depthWrite:!1,depthTest:!1,blending:st})),i.glow.position.y=Kn,i.glow.scale.setScalar(4.6*a),n.add(i.glow)),i}_acquire(e){let t=this._poolKey(e),n=this.pool.get(t),i=n&&n.length?n.pop():this._create(e);return i.root.visible=!0,this.group.add(i.root),i}_release(e){this.group.remove(e.root),e.bossRing&&(e.bossRing.visible=!1),this.pool.has(e.key)||this.pool.set(e.key,[]),this.pool.get(e.key).push(e)}_itemColor(e,t,n){let i=t.theme;return e==="hazardPull"?"#ffb454":e==="hazardTwin"||e==="hazardTwinDecoy"?"#ff8a3d":e==="hazardPulse"?n&&n.pulseDanger===!1?"#ffd9dc":"#ff3b52":e==="hazardCreep"?"#d94a1f":rd.has(e)?i.peril:e==="star"?i.star:e==="gold"?i.gold:e==="coin"?"#ffb454":e==="heart"?"#ff5d8f":e==="diamond"?"#fff4e0":"#ffffff"}_updateItems(e,t,n,i){let r=new Set,a=cn*e.base+.5;if(e.inGame)for(let o of e.items){if(!o.alive)continue;let l=e.easeOut(Math.max(0,o.pop));if(l<=0)continue;let c=this.live.get(o);c&&c.key!==this._poolKey(o.type)&&(this._release(c),c=null),c||(c=this._acquire(o.type),this.live.set(o,c)),r.add(o);let h=e.RINGS[o.ring],u=e.PLAYER_R*.95*l;c.root.position.set(Math.cos(o.ang)*h,a,Math.sin(o.ang)*h),c.root.scale.setScalar(u),this._animateItem(c,o,t,n,e,i)}for(let[o,l]of this.live)r.has(o)||(this._release(l),this.live.delete(o));this._updateSeals(e,t,a)}_updateSeals(e,t,n){this.seals||(this.seals=new Map);let i=new Set;if(e.inGame)for(let r of e.items){if(!r.alive||r.type!=="hazardPull"||r.bossStatic)continue;let a=Math.max(0,Math.min(1,r.pop));if(a<=0)continue;let o=e.RINGS[r.ring],l=e.PLAYER_R*1.5,c=o.toFixed(1)+"|"+l.toFixed(1),h=this.seals.get(r);if(h&&h.userData.key!==c&&(this.group.remove(h),h.geometry.dispose(),h.material.dispose(),h=null),!h){let d=Qv().clone();d.needsUpdate=!0,d.repeat.x=14,h=new ge(jv(o,l,Math.PI,72),new Qe({map:d,transparent:!0,depthWrite:!1,blending:st,side:zt})),h.userData.key=c,h.renderOrder=2,this.group.add(h),this.seals.set(r,h)}i.add(r),h.position.y=n+.15,h.rotation.y=-(r.ang-Math.PI),h.material.map.offset.x=-t*1.6,h.material.opacity=Math.min(1,a*(.8+Math.sin(t*5)*.12)+(r.sealBump||0)*.8);let u=1+(r.sealBump||0)*.04;h.scale.set(u,1,u)}for(let[r,a]of this.seals)i.has(r)||(this.group.remove(a),a.geometry.dispose(),a.material.map.dispose(),a.material.dispose(),this.seals.delete(r))}_animateItem(e,t,n,i,r,a){let o=t.type,l=e.def,c=rd.has(o),h=o==="star"||o==="gold"?Math.sin(n*3.2+t.ang*3)*.32:o==="diamond"?0:Math.sin(n*2.4+t.ang*3)*.14,u=1,d=1,f=0,p=1;if(c?(f=o==="hazardJump"?0:n*(o==="hazardCreep"?1.1:o==="hazardPulse"?1:.6),o==="hazardPulse"&&(u=(.55+(Math.sin(t.pulsePhase||0)*.5+.5)*.85)/.975,t.pulseDanger||(d=.55)),o==="hazardTwinDecoy"&&(d=.4+Math.sin(n*9)*.25),d*=.82+Math.random()*.18):o==="coin"?p=.35+.65*Math.abs(Math.cos(n*1.6+t.ang*2)):o==="diamond"?(p=1,u=1.08):o==="heart"&&(u=1+Math.sin(n*5)*.08),e.yarn){let x=t.ang*7.3,g=o==="hazardCreep"?1.6:o==="hazardPulse"?1.2:1;e.body.rotation.set(n*.55*g+x,n*.8*g+x*.7,n*.35*g),e.body.scale.setScalar(e.yarnSize*u),e.body.position.y=Kn+h,e.glow&&(e.glow.position.y=Kn+h,e.glow.material.color.set(e.yarnGlowCol),e.glow.material.opacity=.42*d),e.shadow.material.opacity=.5}else e.mat?(l?l.kind==="sheet"&&$u(l,n):ad(e.mat,this._fallbackTexture(o,a)),e.mat.rotation=l&&l.opts.spin===!1?0:f,e.mat.opacity=d,e.body.scale.set(e.baseScale*u*p,e.baseScale*u,1)):e.body&&(e.body.rotation.y=l.opts.spin===!1?0:c?f:n*1.5,e.body.scale.setScalar(u),e.mixer&&e.mixer.update(i/60));if(e.yarn||(e.body.position.y=Kn+h,e.glow&&(e.glow.position.y=Kn+h,e.glow.material.color.copy(gi(this._itemColor(o,r,t))),e.glow.material.opacity=.5*d)),e.shadow.material.opacity=.5,e.sparks)for(let x of e.sparks){let g=Math.max(0,Math.sin(n*2.2+x.userData.phase));x.material.opacity=g,x.scale.setScalar(.35+g*.55),x.material.rotation=n*2+x.userData.phase}if(t.boss){e.bossRing||(e.bossRing=new Ht(new Ft({map:Dp(),transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:st})),e.root.add(e.bossRing));let x=t.type==="hazardBomb"?1.5:t.type==="hazardPulse"?1.4:1;e.bossRing.visible=!0,e.bossRing.position.y=Kn,e.bossRing.scale.setScalar(2*1.75*x*1.22/(54/64)),e.bossRing.material.rotation=n*1.5,e.bossRing.material.opacity=.55+Math.sin(n*6)*.25}else e.bossRing&&(e.bossRing.visible=!1)}_buildPlayer(){let e=this.player={root:new Be};e.shadow=em(Ja(),.6,!1),e.shadow.scale.setScalar(2.6),e.shadow.position.y=.02,e.glow=new Ht(new Ft({map:Yn(),transparent:!0,opacity:.9,depthWrite:!1,depthTest:!1,blending:st})),e.glow.scale.setScalar(4.6),e.mat=new Ft({transparent:!0,depthWrite:!1,depthTest:!1}),e.sprite=new Ht(e.mat),e.sprite.scale.setScalar(2.7),e.shield=new Ht(new Ft({map:Qp("#5efc82",!1),transparent:!0,depthWrite:!1,depthTest:!1,blending:st})),e.shield.scale.setScalar(4),e.magnet=em(Qp("#ff7ae0",!0),.6,!0),e.magnet.scale.setScalar(6.4),e.magnet.position.y=.06,e.light=new oi(16777215,1.8,100,0),e.root.add(e.shadow,e.glow,e.sprite,e.shield,e.magnet,e.light),this.group.add(e.root),this.penaTex=new Map}_penaTexture(e,t){let n=this.penaTex.get(e);return!n&&t&&(n=new Pt(t),n.colorSpace=tt,t.complete&&t.naturalWidth>0?n.needsUpdate=!0:t.addEventListener("load",()=>{n.needsUpdate=!0},{once:!0}),this.penaTex.set(e,n)),n||null}_updatePlayer(e,t,n){let i=this.player,r=e.player,a=(e.inGame||e.inMenu)&&r;if(i.root.visible=!!a,!a)return;let o=r.curRadius,l=e.PLAYER_R;i.root.position.set(Math.cos(r.ang)*o,cn*e.base+.5,Math.sin(r.ang)*o),i.root.scale.setScalar(l);let h=1.12+(e.inGame?Math.sin(t*47)*.035+Math.sin(t*31)*.025:Math.sin(t*3)*.05),u=this.playerSkinDefs&&this.playerSkinDefs[e.skin]||this.playerDefault||null;if(u&&u.kind==="model"){if(i.modelDef!==u){i.model&&i.root.remove(i.model);let p=zs(u,2.7*(u.opts.size||1));i.model=p.object,i.mixer=p.mixer,i.modelDef=u,i.root.add(i.model)}i.sprite.visible=!1,i.model.visible=!0,i.model.position.y=h,i.model.rotation.y=-r.ang,i.mixer&&i.mixer.update(n/60)}else{i.model&&(i.model.visible=!1),i.sprite.visible=!0,u?(ad(i.mat,u.texture),u.kind==="sheet"&&$u(u,t)):ad(i.mat,this._penaTexture(e.skin,e.skinImg)),i.sprite.visible=!!i.mat.map,i.sprite.position.y=h,i.sprite.scale.setScalar(2.7*(u&&u.opts.size||1));let p=Math.max(-1,Math.min(1,(oM(e)-o)/(l*4)));i.mat.rotation=-p*.35+(e.inGame?Math.sin(t*39)*.04:0)}let d=r.invulT>0&&Math.floor(r.invulT/4)%2===0,f=d?0:1;i.mat.opacity=f,i.model&&(i.model.visible=i.model.visible&&!d),i.glow.position.y=.35,i.glow.scale.setScalar(3.6),i.glow.material.color.copy(gi(e.playerColor)),i.glow.material.opacity=.4*f,i.light.color.copy(gi(e.playerColor)),i.light.position.y=h*.9,i.light.distance=l*14,i.shield.visible=r.shieldHits>0,i.shield.visible&&(i.shield.position.y=h,i.shield.material.opacity=.8+Math.sin(t*8)*.2),i.magnet.visible=r.magnetT>0,i.magnet.visible&&(i.magnet.rotation.y=t*1.6,i.magnet.material.opacity=.45+Math.sin(t*6)*.2)}_scratchColor(e,t,n,i,r){let a=this._tmpCol||(this._tmpCol=new ae);switch(e){case"rainbow":return a.setHSL((i*60+t*9)%360/360,.9,.62);case"sparkle":return gi(t%3===0?"#ffffff":"#fff2c4");case"quantum":return(t>>2)%2===0?r:gi("#7fe8ff");case"phantom":return gi("#eaf2ff");case"season1_trail":return gi((t>>2)%2===0?"#54e0ff":"#fff6c8");case"season2_trail":return a.setHSL((28+Math.sin(i*3-t*.2)*10)/360,.95,.55);case"pixel":return r;default:return r}}_updateScratch(e,t,n){let i=this.scratch,r=e.player,a=e.PLAYER_R,o=t,l=3,c=e.recordAngle||0,h=Math.cos(c),u=Math.sin(c),d=(e.inGame||e.inMenu)&&r,f=cn*e.base+.9,p=gi(e.playerColor);if(d){let _=r.curRadius,S=Math.cos(r.ang)*_,R=Math.sin(r.ang)*_,L=S*h-R*u,U=S*u+R*h,H=i.pts[i.pts.length-1],I=H?Math.hypot(L-H.x,U-H.z):1/0;I>a*6?i.pts.push({x:L,z:U,born:o,brk:!0}):I>a*.22&&i.pts.push({x:L,z:U,born:o,brk:!1}),i.pts.length>290&&i.pts.splice(0,i.pts.length-290);let O=(e.inGame?.35+Math.min(1.2,(r.speed-1.5)*.6):.12)*(e.trail==="sparkle"?2.2:1);for(i.sparkAcc+=O*n;i.sparkAcc>=1&&(i.sparkAcc-=1,!(i.sparks.length>=120));){let W=Math.random()*Math.PI*2,V=(.6+Math.random()*1.6)*a*.06;i.sparks.push({x:S,y:f,z:R,vx:Math.cos(W)*V,vy:(.5+Math.random())*a*.07,vz:Math.sin(W)*V,life:1,hot:Math.random()<.6})}}for(;i.pts.length&&o-i.pts[0].born>l*1.5;)i.pts.shift();let x=a*sM*(e.trail==="comet"?1.4:1),g=i.dist||(i.dist=new Float32Array(512));{let _=i.pts.length;_&&(g[_-1]=0);for(let R=_-2;R>=0;R--){let L=i.pts[R],U=i.pts[R+1];g[R]=U.brk?1/0:g[R+1]+Math.hypot(U.x-L.x,U.z-L.z)}let S=0;for(;S<_&&g[S]>x;)S++;S&&(i.pts.splice(0,S),g.copyWithin(0,S,_))}i.flare=Math.max(0,i.flare-n*.035);let m=i.batch;m.begin(),m.strip();let M=e.trail,A=i.pts.length,v=gi("#ffffff"),E=M==="comet"?l*1.5:l,b=M==="comet"?1.35:M==="phantom"?1.2:1;for(let _=0;_<A;_++){let S=i.pts[_],R=o-S.born,L=Math.max(0,Math.min(1-R/E,(x-g[_])/(x*.6)));if((S.brk||M==="pixel"&&_%4===0)&&(m.endStrip(),m.strip()),M==="pixel"&&_%4===3)continue;let U=Math.max(0,1-R/.3),H=this._scratchColor(M,A-_,R,t,p),I=Math.min(1,U*.75+i.flare*.35),O=H.r+(v.r-H.r)*I,W=H.g+(v.g-H.g)*I,V=H.b+(v.b-H.b)*I,j=a*(.42+U*.45+i.flare*.35*L)*b,q=Math.min(1,Math.pow(L,1.4)*(M==="phantom"?.5:.95)*(1+i.flare*.8)),$=S.x*h+S.z*u,J=-S.x*u+S.z*h;if(M==="ribbon"){let Se=Math.hypot($,J)||1,Me=Math.sin(_*.45-t*3)*a*.45;$+=$/Se*Me,J+=J/Se*Me}m.p($,f,J,j,O,W,V,q)}if(d&&A){let _=r.curRadius;m.p(Math.cos(r.ang)*_,f,Math.sin(r.ang)*_,a*.7,1,1,1,1)}m.endStrip(),m.end();let w=this.trail;w.begin();for(let _ of i.sparks)_.x+=_.vx*n,_.y+=_.vy*n,_.z+=_.vz*n,_.vy-=a*.006*n,_.vx*=.96,_.vz*=.96,_.life-=.045*n,_.y<f&&(_.y=f,_.vy*=-.3),_.life>0&&w.push(_.x,_.y,_.z,a*.32*_.life,_.hot?v:p,_.life);i.sparks=i.sparks.filter(_=>_.life>0),w.end()}_noteHit(e){let t=e.player,n=t.curRadius;this.scratch.flare=.5,this.onNote&&this.onNote(t.targetRing)}_updateRipples(e,t){let n=e.PLAYER_R,i=cn*e.base+.7;for(let r of this.ripples){if(r.life<=0){r.mesh.visible=!1;continue}r.life-=t*.06;let a=1-Math.max(0,r.life);r.mesh.visible=r.life>0,r.mesh.position.set(r.x,i,r.z),r.mesh.scale.setScalar(n*(1.1+a*2.4)),r.mesh.material.opacity=Math.max(0,r.life)*.5}}_updateParticles(e){let t=this.particles;t.begin();let n=e.PLAYER_R,i=cn*e.base+.5;for(let r of e.particles){if(r.life<=0)continue;let a=i+n*(1.2+(1-r.life)*1.4),o=Math.min(1,(1-r.life)/.12);t.push(r.x-e.CX,a,r.y-e.CY,r.r*r.life*3.2,gi(r.color),Math.min(1,r.life*1.2)*o*.85)}t.end()}setPointScale(e){this.trail.mat.uniforms.uScale.value=e,this.particles.mat.uniforms.uScale.value=e}update(e,t,n){this.frame++;let i=(n.themeKey||"")+"|"+(n.colorblind?1:0);this._updateItems(n,t,e,i),this._updatePlayer(n,t,e);let r=n.notes||0;n.inGame&&r>this.lastNotes&&this._noteHit(n),this.lastNotes=r,this._updateScratch(n,t,e),this._updateRipples(n,e),this._updateParticles(n)}};function ad(s,e){if(s.map===e)return;let t=!!s.map;s.map=e,t!==!!e&&(s.needsUpdate=!0)}function oM(s){return s.RINGS[s.player.targetRing]}var lM={uniforms:{tDiffuse:{value:null},uMax:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uMax; varying vec2 vUv;
    void main(){ vec4 c=texture2D(tDiffuse,vUv); c.rgb=min(max(c.rgb,vec3(0.0)),vec3(uMax)); gl_FragColor=c; }`},tm={low:{dpr:1,bloom:!1,bloomScale:0,msaa:0},medium:{dpr:1.5,bloom:!0,bloomScale:.5,msaa:0},high:{dpr:2,bloom:!0,bloomScale:1,msaa:4}},Nc=["low","medium","high"],Ot,bn,ut,Kt,_i,nm,qt,Vr,ds=1,Hi=1,zi=1,Gr="auto",Hc="medium",to=!1,ld=null,ks={tilt:68,fov:38,zoom:1},Oc=null,Dc=new P,eo={aspect:1,tilt:0,ground(s,e,t){if(!ut)return null;Dc.set(s,e,.5).unproject(ut).sub(ut.position).normalize();let n=ut.position,i=((t||0)*zi-n.y)/Dc.y;return i>0?{x:(n.x+Dc.x*i)/zi,z:(n.z+Dc.z*i)/zi}:null}},ot={acc:0,frames:0,lowFor:0,highFor:0,downgraded:!1,value:60},kr=0;function cM(){if(!Ot||!_i)return;let s=Ot.getRenderTarget(),e=[..._i.renderTargetsHorizontal||[],..._i.renderTargetsVertical||[],_i.renderTargetBright,Kt&&Kt.renderTarget1,Kt&&Kt.renderTarget2].filter(Boolean);for(let t of e)Ot.setRenderTarget(t),Ot.clear(!0,!0,!0);Ot.setRenderTarget(s),kr=0}function im(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function hM(s){if(Ot)return!0;if(!im())return!1;let e=s.manifest||{};ld=s.onFail||null,Gr=s.quality||"auto",Object.assign(ks,e.camera||{});try{Ot=new fc({canvas:s.canvas,antialias:!1,alpha:!1,powerPreference:"high-performance"})}catch(t){return console.warn("[Render3D] WebGL ba\u015Flat\u0131lamad\u0131",t),!1}return Ot.outputColorSpace=tt,Ot.toneMapping=Ns,Ot.toneMappingExposure=e.exposure||1.05,s.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),rm("context-lost")}),bn=new ca,bn.background=new ae("#170a08"),ut=new Ut(ks.fov,1,1,1e4),qt=new Rc(bn,e),Vr=new Lc(bn,e,s.hooks||{}),Vr.onNote=t=>qt.flashRing(t),gn((e.background||{}).image).then(t=>{t&&t.texture&&(Oc=t,bn.background=t.texture,sm())}),nm=new xc(bn,ut),Bc(Gr==="auto"?"medium":Gr),!0}function uM(s){if(Kt&&(Kt.dispose(),Kt=null,_i=null),!s.bloom)return;let e=new Et(1,1,{type:kt,samples:s.msaa});Kt=new _c(Ot,e),Kt.addPass(nm),Kt.addPass(new Nr(lM)),_i=new Dr(new se(1,1),.45,.4,.85),Kt.addPass(_i),Kt.addPass(new yc)}function Bc(s){Hc=s;let e=tm[s];Ot.setPixelRatio(Math.min(window.devicePixelRatio||1,e.dpr)),uM(e),hd(ds,Hi,zi)}function dM(s){Gr=s,ot.downgraded=!1,ot.lowFor=0,ot.highFor=0,Ot&&Bc(s==="auto"?"medium":s)}function cd(s){if(!s||!s.image)return;let e=s.image,t=e.width/e.height,n=ds/Hi;t>n?(s.repeat.set(n/t,1),s.offset.set((1-n/t)/2,0)):(s.repeat.set(1,t/n),s.offset.set(0,(1-t/n)/2))}function sm(){Oc?cd(Oc.texture):qt&&qt.themeBackground&&cd(qt.themeBackground)}function hd(s,e,t){if(ds=s,Hi=e,zi=t||Math.min(s,e),!Ot)return;Ot.setSize(ds,Hi,!1),ut.aspect=ds/Hi,ut.fov=ks.fov;let n=(ks.zoom||1)*(ut.aspect<.9?ks.portraitZoom||1.15:1),i=zi*.5/n,r=ui.degToRad(ks.fov)/2,a=Math.atan(Math.tan(r)*ut.aspect),o=Math.max(i/Math.tan(a),i*.85/Math.tan(r))+i*.35,l=ui.degToRad(ks.tilt);ut.userData.basePos=new P(0,Math.sin(l)*o,Math.cos(l)*o),ut.userData.target=new P(0,0,zi*.015),ut.position.copy(ut.userData.basePos),ut.lookAt(ut.userData.target),ut.near=Math.max(1,o*.02),ut.far=zi*40,ut.updateProjectionMatrix(),ut.updateMatrixWorld(),eo.aspect=ut.aspect,eo.tilt=l,eo.camPos=ut.userData.basePos,eo.camUp=new P(0,1,0).applyQuaternion(ut.quaternion),qt.resize(zi),qt.setView(eo);let c=Ot.getPixelRatio();if(Vr.setPointScale(Hi*c/(2*Math.tan(r))),Kt){Kt.setPixelRatio(c),Kt.setSize(ds,Hi);let h=tm[Hc].bloomScale;_i.resolution.set(ds*c*h,Hi*c*h),cM()}sm()}function fM(s){if(Gr!=="auto"||(ot.acc+=s,ot.frames++,ot.acc<1e3))return;ot.value=ot.frames*1e3/ot.acc,ot.acc=0,ot.frames=0;let e=Nc.indexOf(Hc);ot.value<45?(ot.lowFor++,ot.highFor=0):ot.value>57?(ot.highFor++,ot.lowFor=0):(ot.lowFor=0,ot.highFor=0),ot.lowFor>=2&&e>0?(ot.downgraded=!0,ot.lowFor=0,Bc(Nc[e-1])):ot.highFor>=5&&e<Nc.length-1&&!ot.downgraded&&(ot.highFor=0,Bc(Nc[e+1]))}var Uc=0;function pM(s){var h;if(!Ot||to)return;let e=performance.now(),t=Uc?e-Uc:0,n=Uc?Math.min(100,t):16.7;Uc=e,t>250?(ot.acc=0,ot.frames=0,ot.lowFor=0,ot.highFor=0,kr=0):fM(n);let i=e*.001,r=s.dt||1;if((s.W!==ds||s.H!==Hi)&&hd(s.W,s.H,s.base),!Oc){let u=qt.themeBackground;u?bn.background!==u&&(bn.background=u,cd(u)):(bn.background&&bn.background.isColor||(bn.background=new ae),bn.background.set(s.theme.bg0))}qt.setTheme(s.themeKey,s.theme),qt.setRingStyle(s.ringStyle),qt.update(r,i,s),s.recordAngle=qt.recordSpin.rotation.y,Vr.update(r,i,s);let a=ut.userData.basePos,o=ut.userData.target,l=s.inGame&&s.shake||0,c=1-(s.bossIntensity||0)*.06;ut.position.set(a.x+(Math.random()-.5)*l*1.2,a.y*c+(Math.random()-.5)*l*.6,a.z*c),ut.lookAt(o),kr=Math.min(1,kr+.08*r),_i&&(_i.strength=(((h=qt.bloomBase)!=null?h:.45)+(s.flash||0)*.15+(s.bossIntensity||0)*.3+(qt.elec||0)*.6)*kr*kr),Kt?Kt.render():Ot.render(bn,ut)}function rm(s){to||(to=!0,console.warn("[Render3D] devre d\u0131\u015F\u0131:",s),ld&&ld(s))}var Fc=new P;function mM(s,e){if(!Ot||!qt||to)return null;let t=Ot.domElement.getBoundingClientRect();if(!t.width||!t.height)return null;s==null&&(s=-1/0,e=1/0);let n=u=>(u.project(ut),{x:t.left+(u.x+1)/2*t.width,y:t.top+(1-u.y)/2*t.height}),i=-1/0,r=1/0,a=(u,d)=>u.traverse(f=>{if(!f.isMesh||!f.visible||!f.geometry||!f.geometry.attributes.position)return;let p=f.geometry.attributes.position,x=Math.max(1,Math.floor(p.count/400));for(let g=0;g<p.count;g+=x){Fc.fromBufferAttribute(p,g),f.localToWorld(Fc);let m=n(Fc);d?m.x<r&&(r=m.x):m.x>=s&&m.x<=e&&m.y>i&&(i=m.y)}}),o=qt.armProcedural||[],l=[o[4],o[7],o[8],o[9],o[10]].filter(u=>u&&u.visible),c=[o[0],o[1],o[2],o[3],o[5],o[6]].filter(u=>u&&u.visible);l.length?(l.forEach(u=>a(u,!1)),c.forEach(u=>a(u,!0))):a(qt.armTilt,!1);let h=n(qt.root.localToWorld(Fc.set(0,cn,-mi)));return{armBottom:i,baseLeft:r,recordTop:h.y}}function gM(){return{quality:Hc,preference:Gr,fps:Math.round(ot.value),failed:to,missingAssets:Ju.slice(),scratchPoints:Vr?Vr.scratch.pts.length:0}}window.Render3D={supported:im,init:hM,resize:hd,render:pM,setQuality:dM,info:gM,fail:rm,menuAnchors:mM};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
