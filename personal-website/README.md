# 个人网站

一个现代化、响应式的个人主页，专为数字创作者和自媒体从业者设计。

## 🌟 特性

- ✨ **现代化设计** - 采用渐变色彩和流畅动画
- 📱 **完全响应式** - 完美适配手机、平板和桌面设备
- 🎯 **SEO优化** - 结构化数据和语义化HTML
- ⚡ **高性能** - 优化的CSS和JavaScript
- 🔧 **易于定制** - 清晰的代码结构和注释

## 📁 文件结构

```
personal-website/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互功能
├── README.md           # 说明文档
└── assets/             # 资源文件（如需要）
    ├── images/         # 图片文件
    └── icons/          # 图标文件
```

## 🚀 快速开始

### 本地运行

1. 下载所有文件到本地目录
2. 使用浏览器打开 `index.html` 文件
3. 或者使用本地服务器：

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .

# 使用PHP
php -S localhost:8000
```

### 在线部署

可以将文件上传到任何静态网站托管服务：

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- 阿里云OSS
- 腾讯云COS

## 🎨 网站结构

### 导航栏
- 固定顶部导航
- 平滑滚动效果
- 移动端汉堡菜单
- 滚动时背景变化

### 主要部分

1. **主页区域** (#home)
   - 个人介绍和标语
   - 渐变背景
   - CTA按钮
   - 滚动指示器

2. **关于我** (#about)
   - 个人简介
   - 技能标签
   - 统计数据（动画效果）

3. **服务项目** (#services)
   - 服务卡片布局
   - 悬停效果
   - 图标展示

4. **作品展示** (#portfolio)
   - 作品网格
   - 筛选功能
   - 详情链接

5. **联系方式** (#contact)
   - 联系表单
   - 社交媒体链接
   - 地址信息

## 🛠️ 技术栈

- **HTML5** - 语义化标签
- **CSS3** - Flexbox + Grid 布局
- **JavaScript ES6+** - 原生JS
- **Font Awesome** - 图标库
- **Google Fonts** - 字体

## ⚙️ 自定义配置

### 个人信息修改

在 `index.html` 中修改以下内容：

```html
<!-- 修改姓名和标题 -->
<h1 class="hero-title">
    你好，我是 <span class="highlight">你的名字</span>
</h1>

<!-- 修改联系方式 -->
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>your-email@example.com</span>
</div>
```

### 颜色主题

在 `styles.css` 中修改CSS变量：

```css
:root {
    --primary-color: #667eea;    /* 主色调 */
    --secondary-color: #764ba2;  /* 辅助色 */
    --text-color: #333;          /* 文字颜色 */
    /* ... */
}
```

### 添加新的作品

在作品展示部分添加新的项目：

```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="portfolio-content">
        <h3>作品标题</h3>
        <p>作品描述</p>
        <a href="#" class="portfolio-link">查看详情 →</a>
    </div>
</div>
```

## 📱 响应式断点

- **桌面** > 768px
- **平板** ≤ 768px
- **手机** ≤ 480px

## 🎯 功能特性

### 交互效果
- 平滑滚动
- 悬停动画
- 滚动触发动画
- 表单验证
- 通知提示

### 性能优化
- 图片懒加载
- CSS和JS压缩
- 缓存策略
- 减少重排重绘

### SEO优化
- 语义化HTML标签
- meta标签
- 结构化数据
- 友好的URL结构

## 🔧 浏览器兼容性

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📝 更新日志

### v1.0.0 (2024-11-18)
- ✨ 初始版本发布
- 🎨 现代化设计
- 📱 响应式布局
- ⚡ 动画效果

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 📄 许可证

MIT License - 可自由使用和修改。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 邮箱: contact@example.com
- 微信: your-wechat-id

---

*用 ❤️ 精心制作*