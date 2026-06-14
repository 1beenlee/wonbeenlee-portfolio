# Liquid Glass 제한적 적용 개선 요청문서

## 목적

현재 포트폴리오 웹은 Cobalt / Teal Graphite 톤의 B2B SaaS 포트폴리오입니다. 전체 UI는 차분하고 신뢰감 있는 방향을 유지하되, 일부 핵심 인터랙션에만 Liquid Glass 계열의 고급스러운 굴절감을 더하고 싶습니다.

이번 요청의 핵심은 "전체 카드에 강한 유리 효과를 입히는 것"이 아니라, 현재 디자인 시스템을 해치지 않는 선에서 Liquid Glass를 제한적 강조 효과로 재도입하는 것입니다.

## 작업 대상

- 로컬 기준 폴더: `C:\Users\s_talentlee52\wbeen-personal-kb`
- 기술 스택: React + Vite + TypeScript
- 현재 주요 라우트:
  - `/` internal Korean portfolio
  - `/en` internal English portfolio
  - `/public` public Korean portfolio
  - `/public/en` public English portfolio
- 배포용 GitHub repo `1beenlee/wonbeenlee-portfolio`는 release target입니다. 우선 로컬 `wbeen-personal-kb`에서 검증 후 반영합니다.

## 현재 상태 요약

이전에 `liquid-glass-react`를 도입해 Hero orbit, Case Study CTA, modal header, Contact cards에 적용하려 했으나 레이아웃 붕괴와 성능 저하가 발생했습니다. 이후 안정화를 위해 해당 라이브러리 적용은 전면 철회했고, 현재 사이트는 정상 레이아웃으로 복구된 상태입니다.

현재 남아 있는 `.liquid-glass-card`는 실제 Liquid Glass라기보다 기존 glassmorphism / ambient glass 카드 스타일입니다. 이름은 과거 구현의 흔적이며, 새로 도입하는 실제 굴절 효과와 혼동하지 않는 것이 좋습니다.

## 이전 실패에서 반드시 피해야 할 문제

이전 구현에서 가장 큰 문제는 Liquid Glass 래퍼가 기존 카드/버튼/모달 레이아웃 내부의 실제 flex/grid item으로 들어가면서, 라이브러리 내부 `.glass`/SVG filter/warp 레이어가 비정상적인 intrinsic width와 height를 만들었다는 점입니다.

관찰된 문제:

- Case Study CTA 주변에서 `33554432px` 수준의 비정상 layout width 발생
- `.synthetic-preview`가 오른쪽 preview 영역에서 밀리거나 빈 박스/회색 막대처럼 보임
- Contact card가 원래 `90px` 내외의 컴팩트 카드에서 `700px+` 높이로 늘어남
- Modal header가 고정 높이/빈 레이어처럼 보이며 제목과 close button 정렬이 깨짐
- Hero orbit satellite 카드 내부 텍스트와 코어 레이어가 어색하게 잘리거나 흐려짐
- 전체 스크롤이 버벅거리고 paint/reflow 부담이 커짐

따라서 새 구현에서는 Liquid Glass 효과 레이어가 문서 흐름의 크기 계산에 영향을 주면 안 됩니다. 실제 콘텐츠 구조는 원래 DOM이 담당하고, Liquid Glass는 가능하면 absolute overlay, pseudo layer, 또는 독립된 accent shell로만 작동해야 합니다.

## 적용 범위

Liquid Glass는 다음 영역에만 제한적으로 적용합니다.

1. Hero ProductOrbit
   - `.core-inner`
   - `.satellite-card`
   - 단, 텍스트 가독성과 orbit 레이아웃을 절대 깨지 않도록 합니다.

2. Case Study 상세 보기 CTA 또는 Modal header
   - 모든 Case card 전체가 아니라 CTA/button surface 또는 modal header의 얇은 accent 정도만 적용합니다.
   - `.synthetic-preview` 영역과 case card grid 구조는 건드리지 않는 것이 안전합니다.

3. Contact CTA hover state
   - Contact card 기본 상태는 현재 compact ambient glass 유지
   - hover 가능한 desktop pointer 환경에서만 은은한 accent를 허용
   - 모바일에서는 hover 의존 효과를 제거하거나 거의 보이지 않게 유지

## 구현 자유도

구현 방식은 자유롭게 선택해도 됩니다. 다만 아래 원칙은 지켜주세요.

- `liquid-glass-react`를 재도입해도 되지만, 먼저 isolated prototype 또는 한 요소에만 적용해 layout rect를 검증한 뒤 확장합니다.
- 라이브러리를 쓰지 않고 CSS-only / SVG filter / canvas / pseudo-element 방식으로 구현해도 됩니다.
- 효과의 강도보다 레이아웃 안정성, 텍스트 가독성, 스크롤 성능이 우선입니다.
- Cobalt / Teal Graphite의 차분한 톤을 유지합니다. 과한 투명도, 강한 blur, 무지개빛 aberration, 과도한 animation은 피합니다.

## 권장 설계 방향

### 1. 콘텐츠와 효과 레이어 분리

원래 콘텐츠 DOM은 그대로 둡니다.

예시:

```tsx
<div className="satellite-card">
  <div className="liquid-accent-layer" aria-hidden="true" />
  <div className="sat-card-content">
    ...
  </div>
</div>
```

`liquid-accent-layer`는 `position: absolute; inset: 0; pointer-events: none; contain: paint;`로 두고, 실제 카드의 width/height 계산에 영향을 주지 않게 합니다.

### 2. wrapper 대신 overlay 우선

버튼이나 카드 전체를 라이브러리 컴포넌트로 감싸는 방식은 위험했습니다. 특히 CTA/button 안에서 wrapper가 flex item이 되면 preview grid 전체가 밀릴 수 있습니다.

가능하면 다음 구조를 선호합니다.

```tsx
<button className="case-cta-btn">
  <span className="liquid-accent-layer" aria-hidden="true" />
  <span className="case-cta-content">상세 보기</span>
</button>
```

### 3. Hero orbit은 가장 먼저 검증

Hero ProductOrbit는 시각적으로 가장 중요한 실험 영역입니다. 단, 작은 카드가 많고 absolute positioning을 쓰므로 쉽게 깨질 수 있습니다.

권장:

- `.core-inner`는 circular accent를 얹되 `AI / Product OS` 텍스트는 원래 flex center 구조 유지
- `.satellite-card`는 현재 크기와 위치를 유지
- background material은 아주 약한 grid/arc/noise 정도만 사용
- mouse-follow highlight는 throttling하거나 CSS variable update 범위를 카드 hover 중으로 제한

### 4. 배경 재료는 약하게

Liquid Glass가 굴절할 시각 재료가 필요하므로 Hero orbit 뒤에 얇은 grid/arc/noise를 둘 수 있습니다.

권장 강도:

- opacity `0.04 ~ 0.08`
- 텍스트 영역과 겹치지 않도록 mask/radial fade 사용
- 움직임은 없거나 매우 느리게
- `prefers-reduced-motion: reduce`에서는 정적 처리

### 5. 성능 원칙

아래는 제한적으로만 사용합니다.

- `filter: blur(...)`
- SVG displacement filter
- `backdrop-filter`
- mousemove 기반 CSS variable update
- `will-change`
- continuous animation

권장:

- `will-change`는 hover/active 상태에서만 사용
- large blur blob은 정적이거나 opacity transition 정도로 제한
- viewport 밖 요소에 비싼 filter를 상시 적용하지 않기
- 모바일에서는 효과를 축소하거나 ambient glass fallback 사용

## `liquid-glass-react` 재도입 시 주의사항

재도입 자체는 가능하지만 다음 방식으로 접근해주세요.

1. dependency 설치 전후 bundle/build 확인
2. Hero `.core-inner` 한 곳에만 먼저 실험
3. DOM rect 검사로 비정상 width/height가 없는지 확인
4. Case CTA, modal header, contact hover 순서로 확장
5. 각 단계마다 Chrome desktop + mobile viewport 검증

이전처럼 아래 패턴은 피합니다.

- `.case-card` 전체를 감싸기
- `.synthetic-preview` 또는 preview container를 감싸기
- `.contact-card` 전체를 hover glass component로 감싸기
- `.modal-panel` 전체를 감싸기
- 라이브러리 내부 `.glass`가 flex/grid item으로 참여하게 두기
- `height: 100%` 또는 `width: 100%`가 부모 계산을 왜곡하는 구조

만약 라이브러리 내부 구조가 안전하게 제어되지 않으면, 해당 라이브러리 사용을 포기하고 CSS-only accent로 구현하는 편이 낫습니다.

## 권장 효과 강도

정확한 값은 구현 방식에 따라 조정해도 됩니다.

Hero core:

- 굴절/warp는 가장 강하게 허용
- blur는 약하게
- saturation은 `120 ~ 145%` 정도
- aberration/chromatic 효과는 거의 보이지 않을 정도

Satellite cards:

- core보다 약하게
- hover 시에만 살짝 살아나는 정도
- 카드 텍스트 contrast 우선

Case CTA / Contact CTA:

- pill/button surface 위주
- hover 시 edge highlight와 아주 약한 refraction
- layout width/height가 절대 변하지 않아야 함

Modal header:

- 전체 모달이 아니라 header 안쪽 surface 또는 border highlight만
- close button focus ring과 접근성 유지

## 현재 복구 기준값

최근 복구 후 브라우저에서 확인된 정상 기준입니다. 새 구현 후 이 수치에서 크게 벗어나지 않아야 합니다.

Desktop 1365px 기준:

- `.satellite-card`: 약 `150px x 82px`
- `.core-inner`: 약 `100px x 100px`
- `.case-cta-btn`: 약 `131px x 44px`
- `.synthetic-preview`: 약 `435px` 폭, case별 높이 `300 ~ 430px`
- `.contact-card`: 약 `284px x 90px`
- `document.body.scrollWidth`: viewport 안쪽 정상 범위
- `.liquid-glass-accent`, `.glass`, `.contact-hover-glass` 등 이전 실패 레이어는 현재 0개

Mobile 390px 기준:

- 가로 overflow 없음
- `document.documentElement.scrollWidth`가 viewport 안쪽
- Contact card 높이 `90px`
- Hero orbit 카드가 화면 밖으로 과도하게 밀리지 않음

## 검증 체크리스트

반드시 아래를 확인해주세요.

### 정적 검증

```bash
npm run build
npx eslint .
```

참고: `npm run lint`는 현재 copy checker까지 포함합니다. 기존 한국어 카피 안의 영문 표현 때문에 실패할 수 있으므로, 레이아웃 구현 검증은 `npx eslint .`와 `npm run build`를 별도로 확인해도 됩니다.

### 브라우저 검증

Chrome desktop:

- Hero orbit에서 core/satellite 텍스트가 잘리지 않는지
- 배경 굴절감이 은은하게 보이는지
- 스크롤이 버벅이지 않는지

Case Study:

- 4개 case card의 오른쪽 preview가 빈 박스/회색 막대 없이 표시되는지
- CTA 버튼이 원래 크기와 위치를 유지하는지
- `?case=ai-skills` deep link에서 modal header와 close button이 깨지지 않는지

Contact:

- desktop hover에서만 accent가 보이는지
- card 높이가 90px 내외로 유지되는지
- mobile에서는 hover 의존 UI가 없어도 자연스러운지

Layout rect 검사:

```js
(() => {
  const maxAbs = Math.max(
    0,
    ...Array.from(document.querySelectorAll("body *")).flatMap((el) => {
      const r = el.getBoundingClientRect();
      return [Math.abs(r.x), Math.abs(r.y), Math.abs(r.width), Math.abs(r.height)];
    })
  );

  return {
    hugeLayoutValue: maxAbs > 1000000 ? maxAbs : null,
    badLayers: document.querySelectorAll(
      ".liquid-glass-accent,.contact-hover-glass,.case-cta-glass,.modal-header-glass,.satellite-glass-accent,.core-glass-accent,.glass"
    ).length,
    bodyWidth: document.body.scrollWidth,
    viewportWidth: innerWidth
  };
})();
```

기대값:

- `hugeLayoutValue: null`
- `bodyWidth <= viewportWidth` 또는 scrollbar 보정 수준
- 이전 실패 레이어가 의도 없이 다시 생기지 않을 것

## 제안 구현 순서

1. 현재 정상 레이아웃을 baseline으로 캡처
2. `.liquid-glass-card`의 의미를 문서상 ambient glass로 유지하거나 `.ambient-glass-card` alias를 확실히 사용
3. `LiquidGlassAccent` 또는 유사한 accent layer 컴포넌트를 만들 경우, wrapper가 아니라 overlay 전용으로 설계
4. Hero `.core-inner`에만 첫 적용
5. Hero `.satellite-card`로 확장
6. Case CTA 또는 modal header 중 하나에 적용
7. Contact hover에 desktop-only accent 적용
8. 각 단계마다 build, DOM rect, desktop/mobile screenshot 확인

## 최종 기대 결과

사이트 전체가 "유리 카드 데모"처럼 보이면 안 됩니다. 기존 B2B SaaS 포트폴리오의 차분한 정보 구조는 유지되어야 합니다.

좋은 결과는 다음에 가깝습니다.

- 첫 화면 Hero orbit에서만 "조금 더 고급스럽다"는 인상
- Case CTA나 modal header에서만 미세한 tactile accent
- Contact hover에서만 가벼운 반응성
- 카드 본문, 긴 텍스트, preview, modal content는 안정적이고 읽기 쉬움
- 성능은 현재 복구된 상태와 거의 동일

## Antigravity에게 요청하는 판단

Liquid Glass 효과를 꼭 특정 라이브러리로 구현할 필요는 없습니다. 실제 제품 품질 기준으로 보았을 때 더 안정적이라면 CSS-only accent, SVG overlay, pseudo-element, canvas 기반 등 더 나은 방식을 선택해도 됩니다.

다만 이전 실패처럼 레이아웃을 깨뜨리거나 스크롤 성능을 무겁게 만드는 접근은 피해주세요. 구현의 성공 기준은 "강한 효과"가 아니라 "제한된 영역에서만 품질감이 올라가고, 나머지 UI는 안정적으로 유지되는 것"입니다.
