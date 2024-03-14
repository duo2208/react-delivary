[만들면서 학습하는 리액트 v2]

### 개인 학습
---
- 🏃‍♀️ [ ] 검색용 데이터는 mock 데이터를 사용하지 않고  elasticSearch 색인을 사용하도록 한다.
- 🏃‍♀️ [ ] 추천 검색, 최근 검색, 자동 완성은 회사 솔루션 OpenquerySE를 사용한다.
- 🏃‍♀️ [ ] typescript 를 사용하도록 리팩토링 한다.

### 폴더 구성
---
- 1-react: 컴포넌트 설계 기법 익히기
- 2-hook: 고급 라이브러리 사용 하기
- 3-composite: 1부 검색 UI 통합 하기
- 4-typescript: 타입스크립트를 적용 하기

### 요구 사항
---
- [ ] 공통
  - [ ] 0.1 화면구성: 3단 레이아웃이다. 상단, 중앙, 하단으로 구성된다. (UI)
  - [ ] 0.2 네비게이션바: 메뉴목록, 주문내역화면을 이동할 수 있다. (UI, 라우팅)
  - [ ] 0.3 네비게이션바: 현재 화면과 같은 링크를 선택한다. (UI, 라우팅)
  - [ ] 0.4 API 호출시 로딩 메세지를 다이얼로그로 표시한다. (다이얼로그)
  - [ ] 0.5 예외 처리용 메세지를 다이얼로그로 표시한다. (다이얼로그)

- [x] 화면1. 상품 목록
  - [x] 1.1 "메뉴목록" 제목을 상단에 표시한다. (UI)
  - [x] 1.2 주문할 수 있는 상품 목록을 중앙에 표시한다. (UI)
  - [ ] 1.3 주문하기 버튼을 클릭하면 해당 상품을 담고 장바구니 화면으로 이동한다. (네비게이션)
  - [x] 1.4 네비게이션바가 하단에 위치한다. (UI)

- [ ] 화면2. 장바구니
  - [ ] 2.1 "장바구니" 제목을 상단에 표시한다. (UI)
  - [ ] 2.2 제목 좌측에 뒤로 가기 버튼을 표시한다. (UI)
  - [ ] 2.3 선택한 상품 정보를 중앙에 표시한다. (UI)
  - [ ] 2.4 주문 정보를 입력할 수 있는 폼을 중앙에 표시한다. (UI)
  - [ ] 2.5 폼 입력 값을 검증하고 오류를 표시한다. (폼)
  - [ ] 2.6 결제하기 버튼을 하단에 표시한다. (UI)
  - [ ] 2.7 결제하기 버튼을 클릭하면 사용자 확인을 받는다. (다이얼로그)
  - [ ] 2.8 결제 성공 후 주문내역 화면으로 이동한다. (네비게이션)

- [ ] 화면3. 주문 내역
  - [ ] 3.1 "주문내역" 제목을 상단에 표시한다. (UI)
  - [ ] 3.2 주문내역 정보를 불러와 중앙에 표시한다. (UI)
  - [ ] 3.3 네비게이션바가 하단에 위치한다. (UI)
