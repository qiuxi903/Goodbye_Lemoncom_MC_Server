/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Heart, Server, Users, Zap, TreeDeciduous, ChevronDown } from 'lucide-react';

// Shutdown date: April 2nd, 2026, 00:00:00
const SHUTDOWN_DATE = new Date('2026-04-02T00:00:00Z');

export default function App() {
  const [timeSince, setTimeSince] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - SHUTDOWN_DATE.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeSince({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 font-sans selection:bg-yellow-500/30">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/minecraft/1920/1080?blur=10')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-[#1a1a1a]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <img
            src="https://storage.googleapis.com/aistudio-build-assets/lemon-community-banner.png"
            alt="柠檬社区"
            className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-2xl shadow-yellow-500/10 border border-white/5"
            referrerPolicy="no-referrer"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            再见，<span className="text-yellow-400">柠檬社区</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
            2026年4月2日 00:00 · 感谢所有相遇
          </p>

          {/* Counter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: '天', value: timeSince.days },
              { label: '时', value: timeSince.hours },
              { label: '分', value: timeSince.minutes },
              { label: '秒', value: timeSince.seconds },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
              >
                <div className="text-3xl md:text-5xl font-mono font-bold text-yellow-400">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2">
            <Clock size={14} />
            <span>自停服以来已过去</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </header>

      {/* Content Sections */}
      <main className="max-w-5xl mx-auto px-6 py-24 space-y-32">
        {/* Intro */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium"
          >
            <Heart size={14} fill="currentColor" />
            <span>永恒的记忆</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">一段旅程的终点，也是回忆的起点</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            柠檬社区不仅是一个服务器，更是我们共同的家园。在这里，我们建造、探索、奋斗，留下了无数欢笑与汗水。
            虽然大门已关，但那些像素块堆砌出的友谊将永远闪耀。
          </p>
        </section>

        {/* Servers Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Lemon Technical */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} className="text-yellow-400" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/20 flex items-center justify-center text-yellow-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Lemon 生电服</h3>
              <p className="text-gray-400">
                追求极致效率的红石殿堂。从大规模全自动农场到复杂的逻辑电路，每一台机器都凝聚着生电玩家的智慧与执着。
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-400" />
                  极致红石工程
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-400" />
                  全自动资源生产
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-400" />
                  严谨的社区氛围
                </li>
              </ul>
            </div>
          </motion.div>

          {/* WolfWood */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <TreeDeciduous size={120} className="text-green-400" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-green-400/20 flex items-center justify-center text-green-400 mb-6">
                <TreeDeciduous size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">WolfWood 狼木模组生存</h3>
              <p className="text-gray-400">
                充满无限可能的模组世界。魔法与科技的碰撞，丰富的生态系统，带给每一位探险者截然不同的生存体验。
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  深度模组整合
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  奇幻世界探索
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  温馨的冒险小队
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
          {[
            { icon: Users, label: '活跃玩家', value: '1000+' },
            { icon: Server, label: '运行天数', value: '365+' },
            { icon: Heart, label: '美好瞬间', value: '∞' },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <stat.icon className="mx-auto text-gray-600" size={24} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Final Message */}
        <section className="text-center py-24">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-6xl">🍋</div>
            <h2 className="text-3xl font-bold text-white">柠檬虽酸，回忆却甜</h2>
            <p className="text-gray-400 italic">
              "每一个方块的落下，都是一段故事的开始；每一次服务器的重启，都是一次新的期待。
              如今，故事已然落幕，但那些在柠檬社区度过的夜晚，将永远铭刻在我们的心中。"
            </p>
            <div className="pt-8">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors"
              >
                回到顶部
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© 2026 柠檬社区纪念馆 · 愿你在新的世界继续冒险</p>
        <p className="mt-2">Minecraft is a trademark of Mojang Synergies AB.</p>
      </footer>
    </div>
  );
}
