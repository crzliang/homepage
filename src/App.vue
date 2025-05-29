<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- 模糊化头像背景 -->
    <div v-if="profile.avatar" class="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none">
      <img :src="profile.avatar" :alt="profile.name" class="w-full h-full object-cover blur-2xl scale-125 opacity-80" />
      <div class="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
    </div>
    <div class="max-w-xs mx-auto relative z-10">
      <!-- 头像 -->
      <div class="mb-5 flex justify-center">
        <div class="w-36 h-36 rounded-full">
          <div v-if="!profile.avatar" class="skeleton-avatar"></div>
          <img v-else :src="profile.avatar" :alt="profile.name" 
               class="w-full h-full rounded-full object-cover">
        </div>
      </div>
      
      <!-- 个人信息 -->
      <div class="text-center mb-5">
        <h1 class="nickname">{{ profile.name }}</h1>
        <p class="quote">{{ profile.bio }}</p>
      </div>
      
      <!-- 标签 -->
      <div class="flex flex-wrap justify-center gap-2 mb-6">
        <span v-for="tag in profile.tags" 
              :key="tag"
              class="text-xs text-slate-500 bg-white/70 px-3 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
      
      <!-- 社交链接 -->
      <div class="flex justify-center space-x-4">
        <a v-for="social in socialLinks" 
           :key="social.name"
           :href="social.url" 
           class="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 bg-white/70 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
           :title="social.name"
           target="_blank"
           rel="noopener noreferrer">
          <i :class="['fab', social.icon, 'text-lg']"></i>
        </a>
      </div>
      <!-- ICP备案信息 -->
      <div class="mt-6 text-center space-x-4">
        <a :href="icp.url" 
           target="_blank" 
           class="text-xs text-slate-400 hover:text-slate-600 transition-colors"
           rel="noopener noreferrer">
          {{ icp.number }}
        </a>
        <a :href="psb.url" 
           target="_blank" 
           class="text-xs text-slate-400 hover:text-slate-600 transition-colors"
           rel="noopener noreferrer">
          {{ psb.number }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const profile = ref({
  name: 'Crzliang',
  bio: '只要开始追赶，就已经在胜利的路上',
  avatar: 'img/avatar.webp',
})

const socialLinks = ref([
  {
    name: 'GitHub',
    url: 'https://github.com/crzliang',
    icon: 'fab fa-github'
  },
  {
    name: 'Blog',
    url: 'https://blog.crzliang.cn/',
    icon: 'fas fa-blog'
  },
  // {
  //   name: 'Note',
  //   url: 'https://space.crzliang.cn/',
  //   icon: 'fas fa-book' // 替换微信为Dribbble，更适合这种设计风格
  // }
])

const icp = ref({
  url: 'https://beian.miit.gov.cn/',
  number: '桂ICP备2022011217号'
})

const psb = ref({
  url: 'https://beian.mps.gov.cn/#/query/webSearch?code=45032302000182', // 替换为您的查询URL
  number: '桂公网安备45032302000182号' // 替换为您的备案号
})
</script>

<style scoped>
@font-face {
  font-family: 'Pacifico-Regular';
  src: url('@/assets/fonts/Pacifico-Regular.ttf') format('truetype');
}

.nickname {
  font-family: 'Pacifico-Regular', cursive;
  font-size: 2em;
}
.quote {
  font-style: italic;
  margin-top: 15px;
}
/* 保留阴影相关样式但页面已不再使用 */
.shadow-neumorphic {
  box-shadow: 4px 4px 8px #c7c7c7, -4px -4px 8px #ffffff;
}
.shadow-neumorphic-inset {
  box-shadow: inset 5px 5px 10px #c7c7c7, inset -5px -5px 10px #ffffff;
}
.shadow-neumorphic-sm {
  box-shadow: 3px 3px 6px #c7c7c7, -3px -3px 6px #ffffff;
}
.hover\:shadow-neumorphic-inset:hover {
  box-shadow: inset 5px 5px 10px #c7c7c7, inset -5px -5px 10px #ffffff;
}
</style>