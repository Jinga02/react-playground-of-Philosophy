function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          TailwindCSS v4 🎨
        </h1>
        <p className="text-gray-600 mb-6">
          TailwindCSS v4가 정상적으로 작동하고 있습니다!
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          테스트 버튼
        </button>
      </div>
    </div>
  )
}

export default App