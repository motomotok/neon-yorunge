# Piksel-sanat ClampGames logosu üretici: katman başına piksel haritası -> SVG <rect>'ler
# (her katmanın kendi dış hattı var, böylece hareketli parçalar ayrı çizilir).
W,H=48,44
COL={'O':'#0d220f','G':'#43b84f','L':'#8fe68a','D':'#226b2c','S':'#d9dee6','s':'#7c8594','T':'#a7afbb',
     'K':'#16181c','k':'#3a3f47','B':'#4fd25c','b':'#2a8f36','W':'#e8ffe4','R':'#e8433a','r':'#8e1d18',
     'P':'#4f6e53','Q':'#2c4130','q':'#1c2b1f','Y':'#fff6a8'}
def layer(): return [[None]*W for _ in range(H)]
def rect(L,x0,y0,x1,y1,c):
    for y in range(y0,y1+1):
        for x in range(x0,x1+1):
            if 0<=x<W and 0<=y<H: L[y][x]=c
def circle(L,cx,cy,r,c):
    for y in range(H):
        for x in range(W):
            if (x+0.5-cx)**2+(y+0.5-cy)**2<=r*r: L[y][x]=c
def outline(L,oc='O'):
    out=[row[:] for row in L]
    for y in range(H):
        for x in range(W):
            if L[y][x] is None:
                for dx,dy in ((1,0),(-1,0),(0,1),(0,-1)):
                    xx,yy=x+dx,y+dy
                    if 0<=xx<W and 0<=yy<H and L[yy][xx] is not None and L[yy][xx]!=oc: out[y][x]=oc; break
    return out
def svg_rects(L):
    # yatay koşuları birleştir
    s=[]
    for y in range(H):
        x=0
        while x<W:
            c=L[y][x]
            if c is None: x+=1; continue
            x2=x
            while x2+1<W and L[y][x2+1]==c: x2+=1
            s.append(f'<rect x="{x}" y="{y}" width="{x2-x+1}" height="1" fill="{COL[c]}"/>')
            x=x2+1
    return ''.join(s)

# 1) Joystick tabanı
base=layer()
rect(base,5,31,41,34,'P'); rect(base,5,31,41,31,'L' if False else 'P')
rect(base,6,30,40,30,'P'); rect(base,5,35,41,38,'Q'); rect(base,5,39,41,39,'q')
rect(base,7,31,39,31,'T') if False else None
rect(base,9,31,12,32,'R'); rect(base,9,31,10,31,'Y'); rect(base,9,33,12,33,'r')   # kırmızı düğme
rect(base,16,30,23,31,'K'); rect(base,17,29,22,29,'k')                            # kol yuvası
base=outline(base)
# 2) Kol + top (sallanır)
stick=layer()
rect(stick,18,15,20,29,'K'); rect(stick,18,15,18,29,'k')
circle(stick,19.5,11,4.7,'B')
for (x,y) in [(16,9),(17,8),(16,10),(15,11),(16,13),(17,14),(18,15),(21,15),(22,14),(23,13),(23,12)]: pass
circle(stick,20.5,12,3.4,'B'); 
for y in range(H):
    for x in range(W):
        if stick[y][x]=='B' and (x+0.5-19.5)**2+(y+0.5-11)**2>3.4**2 and x>19 and y>11: stick[y][x]='b'
rect(stick,16,8,17,9,'W'); rect(stick,17,7,18,7,'W')
stick=outline(stick)
# 3) Mengene gövdesi (∩ biçimli C)
frame=layer()
rect(frame,6,2,34,6,'G'); rect(frame,6,2,34,2,'L'); rect(frame,7,6,33,6,'D')
rect(frame,6,2,10,24,'G'); rect(frame,6,2,6,24,'L'); rect(frame,10,7,10,24,'D')
rect(frame,30,2,34,24,'G'); rect(frame,30,7,30,24,'L'); rect(frame,34,2,34,24,'D')
rect(frame,11,18,17,22,'S'); rect(frame,11,22,17,22,'s')       # sol çene (kola değer)
frame=outline(frame)
# 4) Vida (sağdan sola sıkıştırır) — çeneye kadar
screw=layer()
rect(screw,21,18,24,22,'S'); rect(screw,21,22,24,22,'s')        # baskı pabucu
rect(screw,25,19,44,21,'T')
for x in range(25,44,2): rect(screw,x,19,x,21,'s')               # diş
rect(screw,44,12,46,28,'S'); rect(screw,46,12,46,28,'s')        # T kolu
rect(screw,43,11,47,12,'G'); rect(screw,43,28,47,29,'G')         # topuzlar
screw=outline(screw)
# vida gövdesinin içinden geçtiği yer: sağ bacak üstte kalsın diye ayrı "kol kapak" katmanı
cap=layer(); rect(cap,30,18,34,22,'G'); rect(cap,30,18,30,22,'L'); rect(cap,34,18,34,22,'D'); rect(cap,31,19,33,21,'s')
cap=outline(cap)

FONT={'C':[".###.","#...#","#....","#....","#....","#...#",".###."],
'L':["#....","#....","#....","#....","#....","#....","#####"],
'A':[".###.","#...#","#...#","#####","#...#","#...#","#...#"],
'M':["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],
'P':["####.","#...#","#...#","####.","#....","#....","#...."],
'G':[".###.","#...#","#....","#.###","#...#","#...#",".###."],
'E':["#####","#....","#....","####.","#....","#....","#####"],
'S':[".####","#....","#....",".###.","....#","....#","####."]}
def word(w):
    parts=[]
    for i,ch in enumerate(w):
        rows=FONT[ch]; rs=[]
        for y,row in enumerate(rows):
            for x,c in enumerate(row):
                if c=='#': rs.append(f'<rect x="{i*6+x}" y="{y}" width="1" height="1"/>')
        parts.append(f'<g class="pxL" style="animation-delay:{{D{i}}}s">{"".join(rs)}</g>')
    return parts
def wordsvg(w,cls,d0):
    parts=word(w)
    parts=[p.replace('{D%d}'%i, '%.2f'%(d0+i*0.07)) for i,p in enumerate(parts)]
    return f'<svg class="{cls}" viewBox="-1 -1 31 9" shape-rendering="crispEdges">'+''.join(parts)+'</svg>'

html=f'''<!-- ClampGames açılış logosu (piksel sanat, bkz. game/splash.js). Kendi
     logon gelirse sadece bu bloğun içi değişir. Üretici: art/logo/gen.py -->
<div id="splash" aria-hidden="true">
  <div class="splashInner">
    <svg class="splashIcon" viewBox="0 0 {W} {H}" shape-rendering="crispEdges">
      <g class="pxBase">{svg_rects(base)}</g>
      <g class="pxStick">{svg_rects(stick)}</g>
      <g class="pxScrew">{svg_rects(screw)}</g>
      <g class="pxFrame">{svg_rects(frame)}{svg_rects(cap)}</g>
      <g class="pxSpark"><rect x="16" y="16" width="1" height="1" fill="#fff6a8"/><rect x="14" y="14" width="1" height="1" fill="#fff6a8"/><rect x="24" y="15" width="1" height="1" fill="#fff6a8"/><rect x="26" y="13" width="1" height="1" fill="#fff6a8"/><rect x="15" y="24" width="1" height="1" fill="#fff6a8"/><rect x="25" y="25" width="1" height="1" fill="#fff6a8"/><rect x="19" y="23" width="1" height="1" fill="#ffffff"/><rect x="12" y="17" width="1" height="1" fill="#ffffff"/></g>
    </svg>
    {wordsvg("CLAMP","splashWordPx",1.35)}
    {wordsvg("GAMES","splashWordPx sub",1.75)}
  </div>
</div>
'''
open('splash_block.html','w').write(html)
print(len(html))
