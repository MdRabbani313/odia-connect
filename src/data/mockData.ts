import { GovService, PanjikaInfo, CitizenDocument, ApplicationTracker } from '../types';

export const GOV_SERVICES: GovService[] = [
  {
    id: 'subhadra',
    nameEn: 'Subhadra Yojana',
    nameOr: 'ସୁଭଦ୍ରା ଯୋଜନା',
    category: 'social',
    dept: 'Women & Child Development Dept.',
    description: 'Financial assistance voucher of ₹50,000 for women empowerment in Odisha.',
    fee: 'Free',
    processingDays: '7-14 Days',
    documents: ['Aadhaar Card', 'Ration Card', 'Bank Passbook (NPCI mapped)'],
    popular: true
  },
  {
    id: 'bsky',
    nameEn: 'BSKY Nabin Card / Health Assurance',
    nameOr: 'ବିଏସକେୱାଇ ସ୍ୱାସ୍ଥ୍ୟ ବୀମା',
    category: 'health',
    dept: 'Health & Family Welfare Dept.',
    description: 'Cashless healthcare coverage up to ₹10 Lakhs for eligible families in empanelled hospitals.',
    fee: 'Free',
    processingDays: '3 Days',
    documents: ['Aadhaar Card', 'Income Certificate', 'Family Photo'],
    popular: true
  },
  {
    id: 'kalia',
    nameEn: 'KALIA Farmer Assistance',
    nameOr: 'କାଳିଆ କୃଷକ ସହାୟତା',
    category: 'farmer',
    dept: 'Agriculture & Farmers Empowerment Dept.',
    description: 'Direct financial assistance for cultivation, seeds, fertilizers and livelihood support.',
    fee: 'Free',
    processingDays: '10 Days',
    documents: ['Land Records (RoR/Patta)', 'Aadhaar Card', 'Bank Account'],
    popular: true
  },
  {
    id: 'bhulekh',
    nameEn: 'Bhulekh Odisha (Land Records RoR)',
    nameOr: 'ଭୂଲେଖ ଓଡ଼ିଶା (ଜମି ପଟ୍ଟା)',
    category: 'revenue',
    dept: 'Revenue & Disaster Management Dept.',
    description: 'View and download certified Record of Rights (RoR / Patta) and cadastral maps.',
    fee: '₹30 per certificate',
    processingDays: 'Instant / 2 Days',
    documents: ['District/Tehsil/Village details', 'Khata Number'],
    popular: true
  },
  {
    id: 'madhu-babu',
    nameEn: 'Madhu Babu Pension Yojana (MBPY)',
    nameOr: 'ମଧୁବାବୁ ପେନସନ ଯୋଜନା',
    category: 'social',
    dept: 'Social Security & Empowerment of Persons with Disabilities',
    description: 'Monthly social security pension for elderly, widows, and persons with disabilities.',
    fee: 'Free',
    processingDays: '21 Days',
    documents: ['Age Proof', 'Disability / Widow Certificate', 'Aadhaar'],
    popular: true
  },
  {
    id: 'mo-bus',
    nameEn: 'Mo Bus & Ama Krushi Pass',
    nameOr: 'ମୋ ବସ୍ ପାସ୍ ଏବଂ ଟିକେଟ୍',
    category: 'transport',
    dept: 'CRUT (Capital Region Urban Transport)',
    description: 'Smart transit card, digital bus passes, and live bus tracking across Bhubaneswar-Cuttack-Puri.',
    fee: 'Standard Fare',
    processingDays: 'Instant',
    documents: ['Mobile Number', 'Photo ID'],
    popular: false
  },
  {
    id: 'resident-cert',
    nameEn: 'Resident / Caste Certificate (e-District)',
    nameOr: 'ବାସସ୍ଥାନ / ଜାତି ପ୍ରମାଣପତ୍ର',
    category: 'revenue',
    dept: 'Revenue & Disaster Management Dept.',
    description: 'Digital official certificates signed electronically for educational and job applications.',
    fee: '₹40',
    processingDays: '15 Days',
    documents: ['Electricity bill', 'Land record', 'Aadhaar Card'],
    popular: false
  },
  {
    id: 'mo-seva',
    nameEn: 'Mo Seva Kendra Appointment',
    nameOr: 'ମୋ ସେବା କେନ୍ଦ୍ର ନିଯୁକ୍ତି',
    category: 'social',
    dept: 'Electronics & IT Dept.',
    description: 'Book slot at nearest Mo Seva Kendra for hassle-free doorstep citizen service delivery.',
    fee: 'Free',
    processingDays: 'Same Day',
    documents: ['Citizen ID'],
    popular: true
  }
];

export const PANJIKA_TODAY: PanjikaInfo = {
  dateEn: 'Friday, September 18, 2026',
  tithiEn: 'Bhadrapada Shukla Paksha Saptami',
  tithiOr: 'ଭାଦ୍ରବ ଶୁକ୍ଳ ସପ୍ତମୀ',
  paksha: 'Shukla Paksha (ଶୁକ୍ଳ ପକ୍ଷ)',
  odiaMonth: 'Bhadrava (ଭାଦ୍ରବ ୧୪୩୩ ସାଲ)',
  nakshatra: 'Anuradha (ଅନୁରାଧା)',
  sunrise: '05:38 AM',
  sunset: '05:54 PM',
  auspiciousTime: 'Amruta Bela: 08:24 AM - 10:48 AM',
  inauspiciousTime: 'Rahu Kala: 10:30 AM - 12:00 PM',
  festival: 'Radhashtami Vrata preparation & Jagannath temple special alankara',
  festivalOr: 'ରାଧାଷ୍ଟମୀ ବ୍ରତ ପ୍ରସ୍ତୁତି ଏବଂ ଶ୍ରୀମନ୍ଦିର ସ୍ୱତନ୍ତ୍ର ନୀତି'
};

export const CULTURAL_STORIES = [
  {
    id: 'puri-niti',
    title: 'Shree Jagannath Temple Today',
    sub: 'Puri, Odisha',
    imageTag: 'Puri Dham',
    description: 'Mangala Alati (05:00 AM), Mailam & Abakasha completed. Mahaprasad Abhada will be available at Ananda Bazar from 11:30 AM.',
    action: 'View Ritual Timetable'
  },
  {
    id: 'festivals',
    title: 'Upcoming: Nuakhai Bhetghat',
    sub: 'Western Odisha Agricultural Festival',
    imageTag: 'Harvest Fest',
    description: 'The auspicious offering of new rice crop (Nabanna) to Maa Samaleswari in Sambalpur and across Western Odisha.',
    action: 'Read Tradition & Greetings'
  },
  {
    id: 'handlooms',
    title: 'Sambalpuri Ikat & Kotpad Weaves',
    sub: 'Geographical Indication (GI) Crafts',
    imageTag: 'Craft Heritage',
    description: 'Discover the tie-and-dye weaving lineage of Bargarh weavers and natural tribal dyed textiles of Koraput.',
    action: 'Explore Artisan Directory'
  }
];

export const USER_DOCUMENTS: CitizenDocument[] = [
  {
    id: 'doc-1',
    title: 'Aadhaar Verified Card',
    docNumber: 'XXXX-XXXX-4912',
    issuer: 'UIDAI Govt of India',
    issueDate: '12-Jan-2022',
    verified: true,
    category: 'Identity'
  },
  {
    id: 'doc-2',
    title: 'Odisha Resident Certificate',
    docNumber: 'RC/2023/89210',
    issuer: 'Tehsil Office, Bhubaneswar',
    issueDate: '04-Mar-2023',
    verified: true,
    category: 'Revenue'
  },
  {
    id: 'doc-3',
    title: 'Ration Card (NFSA/SFSA)',
    docNumber: 'OD/NFSA/391024',
    issuer: 'Food Supplies & Consumer Welfare',
    issueDate: '19-Aug-2021',
    verified: true,
    category: 'Welfare'
  },
  {
    id: 'doc-4',
    title: 'BSKY Health Assurance Card',
    docNumber: 'BSKY-NABIN-7712',
    issuer: 'Health Dept, Govt of Odisha',
    issueDate: '10-Feb-2024',
    verified: true,
    category: 'Health'
  }
];

export const APPLICATION_TRACKERS: ApplicationTracker[] = [
  {
    id: 'app-1',
    serviceName: 'Subhadra Yojana Direct Benefit',
    appNumber: 'SUB-2026-90412',
    appliedDate: '12-Sep-2026',
    status: 'Under Scrutiny',
    dept: 'Women & Child Development',
    progress: 50
  },
  {
    id: 'app-2',
    serviceName: 'Certified RoR (Land Patta)',
    appNumber: 'ROR-REV-39182',
    appliedDate: '15-Sep-2026',
    status: 'Ready for Download',
    dept: 'Revenue & Disaster Mgmt',
    progress: 100
  },
  {
    id: 'app-3',
    serviceName: 'Mo Seva Kendra Token Booking',
    appNumber: 'MSK-SLOT-0082',
    appliedDate: '17-Sep-2026',
    status: 'Approved',
    dept: 'E&IT Department',
    progress: 80
  }
];
