import type { SiteCopy } from "./types";

export const internalKo: SiteCopy = {
  meta: {
    audience: "internal",
    locale: "ko",
    label: "AI 조달 PM 포트폴리오",
    alternatePath: "/en"
  },
  nav: [
    { label: "하는 일", href: "#positioning" },
    { label: "주요 작업", href: "#work" },
    { label: "지표", href: "#metrics" },
    { label: "스택", href: "#stack" },
    { label: "연락", href: "#contact" }
  ],
  hero: {
    title: "조달 SaaS, Agentic AI, Product Ops를 연결하는 Caidentia PM",
    subtitle:
      "emro에서 AI 기반 SRM/S2P SaaS인 Caidentia의 글로벌 제품 기획을 맡고 있습니다. 제품 기획, Jira 기반 실행체계, AI Workplace 전략, 시장 인사이트, 대외 커뮤니케이션 자산을 반복 가능한 운영 체계로 연결합니다.",
    primaryAction: "주요 사례 보기",
    primaryHref: "#work",
    secondaryAction: "English"
  },
  profileCard: {
    eyebrow: "대표 미리보기",
    summary:
      "재구성한 엔터프라이즈 SaaS 화면은 업무 흐름만 보여줍니다. 내부 제품 화면, URL, 고객 데이터, 이슈 키, 페이지 ID, 서버명, 구현 세부정보는 공개하지 않습니다.",
    highlights: [
      { label: "역할", value: "Global Product Manager" },
      { label: "도메인", value: "SRM/S2P SaaS" },
      { label: "초점", value: "Agentic AI + Product Ops" }
    ]
  },
  sections: {
    positioning: {
      kicker: "Positioning / 하는 일",
      title: "복잡한 조달 업무를 운영 가능한 제품 체계로 정리합니다.",
      body:
        "제 일은 Caidentia 제품 기획, AI 업무 설계, Jira-Confluence 운영 루틴, 시장 대응 커뮤니케이션이 만나는 지점에 있습니다. AI를 단발성 생산성 도구로 보지 않고, 조달 객체, 권한, 기획 산출물, 릴리스 루틴, 검토 가능한 흐름 위에 올립니다.",
      pillars: [
        {
          title: "조달 도메인 깊이",
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
          title: "조달 업무를 위한 Agentic AI와 AI Workplace",
          category: "Ask Caidentia / AI Workplace",
          problem:
            "엔터프라이즈 조달 사용자는 여러 메뉴, 문서, 역할, 권한을 오가며 일합니다. AI가 조달 객체, 접근 규칙, 검색 결과, 다음 행동과 연결되지 않으면 일반 챗봇만으로는 실제 업무 흐름에 들어가기 어렵습니다.",
          contribution:
            "읽기 전용 문서 검색, 연속 질의응답, 메뉴 이동, 더보기 동작, 권한 기반 응답, Chat, Agent Mode, File Insight를 묶는 AI Workplace 방향을 기획했습니다. PR-to-RFx 자동화, 평가 의견 초안, 문서 검색 v2, 내부 에이전트 도구와도 연결되는 흐름입니다.",
          outcome:
            "MVP/Beta 기능에서 AI Workplace 방향으로 이어지는 조달 특화 AI UX 구조를 잡는 데 기여했습니다. 내부 화면, 구현 세부정보, 민감한 로드맵은 공개 범위에서 제외했습니다.",
          metrics: [
            "조달 객체를 이해하는 AI 흐름",
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
          ]
        },
        {
          id: "product-ops",
          label: "사례 B",
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
            "릴리스 노트"
          ],
          tags: [
            "재구성 화면",
            "민감 정보 익명화",
            "근거 기반",
            "하나의 검증된 흐름"
          ]
        },
        {
          id: "gartner-demo",
          label: "사례 C",
          title: "Gartner 데모 준비와 시장 인사이트",
          category: "Gartner Supply Chain Symposium/Xpo",
          problem:
            "글로벌 SaaS 데모에서는 AI 기반 S2P/P2P 가치를 짧고 명확하게 설명해야 합니다. 제품 내러티브, 데모 데이터, 이슈 대응, 시장 맥락이 함께 준비되어야 영업팀이 같은 언어로 설명할 수 있습니다.",
          contribution:
            "시나리오 구조, 데모 환경 준비, Storylane형 내러티브, 실시간 이슈 분류, 개발팀 협업, 현장 시장 인사이트를 묶어 데모 준비를 지원했습니다. 공개 문구에서는 고객 대화, 리드, 환경 세부정보, 비공개 피드백을 제외했습니다.",
          outcome:
            "주요 Gartner 데모 시나리오 3개와 보조 시나리오 9개를 바탕으로 제품 역량을 글로벌 영업 언어로 연결했고, 제품과 영업 정렬을 위한 시장 인사이트 피드백 루프를 만들었습니다.",
          metrics: [
            "주요 Gartner 데모 시나리오 3개",
            "보조 Gartner 데모 시나리오 9개",
            "시장 인사이트 피드백 루프"
          ],
          previewTitle: "데모 준비 흐름",
          previewSteps: [
            "영업 요구",
            "데모 데이터",
            "시나리오 스크립트",
            "이슈 분류",
            "시장 피드백"
          ],
          tags: [
            "재구성 화면",
            "민감 정보 익명화",
            "고객 데이터 없음",
            "근거 기반"
          ]
        },
        {
          id: "ai-skills",
          label: "사례 D",
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
          ]
        }
      ]
    },
    evidenceMetrics: {
      kicker: "근거 지표",
      title: "범위를 함께 밝히는 지표.",
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
          label: "주요 Gartner 데모 시나리오",
          value: "3",
          note: "데모 준비를 위한 주요 시나리오 수입니다. 고객과 리드 세부정보는 제외했습니다."
        },
        {
          label: "보조 Gartner 시나리오",
          value: "9",
          note: "영업 지원과 데모 대화를 위한 보조 시나리오 묶음입니다."
        },
        {
          label: "AI Skills",
          value: "9+",
          note: "단발성 프롬프트가 아니라 재사용 가능한 제품 기획 업무 흐름입니다."
        },
        {
          label: "Skill 버전 업데이트",
          value: "15+",
          note: "기획, 리뷰, Jira, 릴리스, 프로토타입 흐름에서 반복 개선된 기록입니다."
        },
        {
          label: "LinkedIn 글",
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
          evidence: "Gartner 데모 준비 사례"
        },
        {
          tool: "AI Skills",
          capability: "반복 가능한 기획 흐름, 용어 검토, 프로토타입 지원, 품질 리뷰",
          evidence: "9개 이상 Skill, 15회 이상 버전 업데이트"
        },
        {
          tool: "Figma / synthetic prototypes",
          capability: "공개 가능한 제품 미리보기와 협업 정렬",
          evidence: "실제 내부 화면이 아닌 대표 미리보기"
        },
        {
          tool: "Claude / ChatGPT / MCP",
          capability: "AI 보조 기획, 리뷰, 검색, 인계, 업무 흐름 조율",
          evidence: "AI Skill 생태계와 Product Ops 업무 흐름"
        }
      ]
    },
    thinkingSignals: {
      kicker: "판단 기준",
      title: "사례를 관통하는 일의 원칙.",
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
          title: "조달 AI에는 권한 맥락이 필요합니다",
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
          title: "LinkedIn 글 5개",
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
      title: "제품, AI 업무 흐름, Product Ops에 대해 이야기할 수 있습니다.",
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
      "AI 기반 조달 제품 기획, Jira 기반 Product Ops, Agentic AI 업무 흐름.",
    backToTop: "맨 위로"
  }
};
