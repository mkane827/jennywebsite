import app from './app';

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('main', {
            url: '',
            abstract: true,
            templateUrl: 'src/templates/main.html'
        })

        .state('home', {
            parent: 'main',
            url: '/home',
            templateUrl: 'src/templates/home.html'
        })
        .state('portfolio', {
            parent: 'main',
            url: '/portfolio',
            templateUrl: 'src/templates/portfolio.html',
            controller: portfolioController
        })
        .state('resume', {
            parent: 'main',
            url: '/resume',
            templateUrl: 'src/templates/resume.html',
            controller: resumeController
        })
        .state('about', {
            parent: 'main',
            url: '/about',
            templateUrl: 'src/templates/about.html'
        });
});

function portfolioController($scope) {
    $scope.pressReleases = [
        {
            text: 'Determan Go Green Press Release',
            link: '/assets/Determan Go Green Press Release Pollock.pdf'
        },
        {
            text: 'Sig Experience Press Release',
            link: '/assets/SIG Exp General Press Release Pollock.pdf'
        },
        {
            text: 'East Carolina Chartering Press Release',
            link: '/assets/East Carolina Chartering Press Release .pdf'
        }
    ];
    $scope.writing = [
        {
            text: 'Blog: 5 Tech Tools You Need To Use In Your Job Search ',
            link: 'http://comerecommended.com/job-search-technology-2/'
        },
        {
            text: 'Blog: 12 Most Pressing Reasons To Get Your Company Using Social Media',
            link: '/assets/12 Most Pressing Reasons to Get Your Company Using Social Media.docx'
        },
        {
            text: 'Blog: Is Twitter a Valid Source for Journalism and Academia ',
            link: 'http://www.thesocialpenguinblog.co.uk/2012/04/25/is-twitter-a-valid-source-for-journalism-and-academia/'
        },
        {
            text: 'Blog: 10 Surefire Ways to Promote Your Blog on Twitter',
            link: 'assets/10 Surefire Ways to Promote Your Blog Using Twitter.docx'
        },
        {
            text: 'Kappa Sigma Greeting Letter',
            link: 'assets/Kappa Sigma Greeting Letter Corporate Comm Writing .pdf'
        }
    ];
    $scope.design = [
        {
            text: '60 for 60 Basketball AFC',
            link: 'assets/60 for 60 Basketball AFC Design.pdf'
        },
        {
            text: 'Newsletter May 2013 Tomahawk',
            link: 'assets/MAY 2013 TOMAHAWK ASP Design and Writing .pdf'
        },
        {
            text: '3 Facebook Cover Photos ASP',
            link: 'assets/3 Facebook Cover Photos ASP.pdf'
        },
        {
            text: 'Zeta Nu Chartering Program ASP',
            link: 'assets/Zeta Nu Chartering Banquet Program ASP Design.pdf'
        },
        {
            text: 'Volunteer: C is for Character Coloring Book Tri-Sigma',
            link: 'assets/C is for Character Coloring Book Volunteer Design .pdf'
        }

    ];
    $scope.academic = [
        {
            text: 'Uber Media Analysis Ball State University',
            link: 'assets/Uber Media Analysis Project Final JKP.docx'
        },
        {
            text: 'Starbucks Press Release Ball State University (Assignment: Write a press release for a creative product for your assigned client, Starbucks)',
            link: 'assets/Starbucks News Release Pollock .docx'
        },
        {
            text: 'Corporate Social Responsibility Case Study: Sea World and Blackfish',
            link: 'assets/Corporate Social Responcibility Case Study Sea World BSU .docx'
        }
    ];
}

function resumeController($scope) {
    $scope.jobs = [
        {
            position: 'Territory Manager/Trade Marketing',
            company: 'RJ Reynolds',
            items: [
                'Currently managing a territory with over $20,400,000 per year B2B sales focusing on SMBs',
                'Used data sets to determine best contract choices and business opportunities for over 150 retail outlets',
                'Focused on successfully handling multiple projects including three new product launches in 18 months',
                'Implemented a national marketing plan for a Fortune 500 company in regional and local outlets',
                'Led the Eau Claire Division in the placement of the most vouchers out of any division in the Midwest totaling over $78,000 in extra sales as a division and $11,000 individually',
                'Exceeded the customer engagement goal by over 100 percent for 2015',
                'Built outstanding relationships with store managers/owners by providing expert consumer insights and counsel through the development of over 50 individual merchandising and business plans',
                'Participated in relationship marketing by conducting effective 1:1 consumer engagement through a thorough understanding of consumer marketing brand strategies'
            ]
        },
        {
            position: 'Marketing Coordinator',
            company: 'Automotive Finance Corporation [subsidiary of KAR]',
            items: [
                'Provided marketing support for national brand (AFC) with over 100 national and international AFC locations',
                'Created and distributed over 15 print media campaigns for independent automotive dealers',
                'Online success was measured using analytics software, lead the cross-functional team deciding which software to use and trained the staff on the selected platform, Google Analytics ',
                'Planned and organized company participation in two industry trade shows including a national event in Las Vegas'
            ]
        },
        {
            position: 'Assistant Director of Marketing and Communications',
            company: 'Alpha Sigma Phi Fraternity',
            items: [
                'Developed a year-long communications plan that included a full range of traditional and new media utilizing an $80,000 budget',
                'Assisted in optimizing social media campaigns for Facebook, Twitter, LinkedIn and Instagram',
                'Reduced annual expenses by over 25 percent by shifting from print publications to both print and digital publications and renegotiating contracts with vendors',
                'Manage multiple vendor and other external relationships, including strategic partnerships',
                'Developed collateral marketing to support national organization, 100 colleges, and 13 new chapters at colleges across the country',
                'Managed national website including new copy, photographs, graphics and links',
                'Coordinated annual individual (undergraduate and alumni) and chapter awards process',
                'Coordinated and worked with nine editorial board volunteers to produce The Tomahawk, a national print and digital magazine with a circulation of 40,000 print and 20,000 digital '
            ]
        },
        {
            position: 'Social Media Intern',
            company: 'Four51',
            items: [
                'Selected, approved and edited all content for the 30-day, monthly digital publication calendar for Four51’s FanTools (SaaS product) an online order management system for B2B eCommerce and social media management',
                'Implemented social media user acquisition and user engagement. The Twitter product handle went from 100 to 700 followers, a 600 percent increase over 4 months the company handle went from 70 to 250 a 360 percent increase over two months',
                'Developed and produced daily blog posts about social media using WordPress publishing over 30 posts using performance metrics (Google Analytics and Optimizely) to measure success'
            ]
        },
        {
            position: 'Communications Coordinator',
            company: 'Determan Fluid Solutions [now Westmor Industries]',
            items: [
                'Coordinated, created and designed digital and print collateral products for a full-service provider of aviation fueling equipment and services',
                'Selected and approved content for internal and external print and digital newsletters in AP style',
                'Established company social media channels including as Facebook, Twitter, LinkedIn and YouTube leveraged Buffer and Hootsuite for scheduling ',
                'Provided educational programming and guidance on social media usage for sales force',
                'Obtained key media placements including two trade publications and one local, wrote press releases, conducted interviews',
                'Started company blog and identified keywords to assist in search engine optimization'
            ]
        },
        {
            position: 'Public Relations Intern',
            company: 'Kocina Marketing and Branding',
            items: [
                'Created relationships with journalists, bloggers and clients for a full service hybrid agency with a pay per interview performance-based PR model',
                'Helped manage accounts by sending press kits (media kits), monitoring social media outlets and creating portfolios',
                'Worked collaboratively with publicists to create and implement strategic and tactical marketing plans for consumer packaged goods, medical devices, large corporations and authors ',
                'Distributed press kits, updated the website, ran social media plans for clients, set up and assisted with marketing classes, assisted in archive management, and conducted marketing and vertical research'
            ]
        },
        {
            position: 'News Writer',
            company: 'The Reporter (Minnesota State University Newspaper)',
            items: [
                'Wrote over 25 articles and five front page articles on topics including social media effects, new social media platform, politics, federal laws, and campus events'
            ]
        },
        {
            position: 'Marketing Intern',
            company: 'Radio Mankato',
            items: [
                'Coordinated branding and communication for six radio stations with over 250,000 listeners in southern Minnesota',
                'Planned, executed or attended over 12 promotional events for the stations over three months'
            ]
        },
        {
            position: 'Marketing Liaison',
            company: 'Children’s Theatre Company (CTC)',
            items: [
                'Acted as a liaison between Lakeville high school and St. Paul high school students and CTC',
                'Created alternative marketing strategies and planned events to provide inner city youth with safe activities',
                'Assisted in creation, approval and archive management of collateral products'
            ]
        }
    ];

    $scope.memberships = [
        {
            position: 'National Programming Team',
            company: 'Sigma Sigma Sigma National Sorority',
            items: [
                'Work collaboratively with national staff and volunteers to plan events and curriculum that advance the strategic initiatives and promote the values of the organization'
            ]
        },
        {
            position: 'Programs Committee',
            company: 'Public Relations Society of America | Minneapolis Chapter',
            items: [
                'Worked collaboratively with 12 programming team members'
            ]
        }
    ];
}
