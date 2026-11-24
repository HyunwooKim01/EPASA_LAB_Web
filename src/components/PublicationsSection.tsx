import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink } from 'lucide-react';
import { Publication, PublicationCategory } from '../types/lab';

type Tab = 'all' | PublicationCategory;

// 보여줄 순서대로 정렬 (국제저널 → 국제학회 → 국내저널 → 국내학회 → 특허)
const CATEGORIES: { key: PublicationCategory; label: string }[] = [
  { key: 'intl-journal', label: 'International Journals' },
  { key: 'intl-conference', label: 'International Conferences' },
  { key: 'domestic-journal', label: 'Domestic Journals' },
  { key: 'domestic-conference', label: 'Domestic Conferences' },
  { key: 'patent', label: 'Patents' },
];

const TABS: { key: Tab; label: string }[] = [{ key: 'all', label: 'All' }, ...CATEGORIES];

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 border-l-4 border-navy bg-white shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex justify-between items-start gap-4">
        <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{pub.title}</h4>
        {pub.link && (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${pub.title}`}
            className="text-navy hover:text-navy-dark shrink-0"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
      <p className="text-slate-700 mb-1">{pub.authors}</p>
      <div className="flex items-center space-x-3 text-sm text-slate-500">
        <span className="font-semibold text-navy">{pub.venue}</span>
        <span>•</span>
        <span>{pub.year}</span>
      </div>
      {pub.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {pub.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded uppercase tracking-wider font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function PublicationsSection({ publications }: { publications: Publication[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('all');

  // 검색 필터 + 최신순 정렬
  const searched = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const list = q
      ? publications.filter((p) =>
          [p.title, p.authors, p.venue, ...p.tags].some((f) => f.toLowerCase().includes(q))
        )
      : publications;
    return [...list].sort((a, b) => Number(b.year) - Number(a.year));
  }, [publications, searchTerm]);

  // 탭별 개수 (검색 결과 기준)
  const counts = useMemo(() => {
    const c = { all: searched.length } as Record<Tab, number>;
    CATEGORIES.forEach(({ key }) => {
      c[key] = searched.filter((p) => p.category === key).length;
    });
    return c;
  }, [searched]);

  // 전체 탭이면 카테고리별로 묶고, 특정 탭이면 그 카테고리만
  const groups = (activeTab === 'all' ? CATEGORIES : CATEGORIES.filter((c) => c.key === activeTab))
    .map((c) => ({ ...c, items: searched.filter((p) => p.category === c.key) }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="publications" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Publications</h2>
            <p className="text-slate-500">Our latest contributions to the scientific community.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search papers..."
              value={searchTerm}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 w-full md:w-64"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div
          role="tablist"
          aria-label="Publication categories"
          className="flex gap-1 mb-10 border-b border-slate-200 overflow-x-auto"
        >
          {TABS.map(({ key, label }) => {
            const active = activeTab === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 -mb-px border-b-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? 'border-navy text-navy'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {label}
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded ${
                    active ? 'bg-navy text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {counts[key]}
                </span>
              </button>
            );
          })}
        </div>

        {groups.length === 0 ? (
          <p className="text-center text-slate-400 py-16">No publications found.</p>
        ) : (
          <div className="space-y-12">
            {groups.map((group) => (
              <div key={group.key}>
                {activeTab === 'all' && (
                  <h3 className="text-xl font-bold text-navy mb-6 flex items-baseline gap-2">
                    {group.label}
                    <span className="text-sm font-normal text-slate-400">({group.items.length})</span>
                  </h3>
                )}
                <div className="space-y-6">
                  {group.items.map((pub) => (
                    <PublicationCard key={pub.id} pub={pub} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
