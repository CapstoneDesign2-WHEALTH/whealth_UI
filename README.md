# Whealth_UI
---
## 구현 현황
### 1. 첫 프로토타입
```
- 메인 페이지에서 원하는 기능을 탭하여 들어가는 형식으로 작성
- 아직 애니메이션 기능이 존재하지 않음
```
![WhealthUI1](https://user-images.githubusercontent.com/32920566/143177465-a6708ae3-c0c2-455f-b064-a2089edb46c2.gif)

### 2. 첫번째 피드백 이후 프로토타입
```
피드백 내용

- 사용자 친화적 UI/UX의 최근 동향 : 가장 먼저 필요한 정보를 메인 화면에 제시하는 것이 best
- 사용자가 어색하지 않는 애니메이션 기능을 구현해야함.
- 중첩된 정보가 필요하지 않음. (Drink 컴포넌트에서 사실 상 같은 데이터로 화면을 채우고 있음.
- 물결 모습의 배경 이미지가 어떠한 정보를 주고 있는 듯한 착각을 사용자에게 줄 수 있음. 실제 유의미한 데이터로 SVG를 작성하는 것을 추천.
```
![WhealthUI2](https://user-images.githubusercontent.com/32920566/143177474-f2591334-c54a-4280-904c-32bde6382fbc.gif)

### 3. 두번째 피드백 이후 실제 구현 내용
```
피드백 반영 및 구현 내용

- 핵심 기능인 음수량 현 상황을 바로 제시
- 화면 넘김 (슬라이드) 및 도넛 차트 애니메이션 등 애니메이션 추가
- Drink 컴포넌트에서 중첩된 정보 삭제 후 Water pros and cons를 Carouse로 작성하여 추가 정보 제공.
- 배경 이미지를 실제 데이터로 교체하는 part는 아직 진행 중.
```
![WhealthUI3](https://user-images.githubusercontent.com/32920566/143177481-d26fb508-d159-435e-9e5f-8c71758209d7.gif)


---
## ✍️ 구현해야할 사항
### 1. Bottom Tab Navigator 생성
  - 생성 완료 (2021-11-08)
  - `createMaterialTopTabNavigator` 으로 변경 
### ~~2. Gesture 화면 전환 애니메이션~~
  - swipe 애니메이션 구현 완료 (2021-11-13)
  - `createMaterialTopTabNavigator` 으로 변경 
### 3. Drink Component 디자인
- Donut Chart 도입 (2021-11-14)
- Svg Chart 도입 (2021-11-14)
- Carousel 도입 (2021-11-21)
### 4. Chart Component 디자인
- Donut Chart 도입 (2021-11-14)
### 5. Alarm Component 디자인
- Alarm 목록 UI 제작 (2021-11-14)
- Push notification 알람 기능 동작 확인 (2021-12-04)
### 6. Profile Component 디자인
- HealthKit 데이터 출력 방식 설정 (2021-11-14)
- Profile Card 제작 (2021-12-01)
### 7. 로그인 Component 디자인
- UI 자체 디자인 완료 (기능 구현 필요) (2021-11-14)
- 로그인 페이지로 로딩되는 파트 수정 필요
### 8. State 관리(Redux 도입 예정)

### 9. Apple HealthKit 연동
- 연동 확인 완료 (2021-11-19)


---
## 컴포넌트 별 필요 데이터

### Drink 컴포넌트
- 금일 시간별 음수량 데이터 (0시 ~ 24시)
### Chart 컴포넌트
- 지난 일주일 간의 일별 음수량 데이터
### Alarm 컴포넌트
- Firebase와 연동된 알람 데이터
- `react-native-push-notification`으로 알람데이터를 firebase에 저장할 예정
### Profile 컴포넌트
- HealthKit에서 불러온 데이터를 렌더링할 예정
