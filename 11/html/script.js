var arrFanRuName={
"88":[	
		"Большие четыре ветра%0",
		"Большие три дракона%1",
		"Все зеленые%2",
		"Девять врат%3",
		"Четыре конга%4",
		"Семь смешанных пар%5",
		"Тринадцать сирот%6"],
"64":[
		"Все терминальные%7",
		"Малые четыре ветра%8",
		"Малые три дракона%9",
		"Все благородные%10",
		"Четыре закрытых панга%11",
		"Чистые терминальные чоу%12"],
"48":[
		"Четверное чоу%13",
		"Четыре чистых смещенных ветра%14"],
"32":[
		"Четыре чистых смещенных чоу%15",
		"Три конга%16",
		"Все терминальные и благородные%17"],
"24":[
		"Семь пар%18",
		"Большие благородные и переплетенные%19",
		"Все четыре панги%20",
		"Полное изобилие%21",
		"Чистое тройное чоу%22",
		"Четыре смещенные панги%23",
		"Верхние кости%24",
		"Средние кости%25",
		"Нижние кости%26"],

"16":[
		"Чистый ряд%27",
		"Три масти и терминальные чоу%28",
		"Чистые смещенные чоу%29",
		"Все пятерки%30",
		"Тройной панг%31",
		"Три закрытых панга%32"],

"12":[
		"Малые Благородные и переплетенные%33",
		"Переплетеннный ряд%34",
		"Четыре верхних%35",
		"Четыре нижних%36",
		"Большие три ветра%37"],

"8":[
		"Смешанный ряд%38",
		"Симметтричные коти%39",
		"Смешанное тройное чоу%40",
		"Смешанные смещенные панги%41",
		"Цыплячья рука%42",
		"Последняя кость со стены%43",
		"Последний снос%44",
		"Выигрыш замещающей костью%45",
		"Ограбление конга%46",
		"Два закрытых конга%47"],
"6":[
		"Все панги%48",
		"Пол-изобилия%49",
		"Смешанные смещенные чоу%50",
		"Все типы%51",
		"Открытая рука%52",
		"Два панга дракона%53"],
"4":[
		"Внешняя рука%54",
		"Полностью закрытая рука%55",
		"Два  открытых конга%56",
		"Последняя коость%57"],
"2":[
		"Панг драконов%58",
		"Преимущественный ветер%59",
		"Ветер места%60",
		"Закрытая рука%61",
		"Все чоу%62",
		"Четыре врозь%63",
		"Двойноой панг%64",
		"Два ззакрытых панга%65",
		"Закрытый конг%66",
		"Вссе простые%67"],

"1":[
		"Чистое двойное чоу%68",
		"Смешанное двойное чоу%69",
		"Короткий ряд%70",
		"Два терминальных чоу%71",
		"Панг терминальных или благородных%72",
		"Открытый конг%73",
		"Пропущенная масть%74",
		"Без благородных%75",
		"Кпайнее ожидание%76",
		"Закрытое ожидание%77",
		"Ожидание единственной%78",
		"Выигрыш со стены%79",
		"Цветок%80"]
}
var winds=['東','南','西','北'];
var llog="";
var whereIAm ="";
var pressedButton=-1;
var createEl = function(elt,sty,nid,typ){
	let el=document.createElement(elt);
	el.setAttribute('id',nid);
	el.setAttribute('class',sty);
	el.setAttribute('type',typ);
	return el;
}

function logMe (){
	let fl = new createEl('fieldset','fix-bar');
	document.body.appendChild(fl);
	let log = new createEl('input','in-bar log','youLogin','text');
	addEventListener ("click",function (){
		//log.setAttribute('onfocus','blur()')
		//keyboardCust();
	})
	fl.appendChild(log);
	let pas = new createEl('input','in-bar pass','youPassword','text');
	fl.appendChild(pas);
	let logI = new createEl('input','login','logInM','button');
	logI.value='Войти';
	logI.addEventListener ("click",function (){
		login();
	})
	let lng=new createEl('div','lng-bar');
	let en=new createEl('a','lng');
	en.setAttribute('href','ru.html');
	en.innerText='🇷🇺';
	let ru=new createEl('a','lng');
	ru.setAttribute('href','en.html');
	ru.innerText='🇺🇸';
	document.body.appendChild(lng);
	lng.appendChild(en);
	lng.appendChild(ru);
	let w0=new createEl('div','sign');
	let w1= new createEl('span','fast-flicker');
	let w2= new createEl('span','fli');
	let w3= new createEl('span','flicker');
	let w4= new createEl('span','fli');
	let w5= new createEl('span','fast-flicker');
	let w6= new createEl('span','fli');
	w1.innerText='w';
	w2.innerText='el';
	w3.innerText='l';
	w4.innerText='co';
	w5.innerText='m';
	w6.innerText='e';
	document.body.appendChild(w0);
	w0.appendChild(w1);
	w0.appendChild(w2);
	w0.appendChild(w3);
	w0.appendChild(w4);
	w0.appendChild(w5);
	w0.appendChild(w6);
	fl.appendChild(logI);
}

function unlog (){
	let fl = new createEl('fieldset','fix-bar');
	document.body.appendChild(fl);
	let log = new createEl('input','in-bar log','youLogin','text');
	log.setAttribute('readonly','readonly');
	log.value=localStorage.myLogin;
	fl.appendChild(log);
	let logO = new createEl('input','login','logOutM','button');
	logO.value='Выйти';
	logO.addEventListener ("click",function (){
		if (localStorage.myLogin!=""){
			localStorage.myLogin="";}
		if (localStorage.myPassword!=""){
		localStorage.myPassword="";}
		document.body.innerHTML="";
		logMe();
	})
	fl.appendChild(logO);
}


let startCoord;
window.addEventListener("touchstart",function(event){
	startCoord=event.changedTouches[0];},false);
window.addEventListener("touchend",function(event){
	let endCoord=event.changedTouches[0];
	let diffY=Math.abs(startCoord.pageY - endCoord.pageY);
	let diffX=Math.abs(startCoord.pageX - endCoord.pageX);
	if ((diffX>10||diffY>10)&&(pressedButton===-1)){
		if(diffX>diffY){
			if (endCoord.pageX<startCoord.pageX){
				if (whereIAm==="sTb" || whereIAm==="eTb"){
					fullStat();}
				else if (whereIAm==="lob"){
					tournaments(aJaX('tor','null'));}
			
			}
			else{
				if (whereIAm==="sTb"){
					closeFullStat();}
					else if (whereIAm==="eTb"){
					endetable();}
					else if (whereIAm==="tor"){
					lobbyTable(aJaX('lob','null'));}
				
					}
			}
		}
		else{
			if (endCoord.pageY<startCoord.pageY){
				
				if (whereIAm==="sTb"){
					//closeFullStat();	
			}
			else{}
				//event.preventDefault();}
			//window.location.reload(false);}
		}
	}
})

window.onload=function (){
	if (localStorage.myLogin!="" && localStorage.myPassword!=""){
		aJaX('null','null')
	}
	else{
		logMe();}
//setInterval(function () {
  //aJaX("null","null");
//}, 5000);
//let w=screen.width;
//let h=screen.height;
}

function login(){
	lg=document.getElementById('youLogin');
	pw=document.getElementById('youPassword');
	if (lg.value==""&&pw.value==""){
		alert("Наверное нужно что то ввести?)");}
	else if (lg.value.length<5&&pw.value.length<5){
		alert("Маловато будет");
		lg.value="";
		pw.value="";}
	else if ((lg.value.match(/[^a-zA-Z0-9]/g))&&(pw.value.match(/[^a-zA-Z0-9]/g))){
		lg.value="";
		pw.value="";
		alert("А не запрещенный символок ли тут?");}
	else{localStorage.setItem('myLogin',lg.value);
		localStorage.setItem('myPassword',pw.value);}
	aJaX('null','null')
}

function aJaX(act, par){
let data="login="+localStorage.myLogin+"#"+"password="+localStorage.myPassword+"#action="+act+"#par="+par;
let myurl = window.location.pathname;
let reqvData;
xhr=new XMLHttpRequest();
xhr.onreadystatechange = function(){
if (this.readyState==4 && this.status==200){
	do{reqvData=xhr.responseText;} 
		while(xhr=="");
		let reqvStat=reqvData.split(" ")[0].split("=")[1];
	if (reqvStat=="wrong"){
		whereIAm="";
		alert("Ой. что то пошло не так");}
	else if (reqvStat==="lobby"){
		whereIAm="lob";
		lobbyTable(reqvData);}
	else if (reqvStat==="tour"){
		whereIAm="tor";
		tournaments(reqvData);}
	else if (reqvStat==="0"){		
		whereIAm="uTb";
		prepareTable(reqvData);
		}
	else if (reqvStat==="1"){
		whereIAm="sTb";
		startedTable(reqvData);}
	else if (reqvStat==="-1"){
		whereIAm="eTb";
		replacePlayer(reqvData);
		endetable();}
	else if (reqvStat==="5"){
		whereIAm="od";
		shower(reqvData);
		oda();}
	}
}
xhr.open("post", myurl, true);
xhr.send(data);
}

function lobbyTable(respString){
	whereIAm="lob"
	document.body.innerHTML="";
	unlog();
	let hea=new createEl('header','','tableStatus');
	document.body.append(hea);
	let entable=new createEl('div','lobby');
	entable.innerText="Доступные столы:";
	hea.appendChild(entable);
	let resp=respString.split(' ')[1];
	let allt=new createEl('div','listTables');
	document.body.appendChild(allt);
	for (let i=0;i<resp.split('#').length;i++){	
		let tableFld =new createEl('fieldset','tableField')
		tableFld.addEventListener ("click",function (){
			aJaX('join',resp.split('#')[i].split('/')[0].split(':')[1])
		})
		allt.appendChild(tableFld);
		let divTable=document.createElement('div');
		divTable.innerText="Стол № "+resp.split('#')[i].split('/')[0].split(':')[1];
		tableFld.appendChild(divTable);	
		for (let j=0;j<(resp.split('#')[i].split('/')[1].split(',')).length;j++){
			let divPlayer=new createEl('div','lobbyPlayer'+j);
			divPlayer.innerText=resp.split('#')[i].split('/')[1].split(',')[j];
			tableFld.appendChild(divPlayer);
		}
	}
}

let arrTour=new Map();
function tournaments(respString){
	whereIAm="tor";
	document.body.innerHTML="";
	unlog();
	let hea=new createEl('header','','tableStatus');
	document.body.append(hea);
	let entour=new createEl('div','lobby');
	entour.innerText="Доступные турниры:";
	hea.appendChild(entour);
	let allt=new createEl('div','listTables');
	document.body.appendChild(allt);
	let resp=respString.slice(respString.indexOf(' '),respString.length);
	for (let i=0;i<resp.split('#').length;i++){
		let arr=[]
		for (let j=0;j<resp.split('#')[i].split(',').length;j++){
			if (!isNaN(resp.split('#')[i].split(',')[j].split(':')[0])){
				arr.push(resp.split('#')[i].split(',')[j].split(':')[1])
				arrTour.set(('players'+i), arr);
			}
			else{
			arrTour.set((resp.split('#')[i].split(',')[j].split(':')[0]+i), resp.split('#')[i].split(',')[j].split(':')[1]);
			}
		}
	}
	for (let i=0;i<resp.split('#').length;i++){
		const dt=new Date(arrTour.get('time'+i)*1000);
		da=('0'+dt.getDate()).slice(-2)+'.'+('0'+(dt.getMonth()+1)).slice(-2)+'.'+dt.getFullYear()+
		' в '+('0'+dt.getHours()).slice(-2)+':'+('0'+dt.getMinutes()).slice(-2);
		let tourFld = new createEl('fieldset','tourField');
		tourFld.addEventListener ("click",function (){
			showTour(i)
		})
		allt.append(tourFld);
		let divTimeHead=new createEl('div','tourTableHead');
		divTimeHead.innerHTML=arrTour.get('desc'+i)+" начало "+da;
		tourFld.append(divTimeHead);
		let divSity=new createEl('div','tourSity');
		divSity.innerText="Город проведения: "+arrTour.get('city'+i)
		tourFld.append(divSity);
		let divReg=new createEl('div','tourRe');
		if	(typeof(arrTour.get('players'+i))!="undefined"){
			if (arrTour.get('players'+i).includes(localStorage.youLogin)){
				divReg.innerText="Вы зарегестрированны";}
			}
		else {divReg.innerText="Вы не зарегестрированны";
		}
		tourFld.append(divReg);		
	}
}

function showTour(nt){
	if	(typeof(arrTour.get('players'+nt))!="undefined"){
		if (arrTour.get('players'+nt).indexOf(localStorage.getItem('myLogin'))==-1){
		}
	}
	else {}
	tournFull.innerHTML="";
	let tourFldFull=document.createElement('fieldset');
	tourFldFull.setAttribute('class','tourFieldFull');
	tourFldFull.setAttribute('onclick', '');
	tournFull.append(tourFldFull);
	let divPl=document.createElement('div');
		divPl.setAttribute('class','tourTableHeadF');
		divPl.innerHTML="Списсок участников:"
		tourFldFull.append(divPl);
	for (let i=0;i<arrTour.get('players'+nt).length;i++){
		let divPl=document.createElement('div');
		divPl.setAttribute('class','tourTableHeadF');
		divPl.innerHTML=arrTour.get('players'+nt)[i]
	tourFldFull.append(divPl);
	}
}

function playersPlaces(arr){
	let diff;
	for (let i=0;i<4;i++){
		if (arr.get(i.toString())==localStorage.myLogin){
			diff=i;
		}
	}
	let count=-1;
	let tmName=[];
	for (let i=0;i<4;i++){
		tmName[i]='n';
	}
	for (let i=0;i<4;i++){
		llog+="|"+arr.get(i.toString())
		let y=i-diff;
		if (y<0){
			y+=4}
		let tmPl=new createEl('fieldset','player n Set'+y,'ps'+y);
		tmPl.addEventListener("click",function (){
			
			if (tmName[i]=='n' && count==-1){
				tmName[i]='w';
				tmPl.classList.replace('n','w');
				count++;
			}
			else if (tmName[i]=='w' && count==0){
				tmName[i]='n';
				tmPl.classList.replace('w','n');
				count--;
			}
			else if (tmName[i]=='n'){
				if (count==0){
					tmName[i]='l';
					tmPl.classList.replace('n','l');
					count++;
				}
				else if (count==1){
					for (let  j=0;j<4;j++){
						document.getElementById('ps'+j).classList.replace('n','l');
						if (tmName[j]=='n'){
							tmName[j]='l';
							count++;
						}
					}
				}
			}
			else if (tmName[i]=='l'){
				if(count==3){
					for (let  j=0;j<4;j++){
						document.getElementById('ps'+j).classList.replace('l','n');
						if (tmName[j]=='l'){
							tmName[j]='n';
							count--;
						}
					}
				}	
				else if (tmName[i]=='l' && count==1){
					tmName[i]=='n';
					tmPl.classList.replace('l','n');
					count--;
				}
			}
		})
		document.body.appendChild(tmPl);
		let tmW=new createEl('div','playerWind'+i);
		tmW.innerText=winds[i];
		tmPl.appendChild(tmW);
		let tmN=new createEl('div','playerName'+i);
		tmN.innerText=arr.get(i.toString());
		tmPl.appendChild(tmN);
		let tmS=new createEl('div','playerScore'+i);
		tmS.innerText=arr.get('s'+i.toString());
		tmPl.appendChild(tmS);
	}
}

function startedTable(respString){
	pressedButton=-1;
	let resp=respString.split(' ')[1];
	let arr=new Map();
	for (let i=0;i<resp.split(',').length;i++){
		arr.set(resp.split(',')[i].split(':')[0],resp.split(',')[i].split(':')[1]);
	}
	let nroun=Number(arr.get('round'));
	document.body.innerHTML="";
	unlog();
	let refr=new createEl('input','butters refresh','','button');
	refr.value="Обновить";
	refr.addEventListener ("click",function (){
		if(pressedButton===-1){
			aJaX("null","null")}
		else if (whereIAm=="uTb"){
			zero();
			aJaX("null","null")}
	})
	document.body.appendChild(refr);
	let none=new createEl('input','butters shuf-enter','noneG','button');
	none.value="Ничья";
	none.addEventListener ("click",function (){
		aJaX('null','null');
		aJaX('enter','round='+nroun.toString());
	})
	document.body.appendChild(none);
	let send=new createEl('input','butters start-send','','button');
	send.value="Внести";
	send.addEventListener ("click",function (){
		result();
	})
	document.body.appendChild(send);
	let pena=new createEl('input','butters back-lobby','','button');
	pena.value="Штраф";
	pena.addEventListener ("click",function (){
		total();
	})
	document.body.appendChild(pena);
	let log=new createEl('div','showlog');
	document.body.appendChild(log);
	let logfl=new createEl('fieldset','truelog');
	log.appendChild(logfl);
	let back=new createEl('input','back-stat','','button');
	back.value="Вернуть";
	back.addEventListener ("click",function (){
		let dataW="round="+nroun;
		aJaX('wipe',dataW);
	})
	document.body.appendChild(back);
	llog='Round';
	playersPlaces(arr);
	
	if(arr.get('log')!="0|0|0|0|0"){
		llog+="!"+arr.get('log')}
	let ress=llog.split("!")
	let beforeround=new createEl('div','minilogP');
	let ww=ress[ress.length-1].split("|")[0];
	beforeround.innerText="Предыдущий раунд: "+winds[Math.trunc(ww/4)]+" "+(ww%4+1);
	logfl.appendChild(beforeround);
	if(llog.indexOf("!")==-1){
		document.getElementById('showLog').innerHTML="Нихт. найн. НИЧЕГО"}
	else{
		for(let i=1;i<5;i++){
			let divLy=document.createElement('div');
			divLy.setAttribute('class','minilogP');
			if(ress.length>2){
				divLy.innerHTML=ress[0].split("|")[i]+": "+ress[ress.length-2].split("|")[i];}
			else{divLy.innerHTML=ress[0].split("|")[i]+": "+0;
			logfl.appendChild(divLy);}
		}
	}
}

function result (){
	pressedButton+=2;
	if (pressedButton==1){
		let inp = new createEl('input','inpresult','indata','number');
		inp.setAttribute('placeholder','Вноси');
		//if (document.getElementById("noneG")){
		document.getElementById("noneG").remove();
			//}
		document.body.appendChild(inp);
		}
	if (pressedButton==3){
		let stat=[];
		for (let i=0;i<4;i++){
			stat[i]=document.getElementById('ps'+i).classList[1];
		}
		let inp=document.getElementById('indata');
		if (inp.value!="" && inp.value>7 && inp.value<999){

///////////////////////////////////////////////////////////			
			input(inp.value,stat);
		}
		else if (inp.value!="" && inp.value<8){
			inp.value="";
			pressedButton=1;
			alert("Маловато будет, маловато!");}
		else if (inp.value>999 && inp.value!=""){
			inp.value="";
			pressedButton=1;
			alert("Многа");}
		else{
			document.getElementById("indata").remove();
			pressedButton=-1;
			let none=new createEl('input','butters shuf-enter','noneG','button');
	none.value="Ничья";
	none.addEventListener ("click",function (){
		aJaX('null','null');
		aJaX('enter','round='+nroun.toString());
	})
	document.body.appendChild(none);
		}
	}
}

function summ(scoreF,nowStat){
	let dataS="";
	let nowScore=[];
	for (let i=0;i<4;i++){
		nowScore[i]=0;
	}
	let j=0;
	let k=0;
	for (let i=0;i<4;i++){
		if (nowStat[i]=="l"){
			j+=1;}
		if (nowStat[i]=="w"){
			k+=1;}
		}
	if(k==1&&(j==1||j==3)){
		for (let i=0;i<4;i++){
			if (nowStat[i]=='w'){
				nowScore[i]+=Number(24+scoreF*j);}
			else{
				nowScore[i]-=Number(8+scoreF*nowStat[i]/2);}
			dataS+="s"+i+"="+nowScore[i]+",";
		}
		dataS+="round="+1+",co="+dataS;
	}
	else{
		alert('Неверно введено количество победителей/проигравших')
		dataS='';
	}
	return dataS;
}


/*
document.getElementById("penalG").addEventListener ("click",function (){
	if (f.classList[1]=="hide"){
		f.classList.replace("hide","show");
		document.getElementById('noneG').classList.replace("show","hide");
		pressedButton=2;}
	else {document.getElementById('noneG').classList.replace("hide","show");
		f.classList.replace("show","hide");
		if (f.value!=""){
			aJaX('null','null');
			let aa=total()
			f.classList.replace("show","hide");
			document.getElementById('noneG').classList.replace("hide","show");
			if (aa!=''){aJaX('penalty',aa);}
			f.value="";}
		pressedButton=-1;
		zero();
		}
	
})
*/

function total(){
	let inp = new createEl('input','inpresult','indata','number');
	inp.setAttribute('placeholder','Вноси');
	document.getElementById("noneG").remove();
	document.body.appendChild(inp);
	let dataS="";
	let nowStat=[];
	let nowScore=[];
	let score=Number(document.getElementById('indata').value);
	let j=0;
	let k=0;
	for (let i=0;i<4;i++){
		nowStat[i]=document.getElementById('stat'+i).value;
		nowScore[i]=Number(document.getElementById('playerStatusScore'+i).value);
		if (nowStat[i]==2){
			k+=1;}
		}
	if(k==1){
		if ((Number(score)==30)||(Number(score)==60)){
			j=3;}	
		for (let i=0;i<4;i++){
			if (nowStat[i]==2){nowScore[i]-=Number(score);}
			else {nowScore[i]+=Number(score/9*j);}
			dataS+="s"+i+"="+nowScore[i]+",";
		}
		zero()
		dataS+="round="+document.getElementById('round').value}
	else{alert('Кого штррафуем то?')
	dataS='';}
	return dataS;	
}




function inputV(vl,x,y){
	document.body.innerHTML="";
	input();
	let fan=new createEl('div','inpRes');
	document.body.appendChild(fan);
	let ruNm=arrFanRuName[vl];
	for(let j=0; j<ruNm.length;j++){
		let inpFan=new createEl('input','fan','','button');
		inpFan.setAttribute('value',ruNm[j].split("%")[0]);
		inpFan.addEventListener ("click", function(){
			inputTmp(ruNm[j],vl);
		})
		fan.appendChild(inpFan);
	}
	let res=new createEl('inp','sc','','button');
	res.value='Отправить';
	res.addEventListener ("click", function(){
		aJaX('enter',summ(x,y));
	})
	document.body.appendChild(res);
	let resres=new createEl('inp','cs','','button');
	resres.value='Отправить';
	resres.addEventListener ("click", function(){
		//startedTable();
		aJaX('null','null')
	})
	document.body.appendChild(resres);
}

function inputTmp(t,v){
	let tmpArr=[];
	let dataFan=[];
	let tmpIn=t.split("%")[0];
	let dataOut=t.split("%")[1];
	let tr=0;
	for (let j=0; j<tmpArr.length;j++){
		if (tmpIn==tmpArr[j]){
			tr=-1;
			tmpArr.splice(j,1);}
	}
	if (tr!=-1 && tmpArr.length<1){
		tmpArr.push(tmpIn);
		dataFan.push(dataOut);}
	
	document.getElementById('in').innerText=tmpArr.join(" ");
	
}
function input(x,y){
	document.body.innerHTML="";
	unlog();
	let fanstat=new createEl('div','inpStatAss','in');
	document.body.appendChild(fanstat);
	let divS=new createEl('div','inpResGroup');
	document.body.appendChild(divS);
	let a=Object.keys(arrFanRuName);
	for (let i=0; i<a.length;i++){
		let inpGroup=new createEl('input','fangr','','button');
		inpGroup.value=a[i];
		inpGroup.addEventListener ("click", function(){
			inputV(a[i],x,y)
		})
		divS.appendChild(inpGroup);
	}
}
/*
document.getElementById("fullScore").addEventListener ("click", function(){
	if(tmpArr.length!=0){
		aJaX('enter',summ());
		f.value="";
		zero();
		startedtable();
		fanstat.innerHTML="";
		tmpArr.length=0;
		dataFan.length=0;
		pressedButton=-1;}
	else{alert ("Не выббран основной фан")}
})
*/
function prepareTable(reqv){
	document.body.innerHTML='';
	let arr=new Map();
	for (let i=0;i<reqv.split(',').length;i++){
		arr.set(reqv.split(',')[i].split(':')[0],reqv.split(',')[i].split(':')[1]);
	}
	unlog();
	let diff;
	for (let i=0;i<4;i++){
		if (arr.get(i.toString())===localStorage.myLogin){
			diff=i;
		}
	}
	let count=0;
	let dat='';
	for (let i=0;i<4;i++){
		let tmName=[];
		tmName[i]='n';
		let y=i-diff;
		if (y<0){
			y+=4}
			
		let tmPl=new createEl('fieldset','player n Set'+y,'ps'+y);
		tmPl.addEventListener("click",function (){
			if (tmName[i]=='n' && count==0){
				tmName[i]='w';
				tmPl.classList.replace('n','w');
				count++;
				dat=i
			}
			else if (tmName[i]!='w' && count==1){
				aJaX('change',i.toString()+dat.toString());
				count=0;
				dat='';
			}
			else{
				tmName[i]='n';
				tmPl.classList.replace('w','n');
				count--;
			}
		})
		document.body.appendChild(tmPl);
		let tmW=new createEl('div','playerWind'+i);
		tmW.innerText=winds[i];
		tmPl.appendChild(tmW);
		let tmN=new createEl('div','playerName'+i);
		tmN.innerText=arr.get(i.toString());
		tmPl.appendChild(tmN);
	}
	let refr=new createEl('input','butters refresh','','button');
	refr.value="Обновить";
	refr.addEventListener ("click",function (){
		if(pressedButton===-1){
			aJaX("null","null")}
		else if (whereIAm=="uTb"){
			zero();
			aJaX("null","null")}
	})
	document.body.appendChild(refr);
	let start=new createEl('input','butters start-send','','button');
	start.value="Начать";
	start.addEventListener ("click",function (){
		if(pressedButton===-1){
			aJaX("start","null")}
	})
	document.body.appendChild(start);
	let shfl=new createEl('input','butters shuf-enter','','button');
	shfl.value="Перемешать";
	shfl.addEventListener ("click",function (){
		aJaX('shuffle','null');
	})
	document.body.appendChild(shfl);
	let tolob=new createEl('input','butters back-lobby','','button');
	tolob.value="К столам";
	tolob.addEventListener ("click",function (){
		aJaX('back','null');
	})
	document.body.appendChild(tolob);
}

let fullStat = function (){
	if(pressedButton===-1){
		//document.getElementById("logpage").className="flog show";
	//	document.getElementById("log").classList.replace("show","hide");
		//document.getElementById("backG").classList.replace("show","hide");
	//for(let i=0; i<4;i++){document.getElementById('playerPlace'+i).classList.replace("show","hide");}
	getStat();

}}
/*
document.getElementById("log").addEventListener ("click",function (){
	if(pressedButton===-1){
		document.getElementById("logpage").className="flog show";
		document.getElementById("log").classList.replace("show","hide");
		document.getElementById("backG").classList.replace("show","hide");
	for(let i=0; i<4;i++){document.getElementById('playerPlace'+i).classList.replace("show","hide");}
	getStat();
	}
})
*/

function getStat(){
	document.body.innerHTML='';
	let res=llog.split('!');
	for(let i=1;i<res.length;i++){
		let re=res[i].split('|');
		re[0]=winds[Math.trunc(re[0]/4)]+" "+(re[0]%4+1);
		res[i]=re.join("|");
	}
	for(let i=0;i<5;i++){
		let divR=document.createElement('div');
		divR.setAttribute('class','stolb');
		divR.innerHTML=res[0].split("|")[i];
		document.getElementById('fullLog').appendChild(divR);
		for(let j=2;j<res.length;j++){
			let divD=document.createElement('div');
			divD.setAttribute('class','strok');
			divD.innerHTML=res[j].split('|')[i];
			divR.appendChild(divD);}
		}		
}

closeFullStat = function (){
	document.getElementById("logpage").classList.replace("show","hide");
	startedtable();
}

document.getElementById("endG").addEventListener ("click",function (){
	aJaX('end','null')
})

function shower(respData){
	let resp=respData.slice(respData.indexOf(' '),respData.length);
	document.body.innerHTML="";
	
	unlog();
		
	let inText = new createEl('input','xxx','dat')
	document.body.appendChild(inText);
	
	let inBut = new createEl('input','xxx','')
	inBut.setAttribute('type','button')
	inBut.setAttribute('value','button')
	inBut.addEventListener ("click",function (){
	//Включить для очистки поля ввода админки
		aJaX('command',document.getElementById('dat').value);
		inText.value='';
	})
	document.body.appendChild(inBut);
	
	let tableFld=new createEl('fieldset','odafld');
	document.body.appendChild(tableFld);
	
	let divTable = new createEl('div','odaDiv');
	divTable.innerHTML=resp.split(' ')[1].split(':')[1]
	tableFld.append(divTable);
}



//window.alert = 
function myAlert(inp) {
    //document.body.innerHTML="";
    let mObj =new createEl('div','aler','newAl');
	document.body.appendChild(mObj);
    alertObj = new createEl('div','altAlert');
    alertObj.style.visiblity="visible";
	mObj.appendChild(alertObj);

    let h1 =new createEl('h1');
    h1.innerText="Смотрим, прицениваемся";
	alertObj.appendChild(h1);

    msg = document.createElement('p');
    //msg.appendChild(document.createTextNode(inp));
    msg.innerText = inp;
	alertObj.appendChild(msg)

    btn = new createEl('a','closeBtn');
    btn.innerText="Ну, ладно...";
    btn.focus();
    btn.addEventListener ("click",function (){
		document.body.removeChild(document.getElementById("newAl"));
		//aJaX('null','null')
	})
	alertObj.appendChild(btn);
}
function keyboardCust(){
	const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
            "caps", "z", "x", "c", "v", "b", "n", "m", "backspace" ,
            "space", "enter"
        ];
	let main=new createEl('div','keyboard')
	document.body.appendChild(main);
	for (let i=0;i<keyLayout.length;i++){
		let key=new createEl('button','keyboard__key');
		key.innerText=keyLayout[i];
		main.appendChild(key);
	}
}
/*
const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "a", "s", "d", "f", "g", "h", "j", "k", "l",
            "caps", "z", "x", "c", "v", "b", "n", "m", "backspace" ,
            "space", "enter"
        ];


        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = "⌫"

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
						navigator.vibrate(30);
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = "⇪";

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
						navigator.vibrate(30);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = "⎆";

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
						navigator.vibrate(30);
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML ="spacebar";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
						navigator.vibrate(30);
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
						navigator.vibrate(30);
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
				
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});


const KeyboardNum = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    initNum() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboardNum", "keyboard--hiddenN");
        this.elements.keysContainer.classList.add("keyboard__keysN");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__keyN");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboardNum-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9",
			"back","0","enter"
        ];
		keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__keyN");

            switch (key) {
                case "back":
                    //keyElement.classList.add("keyboard__keyN");
                    keyElement.innerHTML = "⌫"
                    keyElement.addEventListener("click", () => {
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
						navigator.vibrate(30);
                    });

                    break;
					
                case "enter":
                   // keyElement.classList.add("keyboard__keyN");
                    keyElement.innerHTML = "⎆";
                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
						navigator.vibrate(30);
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
					
                    keyElement.addEventListener("click", () => {
                        navigator.vibrate(30);
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },


    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hiddenN");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hiddenN");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    KeyboardNum.initNum();
});

window.addEventListener("click",function (){
	//KeyboardNum.close();
})
*/