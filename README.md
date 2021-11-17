# whealth_UI
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
### 4. Chart Component 디자인
- Donut Chart 도입 (2021-11-14)
### 5. Alarm Component 디자인
- Alarm 목록 UI 제작 (2021-11-14)
### 6. Profile Component 디자인
- HealthKit 데이터 출력 방식 설정 (2021-11-14)
### 7. 로그인 Component 디자인
- UI 자체 디자인 완료 (기능 구현 필요) (2021-11-14)
- 로그인 페이지로 로딩되는 파트 수정 필요
### 8. State 관리(Redux 도입 예정)

---
## 컴포넌트 별 필요 데이터

### Drink 컴포넌트
- 금일 시간별 음수량 데이터 (0시 ~ 24시)
- 
### Chart 컴포넌트
- 지난 일주일 간의 일별 음수량 데이터
### Alarm 컴포넌트
- Firebase와 연동된 알람 데이터
- `react-native-push-notification`으로 알람데이터를 firebase에 저장할 예정
### Profile 컴포넌트
- HealthKit에서 불러온 데이터를 렌더링할 예정
