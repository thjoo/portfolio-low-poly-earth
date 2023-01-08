import { motion } from 'framer-motion';
import { useState } from 'react';
// import './style.css';

export default function Card() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <motion.div
                transition={{ layout: { duration: 1, type: 'spring' } }}
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="card-content"
            >
                <motion.h3 layout="position">Project Nr.</motion.h3>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="expand"
                    >
                        <p className="text">{props.content}</p>

                        <button>Learn more</button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
