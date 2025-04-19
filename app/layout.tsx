import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './styles.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const navbar = (
  <>
    <div className='banner' />
    <Navbar logo={<strong>Prism Documentation</strong>}
      // logo={<Image src="/prism-retro-title.avif" alt="prism logo" width={100} height={100} />}
    />
  </>
)
const footer = <Footer>{new Date().getFullYear()} &copy; viveleroi.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/prism/prism-docs"
          footer={footer}
          nextThemes={{ defaultTheme: 'dark' }}
          feedback={{ content: ''}}
          editLink=''
          sidebar={{defaultMenuCollapseLevel: 1}}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}