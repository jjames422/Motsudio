import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

 export const metadata  = {
     title: {   template: '%s - MotMotstudio',
     default: 'Motstudio - Award winning developer Motstudio based in Charlotte',
     generator: 'Next.js',
     applicationName: 'Motstudio',
     metadataBase: new URL('https://motstudio.dev'),
     keywords: ['AI-driven web development',
     'Expert web development services',
     'VPS hosting solutions',
     'Secure IT solutions',
     'Award-winning websites',
     'Headless CRM implementation',
     'Shopify partner services',
     'Shopify Plus integration',
     'Cutting-edge web development',
     'Innovative IT security solutions',
     'Advanced hosting services',
     'Customized web solutions',
     'Professional web design',
     'Future-focused AI web solutions',
     'Top-tier web development company',
     'Enhanced website performance',
     'Seamless Shopify integration',
     'Reliable VPS hosting',
     'Web development with AI technology',
     'Trusted IT security measures',
     'Next.js', 
     'React',
     'JavaScript',
     'typescript',
    ],
     authors: [{ name: 'Jonathan James', url: 'https://motstudio.dev' }],
     colorScheme: 'light',
     creator: 'Jonathan M. James',
     verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      bing: 'bing',
      
     
     languages: {
      'en-US': '/en-US',
     
      robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
   },
 },
},
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
