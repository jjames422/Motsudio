import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Through Immersive Understanding, we chart out any strategy and dive deep into your business {' '}
          <strong className="font-semibold text-neutral-950">DNA.</strong> We aim to understand not 
          just the 'what' but the 'why' of your brand, allowing us to align our strategies seamlessly 
          with your core objectives
        </p>
        <p>
        Our team will conduct Industry Research. The digital world is dynamic, 
        and what worked yesterday might not be the solution today. We keep our 
        ingers on the pulse of current industry trends, ensuring that {' '}  
        <strong className="font-semibold text-neutral-950">your</strong> strategies are relevant 
        and ahead of the curve.
          
        
        </p>
        <p>
        Who are you speaking to? We employ sophisticated tools and {' '}  
        <strong className="font-semibold text-neutral-950">customer persona building</strong> techniques to sketch
        out detailed customer personas, giving us clear insights into your target 
        audience's desires, pain points, and motivations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Budget Analysis</TagListItem>
        <TagListItem>Barriers to entry</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Technology Barriers</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery. The roadmap is an
          intricatal phase in keeping your project on task.
        </p>
        <p>
          Each client is assigned a key account manager to keep lines of
          communication open and progess the project.
          They will be the direct line of contact to the
          development team who are hard at work scouring writing source code
          for your project(s).
        </p>
        <p>
          Our account managers and technical project managers are trained to  
          engange in any change request as offten as the project allows. Therefore, 
          always keeping youup to date with your project, and advoiding scope creep.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Motstudio keet us in the loop with all the requirments. The TPM 
        held meetings with us to help us understand in what stage the project was.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        We pride ourselves on ensuring that the final product aligns perfectly with our client's 
        vision and exceeds their expectations. Our meticulous approach ensures that every detail 
        is {' '} 
          <strong className="font-semibold text-neutral-950">
          fine-tuned </strong>
          and {' '}
          <strong className="font-semibold text-neutral-950">polished.</strong>
        </p>
        <p>
          Despite largely using pre-built components, most of the{' '}
          <strong className="font-semibold text-neutral-950">progress</strong>{' '}
          on each project takes place in the final 24 hours. The development
          time allocated to each client is actually spent making augmented
          reality demos that go viral on Twitter.
        </p>
        <p>
        We understand that in the digital age, delivery isn't just about handing over a 
        {' '}; 
        <strong className="font-semibold text-neutral-950"> product </strong>{' '}
        it's about ensuring its scalability, reliability, and sustainability. 
        As we complete our projects, we ensure they are primed for future growth and changes. 
        Our team stays abreast of evolving industry trends, allowing us to deliver contemporary 
        solutions that stand the test of time.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always undergo testing to ensure that they are functional throught the development and 
          User Application Testing (UAT).
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we use the best Infrastructure that we can find, our own. 
          With a 99.9% SLA - you can't find a better hosting provider.
        </ListItem>
        <ListItem title="Support">
          With every project there is a support team that will be available to answer any questions you may have.
          We also will discuss any ongoing maintenance that may be needed with yrgency.
        </ListItem>
        <ListItem title="Documentation">
          We will always provide detailed documentation to ensure that your project is  
          {' '}
          <strong className="font-semibold text-neutral-950">fully</strong> your team.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  const valuesList = [
    {title: 'Innovation', description: 'At Motstudio, we believe in constantly pushing boundaries. Every project is a chance for us to redefine the limits of creativity and technology.' },
    { title: 'Client Collaboration', description: 'We value our partnerships with clients. Their vision and feedback are integral to crafting solutions that truly resonate.' },
    { title: 'Excellence in Execution', description: "We pride ourselves on attention to detail. It's not just about completing a project; it's about achieving excellence in every facet." },
    { title: 'Sustainable Solutions', description: 'We think long-term. Our designs and solutions are built to last, keeping future growth and adaptability in mind.' },
    { title: 'Integrity & Transparency', description: 'Our clients trust us because we work with honesty and transparency. Every step, every decision is communicated and clarified.' },
    { title: 'Continuous Learning', description: 'The digital landscape is ever-evolving. We commit to continuous learning to stay at the forefront of industry innovations.' },
    { title: 'Empowerment', description: 'We empower our team to bring their best ideas forward, fostering an environment of mutual respect and growth.' },
    { title: 'Social Responsibility', description: 'We believe in giving back. Motstudio is dedicated to various social initiatives, ensuring we do our bit for the larger community.' }
];
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while consentrating on security. We stand by our core values
          to guide us on this decsion. 
        </p>
      </SectionIntro>
      
      <Container className="mt-24">
        <GridList>
        {valuesList.map((item) => (
          <GridListItem key={item.key} title={item.title}>
            {item.description}
          </GridListItem>
        ))}
        </GridList>
      </Container>
      </div>
  )
}
  



export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients.At the heart of our ethos lies a deep-rooted commitment to efficiency, ensuring that every resource is optimized for maximum impact. This unwavering dedication not only allows us to streamline operations but also enables us to deliver unparalleled value to our esteemed clients consistently. By meticulously harnessing our resources and capabilities, we ensure that our clients receive top-notch solutions that are both cost-effective and of the highest quality. 
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
