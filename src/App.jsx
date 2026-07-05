import React from 'react'

export default function App() {
    return (
        <div className="min-h-screen w-full bg-hero bg-center bg-cover bg-fixed">
            <div className="min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center w-4/5 max-w-md">
                    <h1 className="nickname text-4xl font-bold text-white tracking-tight">Crzliang</h1>
                </div>
            </div>

            <footer className="py-6">
                <div className="border-t border-white/10 mb-4 mx-5" />
                <div className="flex items-center justify-center text-xs text-white gap-1 flex-wrap">
                    <span id="busuanzi_container_site_pv">本站总访问量 <span id="busuanzi_value_site_pv"></span> 次</span>
                </div>
            </footer>
        </div>
    )
}
