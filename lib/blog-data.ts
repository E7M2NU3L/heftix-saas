export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Leveraging AI for Better Patient Outcomes in Psychiatry',
      excerpt: 'Explore how artificial intelligence is revolutionizing psychiatric care and improving treatment efficacy.',
      category: 'Technology',
      author: 'Dr. Emily Chen',
      date: 'May 15, 2023',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Streamlining Your Psychiatric Practice with Heftix',
      excerpt: 'Learn how Heftix can help you manage appointments, client data, and billing more efficiently.',
      category: 'Practice Management',
      author: 'Dr. Michael Johnson',
      date: 'May 10, 2023',
      readTime: '4 min read'
    },
    {
      id: '3',
      title: 'The Importance of Data Security in Mental Health Care',
      excerpt: 'Understand the critical role of HIPAA compliance and data protection in modern psychiatric practices.',
      category: 'Security',
      author: 'Sarah Thompson, CISSP',
      date: 'May 5, 2023',
      readTime: '6 min read'
    },
    {
      id: '4',
      title: 'Telehealth in Psychiatry: Best Practices and Challenges',
      excerpt: 'Discover how to effectively integrate telehealth services into your psychiatric practice.',
      category: 'Telehealth',
      author: 'Dr. Alex Rodriguez',
      date: 'April 30, 2023',
      readTime: '7 min read'
    },
    {
      id: '5',
      title: 'Enhancing Patient Engagement with Digital Tools',
      excerpt: 'Explore innovative ways to improve patient engagement and treatment adherence using digital platforms.',
      category: 'Patient Care',
      author: 'Dr. Lisa Patel',
      date: 'April 25, 2023',
      readTime: '5 min read'
    }
  ];
  
  