import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti"
export default function Success() {
    const [pieces, setPieces] = useState(200);

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 3000);
    };

    useEffect(() => {
        stopConfetti();
    }, [])
    return (
        <motion.main 
           initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity:0 }}
           className='h-screen flex items-center justify-center'
        >
             <div className="bg-gray-100 rounded-lg w-1/2 font-bold text-zinc-900 p-16">
                <h1>
                   Thanks for providing the requested information.
                </h1>
                <p className="text-lg text-zinc-500">
                    We have sent you an email over at with all your input details. 
                </p>
             </div>
             <Confetti gravity={0.2} numberOfPieces={pieces} />
        </motion.main>
    );
}