# Cızırtı "yumak" sprite'ları (2D mod, ikonlar): src/render3d/entities.js
# içindeki 3D yumakla aynı tasarım — rastgele düzlemlerde dalgalı halkalar,
# %70 ana renk / %30 kontrast, koyu çekirdek. Derinliğe göre sıralı çizim:
# arka tüpler koyu/ince, öndekiler parlak/kalın; üstüne yumuşak parlama.
# Çalıştır: python3 art/yarn/gen.py  -> www/img/monsters/glitch_*.png
import math, random
from PIL import Image, ImageDraw, ImageFilter, ImageChops
COLORS = {
  'red':('#ff3b3b','#ffb340'), 'blue':('#3b8bff','#ff5fd0'), 'green':('#3bea6a','#2fd9ff'),
  'yellow':('#ffd23b','#ff6a2a'), 'purple':('#b04bff','#4fd2ff'), 'orange':('#ff8a1f','#ff3b6b'),
  'pink':('#ff4fd8','#8a5bff'),
}
S=320; SS=3; N=S*SS; C=N/2; R=N*0.30
def hexrgb(h): h=h.lstrip('#'); return tuple(int(h[i:i+2],16) for i in (0,2,4))
def loops(seed=91):
  rnd=random.Random(seed); out=[]
  for k in range(14):
    u=rnd.uniform(-1,1); th=rnd.uniform(0,2*math.pi); s=math.sqrt(1-u*u)
    n=(s*math.cos(th),u,s*math.sin(th))
    a=(1,0,0) if abs(n[0])<0.9 else (0,1,0)
    e1=cross(n,a); e1=norm(e1); e2=cross(n,e1)
    wob=0.06+rnd.random()*0.08; wf=2+rnd.randrange(3); ph=rnd.uniform(0,6.28); rr=0.86+rnd.random()*0.14
    w=0.075+rnd.random()*0.035
    pts=[]
    for i in range(161):
      t=i/160*2*math.pi; r=rr*(1+wob*math.sin(t*wf+ph)); h=math.sin(t*wf+ph)*wob*rr*0.6
      pts.append(tuple(e1[j]*math.cos(t)*r+e2[j]*math.sin(t)*r+n[j]*h for j in range(3)))
    out.append((pts, k%3==1, w))
  return out
def cross(a,b): return (a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0])
def norm(a): l=math.sqrt(sum(x*x for x in a)); return tuple(x/l for x in a)
def rot(p, ax, ay):
  x,y,z=p; cy,sy=math.cos(ay),math.sin(ay); x,z=x*cy+z*sy,-x*sy+z*cy
  cx,sx=math.cos(ax),math.sin(ax); y,z=y*cx-z*sx,y*sx+z*cx
  return (x,y,z)
L=loops()
for name,(c0,c1) in COLORS.items():
  a,b=hexrgb(c0),hexrgb(c1)
  segs=[]
  for pts,acc,w in L:
    q=[rot(p,0.55,0.4) for p in pts]
    for i in range(len(q)-1):
      p0,p1=q[i],q[i+1]; z=(p0[2]+p1[2])/2
      segs.append((z,p0,p1,acc,w))
  segs.sort(key=lambda s:s[0])   # arkadan öne
  img=Image.new('RGBA',(N,N),(0,0,0,0)); d=ImageDraw.Draw(img)
  core_drawn=False
  for z,p0,p1,acc,w in segs:
    if not core_drawn and z>-0.05:
      cr=R*0.80; d.ellipse([C-cr,C-cr,C+cr,C+cr], fill=(12,8,20,215)); core_drawn=True
    col=b if acc else a
    k=0.42+0.58*(z+1)/2          # derinlik ışığı: arka koyu, ön parlak
    lw=max(2,int(R*w*(0.75+0.4*(z+1)/2)*1.15))
    rgb=tuple(min(255,int(v*k + (255-v)*0.25*max(0,z)**3)) for v in col)
    x0,y0,x1,y1=C+p0[0]*R, C-p0[1]*R, C+p1[0]*R, C-p1[1]*R
    d.line([(x0,y0),(x1,y1)], fill=rgb+(255,), width=lw)
    rr=lw/2; d.ellipse([x1-rr,y1-rr,x1+rr,y1+rr], fill=rgb+(255,))   # yuvarlak uç
  # parlama
  glow=img.filter(ImageFilter.GaussianBlur(N*0.035))
  gl=Image.new('RGBA',(N,N),(0,0,0,0))
  halo=Image.new('RGBA',(N,N),(0,0,0,0)); hd=ImageDraw.Draw(halo); hr=R*1.15
  hd.ellipse([C-hr,C-hr,C+hr,C+hr], fill=a+(70,)); halo=halo.filter(ImageFilter.GaussianBlur(N*0.06))
  out=Image.alpha_composite(halo, glow); out=Image.alpha_composite(out, img)
  out=out.resize((S,S), Image.LANCZOS)
  out.save(f'www/img/monsters/glitch_{name}.png', optimize=True)
  print(name)
