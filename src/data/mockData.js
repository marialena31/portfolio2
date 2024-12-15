export const mockData = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    description: "A brief description about yourself and your expertise",
    image: "/images/profile.jpg"
  },
  about: {
    highlights: [
      {
        title: "Background",
        description: "Your professional background"
      },
      {
        title: "Experience",
        description: "Years of experience and key achievements"
      }
    ]
  },
  skills: {
    technical: [
      {
        category: "Frontend",
        items: ["React", "Vue.js", "Angular", "HTML5", "CSS3"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Python", "Java", "PHP"]
      },
      {
        category: "Other",
        items: ["Git", "Docker", "AWS", "Agile"]
      }
    ]
  },
  services: [
    {
      title: "Web Development",
      description: "Full-stack web development services",
      icon: "web"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile development",
      icon: "mobile"
    },
    {
      title: "Consulting",
      description: "Technical consulting and architecture design",
      icon: "consulting"
    }
  ],
  portfolio: [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      image: "/images/project2.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "https://project2.com"
    }
  ],
  references: [
    {
      company: "Company 1",
      logo: "/images/company1.png",
      link: "https://company1.com"
    },
    {
      company: "Company 2",
      logo: "/images/company2.png",
      link: "https://company2.com"
    }
  ]
}
