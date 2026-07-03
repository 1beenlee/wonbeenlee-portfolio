import type { SiteCopy } from "./types";

export const internalKo: SiteCopy = {
  meta: {
    audience: "internal",
    locale: "ko",
    label: "AI Product PM Portfolio",
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
    title: "복잡한 구매 SaaS 문제를 해결하고, AI 레버리지와 Product Ops로 실행력을 극대화하는 Product Manager",
    subtitle:
      "emro에서 글로벌 SRM/S2P SaaS인 Caidentia의 제품 기획을 담당하고 있습니다. AI를 단순한 개별 생산성 도구에 그치지 않고, 팀의 실행 병목을 자동화하고 안정적인 프로세스 가드레일을 설계하며 반복 가능한 운영 체계(Product Ops)로 정립합니다.",
    primaryAction: "주요 사례 보기",
    primaryHref: "#work",
    secondaryAction: "English"
  },
  profileCard: {
    eyebrow: "대표 미리보기",
    summary:
      "재구성한 엔터프라이즈 SaaS 화면은 업무 흐름만 보여줍니다. 내부 제품 화면, URL, 고객 데이터, 이슈 키, 페이지 ID, 서버명, 구현 세부정보는 공개하지 않습니다.",
    highlights: [
      { label: "직무", value: "Global Product Manager" },
      { label: "도메인", value: "SRM/S2P SaaS" },
      { label: "담당", value: "AI Leverage + Product Ops" }
    ]
  },
  sections: {
    positioning: {
      kicker: "Positioning / 하는 일",
      title: "복잡한 구매 업무를 운영 가능한 제품 체계로 정리합니다.",
      body:
        "제 역할은 비즈니스 및 제품 설계의 비효율을 식별하고, 이를 지속 가능하고 반복 가능한 운영 체계로 표준화하는 데 있습니다. AI는 이 모든 프로세스를 가속하는 강력한 레버리지 레이어(Leverage Layer)이며, 언제나 인간의 기획적 판단과 품질 가드레일 아래에서 안정적으로 동작하도록 제어합니다.",
      pillars: [
        {
          title: "구매 도메인 깊이",
          body:
            "PR, RFx, 계약, PO, ASN, 입고, 인보이스, 품목, 공급사, 지출 맥락, 역할 기반 접근권한 위에서 SRM/S2P 제품을 기획합니다."
        },
        {
          title: "AI Leverage & Guardrail",
          body:
            "검색, 에이전트, 파일 분석을 연결하는 AI Workplace를 설계하며, AI의 환각과 권한 침해를 방어하는 품질 검증 가드레일을 함께 구축합니다."
        },
        {
          title: "Product Ops & 업무 흐름",
          body:
            "Jira와 Confluence를 통합하여 요구사항의 접수부터 릴리즈까지의 파이프라인을 자동화하고, 팀이 반복하여 재사용 가능한 운영 루틴을 수립합니다."
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
            "[Problem Context]\n엔터프라이즈 구매 사용자는 다수의 메뉴, 문서, 시스템 역할과 복잡한 접근 권한을 오가며 업무를 처리합니다. AI를 단순히 질문에 답변하는 범용 챗봇 형태로 제공할 경우, 복잡한 구매 업무 흐름과 권한 가이드라인에 맞지 않아 실무 도입에 한계가 존재했습니다.\n\n[Product Judgment]\n챗봇 중심의 접근 대신, 구매 도메인의 핵심 속성(PR, RFx, 계약 등) 및 권한 계층을 명확히 정의하여 AI가 올바른 Context 내에서만 행동하도록 제한했습니다. 또한, AI가 최종 판단을 내려 행동하기 전에 반드시 인간 PM/사용자가 검증할 수 있는 단계를 제품 정책으로 수립했습니다.",
          contribution:
            "[Planning & Execution]\nConfluence 기반의 요구사항 스펙 및 피쳐 셋을 정의하고, Jira를 활용해 Chat, Agent Mode, File Insight를 통합하는 제품 로드맵을 구축했습니다. PR-to-RFx 업무 전환 시 필요한 권한 확인 절차와 중간 기획 검토 단계를 기획서 및 Figma 상호작용 흐름으로 구조화했습니다.\n\n[AI Leverage]\n엔터프라이즈 문서 검색(RAG) v2, 평가 의견 자동 초안 생성, PR 데이터를 RFx 상세 요건으로 가공하는 과정에 맞춤형 AI 모델과 프롬프트를 접목하여 반복적인 스펙 가공 리드타임을 가속했습니다.",
          outcome:
            "[Review & Guardrail]\nAI의 권한 침해를 방어하기 위해 역할 기반 접근 권한(RBAC)을 AI 검색 필터링에 통합했습니다. 사용자가 AI의 생성 결과를 확인한 후에만 다음 비즈니스 행동으로 진입할 수 있도록 안전 검토 장치(Guardrail)를 UX 레이어로 정비했습니다.\n\n[Outcome & Impact]\nMVP/Beta 단계의 AI 기능을 단일 업무가 아닌 '구매 특화 AI Workplace'로 통합 발전시키는 UX 구조와 보안 가이드를 정립하여, 기획 및 승인 루프의 안전성을 향상시켰습니다.",
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
          summary: "기획-개발-QA 파이프라인의 비효율을 제거하기 위해 10종의 맞춤형 AI 스킬을 활용한 기획 업무 프로세스(AX)를 구축했습니다. AI의 생성 속도에 인간 PM의 엄격한 검토 기준(Quality Gate)을 결합하여, 기획 산출물의 품질을 높이면서 전체 리드타임을 90% 이상 단축했습니다.",
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
            "[Problem Context]\n기획 스펙 생성, 용어 번역, 프로토타입 검증, 릴리즈 노트 가공 등의 작업이 파편화되어 기획 부서의 병목이 생겼으며, AI 프롬프트를 단순히 개인의 생산성 향상에 머무르면 팀 전체의 역량과 표준 품질로 전환되기 어려웠습니다.\n\n[Product Judgment]\n기획 업무 전반을 AI로 완전 자동화하는 무리한 시도 대신, '인간 PM의 최종 검토 및 승인(Human-in-the-loop)'을 무조건 거치는 엄격한 품질 기준(Quality Gates)을 정의했습니다. 또한, 다국어 및 UI 규격에 충돌이 없도록 AI의 입력 및 출력 사양을 사전 정책으로 규제했습니다.",
          contribution:
            "[Planning & Execution]\n요구사항 발견(Intake)에서부터 요구사항 정의(PRD), HTML 프로토타입 검증, Jira 백로그 이관, 릴리즈 통보로 이어지는 5단계 제품 기획 라이프사이클을 정의하고, 각 흐름에 적합한 10종의 전용 AI 도구 파이프라인을 설계했습니다.\n\n[AI Leverage]\n맞춤형 AI 스킬(planning-doc-writer, user-flow 등)들을 활용하여 PRD 마크다운 작성 및 Excel QA 시나리오 생성을 대량 자동화하여 기획의 초안 가공 공수를 극적으로 감축했습니다.",
          outcome:
            "[Review & Guardrail]\nAI 환각(Hallucination) 방지를 위해 `output-reviewer`로 용어 정합성을 사후 검증하고, i18n 리뷰 및 조작 영역을 시각화하는 `Prototype Navigator (Interaction Hint 탑재)` UX 레이어를 HTML 템플릿에 내장해 사람이 품질을 정밀 통제하게 했습니다. 또한, 교정 로그를 수집하여 AI 성능을 자율 개선하는 `compound-engineering` 모델을 구축했습니다.\n\n[Outcome & Impact]\n10종의 AI 스킬 생태계 구축 및 지속적 피드백 루틴 정립을 통해 100개 항목 표준용어 검토 시간 수 분 이내 단축 및 PRD 작성 시간 90% 이상을 절감하여 기획의 일관성을 확보했습니다.",
          metrics: [
            "10개 이상 AI Skill",
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
            "[Problem Context]\n엔터프라이즈 제품 기획 과정에서 로드맵, 상세 스펙 요구사항, 릴리즈 커뮤니케이션, 변경 이력 및 의사결정 기록이 분절되어 협업 부서 간 정렬이 어렵고 진척 상황의 투명성이 저하되는 병목이 있었습니다.\n\n[Product Judgment]\n단순한 이슈 트래킹에 그치지 않고, Jira의 에픽(Epic)과 제품 기능 묶음(Feature Set)을 비즈니스 목표 지표와 1:1로 결합하는 구조적 정책을 수립했습니다. 또한 기획 완료(Definition of Ready)의 엄격한 통제 필터를 두었습니다.",
          contribution:
            "[Planning & Execution]\n320개 이상의 Jira Epic을 일관된 계층으로 매핑하고, Confluence를 단일 진실 공급원(Single Source of Truth)으로 삼아 릴리즈 스니펫 작성 및 의사결정 이력을 구조화하여 제품 발견부터 출시까지의 루트를 관리했습니다.\n\n[AI Leverage]\nAtlassian DC API와 AI 스킬(`caid-jira`, `linear-pm`)을 접목해 반복적인 기획 이슈 batch 생성 및 status transition 처리를 기획 프로세스에 내장하여 시스템 관리 오버헤드를 낮추었습니다.",
          outcome:
            "[Review & Guardrail]\n기획 보안 규정 준수를 위해 내부 메타데이터와 대외 공개용 리소스의 범위를 사전에 물리적으로 차단하고, Confluence 릴리즈 노트 자동 발행 전 정합성을 PM이 직접 서명 및 확인하는 승인 단계를 설계했습니다.\n\n[Outcome & Impact]\n기획 및 협업 인계 운영체계를 표준화하여 동료 테스트 기준 특정 기획 흐름의 시간비용을 12배 개선 (60분에서 5분으로 단축) 하였으며 개발-기획 정렬율을 높였습니다.",
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
          summary: "여러 도구를 오가며 발생했던 기획 및 릴리즈 정보의 분절을 해결하기 위해 Jira-Confluence를 단일 소스(Single Source of Truth)로 삼는 기획 운영 체계(Product Ops)를 구축했습니다. AI를 오케스트레이션 도구로 삼아 일관성 있는 이니셔티브-기능 매핑 프로세스를 확보하고 협업 오버헤드를 줄였습니다.",
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
            "[Problem Context]\n글로벌 SaaS 데모 및 외부 전문 리서치 기관(IDC, Forrester, Hackett 등) 평가에 효과적으로 대응하기 위해서는 짧은 시간 내에 AI S2P/P2P의 가치와 벤치마크 성과를 신뢰성 있는 데이터와 함께 명확히 증명해야 했습니다.\n\n[Product Judgment]\n모든 기획 기능의 복잡한 동작을 보여주는 무리한 데모 대신, 핵심 비즈니스 내러티브에 정렬된 3대 주요 스토리라인과 9대 보조 시나리오를 정의하여 애널리스트 및 잠재 고객의 의사결정 맥락과 부합시켰습니다.",
          contribution:
            "[Planning & Execution]\nStorylane을 활용한 인터랙티브 데모 내러티브 환경을 구성하고, 글로벌 리서치 기관 평가 항목에 대응하는 제품 분석 데이터 자료집을 정비하여 애널리스트 벤치마킹 대응을 총괄 지원했습니다.\n\n[AI Leverage]\nJira 기획 사양서 및 PRD 데이터로부터 애널리스트 질문 답변 및 글로벌 릴리즈노트 스니펫 초안을 다국어로 신속 가공하는 데 AI 스킬(`release-prep`)을 연동해 대응력을 극대화했습니다.",
          outcome:
            "[Review & Guardrail]\n글로벌 규격(SOC 2 Type II, ISO/IEC 인증 및 SAP Certified Integration) 준수 여부 및 비공개 고객 피드백이 노출되지 않도록 가이드라인 필터를 설정하고 데모 데이터 보안 검수를 실행했습니다.\n\n[Outcome & Impact]\n글로벌 전문 리서치 기관 평가에서 Major Player 및 50 to Know 제품 선정을 달성하는 데 기여하고, 100개 이상의 시장 요구 신호를 수집하여 제품 로드맵에 피드백 루프를 수립했습니다.",
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
          summary: "글로벌 Gartner 심포지엄 등 주요 행사 데모 환경과 시나리오를 구성하고, 글로벌 리서치 기관(IDC, Forrester, Hackett 등) 벤치마크 평가용 설명 데이터를 정비해 제품이 우수한 외부 평가를 확보하도록 지원했습니다.",
          highlights: [
            "글로벌 비즈니스 내러티브에 정렬된 스토리라인 기반 GTM 데모 시나리오 기획",
            "글로벌 리서치 기관(IDC, Forrester, Hackett 등)의 벤치마크 평가용 기획/기능 데이터 준비 및 대응 지원",
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
          tool: "MCP 기반 업무 흐름 오케스트레이션",
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
          period: "2025 - 현재",
          role: "Global Product Manager",
          company: "emro",
          description: "AI 기반 SRM/S2P SaaS 제품인 Caidentia의 글로벌 제품 기획, Jira 기반 Product Ops 체계 구축, 에이전트 AI 설계 및 시장 대응 데모 시나리오를 주도하고 있습니다.",
          skills: ["제품 전략 및 로드맵", "Jira/Confluence 운영", "Agentic AI 기획", "커뮤니케이션 정렬"]
        },
        {
          period: "2024 - 2025",
          role: "Technical Writer",
          company: "emro",
          description: "복잡한 제품의 요구사항을 명확히 정의하고 개발자와 사업 부서 간 소통 비용을 낮추는 체계적인 제품 스펙 설계 및 기획 산출물을 작성했습니다.",
          skills: ["문서 구조화", "요구사항 분석", "다국어(i18n) 관리", "제품 문서화"]
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
      title: "배움과 철학을 글쓰기를 통해 나눕니다",
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
          title: "경험과 지식의 나눔",
          body:
            "다양한 채널에서 보고, 듣고, 실험해 보며 얻은 생생한 배움과 철학을 기록하고 공유합니다."
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
