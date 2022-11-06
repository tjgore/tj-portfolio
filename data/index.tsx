import StyledLink from '../components/StyledLink';

export type ExpType = {
  id: string;
  position: string;
  duration: string;
  years: string;
  company: string;
  companyImage: string;
  location: string;
  technologies: string[];
  points: {
    key: string;
    body: React.ReactNode | string;
  }[];
};

// Experience data
export const experience: ExpType[] = [
  {
    id: 'Cyb',
    position: 'Senior Software Engineer',
    duration: 'Mar 2019 - May 2022',
    years: '3 years 4 months',
    company: 'Cybrary',
    companyImage: 'https://portfolio.us-east-1.linodeobjects.com/cybrary-logo.png',
    location: 'College Park, Maryland',
    technologies: ['Laravel', 'React', 'Tailwind CSS', 'Semantic UI React', 'PostgreSQL', 'Git', 'AWS S3', 'AWS SQS', 'AWS SNS', 'Algolia', 'Contentful'],
    points: [
      {
        key: 'new-product',
        body: (
          <>
            Built and managed a serverless job board product with over nine search filters using React, Mobx, Tailwind CSS, Node.js, Algolia, and Mapbox to validate market fit.{' '}
            <StyledLink href="#talent">View Project</StyledLink>
          </>
        ),
      },
      {
        key: 'notification',
        body: `Built notification features and preferences across Laravel microservices using AWS SNS and SQS to alert users of course activities.`,
      },
      {
        key: 'migrate',
        body: `Migrated and normalized large amounts of data from WordPress structured databases to a Laravel API to improve data management.`,
      },
      {
        key: 'sql',
        body: `Worked with complex SQL queries to generate user enrollment and activity reports on a schedule.`,
      },
      {
        key: 'ratings',
        body: `Used Laravel to build ratings and reviews for the course platform to allow users to give feedback and to allow team members to collect data on what's working.`,
      },
      {
        key: 'immersive',
        body: `Using React, Tailwind CSS, a Laravel API, and Vimeo, I rebuilt an interactive course view to be smarter, include course challenges, and be more intuitive in guiding users to complete their courses.`,
      },
      {
        key: 'form-engine',
        body: `Created a dynamic React form engine to allow frontend engineers to pull form structures and save form data in a consistent manner.`,
      },
      {
        key: 'mentor',
        body: 'Worked with junior front-end engineers to help them learn how to use Laravel and other back-end technologies',
      },
      {
        key: 'both-ends',
        body: `Released and worked on both Laravel backend and React frontend features, allowing teammates to focus on other tasks.`,
      },
    ],
  },
  {
    id: 'Full-APSCA',
    position: 'Remote Full-stack Engineer',
    duration: 'Aug 2016 - Aug 2022',
    years: '5 years 8 months',
    company: 'APSCA',
    companyImage: 'https://portfolio.us-east-1.linodeobjects.com/apsca-logo.png',
    location: 'Shanghai, China',
    technologies: ['Laravel', 'Javascript', 'Bootstrap', 'MySQL', 'Git', 'LAMP', 'Cloudways', 'Paypal API', 'Mastercard Payment API'],
    points: [
      {
        key: 'developed',
        body: (
          <>
            Developed a Laravel-based CMS and event management system with Paypal’s payment API under strict guidelines and deadlines.{' '}
            <StyledLink href="#APSCA-CMS">View Project</StyledLink>
          </>
        ),
      },
      {
        key: 'managed',
        body: `Managed production of the company’s website that deals with members such as Sony, Visa, Toshiba, and more.`,
      },
      {
        key: 'super',
        body: `Supervised ongoing maintenance and support for new
        features with git version control while working on
        multiple PHP projects.`,
      },
      {
        key: 'revamp',
        body: `Worked in Linux environments and improved server maintenance to reduce server costs by 95%.`,
      },
      {
        key: 'database',
        body: `Managed a MySQL database and executed SQL queries to
        collect and analyze data for improved performance.`,
      },
    ],
  },
  {
    id: 'ID4',
    position: 'Full-stack PHP Developer Contract',
    duration: 'Aug 2017 - 2019',
    years: '2 years',
    company: 'ID4Africa',
    companyImage: 'https://portfolio.us-east-1.linodeobjects.com/id4africa-logo.png',
    location: 'New York',
    technologies: ['Laravel', 'Bootstrap', 'Javascript', 'MySQL', 'Git', 'LAMP', 'Cloudways', 'Paypal API'],
    points: [
      {
        key: 'built',
        body: (
          <>
            Built a PHP-based registration system with Paypal’s payment API that surpassed the limitations of online solutions such as registration validation and payment flow
            requirements. <StyledLink href="#ID4">View Project</StyledLink>
          </>
        ),
      },
      {
        key: 'main',
        body: `Maintained and iterated quickly using Git to provide new features to the registration system for Africa’s Largest Forum and Expo on Digital Identity.`,
      },
      {
        key: 'constructed',
        body: `Constructed and managed the International Identity Day website using HTML, SASS, Bootstrap, Git, and Javascript.`,
      },
      {
        key: 'executed',
        body: `Executed Linux commands to configure a LAMP environment for improved performance and security.`,
      },
      {
        key: 'success',
        body: `Successfully worked in a remote development environment with a diverse team.`,
      },
    ],
  },
  {
    id: 'cibc-fcib',
    position: 'Transaction Processor',
    duration: 'April 2012 - June 2013',
    years: '1 year 3 months',
    company: 'CIBC FirstCaribbean International Bank',
    companyImage: '',
    location: 'Antigua',
    technologies: ['Java'],
    points: [
      {
        key: 'java-desktop',
        body: `Built a Java desktop application to speed up workflow with organizing files which was adapted throughout my department for four years.`,
      },
      {
        key: 'transaction',
        body: `Accurately processed 700+ transactions per week to meet multiple hourly deadlines on a daily basis.`,
      },
    ],
  },
];

export type ProjectType = {
  id: string;
  name: string;
  image: string;
  technologies: string[];
  description: React.ReactNode | string;
  link: string;
  linkText: string;
  hasModal?: true;
  modalContent?: ModalContentType;
};

type ModalContentType = {
  title: string;
  description: string;
  items: {
    id: string;
    image: string;
    name: string;
    technologies?: string[];
    description?: React.ReactNode | string;
    link?: string;
    linkText?: string;
    editLink?: string;
    editLinkText?: string;
  }[];
};

// Projects data
export const projects: ProjectType[] = [
  {
    id: 'talent',
    name: 'Cybrary Talent MVP',
    image: 'https://portfolio.us-east-1.linodeobjects.com/talent-profile.jpeg',
    technologies: ['React', 'React Select', 'Tailwind CSS', 'Serverless framework', 'Laravel', 'Node.js', 'Algolia'],
    description: `Built and managed an MVP with the goal to connect managers and recruiters to Cybrary-trained job seekers. I handled the React frontend along with the design and worked with a product manager and a senior engineer for the serverless Node.js backend. I built many components using Tailwind CSS and iterated on multiple designs while reviewing the Node.js backend code.`,
    link: '',
    linkText: 'View React Pages I designed and built.',
    hasModal: true,
    modalContent: {
      title: 'Road To Talent MVP',
      description:
        'The Cybrary Talent app is a stand alone service that allowed users to opt into the talent program. The program connected users of the platform to managers and recruiters looking to hire new talent. Below is a collection of all the design and feature iterations that lead up to the final product.',
      items: [
        {
          id: 'onboarding-personal-v1',
          name: 'Onboarding Multi Step Form - Personal Step 1 | Version 1',
          image: 'https://portfolio.us-east-1.linodeobjects.com/onboarding-personal-v1-min.png',
          description: 'This form pulled existing user data from a Laravel microservice and merged it with data the user submits.',
        },
        {
          id: 'onboarding-preferences-v1',
          name: 'Onboarding Multi Step Form - Preferences Step 2 | Version 1',
          image: 'https://portfolio.us-east-1.linodeobjects.com/onboarding-preferences-v1-min.png',
          description: 'The preferences form works similar to the previous form.',
        },
        {
          id: 'onboarding-progressbar-v1',
          name: 'Onboarding Multi Step Form | Version 2',
          image: 'https://portfolio.us-east-1.linodeobjects.com/onbaording-pref-progress-v2-min.png',
          technologies: ['React Select', 'Google maps API'],
          description: 'Updated the progress bar, added progress completion, and added the "next" step in the form.',
        },
        {
          id: 'final-onboarding-personal',
          name: 'Onboarding Multi Step Form - Personal Step 1 | Final Version',
          image: 'https://portfolio.us-east-1.linodeobjects.com/final-onboarding-personal-min.png',
          technologies: ['React Select', 'react-phone-number-input', 'Mapbox API'],
          description:
            'Updated the navbar design to match the course platform, added more form fields to collect more data and updated the multi step form progress bar. The address form fields were also updated to use Mapbox instead of Google maps.',
        },
        {
          id: 'final-onboarding-preferences',
          name: 'Onboarding Multi Step Form - Preferences Step 2 | Final Version',
          image: 'https://portfolio.us-east-1.linodeobjects.com/final-onboarding-preference-min.png',
          description: 'Updated preferences form fields and allow users to add multiple addresses with Mapbox and React Select.',
        },
        {
          id: 'profile-v1',
          name: 'Talent Profile | Version 1',
          image: 'https://portfolio.us-east-1.linodeobjects.com/talent-profile-v1-min.png',
          description: "Collected and displayed user's personal info, job preferences, and skills.",
        },
        {
          id: 'profile-v2',
          name: 'Talent Profile | Version 2',
          image: 'https://portfolio.us-east-1.linodeobjects.com/talent-profile-v2-min.png',
          description: "Added user's work experience and education.",
        },
        {
          id: 'profile-v3',
          name: 'Talent Profile | Version 3',
          image: 'https://portfolio.us-east-1.linodeobjects.com/talent-profile-v3.png',
          description: 'Added certified skills with golden badges, displayed courses the user had completed and displayed certificates of completion.',
        },
        {
          id: 'final-profile',
          name: 'Talent Profile | Final Version',
          image: 'https://portfolio.us-east-1.linodeobjects.com/final-talent-profile-min.png',
          technologies: ['React Select', 'react-phone-number-input', 'react-datepicker', 'Mapbox API'],
          description:
            'This is the final profile design. The screenshot above shows the edit state for the personal info, an empty state for the certification section, some ads promoting the main training platform, and a smart progress bar to show profile completion. Also for usability and support, intercom and a scroll to top button was added to the bottom right of the page.',
        },
        {
          id: 'board-prototype',
          name: 'Talent Job Board | Prototype',
          image: 'https://portfolio.us-east-1.linodeobjects.com/talent-prototype-min.png',
        },
        {
          id: 'board-v1',
          name: 'Talent Job Board | Version 1',
          image: 'https://portfolio.us-east-1.linodeobjects.com/talent-v1-min.png',
        },
        {
          id: 'final-board',
          name: 'Talent Job Board | Final Version',
          image: 'https://portfolio.us-east-1.linodeobjects.com/talent-search.png',
          technologies: ['Algolia'],
          description:
            'The final version for the talent job board with search filters, favorites tab, contacted candidates tab, sorting options and saved search results. Algolia is used to handle the complex search. This screen shows how recruiters and manager can search, view, favorite and contact candidates.',
        },
        {
          id: 'save-search',
          name: 'Talent Job Board Save Search',
          image: 'https://portfolio.us-east-1.linodeobjects.com/save-search-filter-min.png',
          description:
            'The above screenshot shows how saved search works. On saving a group of search filters, you can give the search a name. You can also select or update from a list of already saved search filters. All data is sent to a serverless node.js backend for processing.',
        },
      ],
    },
  },
  {
    id: 'APSCA-CMS',
    name: 'APSCA Custom CMS and Event Management',
    image: 'https://portfolio.us-east-1.linodeobjects.com/apsca-admin.png',
    technologies: ['Laravel', 'Javascript', 'MySQL', 'Git', 'LAMP', 'Cloudways', 'Paypal API', 'Mastercard Payment API'],
    description: `Rebuilt the website, restructured the database, refactored the code and simplified the server setup to reduce server cost.`,
    link: 'https://apsca.org/',
    linkText: 'Company Site',
  },
  {
    id: 'ID4',
    name: 'ID4Africa Registration System',
    image: 'https://portfolio.us-east-1.linodeobjects.com/id4africa-registration.png',
    technologies: ['Laravel', 'Javascript', 'MySQL', 'Git', 'LAMP'],
    description: `Custom registration system built to address the limitations of online solutions.`,
    link: 'https://id4africa.com/',
    linkText: 'Company Site',
  },
  {
    id: 'Design',
    name: 'An Eye for UI Design',
    image: 'https://fxt-assets.us-east-1.linodeobjects.com/herov2.png',
    technologies: ['Next.js', 'Tailwind CSS', 'UI Design', 'Styled-components', 'Codesandbox'],
    description: `This is a collection of UI designs built for projects, prototyping or just for design practice.`,
    link: '',
    linkText: 'View Multiple Designs',
    hasModal: true,
    modalContent: {
      title: 'An Eye For Design',
      description: 'This is a collection of UI designs built for projects, prototyping, and design practice. Feel free to view and edit the live demos.',
      items: [
        {
          id: 'red',
          name: 'Red Marketing Section',
          image: 'https://fxt-assets.us-east-1.linodeobjects.com/herov2.png',
          technologies: ['Tailwind CSS', 'React'],
          link: 'https://hj5dge.csb.app/',
          linkText: 'Live Demo',
          editLink: 'https://codesandbox.io/s/blue-marketing-6nk66b',
          editLinkText: 'Edit on Codesandbox',
        },
        {
          id: 'eventio',
          name: 'Event Landing Page',
          image: 'https://portfolio.us-east-1.linodeobjects.com/eventio.png',
          technologies: ['Next.js', 'Tailwind CSS', 'Contentful API', 'Vercel'],
          description: 'Built this project to test out Vercel, Contentful API, and Next.js static and server rendering.',
          link: 'https://eventio-static-95khp5fsn.now.sh/',
          linkText: 'Live Demo',
        },
        {
          id: 'blue',
          name: 'Blue Marketing Section',
          image: 'https://fxt-assets.us-east-1.linodeobjects.com/herov1.png',
          technologies: ['Tailwind CSS', 'React'],
          link: 'https://6nk66b.csb.app/',
          linkText: 'Live Demo',
          editLink: 'https://codesandbox.io/s/blue-marketing-6nk66b',
          editLinkText: 'Edit on Codesandbox',
        },
        {
          id: 'actor1',
          name: 'Threat Actor Single Course Outline',
          image: 'https://portfolio.us-east-1.linodeobjects.com/threat-outline.png',
        },
        {
          id: 'actor2',
          name: 'Threat Actor Listing',
          image: 'https://portfolio.us-east-1.linodeobjects.com/threat-actor-listing.png',
          technologies: ['React', 'Tailwind CSS', 'Laravel API'],
          description: (
            <>
              The 2 designs above are part of a multi page project I completed while working at Cybrary. <br /> The Threat Actor Listing is a listing of courses with aggregated
              data such as hours needed to complete the course, the total CEU, and the status to show if the course is coming soon, completed, or in progress. <br /> For this
              project, I also had to give users the ability to subscribe to the course category to get a notification when a new course is added to the list. The notification
              feature was handled with Laravel which I also created.
            </>
          ),
          link: 'https://www.cybrary.it/',
          linkText: 'Company Site',
        },
        {
          id: 'pricing',
          name: 'Pricing Section',
          image: 'https://portfolio.us-east-1.linodeobjects.com/pricing.png',
          technologies: ['React', 'Styled-components'],
          description:
            'This design was built to compare Styled-components against Tailwind CSS. When using styled-components, I like that every component is kind of forced to be named. This makes it easier to follow what every element is responsible for. I still prefer Tailwind CSS because it just feels faster than writing css, which I have to do with Styled-components.',
          link: 'https://0co12.csb.app/',
          linkText: 'Live Demo',
          editLink: 'https://codesandbox.io/s/pricing-0co12',
          editLinkText: 'Edit on Codesandbox',
        },
        {
          id: 'profile',
          name: 'Profile Section',
          image: 'https://portfolio.us-east-1.linodeobjects.com/profile.png',
          technologies: ['React', 'Tailwind CSS'],
          description:
            'This design was built to compare Styled-components against Tailwind CSS. When using styled-components, I like that every component is kind of forced to be named. This makes it easier to follow what every element is responsible for. I still prefer Tailwind CSS because it just feels faster than writing css, which I have to do with Styled-components.',
          link: 'https://ullfj.sse.codesandbox.io/',
          linkText: 'Live Demo',
          editLink: 'https://codesandbox.io/s/profile-ullfj?file=/src/App.js',
          editLinkText: 'Edit on Codesandbox',
        },
        {
          id: 'freshly',
          name: 'Freshly - A Book Store',
          image: 'https://portfolio.us-east-1.linodeobjects.com/freshly.png',
          technologies: ['Next.js', 'Tailwind CSS', 'New York Times Book API', 'Vercel'],
          description: 'This site uses Next.js with the NY Times Books API to display book data for visitors.',
          link: 'https://freshly-tjgore.vercel.app/',
          linkText: 'Live Demo',
        },
      ],
    },
  },
  {
    id: 'BT',
    name: 'Barry Taxi',
    image: 'https://portfolio.us-east-1.linodeobjects.com/barry-taxi.jpeg',
    technologies: ['Next.js', 'Tailwind CSS', 'UI Design', 'Netlify', 'Netlify Functions'],
    description: `Tremendously boosted the online presence for a small local business which attracted international clients and topped the number #1 position on tripadvisor.`,
    link: 'https://www.barrytaxi.com/',
    linkText: 'Company Site',
  },
  {
    id: 'Move',
    name: 'Move and Groove',
    image: 'https://portfolio.us-east-1.linodeobjects.com/move-and-groove.png',
    technologies: ['Ruby on Rails', 'Heroku', 'UI Design'],
    description: `Move and Groove is an app with devise authentication to track one’s fitness habits`,
    link: 'https://fitness-groove2.herokuapp.com/',
    linkText: 'Project Site',
  },
  {
    id: 'Andio',
    name: 'Andio',
    image: 'https://portfolio.us-east-1.linodeobjects.com/andio.png',
    technologies: ['Ruby on Rails', 'React', 'Google map API', 'Heroku', 'UI Design'],
    description: 'Andio is a web app with Google Maps API that connects people in need to willing volunteers in their neighborhood.',
    link: 'https://andio-react.surge.sh/',
    linkText: 'Project Site',
  },
  {
    id: 'Bike',
    name: 'Bike Tour',
    image: 'https://portfolio.us-east-1.linodeobjects.com/biketour.png',
    technologies: ['Ruby on Rails', 'React', 'Google map API', 'UI Design', 'Surge'],
    description: '',
    link: 'https://biketour.surge.sh/',
    linkText: 'Project Site',
  },
];

export type ReviewType = {
  id: string;
  body: React.ReactNode | string;
  name: string;
  jobTitle: string;
  avatar: string;
};

// Reviews database
export const reviews: ReviewType[] = [
  {
    id: 'Mike',
    body: (
      <>
        <span className="mb-1 inline-flex rounded-lg bg-gradient-to-r from-[#FDFC47] to-[#24FE41] px-2 text-sm font-bold text-slate-900">TJ is a huge asset to the team.</span> I
        especially appreciate his ability and willingness to take on projects of all scales, his candid feedback, drive, and positive attitude. Everyone in Product and Engineering
        enjoy working with TJ and praise his abilities and work ethic. He posses a broad and deep technical skill set that enables him to be extremely versatile.
      </>
    ),
    name: 'Mike Gruen',
    jobTitle: 'Former Engineer Director at Cybrary',
    avatar: '',
  },
  {
    id: 'Greg',
    body: (
      <>
        TJ redesigned and rebuilt our website and backend to make it more intuitive and mobile friendly. He did a great job from both a UX and security perspective and <br />
        <span className="mt-1 inline-flex rounded-lg bg-gradient-to-r from-[#FDFC47] to-[#24FE41] px-2 font-bold text-slate-900">
          we continue to trust him for further development
        </span>{' '}
        and maintenance.
      </>
    ),
    name: 'Greg Pote',
    jobTitle: 'Chairman of APSCA',
    avatar: 'https://portfolio.us-east-1.linodeobjects.com/greg.jpeg',
  },
  {
    id: 'Shauna',
    body: (
      <>
        TJ is one of the very few people I personally know who&apos;s made his passion define his profession - a truly powerful combination with unimaginable outcomes!{' '}
        <span className="mt-1 inline-flex rounded-lg bg-gradient-to-r from-[#FDFC47] to-[#24FE41] px-2 font-bold text-slate-900">
          He checks all the boxes when it comes to hard work matched with integrity and all heart.
        </span>
      </>
    ),
    name: 'Shauna Taylor',
    jobTitle: 'Marcom Manager at ID4Africa',
    avatar: 'https://portfolio.us-east-1.linodeobjects.com/shauna.jpeg',
  },
  {
    id: 'Barry',
    body: (
      <>
        <span className="mt-1 inline-flex rounded-lg bg-gradient-to-r from-[#FDFC47] to-[#24FE41] px-2 font-bold text-slate-900">Working with TJ has been a great experience!</span>{' '}
        He designed and built a website for my taxi and tour business which has since emerged my business as a top five operator in Antigua on TripAdvisor. He&apos;s professional
        and knowledgeable about getting your business out there.
      </>
    ),
    name: 'Barry Oliver',
    jobTitle: 'CEO of Barry Taxi and Tours',
    avatar: 'https://portfolio.us-east-1.linodeobjects.com/barry-potrait.jpeg',
  },
  {
    id: 'Thomas',
    body: (
      <>
        TJ was one of my top students at OpenClassrooms who <br />
        <span className="mt-1 inline-flex rounded-lg bg-gradient-to-r from-[#FDFC47] to-[#24FE41] px-2 font-bold text-slate-900">
          I can&apos;t recommend enough! He is a hard worker
        </span>{' '}
        who pays close attention to detail and has the ability to solve complex problems by thinking outside the box.
      </>
    ),
    name: 'Thomas David',
    jobTitle: 'Mentor at OpenClassrooms',
    avatar: 'https://portfolio.us-east-1.linodeobjects.com/thomas.jpeg',
  },
];

export type FaqType = {
  id: string;
  question: React.ReactNode | string;
  answer: React.ReactNode | string;
};

// FAQs
export const faqs: FaqType[] = [
  {
    id: 'years',
    question: 'How many years of professional experience do you have in software development?',
    answer: 'Over 7 years.',
  },
  {
    id: 'tech',
    question: 'What technologies are you most proficient at? This does not include all  the tech I have used.',
    answer: 'React, Typescript, Next.js, Laravel, Docker, Git, MySQL, REST API, Micro services.',
  },
  {
    id: 'movie',
    question: "What's your favorite series and movie?",
    answer: `Movie: Avengers Endgame part 1 and 2 Series: Money Heist.`,
  },
  {
    id: 'strength-weakness',
    question: 'What are your strengths and weaknesses?',
    answer: (
      <>
        Strengths: I'm a continuous learner and very flexible. <br /> Weakness: I'm introverted so hyper-social settings tend to drain me. <br /> Fun fact: I once was a pretty good
        tour guide who gave presentations to groups of up to 50 people on a daily basis.
      </>
    ),
  },
  {
    id: 'hobbies',
    question: 'What are your hobbies?',
    answer: `Designing, reading, and recently started running.`,
  },
  {
    id: 'quote',
    question: "What's your favorite quote or phrase?",
    answer: `It’s all risky. The minute you were born it was risky. If you think trying is risky, wait until they hand you the bill for not trying.

    Investing is risky, having children is risky, getting married is risky, going into business is risky, it’s all risky.
    
    I’ll tell how risky life is. You aren’t going to get out alive. - Jim Rohn`,
  },
  {
    id: 'remote',
    question: 'Which do you prefer, in office or remote?',
    answer: `I'm currently looking for remote positions but if I find something compelling enough, I would consider being in the office.`,
  },
];
