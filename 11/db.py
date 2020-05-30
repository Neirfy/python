import os
import codecs
import gzip

def st(p):
    s=''
    for i in p.keys():
        if isinstance(p[i],list):p[i]='~'.join(p[i])
        s+=i+':'+p[i]+'\n'
    return s

def cutter(s):
    if len(s)>0:
        if s[-1]=='\n':return s[:-1]
    return s

class obj:
    def __init__(self,name,p={}):
        self.name=name
        self.ch=0
        self.pattern=p
        self.data={}
        self.path=os.getcwd()+chr(92)+'db'
        dt={}
        fl=''
        if not os.path.exists(self.path): os.makedirs(self.path)
        if os.path.exists(self.path+chr(92)+name):
            with open(self.path+chr(92)+name,'rb') as file:m=file.read()
            m=gzip.decompress(m).decode().split('\n')
            for line in m:
                if ':' in line:
                    d=cutter(line.split(':')[1]).split('~')
                    if len(d)==1:d=d[0]
                    elif len(d)==0:d=''
                    dt.update({line.split(':')[0]:d})
                else:
                    if fl!='':self.data.update({fl:dt})
                    fl=cutter(line)
                    dt={}                        
                self.data.update({fl:dt})
        else:
            with open(self.path+chr(92)+name,'w+') as file:pass

    def create(self,name,p={}):
        dw=self.pattern.copy()
        dw.update(p)
        self.data.update({name:dw.copy()})
        self.ch=1
        return True
        
    def add(self,name,p):
        for i in p.keys():
            if i in self.data[name]:self.data[name][i]+='^'+p[i]
            else: self.data[name].update({i:p[i]})
        self.ch=1
        return True
        
    def upd(self):
        if self.ch==0: return False
        s=''
        for i in self.data.keys():s+=i+'\n'+st(self.data[i])
        if len(s)>0:
            if s[-1]=='\n':s=s[:-1]
        s=gzip.compress(s.encode())    
        with open(self.path+chr(92)+self.name,'wb') as file:file.write(s)
        self.ch=0
        
    def post(self,name,p):
        self.data[name].update(p)
        self.ch=1
        
    def dlt(self,name,key):
        self.data[name].pop(key)
        self.ch=1
        
    def delete(self,name):
        self.data.pop(name)
        self.ch=1
