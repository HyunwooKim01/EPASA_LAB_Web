import { LabData } from './types/lab';

export const LAB_DATA: LabData = {
  labName: "EPASA LAB",
  missionStatement: `Edge Physical AI Systems Architecture Lab (EPASA)
    EPASA Lab은 현실 세계에서 자율적으로 행동하는 Edge & Physical AI 시스템을 연구합니다.`,
  heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
  researchAreas: [
    {
      id: "ra1",
      title: "Edge Computing",
      description: "Optimizing AI workloads for resource-constrained edge devices with low latency and high efficiency.",
      icon: "Cpu"
    },
    {
      id: "ra2",
      title: "Physical AI",
      description: "Integrating AI with physical systems, focusing on robotics, sensing, and real-world interaction.",
      icon: "Bot"
    },
    {
      id: "ra3",
      title: "System Architecture",
      description: "Designing novel hardware-software co-designed architectures for next-generation AI systems.",
      icon: "Layers"
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
      email: "a50935172@gmail.com",
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
      image: "images/student.png",
      bio: "3rd-year, AI. Dong-A Univ.",
      email: "a01042920043@gmail.com",
      publicationIds: ["p1"]
    },
    {
      id: "m5",
      name: "Hyuna Jeon",
      role: "Undergraduate Resercher",
      image: "images/Researcher_Jeon.jpg",
      bio: "3rd-year, AI. Dong-A Univ.",
      email: ".",
      publicationIds: ["p1"]
    }
  ],
  projects: [
    {
      id: "pr1",
      title: "Project NeuroEdge",
      description: "Developing a decentralized edge computing framework for autonomous drone swarms.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
      status: "ongoing"
    },
    {
      id: "pr2",
      title: "EcoArch",
      description: "Energy-efficient architecture for long-term environmental monitoring sensors.",
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
    address: "123 Science Road, Engineering Building #405, Innovation City",
    email: "contact@epasa-lab.org",
    phone: "+82-2-1234-5678",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2848242337813!2d126.9703453!3d37.5666103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f3323a16af%3A0x83130309331f08d2!2sSeoul%20City%20Hall!5e0!3m2!1sen!2skr!4v1709420000000!5m2!1sen!2skr"
  }
};
