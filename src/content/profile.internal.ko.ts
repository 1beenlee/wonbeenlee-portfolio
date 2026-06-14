import type { SiteCopy } from "./types";

export const internalKo: SiteCopy = {
  meta: {
    audience: "internal",
    locale: "ko",
    label: "AI 구매 PM 포트폴리오",
    alternatePath: "/en"
  },
  nav: [
    { label: "하는 일", href: "#positioning" },
    { label: "주요 작업", href: "#work" },
    { label: "운영 체계", href: "#productOps" },
    { label: "지표", href: "#metrics" },
    { label: "스택", href: "#stack" },
    { label: "커리어", href: "#timeline" },
    { label: "연락", href: "#contact" }
  ],
  hero: {
    title: "구매 SaaS, Agentic AI, Product Ops를 연결하는 Caidentia PM",
    subtitle:
      "emro에서 AI 기반 SRM/S2P SaaS인 Caidentia의 글로벌 제품 기획을 맡고 있습니다. 제품 기획, Jira 기반 실행체계, AI Workplace 전략, 시장 인사이트, 대외 커뮤니케이션 자산을 반복 가능한 운영 체계로 연결합니다.",
    primaryAction: "주요 사례 보기",
    primaryHref: "#work",
    secondaryAction: "Korean"
  },
  profileCard: {
    eyebrow: "대표 미리보기",
    summary:
      "재구성한 엔터프라이즈 SaaS 화면은 업무 흐름만 보여줍니다. 내부 제품 화면, URL, 고객 데이터, 이슈 키, 페이지 ID, 서버명, 구현 세부정보는 공개하지 않습니다.",
    highlights: [
      { label: "직무", value: "Global Product Manager" },
      { label: "도메인", value: "SRM/S2P SaaS" },
      { label: "담당", value: "Agentic AI + Product Ops" }
    ]
  },
  sections: {
    positioning: {
      kicker: "Positioning / 하는 일",
      title: "복잡한 구매 업무를 운영 가능한 제품 체계로 정리합니다.",
      body:
        "제 일은 Caidentia 제품 기획, AI 업무 설계, Jira-Confluence 운영 루틴, 시장 대응 커뮤니케이션이 만나는 지점에 있습니다. AI를 단발성 생산성 도구로 보지 않고, 구매 객체, 권한, 기획 산출물, 릴리스 루틴, 검토 가능한 흐름 위에 올립니다.",
      pillars: [
        {
          title: "구매 도메인 깊이",
          body:
            "PR, RFx, 계약, PO, ASN, 입고, 인보이스, 품목, 공급사, 지출 맥락, 역할 기반 접근권한 위에서 SRM/S2P 제품을 기획합니다."
        },
        {
          title: "흐름으로 보는 Agentic AI",
          body:
            "검색, 채팅, 에이전트 모드, 파일 인사이트, 권한, 결과 검토, 안전한 다음 행동을 연결하는 AI Workplace 방향성을 설계합니다."
        },
        {
          title: "Product Ops 실행 체계",
          body:
            "Jira와 Confluence를 기반으로 이슈 계층, 재사용 템플릿, 릴리스 커뮤니케이션, 의사결정 기록, 인계 루틴을 구조화합니다."
        }
      ]
    },
    selectedWork: {
      kicker: "주요 작업",
      title: "AI, Product Ops, 데모 준비, 기획 AX를 잇는 4가지 근거 기반 사례.",
      body:
        "각 사례는 제품 문제, 운영 루틴, 업무 설계 판단, 확인 가능한 결과를 중심으로 정리했습니다. 실제 Jira 키, 내부 URL, 페이지 ID, 고객명, 담당자명, 비공개 시스템 세부정보는 제외했습니다.",
      cases: [
        {
          id: "agentic-ai",
          label: "사례 A",
          title: "구매 업무를 위한 Agentic AI와 AI Workplace",
          category: "Ask Caidentia / AI Workplace",
          problem:
            "엔터프라이즈 구매 사용자는 여러 메뉴, 문서, 역할, 권한을 오가며 일합니다. AI가 구매 객체, 접근 규칙, 검색 결과, 다음 행동과 연결되지 않으면 일반 챗봇만으로는 실제 업무 흐름에 들어가기 어렵습니다.",
          contribution:
            "읽기 전용 문서 검색, 연속 질의응답, 메뉴 이동, 더보기 동작, 권한 기반 응답, Chat, Agent Mode, File Insight를 묶는 AI Workplace 방향을 기획했습니다. PR-to-RFx 자동화, 평가 의견 초안, 문서 검색 v2, 내부 에이전트 도구와도 연결되는 흐름입니다.",
          outcome:
            "MVP/Beta 기능에서 AI Workplace 방향으로 이어지는 구매 특화 AI UX 구조를 잡는 데 기여했습니다. 내부 화면, 구현 세부정보, 민감한 로드맵은 공개 범위에서 제외했습니다.",
          metrics: [
            "구매 객체를 이해하는 AI 흐름",
            "권한을 반영하는 AI 상호작용 모델",
            "Chat, Agent Mode, File Insight를 잇는 AI Workplace 방향"
          ],
          previewTitle: "AI Workplace 업무 흐름",
          previewSteps: [
            "사용자 의도",
            "업무 객체 감지",
            "권한 확인",
            "결과 검토",
            "다음 에이전트 행동"
          ],
          tags: [
            "재구성 화면",
            "민감 정보 익명화",
            "고객 데이터 없음",
            "근거 기반"
          ],
          summary: "Agentic AI와 워크플로우를 자동화하여 구매 요청부터 승인, 기록까지 전 과정을 연결하는 AI Workplace 방향을 기획했습니다.",
          highlights: [
            "구매 객체 및 접근 권한 기반 AI 상호작용 모델 기획",
            "문서 검색 v2, PR-to-RFx 자동화 등 에이전트 워크플로우 설계",
            "Chat, Agent Mode, File Insight를 통합하는 AI Workplace 방향성 수립"
          ],
          cardMetrics: [
            { label: "구매 객체를 이해하는 AI 흐름" },
            { label: "권한을 반영하는 AI 상호작용 모델" },
            { label: "AI Workplace 방향성 수립" }
          ]
        },
        {
          id: "ai-skills",
          label: "사례 B",
          title: "제품 기획 AX를 위한 AI Skill 생태계",
          category: "AI Skills / Product Planning AX",
          problem:
            "유용한 프롬프트가 개인 습관에 머무르면 AI 도입은 확장되기 어렵습니다. 검토 가능한 흐름, 표준, 재사용 가능한 운영 자산으로 바뀌어야 팀 역량이 됩니다.",
          contribution:
            "Jira 운영, 기획 문서, 용어 관리, 프로토타입 생성, 산출물 리뷰, 릴리스 지원, 사용자 흐름, 제품 포트폴리오 자산을 다루는 AI Skill 생태계를 구축했습니다. 아이디어 접수에서 기획, 시각화, 검토, 릴리스 커뮤니케이션으로 이어지는 파이프라인으로 AI를 정리했습니다.",
          outcome:
            "프롬프트 사용을 제품 기획 AX를 위한 반복 가능한 업무 생태계로 전환했습니다. 9개 이상의 AI Skill과 15회 이상의 버전 업데이트가 기획, 리뷰, Jira, 릴리스, 프로토타입 흐름 전반에 쌓였습니다.",
          metrics: [
            "9개 이상 AI Skill",
            "15회 이상 Skill 버전 업데이트",
            "아이디어에서 릴리스까지 이어지는 기획 파이프라인"
          ],
          previewTitle: "AI Skill 생태계 지도",
          previewSteps: [
            "접수",
            "기획",
            "프로토타입",
            "리뷰",
            "릴리스"
          ],
          tags: [
            "재구성 화면",
            "민감 정보 익명화",
            "근거 기반",
            "반복 가능한 흐름"
          ],
          summary: "제품 기획 AX(Agile Transformation)를 위해 planning-doc-writer, term-manager, caid-ppg-design-system, prototype-template-maker, user-flow, output-reviewer, caid-jira, linear-pm, compound-engineering, release-prep 등 기획 업무 전반을 자동화하고 자기개선하는 10종의 맞춤형 AI 스킬 생태계를 구축했습니다.",
          highlights: [
            "기획서 작성, 표준 용어 번역, 프로토타입 생성 등 10대 전용 스킬 정의",
            "Jira/Linear 연동을 통한 기획 백로그 구조화 및 실시간 이관 자동화",
            "사용자 피드백 백로그 기반의 지속적 개선(Compound Engineering) 모델 탑재"
          ],
          cardMetrics: [
            { value: "10종", label: "맞춤형 AI 스킬" },
            { value: "15회+", label: "스킬 버전 업데이트" },
            { value: "v3.5.0", label: "대표 스킬 최신 버전" }
          ],
          skillsList: [
            {
              name: "planning-doc-writer",
              version: "v3.5.0",
              updatedAt: "2026-03-26",
              description: "MRD, One Pager, PRD, FRD, Lo-fi 와이어프레임 및 여정 지도(UJM) 기획 문서 일괄 생성",
              principle: "Ready 조건 체크와 영향도 분석을 거쳐, 모듈/SKU와 페르소나 정의에 기반한 마크다운 산출물을 생성하고 Confluence에 자동 퍼블리싱합니다.",
              impact: "기획서 작성 소요 시간 1~2일에서 30분~1시간으로 90% 이상 단축"
            },
            {
              name: "term-manager",
              version: "v2.0.0",
              updatedAt: "2026-06-05",
              description: "표준 용어집 검토 및 다국어 번역 키 일관성 정렬",
              principle: "1,910개 표준용어, 892개 버튼 사전, 12,030개 다국어 라이브러리에 기초해 국/영문 매핑 검사 및 명칭 충돌을 예외처리 규칙에 맞춰 해결합니다.",
              impact: "100개 항목 대량 표준용어/다국어 검토 시간 반나절에서 수 분 이내로 단축"
            },
            {
              name: "caid-ppg-design-system",
              version: "v0.75",
              updatedAt: "2026-06-08",
              description: "기획서 기반 단일 파일 HTML 프로토타입 자동 변환 (UX Layer - Interaction Hint & Prototype Navigator 탑재)",
              principle: "Grayscale Lofi 모드, Caidentia 1.0 Violet 모드, Neo Blue 모드 분기 스타일링을 지원하며, 기획 검토 효율성 및 프로토타입 데모 간편화를 위해 화면 내에 상호작용 위치를 알려주는 'Interaction Hint'와 화면 이동/다국어 리뷰 패널을 제공하는 'Prototype Navigator' UX 레이어를 탑재한 단일 파일 HTML 프로토타입을 자동 생성합니다.",
              impact: "단일 파일 HTML 프로토타입 생성 및 UI 검증 프로세스 2~5일에서 10~30분 이내로 단축"
            },
            {
              name: "prototype-template-maker",
              version: "v1.1.0",
              updatedAt: "2026-05-15",
              description: "로컬에서 즉시 구동 가능한 MDI 탭 화면 구조 템플릿 제작",
              principle: "Mock Data를 포함한 독립 실행형 HTML을 생성하여 실제 서비스 릴리즈 전 레이아웃 및 탭 상호작용 검증 루틴을 단축합니다.",
              impact: "탭 화면 구조 템플릿 제작 및 레이아웃 검증 기간 3일에서 15분 이내로 단축"
            },
            {
              name: "user-flow",
              version: "v1.2.0",
              updatedAt: "2026-05-20",
              description: "User Story 정의 및 Excel QA 테스트 케이스 시드 문서 생성",
              principle: "Figma 와이어프레임 및 기획 요구사항을 JTBD 기준으로 조율해 Excel 형식의 시나리오 및 기능 테스트 케이스를 자동 빌드합니다.",
              impact: "Excel QA 테스트케이스 시나리오 자동 생성으로 기획-QA 연동 프로세스 2시간 이내 단축"
            },
            {
              name: "output-reviewer",
              version: "v1.0.5",
              updatedAt: "2026-06-12",
              description: "기획 산출물 품질 및 표준 용어/디자인 준수 검토",
              principle: "작성된 기획 문서와 유저 플로우 엑셀의 내용 불일치, 다국어 정렬성, 디자인 컴포넌트 라이브러리 가이드 준수 여부를 다차원적으로 평가해 리뷰 리포트를 리턴합니다.",
              impact: "기획서 및 유저 플로우 품질 리뷰 시간 1~2시간에서 10~20분으로 단축 및 정합성 결함률 감소"
            },
            {
              name: "caid-jira",
              version: "v1.5.0",
              updatedAt: "2026-06-01",
              description: "기획 Jira 이슈 이관 및 백로그 연동",
              principle: "Atlassian DC API를 통해 Planning Jira의 이니셔티브와 기능을 조율하며 기획 완료, 디자인 완료, 개발 완료 등의 분기 트랜지션 처리를 자동 수행합니다.",
              impact: "기획 이슈 batch 생성 및 status transition 자동화로 Jira 관리 공수 95% 절감"
            },
            {
              name: "linear-pm",
              version: "v2.1.0",
              updatedAt: "2026-06-10",
              description: "Linear 기반 스프린트 Cycle 및 주간보고(Weekly) 자동화",
              principle: "Linear API를 이용하여 개발 백로그, 이슈 상태, 릴리즈 사이클 진척도를 종합 집계하고 성장 리뷰용 포트폴리오 후보 카드를 기록 보존합니다.",
              impact: "스프린트 Cycle 진척 집계 및 주간보고서(Weekly) 초안 작성 시간 1시간에서 5분으로 단축"
            },
            {
              name: "compound-engineering",
              version: "v0.9.0",
              updatedAt: "2026-06-13",
              description: "사용자 피드백 기반 지속적 자기 개선 엔진",
              principle: "업무 수행 중 감지된 사용자의 교정 행동, 스킬 오류 신호를 수집하여 개선 백로그를 누적하고 스킬 버전업 파이프라인으로 연계합니다.",
              impact: "교정 행동 및 피드백 로그 기반 스킬 자체 버전업 프로세스 자동화"
            },
            {
              name: "release-prep",
              version: "v1.2.0",
              updatedAt: "2026-04-21",
              description: "Caidentia 기능별 릴리즈노트 스니펫 및 데모 시연 대본 제작",
              principle: "Jira 기획 내용, PRD 및 user flow를 읽고, 사내 템플릿 표준에 맞추어 마크다운 포맷의 릴리즈노트 스니펫 초안과 데모 대본 시나리오를 구성합니다.",
              impact: "릴리즈 스니펫 및 시연 대본 작성 공수 80% 절감"
            }
          ]
        },
        {
          id: "product-ops",
          label: "사례 C",
          title: "Jira-Confluence 제품 기획 운영 체계",
          category: "Product Ops",
          problem:
            "목표, 이슈 계층, 요구사항, 릴리스 노트, 상태 추적, 의사결정 기록이 분리되면 제품 기획은 쉽게 불안정해집니다.",
          contribution:
            "기획 계층, 템플릿, 상태 추적, 릴리스 커뮤니케이션, 재사용 문서, 이슈 인계를 Jira-Confluence 기반 운영 루틴으로 구조화했습니다. 같은 체계 안에서 PO Change, Widget Based Home, Contract+AI, Item 360, 릴리스 준비 같은 세부 기획도 다루되, 비공개 이슈 메타데이터는 노출하지 않습니다.",
          outcome:
            "320개 이상의 Jira epic을 구조화했고, 동료 테스트 기준 특정 기획 흐름을 60분에서 5분으로 줄여 해당 흐름에서 12배 효율 개선을 확인했습니다.",
          metrics: [
            "Jira epic 320개 이상 구조화",
            "검증한 기획 흐름에서 12배 효율 개선",
            "Jira-Confluence 기획 및 릴리스 루틴"
          ],
          previewTitle: "기획 운영 보드",
          previewSteps: [
            "목표",
            "이니셔티브",
            "기능 묶음",
            "기능",
            "릴리즈 노트",
            "릴리즈 데모"
          ],
          tags: [
            "재구성 화면",
            "민감 정보 익명화",
            "근거 기반",
            "하나의 검증된 흐름"
          ],
          summary: "제품 발견부터 출시, 피드백 루프까지 이어지는 기획 프로세스를 Jira-Confluence 기반의 운영 루틴으로 구조화했습니다.",
          highlights: [
            "기획 계층, 템플릿, 상태 추적, 릴리스 루틴을 통일된 운영 체계로 설계",
            "PO 변경, 위젯 기반 홈, Contract+AI 등 세부 기능 기획 지원",
            "비공개 이슈 메타데이터 노출 없이 애자일 협업 시스템 연동"
          ],
          cardMetrics: [
            { value: "320+", label: "Jira Epic 구조화" },
            { value: "12x", label: "기획 흐름 효율 개선" },
            { value: "60분 → 5분", label: "기획 완료 소요 시간" }
          ]
        },
        {
          id: "gartner-demo",
          label: "사례 D",
          title: "GTM 데모 지원과 시장 인사이트",
          category: "Market Intelligence in Gartner, Salesforce, SAMSUNG",
          problem:
            "글로벌 SaaS 데모 및 애널리스트 평가(Gartner, Spend Matters, IDC Marketscape, Forrester Research 등)에서는 AI S2P/P2P 가치와 벤치마크 성과를 짧고 명확하게 설명해야 합니다. 제품 내러티브, 데모 데이터, 신속한 이슈 대응, 시장 벤치마킹 맥락이 정렬되어야 우수한 평가를 확보할 수 있습니다.",
          contribution:
            "시나리오 구조, 데모 환경 준비, Storylane형 내러티브, 실시간 이슈 대응, 개발팀 협업, 그리고 Gartner, Spend Matters, IDC Marketscape, Forrester Research 등 주요 글로벌 전문 기관의 애널리스트 벤치마킹 대응을 총괄하여 데모와 시장 분석 지원을 리드했습니다. 공개 범위 준수를 위해 고객 대화, 리드 정보 및 비공개 피드백은 포함하지 않았습니다.",
          outcome:
            "주요 데모 시나리오 3개와 보조 시나리오 9개를 구축하고, 애널리스트 평가 대응을 성공적으로 지원하여 우수한 벤치마크 평가를 획득하는 데 기여했으며, 시장 인사이트 피드백 루프를 수립했습니다.",
          metrics: [
            "시장 정보 수집 활동 3개+",
            "데모 시나리오 9개+",
            "글로벌 리서치 기관 벤치마킹 대응 및 100개 이상의 시장 신호 수집"
          ],
          previewTitle: "데모 지원 및 평가 대응 흐름",
          previewSteps: [
            "영업/애널리스트 요구",
            "데모 데이터 & 벤치마크",
            "시나리오 스크립트",
            "이슈 대응 및 피드백",
            "시장 피드백 & 보고서"
          ],
          tags: [
            "재구성 화면",
            "근거 기반"
          ],
          summary: "글로벌 Gartner 심포지엄, Salesforce Agentforce 등 주요 행사 데모 환경 및 시나리오를 구성하고, 글로벌 리서치 기관(Gartner, Spend Matters, IDC, Forrester) 벤치마크 평가 대응 및 100개 이상의 시장 신호 수집을 총괄하여 우수한 제품 평가를 확보하도록 지원했습니다.",
          highlights: [
            "글로벌 비즈니스 내러티브에 정렬된 스토리라인 기반 GTM 데모 시나리오 기획",
            "글로벌 리서치 기관(Gartner, Spend Matters, IDC, Forrester)의 벤치마크 평가 및 분석 대응 총괄",
            "100개 이상의 시장 정보 수집 및 분석을 통한 제품/영업 협업 정렬"
          ],
          cardMetrics: [
            { value: "3개+", label: "시장 정보 수집 활동" },
            { value: "9개+", label: "데모 시나리오" },
            { value: "100개+", label: "시장 신호 수집" }
          ]
        }
      ]
    },
    productOps: {
      kicker: "Product Ops / AI & 제품 운영체계",
      title: "AI 제품 운영체계와 협업 시스템을 설계합니다.",
      body: "제품 발견부터 시작해 정의, 빌드, 출시, 측정 및 개선 단계로 흐르는 통합적인 제품 운영 루틴을 구축했습니다. AI를 단순한 보조 도구가 아닌, 각 단계의 의사결정과 산출물 품질을 보증하는 시스템으로 연결합니다.",
      stages: [
        {
          id: "discover",
          title: "발견",
          items: ["시장 및 사용자 조사", "문제 정의 검증", "기회 규모 분석"]
        },
        {
          id: "define",
          title: "정의",
          items: ["제품 전략 수립", "로드맵 및 우선순위", "목표 지표 설계"]
        },
        {
          id: "build",
          title: "빌드",
          items: ["애자일 실행", "부서 간 정렬", "사용성 및 품질 확보"]
        },
        {
          id: "launch",
          title: "출시",
          items: ["시장 진입 계획", "변화 관리 체계", "출시 및 교육"]
        },
        {
          id: "measure",
          title: "측정",
          items: ["제품 데이터 분석", "AI 기반 인사이트", "반복적 피드백 루프"]
        }
      ],
      copilotTitle: "AI Copilot",
      copilotBody: "제품 수명 주기 전반에 내장된 인텔리전스로 분석, 예측, 자동화를 연결합니다.",
      copilotFeatures: ["인사이트", "예측", "자동화"],
      loopLabel: "지속적인 순환 개선 루프"
    },
    evidenceMetrics: {
      kicker: "근거 지표",
      title: "범위를 함께 밝히는 지표",
      body:
        "아래 지표는 작업의 규모와 방향을 보여줍니다. 각 설명에는 해당 숫자가 무엇을 포함하고, 공개 포트폴리오에서 무엇을 제외하는지 함께 적었습니다.",
      metrics: [
        {
          label: "구조화한 Jira epic",
          value: "320+",
          note: "기획 계층과 백로그 구조 기준입니다. 실제 이슈 키, URL, 비공개 메타데이터는 공개하지 않습니다."
        },
        {
          label: "효율 개선",
          value: "12x",
          note: "동료 테스트 기준 하나의 기획 흐름이 60분에서 5분으로 줄어든 결과입니다."
        },
        {
          label: "시장 정보 수집 활동",
          value: "3+",
          note: "글로벌 애널리스트 및 GTM 행사 대응을 통한 시장 정보 수집 활동입니다."
        },
        {
          label: "GTM 데모 시나리오",
          value: "9+",
          note: "글로벌 영업 지원 및 데모 시연을 위한 시나리오 묶음입니다."
        },
        {
          label: "AI Skills",
          value: "10+",
          note: "단발성 프롬프트가 아니라 재사용 가능한 제품 기획 업무 흐름입니다."
        },
        {
          label: "Skill 버전 업데이트",
          value: "15+",
          note: "기획, 리뷰, Jira, 릴리스, 프로토타입 흐름에서 반복 개선된 기록입니다."
        },
        {
          label: "LinkedIn 아티클",
          value: "5",
          note: "AI 도입, 업무 설계, 제품 판단, 팀 역량, 거버넌스에 대한 공개 글쓰기 신호입니다."
        }
      ]
    },
    operatingStack: {
      kicker: "운영 스택",
      title: "도구 이름보다 어떤 역량을 가능하게 했는지로 설명합니다.",
      body:
        "이 목록은 로고 나열이 아닙니다. 제품 기획, AI 업무 설계, 시장 인사이트, 데모 준비가 어떻게 반복 가능한 일로 바뀌는지 보여줍니다.",
      items: [
        {
          tool: "Jira",
          capability: "기획 계층, 상태 추적, 실행 리듬, 이슈 인계",
          evidence: "320개 이상 epic과 기획 백로그 구조"
        },
        {
          tool: "Confluence",
          capability: "재사용 문서, 릴리스 맥락, 의사결정 기록, 기획 기억",
          evidence: "Jira-Confluence Product Ops 사례"
        },
        {
          tool: "Storylane / demo tooling",
          capability: "짧은 데모 내러티브, 준비된 시나리오 흐름, 영업 지원 자산",
          evidence: "GTM 데모 지원 및 9개+ 시나리오"
        },
        {
          tool: "AI Skills",
          capability: "반복 가능한 기획 흐름, 용어 검토, 프로토타입 지원, 품질 리뷰, 릴리즈 준비",
          evidence: "10개 이상 Skill, 15회 이상 버전 업데이트",
          hidden: true
        },
        {
          tool: "Figma / synthetic prototypes",
          capability: "공개 가능한 제품 미리보기와 협업 정렬",
          evidence: "실제 내부 화면이 아닌 대표 미리보기"
        },
        {
          tool: "Linear",
          capability: "linear-pm 및 compound-engineering 스킬 연계 작업/피드백 루프 자동화 (노션 운영 fallback 병행)",
          evidence: "체계적인 백로그 관리 및 지속적 프로세스 개선 루프 구축"
        },
        {
          tool: "Workflow Orchestration w/ MCP",
          capability: "AI 보조 기획, 요구사항 검토, 다국어 번역, 개발 인계, 코드 생성 및 업무 흐름 조율",
          evidence: "Claude, ChatGPT, Antigravity, Cursor, Genspark"
        },
        {
          tool: "Compliance & Trust",
          capability: "SOC 2 Type II, ISO/IEC 27001/27017/27018, SAP S/4HANA Certified Integration",
          evidence: "글로벌 엔터프라이즈 신뢰 기준 및 통합 규격 준수",
          hidden: true
        }
      ]
    },
    timeline: {
      kicker: "Career Timeline / 커리어 여정",
      title: "기술 문서화에서 시작해 제품 전체를 조율하는 PM으로 성장했습니다.",
      body: "테크니컬 라이터 시절 다진 체계적인 문서 구조화 능력과 부서 간 정렬 역량을 바탕으로, 복잡한 엔터프라이즈 SaaS 제품의 기획과 운영체계를 설계하는 Product Manager로 전환하여 성과를 만들어내고 있습니다.",
      events: [
        {
          period: "2023 - 현재",
          role: "Global Product Manager",
          company: "emro",
          description: "AI 기반 SRM/S2P SaaS 제품인 Caidentia의 글로벌 제품 기획, Jira 기반 Product Ops 체계 구축, 에이전트 AI 설계 및 시장 대응 데모 시나리오를 주도하고 있습니다.",
          skills: ["제품 전략 및 로드맵", "Jira/Confluence 운영", "Agentic AI 기획"]
        },
        {
          period: "2021 - 2023",
          role: "Technical Writer",
          company: "emro",
          description: "복잡한 제품의 요구사항을 명확히 정의하고 개발자와 사업 부서 간 소통 비용을 낮추는 체계적인 제품 스펙 설계 및 기획 산출물을 작성했습니다.",
          skills: ["문서 구조화", "요구사항 분석", "커뮤니케이션 정렬"]
        }
      ]
    },
    thinkingSignals: {
      kicker: "판단 기준",
      title: "사례를 관통하는 일의 원칙",
      body:
        "이 원칙들은 주요 사례를 연결합니다. 유용한 AI에는 도메인 맥락, 운영 구조, 사람의 검토, 거버넌스가 필요합니다.",
      items: [
        {
          title: "AI는 마법이 아니라 업무 흐름입니다",
          body:
            "중요한 질문은 AI가 한 번 답할 수 있는지가 아니라, 팀이 그 흐름을 반복 운영하고 검토하며 개선할 수 있는지입니다."
        },
        {
          title: "제품 판단은 여전히 중심입니다",
          body:
            "AI는 검색, 초안, 리뷰, 인계를 빠르게 하지만 범위, 위험, 의사결정 품질은 제품 판단이 정합니다."
        },
        {
          title: "반복 가능성이 단발 생산성보다 강합니다",
          body:
            "재사용 가능한 루틴은 검토하고 개선할 수 있기 때문에 영리한 한 번의 프롬프트보다 더 큰 가치가 있습니다."
        },
        {
          title: "표준은 협업의 인터페이스입니다",
          body:
            "템플릿, 용어, 이슈 구조, 릴리스 루틴은 AI 보조 업무를 품질 저하 없이 확장하게 해줍니다."
        },
        {
          title: "구매 AI에는 권한 맥락이 필요합니다",
          body:
            "엔터프라이즈 AI는 역할, 조직 범위, 문서 접근권한, 결과 가시성, 안전한 다음 행동을 존중해야 합니다."
        },
        {
          title: "Skill은 생산성을 역량으로 바꿉니다",
          body:
            "AI Skill은 개인의 업무 개선을 반복 가능한 제품 기획 자산으로 바꿉니다."
        }
      ]
    },
    writing: {
      kicker: "글쓰기 / LinkedIn",
      title: "글쓰기 역시 같은 운영 철학을 보여줍니다.",
      body:
        "공개 글쓰기는 AI를 실제 제품 기획 업무에 들여오는 과정을 다룹니다. 맥락 품질, 반복 가능한 흐름, 팀 역량, 검증, 거버넌스가 중심입니다.",
      items: [
        {
          title: "LinkedIn 게시글",
          body:
            "AI 도입, 제품 판단, 업무 설계, 팀 역량, 거버넌스를 다룬 압축된 공개 신호입니다."
        },
        {
          title: "AI 도입 프레이밍",
          body:
            "AI는 인상적인 단발 결과에서 벗어나 팀이 검토할 수 있는 반복 가능한 흐름이 될 때 현실적인 가치가 생깁니다."
        },
        {
          title: "공개 프로필 연결",
          body:
            "LinkedIn과 GitHub는 글쓰기, 연락, 공개 가능한 제품 인접 작업을 확인할 수 있는 외부 접점입니다."
        }
      ]
    },
    confidentiality: {
      kicker: "비공개 정보 보호",
      title: "공개 포트폴리오와 비공개 세부정보를 분리합니다.",
      body:
        "이 포트폴리오는 제품 판단, 업무 구조, 범위가 명확한 결과를 중심으로 보여주고 비공개 운영 세부정보는 보호합니다.",
      note: {
        title: "공개 범위",
        body:
          "화면은 중립적인 엔터프라이즈 SaaS 미리보기로 재구성했습니다. 내부 URL, 실제 고객 데이터, 이슈 키, 페이지 ID, 서버명, 민감한 로드맵 세부정보, 고객 대화, 비공개 피드백, 평가 자료는 공유하지 않습니다.",
        rules: [
          "대표 화면은 업무 구조를 보여주기 위한 재구성 화면이며 실제 운영 화면이 아닙니다.",
          "고객, 파트너, 개인에 대한 언급은 일반화하거나 익명화합니다.",
          "지표는 실제로 측정한 범위에 맞춰 해석합니다.",
          "사례는 제품 판단, 운영 체계, 결과 중심으로 구성합니다."
        ]
      }
    },
    contact: {
      kicker: "연락",
      title: "제품, AI, Ops에 대해 이야기하기",
      body:
        "협업, 네트워킹, 채용 관련 대화는 LinkedIn으로 연락해 주세요. GitHub에서는 일부 공개 기술 작업과 실험을 확인할 수 있습니다.",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/wonbeenlee/",
          note: "프로필, 글쓰기, 업무 연락"
        },
        {
          label: "GitHub",
          href: "https://github.com/1beenlee",
          note: "공개 기술 작업과 실험"
        }
      ]
    }
  },
  ui: {
    primaryNavigationLabel: "주요 탐색",
    switchLanguageLabel: "언어 전환",
    heroPreviewAriaLabel: "재구성한 엔터프라이즈 SaaS 미리보기",
    heroPreviewChromeTitle: "재구성한 엔터프라이즈 SaaS 화면",
    heroPreviewBadge: "비공개 세부정보 보호",
    previewTableHeaders: ["객체", "범위", "행동"],
    previewTableRows: [
      ["PR-000", "역할 + 조직", "검토"],
      ["RFx-000", "읽기 전용", "이동"]
    ],
    caseProblemLabel: "문제",
    caseContributionLabel: "기여",
    caseOutcomeLabel: "결과",
    syntheticPreviewKicker: "대표 미리보기",
    syntheticPreviewNote: "업무 흐름을 재구성한 화면입니다. 고객 데이터는 포함하지 않습니다.",
    operatingStackAriaLabel: "운영 스택"
  },
  footer: {
    note:
      "AI 기반 구매 제품 기획, Jira 기반 Product Ops, Agentic AI 업무 흐름.",
    backToTop: "맨 위로"
  }
};
