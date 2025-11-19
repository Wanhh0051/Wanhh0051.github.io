import IconXHS from '@/components/IconXHS';
import IconDouyin from '@/components/IconDouyin';
import IconGitHub from '@/components/IconGitHub';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-light">林晚 <span className="text-sm text-gray-500 ml-2 font-normal">Lin Wan</span></div>
            <div className="flex gap-8 text-sm">
              <a href="#work" className="hover:text-gray-600 transition-colors">作品 <span className="text-gray-500 text-xs">Work</span></a>
              <a href="#about" className="hover:text-gray-600 transition-colors">关于 <span className="text-gray-500 text-xs">About</span></a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">联系 <span className="text-gray-500 text-xs">Contact</span></a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-light mb-4">
            你好，我是 <span className="font-medium">林晚</span>
          </h1>
          <p className="text-2xl text-gray-500 mb-8 font-light">
            <span className="font-normal">Hello, I&apos;m </span><span className="font-medium">Lin Wan</span>
          </p>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            独立开发者 <span className="text-gray-400">·</span> 个人开发者
            <br />
            <span className="text-sm text-gray-500">Independent Developer · Personal Developer</span>
          </p>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            专注于创造优雅的数字体验，探索技术与人性的交汇点
            <br />
            <span className="text-sm text-gray-400">
              Focused on creating elegant digital experiences, exploring the intersection of technology and humanity
            </span>
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              联系我 <span className="text-xs ml-2">Get in Touch</span>
            </a>
            <a
              href="#work"
              className="px-8 py-3 border border-gray-300 rounded-full hover:border-gray-400 transition-colors"
            >
              查看作品 <span className="text-xs ml-2">View Work</span>
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-4">
            精选作品 <span className="text-gray-500 text-lg font-normal">Selected Work</span>
          </h2>
          <p className="text-gray-500 mb-16">
            探索技术与创意的融合 <span className="text-gray-400">·</span>
            <span className="text-sm">Exploring the fusion of technology and creativity</span>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">项目截图</span>
              </div>
              <h3 className="text-xl font-medium mb-2">AI 智能助手平台 <span className="text-sm text-gray-500 font-normal">AI Assistant Platform</span></h3>
              <p className="text-gray-600 text-sm">基于深度学习的智能对话系统，提供多场景解决方案</p>
              <p className="text-gray-400 text-xs mt-1">Intelligent dialogue system based on deep learning</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">项目截图</span>
              </div>
              <h3 className="text-xl font-medium mb-2">极简设计系统 <span className="text-sm text-gray-500 font-normal">Minimal Design System</span></h3>
              <p className="text-gray-600 text-sm">模块化的组件库，打造一致性的用户体验</p>
              <p className="text-gray-400 text-xs mt-1">Modular component library for consistent user experience</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">项目截图</span>
              </div>
              <h3 className="text-xl font-medium mb-2">数据可视化工具 <span className="text-sm text-gray-500 font-normal">Data Visualization Tool</span></h3>
              <p className="text-gray-600 text-sm">交互式数据展示，让复杂数据变得直观易懂</p>
              <p className="text-gray-400 text-xs mt-1">Interactive data visualization for complex information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Experience Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-4">
            成长历程 <span className="text-gray-500 text-lg font-normal">Learning Journey</span>
          </h2>
          <p className="text-gray-500 mb-16">
            持续学习，不断进阶 <span className="text-gray-400">·</span>
            <span className="text-sm">Continuous learning and growth</span>
          </p>
          <div className="max-w-4xl">
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="text-gray-400 font-mono text-sm w-16">2024</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">深度学习与人工智能 <span className="text-sm text-gray-500 font-normal">Deep Learning & AI</span></h3>
                  <p className="text-gray-600 text-sm">掌握大语言模型开发，AI产品化落地实践</p>
                  <p className="text-gray-400 text-xs mt-1">Mastered large language model development and AI productization</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-gray-400 font-mono text-sm w-16">2023</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">全栈架构设计 <span className="text-sm text-gray-500 font-normal">Full-Stack Architecture</span></h3>
                  <p className="text-gray-600 text-sm">分布式系统设计，微服务架构实践</p>
                  <p className="text-gray-400 text-xs mt-1">Distributed system design and microservices architecture practice</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-gray-400 font-mono text-sm w-16">2022</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">用户体验设计 <span className="text-sm text-gray-500 font-normal">UX Design</span></h3>
                  <p className="text-gray-600 text-sm">深入研究交互设计，构建优雅的用户界面</p>
                  <p className="text-gray-400 text-xs mt-1">Deep research in interaction design and elegant UI creation</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="text-gray-400 font-mono text-sm w-16">2021</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">前端开发基础 <span className="text-sm text-gray-500 font-normal">Frontend Foundation</span></h3>
                  <p className="text-gray-600 text-sm">掌握现代前端技术栈，React生态深度应用</p>
                  <p className="text-gray-400 text-xs mt-1">Mastered modern frontend stack and React ecosystem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light mb-4">
              联系方式 <span className="text-gray-500 text-lg font-normal">Contact</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              期待与您的交流与合作
            </p>
            <p className="text-sm text-gray-400">
              Looking forward to communication and collaboration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {/* GitHub */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 group-hover:bg-gray-200 transition-colors flex items-center justify-center">
                <IconGitHub />
              </div>
              <a href="https://github.com/Wanhh0051" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
              <p className="text-xs text-gray-400 mt-1">@林晚</p>
            </div>

            {/* Email */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 group-hover:bg-gray-200 transition-colors flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
              </div>
              <a href="mailto:hhao29655@gmail.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Gmail</a>
              <p className="text-xs text-gray-400 mt-1">hhao29655</p>
            </div>

            {/* WeChat */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 group-hover:bg-gray-200 transition-colors flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 12c-.83 0-1.5-.67-1.5-1.5S7.67 9 8.5 9s1.5.67 1.5 1.5S9.33 12 8.5 12zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3.5 6c-2.33 0-4.31-1.46-5.11-3.5H7c-.83 0-1.5-.67-1.5-1.5S6.17 11.5 7 11.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-.11c-.8 2.04-2.78 3.5-5.11 3.5z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <div className="text-sm text-gray-600">微信</div>
              <p className="text-xs text-gray-400 mt-1">ww84973</p>
            </div>

            {/* Douyin */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 group-hover:bg-gray-200 transition-colors flex items-center justify-center">
                <IconDouyin />
              </div>
              <div className="text-sm text-gray-600">抖音</div>
              <p className="text-xs text-gray-400 mt-1">@林晚不晚</p>
            </div>

            {/* Xiaohongshu */}
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 group-hover:bg-gray-200 transition-colors flex items-center justify-center">
                <IconXHS />
              </div>
              <div className="text-sm text-gray-600">小红书</div>
              <p className="text-xs text-gray-400 mt-1">@林晚不晚</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              让我们一起创造些什么 <span className="text-gray-400">·</span>
              <span className="text-sm">Let&apos;s create something together</span>
            </p>
            <a
              href="mailto:hhao29655@gmail.com"
              className="inline-block px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              开始对话 <span className="text-xs ml-2">Start Conversation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              © 2024 林晚 Lin Wan <span className="text-gray-400">·</span> All rights reserved
            </p>
            <p className="text-xs text-gray-400">
              用心构建 <span className="text-gray-300">·</span> Built with passion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
