# 📝 포트폴리오 메타데이터 & 썸네일 업데이트 가이드

이 프로젝트는 공개용(Public)과 내부용(Internal) 경로 외에도, **한글(`/` 및 `/public`)** 경로와 **영문(`/en` 및 `/public/en`)** 경로의 소셜 미디어 크롤러(카카오톡, 링크드인, 슬랙 등) 공유 카드가 각 언어에 맞게 완벽하게 분리되어 표시되도록 구성되어 있습니다.

메타데이터(타이틀, 설명, 썸네일 이미지)를 업데이트할 때는 **아래 규칙을 반드시 준수하여 한글과 영문 버전을 동시에 업데이트**해 주세요.

---

## 📌 1. 업데이트 규칙 (Update Rule)

메타 태그를 수정할 때는 두 개의 HTML 엔트리 포인트를 모두 수정해야 합니다.

1. **한글 버전 메타 수정**: 
   * 파일: [index.html](file:///C:/Users/s_talentlee52/wonbeenlee-portfolio/index.html)
   * 내용: 한글 타이틀, 설명, 그리고 한글 썸네일 이미지 주소 (`og-image.png`)
2. **영문 버전 메타 수정**: 
   * 파일: [index.en.html](file:///C:/Users/s_talentlee52/wonbeenlee-portfolio/index.en.html)
   * 내용: 영문 타이틀, 설명, 그리고 영문 썸네일 이미지 주소 (`og-image-en.png`)

---

## 🖼️ 2. 썸네일 이미지 경로 (Thumbnail Image Assets)

썸네일 이미지는 `public` 폴더 내에 저장되며, 각각 빌드 및 배포 시 최상위 도메인 주소로 제공됩니다.

* **한글 썸네일**: `public/og-image.png` (배포 주소: `https://wonbeenlee-portfolio.vercel.app/og-image.png`)
* **영문 썸네일**: `public/og-image-en.png` (배포 주소: `https://wonbeenlee-portfolio.vercel.app/og-image-en.png`)

> 💡 **Tip**: 썸네일 이미지를 새로 캡처하거나 교체할 경우, 두 파일의 이름을 각각 `og-image.png`와 `og-image-en.png`로 지정하여 `public/` 디렉토리에 덮어씌우면 됩니다.

---

## ⚙️ 3. 기술적 작동 방식 (Vercel & Vite)

* **Vite 다중 빌드 (`vite.config.ts`)**:
  Vite 빌드 시 `index.html`과 `index.en.html`이 각각 `dist/index.html` 및 `dist/index.en.html`로 독립 컴파일됩니다.
* **Vercel Edge Rewrite (`vercel.json`)**:
  소셜 크롤러나 사용자가 `/en` 또는 `/public/en` 주소로 첫 요청을 보낼 때, Vercel Edge 서버단에서 자동으로 영문 메타데이터가 적용된 `index.en.html`을 즉시 서빙합니다.
* **동적 i18n 동기화 (`App.tsx`)**:
  페이지가 완전히 로드된 이후에는 React App 내의 `useDocumentMeta` Hook이 동작하여 브라우저의 DOM 메타 태그를 사용자의 언어팩 상태에 맞춰 동적으로 실시간 업데이트합니다.

---

### ⚠️ 중요: 개발 디렉토리 복사 규칙 (SSOT)
모든 개발 작업의 단일 진실 공급원(SSOT)은 `wbeen-personal-kb` 디렉토리입니다.
메타데이터 수정 작업을 마친 후에는 반드시 아래 파일을 양방향으로 동기화해 주시기 바랍니다:
* `index.html`
* `index.en.html`
* `vercel.json`
* `vite.config.ts`
* `public/favicon.svg` 및 썸네일 이미지들
