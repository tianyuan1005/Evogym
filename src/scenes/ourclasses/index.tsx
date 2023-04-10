import { SelectedPage, ClassType } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image1,
  },
  {
    name: 'Yoga Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image4,
  },
  {
    name: 'Fitness Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image5,
  },
  {
    name: 'Training Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className=''
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='mx-auto w-5/6'
        >
          <div className='md:w-3/5'>
            <HText>OUR CLASSES</HText>
            <p className='py-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              officiis, nobis doloremque harum reiciendis illo quod consequatur
              earum maxime blanditiis rerum esse nulla aliquid delectus velit
              architecto molestias aliquam quis incidunt laudantium suscipit non
              a voluptate quos! Libero, earum praesentium.
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: ClassType, index) => (
              <Class key={`${item.name}-${index}`} {...item} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
export default OurClasses
