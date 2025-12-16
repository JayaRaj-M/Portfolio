import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import GlassCard from './GlassCard';
import { SpinningLogos } from './ui/spinning-logos';
const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ type: 'success' | 'error', message: string } | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const showToast = (type: 'success' | 'error', message: string) => {
        setToast({ type, message });
        setTimeout(() => setToast(null), 5000);
    };

    const handleContactSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            showToast('error', 'Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate Convex API call since backend is not active
            console.log('Submitting to Convex (Mock):', formData);
            await new Promise(resolve => setTimeout(resolve, 1500));

            showToast('success', 'Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            showToast('error', 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400">
                        Have a project in mind or want to discuss new opportunities?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <GlassCard className="p-8 order-2 lg:order-1">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-white placeholder-gray-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-white placeholder-gray-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors resize-none text-white placeholder-gray-500"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                onClick={handleContactSubmit}
                                disabled={isSubmitting}
                                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </GlassCard>

                    <div className="order-1 lg:order-2 flex justify-center">
                        <SpinningLogos />
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                        className={`fixed bottom-8 left-1/2 flex items-center gap-2 px-6 py-3 rounded-full shadow-lg backdrop-blur-md border ${toast.type === 'success'
                                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                                : 'bg-red-500/20 border-red-500/50 text-red-400'
                            }`}
                    >
                        {toast.type === 'success' ? (
                            <CheckCircle className="w-5 h-5" />
                        ) : (
                            <XCircle className="w-5 h-5" />
                        )}
                        <span className="font-medium">{toast.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;