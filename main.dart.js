(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.dE(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.dH(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bl(b)
return new t(c,this)}:function(){if(t===null)t=A.bl(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bl(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={b9:function b9(){},
v(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
bc(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dy(a){var t,s
for(t=$.b5.length,s=0;s<t;++s)if(a===$.b5[s])return!0
return!1},
aG:function aG(a){this.a=a},
aK:function aK(){},
c9(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ee(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
l(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.J(a)
return t},
aj(a){var t,s=$.bB
if(s==null)s=$.bB=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
aH(a){return A.cx(a)},
cx(a){var t,s,r,q
if(a instanceof A.h)return A.k(A.at(a),null)
t=J.E(a)
if(t===B.o||t===B.q||u.o.b(a)){s=B.e(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.k(A.at(a),null)},
bC(a){if(a==null||typeof a=="number"||A.bi(a))return J.J(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.z)return a.h(0)
if(a instanceof A.W)return a.H(!0)
return"Instance of '"+A.aH(a)+"'"},
d(a){return A.c4(new Error(),a)},
c4(a,b){var t
if(b==null)b=new A.aO()
a.dartException=b
t=A.dI
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
dI(){return J.J(this.dartException)},
dF(a){throw A.d(a)},
dG(a,b){throw A.c4(b,a)},
c8(a){throw A.d(A.bw(a))},
c5(a){if(a==null)return J.t(a)
if(typeof a=="object")return A.aj(a)
return J.t(a)},
dx(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.aS("Unsupported number of arguments for wrapped closure"))},
dh(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.dx)
a.$identity=t
return t},
cp(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aL().constructor.prototype):Object.create(new A.L(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bv(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cl(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bv(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cl(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cj)}throw A.d("Error in functionType of tearoff")},
cm(a,b,c,d){var t=A.bu
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bv(a,b,c,d){var t,s
if(c)return A.co(a,b,d)
t=b.length
s=A.cm(t,d,a,b)
return s},
cn(a,b,c,d){var t=A.bu,s=A.ck
switch(b?-1:a){case 0:throw A.d(new A.aJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
co(a,b,c){var t,s
if($.bs==null)$.bs=A.br("interceptor")
if($.bt==null)$.bt=A.br("receiver")
t=b.length
s=A.cn(t,c,a,b)
return s},
bl(a){return A.cp(a)},
cj(a,b){return A.a2(v.typeUniverse,A.at(a.a),b)},
bu(a){return a.a},
ck(a){return a.b},
br(a){var t,s,r,q=new A.L("receiver","interceptor"),p=J.by(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.d(A.cg("Field name "+a+" not found."))},
dE(a){throw A.d(new A.aQ(a))},
dp(a){return v.getIsolateTag(a)},
ed(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
dA(a){var t,s,r,q,p,o=$.c3.$1(a),n=$.aY[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.b1[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.c0.$2(a,o)
if(r!=null){n=$.aY[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.b1[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.b4(t)
$.aY[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.b1[o]=t
return t}if(q==="-"){p=A.b4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.c6(a,t)
if(q==="*")throw A.d(A.bH(o))
if(v.leafTags[o]===true){p=A.b4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.c6(a,t)},
c6(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bp(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
b4(a){return J.bp(a,!1,null,!!a.$iba)},
dC(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.b4(t)
else return J.bp(t,c,null,null)},
dt(){if(!0===$.bo)return
$.bo=!0
A.du()},
du(){var t,s,r,q,p,o,n,m
$.aY=Object.create(null)
$.b1=Object.create(null)
A.ds()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.c7.$1(p)
if(o!=null){n=A.dC(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ds(){var t,s,r,q,p,o,n=B.i()
n=A.I(B.j,A.I(B.k,A.I(B.f,A.I(B.f,A.I(B.l,A.I(B.m,A.I(B.n(B.e),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.c3=new A.aZ(q)
$.c0=new A.b_(p)
$.c7=new A.b0(o)},
I(a,b){return a(b)||b},
di(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
ct(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw A.d(new A.aB("Illegal RegExp pattern ("+String(o)+")",a))},
X:function X(a,b){this.a=a
this.b=b},
Y:function Y(a,b){this.a=a
this.b=b},
z:function z(){},
av:function av(){},
aN:function aN(){},
aL:function aL(){},
L:function L(a,b){this.a=a
this.b=b},
aQ:function aQ(a){this.a=a},
aJ:function aJ(a){this.a=a},
aZ:function aZ(a){this.a=a},
b_:function b_(a){this.a=a},
b0:function b0(a){this.a=a},
W:function W(){},
an:function an(){},
aE:function aE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bE(a,b){var t=b.c
return t==null?b.c=A.bg(a,b.y,!0):t},
bb(a,b){var t=b.c
return t==null?b.c=A.a0(a,"bx",[b.y]):t},
bF(a){var t=a.x
if(t===6||t===7||t===8)return A.bF(a.y)
return t===12||t===13},
cA(a){return a.at},
dl(a){return A.ap(v.typeUniverse,a,!1)},
x(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.x(a,t,c,a0)
if(s===t)return b
return A.bQ(a,s,!0)
case 7:t=b.y
s=A.x(a,t,c,a0)
if(s===t)return b
return A.bg(a,s,!0)
case 8:t=b.y
s=A.x(a,t,c,a0)
if(s===t)return b
return A.bP(a,s,!0)
case 9:r=b.z
q=A.a3(a,r,c,a0)
if(q===r)return b
return A.a0(a,b.y,q)
case 10:p=b.y
o=A.x(a,p,c,a0)
n=b.z
m=A.a3(a,n,c,a0)
if(o===p&&m===n)return b
return A.be(a,o,m)
case 12:l=b.y
k=A.x(a,l,c,a0)
j=b.z
i=A.de(a,j,c,a0)
if(k===l&&i===j)return b
return A.bO(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.a3(a,h,c,a0)
p=b.y
o=A.x(a,p,c,a0)
if(g===h&&o===p)return b
return A.bf(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.a8("Attempted to substitute unexpected RTI kind "+d))}},
a3(a,b,c,d){var t,s,r,q,p=b.length,o=A.aX(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.x(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
df(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aX(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.x(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
de(a,b,c,d){var t,s=b.a,r=A.a3(a,s,c,d),q=b.b,p=A.a3(a,q,c,d),o=b.c,n=A.df(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.am()
t.a=r
t.b=p
t.c=n
return t},
c1(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.dr(s)
t=a.$S()
return t}return null},
dv(a,b){var t
if(A.bF(b))if(a instanceof A.z){t=A.c1(a)
if(t!=null)return t}return A.at(a)},
at(a){if(a instanceof A.h)return A.H(a)
if(Array.isArray(a))return A.bU(a)
return A.bh(J.E(a))},
bU(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
H(a){var t=a.$ti
return t!=null?t:A.bh(a)},
bh(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.d2(a,t)},
d2(a,b){var t=a instanceof A.z?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cT(v.typeUniverse,t.name)
b.$ccache=s
return s},
dr(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.ap(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
dq(a){return A.D(A.H(a))},
bj(a){var t
if(a instanceof A.W)return A.dk(a.$r,a.G())
t=a instanceof A.z?A.c1(a):null
if(t!=null)return t
if(u.R.b(a))return J.cf(a).a
if(Array.isArray(a))return A.bU(a)
return A.at(a)},
D(a){var t=a.w
return t==null?a.w=A.bV(a):t},
bV(a){var t,s,r=a.at,q=r.replace(/\*/g,"")
if(q===r)return a.w=new A.aW(a)
t=A.ap(v.typeUniverse,q,!0)
s=t.w
return s==null?t.w=A.bV(t):s},
dk(a,b){var t,s,r=b,q=r.length
if(q===0)return u.F
t=A.a2(v.typeUniverse,A.bj(r[0]),"@<0>")
for(s=1;s<q;++s)t=A.bR(v.typeUniverse,t,A.bj(r[s]))
return A.a2(v.typeUniverse,t,a)},
dJ(a){return A.D(A.ap(v.typeUniverse,a,!1))},
d1(a){var t,s,r,q,p,o=this
if(o===u.K)return A.q(o,a,A.d8)
if(!A.r(o))if(!(o===u._))t=!1
else t=!0
else t=!0
if(t)return A.q(o,a,A.dc)
t=o.x
if(t===7)return A.q(o,a,A.d_)
if(t===1)return A.q(o,a,A.bZ)
s=t===6?o.y:o
t=s.x
if(t===8)return A.q(o,a,A.d3)
if(s===u.S)r=A.d4
else if(s===u.i||s===u.H)r=A.d7
else if(s===u.N)r=A.da
else r=s===u.y?A.bi:null
if(r!=null)return A.q(o,a,r)
if(t===9){q=s.y
if(s.z.every(A.dz)){o.r="$i"+q
if(q==="cu")return A.q(o,a,A.d6)
return A.q(o,a,A.db)}}else if(t===11){p=A.di(s.y,s.z)
return A.q(o,a,p==null?A.bZ:p)}return A.q(o,a,A.cY)},
q(a,b,c){a.b=c
return a.b(b)},
d0(a){var t,s=this,r=A.cX
if(!A.r(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.cW
else if(s===u.K)r=A.cV
else{t=A.a4(s)
if(t)r=A.cZ}s.a=r
return s.a(a)},
as(a){var t,s=a.x
if(!A.r(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.as(a.y)))t=s===8&&A.as(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cY(a){var t=this
if(a==null)return A.as(t)
return A.f(v.typeUniverse,A.dv(a,t),null,t,null)},
d_(a){if(a==null)return!0
return this.y.b(a)},
db(a){var t,s=this
if(a==null)return A.as(s)
t=s.r
if(a instanceof A.h)return!!a[t]
return!!J.E(a)[t]},
d6(a){var t,s=this
if(a==null)return A.as(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.h)return!!a[t]
return!!J.E(a)[t]},
cX(a){var t,s=this
if(a==null){t=A.a4(s)
if(t)return a}else if(s.b(a))return a
A.bW(a,s)},
cZ(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.bW(a,t)},
bW(a,b){throw A.d(A.cJ(A.bI(a,A.k(b,null))))},
bI(a,b){return A.aA(a)+": type '"+A.k(A.bj(a),null)+"' is not a subtype of type '"+b+"'"},
cJ(a){return new A.ao("TypeError: "+a)},
j(a,b){return new A.ao("TypeError: "+A.bI(a,b))},
d3(a){var t=this,s=t.x===6?t.y:t
return s.y.b(a)||A.bb(v.typeUniverse,s).b(a)},
d8(a){return a!=null},
cV(a){if(a!=null)return a
throw A.d(A.j(a,"Object"))},
dc(a){return!0},
cW(a){return a},
bZ(a){return!1},
bi(a){return!0===a||!1===a},
dY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.j(a,"bool"))},
e_(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.j(a,"bool"))},
dZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.j(a,"bool?"))},
e0(a){if(typeof a=="number")return a
throw A.d(A.j(a,"double"))},
e2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"double"))},
e1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"double?"))},
d4(a){return typeof a=="number"&&Math.floor(a)===a},
e3(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.j(a,"int"))},
e5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.j(a,"int"))},
e4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.j(a,"int?"))},
d7(a){return typeof a=="number"},
e6(a){if(typeof a=="number")return a
throw A.d(A.j(a,"num"))},
e8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"num"))},
e7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"num?"))},
da(a){return typeof a=="string"},
e9(a){if(typeof a=="string")return a
throw A.d(A.j(a,"String"))},
eb(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.j(a,"String"))},
ea(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.j(a,"String?"))},
c_(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.k(a[r],b)
return t},
dd(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.c_(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.k(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bX(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", "
if(a4!=null){t=a4.length
if(a3==null){a3=[]
s=null}else s=a3.length
r=a3.length
for(q=t;q>0;--q)a3.push("T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a1){n=B.c.L(n+m,a3[a3.length-1-q])
l=a4[q]
k=l.x
if(!(k===2||k===3||k===4||k===5||l===p))if(!(l===o))j=!1
else j=!0
else j=!0
if(!j)n+=" extends "+A.k(l,a3)}n+=">"}else{n=""
s=null}p=a2.y
i=a2.z
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.k(p,a3)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.k(h[q],a3)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.k(f[q],a3)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.k(d[q+2],a3)+" "+d[q]}a+="}"}if(s!=null){a3.toString
a3.length=s}return n+"("+a+") => "+b},
k(a,b){var t,s,r,q,p,o,n=a.x
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=A.k(a.y,b)
return t}if(n===7){s=a.y
t=A.k(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(n===8)return"FutureOr<"+A.k(a.y,b)+">"
if(n===9){q=A.dg(a.y)
p=a.z
return p.length>0?q+("<"+A.c_(p,b)+">"):q}if(n===11)return A.dd(a,b)
if(n===12)return A.bX(a,b,null)
if(n===13)return A.bX(a.y,b,a.z)
if(n===14){o=a.y
return b[b.length-1-o]}return"?"},
dg(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cU(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cT(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.ap(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a1(a,5,"#")
r=A.aX(t)
for(q=0;q<t;++q)r[q]=s
p=A.a0(a,b,r)
o[b]=p
return p}else return n},
cS(a,b){return A.bS(a.tR,b)},
cR(a,b){return A.bS(a.eT,b)},
ap(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bM(A.bK(a,null,b,c))
s.set(b,t)
return t},
a2(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bM(A.bK(a,b,c,!0))
r.set(c,s)
return s},
bR(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.be(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
p(a,b){b.a=A.d0
b.b=A.d1
return b},
a1(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.m(null,null)
t.x=b
t.at=c
s=A.p(a,t)
a.eC.set(c,s)
return s},
bQ(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cO(a,b,s,c)
a.eC.set(s,t)
return t},
cO(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.r(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.m(null,null)
r.x=6
r.y=b
r.at=c
return A.p(a,r)},
bg(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cN(a,b,s,c)
a.eC.set(s,t)
return t},
cN(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.r(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.a4(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.a4(r.y))return r
else return A.bE(a,b)}}q=new A.m(null,null)
q.x=7
q.y=b
q.at=c
return A.p(a,q)},
bP(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cL(a,b,s,c)
a.eC.set(s,t)
return t},
cL(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.r(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.a0(a,"bx",[b])
else if(b===u.P||b===u.T)return u.O}r=new A.m(null,null)
r.x=8
r.y=b
r.at=c
return A.p(a,r)},
cP(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.m(null,null)
t.x=14
t.y=b
t.at=r
s=A.p(a,t)
a.eC.set(r,s)
return s},
a_(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
cK(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
a0(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.a_(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.m(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.p(a,s)
a.eC.set(q,r)
return r},
be(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.a_(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.m(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.p(a,p)
a.eC.set(r,o)
return o},
cQ(a,b,c){var t,s,r="+"+(b+"("+A.a_(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.m(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.p(a,t)
a.eC.set(r,s)
return s},
bO(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.a_(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.a_(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cK(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.m(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.p(a,q)
a.eC.set(s,p)
return p},
bf(a,b,c,d){var t,s=b.at+("<"+A.a_(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cM(a,b,c,s,d)
a.eC.set(s,t)
return t},
cM(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aX(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.x(a,b,s,0)
n=A.a3(a,c,s,0)
return A.bf(a,o,n,c!==n)}}m=new A.m(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.p(a,m)},
bK(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bM(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.cE(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bL(a,s,m,l,!1)
else if(r===46)s=A.bL(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.w(a.u,a.e,l.pop()))
break
case 94:l.push(A.cP(a.u,l.pop()))
break
case 35:l.push(A.a1(a.u,5,"#"))
break
case 64:l.push(A.a1(a.u,2,"@"))
break
case 126:l.push(A.a1(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cG(a,l)
break
case 38:A.cF(a,l)
break
case 42:q=a.u
l.push(A.bQ(q,A.w(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.bg(q,A.w(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bP(q,A.w(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.cD(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bN(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.cI(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.w(a.u,a.e,n)},
cE(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bL(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.cU(t,p.y)[q]
if(o==null)A.dF('No "'+q+'" in "'+A.cA(p)+'"')
d.push(A.a2(t,p,o))}else d.push(q)
return n},
cG(a,b){var t,s=a.u,r=A.bJ(a,b),q=b.pop()
if(typeof q=="string")b.push(A.a0(s,q,r))
else{t=A.w(s,a.e,q)
switch(t.x){case 12:b.push(A.bf(s,t,r,a.n))
break
default:b.push(A.be(s,t,r))
break}}},
cD(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.bJ(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.w(n,a.e,m)
p=new A.am()
p.a=r
p.b=t
p.c=s
b.push(A.bO(n,q,p))
return
case-4:b.push(A.cQ(n,b.pop(),r))
return
default:throw A.d(A.a8("Unexpected state under `()`: "+A.l(m)))}},
cF(a,b){var t=b.pop()
if(0===t){b.push(A.a1(a.u,1,"0&"))
return}if(1===t){b.push(A.a1(a.u,4,"1&"))
return}throw A.d(A.a8("Unexpected extended operation "+A.l(t)))},
bJ(a,b){var t=b.splice(a.p)
A.bN(a.u,a.e,t)
a.p=b.pop()
return t},
w(a,b,c){if(typeof c=="string")return A.a0(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cH(a,b,c)}else return c},
bN(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.w(a,b,c[t])},
cI(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.w(a,b,c[t])},
cH(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.a8("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.a8("Bad index "+c+" for "+b.h(0)))},
f(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.r(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.r(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.f(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.f(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.f(a,b.y,c,d,e)
if(s===6)return A.f(a,b.y,c,d,e)
return s!==7}if(s===6)return A.f(a,b.y,c,d,e)
if(q===6){t=A.bE(a,d)
return A.f(a,b,c,t,e)}if(s===8){if(!A.f(a,b.y,c,d,e))return!1
return A.f(a,A.bb(a,b),c,d,e)}if(s===7){t=A.f(a,u.P,c,d,e)
return t&&A.f(a,b.y,c,d,e)}if(q===8){if(A.f(a,b,c,d.y,e))return!0
return A.f(a,b,c,A.bb(a,d),e)}if(q===7){t=A.f(a,b,c,u.P,e)
return t||A.f(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.f(a,k,c,j,e)||!A.f(a,j,e,k,c))return!1}return A.bY(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bY(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.d5(a,b,c,d,e)}if(p&&q===11)return A.d9(a,b,c,d,e)
return!1},
bY(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.f(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.f(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.f(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.f(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.f(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
d5(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.a2(a,b,s[p])
return A.bT(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.bT(a,o,null,c,n,e)},
bT(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.f(a,s,d,r,f))return!1}return!0},
d9(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.f(a,s[t],c,r[t],e))return!1
return!0},
a4(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.r(a))if(s!==7)if(!(s===6&&A.a4(a.y)))t=s===8&&A.a4(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dz(a){var t
if(!A.r(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
r(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
bS(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aX(a){return a>0?new Array(a):v.typeUniverse.sEA},
m:function m(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
am:function am(){this.c=this.b=this.a=null},
aW:function aW(a){this.a=a},
aR:function aR(){},
ao:function ao(a){this.a=a},
bA(a){return new A.T(a.F("T<0>"))},
bd(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
cC(a,b){var t=new A.U(a,b)
t.c=a.e
return t},
T:function T(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aU:function aU(a){this.a=a
this.b=null},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ah:function ah(){},
R:function R(){},
Z:function Z(){},
cv(a,b){var t,s,r=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,A.c8)(a),++s)r.push(a[s])
return J.by(r)},
cz(a){return new A.aE(a,A.ct(a,!1,!0,!1,!1,!1))},
cB(a,b,c){var t=J.ce(b)
if(!t.j())return a
if(c.length===0){do a+=A.l(t.gn())
while(t.j())}else{a+=A.l(t.gn())
for(;t.j();)a=a+c+A.l(t.gn())}return a},
aA(a){if(typeof a=="number"||A.bi(a)||a==null)return J.J(a)
if(typeof a=="string")return JSON.stringify(a)
return A.bC(a)},
a8(a){return new A.au(a)},
cg(a){return new A.K(!1,null,null,a)},
ch(a,b,c){return new A.K(!0,a,b,c)},
bD(a,b,c,d,e){return new A.aI(b,c,!0,a,d,"Invalid value")},
cy(a,b,c){if(0>a||a>c)throw A.d(A.bD(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bD(b,a,c,"end",null))
return b}return c},
bH(a){return new A.aP(a)},
bw(a){return new A.aw(a)},
b8(a,b,c){var t,s
if(A.dy(a))return b+"..."+c
t=new A.aM(b)
$.b5.push(a)
try{s=t
s.a=A.cB(s.a,a,", ")}finally{$.b5.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cw(a,b,c,d){var t
if(B.a===c){t=B.b.gi(a)
b=J.t(b)
return A.bc(A.v(A.v($.b6(),t),b))}if(B.a===d){t=B.b.gi(a)
b=J.t(b)
c=J.t(c)
return A.bc(A.v(A.v(A.v($.b6(),t),b),c))}t=B.b.gi(a)
b=J.t(b)
c=J.t(c)
d=J.t(d)
d=A.bc(A.v(A.v(A.v(A.v($.b6(),t),b),c),d))
return d},
az:function az(){},
au:function au(a){this.a=a},
aO:function aO(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aP:function aP(a){this.a=a},
aw:function aw(a){this.a=a},
aS:function aS(a){this.a=a},
aB:function aB(a,b){this.a=a
this.b=b},
P:function P(){},
h:function h(){},
aM:function aM(a){this.a=a},
b:function b(){},
a5:function a5(){},
a6:function a6(){},
ay:function ay(){},
i:function i(){},
a:function a(){},
ab:function ab(){},
A:function A(){},
e:function e(){},
V:function V(){},
al:function al(a){this.a=a},
ad:function ad(){},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aq:function aq(){},
ar:function ar(){},
aa:function aa(){},
ax:function ax(a){this.a=a},
a9:function a9(a){this.a=a},
c:function c(){},
dB(){var t=document.getElementById("app"),s=A.ci("container","div","",u.h),r=A.bG("Some text","text"),q=s.a
s.Y(0,[r,A.cq(new A.b2(r),[new A.b3()],q)])
if(t!=null)t.appendChild(q)},
c2(a){var t=a.length
return t===0?"":B.c.M(a,t-1)},
ci(a,b,c,d){var t=document.createElement(b)
t=new A.y(d.a(t),d.F("y<0>"))
t.t(a,null,b,c,d)
return t},
bG(a,b){var t=document.createElement("p")
t=new A.ak(t)
t.t(b,null,"p",a,u.h)
return t},
cq(a,b,c){var t=A.bG("","error"),s=document.createElement("input"),r=u.q
s=new A.ae(a,t,b,c,r.a(s))
s.t("input",null,"input","",r)
s.P(a,b,c)
return s},
b2:function b2(a){this.a=a},
b3:function b3(){},
y:function y(a,b){this.a=a
this.$ti=b},
ak:function ak(a){this.a=a},
ae:function ae(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=e},
aC:function aC(a,b){this.a=a
this.b=b},
dH(a){A.dG(new A.aG("Field '"+a+"' has been assigned during initialization."),new Error())}},J={
bp(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bn(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bo==null){A.dt()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.bH("Return interceptor for "+A.l(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aT
if(p==null)p=$.aT=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dA(a)
if(q!=null)return q
if(typeof a=="function")return B.p
t=Object.getPrototypeOf(a)
if(t==null)return B.h
if(t===Object.prototype)return B.h
if(typeof r=="function"){p=$.aT
if(p==null)p=$.aT=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.d,enumerable:false,writable:true,configurable:true})
return B.d}return B.d},
by(a){a.fixed$length=Array
return a},
bz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
cr(a,b){var t,s
for(t=a.length;b<t;){s=a.charCodeAt(b)
if(s!==32&&s!==13&&!J.bz(s))break;++b}return b},
cs(a,b){var t,s
for(;b>0;b=t){t=b-1
s=a.charCodeAt(t)
if(s!==32&&s!==13&&!J.bz(s))break}return b},
E(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.N.prototype
return J.ag.prototype}if(typeof a=="string")return J.F.prototype
if(a==null)return J.O.prototype
if(typeof a=="boolean")return J.af.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
return a}if(a instanceof A.h)return a
return J.bn(a)},
dm(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
return a}if(a instanceof A.h)return a
return J.bn(a)},
dn(a){if(typeof a=="string")return J.F.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.G.prototype
return a},
bm(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
return a}if(a instanceof A.h)return a
return J.bn(a)},
b7(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.E(a).m(a,b)},
cc(a,b,c,d){return J.bm(a).S(a,b,c,d)},
cd(a){return J.bm(a).gI(a)},
t(a){return J.E(a).gi(a)},
ce(a){return J.dm(a).gp(a)},
cf(a){return J.E(a).gk(a)},
J(a){return J.E(a).h(a)},
bq(a){return J.dn(a).Z(a)},
M:function M(){},
af:function af(){},
O:function O(){},
n:function n(){},
C:function C(){},
ai:function ai(){},
G:function G(){},
u:function u(){},
B:function B(){},
aF:function aF(){},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aD:function aD(){},
N:function N(){},
ag:function ag(){},
F:function F(){}},B={}
var w=[A,J,B]
var $={}
A.b9.prototype={}
J.M.prototype={
m(a,b){return a===b},
gi(a){return A.aj(a)},
h(a){return"Instance of '"+A.aH(a)+"'"},
gk(a){return A.D(A.bh(this))}}
J.af.prototype={
h(a){return String(a)},
gi(a){return a?519018:218159},
gk(a){return A.D(u.y)},
$io:1,
$ibk:1}
J.O.prototype={
m(a,b){return null==b},
h(a){return"null"},
gi(a){return 0},
$io:1}
J.n.prototype={}
J.C.prototype={
gi(a){return 0},
h(a){return String(a)}}
J.ai.prototype={}
J.G.prototype={}
J.u.prototype={
h(a){var t=a[$.cb()]
if(t==null)return this.O(a)
return"JavaScript function for "+J.J(t)}}
J.B.prototype={
h(a){return A.b8(a,"[","]")},
gp(a){return new J.a7(a,a.length)},
gi(a){return A.aj(a)}}
J.aF.prototype={}
J.a7.prototype={
gn(){var t=this.d
return t==null?A.H(this).c.a(t):t},
j(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.c8(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.aD.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
gk(a){return A.D(u.H)}}
J.N.prototype={
gk(a){return A.D(u.S)},
$io:1}
J.ag.prototype={
gk(a){return A.D(u.i)},
$io:1}
J.F.prototype={
L(a,b){return a+b},
B(a,b,c){return a.substring(b,A.cy(b,c,a.length))},
M(a,b){return this.B(a,b,null)},
Z(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(q.charCodeAt(0)===133){t=J.cr(q,1)
if(t===p)return""}else t=0
s=p-1
r=q.charCodeAt(s)===133?J.cs(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
h(a){return a},
gi(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gk(a){return A.D(u.N)},
$io:1,
$iS:1}
A.aG.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.aK.prototype={}
A.X.prototype={$r:"+(1,2)",$s:1}
A.Y.prototype={$r:"+error,isValid(1,2)",$s:2}
A.z.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.c9(s==null?"unknown":s)+"'"},
ga0(){return this},
$C:"$1",
$R:1,
$D:null}
A.av.prototype={$C:"$2",$R:2}
A.aN.prototype={}
A.aL.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.c9(t)+"'"}}
A.L.prototype={
m(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.L))return!1
return this.$_target===b.$_target&&this.a===b.a},
gi(a){return(A.c5(this.a)^A.aj(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aH(this.a)+"'")}}
A.aQ.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aJ.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aZ.prototype={
$1(a){return this.a(a)}}
A.b_.prototype={
$2(a,b){return this.a(a,b)}}
A.b0.prototype={
$1(a){return this.a(a)}}
A.W.prototype={
h(a){return this.H(!1)},
H(a){var t,s,r,q,p,o=this.V(),n=this.G(),m=(a?""+"Record ":"")+"("
for(t=o.length,s="",r=0;r<t;++r,s=", "){m+=s
q=o[r]
if(typeof q=="string")m=m+q+": "
p=n[r]
m=a?m+A.bC(p):m+A.l(p)}m+=")"
return m.charCodeAt(0)==0?m:m},
V(){var t,s=this.$s
for(;$.aV.length<=s;)$.aV.push(null)
t=$.aV[s]
if(t==null){t=this.T()
$.aV[s]=t}return t},
T(){var t,s,r,q=this.$r,p=q.indexOf("("),o=q.substring(1,p),n=q.substring(p),m=n==="()"?0:n.replace(/[^,]/g,"").length+1,l=new Array(m)
for(t=0;t<m;++t)l[t]=t
if(o!==""){s=o.split(",")
t=s.length
for(r=m;t>0;){--r;--t
l[r]=s[t]}}l=A.cv(l,!1)
l.fixed$length=Array
l.immutable$list=Array
return l}}
A.an.prototype={
G(){return[this.a,this.b]},
m(a,b){if(b==null)return!1
return b instanceof A.an&&this.$s===b.$s&&J.b7(this.a,b.a)&&J.b7(this.b,b.b)},
gi(a){return A.cw(this.$s,this.a,this.b,B.a)}}
A.aE.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags}}
A.m.prototype={
F(a){return A.a2(v.typeUniverse,this,a)},
a1(a){return A.bR(v.typeUniverse,this,a)}}
A.am.prototype={}
A.aW.prototype={
h(a){return A.k(this.a,null)}}
A.aR.prototype={
h(a){return this.a}}
A.ao.prototype={}
A.T.prototype={
gp(a){var t=new A.U(this,this.r)
t.c=this.e
return t},
l(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.C(t==null?r.b=A.bd():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.C(s==null?r.c=A.bd():s,b)}else return r.R(b)},
R(a){var t,s,r=this,q=r.d
if(q==null)q=r.d=A.bd()
t=r.U(a)
s=q[t]
if(s==null)q[t]=[r.u(a)]
else{if(r.W(s,a)>=0)return!1
s.push(r.u(a))}return!0},
C(a,b){if(a[b]!=null)return!1
a[b]=this.u(b)
return!0},
u(a){var t=this,s=new A.aU(a)
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
U(a){return J.t(a)&1073741823},
W(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.b7(a[t].a,b))return t
return-1}}
A.aU.prototype={}
A.U.prototype={
gn(){var t=this.d
return t==null?A.H(this).c.a(t):t},
j(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.bw(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
A.ah.prototype={
h(a){return A.b8(a,"[","]")}}
A.R.prototype={
h(a){return A.b8(this,"{","}")},
v(a,b){var t,s,r,q,p=this.gp(this)
if(!p.j())return""
t=p.d
s=J.J(t==null?A.H(p).c.a(t):t)
if(!p.j())return s
t=A.H(p).c
if(b.length===0){r=s
do{q=p.d
r+=A.l(q==null?t.a(q):q)}while(p.j())
t=r}else{r=s
do{q=p.d
r=r+b+A.l(q==null?t.a(q):q)}while(p.j())
t=r}return t.charCodeAt(0)==0?t:t},
$iQ:1}
A.Z.prototype={}
A.az.prototype={}
A.au.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aA(t)
return"Assertion failed"}}
A.aO.prototype={}
A.K.prototype={
gE(){return"Invalid argument"+(!this.a?"(s)":"")},
gD(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gE()+r+p
if(!t.a)return o
return o+t.gD()+": "+A.aA(t.gJ())},
gJ(){return this.b}}
A.aI.prototype={
gJ(){return this.b},
gE(){return"RangeError"},
gD(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.l(r):""
else if(r==null)t=": Not greater than or equal to "+A.l(s)
else if(r>s)t=": Not in inclusive range "+A.l(s)+".."+A.l(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.l(s)
return t}}
A.aP.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aw.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aA(t)+"."}}
A.aS.prototype={
h(a){return"Exception: "+this.a}}
A.aB.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=B.c.B(r,0,75)+"..."
return s+"\n"+r}}
A.P.prototype={
gi(a){return A.h.prototype.gi.call(this,this)},
h(a){return"null"}}
A.h.prototype={$ih:1,
m(a,b){return this===b},
gi(a){return A.aj(this)},
h(a){return"Instance of '"+A.aH(this)+"'"},
gk(a){return A.dq(this)},
toString(){return this.h(this)}}
A.aM.prototype={
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.b.prototype={}
A.a5.prototype={
h(a){return String(a)}}
A.a6.prototype={
h(a){return String(a)}}
A.ay.prototype={
h(a){return String(a)}}
A.i.prototype={
gI(a){return new A.al(a)},
h(a){return a.localName},
$ii:1}
A.a.prototype={$ia:1}
A.ab.prototype={
S(a,b,c,d){return a.addEventListener(b,A.dh(c,1),d)}}
A.A.prototype={
A(a,b){return a.setCustomValidity(b)},
$iA:1}
A.e.prototype={
h(a){var t=a.nodeValue
return t==null?this.N(a):t},
$ie:1}
A.V.prototype={$iba:1}
A.al.prototype={
q(){var t,s,r,q,p=A.bA(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.bq(t[r])
if(q.length!==0)p.l(0,q)}return p},
K(a){this.a.className=a.v(0," ")},
l(a,b){var t=this.a.classList,s=t.contains(b)
t.add(b)
return!s}}
A.ad.prototype={
gp(a){return new A.ac(a,a.length)}}
A.ac.prototype={
j(){var t=this,s=t.c+1,r=t.b
if(s<r){t.d=t.a[s]
t.c=s
return!0}t.d=null
t.c=r
return!1},
gn(){var t=this.d
return t==null?A.H(this).c.a(t):t}}
A.aq.prototype={}
A.ar.prototype={}
A.aa.prototype={
X(a){var t=$.ca()
if(t.b.test(a))return a
throw A.d(A.ch(a,"value","Not a valid class token"))},
h(a){return this.q().v(0," ")},
gp(a){var t=this.q()
return A.cC(t,t.r)},
l(a,b){var t,s
this.X(b)
t=this.q()
s=new A.ax(b).$1(t)
this.K(t)
return s==null?!1:s}}
A.ax.prototype={
$1(a){return a.l(0,this.a)}}
A.a9.prototype={
q(){var t,s,r,q,p=this.a.getAttribute("class"),o=A.bA(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.bq(t[r])
if(q.length!==0)o.l(0,q)}return o},
K(a){this.a.setAttribute("class",a.v(0," "))}}
A.c.prototype={
gI(a){return new A.a9(a)}}
A.b2.prototype={
$1(a){var t=A.c2(a)
this.a.a.appendChild(document.createTextNode(t))}}
A.b3.prototype={
$1(a){if(A.c2(a)==="a")return B.t
return B.r}}
A.y.prototype={
t(a,b,c,d,e){var t=this.a
J.cd(t).l(0,a)
t.innerText=d},
Y(a,b){var t,s
for(t=this.a,s=0;s<2;++s)t.appendChild(b[s].a)}}
A.ak.prototype={}
A.ae.prototype={
P(a,b,c){J.cc(this.a,"input",new A.aC(this,this.b),null)},
a_(){var t,s,r,q,p,o
for(t=this.d,s=this.a,r=0;r<1;++r){q=t[r]
p=s.value
o=q.$1(p==null?"":p)
if(!o.b)return new A.X(o.a,!1)}return B.u}}
A.aC.prototype={
$1(a){var t,s,r,q,p=this.a,o=p.a,n=o.value
if(n==null)n=""
this.b.$1(n)
t=p.a_()
s=t.a
r=t.b
r=r
n=J.bm(o)
q=p.c.a
if(!r){s.toString
n.A(o,s)
q.innerText=s
p.e.appendChild(q)}else{n.A(o,"")
p=q.parentNode
if(p!=null)p.removeChild(q)}}};(function aliases(){var t=J.M.prototype
t.N=t.h
t=J.C.prototype
t.O=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.h,null)
r(A.h,[A.b9,J.M,J.a7,A.az,A.aK,A.W,A.z,A.aE,A.m,A.am,A.aW,A.R,A.aU,A.U,A.ah,A.aS,A.aB,A.P,A.aM,A.ad,A.ac,A.y])
r(J.M,[J.af,J.O,J.n,J.aD,J.F])
r(J.n,[J.C,J.B,A.ab,A.ay,A.a,A.aq])
r(J.C,[J.ai,J.G,J.u])
s(J.aF,J.B)
r(J.aD,[J.N,J.ag])
r(A.az,[A.aG,A.aQ,A.aJ,A.aR,A.au,A.aO,A.K,A.aP,A.aw])
s(A.an,A.W)
r(A.an,[A.X,A.Y])
r(A.z,[A.av,A.aN,A.aZ,A.b0,A.ax,A.b2,A.b3,A.aC])
r(A.aN,[A.aL,A.L])
s(A.b_,A.av)
s(A.ao,A.aR)
r(A.R,[A.Z,A.aa])
s(A.T,A.Z)
s(A.aI,A.K)
s(A.e,A.ab)
s(A.i,A.e)
r(A.i,[A.b,A.c])
r(A.b,[A.a5,A.a6,A.A])
s(A.ar,A.aq)
s(A.V,A.ar)
r(A.aa,[A.al,A.a9])
r(A.y,[A.ak,A.ae])
t(A.aq,A.ah)
t(A.ar,A.ad)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{dw:"int",dj:"double",dD:"num",S:"String",bk:"bool",P:"Null",cu:"List"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.X&&a.b(c.a)&&b.b(c.b),"2;error,isValid":(a,b)=>c=>c instanceof A.Y&&a.b(c.a)&&b.b(c.b)}}
A.cS(v.typeUniverse,JSON.parse('{"ai":"C","G":"C","u":"C","dL":"a","dR":"a","dK":"c","dT":"c","dM":"b","dV":"b","dN":"e","dX":"e","dO":"e","dU":"i","af":{"bk":[],"o":[]},"O":{"o":[]},"N":{"o":[]},"ag":{"o":[]},"F":{"S":[],"o":[]},"T":{"Q":["1"]},"R":{"Q":["1"]},"Z":{"Q":["1"]},"i":{"e":[]},"A":{"i":[],"e":[]},"b":{"i":[],"e":[]},"a5":{"i":[],"e":[]},"a6":{"i":[],"e":[]},"V":{"ba":["e"]},"al":{"Q":["S"]},"aa":{"Q":["S"]},"a9":{"Q":["S"]},"c":{"i":[],"e":[]},"ak":{"y":["i"]},"ae":{"y":["A"]}}'))
A.cR(v.typeUniverse,JSON.parse('{"B":1,"aF":1,"a7":1,"U":1,"ah":1,"R":1,"Z":1,"ad":1,"ac":1}'))
var u=(function rtii(){var t=A.dl
return{h:t("i"),Z:t("dS"),q:t("A"),b:t("B<@>"),T:t("O"),g:t("u"),p:t("ba<@>"),P:t("P"),K:t("h"),L:t("dW"),F:t("+()"),N:t("S"),R:t("o"),o:t("G"),y:t("bk"),i:t("dj"),S:t("dw"),A:t("0&*"),_:t("h*"),O:t("bx<P>?"),X:t("h?"),H:t("dD")}})();(function constants(){var t=hunkHelpers.makeConstList
B.o=J.M.prototype
B.b=J.N.prototype
B.c=J.F.prototype
B.p=J.u.prototype
B.q=J.n.prototype
B.h=J.ai.prototype
B.d=J.G.prototype
B.e=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.i=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.n=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.m=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.l=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.k=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.f=function(hooks) { return hooks; }

B.a=new A.aK()
B.w=t([])
B.r=new A.Y("",!0)
B.t=new A.Y("Error",!1)
B.u=new A.X(null,!0)
B.v=A.dJ("h")})();(function staticFields(){$.aT=null
$.b5=[]
$.bB=null
$.bt=null
$.bs=null
$.c3=null
$.c0=null
$.c7=null
$.aY=null
$.b1=null
$.bo=null
$.aV=[]})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dQ","cb",()=>A.dp("_$dart_dartClosure"))
t($,"ec","b6",()=>A.c5(B.v))
t($,"dP","ca",()=>A.cz("^\\S+$"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.n,DOMTokenList:J.n,MediaError:J.n,NavigatorUserMediaError:J.n,OverconstrainedError:J.n,PositionError:J.n,GeolocationPositionError:J.n,HTMLAudioElement:A.b,HTMLBRElement:A.b,HTMLBaseElement:A.b,HTMLBodyElement:A.b,HTMLButtonElement:A.b,HTMLCanvasElement:A.b,HTMLContentElement:A.b,HTMLDListElement:A.b,HTMLDataElement:A.b,HTMLDataListElement:A.b,HTMLDetailsElement:A.b,HTMLDialogElement:A.b,HTMLDivElement:A.b,HTMLEmbedElement:A.b,HTMLFieldSetElement:A.b,HTMLFormElement:A.b,HTMLHRElement:A.b,HTMLHeadElement:A.b,HTMLHeadingElement:A.b,HTMLHtmlElement:A.b,HTMLIFrameElement:A.b,HTMLImageElement:A.b,HTMLLIElement:A.b,HTMLLabelElement:A.b,HTMLLegendElement:A.b,HTMLLinkElement:A.b,HTMLMapElement:A.b,HTMLMediaElement:A.b,HTMLMenuElement:A.b,HTMLMetaElement:A.b,HTMLMeterElement:A.b,HTMLModElement:A.b,HTMLOListElement:A.b,HTMLObjectElement:A.b,HTMLOptGroupElement:A.b,HTMLOptionElement:A.b,HTMLOutputElement:A.b,HTMLParagraphElement:A.b,HTMLParamElement:A.b,HTMLPictureElement:A.b,HTMLPreElement:A.b,HTMLProgressElement:A.b,HTMLQuoteElement:A.b,HTMLScriptElement:A.b,HTMLSelectElement:A.b,HTMLShadowElement:A.b,HTMLSlotElement:A.b,HTMLSourceElement:A.b,HTMLSpanElement:A.b,HTMLStyleElement:A.b,HTMLTableCaptionElement:A.b,HTMLTableCellElement:A.b,HTMLTableDataCellElement:A.b,HTMLTableHeaderCellElement:A.b,HTMLTableColElement:A.b,HTMLTableElement:A.b,HTMLTableRowElement:A.b,HTMLTableSectionElement:A.b,HTMLTemplateElement:A.b,HTMLTextAreaElement:A.b,HTMLTimeElement:A.b,HTMLTitleElement:A.b,HTMLTrackElement:A.b,HTMLUListElement:A.b,HTMLUnknownElement:A.b,HTMLVideoElement:A.b,HTMLDirectoryElement:A.b,HTMLFontElement:A.b,HTMLFrameElement:A.b,HTMLFrameSetElement:A.b,HTMLMarqueeElement:A.b,HTMLElement:A.b,HTMLAnchorElement:A.a5,HTMLAreaElement:A.a6,DOMException:A.ay,MathMLElement:A.i,Element:A.i,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.ab,HTMLInputElement:A.A,CDATASection:A.e,CharacterData:A.e,Comment:A.e,Document:A.e,DocumentFragment:A.e,HTMLDocument:A.e,ProcessingInstruction:A.e,ShadowRoot:A.e,Text:A.e,XMLDocument:A.e,Attr:A.e,DocumentType:A.e,Node:A.e,NamedNodeMap:A.V,MozNamedAttrMap:A.V,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMTokenList:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLFormElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLSelectElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,DOMException:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLInputElement:true,CDATASection:true,CharacterData:true,Comment:true,Document:true,DocumentFragment:true,HTMLDocument:true,ProcessingInstruction:true,ShadowRoot:true,Text:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.dB
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
