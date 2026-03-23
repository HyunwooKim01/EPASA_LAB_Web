import React from 'react';
import MembersSection from '../components/MembersSection';
import { Member, Publication } from '../types/lab';

export default function MembersPage({ members, publications }: { members: Member[], publications: Publication[] }) {
  return (
    // 네비게이션 바에 내용이 가려지지 않도록 상단 여백(pt-24)을 줍니다.
    <div className="min-h-screen bg-slate-50 pt-24 pb-12"> 
      <MembersSection members={members} publications={publications} />
    </div>
  );
}
