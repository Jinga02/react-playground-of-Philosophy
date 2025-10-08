# React Playground of Philosophy

> **React의 철학을 글이 아닌 ‘실험’으로 체험하는 인터랙티브 러닝랩(Learning Lab)**

---

## 🎯 프로젝트 개요

**React Playground of Philosophy**는  
React의 핵심 철학과 동작 원리를 **직접 실험을 통해 체득할 수 있도록 설계된 인터랙티브 학습 사이트**입니다.

React의 본질인

> “UI는 상태의 함수다 (UI = f(state))”  
> “컴포넌트는 계산이고, 부수효과는 분리된다”  
> “불완전성은 선언적으로 다룬다”

라는 원리를 단순히 *읽는 글*이 아니라  
**직접 코드로 조작하고 비교하며 ‘왜 그렇게 동작해야 하는가’를 몸으로 이해하도록 만드는 실험 환경**입니다.

---

## 🧭 프로젝트 목표

| 구분                  | 설명                                                                               |
| --------------------- | ---------------------------------------------------------------------------------- |
| **1. 철학적 이해**    | React의 개념을 API가 아닌 철학적 맥락으로 이해합니다. (“왜 이런 구조인가?”)        |
| **2. 실험 중심 학습** | 명령형 ↔ 선언형, 조건문 ↔ Suspense 등 개념의 전환을 직접 체험합니다.               |
| **3. 설계 역량 증명** | React의 철학을 실제 설계와 구현 원칙으로 전환해, 사고 수준에서 체득합니다.         |
| **4. 설명 능력 강화** | 개념을 시각화·실험화하며 학습자에게 전달할 수 있는 커뮤니케이션 역량을 개발합니다. |

---

## 🧱 프로젝트 구조

### 프로젝트 구조 설계 의도

```text
src/
├── app/
│   ├── routes/              # 실험 페이지를 라우팅
│   │   └── labs/
│   │       ├── declarative.tsx
│   │       ├── suspense.tsx
│   │       ├── compound.tsx
│   │       ├── headless.tsx
│   │       └── polymorphic.tsx
│   ├── providers/
│   │   ├── BoundaryProviders.tsx  # 전역 경계 처리 (Suspense, ErrorBoundary 등)
│   │   └── QueryProvider.tsx      # 데이터 패칭 설정 (useSuspenseQuery 등)
│   └── index.tsx
│
├── shared/
│   ├── ui/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Box.tsx
│   │   │   └── Skeleton.tsx
│   │   ├── molecules/
│   │   │   ├── CounterControls.tsx
│   │   │   └── ErrorDisplay.tsx
│   │   └── organisms/
│   │       ├── Modal.tsx
│   │       └── Layout.tsx
│   ├── hooks/
│   │   ├── useToggle.ts
│   │   └── useFetch.ts
│   └── utils/
│       ├── delay.ts
│       └── logger.ts
│
├── features/
│   ├── declarative/
│   │   ├── ui/
│   │   │   ├── DeclarativeCounter.tsx
│   │   │   └── ImperativeCounter.tsx
│   │   └── logic/
│   │       └── compareLogic.ts
│   ├── suspense/
│   │   ├── ui/
│   │   │   └── SuspenseDemo.tsx
│   │   └── logic/
│   │       └── fetchWithThrow.ts
│   ├── compound/
│   │   ├── ui/
│   │   │   └── CompoundTabs.tsx
│   │   └── logic/
│   │       └── tabsLogic.ts
│   ├── headless/
│   │   ├── ui/
│   │   │   └── HeadlessListView.tsx
│   │   └── logic/
│   │       └── headlessLogic.ts
│   └── polymorphic/
│       ├── ui/
│       │   └── PolymorphicUseCase.tsx
│       └── logic/
│           └── polymorphicLogic.ts
│
├── assets/
└── styles/

```

- `shared/` 폴더는 여러 실험 모듈이 공통으로 쓰는 UI 컴포넌트, 훅, 유틸을 집중적으로 관리
- `features/` 폴더는 각 개념 실험 단위를 별도의 모듈로 구분, UI와 로직 책임을 내부에서 나눔
- `app/providers/` 계층은 전역 경계 처리 및 데이터 패칭 설정 책임을 맡음
- `app/routes/labs/`는 실험 모듈들을 URL 경로로 연결해 사용자 접근성을 단순화함

## ⚙️ 기술 스택

| 목적                    | 기술                                         |
| ----------------------- | -------------------------------------------- |
| **문서 & 코드 통합**    | MDX (`@mdx-js/react`)                        |
| **코드 실험 환경**      | sandpack-react / react-live                  |
| **상태 & 경계 관리**    | TanStack Query v5 + Suspense + ErrorBoundary |
| **스타일 시스템**       | TailwindCSS + shadcn/ui (MDN 문서 스타일)    |
| **시각화 & 애니메이션** | Framer Motion / React Flow                   |
| **빌드 & 배포**         | Vite + pnpm + Vercel                         |

---

네! 현업 표준에 맞춰 브랜치 전략을 수정하겠습니다.

## 🌿 GitHub 브랜치 전략

이 프로젝트는 혼자 개발하지만 **팀 협업 수준의 코드 관리 체계**를 유지하기 위해
PR 기반의 브랜치 전략을 사용합니다.

- 모든 작업은 `feature/` 브랜치에서 시작하며,
  **Draft PR → Self Review → Rebase Merge → main** 흐름으로 관리됩니다.
- `main` 브랜치는 항상 **배포 가능한 상태**를 유지하고,
  **Rebase Merge** 방식을 통해 깔끔한 linear 이력을 보장합니다.

**브랜치 구조**

- `main`: 안정적 배포 및 기능 통합 브랜치
- `feature/*`: 기능 개발 및 실험 단위 브랜치 (예: `feature/declarative-rendering`, `feature/routing-system`)
- `hotfix/*`: 긴급 수정 및 버그 해결용 단기 브랜치

**커밋 규칙**

- [Conventional Commits](https://www.conventionalcommits.org/) 규칙 준수
  예)

  - `feat: Declarative Rendering 실험 추가`
  - `fix: 라우팅 전환 시 상태 초기화 버그 수정`
  - `docs: Headless 컴포넌트 설명 추가`
  - `refactor: 코드 구조 개선 (기능 변경 없음)`
  - `chore: 설정, 빌드, 의존성 등 관리성 작업`

### 🎫 이슈 관리 전략

**이슈 라벨링**

- `bug`: 버그 수정
- `documentation`: 문서 개선
- `setup`: 프로젝트 설정 관련
- `feat`: 기능 추가
- `refactor`: 코드 구조 개선
- `chore`: 유지보수 작업

**이슈 워크플로우**

1. **이슈 생성** → 라벨링 → 우선순위 설정
2. **브랜치 생성** → `experiment/이슈번호-주제명`
3. **개발 진행** → 커밋 → PR 생성
4. **PR과 이슈 연결** → 리뷰 → 병합
5. **이슈 종료** → 다음 단계 계획

앞으로 **GitHub Actions 기반 CI**를 구축하여
Lint / Test / Build 체크 후 `main` 병합 시 자동 검증을 수행할 예정입니다.

**참고 문서:**
[Git 공식 문서](https://git-scm.com/doc) · [GitHub Docs](https://docs.github.com/) · [React Docs](https://react.dev/)

---

## 🧪 실험 주제

| 실험 주제                    | 개념 핵심                                  | 실험 내용                               |
| ---------------------------- | ------------------------------------------ | --------------------------------------- |
| **Declarative Rendering**    | "무엇"만 선언하고 "어떻게"는 런타임이 처리 | 명령형 Counter ↔ 선언형 Counter 비교    |
| **Suspense / ErrorBoundary** | 불완전성(로딩·에러)을 선언적 경계로 다룸   | if 분기 ↔ Suspense fallback 비교        |
| **Compound Pattern**         | 로직을 분리하지 않고 조합으로 해결         | Tabs, Form, Accordion 구현 비교         |
| **Headless Component**       | 로직과 UI를 완전히 분리                    | Headless vs Styled 컴포넌트 비교        |
| **Polymorphic Component**    | as prop을 통한 타입 안전한 확장            | 버튼 ↔ 링크 등 다양한 엘리먼트 실험     |
| **Effect & Purity**          | 렌더링과 부수효과의 철저한 분리            | useEffect / useLayoutEffect 타이밍 비교 |

---

## 💡 사이트 철학

> React는 단순한 라이브러리가 아니라,  
> **UI를 바라보는 사고방식**이다.

이 프로젝트는 React의 철학을 **“글로 설명하지 않고 코드로 재현하는 것”**을 목표로 한다.  
각 실험은 “이런 개념이 있다”가 아니라

> “왜 이 방식이 더 낫고, 어떻게 구조적으로 해결하는가”  
> 를 시각적으로 체험하도록 설계되어 있다.

---

## 🧠 학습 흐름 구조

1. **비유로 개념 정렬** → 일상적인 예시 (청소, 내비게이션 등)
2. **코드 대비로 실체화** → 명령형 vs 선언형 비교
3. **원리 모델 도입** → 액션/계산/데이터, 경계 처리 모델
4. **실무 효용 정리** → 예측 가능성, 디버깅 용이성, 생산성 개선

---

## 📈 기대 효과

| 관점                | 기대 효과                                                         |
| ------------------- | ----------------------------------------------------------------- |
| **학습자**          | React의 본질을 직관적으로 이해하고, 원리 기반 사고 습득           |
| **개발자 본인**     | React의 철학을 설계 수준에서 구현할 수 있는 실무 역량 체득        |
| **면접/포트폴리오** | 단순한 클론 프로젝트가 아닌 **React 철학 구현 프로젝트**로 차별화 |

---

## 📚 참고 자료

- [React 공식 문서](https://react.dev/)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Dan Abramov – UI as a function of state](https://overreacted.io/)
- [Suspensive Docs](https://suspensive.org/)
- [TanStack Query Suspense Guide](https://tanstack.com/query/latest/docs/framework/react/guides/suspense)
- [Base UI Compound Pattern Docs](https://base-ui.com/react/overview/quick-start)

---

## 🧾 마무리

> **이 프로젝트는 단순한 기술 데모가 아니다.**
>
> React의 “왜”를 스스로 증명하기 위한,  
> **철학과 실험의 교차점**이다.
>
> 글로 설명했던 React의 철학을,  
> 이제는 코드로 시각화하고 체험하게 만든다.
