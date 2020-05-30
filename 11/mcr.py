from db import obj
from time import time,sleep
from threading import Thread
from random import randrange as random
class logic():

    def __init__(self):
        self.key=['login','password','action','par']
        self.cmd=['view','change']
        self.objct=['user','tabel','func']
        self.act=['command','lob','tor','end','change','enter','null','join', 'shuffle', 'back', 'start','wipe','penalty']
        self.tts=10
        self.func={'tabcl':self.tabcl}
        self.u=obj('Users',{'table':'0','password':'123'})
        self.tour=obj('tour')
        self.tab=obj('Tables',{'1':'','0':'','log':'0|0|0|0|0','2':'','s0':'0','begin':'0','round':'0','s3':'0','s1':'0','3':'','s2':'0'})
        self.td=obj('timeloop')
        self.td.create('main')
        self.mmm={'loop':self.td,'user':self.u,'table':self.tab,'tour':self.tour}
    def tabcl(self,p):
        us=[]
        if p not in self.tab.data.keys():return 'Нет элемента'
        if self.tab.data[p]['begin']!='0':return 'Стол начат'
        for i in '0123':
            if self.tab.data[p][i]!='':us.append(self.tab.data[p][i])        
        self.tab.post(p,{'0':'','1':'','2':'','3':''})
        for i in us:self.u.post(i,{'table':'0'})
        return 'Выполнено'
    
    def com(self,c):
        if c=='': return '<br>'.join(self.mmm)
        if '.' not in c:c+='.'
        c=c.split('.')
        if '(' in c[1]:c[1]=c[1].split('(')
        else: c[1]=[c[1],'']
        if ')' in c[1][1]:c[1][1]=c[1][1].replace(')','')
        if c[1][0]=='': return '<br>'.join([i for i in self.mmm[c[0]].data.keys()])
        if c[1][0] not in self.mmm[c[0]].data.keys():
            self.mmm[c[0]].create(c[1][0],{i.split('=')[0]:i.split('=')[1] for i in c[1][1].split(',')})
            return 'Создан'
        if c[1][1]=='':return '<br>'.join([i+'='+self.mmm[c[0]].data[c[1][0]][i] for i in self.mmm[c[0]].data[c[1][0]].keys()])
        self.mmm[c[0]].post(c[1][0],{i.split('=')[0]:i.split('=')[1] for i in c[1][1].split(',')})
        return 
    def t_l(self):
        while True:
            self.tab.upd()
            self.u.upd()
            self.tour.upd()
            while len(self.td.data['main'].keys())==0:
                sleep(1)
                self.tab.upd()
                self.u.upd()
                self.tour.upd()
            a=list(self.td.data['main'].keys())
            a.sort()
            while int(time())<int(a[0]):sleep(1)
            d=self.td.data['main'][a[0]].split('^')
            for i in d:self.com(i)
            self.td.dlt('main',a[0])
            self.td.upd()
            
    def start(self):
        thr=Thread(target=self.t_l)
        thr.setDaemon(True)
        thr.start()
        
        
    def get_status(self,login):
        st=[]
        one=0
        t=self.u.data[login]['table']
        if t=='0':
            i=set()
            for l in [str(i) for i in range(1,100)]:
                for m in '0123':
                    if (self.tab.data[l][m]==''):
                        if(one==0):i.add(l)
                    else:
                        i.add(l)
                        break
                    one=1
            for k in i:
                if self.tab.data[k]['begin']=='0':st.append('st:'+k+'/'+self.tab.data[k]['0']+','+self.tab.data[k]['1']+','+self.tab.data[k]['2']+','+self.tab.data[k]['3'])
            return 'Status=lobby '+'#'.join(st)
        elif t=='-1':
            st='Status=tour '
            for i in self.tour.data.keys():
                if i=='Pattern':continue
                st+='numtour:'+i+','+','.join(j+':'+self.tour.data[i][j] for j in self.tour.data[i].keys())+'#'
            return st[:-1]
        elif t=='admin':return 'Status=5 command:'+self.u.data[login]['log']
        else:return 'Status='+self.tab.data[t]['begin']+' numtable:'+t+','+','.join([i+':'+self.tab.data[t][i] for i in self.tab.data[t].keys() if i not in ['begin','real_log']])
        
    def logic(self,post):
        s='Status=wrong'
        if '#' not in post:return(s)
        d={post.split('#')[i].split('=',1)[0]:post.split('#')[i].split('=',1)[1] for i in range(len(post.split('#')))} 
        for i in self.key:
            if i not in d.keys():return(s)
        if d['action'] not in self.act:return(s)
        if d['login'] not in self.u.data.keys():return(s)
        if self.u.data[d['login']]['password']!=d['password']:return(s)         
        t=self.u.data[d['login']]['table']

        if d['action']=='join':
            if d['par'] not in self.tab.data.keys(): return s
            for i in '0123':
                if (d['login'] not in [self.tab.data[d['par']][i] for i in '0123'])and('' in [self.tab.data[d['par']][i] for i in '0123']):
                    self.tab.post(d['par'],{str([self.tab.data[d['par']][i] for i in '0123'].index('')):d['login']})
                    self.u.post(d['login'],{'table':d['par']})
            self.td.add('main',{str(int(time()+self.tts)):'func.tabcl('+d['par']+')'})

        elif d['action']=='tor':self.u.post(d['login'],{'table':'-1'})
        elif d['action']=='lob':self.u.post(d['login'],{'table':'0'})
            
        elif d['action']=='back':            
            for i in '0123':
                if self.tab.data[t][i]==d['login']:
                    if i!='3':self.tab.post(t,{str(l):self.tab.data[t][str(l+1)] for l in range(int(i),3)})
                    self.tab.post(t,{'3':''})
            self.u.post(d['login'],{'table':'0'})

        elif d['action']=='change':
            par=[d['par'][0],d['par'][1]]
            if len(par)==2:self.tab.post(t,{par[1]:self.tab.data[t][par[0]],par[0]:self.tab.data[t][par[1]]})

        elif d['action']=='start':self.tab.post(t,{'begin':'1','log':'0|0|0|0|0|'})
        
        elif d['action']=='shuffle':
            s=[] 
            while len(s)!=4:
                i=str(random(4))
                if i not in s:s.append(i)
            self.tab.post(t,{s[int(i)]:self.tab.data[t][i] for i in '0123'})
                
        elif d['action']=='enter':
            par={i.split('=')[0]:i.split('=')[1] for i in d['par'].split(',')}
            if par['round']==self.tab.data[t]['round']:            
                if 's0' not in par:par.update({'s'+i:self.tab.data[t]['s'+i] for i in '0123'})
                real_log=par['round']+'|'+'|'.join(par['s'+i] for i in '0123')+'|'+par['co']    
                par.update({'log':self.tab.data[t]['log']+'!'+real_log})
                par['round']=str(int(par['round'])+1)
                if par['round']=='16':
                    par.update({'round':'15','begin':'-1'})
                    o=[4,2,1,0]
                    place={i:[] for i in '1234'}
                    score={i:0 for i in '1234'}
                    ss={i:int(par['s'+i]) for i in '0123'}
                    sss=sorted(list(set(ss.values())),reverse=True)
                    sd=1
                    for j in sss:
                        for k in '0123':
                            try:
                                if ss[k]==j:
                                    place[str(sd)].append(k)
                                    ss.pop(k)
                            except:pass
                        sd+=1
                    score={i:0 for i in place.keys() if place[i]!=[]}    
                    sd=0
                    for i in range(len(score.keys())):
                        for j in range(len(place[str(i+1)])):
                            score[str(i+1)]+=o[j+sd]
                        score[str(i+1)]=str(round(score[str(i+1)]/len(place[str(i+1)]),3))
                        sd+=len(place[str(i+1)])
                    for i in place.keys():
                        for j in place[i]:
                            par['s'+j]=i+'/'+par['s'+j]+'/'+score[i]
                self.tab.post(t,par)
            
            
        elif d['action']=='penalty':
            par={i.split('=')[0]:i.split('=')[1] for i in d['par'].split(',')}
            if par['round']==self.tab.data[t]['round']:
                if 's0' in par:real_log=par['round']+'|'+'|'.join(par['s'+i] for i in '0123')+'|-1'
            else:real_log='|'.join([self.tab.data[t]['round'],self.tab.data[t]['s0'],self.tab.data[t]['s1'],self.tab.data[t]['s2'],self.tab.data[t]['s3']]+'|-1')
            par.update({'log':self.tab.data[t]['log']+'!'+real_log})
            self.tab.post(t,par)
            
        elif d['action']=='end':
            for i in [self.tab.data[t][j] for j in '0123' if self.tab.data[t][j]!='']:self.u.data[i]['table']='0'
            self.tab.create(t)
            
        elif d['action']=='wipe':
            if '!' in self.tab.data[t]['log']:
                k_l=self.tab.data[t]['log'].split('!')
                r_l=k_l[-2]
                self.tab.post(t,{'log':'!'.join(k_l[:-1])})
                self.tab.post(t,{'begin':'1','round':k_l[-1].split('|')[0],'s0':r_l.split('|')[1],'s1':r_l.split('|')[2],'s2':r_l.split('|')[3],'s3':r_l.split('|')[4]})
            else:
                self.tab.post(t,{'begin':'0','round':'0','s0':'0','s1':'0','s2':'0','s3':'0'})
                self.td.add('main',{str(int(time()+self.tts)):'func.tabcl('+t+')'})
        elif d['action']=='command':
            print('122')
            if self.u.data[d['login']]['table']!='admin': return s
            self.u.data[d['login']]['log']=self.com(d['par'])
        return self.get_status(d['login'])
        
