
import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="w-96 flex flex-col gap-3 bg-white shadow-sm rounded-xl">
                <img className="w-full h-auto shadow-sm rounded-xl" src="https://images.unsplash.com/photo-1713365747492-7918df1942b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                <div className="p-4 pl-0 text-left flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-gray-800">
                        Studio by Preline
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">
                        Produce profestional, reliable streams easily levareging Preline's innovative broadcast studio
                    </p>
                    <button type="button" className="pt-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                        Read More...
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card