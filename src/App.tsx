import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-900 to-emerald-950 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        React Playground of Philosophy
      </h1>
      <p className="text-gray-600 mb-8">
        React의 철학을 실험으로 체험하는 인터랙티브 러닝랩
      </p>
      <p className="text-sm text-gray-500 mb-8">
        React의 핵심 개념을 이해하고 직접 실험해보며<br/>
        선언적 프로그래밍의 본질을 체득하세요
      </p>
      <a href="/learn" className="block w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
        시작하기
      </a>
    </div>
  </div>
)

const LearnPage = () => {
  const [selectedItem, setSelectedItem] = useState('1편: React는 선언적이다')
  const [expandedConcepts, setExpandedConcepts] = useState<string[]>(['1편: React는 선언적이다'])

  const concepts = [
    { 
      id: '1편: React는 선언적이다', 
      title: '1편: React는 선언적이다', 
      description: 'UI = f(state)',
      experiments: [
        { id: '1-1편: 명령형 vs 선언형 비교', title: '1-1편: 명령형 vs 선언형 비교', description: 'Counter, ErrorBoundary 예시' },
        { id: '1-2편: Suspense와 ErrorBoundary', title: '1-2편: Suspense와 ErrorBoundary', description: '선언적 로딩/에러 처리' },
        { id: '1-3편: SuspenseQuery', title: '1-3편: SuspenseQuery', description: '데이터 패칭도 선언적으로' }
      ]
    },
    { 
      id: '2편: React는 컴포넌트 기반이다', 
      title: '2편: React는 컴포넌트 기반이다', 
      description: '합성(Composition) 철학',
      experiments: [
        { id: '2-2편: Compound Pattern', title: '2-2편: Compound Pattern', description: '조합형 컴포넌트 설계' },
        { id: '2-3편: Headless 컴포넌트', title: '2-3편: Headless 컴포넌트', description: '로직과 UI의 완전한 분리' },
        { id: '2-4편: Polymorphic 컴포넌트', title: '2-4편: Polymorphic 컴포넌트', description: 'as prop으로 유연한 확장' }
      ]
    },
    { 
      id: '3편: 단방향 통신', 
      title: '3편: 단방향 통신', 
      description: 'props → children 흐름',
      experiments: []
    },
    { 
      id: '4편: 상태 중심 사고', 
      title: '4편: 상태 중심 사고', 
      description: 'UI = f(state) 확장',
      experiments: []
    },
    { 
      id: '5편: 효율적 업데이트', 
      title: '5편: 효율적 업데이트', 
      description: 'Virtual DOM 철학',
      experiments: []
    },
    { 
      id: '6편: 순수성과 부수효과 분리', 
      title: '6편: 순수성과 부수효과 분리', 
      description: 'useEffect의 진짜 의미',
      experiments: []
    }
  ]

  const toggleConcept = (conceptId: string) => {
    setExpandedConcepts(prev => 
      prev.includes(conceptId) 
        ? prev.filter(id => id !== conceptId)
        : [...prev, conceptId]
    )
  }

  const selectedConcept = concepts.find(concept => concept.id === selectedItem)
  const selectedExperiment = concepts
    .flatMap(concept => concept.experiments)
    .find(experiment => experiment.id === selectedItem)

  const currentItem = selectedConcept || selectedExperiment

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* 사이드바 */}
      <div className="w-80 bg-white shadow-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">React 철학과 실험</h2>
        <div className="space-y-1">
          {concepts.map((concept) => (
            <div key={concept.id}>
              {/* 개념 카테고리 */}
              <button
                onClick={() => {
                  toggleConcept(concept.id)
                  setSelectedItem(concept.id)
                }}
                className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                  selectedItem === concept.id
                    ? 'bg-green-100 border-l-4 border-green-600 text-green-800'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{concept.title}</h3>
                    <p className="text-xs text-gray-500">{concept.description}</p>
                  </div>
                  {concept.experiments.length > 0 && (
                    <span className={`transform transition-transform duration-200 ${
                      expandedConcepts.includes(concept.id) ? 'rotate-90' : ''
                    }`}>
                      ▶
                    </span>
                  )}
                </div>
              </button>

              {/* 하위 실험들 */}
              {expandedConcepts.includes(concept.id) && concept.experiments.length > 0 && (
                <div className="ml-4 mt-1 space-y-1">
                  {concept.experiments.map((experiment) => (
                    <button
                      key={experiment.id}
                      onClick={() => setSelectedItem(experiment.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                        selectedItem === experiment.id
                          ? 'bg-blue-100 border-l-4 border-blue-600 text-blue-800'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <h4 className="font-medium text-xs mb-1">{experiment.title}</h4>
                      <p className="text-xs text-gray-400">{experiment.description}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{currentItem?.title}</h1>
          <p className="text-gray-600 mb-8">{currentItem?.description}</p>
          
          <div className="bg-white rounded-lg shadow p-8">
            {selectedConcept ? (
              <>
                <h3 className="text-xl font-semibold mb-4">개념 설명</h3>
                <p className="text-gray-600 mb-6">
                  이 개념에 대한 상세한 설명과 예시가 곧 추가될 예정입니다. React의 핵심 철학을 깊이 있게 탐구할 수 있는 내용을 준비하고 있습니다.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold mb-4">실험 준비 중</h3>
                <p className="text-gray-600 mb-6">
                  이 실험은 곧 구현될 예정입니다. React의 핵심 개념을 직접 체험할 수 있는 인터랙티브 환경을 준비하고 있습니다.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  실험 시작하기
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App