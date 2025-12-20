import react from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
    const images = [
        '/images/gallery1.jpg',
        '/images/gallery2.jpg',
        '/images/gallery3.jpg',
        '/images/gallery4.jpg',
        '/images/gallery5.jpg',
        '/images/gallery6.jpg',
    ];
    return (
        <section className="py-20 px-4 bg-black/20">
            <div className="max-w-6xl mx-auto"> 
                <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => ( 
                        <motion.div 
                            key={index} 
                            className="overflow-hidden rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Gallery;