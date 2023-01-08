import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Cards() {
    const [isOpen, setIsOpen] = useState(false);
    const [clickedCard, setClickedCard] = useState([]);

    const Card = (props) => (
        <motion.div
            transition={{ layout: { duration: 1, type: 'spring' } }}
            layout
            onClick={() => setIsOpen(!isOpen)}
            className="card"
        >
            <motion.h3 layout="position">{props.title}</motion.h3>
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
    );

    const CardContainer = (props) => (
        <div className="cards-container">
            {props.cards.map((card) => (
                <Card title={card.title} content={card.content} />
            ))}
        </div>
    );

    const cardsData = [
        {
            id: 1,
            title: 'CARD 1',
            content: 'Clark Kent',
        },
        {
            id: 2,
            title: 'CARD 2',
            content: 'Bruce Wayne',
        },
        {
            id: 3,
            title: 'CARD 3',
            content: 'Peter Parker',
        },
        {
            id: 4,
            title: 'CARD 4',
            content: 'Tony Stark',
        },
        {
            id: 5,
            title: 'CARD 5',
            content: 'Reed Richards',
        },
        {
            id: 6,
            title: 'CARD 6',
            content: 'Wade Wilson',
        },
    ];

    return (
        <>
            <div className="container">
                <CardContainer cards={cardsData} />
            </div>
        </>
    );
}
