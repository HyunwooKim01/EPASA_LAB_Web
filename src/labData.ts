import { LabData } from './types/lab';

export const LAB_DATA: LabData = {
  labName: "EPASA LAB",
  missionStatement: "Advancing the frontiers of Edge Physical AI System Architecture to bridge the gap between intelligent algorithms and physical reality.",
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
      name: "Prof. John Doe",
      role: "Principal Investigator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      bio: "Expert in computer architecture and edge intelligence.",
      email: "john.doe@university.edu",
      links: {
        scholar: "#",
        linkedin: "#"
      }
    },
    {
      id: "m2",
      name: "Sarah Smith",
      role: "Ph.D. Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      bio: "Focusing on hardware acceleration for deep learning.",
      email: "sarah.s@university.edu"
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
    address: "37 Nakdong-daero 550beon-gil, Saha-gu, Busan, 49315, Republic of Korea (동아대학교 승학캠퍼스 공대5호관)",
    email: "-",
    phone: "+82",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7903.508482333549!2d128.96797075623962!3d35.111865838593395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c25d14c1764f%3A0x9f345b4d72a391e7!2sDong-a%20University%2C%20Seunghak%20Campus!5e0!3m2!1sen!2skr!4v1772512215282!5m2!1sen!2skr"
  }
};
