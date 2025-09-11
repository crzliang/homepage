import React from 'react'

const profile = {
  name: 'Crzliang',
  bio: '只要开始追赶，就已经在胜利的路上',
  avatar: 'img/avatar.webp',
  tags: ['Developer', 'Writer']
}

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/crzliang', icon: 'fab fa-github' },
  { name: 'Blog', url: 'https://blog.crzliang.cn/', icon: 'fas fa-blog' }
]

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-xs mx-auto relative z-10">
        <div className="mb-5 flex justify-center">
          <div className="w-36 h-36 rounded-full">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        <div className="text-center mb-5">
          <h1 className="nickname">{profile.name}</h1>
          <p className="quote">{profile.bio}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {profile.tags.map(tag => (
            <span key={tag} className="text-xs text-slate-500 bg-white/70 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          {socialLinks.map(social => (
            <a key={social.name} href={social.url} className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 bg-white/70 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg" title={social.name} target="_blank" rel="noopener noreferrer">
              <i className={["fab", social.icon, "text-lg"].join(' ')} />
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}
