import HText from '@/shared/HText'
import { SelectedPage, BenefitsType } from '@/shared/types'
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, possimus. Aspernatur neque cumque dolorum velit consequatur! Aut id molestias animi?',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description:
      'Quis dignissimos molestias consectetur recusandae adipisci non quam veniam enim! Quo impedit voluptatum voluptates blanditiis eum!',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainers',
    description:
      'odit alias, minus fugit nostrum dignissimos nihil veritatis rem eos molestias cumque. Tenetur similique quo, fuga sed mollitia eveniet pariatur nobis quasi ut vero accusantium impedit esse!',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='md:my-5 md:w-3/5'
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className='mt-5 items-center justify-between gap-8 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitsType) => (
            <Benefit
              key={benefit.title}
              {...benefit}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* GRAPHIC */}
          <img
            className='mx-auto'
            src={BenefitsPageGraphic}
            alt='benefits-page-graphic'
          />
          {/* DESCRIPTION */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className='text-primary-500'> FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <div>
              <p className='my-5'>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className='mb-5'>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
            {/* BUTTON */}
            <div className='relative mt-16'>
              <div className='be before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'></div>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
export default Benefits
