const menu = [
    {
        name:'Home',
        href:'/'
    },
    {
        name: 'About us',
        href: '/about-us'
    },
    {
        name: 'Why Fandora?',
        href: '/why-fandora'
    },
   
    {
        name: 'How it works?',
        href: '/how-fandora-works'
    },
    // {
    //     name: 'Be a partner',
    //     href: '/partners'
    // },
   
    
    {
        name:'Resource',
        submenu:[
            {
                name: 'Blogs',
                href: '/insights'
            },
            {
                name:'Videos',
                href:'/'
            },
            {
                name: 'FAQ',
                href: '/faq'
            },
            {
                name: 'Contact us',
                href: '/contact'
            },
            

        ]
    }
]
const footerMenu = [
    {
        name: 'faq',
        href: '/faq'
    },
    {
        name: 'terms of use',
        href: '/terms-of-use'
    },
    {
        name: 'privacy policy',
        href: '/privacy-policy-2'
    },
    {
        name: 'legal',
        href: '/legal'
    },
    {
        name: 'risk disclouse',
        href: '/risk-disclouse'
    },
    {
        name: 'REFUND/CANCELLATION',
        href: '/refunds'
    },
    {
        name: ' INSIGHTS',
        href: '/insights'
    },
    {
        name: 'CAREERS',
        blank:true,
        href: 'https://www.linkedin.com/company/ryzerapp/jobs/'
    }
]
export { menu, footerMenu }