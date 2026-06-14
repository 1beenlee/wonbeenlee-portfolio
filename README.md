# Personal Knowledge Base & Portfolio Source

Wonbeen Lee의 개인 지식 베이스(Personal Knowledge Base) 및 포트폴리오 웹사이트 개발을 위한 중심 저장소입니다.

## 저장소 역할 및 작업 흐름 (Repository Role & Workflow)

이 저장소(`wbeen-personal-kb`)는 모든 개발 작업과 문서 작성의 **단일 진실 공급원(Single Source of Truth, SSOT)**입니다.

### 🔄 배포 및 동기화 흐름 (Sync & Deployment)

모든 작업은 **반드시 이 폴더 내에서만 수행**해야 합니다. 배포 전용 저장소인 `wonbeenlee-portfolio`로 직접 가셔서 코드를 수정하지 마십시오.

1. **로컬 작업 및 검증**:
   - 이 폴더에서 기능 개발, 이력 변경 및 검증을 완료합니다.
   - 로컬 구동에 필요한 비밀 정보(`.wbeen-secrets` 등)는 이 로컬 폴더에만 안전하게 남겨두고 작업합니다.
2. **지식 베이스 백업**:
   - 수정 사항을 원격 저장소 `1beenlee/wbeen-personal-kb`에 커밋/푸시합니다. (비밀 정보는 `.gitignore`에 의해 자동으로 업로드에서 제외됩니다.)
3. **포트폴리오 배포 저장소로 복사**:
   - 검증이 완료된 공개용 코드만 `C:\Users\s_talentlee52\wonbeenlee-portfolio` 폴더로 복사합니다.
4. **최종 배포**:
   - 복사 완료 후 `wonbeenlee-portfolio` 폴더에서 `1beenlee/wonbeenlee-portfolio` 저장소로 push합니다.
   - Vercel이 push된 신규 코드를 감지하여 자동으로 실제 사이트에 배포를 반영합니다.

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
npm run build
```

## Content Model

Portfolio copy lives in `src/content`.

- `profile.shared.ts` contains shared profile metadata.
- `profile.internal.ko.ts` and `profile.internal.en.ts` contain the main portfolio copy.
- `profile.public.ko.ts` and `profile.public.en.ts` inherit internal copy and override public route metadata.

Sensitive details such as real customer data, internal URLs, Jira issue keys, page IDs, server names, secrets, tokens, and private evaluation material must not be committed.
