import os
import codecs
import gzip

def cutter(s):
    if s[-1]=='\n':return s[:-1]
    return s

class html:    
    def __init__(self,name):
        b_=['ttf','mp3','wav','jpg','ico','png']
        self.path=os.getcwd()+chr(92)+name
        self.data={}
        if os.path.exists(self.path):
            for root, dirs, files in os.walk(self.path):
                if root==self.path:
                    for fl in files:
                        if fl.split('.')[1] in b_:
                            file = codecs.open(self.path+chr(92)+fl, 'rb')
                            dt = file.read()
                        else:
                            file = codecs.open(self.path+chr(92)+fl, encoding='utf-8')
                            dt = cutter(file.read()).encode()
                        dt=gzip.compress(dt)
                        file.close()    
                        self.data.update({fl:dt})        
                break
        else:os.makedirs(self.path)
