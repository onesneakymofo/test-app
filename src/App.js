import React from "react"
import { LoadSpinner } from "@onesneakymofo/test-load-spinner";

function App() {
    return <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
            <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars.githubusercontent.com/u/10122431?s=400&v=4" alt="" />
            <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                    <p className="text-xl leading-tight">John Doe</p>
                    <p className="text-sm leading-tight text-grey-dark">Contributor at somerepo</p>
                </div>
                <div>
                    <LoadSpinner size='4' color='#aaa' />
                </div>
            </div>
        </div>
    </div>
}

export default App
