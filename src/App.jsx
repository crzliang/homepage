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
                    <span>ICP备案：</span>
                    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">桂ICP备2022011217号</a>
                    <img src="https://qcloudimg.tencent-cloud.cn/raw/eed02831a0e201b8d794c8282c40cf2e.png" alt="" width="14" className="mx-1" />
                    <a href="https://beian.mps.gov.cn/#/query/webSearch?code=45032302000182" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">桂公网安备45032302000182号</a>
                </div>
            </footer>
        </div>
    )
}
