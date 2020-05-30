import socket,threading,multiprocessing,time,gzip
from bin_db import html
class Server():

    def __init__(self, func, port=9000,listen=1000,n_thr=100):
        self.work = False 
        self.tp={'ttf':'application/x-font-ttf','mp3':'audio/mpeg','wav':'vnd.wave','html':"text/html",'jpg':'image/jpeg','ico':'image/vnd.microsoft.icon','css':'text/css','js':'application/javascript','png':'image/jpeg'}        
        self.func=func
        self.n_thr=n_thr
        self.def_html='en.html'
        self.port=port
        self.listen=listen
        self.auto_r=True
        
    def sock_start(self):

        if self.work==True:
            self.work=False
            self.s.close()
            return None
        
        self.pages=html('html')
        self.t=[]
        self.u_mass=[0 for i in range(self.n_thr)]
        self.op=0
        self.u=0
        self.work=True
        self.q=multiprocessing.SimpleQueue()
        self.log=multiprocessing.SimpleQueue()
        self.s=socket.socket()
        self.s.bind(("", self.port))
        self.s.listen(self.listen)
        self.cc=False
        self.load=0
        self.rps=0
        
        for i in range(self.n_thr):    
            self.t.append(threading.Thread(target=self.my_thread))
            self.t[i].setDaemon(True)
            self.t[i].setName(i)
            self.t[i].start()
     
        self.thr=threading.Thread(target=self.connect)
        self.thr.setDaemon(True)
        self.thr.start()
        
        self.thr=threading.Thread(target=self.l_t)
        self.thr.setDaemon(True)
        self.thr.start()
        
    def l_t(self):
        while True:
            self.load=len([i for i in self.u_mass if i!=0])/self.n_thr
            self.u=round(sum(self.u_mass[i] for i in range(self.n_thr))/128,2)
            for i in range(self.n_thr):self.u_mass[i]=0
            self.rps=self.op
            self.op=0
            time.sleep(1)
            
    def my_thread(self):
        while self.work:
            while self.q.empty():pass
            conn, addr = self.q.get()
            self.op+=1
            num=int(threading.current_thread().getName())
            data = b""
            while not b"\r\n" in data:
                try:
                    tmp = conn.recv(1024)
                    if not tmp:break
                    else:data += tmp      
                except:break
            if not data: continue           
            self.u_mass[num]+=len(data)
            try: data=data.decode()
            except:data=' GET \r\n'    
            if ('\r\n' not in data)or(' ' not in data):
                self.op-=1
                continue
            data=data.split(' ',2)
            if data[0]=='GET':
                data=data[1][1:]
                if (data in ['','en','EN']) or (data not in self.pages.data)  :data=self.def_html
                elif data in ['RU','ru']:data='ru.html'     
                self.log.put(str(addr[0])+'\tGET:\t'+data+'\n')
                if (data.split('.')[1] in ['js','ttf','mp3','wav','jpg','png','css','ico','html'])and self.cc:cc='7200'
                else: cc='0'
                cc+='\r\nContent-Encoding: gzip'
                snd=[conn,self.pages.data[data], cc,self.tp[data.split('.')[1]]]
            elif data[0]=='POST':
                lng=data[2].split('Content-Length: ')[1].split('\r\n',1)[0]
                data=data[2].split('\r\n')[-1]
                if len(data.encode())==int(lng):
                    self.log.put(str(addr[0])+'\tPOST:\t'+data+'\n')
                    data=self.func(data)
                    self.log.put(str(addr[0])+'\tPOST:\t'+data+'\n')
                else:continue
                snd=[conn,data.encode(),'0','text/html']    
            try:self.u_mass[num]+=self.send_answer(snd)
            except:print('Error')
            finally:time.sleep(0.01)
    def connect(self):
        while self.work:
            if self.auto_r:self.pages=html('html')
            self.q.put(self.s.accept())
         
       
        
    def send_answer(self,d):
        str2=("HTTP/1.1 200 OK\r\nContent-Type: "+d[3]+"\r\nCache-Control:private, max-age="+d[2]+"\r\nContent-Length: "+str(len(d[1]))+"\r\nConnection: close\r\n\r\n").encode()
        d[0].send(str2+d[1])
        d[0].close()
        return len(str2+d[1])

