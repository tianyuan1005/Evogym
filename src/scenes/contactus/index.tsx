import { SelectedPage } from '@/shared/types'
import HText from '@/shared/HText'
import Form from './Form'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id='contactus' className='mx-auto w-5/6 pb-32 pt-24'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
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
          className='md:w-3/5'
        >
          <HText>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
          </HText>
        </motion.div>
        <p className='my-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam
          labore voluptatibus maiores, ea dolore, laboriosam ipsa, magni
          veritatis nostrum impedit ratione! Cum quaerat ducimus, fuga quidem
          vero, dolorum quisquam ullam esse dicta accusamus sint ex harum
          dolorem magni consectetur.
        </p>
        <div className='mt-10 justify-between gap-20 md:flex'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='mb-20'
          >
            <Form />
          </motion.div>
          <motion.div
            className='relative md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
              <img
                className='w-full'
                src={ContactUsPageGraphic}
                alt='contact us'
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
export default ContactUs
