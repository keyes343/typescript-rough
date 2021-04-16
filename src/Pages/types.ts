export type rootBtn =
    | 'Ratings'
    | 'Discount Level'
    | 'Categories'
    | 'Sub Categories'
    // | 'Topics'
    | 'Level';
// | 'Language';

export type radios =
    | categories
    | ratings
    | levels
    | duration
    | subCategories
    | discountLevels;

export type toggleRadios = {
    btn: rootBtn;
    elem: radios;
};

export type discountLevels = '100%' | '>50%';

export type card = {
    Author: string;
    // AuthorId: null
    Category: string;
    CouponCode: string;
    CouponId: number;
    CouponLink: string;
    CourseId: number;
    CreatedD: Date;
    DiscountP: number;
    Duration: number;
    EndTime: Date;
    Featured: true;
    ImageUrl: string;
    Language: string;
    Level: string;
    Link: string;
    PriceDiscounted: number;
    PriceOld: number;
    Prio: number;
    Rating: number;
    Reviews: number;
    Students: number;
    Subcategory: string;
    SubcategoryId: number;
    Title: string;
    Topic: string;
    TopicId: number;
    ValidatedD: Date;
};

export type categories =
    | 'All Categories'
    | 'Development'
    | 'Business'
    | 'IT & Software'
    | 'Office Productivity'
    | 'Personal Development'
    | 'Design'
    | 'Marketing'
    | 'Lifestyle'
    | 'Photography'
    | 'Health & Fitness'
    | 'Teaching & Academics'
    | 'Music'
    | 'Finance & Accounting';
export type ratings =
    | 'All Ratings'
    | '4.5 & above'
    | '4.0 & above'
    | '3.5 & above'
    | '3.0 & above';
export type levels =
    | 'Show All'
    | 'All Levels'
    | 'Beginner'
    | 'Intermediate'
    | 'Expert';
export type duration =
    | 'All Durations'
    | '0 - 2 Hours'
    | '3 - 6 Hours'
    | '7 - 16 Hours'
    | '17+ Hours';
export type subCategories =
    | '3D & Animation'
    | 'Apple'
    | 'Compliance'
    | 'Cryptocurrency & Blockchain'
    | 'Dance'
    | 'Fashion Design'
    | 'Food & Beverage'
    | 'Game Design'
    | 'General Health'
    | 'Influence'
    | 'Interior Design'
    | 'Investing & Trading'
    | 'Media'
    | 'Mental Health'
    | 'Music Techniques'
    | 'Operating Systems'
    | 'Other Lifestyle'
    | 'Other Marketing'
    | 'Other Photography & Video'
    | 'Parenting & Relationships'
    | 'Portrait Photography'
    | 'Product Marketing'
    | 'Real Estate'
    | 'Social Media Marketing'
    | 'Business Strategy'
    | 'Travel'
    | 'Vocal'
    | 'Advertising'
    | 'Marketing Analytics & Automation'
    | 'Arts & Crafts'
    | 'Career Development'
    | 'Dieting'
    | 'E-Commerce'
    | 'Engineering'
    | 'Entrepreneurship'
    | 'Finance'
    | 'Human Resources'
    | 'Humanities'
    | 'Industry'
    | 'Leadership'
    | 'Marketing Fundamentals'
    | 'Meditation'
    | 'Memory & Study Skills'
    | 'Motivation'
    | 'Music Fundamentals'
    | 'Network & Security'
    | 'Operations'
    | 'Other Personal Development'
    | 'Personal Transformation'
    | 'Music Production'
    | 'Religion & Spirituality'
    | 'Safety & First Aid'
    | 'Software Testing'
    | 'Teacher Training'
    | 'Test Prep'
    | 'Web Design'
    | 'Web Development'
    | 'Accounting & Bookkeeping'
    | 'Commercial Photography'
    | 'Communications'
    | 'Business Analytics & Intelligence'
    | 'Design Tools'
    | 'Development Tools'
    | 'Digital Photography'
    | 'Financial Modeling & Analysis'
    | 'Game Development'
    | 'Google'
    | 'Growth hacking'
    | 'Happiness'
    | 'Hardware'
    | 'Home Improvement'
    | 'IT Certification'
    | 'Language'
    | 'Oracle'
    | 'Other Business'
    | 'Other Design'
    | 'Other Health & Fitness'
    | 'Other IT & Software'
    | 'Other Office Productivity'
    | 'Personal Brand Building'
    | 'Personal Finance'
    | 'Photography'
    | 'Photography Tools'
    | 'Personal Productivity'
    | 'SAP'
    | 'Science'
    | 'Self Defense'
    | 'Social Science'
    | 'Software Engineering'
    | 'Yoga'
    | 'Affiliate Marketing'
    | 'Architectural Design'
    | 'Beauty & Makeup'
    | 'Branding'
    | 'Business Law'
    | 'Content Marketing'
    | 'Creativity'
    | 'Database Design & Development'
    | 'Design Thinking'
    | 'Digital Marketing'
    | 'Economics'
    | 'Finance Cert & Exam Prep'
    | 'Fitness'
    | 'Gaming'
    | 'Graphic Design & Illustration'
    | 'Home Business'
    | 'Instruments'
    | 'Management'
    | 'Math'
    | 'Microsoft'
    | 'Mobile Development'
    | 'Money Management Tools'
    | 'Music Software'
    | 'Nutrition'
    | 'Online Education'
    | 'Other Music'
    | 'Other Teaching & Academics'
    | 'Pet Care & Training'
    | 'Programming Languages'
    | 'Project Management'
    | 'Public relations'
    | 'Sales'
    | 'Search Engine Optimization'
    | 'Self Esteem & Confidence'
    | 'Sports'
    | 'Stress Management'
    | 'User Experience Design'
    | 'Video & Mobile Marketing'
    | 'Video Design'
    | 'Other Finance & Accounting'
    | 'Taxes'
    | 'Data Science'
    | 'Esoteric Practices'
    | 'No-Code Development';
