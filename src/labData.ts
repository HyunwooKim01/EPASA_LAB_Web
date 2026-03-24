import { LabData } from './types/lab';

export const LAB_DATA: LabData = {
  labName: "EPASA LAB",
  missionStatement: `Edge Physical AI Systems Architecture Lab (EPASA)`,
  heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
  researchAreas: [
    {
      id: "ra1",
      title: "Embedded AI",
      description: "스마트팩토리, 로봇 등 Physical AI 환경에 적합한 저지연·고신뢰·저전력 임베디드 시스템 및 센서 융합 구조를 설계하고 산업 적용을 연구합니다.",
      icon: "Bot" // 로봇/물리적 AI를 상징하는 아이콘
    },
    {
      id: "ra2",
      title: "System Architecture for AI",
      description: "Generative AI 및 RAG 시스템의 고속 데이터 처리를 위한 스토리지 아키텍처를 최적화하고, 대규모 모델 학습·추론을 위한 계층 구조를 설계합니다.",
      icon: "Layers" // 아키텍처/계층 구조를 상징하는 아이콘
    },
    {
      id: "ra3",
      title: "Computational SSD & Optimization",
      description: "데이터 이동 없이 저장장치 내에서 연산을 처리하는 지능형 컨트롤러(Computational Storage)와 엣지 환경을 위한 AI 모델 경량화를 연구합니다.",
      icon: "Cpu" // 연산/최적화를 상징하는 아이콘
    }
  ],
  detailedResearch: [
    {
      topic: "Research Topic #1 : Embedded AI",
      subTopics: [
        {
          title: "Physical AI를 위한 임베디드 시스템 연구",
          descriptions: [
            "스마트팩토리, 로봇 등 Physical AI 응용 환경에 적합한 저장장치 및 임베디드 시스템 구조 설계\n→ 저지연·고신뢰·저전력 동작을 위한 실시간 제어 중심의 아키텍처 구현",
            "엣지 디바이스의 연속적 센서 데이터 처리에 최적화된 로컬 저장 및 처리 구조 개발\n→ 제한된 전력/공간 조건에서의 고신뢰성 데이터 기록 및 오류 복구 알고리즘 포함",
            "AI 모델 경량화 및 실시간 추론이 가능한 엣지형 임베디드 시스템 및 Architecture 연구"
          ]
        },
        {
          title: "AI × Embedded Systems 융합 기술의 산업 적용 연구",
          descriptions: [
            "임베디드 시스템과 경량 AI 기술을 융합하여, 공정 자동화, 품질 검사 등 산업 현장의 실질적인 문제를 해결할 수 있는 기술 개발",
            "센서 기반 임베디드 디바이스 + 소형 AI 모델로 실시간 분석·처리하는 시스템으로 구현",
            "제한된 전력·연산 자원 환경에서도 안정적으로 동작 가능한 저전력 AI 추론 엔진, 신뢰성 있는 로컬 저장 및 처리 구조를 설계\n→ AI 도입이 어려운 중소기업 및 전통 제조업체과 산학협력 과제, 기술이전 연계"
          ]
        }
      ]
    },
    {
      topic: "Research Topic #2 : Sys.Archi for AI",
      subTopics: [
        {
          title: "AI 워크로드 기반 System Architecture 연구",
          descriptions: [
            "Generative AI 및 RAG 시스템의 고속·대용량 데이터 입출력 요구에 맞춘 스토리지 아키텍처 최적화\n→ 읽기 집중형 I/O 패턴, 벡터 검색, 대용량 모델 호출 등에 특화된 구조 설계",
            "대규모 모델 학습·추론 환경에서의 지연 최소화 및 대역폭 극대화를 위한 계층 구조 분석 및 설계",
            "SSD 내부 데이터 흐름과 제어 경로 최적화, AI 연산의 효율성과 메모리/저장 계층 설계 문제를 통합적으로 해결"
          ]
        },
        {
          title: "Computational SSD 및 지능형 컨트롤러 연구",
          descriptions: [
            "연산 기능을 저장장치 내부로 통합하는 Computational Storage 구조 연구\n→ 데이터 이동 없이 저장장치 내에서 처리하여 시스템 병목과 에너지 소비를 줄이는 구조 설계",
            "벡터 인덱싱, 압축, LLM 추론 등 반복적인 연산을 컨트롤러 수준에서 처리하는 로직 개발\n→ 기존 호스트 연산 대비 I/O 병목 완화 및 응답 지연 최소화",
            "SSD 내부에 AI inference engine 또는 경량화된 AI 모델을 내장하는 구조 검토"
          ]
        }
      ]
    }
  ],
  publications: [
    // 🌟 International Journal Papers
    {
      id: "j1",
      title: "Adaptive Interference Mitigation for Multilevel Memory Devices",
      authors: "Myeongwoon Jeon, Kyungchul Kim, Sungkyu Chung, Seungjae Chung, Beomju Shin, Jungwoo Lee",
      venue: "IEICE Transactions Fundamentals of Electronics, Communications and Computer Sciences",
      year: 2011,
      tags: ["Journal", "Memory Devices"]
    },
    {
      id: "j2",
      title: "Bidirectional Limited-Magnitude Error Correction Codes for Flash Memories",
      authors: "Myeongwoon Jeon, Jungwoo Lee",
      venue: "IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences",
      year: 2013,
      tags: ["Journal", "Flash Memory"]
    },

    // 🌟 International Conferences
    {
      id: "c1",
      title: "SNR Adaptive Limited Constellation Sphere Decoding",
      authors: "Myeongwoon Jeon, Jungwoo Lee",
      venue: "IEEE Vehicular Technology Conference (Anchorage, USA)",
      year: 2009,
      tags: ["Conference", "Decoding"]
    },
    {
      id: "c2",
      title: "Interference Compensation Technique for Multilevel Flash Memory",
      authors: "Myeongwoon Jeon, Kyungchul Kim, Beomju Shin, Jungwoo Lee",
      venue: "IEEE Midwest Symposium on Circuits and Systems (Seoul, Korea)",
      year: 2011,
      tags: ["Conference", "Flash Memory"]
    },
    {
      id: "c3",
      title: "Limited magnitude error location parity check codes for flash memories",
      authors: "Myeongwoon Jeon, Kyungchul Kim, Beomju Shin, Jungwoo Lee",
      venue: "IEEE Midwest Symposium on Circuits and Systems (Boise, USA)",
      year: 2012,
      tags: ["Conference", "Flash Memory"]
    },
    {
      id: "c4",
      title: "Interference reduction modulation based on chirp spread spectrum for capsule endoscopy",
      authors: "Myeongwoon Jeon, Sungkyoo Chung, Beomju Shin, Jungwoo Lee",
      venue: "IEEE Workshop on Signal Processing Systems (Quebec, Canada)",
      year: 2012,
      tags: ["Conference", "Signal Processing"]
    },
    {
      id: "c5",
      title: "On codes correcting bidirectional limited-magnitued errors for flash memories",
      authors: "Myeongwoon Jeon, Jungwoo Lee",
      venue: "International Symposium on Information Theory and Its Applications (Honolulu, USA)",
      year: 2012,
      tags: ["Conference", "Flash Memory"]
    },
    {
      id: "c6",
      title: "Cell to cell interference mitigation techniques for flash memory",
      authors: "Myeongwoon Jeon, Jungwoo Lee",
      venue: "Non-volatile Memories Workshop (San Diego, USA)",
      year: 2013,
      tags: ["Conference", "Flash Memory"]
    },

    // 🌟 US Patents
    {
      id: "pat1",
      title: "CONTROLLER, SEMICONDUCTOR MEMORY SYSTEM AND OPERATING METHOD THEREOF (US 11189350)",
      authors: "Myeongwoon Jeon",
      venue: "US Patent",
      year: 2021,
      link: "https://patents.google.com/patent/US11189350",
      tags: ["Patent"]
    },
    {
      id: "pat2",
      title: "Data storage device and operating method thereof (US 10916301)",
      authors: "Myeongwoon Jeon",
      venue: "US Patent",
      year: 2021,
      link: "https://patents.google.com/patent/US10916301",
      tags: ["Patent"]
    },
    {
      id: "pat3",
      title: "DATA STORAGE DEVICE AND OPERATING METHOD THEREOF INCLUDING READ ERROR CORRECTION (US 10001952)",
      authors: "Myeongwoon Jeon",
      venue: "US Patent",
      year: 2018,
      link: "https://patents.google.com/patent/US10001952",
      tags: ["Patent"]
    },
    {
      id: "pat4",
      title: "DATA STORAGE DEVICE AND OPERATING METHOD THEREOF (US 9741402)",
      authors: "Myeongwoon Jeon",
      venue: "US Patent",
      year: 2017,
      link: "https://patents.google.com/patent/US9741402",
      tags: ["Patent"]
    },
    {
      id: "pat5",
      title: "CONTROLLER, SEMICONDUCTOR MEMORY SYSTEM AND OPERATING METHOD THEREOF (US 9575833)",
      authors: "Myeongwoon Jeon",
      venue: "US Patent",
      year: 2017,
      link: "https://patents.google.com/patent/US9575833",
      tags: ["Patent"]
    },
    {
      id: "pat6",
      title: "DATA ENCODING METHOD FOR COMPRESSING DATA TO BE STORED, DATA STORAGE DEVICE WITH DATA ENCODER, AND OPERATING METHOD OF DATA STORAGE DEVICE (US 9473171)",
      authors: "Myeongwoon Jeon",
      venue: "US Patent",
      year: 2016,
      link: "https://patents.google.com/patent/US9473171",
      tags: ["Patent"]
    },
    {
      id: "pat7",
      title: "Data storage device and operating method thereof (US 9570189B1)",
      authors: "Jae Yoon Lee, Hyung Min Lee, Myeong Woon Jeon",
      venue: "US Patent",
      year: 2017,
      link: "https://patents.google.com/patent/US9570189B1",
      tags: ["Patent"]
    },
    {
      id: "pat8",
      title: "Operating method of memory system (US 10623025)",
      authors: "Hyung Min Lee, Jae Yoon Lee, Myeong Woon Jeon",
      venue: "US Patent",
      year: 2020,
      link: "https://patents.google.com/patent/US10623025",
      tags: ["Patent"]
    }
  ],
  members: [
    {
      id: "m1",
      name: "Prof. Myeongwoon Jeon",
      role: "Principal Investigator",
      image: "images/Professer_Jeon.png",
      bio: "Assistant Professor of Department of Computer Engineering/AI, Dong-A Univ.",
      email: "mwjeon@dau.ac.kr",
      links: {
        scholar: "#",
        linkedin: "#"
      },
      publicationIds: [
        "j1", "j2", 
        "c1", "c2", "c3", "c4", "c5", "c6", 
        "pat1", "pat2", "pat3", "pat4", "pat5", "pat6", "pat7", "pat8"
      ],
      // 상세 정보
      education: [
        {
          degree: "Electrical Engineering and Computer Science Ph.D",
          institution: "Seoul National University",
          period: "2009 - 2014"
        },
        {
          degree: "Electrical Engineering and Computer Science M.S.",
          institution: "Seoul National University",
          period: "2007 - 2009"
        },
        {
          degree: "School of Electrical Engineering, B.S",
          institution: "Seoul National University",
          period: "2001 - 2007"
        }
      ],
      career: [
        {
          title: "Solidigm (formerly Intel)/ SK hynix America, California, US",
          organization: "Program Manager(Data center Engineering Group) / Director",
          period: "2023 - 2025"
        },
        {
          title: "SK hynix, Bundang",
          organization: "R&D Team Leader / NAND Solution Dev. Department",
          period: "2014 - 2023"
        },
        {
          title: "SK Inc., Seoul",
          organization: "Chairman’s office, Seoul, Korea",
          period: "2022"
        }
      ]
    },
    {
      id: "m2",
      name: "Hyunwoo Kim",
      role: "M.S. Student",
      image: "images/MSstudent_Kim.jpg",
      bio: "1st year M.S. Student Dong-A Univ.",
      email: "2671530@donga.ac.kr",
      publicationIds: ["p1"]
    },
    {
      id: "m3",
      name: "Jihwan Park",
      role: "Undergraduate Resercher",
      image: "images/student.png",
      bio: "4th-year, Electronic Eng. Dong-A Univ.",
      email: ".",
      publicationIds: ["p1"]
    },
    {
      id: "m4",
      name: "Chaejung Lim",
      role: "Undergraduate Resercher",
      shortIntro: "좋은 연구자가 되기 위해 최선을 다하겠습니다.",
      image: "images/student.png",
      bio: "3rd-year, AI. Dong-A Univ.",
      email: "a01042920043@gmail.com",
      publicationIds: ["p1"]
    },
    {
      id: "m5",
      name: "HyeonA Jeon",
      role: "Undergraduate Resercher",
      image: "images/Researcher_Jeon.jpg",
      bio: "3rd-year, AI. Dong-A Univ.",
      email: "2443636@donga.ac.kr",
      publicationIds: ["p1"]
    }
  ],
  projects: [
    {
      id: "pr1",
      title: "예시 과제",
      description: "진행 중 과제",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
      status: "ongoing"
    },
    {
      id: "pr2",
      title: "예시 과제",
      description: "완료 된 과제",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      status: "completed"
    }
  ],
  news: [
    {
      id: "n1",
      date: "2024-03-01",
      content: "EPASA LAB receives research grant for Edge AI optimization."
    },
    {
      id: "n2",
      date: "2024-02-15",
      content: "New paper accepted at CVPR 2024. Congratulations to the team!"
    }
  ],
  contact: {
    address: "부산광역시 사하구 낙동대로550번길 37(하단동) 동아대학교 승학캠퍼스 공대5호관 S06-627",
    email: "mwjeon@dau.ac.kr",
    phone: "+82 10-8628-2344",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.1734817161957!2d128.96765523132188!3d35.116774320740646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c25d14c1764f%3A0x9f345b4d72a391e7!2z64-Z7JWE64yA7ZWZ6rWQIOyKue2Vmey6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1774276862427!5m2!1sko!2skr"
  }
};
