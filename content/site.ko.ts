import { assetPaths, contactLinks } from "@/lib/portfolio-config";
import type { SiteContent } from "@/lib/types";

export const siteKo: SiteContent = {
  locale: "ko",
  languageName: "한국어",
  seo: {
    title:
      "Wonbeen Lee — Global Product Manager | AI-enabled B2B SaaS, Product Ops, SRM/S2P",
    description:
      "AI 기반 B2B SaaS, 프로덕트 기획 시스템, 워크플로우 설계, SRM/S2P 영역에 집중하는 원빈 리의 포트폴리오입니다."
  },
  nav: {
    switcherLabel: "언어",
    sections: [
      { id: "impact", label: "임팩트" },
      { id: "work", label: "주요 작업" },
      { id: "about", label: "소개" },
      { id: "writing", label: "인사이트" },
      { id: "resume", label: "이력 요약" },
      { id: "contact", label: "연락" }
    ]
  },
  hero: {
    eyebrow: "AI-enabled Global Product Manager",
    title: "복잡한 엔터프라이즈 워크플로우를 명확하고 확장 가능한 제품 구조로 바꿉니다.",
    summary:
      "emro에서 Caidentia를 맡고 있는 Global Product Manager입니다. SRM/S2P SaaS를 중심으로 프로덕트 기획, 워크플로우 설계, 크로스펑셔널 실행, 그리고 AI 활용을 실제 제품 운영에 연결하는 일에 집중하고 있습니다.",
    currentRole: "Global Product Manager at emro",
    location: "Tokyo, Japan",
    ctas: [
      { label: "이력서 보기", href: assetPaths.resume },
      {
        label: "LinkedIn",
        href: contactLinks.linkedinHref,
        external: true
      },
      { label: "연락하기", href: "#contact" }
    ]
  },
  impact: {
    title: "Selected Impact",
    intro:
      "엔터프라이즈 업무의 복잡성을 정리하고, 기획과 실행의 정확도를 높여 온 경험을 공개 가능한 범위 안에서 정리했습니다.",
    items: [
      {
        title: "글로벌 SRM/S2P 제품 기획 담당",
        detail:
          "emro에서 Caidentia의 제품 기획을 맡아 복잡한 이해관계와 요구사항을 우선순위, 기획 산출물, 실행 기준으로 정리해 왔습니다."
      },
      {
        title: "기획·UX·개발 간 전달 구조 정비",
        detail:
          "기획 문서, 리뷰 흐름, 협업 패턴을 구조화해 팀이 더 적은 모호함으로 움직일 수 있도록 만들었습니다."
      },
      {
        title: "엔터프라이즈 지향 B2B 실행 지원",
        detail:
          "GC Company에서 6개월간 크로스펑셔널 B2B 운영과 데이터 기반 실행을 지원하며 엔터프라이즈 계약 확보와 연결된 업무에 기여했습니다."
      },
      {
        title: "Moawordle 기획 및 운영",
        detail:
          "한국어 Wordle 프로젝트 Moawordle을 기획·운영하며 50,000명 이상의 유니크 플레이어와 180,000회 이상의 플레이를 만들었습니다."
      }
    ]
  },
  work: {
    title: "Work Highlights",
    intro:
      "대외 공개가 가능한 수준에서, 복잡한 업무를 어떻게 구조화하고 제품 실행으로 연결했는지를 보여주는 사례 요약입니다.",
    cases: [
      {
        title: "엔터프라이즈 제품 기획 체계 정비",
        context:
          "Caidentia는 여러 업무 흐름과 이해관계자가 얽힌 SRM/S2P 영역의 제품입니다.",
        problem:
          "기획의 품질과 재현 가능성을 높이면서도 실행 속도를 떨어뜨리지 않는 방식이 필요했습니다.",
        role:
          "기획 구조 정리, 요구사항 해석, 제품 범위 구체화를 담당했습니다.",
        approach:
          "기획 산출물, 리뷰 지점, 핸드오프 흐름을 정리해 논의와 실행이 이어지기 쉬운 형태로 만들었습니다.",
        outcome:
          "기획과 실행의 진행 방식에 일관성을 더하고, 관계자 간 정렬을 수월하게 하는 기반을 만들었습니다."
      },
      {
        title: "AI 활용을 실무형 제품 운영에 연결",
        context:
          "AI에 대한 관심은 빠르게 커졌지만, 실제로 어떤 업무에 어떻게 적용할지가 더 중요했습니다.",
        problem:
          "AI를 추상적으로 말하는 대신, 기획 품질과 실행 지원에 어떻게 기여할지 구체화해야 했습니다.",
        role:
          "AI 활용 주제를 정리하고 이를 제품 기획과 운영 체계의 문맥에 연결했습니다.",
        approach:
          "요약, 구조화, 기획 지원처럼 실제 워크플로우에 바로 연결할 수 있는 사용 사례에 집중했습니다.",
        outcome:
          "새로움 자체보다 실행 가치에 초점을 둔 현실적인 AI 활용 관점을 정리했습니다."
      },
      {
        title: "조달 복잡도를 제품 판단 구조로 전환",
        context:
          "조달 및 공급사 관련 워크플로우는 의존성과 이해관계자가 많아 요구사항이 빠르게 복잡해집니다.",
        problem:
          "업무 로직을 그대로 전달하는 대신 제품, UX, 개발이 함께 다룰 수 있는 구조로 바꿔야 했습니다.",
        role:
          "업무 복잡성을 제품 관점으로 번역하고 우선순위와 협업 입력값을 정리했습니다.",
        approach:
          "문제를 분해하고 책임 경계와 의사결정 단위를 명확히 해 제품 기획 입력으로 재구성했습니다.",
        outcome:
          "무엇을 만들지, 어디서부터 논의를 시작할지에 대한 모호함을 줄였습니다."
      },
      {
        title: "Moawordle의 린 운영",
        context:
          "Moawordle은 한국어 Wordle을 바탕으로 한 경량 사이드 프로젝트였습니다.",
        problem:
          "운영 복잡도를 크게 늘리지 않으면서도 실제 사용자가 반복 방문하는 경험을 만들어야 했습니다.",
        role:
          "제품 방향 설정, 개발 조율, 지표 확인을 맡았습니다.",
        approach:
          "범위를 작게 유지하고 반복 사용을 만드는 핵심 경험에 집중했습니다.",
        outcome:
          "낮은 운영 부담으로 50,000명 이상의 유니크 플레이어와 180,000회 이상의 플레이를 달성했습니다."
      }
    ]
  },
  about: {
    title: "About",
    paragraphs: [
      "저는 B2B SaaS, 프로덕트 오퍼레이션, 워크플로우 설계, 그리고 AI 기반 시스템이 만나는 지점에서 일합니다. 현재는 복잡한 엔터프라이즈 업무를 더 명확하고 실행 가능한 제품 구조로 바꾸는 데 집중하고 있습니다.",
      "제 강점은 무엇을 만들지 정의하는 것에 그치지 않고, 그것이 실제로 굴러가게 하는 운영 기반까지 함께 설계하는 데 있습니다. 기획 산출물, 리뷰 흐름, UX 협업, 이해관계자 정렬을 하나의 실행 구조로 다룹니다.",
      "앞으로는 일본과 글로벌 환경에서 명확한 커뮤니케이션, 크로스펑셔널 실행력, 현실적인 AI 활용이 중요한 제품 조직과 더 깊이 일하고자 합니다."
    ]
  },
  writing: {
    title: "Writing & Insights",
    intro:
      "앞으로 공개 글로 발전시킬 주제들입니다. 현재는 제가 제품 일을 어떤 문제의식으로 바라보는지 보여주는 신호 역할을 합니다.",
    items: [
      {
        tag: "AI x Product Ops",
        title: "AI는 제품 실무 어디에서 효과가 나는가",
        summary:
          "기획 지원, 요약, 구조화 같은 장면에서 AI가 실제 업무 품질을 어떻게 높일 수 있는지 정리합니다."
      },
      {
        tag: "Enterprise UX",
        title: "운영 복잡도를 다루는 제품 설계",
        summary:
          "인터페이스 이전에 업무 흐름을 어떻게 구조화해야 더 나은 UX가 나오는지에 대한 관점을 다룹니다."
      },
      {
        tag: "Global PM",
        title: "팀과 시장을 넘어 읽히는 제품 커뮤니케이션",
        summary:
          "문서, 의사결정, 협업 구조를 어떻게 설계하면 글로벌 지향 팀에서도 더 잘 작동하는지 고민합니다."
      }
    ]
  },
  resume: {
    title: "Resume Snapshot",
    intro:
      "글로벌 프로덕트 역할 관점에서 중요한 경력, 학력, 수상, 언어 정보를 빠르게 파악할 수 있도록 정리했습니다.",
    snapshot: {
      experience: [
        {
          title: "Global Product Manager",
          subtitle: "emro Inc. · Caidentia",
          period: "2024.09 – Present",
          detail:
            "글로벌 SRM/S2P SaaS의 제품 기획을 맡아 워크플로우 구조화, 요구사항 해석, 기획 산출물 정리, AI 활용 관점 정리에 이르기까지 폭넓게 담당하고 있습니다."
        },
        {
          title: "B2B Team Intern",
          subtitle: "GC Company",
          period: "2024.03 – 2024.08",
          detail:
            "B2B 운영과 데이터 기반 실행 지원을 담당하며 엔터프라이즈 계약 확보와 연결된 업무를 지원했습니다."
        },
        {
          title: "Earlier product and startup experience",
          subtitle: "DiningCode, fanCake, Konkuk University",
          period: "2020 – 2022",
          detail:
            "엔터프라이즈 제품 업무 이전에 제품, 스타트업 실행, 서비스 운영의 기반을 쌓았습니다."
        }
      ],
      education: [
        {
          title: "Global Business Certificate",
          subtitle: "University of Washington",
          period: "2022 – 2023",
          detail: "GPA 3.86/4.0"
        },
        {
          title: "BA in Media and Communication",
          subtitle: "Konkuk University",
          period: "2017 – 2025",
          detail: "GPA 3.64/4.0"
        },
        {
          title: "BA in Human ICT",
          subtitle: "Konkuk University",
          period: "2017 – 2025",
          detail: "융합전공 · GPA 3.91/4.0"
        }
      ],
      awards: [
        {
          title: "Frontier Spirit Award",
          subtitle: "emro Inc.",
          period: "2026.01",
          detail:
            "주도적인 오너십과 제품 기획 기준, AI 관련 시도에 대한 기여를 인정받았습니다."
        },
        {
          title: "Excellence Award in Digital Market Idea Competition",
          subtitle: "KB Securities",
          period: "2022.05",
          detail:
            "가족 단위 금융 학습을 돕는 서비스 아이디어 제안으로 수상했습니다."
        },
        {
          title: "Excellence Award in Preliminary Start-up Package",
          subtitle: "KISED",
          period: "2021.11",
          detail:
            "정부 지원 스타트업 프로그램에서의 성과를 인정받았습니다."
        }
      ],
      languages: [
        "한국어 — 원어민",
        "영어 — 실무 수준",
        "일본어 — 기초 / 제한적 업무 가능 수준"
      ],
      resumeLabel: "이력서 다운로드"
    }
  },
  contact: {
    title: "Contact",
    intro:
      "AI 기반 B2B SaaS, 엔터프라이즈 소프트웨어, 또는 글로벌 지향 제품 조직의 역할에 대해 이야기 나누고 싶다면 편하게 연락 주세요.",
    items: [
      {
        label: "Email",
        value: contactLinks.emailAddress,
        href: contactLinks.emailHref
      },
      {
        label: "LinkedIn",
        value: contactLinks.linkedinLabel,
        href: contactLinks.linkedinHref
      },
      {
        label: "GitHub",
        value: contactLinks.githubLabel,
        href: contactLinks.githubHref
      }
    ]
  },
  footer: {
    note: "엔터프라이즈 제품, 워크플로우 설계, AI 기반 시스템에 초점을 둔 다국어 공개 포트폴리오입니다."
  },
  ui: {
    heroMetaLabels: {
      currentRole: "현재 역할",
      location: "거점"
    },
    workCaseLabels: {
      context: "배경",
      problem: "과제",
      role: "역할",
      approach: "접근",
      outcome: "결과"
    },
    aboutSidebarTitle: "집중 영역",
    aboutSidebarItems: [
      "AI 기반 B2B SaaS",
      "프로덕트 기획 시스템",
      "엔터프라이즈 워크플로우 설계",
      "크로스펑셔널 실행",
      "일본·글로벌 기회"
    ],
    resumeSectionLabels: {
      experience: "경력",
      educationAwards: "학력·수상",
      languages: "언어"
    }
  }
};
