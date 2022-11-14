import { useMotionValue, useTransform, motion } from 'framer-motion'

import { RiGithubFill, RiWhatsappFill } from "react-icons/ri";

import meStyled from './assets/me-styled.jpeg'
import reactLogo from './assets/react.svg'
import framemotionLogo from './assets/framemotion.svg'

function App() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-[#191522]">
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        whileTap={{ cursor: 'grabbign' }}
        className="w-[300px] sm:w-[350px] h-[450px] bg-gray-200 rounded-[30px] border-[4px] px-[20px] py-[10px] cursor-grab border-white"
      >
        <a className='flex items-center justify-center' href="https://www.framer.com/" target='_blank'>
          <div className='w-10 h-10 mr-3'>
            <img src={framemotionLogo} alt="" />
          </div>
          
          <h1 className='text-[#8257e6] font-bold text-2xl text-center my-5 underline'>Frame Motion</h1>
        </a>

        <p>Esse é um projeto <span className='text-[#8257e6] font-semibold'>React</span>, construído pra aprimorar minhas habilidades com uma nova biblioteca chamada <span className='text-[#8257e6] font-semibold'>Frame Motion</span>.</p>

        <div className='flex flex-col items-center justify-center sm:mt-0 mt-[10px]'>
          <img className='absolute scale-150 -mt-20' src={reactLogo} alt="" />

          <motion.div
            style={{ x, y, rotateX, rotateY, z: 10000 }}
          >
            <img className='rounded-full sm:scale-90' draggable='false' srcSet={meStyled} alt="" />

            <div className='flex items-center justify-center gap-x-5 text-white my-5'>
              <a className='text-4xl w-[100px] flex flex-col items-center justify-center rounded-md border-2 border-white bg-gray-200 text-neutral-900 hover:bg-[#8257e6] hover:text-white' href="https://github.com/GugaS1lva" target="_blank"><RiGithubFill /></a>

              <a className='text-4xl w-[100px] flex flex-col items-center justify-center rounded-md border-2 border-white bg-gray-200 text-neutral-900 hover:bg-[#8257e6] hover:text-white' href="https://wa.me/558281828018" target="_blank"><RiWhatsappFill /></a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

export default App
