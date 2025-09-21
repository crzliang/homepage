import React from 'react'

const profile = {
    name: 'Crzliang',
    bio: '只要开始追赶，就已经在胜利的路上',
    avatar: 'img/avatar.webp'
}

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/crzliang', icon: 'fab fa-github' },
    { name: 'Blog', url: 'https://blog.crzliang.com/', icon: 'fas fa-blog' }
]


export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero bg-center bg-cover">
            <div className="max-w-md mx-auto relative z-10 profile-card">
                <div className="mb-6 flex justify-center">
                    <div className="w-48 h-36 overflow-hidden avatar">
                        <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover shadow-lg rounded-full" loading="lazy" decoding="async" />
                    </div>
                </div>

                <div className="text-center mb-5">
                    <h1 className="nickname">{profile.name}</h1>
                    <p className="quote">{profile.bio}</p>
                </div>

                <div className="flex justify-center space-x-6 mb-4 social-links">
                    {socialLinks.map(social => (
                        <a key={social.name} href={social.url} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 bg-white/70 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg" title={social.name} target="_blank" rel="noopener noreferrer">
                            <i className={`${social.icon} text-lg`} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
