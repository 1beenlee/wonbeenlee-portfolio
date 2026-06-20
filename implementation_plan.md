# Implementation Plan - UI Optimization & Data Correction

본 계획서는 이미지 최적화, 모달, 에코시스템 지도, 그리고 스킬 상세 내용 영역과 좌측 리스트 탭의 UI 사용성 및 강조 피드백 개선을 진행하기 위한 설계와 검증 일정을 명시합니다.

---

## Proposed Changes

### 1. LinkedIn Articles Crop & Format Optimization
- **포맷 및 용량 최적화**: 원본 PNG 파일들을 WebP 포맷(Quality: 95)으로 변환하여 용량을 축소합니다.
- **16:9 비율 유지 크롭**: Part 4, 5의 원본 해상도(1702x951)를 16:9 규격에 가장 가까운 `1690 x 951` 로 크롭하는 `(6, 0, 1696, 951)` 좌표를 적용합니다. 이를 통해 브라우저가 `aspect-ratio: 16 / 9` 영역에 `object-fit: cover`로 이미지를 늘릴 때 추가적인 가로/세로 잘림이 발생하지 않도록 하여, 텍스트가 잘리는 문제(From, What 등)를 원천 차단합니다.

### 2. Code Changes

#### [MODIFY] [App.tsx](file:///c:/Users/s_talentlee52/wbeen-personal-kb/src/App.tsx)
- `PillarGrid` 내에서 LinkedIn 아웃링크 카드에 표시되던 기존 텍스트 화살표 `↗`를 `<ExternalLink size={14} className="outlink-icon" />`로 대체합니다.
- `LinkedInModal` 에 대한 다국어 텍스트 매핑 및 모달 실행 시 `document.body` 스크롤 락 코드를 정비합니다.

#### [MODIFY] [CaseStudyModal.tsx](file:///c:/Users/s_talentlee52/wbeen-personal-kb/src/components/CaseStudyModal.tsx)
- `scrollContentRef` 와 `explorerRef` 를 추가하고, 브라우저 전체가 스크롤되는 부작용이 있는 `scrollIntoView` 대신 모달 내부 컨테이너만 정밀하게 스크롤하도록 `container.scrollTo` 방식을 사용합니다. 
  - container 기준 상대 top 위치(`relativeTop = targetRect.top - containerRect.top + container.scrollTop`)를 계산하여 모달 하단이 붕 떠서 빈 검정 여백이 생기는 현상을 방지합니다.
- 하단의 `AiSkillsEcosystemMap`을 호출할 때 `isColumnLayout={true}` 속성을 넘겨주어 Transpose 레이아웃을 사용하도록 설정합니다.
- `pulseActive` 상태와 `triggerPulse`, `selectSkill` 공통 핸들러를 구현하여, 스크롤 이동이 동반되는 경우(모달 진입 또는 생태계 맵 스킬 클릭) 스크롤 완료 후에 강조 펄스를 발동하고, 즉각 변경 시(좌측 탭 직접 클릭) 즉시 강조 펄스를 발동하도록 제어합니다.
- `selectorListRef` 를 추가하고 `activeSkillIdx` 감지 훅을 구현하여, 활성화된 스킬 탭 버튼이 화면 밖에 숨어 있을 때 왼쪽 스크롤 리스트 영역(`.skills-selector-list`)을 `listContainer.scrollTo` 처리해 자동으로 화면의 세로 중앙에 포커싱되도록 스크롤을 연동합니다.

#### [MODIFY] [CaseStudyCards.tsx](file:///c:/Users/s_talentlee52/wbeen-personal-kb/src/components/CaseStudyCards.tsx)
- `AiSkillsEcosystemMap` 컴포넌트가 `isColumnLayout` prop을 받아 `column-layout`, `ecosystem-column-v3`, `vertical-stack` 구조로 Transpose되어 가로 5열 (Intake ~ Release) 및 하위 스킬 세로 목록으로 렌더링되도록 구현합니다.

#### [MODIFY] [styles.css](file:///c:/Users/s_talentlee52/wbeen-personal-kb/src/styles.css)
- GNB navigation pulse highlight 구조와 유사한 `.skill-details-panel.pulse-highlight` 클래스 및 `@keyframes skill-pulse-border` 애니메이션을 신규 추가합니다.

---

## Verification Plan

### Automated Tests
- `npx tsc --noEmit` 타입 체크 실행

### Manual Verification
- **LinkedIn 아티클 모달 검증**:
  - Part 4/5 슬라이드의 글자("From personal prompts...", "What this changed...")가 짤림 없이 다 보이는지 점검
- **Case B 모달 검증**:
  - 메인 생태계 지도에서 특정 스킬 노드 클릭 시 모달이 켜지며 "구축된 AI 스킬 탐색기" 섹션으로 자동 스크롤되는지 점검
  - 스크롤 이동 후 모달 하단 또는 브라우저 창 전체에 UI 밀림(붕 뜨는 현상 및 하단 여백)이 없는지 정밀 점검
  - 모달 하단 생태계 지도가 5열 Column Layout으로 Transpose되었는지 점검
  - 스크롤 완료 후 또는 탭 클릭 후 상세 카드 패널의 테두리가 네온 펄스 하이라이트 되는지 검증
  - 가려져 있던 아래쪽 스킬(예: `caid-jira`)을 메인이나 하단 맵에서 클릭해 진입 시, 왼쪽 스킬 리스트 영역에서 해당 탭 버튼이 자동으로 중앙에 정렬되어 잘 노출되는지 점검
- **아웃링크 아이콘 검증**:
  - 카드 내 아웃링크 아이콘이 ExternalLink 아이콘으로 잘 바뀌었는지 및 hover 애니메이션 점검
