import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPyTorch from '@/images/technology/pytorch-light.svg'
import logoRedis from '@/images/technology/redis-light.svg'
import logoAngular from '@/images/technology/angular-light.svg'
// import logoFirebase from '@/images/technology/firebase-light.svg'
import logoNextjs from '@/images/technology/next-js-light.svg'
import logoShopify from '@/images/technology/shopify-light.svg'
import logoReact from '@/images/technology/react-light.svg'
import logoVue from '@/images/technology/vuejs-light.svg'

import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'



const tech = [
 
  ['PyTorch', logoPyTorch],
  ['Redis', logoRedis],
  ['Angular', logoAngular],
  // ['Firebase', logoFirebase],
  ['Next.js', logoNextjs],
  ['Shopify', logoShopify],
  ['React', logoReact],
  ['Vue', logoVue],
 
]

function Tech() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Technologies We Use
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {tech.map(([tech, logo]) => (
              <li key={tech}>
                <FadeIn>
                  <Image src={logo} alt={tech} height={70} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Navigate the future confidently, leveraging our expertise to illuminate hidden potentials and turn them into actionable strategies.
        
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialize in crafting beautiful, high-quality marketing pages.
              Generating high-ranking SEO and dynamically changing Metadata with all
              of our deployments.

            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, and can help you with any of your application.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Creating
              beautiful, responsive websites and e-commerce applications are what
              we do.
            </ListItem>
            <ListItem title="Custom content management">
              At Motstudio, we understand the importance of having a robust and
              customized CMS. We can help create headless applications that will
              help make customizing your customer interface a breeze.

            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer Motstudio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0,8)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Award winning developer studio based in Charlotte.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are developer studio working at the intersection of design and
            technology. It’s a really busy intersection though — a lot of our
            staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      <Tech />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Motstudio went above and beyond with our onboarding, even
        finding a way to access content on the fly.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
