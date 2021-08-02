import React from 'react';
import { motion } from 'framer-motion';

export default function FadeTransition({children, className, initial, animate, exit}) {
    const pageVariants = {
        animate: {
            opacity: 1,
            y: 0
        },
        in: {
            opacity: 0,
            y: "10%"
        },
        out: {
            opacity: 0,
            y: "-10%"
        }
    }
    
    const pageTransition = {
        type: "tween",
        transition: "anticipate",
        dutation: 10,
    }
    return (
        <motion.div initial={initial ? initial : "in"} 
            animate={animate ? animate : "animate"} 
            exit={exit ? exit : "out"} 
            transition={ pageTransition } 
            variants={pageVariants} 
            className={className}
            >
            {children}
        </motion.div>
    )
}
