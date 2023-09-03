

function 백프로인풋클릭시() {
  if (document.querySelector('#전체크기_사와팔_기록용').title=='전체크기') {
    document.querySelector('#전체크기_사와팔_기록용').title='_사와팔_';
  }else{
    document.querySelector('#전체크기_사와팔_기록용').title='전체크기'
  }
}
function 목차숨김인풋클릭시() {
  if (document.querySelector('#선택한_소주제모음_목차생성').style.display=='block') {
    document.querySelector('#선택한_소주제모음_목차생성').style.display='none';
  }else{
    document.querySelector('#선택한_소주제모음_목차생성').style.display='block'
  }
}


function 아이디변경() {
  var target=document.querySelectorAll('#소주제-부트스트랩기초2 [id]');
  var 중복아이디알림;
  var 아이디개수=0;
  for (var i=0; i<target.length;i++) {
    아이디개수=document.querySelectorAll('#소주제-부트스트랩기초2 #' + target[i].id).length;
    if (아이디개수>1) {중복아이디알림+='\n' + target[i].id}
  }
  alert('중복아이디알림\n' + 중복아이디알림);
}


function 임시디바이스넓이토글() {
  document.querySelector('#header_높이용').style.paddingTop=fixed용_head_높이
  if (document.querySelector('#임시디바이스보기').style.display=='none') {
    document.querySelector('#임시디바이스보기').style.display='block'
  }else{
    if (document.querySelector('#임시디바이스보기').style.display=='block') {
      document.querySelector('#임시디바이스보기').style.display='none'
    }
  }
}

function 위로() {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }

//#소주제-모음 안의 각자식들 class .소주제목차 의 id를  #head_button_group .소주제자동생성 ul 내부에 자동생성
// <li><a title="소주제-부트스트랩기초1" class="소주제 dropdown-item" href="#">소주제-부트스트랩기초1</a></li>
// 아이디만있으면 1)<li><a title=" 2)아이디 3)" class="소주제 dropdown-item" href="#"> 4)아이디 5)</a></li> 형태로 전달
var 소주제목차=document.querySelectorAll('#소주제모음 > .소주제목차');
var 목차디폴트1 ='<li><a title="';
var 목차디폴트3 ='" class="소주제 dropdown-item" href="#">';
var 목차디폴트5 ='</a></li>';
var 목차html='';
var 아이디;

for (var i=0; i<소주제목차.length; i++) {
  아이디=소주제목차[i].id;

  if(소주제목차[i].id) {
    목차html += 목차디폴트1 + 아이디 + 목차디폴트3 + 아이디 + 목차디폴트5;
  }

}
if (목차html) {
  document.querySelector('#소주제자동생성').innerHTML=목차html;
}
// 소주제목차 만들기 끝-->

// #선택한_소주제모음_두가지정보모음 에 이벤트리스너, 왼쪽 목차 클릭시 해당위치로 이동.
var 선택한_소주제모음_두가지정보모음=document.querySelector('#선택한_소주제모음_두가지정보모음');

function 선택한_소주제모음_두가지정보모음_클릭시스크롤이동(event) {
  var 타이틀;
  if (event.target.title.length==0) {타이틀='___'}
  if (event.target.title.length!==0) {타이틀=event.target.title}

  var con=document.querySelector('#선택한_소주제모음_두가지정보모음 #' + 타이틀);
  if (con) {


    var 절대좌표 = window.scrollY + con.getBoundingClientRect().top;
    var fix높이=getComputedStyle(document.querySelector('#head_button_group')).height
    fix높이=fix높이.replace('/[^0-9]/g', ''); //숫자형식만 남기기
    fix높이 = parseInt(fix높이); //숫자형식으로 변환
    window.scrollTo({ left: 0, top: 절대좌표 - fix높이, behavior: "smooth" });

    document.querySelector('#이전위치기록용').innerText=절대좌표 - fix높이

    // alert('절대좌표 : ' + 절대좌표);
    // alert('con.getBoundingClientRect().top : ' + con.getBoundingClientRect().top);
  }

}
// 왼쪽 목차 클릭시 해당위치로 이동. 끝 -->


//높이주기와 소주제 셑팅
var head_button=document.querySelector('#head_button_group')
var fixed용_head_높이=getComputedStyle(head_button).height;
//새로고침시 높이 지정
document.querySelector('#header_높이용').style.paddingTop=fixed용_head_높이

function 높이주기와소주제제목변경과가져오기(event) {

  document.querySelector('#header_높이용').style.paddingTop=fixed용_head_높이

  // a태그 타이틀을 아이디로 가진것이. #소주제-모음 안에 있을때 
  //   1. innerHtml을 #선택한_이곳정보_정보복사에 넣고, 
  //   2. 목차정보 생성하여  #선택한_이곳정보_목차생성 에 넣는다. 
  var 타이틀=event.target.title;
  if (타이틀=='') {타이틀='_타이틀없음_'} //공백이면 에러나서

  if (document.querySelector('#소주제모음 #' + 타이틀)) {
    //#소주제선택하면바뀜 여기에 event.target.innerText넣는다(innerText하면 자식들의 것도 다 포함되서 다르게한다)
      document.querySelector('#소주제선택하면바뀜').innerHTML=
      '<div class="float-start me-2"><span class="badge text-bg-secondary">소주제</span></div>' + event.target.innerText;
      document.querySelector('#선택한_소주제모음_정보복사').innerHTML=document.querySelector('#소주제모음 #' + 타이틀).innerHTML

        //id move 중복있는지 확인 이거는 이거대로 놔두고.!!가져오면서 아이디를 순번부여하기??
      var target=document.querySelectorAll('#선택한_소주제모음_정보복사 [id]');

      var 중복아이디알림;
      var 아이디개수=0;
      var 중복개수=0;
      for (var i=0; i<target.length;i++) {
        아이디개수=document.querySelectorAll('#선택한_소주제모음_정보복사 #' + target[i].id).length;
        if (아이디개수>1) {중복아이디알림+='\n' + target[i].id; 중복개수=중복개수+1}
      }
      if (중복개수>0) {alert('중복아이디알림\n' + 중복아이디알림);}
  }

  //목차생성
  if (document.querySelector('#소주제모음 #' + 타이틀)) {
    //#선택한_소주제모음_정보복사 여기로 복사된 상태이다?
    var 목차들=document.querySelectorAll('#선택한_소주제모음_정보복사 > .목차');
    var 개별목차편집;
    var ol목차편집;
    var 목차innerhtml;
    var 전체시작_ol='<ol>'
    var 전체끝_ol='</ol>'
    var 자식개수;
    var 자식으로ol안태그있으면있음;
    var 목차안목차개수=0;
    var 아이디순번=0;

    for (var 목차개수=0; 목차개수<목차들.length; 목차개수++) {
      // h4, ol태그로 구분말고, 목차태그 안에 목차안목차 있는지 없는지로 구분해야된다.
      아이디순번=아이디순번+1;
      목차안목차개수=0
      자식개수=목차들[목차개수].childElementCount;
      if (자식개수!==0) {
        for (var 반복=0; 반복<자식개수; 반복++) {
          if (목차들[목차개수].children[반복].classList.contains('목차안목차')) {
            목차안목차개수=목차안목차개수+1
          }
        }
        if (목차안목차개수==0) {자식개수=0;}
      }
      // alert('목차들.length : ' + 목차들.length +  '    목차안목차개수 : ' + 목차안목차개수 + '    자식개수 : ' + 자식개수);
      //자식개수별로 작업
      if (자식개수==0) {
      
        개별목차편집='';
        목차들[목차개수].id='move' + 아이디순번
        개별목차편집='<li title="' + 'move' + 아이디순번 + '">' + 목차들[목차개수].innerHTML + '</li>' ;

        if (목차개수==0) {
          목차innerhtml=개별목차편집
        }else{
          목차innerhtml+=개별목차편집
        }
  
      }
      //자식개수별로 작업

      if (자식개수!==0) {
        // alert('진입');
        if (목차들[목차개수].childElementCount>0) {

  
          ol목차편집='';
          for (var 내부=0; 내부<목차들[목차개수].childElementCount;내부++) {
            if (목차들[목차개수].children[내부].classList.contains('목차안목차')) {
  
                    아이디순번=아이디순번+1
                    목차들[목차개수].children[내부].id='move' + 아이디순번
                    ol목차편집+='<li title="' + 'move' + 아이디순번 + '">' + 목차들[목차개수].children[내부].innerHTML + '</li>' ;
  
            }
  
          }
          ol목차편집='<ol>' + ol목차편집 + '</ol>';
  
          목차innerhtml+=ol목차편집
        }
  
      }
    }
    if (목차innerhtml) {
      // document.querySelector('#선택한_소주제모음_목차생성').innerHTML='';
      document.querySelector('#선택한_소주제모음_목차생성').innerHTML=전체시작_ol + 목차innerhtml + 전체끝_ol;
    }
    if (!목차innerhtml) {
      document.querySelector('#선택한_소주제모음_목차생성').innerHTML='';
      // document.querySelector('#선택한_소주제모음_목차생성').innerHTML=전체시작_ol + 목차innerhtml + 전체끝_ol;
    }


  }
}
head_button.addEventListener('click',높이주기와소주제제목변경과가져오기); //높이주기와 소주제 셑팅
선택한_소주제모음_두가지정보모음.addEventListener('click',선택한_소주제모음_두가지정보모음_클릭시스크롤이동); //높이주기와 소주제 셑팅