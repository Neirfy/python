import mcr_serv,mcr,mcr_gui_test
from time import time
def auto_r():
    global s
    if s.auto_r:s.auto_r=False
    else:s.auto_r=True

def ex():
    global work,g,s
    s.sock_start
    work=False
    g.root.destroy()

def start():    
    global s
    s.sock_start()

def cc():
    global s
    if s.cc:s.cc=False
    else:s.cc=True
    
work=True
lgc=mcr.logic()
lgc.start()

s=mcr_serv.Server(lgc.logic,port=9009)
start()

g=mcr_gui_test.gui(ex,auto_r,start,cc)
if s.auto_r:g.c_refr.select()
if s.cc:g.c_cc.select()

while work:
    g.lbl['text']='Work: '+str(s.work)+'\t'+'L: '+str(int(100*s.load))+'%\t'+'U:'+str(s.u)+'Kb/s\tO:'+str(s.rps)
    if not s.log.empty():g.txt.insert(1.0, s.log.get())
    g.root.update_idletasks()
    g.root.update()
