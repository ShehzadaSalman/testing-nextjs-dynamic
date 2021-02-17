
  module.exports = {
    env: {
      ImagePath: 'https://staging.techbay.co/storage/app/',
      BASE_URL: 'https://techbay.co'
    },
    i18n: {
      locales: ['en-US', 'ar'],
      defaultLocale: 'en-US',
    },
    async redirects() {
      return [
        {
          source: '/content-management-services',
          destination: '/content-marketing-services',
          permanent: true,
        },
        {
          source: '/ecommerce',
          destination: '/ecommerce-services',
          permanent: true,
        },
        {
          source: '/services/terms-and-conditions',
          destination: '/terms-and-conditions',
          permanent: true,
        },
        {
          source: '/services/refund-policy',
          destination: '/refund-policy',
          permanent: true,
        },
        {
          source: '/services/privacy-policy',
          destination: '/privacy-policy',
          permanent: true,
        },
        {
          source: '/database-management-services',
          destination: '/app-development-services',
          permanent: true,
        },
        {
          source: '/3d-app-development-services',
          destination: '/app-development-services',
          permanent: true,
        },
      ]
    },

  

  }
