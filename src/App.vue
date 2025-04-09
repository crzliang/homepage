<template>
  <div class="min-h-screen bg-slate-100 px-4 flex items-center justify-center">
    <div class="max-w-xs mx-auto">
      <!-- 拟物化卡片 -->
      <div class="rounded-xl bg-slate-100 p-6 shadow-neumorphic">
        <!-- 头像 -->
        <div class="mb-5 flex justify-center">
          <div class="w-32 h-32 rounded-full p-1">
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
                class="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full shadow-neumorphic-sm">
            {{ tag }}
          </span>
        </div>
        
        <!-- 社交链接 -->
        <div class="flex justify-center space-x-4">
          <a v-for="social in socialLinks" 
             :key="social.name"
             :href="social.url" 
             class="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 bg-slate-100 shadow-neumorphic hover:shadow-neumorphic-inset transition-shadow duration-300"
             :title="social.name"
             target="_blank"
             rel="noopener noreferrer">
            <i :class="['fab', social.icon, 'text-lg']"></i>
          </a>
        </div>
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
  {
    name: 'Note',
    url: 'https://space.crzliang.cn/',
    icon: 'fas fa-book' // 替换微信为Dribbble，更适合这种设计风格
  }
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
/* 添加 Neumorphism 阴影 */
.shadow-neumorphic {
  box-shadow: 4px 4px 8px #c7c7c7, -4px -4px 8px #ffffff; /* 简化阴影 */
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