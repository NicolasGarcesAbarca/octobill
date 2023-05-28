import { motion } from "framer-motion";

const spinTransition = {
    repeat: Infinity,
    duration: 1,
    ease: "linear"
}

type props = {
    size: 'sm' | 'md' | 'lg'
}

function Spinner(props: props) {
    const { size } = props
    return <div className={`relative ${convertSize(size)[0]}`}>
        <motion.span animate={{ rotate: 360 }} transition={spinTransition} className={`block ${convertSize(size)[0]} ${convertSize(size)[1]} border-white border-t-orange-700 rounded-full absolute top-0 left-0`}>
        </motion.span>
    </div>
}

function convertSize(size: props['size']){
    if(size === 'md') return ['w-[40px] h-[40px]', 'border-8']
    if(size === 'lg') return ['w-[56px] h-[56px]', 'border-8']
    return ['w-[24px] h-[24px]', 'border-4']
}

export default Spinner;