import React from 'react';
import { motion } from 'motion/react';
// 🌟 CheckCircle2 아이콘 추가
import { Cpu, Bot, Layers, CheckCircle2 } from 'lucide-react';
import { ResearchArea, ResearchDetail } from '../types/lab';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={32} />,
  Bot: <Bot size={32} />,
  Layers: <Layers size={32} />
};

// 🌟 details 프롭스 추가 (선택사항)
export default function ResearchSection({ areas, details }: { areas: ResearchArea[], details?: ResearchDetail[] }) {
  return (
    <section id="research" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 상단 3개 요약 카드 (항상 표시) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-5">Research Areas</h2>
          <div className="w-24 h-1 bg-navy mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            EPASA Lab focuses on designing the brain for Physical & Edge AI systems operating autonomously in the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-navy/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[area.icon]}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🌟 상세 연구 내용 영역 (details 데이터가 전달될 때만 표시됨) */}
        {details && details.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-navy mb-4">Detailed Research Topics</h3>
              <div className="w-16 h-1 bg-navy-light mx-auto" />
            </div>

            <div className="space-y-12">
              {details.map((topic, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden">
                  {/* 카드 왼쪽 파란색 장식 선 */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-navy"></div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
                    {topic.topic}
                  </h4>
                  
                  <div className="space-y-10">
                    {topic.subTopics.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <h5 className="text-xl font-bold text-navy mb-5 flex items-center">
                          <span className="w-2 h-2 bg-navy-light rounded-full mr-3"></span>
                          {sub.title}
                        </h5>
                        <ul className="space-y-4 pl-2 md:pl-5">
                          {sub.descriptions.map((desc, dIdx) => (
                            <li key={dIdx} className="flex items-start text-slate-700 text-lg">
                              <CheckCircle2 size={20} className="text-navy-light mr-3 mt-1 flex-shrink-0" />
                              {/* \n이 있을 경우 줄바꿈을 유지해주는 CSS 적용 */}
                              <span className="leading-relaxed whitespace-pre-line">{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
