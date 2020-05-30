let arrFanRuName={
"88":[	
		"Большие четыре ветра%0",
		"Большие три дракона%1",
		"Все зеленые&2",
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
var f=document.getElementById('inp');

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

window.onload=function author(){
//window.location.reload(false);

document.getElementById('youLogin').value=localStorage.getItem('myLogin');
document.getElementById('youPassword').value=localStorage.getItem('myPassword');
if (document.getElementById('youLogin').value!=0&&document.getElementById('youPassword')!=0){
	whereIAm="lob";
	lobby();
aJaX("null","null");}
//setInterval(function () {
  //aJaX("null","null");
//}, 5000);
//let w=screen.width;
//let h=screen.height;
}

function saveAuthor(){
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
}

function aJaX(act, par){
let data="login="+document.getElementById('youLogin').value+"#"+"password="+document.getElementById('youPassword').value+"#action="+act+"#par="+par;
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
		lobby();
		lobbyTable(reqvData);}
	else if (reqvStat==="tour"){
		whereIAm="tor";
		tournaments(reqvData);}
	else if (reqvStat==="0"){		
		whereIAm="uTb";
		pressedButton=0;
		replacePlayer(reqvData);
		table();}
	else if (reqvStat==="1"){
		whereIAm="sTb";
		startedtable();
		replacePlayer(reqvData);}
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
	document.getElementById('enableTable').innerText="Доступные столы:";
	let nx=document.getElementById('tbl');
	nx.innerHTML="";
	let resp=respString.split(' ')[1];
	for (let i=0;i<resp.split('#').length;i++){
		let tableFld=document.createElement('fieldset');
		tableFld.setAttribute('class','tableField');
		tableFld.setAttribute('onclick',"aJaX('"+"join'"+",'"+resp.split('#')[i].split('/')[0].split(':')[1]+"')");
		let divTable=document.createElement('div');
		divTable.setAttribute('id','t'+i);
		divTable.setAttribute('class','lobbyTableHead');
		divTable.innerHTML="Стол № "+resp.split('#')[i].split('/')[0].split(':')[1];
		tableFld.append(divTable);	
		nx.append(tableFld);
		for (let j=0;j<(resp.split('#')[i].split('/')[1].split(',')).length;j++){
			let divPlayer=document.createElement('div');
			divPlayer.setAttribute('id','p'+j);
			divPlayer.setAttribute('class','lobbyPlayer'+j);
			divPlayer.innerHTML=resp.split('#')[i].split('/')[1].split(',')[j];
			tableFld.append(divPlayer);
		}
	}
}

let arrTour=new Map();
function tournaments(respString){
	whereIAm="tor";
	document.getElementById('tourCr').classList.replace("hide","show");
	document.getElementById('tourG').classList.replace("show","hide");
	document.getElementById('enableTable').innerText="Доступные турниры:";
	let tourn=document.getElementById('tbl');
	tourn.innerHTML="";
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
		let tourFld=document.createElement('fieldset');
		tourFld.setAttribute('class','tourField');
		tourFld.setAttribute('onclick', 'showTour('+i+')');
		tourn.append(tourFld);
		let divTimeHead=document.createElement('div');
		divTimeHead.setAttribute('class','tourTableHead');
		divTimeHead.innerHTML=arrTour.get('desc'+i)+" начало "+da;
		tourFld.append(divTimeHead);
		let divSity=document.createElement('div');
		divSity.setAttribute('class','tourSity');
		divSity.innerHTML="Город проведения: "+arrTour.get('city'+i)
		tourFld.append(divSity);
		let divReg=document.createElement('div');
		divReg.setAttribute('class','tourRe');
		if (arrTour.get('players'+i).indexOf(localStorage.getItem('myLogin'))!=-1){
			divReg.innerHTML="Вы зарегестрированны"}
		else {
			divReg.innerHTML="Вы не зарегестрированны"}
		tourFld.append(divReg);
	}
}

function showTour(nt){
	document.getElementById('tourCr').classList.replace("show","hide");
	document.getElementById('refrL').classList.replace("show","hide");
	document.getElementById('enableTable').innerHTML=arrTour.get('desc'+nt);
	if (arrTour.get('players'+nt).indexOf(localStorage.getItem('myLogin'))==-1){
		document.getElementById('tourG').classList.replace("hide","show");}
	else {}
		
	
	let tournFull=document.getElementById('tbl');
	document.getElementById('tbl').classList="listTour";
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

document.getElementById('tourG').addEventListener("click",function (){
		aJaX('','')
})

document.getElementById('tourCr').addEventListener("click",function (){
		aJaX('','')
})

function replacePlayer(respString){
	document.getElementById('showLog').innerHTML="";
	let j;
	let resp=respString.split(' ')[1];
	let arr=new Map();
	for (let i=0;i<resp.split(',').length;i++){
		arr.set(resp.split(',')[i].split(':')[0],resp.split(',')[i].split(':')[1]);
	}
	let nroun=Number(arr.get('round'));
	let tempPlace=[];
	let tempWind=[];
	let tempName=[];
	let tempScore=[];
	let score=[];
	document.getElementById('nowRound').innerHTML=winds[Math.trunc(nroun/4)]+" "+(nroun%4+1);
	document.getElementById('nowTable').innerHTML="Стол: "+arr.get('numtable');
	llog='Round';
	for (let i=0;i<4;i++){
		if (arr.get(i.toString())==document.getElementById('youLogin').value){
			j=i;
		}
	}
	for (let i=0;i<4;i++){
		tempPlace.push(document.getElementById('playerPlace'+i));
		tempWind.push(document.getElementById('playerWind'+i));
		tempName.push(document.getElementById('playerName'+i));
		tempScore.push(document.getElementById('playerScore'+i));
		llog+="|"+arr.get(i.toString())
		let y=i-j;
		if (y<0){
			y+=4}
		tempPlace[i].className="show Set"+y;
		tempName[i].innerHTML=arr.get(i.toString());
		if (respString.split(" ")[0].split("=")[1]==-1){
			tempScore[i].innerHTML=arr.get('s'+i).split('/')[1];
			tempWind[i].innerHTML='Место: '+arr.get('s'+i).split('/')[0]+'<br>'+arr.get('s'+i).split('/')[2];}
		else{
			tempScore[i].innerHTML=arr.get('s'+i);
			tempWind[i].innerHTML=winds[(16+i-nroun)%4];}
			document.getElementById('playerStatusScore'+i).value=arr.get('s'+i);
			document.getElementById('round').value=arr.get('round');
	}
	if(arr.get('log')!="0|0|0|0|0"){
		llog+="!"+arr.get('log')}
	let ress=llog.split("!")
	let beforeround=document.createElement('div');
	beforeround.setAttribute('class','minilogP');
	let ww=ress[ress.length-1].split("|")[0];
	beforeround.innerHTML="Предыдущий раунд: "+winds[Math.trunc(ww/4)]+" "+(ww%4+1);
	document.getElementById('showLog').appendChild(beforeround);
	if(llog.indexOf("!")==-1){document.getElementById('showLog').innerHTML="Нихт. найн. НИЧЕГО"}
	else{
	for(let i=1;i<5;i++){
		let divLy=document.createElement('div');
		divLy.setAttribute('class','minilogP');
		if(ress.length>2){
			divLy.innerHTML=ress[0].split("|")[i]+": "+ress[ress.length-2].split("|")[i];}
		else{divLy.innerHTML=ress[0].split("|")[i]+": "+0;}
		document.getElementById('showLog').appendChild(divLy);}
	}
}

function zero(){
	data='';
	cou=0;
	pressedButton=-1;
	for (let i=0;i<4;i++){
		document.getElementById('stat'+i).value=0;
		document.getElementById('plField'+i).className='player n';}
}


let fgr=document.getElementById('inpFanGroup');
let fan=document.getElementById('inpFan');
let fstat=document.getElementById('inpStat');
let fstatl=document.getElementById('inpStatl');
let fanstat=document.getElementById('inpStatf');
let tmpArr=[];
let dataFan=[];

function inputV(vl){
	fan.innerHTML="";
	fan.classList.replace("hide","show");
	let ruNm=arrFanRuName[vl];
	for(let j=0; j<ruNm.length;j++){
		let inpFan=document.createElement('input');
		inpFan.setAttribute('type','button');
		inpFan.setAttribute('class','fan');
		inpFan.setAttribute('value',ruNm[j].split("%")[0]);
		inpFan.setAttribute('onclick','inputTmp("'+ruNm[j]+'",'+vl+')');
		fan.appendChild(inpFan)}
}

function inputTmp(t,v){
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
	fanstat.innerText=tmpArr.join(" ");
}
function input(){
	fgr.innerHTML="";
	var a=Object.keys(arrFanRuName);
	for (let i=0; i<a.length;i++){
		let inpGroup=document.createElement('input');
		inpGroup.setAttribute('type','button');
		inpGroup.setAttribute('class','fangr');
		inpGroup.setAttribute('onclick','inputV('+a[i]+')');
		inpGroup.setAttribute('value',a[i]);
		fgr.appendChild(inpGroup)}
}

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

document.getElementById("sendG").addEventListener ("click", function(){
	pressedButton+=2;
	if (pressedButton==1){
		document.getElementById("noneG").classList.replace("show","hide");
		f.classList.replace("hide","show");
	}
	if (pressedButton==3){
		if (f.value!="" && f.value>7 && f.value<999){
			sh=["nowTable","nowRound","inp","endG","refrG","sendG","penalG","backG","noneG","log","playerPlace0","playerPlace1","playerPlace2","playerPlace3"]
			for(let i=0; i<sh.length;i++){
				document.getElementById(sh[i]).classList.replace("show","hide");}
				fgr.classList.replace("hide","show");
				document.getElementById("cancelScore").classList.replace("hide","show");
				document.getElementById("fullScore").classList.replace("hide","show");
				document.getElementById("inpStat").classList.replace("hide","show");
				document.getElementById("inpStatf").classList.replace("hide","show");
				document.getElementById("inpStatl").classList.replace("hide","show");
				fstat.innerHTML+=document.getElementById('inp').value;
				input();}
		else if (f.value!="" && f.value<8){
			f.value="";
			pressedButton=1;
			alert("Маловато будет, маловато!");}
		else if (f.value>999 && f.value!=""){
			f.value="";
			pressedButton=1;
			alert("Многа");}
		else{
			pressedButton=-1;
			zero();
			document.getElementById("noneG").classList.replace("hide","show");
			f.classList.replace("show","hide");}
	}
})

function summ(){
	let dataS="";
	let nowStat=[];
	let nowScore=[];
	let scoreF=Number(document.getElementById('inp').value);
	let j=0;
	let k=0;
	for (let i=0;i<4;i++){
		nowStat[i]=document.getElementById('stat'+i).value;
		nowScore[i]=Number(document.getElementById('playerStatusScore'+i).value);
		if (nowStat[i]=="2"){
			j+=1;}
		if (nowStat[i]=="1"){
			k+=1;}
		}
	if(k==1&&(j==1||j==3)){
		for (let i=0;i<4;i++){
			if (nowStat[i]==1){
				nowScore[i]+=Number(24+scoreF*j);}
			else{
				nowScore[i]-=Number(8+scoreF*nowStat[i]/2);}
			dataS+="s"+i+"="+nowScore[i]+",";
		}
		zero();
		dataS+="round="+document.getElementById('round').value+",co="+dataFan;
	}
	else{
		zero();
		startedtable();
		alert('Неверно введено количество победителей/проигравших')
		dataS='';
	}
	return dataS;
}

document.getElementById("cancelScore").addEventListener ("click",function (){
	pressedButton=-1;
	f.value="";
	zero();
	startedtable();
	fanstat.innerHTML="";
	tmpArr.length=0;
	dataFan.length=0;
	startedtable();
})
document.getElementById("noneG").addEventListener ("click",function (){
	let dataN="round="+document.getElementById('round').value;
	aJaX('null','null');
	aJaX('enter',dataN);
	for (let i=0;i<4;i++){
		document.getElementById('stat'+i).value="0";
		document.getElementById('plField'+i).className='player n';}
})

document.getElementById("backG").addEventListener ("click",function (){
	let dataW="round="+document.getElementById('round').value;
	for(let i=0;i<4;i++){
		document.getElementById('stat'+i).value=0;
		document.getElementById('plField'+i).className="player n";}
	document.getElementById("inp").classList.replace("show","hide");
	aJaX('null','null');
	aJaX('wipe',dataW);
})

let fullStat = function (){
	if(pressedButton===-1){
		document.getElementById("logpage").className="flog show";
		document.getElementById("log").classList.replace("show","hide");
		document.getElementById("backG").classList.replace("show","hide");
	for(let i=0; i<4;i++){document.getElementById('playerPlace'+i).classList.replace("show","hide");}
	getStat();

}}

document.getElementById("log").addEventListener ("click",function (){
	if(pressedButton===-1){
		document.getElementById("logpage").className="flog show";
		document.getElementById("log").classList.replace("show","hide");
		document.getElementById("backG").classList.replace("show","hide");
	for(let i=0; i<4;i++){document.getElementById('playerPlace'+i).classList.replace("show","hide");}
	getStat();
	}
})


function getStat(){
	document.getElementById("endG").classList.replace("show","hide");	
	document.getElementById("refrG").classList.replace("show","hide");
	document.getElementById("sendG").classList.replace("show","hide");
	document.getElementById("penalG").classList.replace("show","hide");
	document.getElementById("noneG").classList.replace("show","hide");
	document.getElementById("fullLog").innerHTML="";
	let res=llog.split('!')
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
			divR.appendChild(divD)}
		}		
}


document.getElementById("logInM").addEventListener ("click",function (){
	saveAuthor();
	aJaX('null','null')
})

document.getElementById("refrG").addEventListener ("click",function (){
	if(pressedButton===-1){
		aJaX("null","null")}
	else if (whereIAm=="uTb"){
		zero();
		aJaX("null","null")}
})

document.getElementById("refrL").addEventListener ("click",function (){
	//navigator.vibrate([100,50,500,10,300]);
	aJaX('null','null')
})

document.getElementById("startG").addEventListener ("click",function (){
	zero();
	aJaX('start','null')
})

document.getElementById("shufflG").addEventListener ("click",function (){
	zero();
	aJaX('shuffle','null');
	pressedButton=0;
})

document.getElementById("tolobbyG").addEventListener ("click",function (){
	pressedButton=-1;
	zero();
	lobby();
	aJaX('back','null')
})

document.getElementById("backS").addEventListener ("click",function (){
	if(pressedButton===-1){
		document.getElementById("logpage").classList.replace("show","hide");
		if (whereIAm==="eTb"){
			endetable();}
		else{
			startedtable();}
	}
})

closeFullStat = function (){
	document.getElementById("logpage").classList.replace("show","hide");
	startedtable();
}

document.getElementById("endG").addEventListener ("click",function (){
	document.getElementById("refrG").classList.replace("show","hide");
	document.getElementById("sendG").classList.replace("show","hide");
	document.getElementById("penalG").classList.replace("show","hide");
	document.getElementById("noneG").classList.replace("show","hide");
	document.getElementById("endG").classList.replace("show","hide");
	aJaX('end','null')
})

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


function total(){
	let dataS="";
	let nowStat=[];
	let nowScore=[];
	let score=Number(document.getElementById('inp').value);
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

let data="";
for (let i=0;i<4;i++){
	let nElem=document.getElementById('plField'+i)	
nElem.addEventListener ("click",function (){
	let tmpStat=document.getElementById('stat'+i);
	let tmpColor=document.getElementById('plField'+i);
	if(pressedButton===0){
	if(whereIAm==="uTb"){
		if(Number(tmpStat.value)==0){
		data+=tmpStat.name.toString();
		tmpStat.value='1';
		tmpColor.className="player w";
		if (data.length>1){
			aJaX('change',data)
			document.getElementById('plField'+data[0]).className='player n';
			document.getElementById('plField'+data[1]).className='player n';
			document.getElementById('stat'+data[0]).value="0";
			document.getElementById('stat'+data[1]).value="0";
			data='';
			}
		}
		else{
			data='';
			tmpStat.value='0';
			tmpColor.className="player n";
			}
		}
	}
	
	
	else if(whereIAm==="sTb"){
		
		if(pressedButton===1){
			let couW=-1;
			for (let j=0;j<4;j++){
				if (document.getElementById('stat'+j).value=='1'){
					couW=j;}
				}	
			if (couW==i){
				for (let j=0;j<4;j++){
					document.getElementById('plField'+j).className='player n';
					document.getElementById('stat'+j).value=0;}
			}
			else if (couW==-1){
				tmpStat.value=1;
				tmpColor.className="player w";
				fstat.innerHTML="Победил игрок "+document.getElementById("playerName"+i).innerHTML.toString()+" очки: ";}
			else if (tmpStat.value==2){
				let couL=0;
				for (let j=0;j<4;j++){
					if(document.getElementById('stat'+j).value==2){
						couL++;}
				}
				if (couL==1){
					tmpStat.value=0;
					tmpColor.className="player n";}
				else{
					for (let j=0;j<4;j++){
							if(j!=i){
								if(j!=couW){
								document.getElementById('plField'+j).className='player n';
								document.getElementById('stat'+j).value=0;}
						}
					}
				}	
			}
			else{
				let couL=0;
				fstatl.innerHTML="С игроков ";
				for (let j=0;j<4;j++){
					if(document.getElementById('stat'+j).value==2){
					couL++;}
				}
				if (couL==1){
					
					for (let j=0;j<4;j++){
						if(j!=couW){
							document.getElementById('plField'+j).className='player l';
							document.getElementById('stat'+j).value=2;
							fstatl.innerHTML+=document.getElementById("playerName"+j).innerHTML.toString()+" "}
					}		
				}
				else{
				fstatl.innerHTML+=document.getElementById("playerName"+i).innerHTML.toString()+" ";
				tmpStat.value=2;
				tmpColor.className="player l";}
			}
		}
		
		else if(pressedButton==2){
			let pr=-1;
			for (let m=0;m<4;m++){
				if (document.getElementById('stat'+m).value==2){
					pr=m;
				}
			}
			if (pr!=-1){
				tmpStat.value=0;
				tmpColor.className="player n";}
			else if (pr==-1){
					tmpStat.value=2;
					tmpColor.className="player l";}
		}
	}
}
)}


document.getElementById('logOutM').addEventListener("click",function (){
	document.getElementById('youLogin').removeAttribute("readonly");
	let sh=['tourCr','tourG','penalG','backG','logpage','tbl','tableStatus','refrL','logpage','inpFan','inpFanGroup','log','backG',
		'sendG','tolobbyG','shufflG','startG','refrL','refrG','noneG','logOutM',
		'enableTable','tableStatus','endG','playerPlace0','playerPlace1','playerPlace2','playerPlace3']
	let hs=['lang','logInM','well','youPassword']
	for(let i=0; i<sh.length;i++){document.getElementById(sh[i]).classList.replace("show","hide");}
	for(let i=0; i<hs.length;i++){document.getElementById(hs[i]).classList.replace("hide","show");}
	
	if (localStorage.myLogin!=""){
		localStorage.myLogin="";
		document.getElementById('youLogin').value=localStorage.myLogin;}
	if (localStorage.myPassword!=""){
		localStorage.myPassword="";
		document.getElementById('youPassword').value=localStorage.myPassword;}
})

function lobby(){
	document.getElementById('youLogin').setAttribute('readonly','readonly');
	document.getElementById('tbl').classList='listTables show'
	let sh=['tourCr','tourG','endG','backG','logpage','lang','logpage','inp','penalG','sendG','nowRound','well','youPassword',
		'logInM','noneG','refrG','startG','shufflG','tolobbyG','log','nowTable',
		'playerPlace0','playerPlace1','playerPlace2','playerPlace3']
	let hs=['refrL','logOutM','tbl','tableStatus','enableTable']
	for(let i=0; i<sh.length;i++){document.getElementById(sh[i]).classList.replace("show","hide");}
	for(let i=0; i<hs.length;i++){document.getElementById(hs[i]).classList.replace("hide","show");}
}
function table(){
	document.getElementById('youLogin').setAttribute('readonly','readonly');
	let sh=['inpFan','inpFanGroup','inpStat','fullScore','endG','backG','logpage','lang','well','logInM','youPassword','enableTable','log','penalG',
	'sendG','refrL','tbl','noneG']
	let hs=['shufflG','logOutM','refrG','nowRound','nowTable','tableStatus','tolobbyG',
	'startG','playerPlace0','playerPlace1','playerPlace2','playerPlace3']
	for(let i=0; i<sh.length;i++){document.getElementById(sh[i]).classList.replace("show","hide");}
	for(let i=0; i<hs.length;i++){document.getElementById(hs[i]).classList.replace("hide","show");}
	}
function startedtable(){
	document.getElementById('youLogin').setAttribute('readonly','readonly');
	let sh=['inpFan','inpFanGroup','inpStat','inpStatl','cancelScore','fullScore','lang','endG','well','youPassword','logInM','refrL','startG','shufflG',
		'tolobbyG','tbl','inpFan','inpFanGroup','enableTable']
	let hs=['backG','playerPlace0','playerPlace1','playerPlace2','playerPlace3','logOutM',
		'noneG','refrG','sendG','penalG','log','tableStatus','nowTable','nowRound']
	for(let i=0; i<sh.length;i++){document.getElementById(sh[i]).classList.replace("show","hide");}
	for(let i=0; i<hs.length;i++){document.getElementById(hs[i]).classList.replace("hide","show");}

	}
function endetable(){
	pressedButton=-1;
	document.getElementById('youLogin').setAttribute('readonly','readonly');
	let sh=['penalG','lang','logpage','enableTable','inpFan','inpFanGroup','noneG','logInM','well','youPassword','penalG']
	let hs=['log','endG','logOutM','refrG','playerPlace3','tableStatus','nowTable',
		'nowRound','playerPlace0','playerPlace2','playerPlace1','backG']
	for(let i=0; i<sh.length;i++){document.getElementById(sh[i]).classList.replace("show","hide");}
	for(let i=0; i<hs.length;i++){document.getElementById(hs[i]).classList.replace("hide","show");}	
	}

function oda(){
	document.getElementById('youLogin').setAttribute('readonly','readonly');
	let sh=['inpFan','inpFanGroup','inpStat','inpStatl','cancelScore','fullScore','lang','endG','well','youPassword','logInM','refrL','startG','shufflG',
		'tolobbyG','inpFan','inpFanGroup','enableTable',
		'backG','playerPlace0','playerPlace1','playerPlace2','playerPlace3']
		//,'logOutM',		'noneG','refrG','sendG','penalG','log','tableStatus','nowTable','nowRound']
	for(let i=0; i<sh.length;i++){document.getElementById(sh[i]).classList.replace("show","hide");}
	//for(let i=0; i<hs.length;i++){document.getElementById(hs[i]).classList.replace("hide","show");}
}
//let ad

function shower(resp){
	document.getElementById('heri').classList.replace('hide','show');
	document.getElementById('tbl').classList.replace('hide','show')
	let nx=document.getElementById('tbl');
	nx.innerHTML="";
	let tableFld=document.createElement('fieldset');
	tableFld.setAttribute('class','tableField');
	//tableFld.setAttribute('onclick',"aJaX('"+"join'"+",'"+resp.split('#')[i].split('/')[0].split(':')[1]+"')");
	nx.append(tableFld);
	let divTable=document.createElement('div');
	divTable.setAttribute('class','lobbyTableHead');
	divTable.innerHTML="Пришло--"+resp.split(' ')[1].split(':')[1]
	tableFld.append(divTable);
	let ino=document.createElement('input');
	ino.setAttribute('id','suka');
	ino.setAttribute('type','text');
	ino.setAttribute('class','xxx show')
	ino.setAttribute('value','');
	nx.appendChild(ino);
}

document.getElementById("heri").addEventListener ("click",function (){
	aJaX('command',document.getElementById('suka').value)
})


window.alert = function myAlert(inp) {
    if(document.getElementById("newAl")) return;
    mObj = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
    mObj.id = "newAl";
    mObj.style.height = document.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(document.createElement("div"));
    alertObj.id = "alertBox";
    if(document.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (document.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(document.createElement("h1"));
    h1.appendChild(document.createTextNode("Смотрим, прицениваемся"));

    msg = alertObj.appendChild(document.createElement("p"));
    msg.appendChild(document.createTextNode(inp));
    msg.innerHTML = inp;

    btn = alertObj.appendChild(document.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(document.createTextNode("Ну, ладно..."));
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }
    alertObj.style.display = "block";
}
function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("newAl"));
}


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
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = "⇪";

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = "⎆";

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML ="spacebar";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
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
                    });

                    break;
					
                case "enter":
                   // keyElement.classList.add("keyboard__keyN");
                    keyElement.innerHTML = "⎆";
                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
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
