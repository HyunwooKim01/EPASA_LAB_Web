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
    {
      id: "p1",
      title: "Efficient Edge Inference via Dynamic Architecture Scaling",
      authors: "J. Doe, S. Smith, K. Lee",
      venue: "IEEE Transactions on Computers",
      year: 2024,
      link: "#",
      tags: ["Edge AI", "System Design"]
    },
    {
      id: "p2",
      title: "Physical-Aware Neural Network Pruning for Robotics",
      authors: "A. Park, J. Doe",
      venue: "ICRA 2023",
      year: 2023,
      link: "#",
      tags: ["Robotics", "Optimization"]
    }
  ],
  members: [
    {
      id: "m1",
      name: "Prof. Myeongwoon Jeon",
      role: "Principal Investigator",
      image: "images/Professer_Jeon.png",
      bio: "Assistant Professor of Department of Computer Engineering/AI, Dong-A Univ.",
      email: "john.doe@university.edu",
      links: {
        scholar: "#",
        linkedin: "#"
      },
      publicationIds: ["p1", "p2"],
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
          title: "Senior Researcher",
          organization: "Tech Company",
          period: "2018 - 202X"
        },
        {
          title: "Postdoctoral Fellow",
          organization: "Research Lab",
          period: "2014 - 2018"
        }
      ],
      experience: [
        "202X - Present: Assistant Professor, Dong-A Univ.",
        "202X - 202X: Researcher, Example Institute"
      ]
    },
    {
      id: "m2",
      name: "Hyunwoo Kim",
      role: "M.S. Student",
      image: "images/graduate_student.png",
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
      email: ".",
      publicationIds: ["p1"]
    },
    {
      id: "m5",
      name: "Hyuna Jeon",
      role: "Undergraduate Resercher",
      image: "images/student.png",
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
