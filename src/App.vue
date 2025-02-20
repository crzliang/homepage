<template>
    <div class="app-container">
        <div class="blur-overlay">
            <header class="header">
                <img :src="avatar" alt="头像" class="avatar" />
                <h1 class="nickname">{{ nickname }}</h1>
                <p class="quote">{{ quote }}</p>
            </header>

            <section class="social-links">
                <ul>
                    <li v-for="(link, platform) in socialLinks" :key="platform" class="social-item">
                        <a :href="link" target="_blank" :class="['social-link', platform.toLowerCase()]">
                            <i :class="getIconClass(platform)" class="icon"></i> {{ platform }}
                        </a>
                    </li>
                </ul>
            </section>

            <footer class="footer">
                <p>
                    <a :href="icpLink" target="_blank" class="record-link">{{ icpInfo }}</a> |
                    <a :href="publicSecurityLink" target="_blank" class="record-link">{{ publicSecurityInfo }}</a>
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            avatar: "avatar.webp",
            nickname: "crzliang",
            quote: "只要开始追赶，就已经在胜利的路上",
            socialLinks: {
                GitHub: "https://github.com/crzliang",
                Blog: "https://blog.crzliang.cn/",
                Notes: "https://space.crzliang.cn/"
            },
            icpInfo: "桂ICP备2022011217号",
            icpLink: "https://beian.miit.gov.cn/",
            publicSecurityInfo: "桂公网安备45032302000182号",
            publicSecurityLink: "https://beian.mps.gov.cn/#/query/webSearch?code=45032302000182"
        };
    },
    methods: {
        getIconClass(platform) {
            switch (platform) {
                case "GitHub":
                    return "fab fa-github";
                case "Blog":
                    return "fas fa-blog";
                case "Notes":
                    return "fas fa-archive";
                default:
                    return "fas fa-share-alt";
            }
        },
    },
    metaInfo() {
        return {
            title: 'crzliang的主页',
            meta: [
                { name: 'description', content: '这是crzliang的个人主页，包含GitHub、博客和笔记的链接。' },
                { name: 'keywords', content: 'crzliang, 个人主页, GitHub, 博客, 笔记' }
            ]
        };
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    text-align: center;
    background-image: url('/public/avatar.webp');
    background-size: cover;
    background-position: center;
}

.blur-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, 0.6);
}

.header {
    margin-bottom: 30px;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.nickname {
    font-family: 'Lobster', cursive;
    font-size: 3em;
    color: #333;
    margin-top: 10px;
}

h1 {
    font-size: 2em;
    margin-top: 10px;
}

.quote {
    font-style: italic;
    color: #888;
    margin-top: 15px;
}

.social-links {
    margin-bottom: 30px;
}

h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #333;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.social-item {
    margin-bottom: 15px;
    transition: transform 0.3s ease;
}

.social-item:hover {
    transform: scale(1.05);
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    text-decoration: none;
    color: #333;
    padding: 12px 90px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    width: 300px;
    margin: 0 auto;
    position: relative;
}

.social-link i {
    position: absolute;
    left: 12px;
    font-size: 1.5em;
    flex-shrink: 0;
}

.social-link {
    background-color: #fff;
    color: #000000;
}

.footer {
    font-size: 0.9em;
    color: #888;
}

.record-link {
    color: #323232;
    text-decoration: none;
    font-size: 12px;
}
</style>