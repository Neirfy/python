from tkinter import Tk,Button,Text,Label,Checkbutton

class gui():
    def __init__(self,ex,auto_refr,start,cc):
        self.on_top=False
        self.resize=True
        self.root = Tk()
        self.root.geometry('490x175')
        self.root.title('ПЯТЬ')
        self.root.protocol('WM_DELETE_WINDOW', ex)
        self.root.lift()
        self.root.attributes('-alpha',0.75)
        self.root.configure(bg='black')
        
        self.lbl = Label(self.root)
        self.lbl.place(x=2,y=2)
        self.lbl.configure(fg='lightgreen',bg='black',relief='flat')

        self.txt = Text(self.root,fg='lightgreen',bg='black',relief='groove',font=("Arial", 7), width=98, height=10)
        self.txt.place(x=2,y=22)

        self.b_start = Button(self.root,activebackground='black',activeforeground='lightgreen',fg='lightgreen',bg='black',relief='flat', text="Work", width=8,command=start)
        self.b_start.place(x=0,y=148)

        self.b_quit = Button(self.root,activebackground='black',activeforeground='lightgreen',fg='lightgreen',bg='black',relief='flat', text="Exit", width=8,command=ex)
        self.b_quit.place(x=65,y=148)

        self.c_refr = Checkbutton(self.root,activebackground='black',activeforeground='lightgreen',selectcolor='black',fg='lightgreen',bg='black',relief='flat', text='Refresh HTML',command=auto_refr)
        self.c_refr.place(x=130,y=148)

        self.c_top = Checkbutton(self.root,activebackground='black',activeforeground='lightgreen',selectcolor='black',fg='lightgreen',bg='black',relief='flat', text='Ontop',command=self.ontop)
        self.c_top.place(x=420,y=148)

        self.c_cc = Checkbutton(self.root,activebackground='black',activeforeground='lightgreen',selectcolor='black',fg='lightgreen',bg='black',relief='flat', text='Cache',command=cc)
        self.c_cc.place(x=240,y=148)
 
        self.c_rs = Checkbutton(self.root,activebackground='black',activeforeground='lightgreen',selectcolor='black',fg='lightgreen',bg='black',relief='flat', text='Not Resizable',command=self.rsz)
        self.c_rs.place(x=310,y=148)
        
    def rsz(self):
        if self.resize==False:
            self.resize=True
            self.root.overrideredirect(0)
        else:
            self.resize=False
            self.root.overrideredirect(1)

    def ontop(self):
        if self.on_top==False:
            self.on_top=True
            self.root.attributes('-topmost', True)
        else:
            self.on_top=False
            self.root.attributes('-topmost', False)
