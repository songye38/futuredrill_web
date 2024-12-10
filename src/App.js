import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="first-section">
          <div className="book-list">
            <a href="#second-section"> 
              <img src="Images/book1.png" alt="Book 1" className="book-image" />
            </a>
            <a href="https://futuredrill.stibee.com/">
              <img src="Images/book2.png" alt="Book 2" className="book-image" />
            </a>
            <a href="#second-section">
              <img src="Images/book3.png" alt="Book 3" className="book-image" />
            </a>
        </div>
      </div>
      <div className="second_section" id="second-section">
        <div className="text-section">
        <div style={{
          width: '100%', // 부모의 너비를 100%로 설정
          display: 'flex',  // 부모 요소를 flexbox로 설정
          flexDirection: 'column',  // 세로 방향으로 배치
          alignItems: 'flex-start',  // 왼쪽 정렬
          gap: 38 // 요소들 간 간격
        }}>
          <div style={{
            color: '#EE61A7',
            fontSize: '40px',
            fontFamily: 'Noto Sans KR',
            fontWeight: '900',
            wordWrap: 'break-word'
          }}>
            FutureDrill, AIX?
          </div>
          <div style={{
            color: 'black',
            fontSize: '18px',
            fontFamily: 'Noto Sans KR',
            fontWeight: 'Regular',
            lineHeight: '32px',
            wordWrap: 'break-word',
            textAlign: 'left'
          }}>
            AIX, AI + Experience는 인공지능을 기술이 아닌,
            경험 관점에서 이해하고 연구합니다.<br/><br/>
            AI에 대한 이해를 통해 다양한 도메인에서
            새로운 시도를 진행해보고
            각 연구원님들의 관심 영역 도메인과 연결함으로써
            함께 토론하며 확장하고 있습니다.<br/><br/>
            AI와 UX와 관련된 논문이나 이슈를 함께 의논하면서
            뉴스레터 및 이론적인 학습을 “Input”으로 하고,
            이를 양분삼아 공통의 관심사의 연결점에 따라서
            프로젝트나 논문쓰기를 “Output”으로 합니다.<br/><br/>
            AI의 이해를 바탕으로 다양한 도메인 영역에서
            새로운 시도를 진행해보고 싶은 분들을 환영합니다!
          </div>
        </div>
        {/* second div section */}
        </div>
        <div className="image-section">
          <img style={{width: '412px', height: '331px'}} alt= 'img1' src="Images/section2_img1.png" />
          <img style={{width: '415px', height: '519px'}} alt= 'img2' src="Images/section2_img2.png" />
        </div>
      </div>
      <div className="third-section">
       <img style={{width: '100%', height: '100%'}} alt= 'img1' src="Images/section3_img1.png" />
      </div>
    </div>
  );
}

export default App;
