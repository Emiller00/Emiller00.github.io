"""Generate the site's decorative mathematical illustrations. Standard library only."""
from pathlib import Path
from math import sin, cos, pi, exp

ROOT = Path(__file__).resolve().parents[1] / 'assets' / 'art'
ROOT.mkdir(parents=True, exist_ok=True)

def svg(name, contents, viewbox='0 0 600 600'):
    (ROOT / (name + '.svg')).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" fill="none">{contents}</svg>\n')

def path(points, color, opacity=1, width=.65):
    d = 'M' + ' L'.join(f'{x:.2f},{y:.2f}' for x,y in points)
    return f'<path d="{d}" stroke="{color}" stroke-opacity="{opacity:.3f}" stroke-width="{width}" stroke-linecap="round"/>'

def project(x,y,z):
    # A fixed orthographic view of a twisted torus.
    a,b = .95,-.53
    yy,zz = y*cos(a)-z*sin(a), y*sin(a)+z*cos(a)
    return (300+88*(x*cos(b)-yy*sin(b)), 290+88*(x*sin(b)+yy*cos(b)),zz)

def torus(u,v):
    r=.72+.13*sin(3*u)
    return project((1.72+r*cos(v))*cos(u), (1.72+r*cos(v))*sin(u), r*sin(v)+.3*sin(2*u))

curves=[]
for i in range(88):
    u=i*2*pi/88
    pts=[torus(u,j*2*pi/120) for j in range(121)]
    depth=sum(p[2] for p in pts)/len(pts)
    curves.append((depth,path([(p[0],p[1]) for p in pts], '#d0e9b3', .23+.47*(depth+2.5)/5)))
for j in range(28):
    v=j*2*pi/28
    pts=[torus(i*2*pi/200,v) for i in range(201)]
    depth=sum(p[2] for p in pts)/len(pts)
    curves.append((depth,path([(p[0],p[1]) for p in pts], '#bbd6a5', .34, .5)))
svg('manifold',''.join(p for _,p in sorted(curves)))

# A rolling surface: an abstract illustration, not experimental data.
def surface(x,y):
    z=exp(-((x-.4)**2+(y+.3)**2)*.9)*1.8-exp(-((x+1.1)**2+(y-.5)**2)*1.2)*.9
    return (300+75*(x-y*.72),180+37*(x+y)-80*z)
lines=[]
for i in range(35):
    x=-2.1+i*4.2/34
    lines.append(path([surface(x,-2.1+j*4.2/90) for j in range(91)],'#446553', .5,.8))
for i in range(35):
    y=-2.1+i*4.2/34
    lines.append(path([surface(-2.1+j*4.2/90,y) for j in range(91)],'#446553', .5,.8))
svg('landscape',''.join(lines),'0 0 600 360')

# Two low-rank planes in a shared geometric space.
lines=[]
for layer in range(3):
    for i in range(15):
        t=i/14
        for a in [0,1]:
            coords=[]
            for j in range(2):
                x,y=(t,j) if a==0 else (j,t)
                coords.append((150+220*x+90*y,155+95*y-55*x-layer*38))
            lines.append(path(coords,['#a27558','#b48a6c','#775947'][layer],.6,.8))
    if layer<2:
        for x,y in [(0,0),(1,1)]:
            lines.append(path([(150+220*x+90*y,155+95*y-55*x-layer*38),(150+220*x+90*y,155+95*y-55*x-(layer+1)*38)],'#a27558',.5,.7))
svg('subspace',''.join(lines),'0 0 600 300')

# A network of connected states for systems work.
pts=[(95,160),(220,85),(220,235),(355,65),(355,160),(355,255),(495,160)]
lines=[]
for a,b in [(0,1),(0,2),(1,3),(1,4),(2,4),(2,5),(3,6),(4,6),(5,6)]:
    x,y=pts[a];xx,yy=pts[b]
    lines.append(f'<path d="M{x},{y} C{(x+xx)/2},{y} {(x+xx)/2},{yy} {xx},{yy}" stroke="#758995" stroke-width="1"/>')
for i,(x,y) in enumerate(pts):
    lines.append(f'<circle cx="{x}" cy="{y}" r="22" fill="#e4e9e9" stroke="#758995"/><circle cx="{x}" cy="{y}" r="5" fill="#536d7c"/>')
svg('network',''.join(lines),'0 0 600 320')

lines=[]
for j in range(20):
    pts=[(i*3,155+45*sin(i*.045+j*.08)*exp(-((i-100)/85)**2)+(j-10)*5) for i in range(201)]
    lines.append(path(pts,'#557575', .55,.9))
svg('signal',''.join(lines),'0 0 600 320')
svg('mark','<path d="M16 2v28M2 16h28M6.1 6.1l19.8 19.8M6.1 25.9L25.9 6.1" stroke="#254d40" stroke-width="2"/><circle cx="16" cy="16" r="6" fill="#f6f5ef" stroke="#254d40" stroke-width="2"/>','0 0 32 32')
print('Generated 6 SVG illustrations.')
