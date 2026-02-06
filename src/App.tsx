import { useState } from 'react'

interface Section {
    title: string,
    subtext: string
}

function App() {
  const [count, setCount] = useState(0)
    const [section] = useState<Section[]>([
        {"title":"Section 1", "subtext": "Some subtext 1"},
        {"title":"Section 2", "subtext": "Some subtext 2"},
        {"title":"Section 3", "subtext": "Some subtext 3"}
    ])

  return (
    <div className="flex flex-col items-center justify-center mt-32 text-center">
        <div className="flex flex-col p-15 text-4xl font-extrabold text-blue-200 bg-blue-950 rounded-md">
            Welcome to the site
            <div className="mt-5">
                <button className="rounded-md bg-green-700 p-5 text-sm" onClick={() => setCount(count + 1)}>
                    Increment Counter
                </button>
            </div>
            <div className="mt-5">
                {count}
            </div>
            <div className="flex justify-evenly gap-10 mt-5 text-yellow-900">
                {section.map((section) => (
                    <div key={section.title} className="flex flex-col bg-amber-200 p-5 rounded-md">
                        <div>{section.title}</div>
                        <div>
                            <p className="text-sm text-gray-800">{section.subtext}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default App
