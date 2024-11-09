import {timelineItemType} from "../App.types";

export const timelineData: timelineItemType[] = [
    {
      company: 'Plume Design',
      link: 'https://www.linkedin.com/company/plume-wifi/',
      location: 'Palo Alto, CA',
      jobTitle: 'Lead Front End Developer',
      start: '2018',
      end: '2024',
      details: [
        'Developed multiple B2B applications to support SaaS network optimization',
        'Created complex visualizations, controls and features in Angular and React',
        'Drove adoption of standards and methods to optimize development process',
        'Designed, develop and maintained network operations center used by global telecom companies',
        'Worked across internal teams to define and create features and products. (API/Product/Design/QA)',
        'Oversaw growth of team from 1 to 12+ members; creating a high performance team',
      ],
      screenshots: [
        { fileName:'plume3.png',
          description:'Detailed time domain graphs driven by APIs and realtime data'
        },
        { fileName:'plume1.png',
          description:'Realtime network topology via socket, rendered with D3 as a force graph'
        },
        { fileName:'plume2.png',
          description:'Interactive health check, status and alarm dashboard'
        },
        { fileName:'plume4.png',
          description:'Visual diagnostic tools for technicians to optimize network locations'
        },
        { fileName:'plume8.png',
          description:'Timeline data via REST reports specific metrics over time'
        },
        { fileName:'plume9.png',
          description:'Responsive, integrated dashboard used by technicians on tablets'
        }
      ]
    },
    {
      company: 'AgilOne',
      link: 'https://www.linkedin.com/company/agilone/',
      jobTitle: 'Lead Front End Developer',
      location: 'Sunnyvale, CA',
      start: '2015',
      end: '2018',
      details: [
        'Developed customer facing SAAS marketing application',
        'Architected stack and structure for complex Angular Material web applications',
        'Integrated third party components for ui, security and visualization (D3)',
        'Resolved tickets with legacy code base during upgrade cycle',
        'Built team of front end developers, and mentored junior developers'

      ],
      screenshots: [
        { fileName:'a1-1.png',
          description:'File system for server side marketing campaigns'
        },
        { fileName:'a1-2.png',
          description:'Marketing campaign segment generator for end users'
        },
        { fileName:'a1-3.png',
          description:'Web container designer for end users to lay out advertising assets'
        },
        { fileName:'a1-4.png',
          description:'SQL query builder for marketers to create targeting rules'
        }
      ]
    },
    {
      company: 'Badgeville',
      link: 'https://www.linkedin.com/company/badgeville/',
      jobTitle: 'Front End Developer',
      location: 'Redwood City, CA',
      start: '2014',
      end: '2015',
      details: [
        'Developed web applications for SAAS gamification platform',
        'Migrated legacy code from PHP stack to Angular with bootstrap',
        'Integrated Kendo chart library for analytic modules',
        'Developed complex user facing control panel components',
        'Mentored junior team members',
      ],
      screenshots: [
        { fileName:'bv0.jpg',
          description:'Gamification design wizard for end users to configure rules and rewards'
        },
        { fileName:'bv1.jpg',
          description:'API driven tree component used to configure game settings.'
        },
        { fileName:'bv2.jpg',
          description:'Reconfigurable dashboards enable selecting of over time data sets',
        },
        { fileName:'bv3.jpg',
          description:'Complex multidimensional charting across reconfigurable metrics'
        }

      ]
    },
  {
    company: 'Contracts',
    jobTitle: 'IOT Developer',
    location: 'Denver, CO',
    start: '2010',
    end: '2014',
    details: [
      'Prototyped hardware, built IOT pipelines, developed frontend/mobile applications',
      'Developed embedded linux and industrial control systems',
      'Integrated realtime sensor data to video overlay for sports broadcast',
      'Developed Internet TV for hospitality vertical'
    ],
    screenshots: [
      { fileName:'adrGarage.png',
        description:'(Adrenaline Garage) graphics generation for live sports broadcast'
      },
      { fileName:'beerlog.png',
        description:'(Beerlog) Keg flow and status monitoring'
      },
      { fileName:'simulcare.png',
        description:'(Simulcare II) Mobile controlled therapy device'
      },
      { fileName:'roomlinx.png',
        description:'(Roomlinx) Internet and POS integrated internet TV.'
      },
    ]
  }
  ];
