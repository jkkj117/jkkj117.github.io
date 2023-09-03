function 임시함수10() {
  alert('accordion-header > button');

}
function 임시함수9() {

}
function 임시함수8() {

}
function 임시함수7() {

}
function 임시함수6() {

}
function 임시함수5() {
    alert('화면넓이 : ' + document.body.clientWidth );
  }

function 임시함수4() {
  document.body.style.scale=1
    // var con = document.querySelector('#dkdk');
    // alert(con.parentNode.nodeName);
    // var pxs=getComputedStyle(con).fontSize;
    // alert(pxs);
  }

function 임시함수3() {
  // window.scrollY
  var target = document.getElementById('스트롤이동2'); // 요소의 id 값이 target이라 가정
  console.log(target);
  var 절대좌표 = window.scrollY + target.getBoundingClientRect().top;
  var fix높이=getComputedStyle(document.getElementsByTagName('header')[0]).height
  fix높이=fix높이.replace('/[^0-9]/g', ''); //숫자형식만 남기기
  fix높이 = parseInt(fix높이); //숫자형식으로 변환
  window.scrollTo({ left: 0, top: 절대좌표 - fix높이, behavior: "smooth" });
}

function 임시함수2() {
  // window.scrollY
  var ul들 = document.querySelectorAll('#모든UL그룹묶음 button')
  var ul높이값모음;
  if (ul들.length==0) {

  }else {  // ul이 있을때
      for (var i=0 ; i<ul들.length; i++) {

            ul높이값모음 += (i+1) + '번째 UL높이 : ' + ul들[i].getBoundingClientRect().top + '\n'; 

      } 
    }

    alert(ul높이값모음);
}

function 임시함수1() {
  var con = document.querySelectorAll('[title="버튼과ul"]');
  var ul들 = document.querySelectorAll('[title="버튼과ul"] ul');
  var arr_ul들 = [];
  var 서너개ul높이=[];
  var 서너개ul적용높이=0;
  var 버튼높이=0;
  var 줄수=0;
  var 가로개수=0;
  var 적용개수=0;

  if(con.length==0){alert('변수가 비었음.');return;} //alert('변수가 비었음.'); 



  for (var i=0 ; i <  ul들.length; i++) {
    //현재 높이 숫자로 담는동작
    if (i == 0) {
      메세지 = (i+1) + '번째ul높이 : ' +  getComputedStyle(ul들[i]).height + '\n';
      arr_ul들[i]=parseFloat(getComputedStyle(ul들[i]).height);
    }
    if (i !== 0) {
      메세지 += (i+1) + '번째ul높이 : ' +  getComputedStyle(ul들[i]).height + '\n';
      arr_ul들[i]=parseFloat(getComputedStyle(ul들[i]).height);
    }

    //시작비 버튼높이 다르니 줄수 1추가로 시작.
    if (버튼높이!==con[i].getBoundingClientRect().top) {
      
      서너개ul높이=[];
      // 가로개수만큼의 정보에서 최대값을 구해야됨
      if (i!==0) {
        for (var j=1; j<가로개수; j++) {
          서너개ul높이.push(arr_ul들[i-가로개수+j])
        }
        서너개ul적용높이=Math.max(...서너개ul높이);
        for (var j=1; j<가로개수; j++) {
          arr_ul들[i-j]=서너개ul적용높이;
        }
        적용개수=적용개수+서너개ul높이.length;
      }
      가로개수=1 //달라지마자자
      줄수=줄수+1 
      버튼높이=con[i].getBoundingClientRect().top;
    }
    if (버튼높이==con[i].getBoundingClientRect().top) {
        가로개수=가로개수+1
    }
  }

      //for문끝나고 ul들.length<ul들.length일때 마지막 작업
      if (ul들.length > 적용개수) {
        서너개ul높이=[];
        for (var k=적용개수; k < ul들.length; k++) {
          서너개ul높이.push(arr_ul들[k]);
        }

        서너개ul적용높이=Math.max(...서너개ul높이);

        for (k=적용개수; k < ul들.length; k++) {
          arr_ul들[k]=서너개ul적용높이;
        }
        적용개수=적용개수+서너개ul높이.length;
        // alert('i : ' + i + '\n서너개ul높이 : ' + 서너개ul높이 + '\n서너개ul적용높이 : ' + 서너개ul적용높이);
      }

  for (var i=0 ; i <  ul들.length; i++) {
    ul들[i].style.height=arr_ul들[i] + 'px'
    }
    alert('적용개수 : ' + 적용개수 + '\n' + 메세지);
}



function 맨위로 () {
  // 안씀
  window.scrollTo({ top: 0, behavior: "smooth" }); 
}
function 함수버튼보기숨기기 () {
  var con = document.querySelector('.함수버튼');
  if(con.style.display=='none'){ 		
    con.style.display = 'inline-block'; 
  }else{ 		
    con.style.display = 'none';
  } 
}


function content편집중_보기_숨기기() {
  var con = document.querySelector('#content_편집중');
  var button=	document.querySelector('#보기_숨기기버튼>button:nth-of-type(4)');
  // console.log(button);
  if(con.style.display=='none'){ 		
    con.style.display = 'block'; 
    button.innerText='content편집중 보기중'	
  }else{ 		
    con.style.display = 'none';
    button.innerText='content편집중 숨김중'	 	
  } 
  // SHOW 안했을때 ALERT.스페이스1글자,엔터1글자,빈줄한글자 인식됨,태그를 딱 붙이면  0, 주석도 글자수로 카운트
  if(con.innerHTML.length<3){ 		
    con.style.display = 'none';
    button.innerText='편집중 숨김중'
    alert('편집중의 내용이 없는 상태입니다.')	
  } 
}
function 결과임시_보기_숨기기() {
  var con = document.querySelector('#결과');
  var button=	document.querySelector('#보기_숨기기버튼>button:nth-of-type(3)');
  // console.log(button);
  if(con.style.display=='none'){ 		
    con.style.display = 'block'; 
    button.innerText='결과파일 보기중'	
  }else{ 		
    con.style.display = 'none';
    button.innerText='결과파일 숨김중'	 	
  }
  // SHOW 안했을때 ALERT.스페이스1글자,엔터1글자,빈줄한글자 인식됨,태그를 딱 붙이면  0, 주석도 글자수로 카운트
  if(con.innerHTML.length<3){ 		
    con.style.display = 'none';
    button.innerText='결과파일 숨김중'
    alert('결과의 내용이 없는 상태입니다.')	
  } 
}

function main_list_viewHide() {
  console.log('main_list_viewHide 함수 실행');
  var con = document.getElementById('모든_버튼과UL그룹묶음'); 
  var button=	document.querySelector('#보기_숨기기버튼>button:nth-of-type(1)');
  var a_리스트보기숨기기=	document.querySelector('#a_리스트보기숨기기');
  //button은 세관용, li_a는 my용
  if(con.style.display=='none'){ 		
    con.style.display = 'block'; 
    if (button) {button.innerText='리스트 보기중'	}
    if (a_리스트보기숨기기) {a_리스트보기숨기기.innerText='리스트 보기중'	}
  }else{ 		
    con.style.display = 'none';
    if (button) { button.innerText='리스트 숨김중'}
    if (a_리스트보기숨기기) { a_리스트보기숨기기.innerText='리스트 숨김중'}
  } 
}

function sub_list_showHide() {
  console.log('sub_list_showHide 함수 실행');
  var con = document.getElementById('소제목과list'); 	
  var button=	document.querySelector('#보기_숨기기버튼>button:nth-of-type(2)');
  var a_소제목보기숨기기=	document.querySelector('#a_소제목보기숨기기');

  if(con.style.display=='none'){ 		
    con.style.display = 'block'; 
    if (button) {button.innerText='소제목 보기중'	}
    if (a_소제목보기숨기기) {a_소제목보기숨기기.innerText='소제목 보기중'	}
  }else{ 		
    con.style.display = 'none';
    if (button) { button.innerText='소제목 숨김중'}
    if (a_소제목보기숨기기) { a_소제목보기숨기기.innerText='소제목 숨김중'}
  } 
  // SHOW 안했을때 ALERT.스페이스1글자,엔터1글자,빈줄한글자 인식됨,태그를 딱 붙이면  0, 주석도 글자수로 카운트
  if(con.innerHTML.length<3){ 		
    con.style.display = 'none';
    if (button) {button.innerText='소제목 숨김중'	}
    if (a_소제목보기숨기기) {a_소제목보기숨기기.innerText='소제목 숨김중'	}
    alert('소제목이 없는 상태입니다.')
  }
}  

//소제목 클릭시 소제목 내용 복붙 형식? 복붙된곳 스타일링 해야함.
function sub_list_Show(event) {
  console.log('sub_list_Show 함수 실행');
  var con = document.getElementById('소제목과list'); 	
  var button=	document.querySelector('#보기_숨기기버튼>button:nth-of-type(2)');
  var a_소제목보기숨기기=	document.querySelector('#a_소제목보기숨기기');

  con.style.display = 'block';
  var bt_text=event.target.innerText;
  var next_ul=event.target.nextElementSibling;
  document.getElementById('소제목과list').innerHTML='<h5 id="result_h1">'+bt_text+'</h5><ol>' + next_ul.innerHTML	+ '</ol>'
  var li=document.querySelectorAll('#소제목과list li')
  for (i=0 ; i<li.length; i++) {
    li[i].innerText=(i+1) + '. ' + li[i].innerText   
  }
  if(con.innerHTML.length<2){ 		
    con.style.display = 'none';
    if (button) { button.innerText='소제목 숨김중'}
    if (a_소제목보기숨기기) { a_소제목보기숨기기.innerText='소제목 숨김중'}
  } else {
    if (button) {button.innerText='소제목 보기중'	}
    if (a_소제목보기숨기기) {a_소제목보기숨기기.innerText='소제목 보기중'	}
  }
}   

// 시작하면 바로 실행됨 !!!! ul_height_change
var con = document.querySelectorAll('[title="버튼과ul"]');
var ul들 = document.querySelectorAll('[title="버튼과ul"] ul');
var arr_ul들 = [];
var 버튼높이=0;
var 가로개수=0;
var 서너개ul높이=[];
var 서너개ul적용높이=0;
var 적용개수=0;

for (var i=0 ; i < ul들.length; i++) {
  //현재 높이 숫자로 담는동작
  if (i == 0) {
    메세지 = (i+1) + '번째ul높이 : ' +  getComputedStyle(ul들[i]).height + '\n';
    arr_ul들[i]=parseFloat(getComputedStyle(ul들[i]).height);
  }
  if (i !== 0) {
    메세지 += (i+1) + '번째ul높이 : ' +  getComputedStyle(ul들[i]).height + '\n';
    arr_ul들[i]=parseFloat(getComputedStyle(ul들[i]).height);
  }

  //시작시 버튼높이 다르니 줄수 1추가로 시작.
  if (버튼높이 !== con[i].getBoundingClientRect().top) {
    
    서너개ul높이 =[];
    // 가로개수만큼의 정보에서 최대값을 구해야됨
    if (i !== 0) {
      for (var j=1; j<가로개수; j++) {
        서너개ul높이.push(arr_ul들[i-가로개수+j])
      }
      서너개ul적용높이=Math.max(...서너개ul높이);
      for (var j=1; j<가로개수; j++) {
        arr_ul들[i-j]=서너개ul적용높이;
      }
      적용개수=적용개수+서너개ul높이.length;
    }
    가로개수=1 //달라지자마자자
    버튼높이=con[i].getBoundingClientRect().top;
  }

  if (버튼높이==con[i].getBoundingClientRect().top) {
      가로개수=가로개수+1
  }
}

    //for문끝나고 ul들.length<ul들.length일때 마지막 작업
    if (ul들.length > 적용개수) {
      서너개ul높이=[];
      for (var k=적용개수; k < ul들.length; k++) {
        서너개ul높이.push(arr_ul들[k]);
      }

      서너개ul적용높이=Math.max(...서너개ul높이);

      for (k=적용개수; k < ul들.length; k++) {
        arr_ul들[k]=서너개ul적용높이;
      }
      적용개수=적용개수+서너개ul높이.length;
    }

for (var i=0 ; i <  ul들.length; i++) {
  ul들[i].style.height=arr_ul들[i] + 'px'
  }



// 링크이동시 실행될것 한번더
var 변수_fixed용=document.querySelector('header');
var fixed용_스타일_높이=getComputedStyle(변수_fixed용).height;
var 결과스크롤이동용=document.querySelector('#결과');
document.querySelector('#main정보보기').style.paddingTop=fixed용_스타일_높이
//header높으를 두칸으로 인식했다가. 이동완료시 한칸이된다? 
var full_2=document.querySelector('#main정보보기');	//클릭시 fixed 조정위함 추가.
var 소제목=document.querySelector('#소제목과list');	//클릭시 fixed 조정위함 추가.
function clickHandler(event) {	
  console.log('body에 리스너 full_2 click 함수실행');
// alert('body에 리스너');
//1.body : 결과_section 결과로 보내기
  var 변수_fixed용=document.querySelector('header');
  var fixed용_스타일_높이=getComputedStyle(변수_fixed용).height; //클릭시 현재높이 구함
  // console.log('body 클릭이벤트 fixed용_스타일_높이 : ' + fixed용_스타일_높이);
  document.querySelector('#main정보보기').style.paddingTop=fixed용_스타일_높이
  //fixed 위치조정 끝 : 이건 아무데나 body 클릭시마다 한다.
  var content클래스유무=event.target.classList.contains('content');
  var target_content=document.getElementById(event.target.title); //타이틀에 아이디를 넣어두면
  // console.log(event.target.title);
    if (content클래스유무) {
        if (target_content) {
          document.querySelector('#결과').innerHTML=target_content.outerHTML;
          document.querySelector('#결과').style.display = 'block'; 
          //목차생성코드 추가
          var 클릭한정보텍스트=event.target.innerText
          var h1='<h1>' + 클릭한정보텍스트 + '</h1>'
          var 목차=document.querySelectorAll('#결과 #스크립트로ul추가~.목차')
          var 앞문자열='<ul class="결과_section_목차">' + h1
          var 뒷문자열='</ul>'
          var 중간문자열=""
          for (var i=0; i<목차.length; i++) {
              중간문자열=중간문자열 + 목차[i].outerHTML
          }
          var 추가할문자열;
          추가할문자열=앞문자열 + 중간문자열 + 뒷문자열
          document.querySelector('#결과 #스크립트로ul추가').innerHTML=추가할문자열;
          document.querySelector('#보기_숨기기버튼>button:nth-of-type(3)').innerText='결과파일 보기중';
          //id가 따라와서 아이다가 두개가되기때문에 y_result의 아이디를 바꿔줘야함
          if (document.querySelector('#결과>div')) {
             document.querySelector('#결과>div').id="#결과로 이동하여 아이디 바뀜";
          }
        }			else{	
          document.querySelector('#결과').innerHTML="";
          document.querySelector('#보기_숨기기버튼>button:nth-of-type(3)').innerText='결과파일 숨김중';
          alert('연결된 문서 없음');
        }	
    }	
		else{	
          // alert('연결된 문서 없음');
    }	
  //document.querySelector('#결과 > div > div:not(:nth-first-child) > #스크롤이동3')
  if (event.target.id.length>0) {
    var 스크롤요소들=document.querySelectorAll('#' + event.target.id);
    console.log('if (event.target.id.length>0)')
      //#결과
    if (스크롤요소들[1]) {
      console.log('스크롤관련 : 최종if구문진입');
      var target = 스크롤요소들[1];
      console.log('스크롤요소들[1] : 스크롤이동할곳');
      console.log(스크롤요소들[1]);
      var 절대좌표 = window.scrollY + 스크롤요소들[1].getBoundingClientRect().top;
      var fix높이=getComputedStyle(document.querySelector('header')).height
      fix높이=fix높이.replace('/[^0-9]/g', ''); //숫자형식만 남기기
      fix높이 = parseInt(fix높이); //숫자형식으로 변환
      window.scrollTo({ left: 0, top: 절대좌표 - fix높이, behavior: "smooth" });
    }
    console.log(document.querySelector('#결과'));
  }
};	

function 결과스크롤 (event) {

  if (event.target.id.length>0) {
    var 스크롤요소들=document.querySelectorAll('#' + event.target.id);
    console.log('if (event.target.id.length>0)')
      //#결과
    if (스크롤요소들[1]) {
      console.log('스크롤관련 : 최종if구문진입');
      var target = 스크롤요소들[1];
      console.log('스크롤요소들[1] : 스크롤이동할곳');
      console.log(스크롤요소들[1]);
      var 절대좌표 = window.scrollY + 스크롤요소들[1].getBoundingClientRect().top;
      var fix높이=getComputedStyle(document.querySelector('header')).height

      fix높이=fix높이.replace('/[^0-9]/g', ''); //숫자형식만 남기기
      fix높이 = parseInt(fix높이); //숫자형식으로 변환
      window.scrollTo({ left: 0, top: 절대좌표 - fix높이, behavior: "smooth" });
    }
    console.log(document.querySelector('#결과'));
  }

}

full_2.addEventListener('click', clickHandler); //리스너용
소제목.addEventListener('click', clickHandler); //리스너용
결과스크롤이동용.addEventListener('click', clickHandler); 
console.log('마지막');

