# Portfolio Deployment Release

Wonbeen Lee의 공개 포트폴리오 웹사이트 배포를 전용으로 관리하는 저장소입니다.

## 저장소 역할 및 동기화 정책 (Repository Role & Sync Policy)

⚠️ **경고**: 이 저장소(`wonbeenlee-portfolio`)에서 코드를 **직접 수정하지 마십시오.**

이 저장소는 오직 공개 웹사이트 배포를 위한 릴리스 용도로만 사용됩니다. 모든 작업의 중심이자 단일 진실 공급원(SSOT)은 로컬의 **`wbeen-personal-kb`** 저장소입니다.

### 🔄 동기화 및 배포 절차

코드를 업데이트하여 실제 서비스에 배포하고 싶을 때는 항상 다음 절차를 따릅니다.

1. **로컬 `wbeen-personal-kb` 폴더**에서 문서 변경 및 개발 작업을 수행하고 검증합니다.
2. 로컬에서 빌드 테스트(`npm run build`)가 정상 완료된 것을 확인합니다.
3. 비밀 파일이 제외된 공개 소스 코드들을 이 폴더(`wonbeenlee-portfolio`)에 복사하여 덮어씁니다.
4. 이 폴더에서 `main` 브랜치에 변경 사항을 커밋하고 `origin main`으로 Push합니다.
5. Vercel이 Push를 감지하여 자동으로 프로덕션 배포를 완료합니다.

---

## Routes

- `/` - internal Korean portfolio
- `/en` - internal English portfolio
- `/public` - public-ready Korean portfolio
- `/public/en` - public-ready English portfolio

## Development

```powershell
npm install
npm run dev
```

## Validation

```powershell
npm run lint:copy
npm run lint
```

## Content Model

Portfolio copy lives in `src/content`.

- `profile.shared.ts` contains shared profile metadata.
- `profile.internal.ko.ts` and `profile.internal.en.ts` contain the main portfolio copy.
- `profile.public.ko.ts` and `profile.public.en.ts` inherit internal copy and override public route metadata.

Sensitive details such as real customer data, internal URLs, Jira issue keys, page IDs, server names, secrets, tokens, and private evaluation material must not be committed.
