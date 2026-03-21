import React from 'react'

const profile = {
    name: 'Crzliang',
    bio: '只要开始追赶，就已经在胜利的路上',
    // avatar: 'img/avatar.webp'
}

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/crzliang', icon: 'fab fa-github' },
    { name: 'Blog', url: 'https://blog.crzliang.cn/', icon: 'fas fa-blog' }
]

const icp = {
    url: 'https://beian.miit.gov.cn/',
    number: '桂ICP备2022011217号'
}

const psb = {
    url: 'https://beian.mps.gov.cn/#/query/webSearch?code=45032302000182',
    number: '桂公网安备45032302000182号'
}

export default function App() {
    return (
        <div className="h-screen w-full flex items-end justify-center md:items-stretch md:justify-start relative overflow-hidden bg-hero bg-center bg-cover">
            <div className="w-full md:w-[300px] shrink-0 relative z-10 profile-card rounded-t-3xl rounded-b-none border-t border-b-0 border-x-0 md:rounded-none md:rounded-r-3xl md:border-t-0 md:border-r md:border-l-0 flex flex-col justify-center items-center !px-6">


                <div className="text-center mb-5">
                    <h1 className="nickname">{profile.name}</h1>
                    <p className="quote">{profile.bio}</p>
                </div>

                <div className="flex justify-center space-x-6 mb-4 social-links">
                    {socialLinks.map(social => (
                        <a key={social.name} href={social.url} className="w-12 h-12 rounded-full flex items-center justify-center !text-white bg-white/70 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg" title={social.name} target="_blank" rel="noopener noreferrer">
                            <i className={`${social.icon} text-lg`} />
                        </a>
                    ))}
                </div>

                <div className="mt-6 text-center text-xs text-slate-400 metadata flex flex-col space-y-1">
                    <a href={icp.url} target="_blank" rel="noopener noreferrer" className="inline-block hover:text-slate-600 transition-colors">
                        {icp.number}
                    </a>
                    <div className="flex items-center justify-center space-x-1">
                        {/* <img src="img/psb.png" alt="PSB" className="psbimg" /> */}
                        <a href={psb.url} target="_blank" rel="noopener noreferrer" className="inline-block hover:text-slate-600 transition-colors">
                            {psb.number}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
