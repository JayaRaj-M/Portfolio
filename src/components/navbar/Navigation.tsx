import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Code2, FolderGit2, Mail, Home,Image } from "lucide-react"
import GlassCard from '../GlassCard';
import { cn } from "@/lib/utils"

const Navigation = () => {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("Home")

  useEffect(() => {
    setMounted(true)
  }, [])

  const items = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Skills", url: "#skills", icon: Code2 },
    { name: "Projects", url: "#projects", icon: FolderGit2 },
    { name: "Gallery", url: "#gallery", icon: Image },
    { name: "Contact", url: "#contact", icon: Mail }
  ]

  if (!mounted) return null

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl">
      <GlassCard className="px-6 py-3 rounded-full">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2">
            {items.map((item) => {
              const isActive = activeTab === item.name
              const isHovered = hoveredTab === item.name

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                    "text-white/70 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute inset-0 bg-emerald-500/25 rounded-full blur-md" />
                      <div className="absolute inset-[-4px] bg-emerald-500/20 rounded-full blur-xl" />
                      <div className="absolute inset-[-8px] bg-emerald-500/15 rounded-full blur-2xl" />
                      <div className="absolute inset-[-12px] bg-emerald-500/5 rounded-full blur-3xl" />

                      <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0"
                        style={{
                          animation: "shine 3s ease-in-out infinite"
                        }}
                      />
                    </motion.div>
                  )}

                  <span className="relative z-10">{item.name}</span>

                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      />
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.div
                      layoutId="anime-mascot"
                      className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="relative w-12 h-12">
                        <motion.div
                          className="absolute w-10 h-10 bg-white rounded-full left-1/2 -translate-x-1/2"
                          animate={
                            hoveredTab ? {
                              scale: [1, 1.1, 1],
                              rotate: [0, -5, 5, 0],
                              transition: {
                                duration: 0.5,
                                ease: "easeInOut"
                              }
                            } : {
                              y: [0, -3, 0],
                              transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }
                          }
                        >
                          <motion.div
                            className="absolute w-2 h-2 bg-black rounded-full"
                            animate={
                              hoveredTab ? {
                                scaleY: [1, 0.2, 1],
                                transition: {
                                  duration: 0.2,
                                  times: [0, 0.5, 1]
                                }
                              } : {}
                            }
                            style={{ left: '25%', top: '40%' }}
                          />
                          <motion.div
                            className="absolute w-2 h-2 bg-black rounded-full"
                            animate={
                              hoveredTab ? {
                                scaleY: [1, 0.2, 1],
                                transition: {
                                  duration: 0.2,
                                  times: [0, 0.5, 1]
                                }
                              } : {}
                            }
                            style={{ right: '25%', top: '40%' }}
                          />
                          <motion.div
                            className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                            animate={{
                              opacity: hoveredTab ? 0.8 : 0.6
                            }}
                            style={{ left: '15%', top: '55%' }}
                          />
                          <motion.div
                            className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                            animate={{
                              opacity: hoveredTab ? 0.8 : 0.6
                            }}
                            style={{ right: '15%', top: '55%' }}
                          />

                          <motion.div
                            className="absolute w-4 h-2 border-b-2 border-black rounded-full"
                            animate={
                              hoveredTab ? {
                                scaleY: 1.5,
                                y: -1
                              } : {
                                scaleY: 1,
                                y: 0
                              }
                            }
                            style={{ left: '30%', top: '60%' }}
                          />
                          <AnimatePresence>
                            {hoveredTab && (
                              <>
                                <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300"
                                >
                                  ✨
                                </motion.div>
                                <motion.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="absolute -top-2 left-0 w-2 h-2 text-yellow-300"
                                >
                                  ✨
                                </motion.div>
                              </>
                            )}
                          </AnimatePresence>
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                          animate={
                            hoveredTab ? {
                              y: [0, -4, 0],
                              transition: {
                                duration: 0.3,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }
                            } : {
                              y: [0, 2, 0],
                              transition: {
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }
                            }
                          }
                        >
                          <div className="w-full h-full bg-white rotate-45 transform origin-center" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </a>
              )
            })}
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center justify-center ml-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all font-semibold"
          >
            Let&apos;s Chat
          </a>
        </div>
      </GlassCard>
    </nav>
  );
};

export default Navigation;