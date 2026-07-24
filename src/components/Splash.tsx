import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Splash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("lume-splash");
    if (seen) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("lume-splash", "1");
      setVisible(false);
    }, 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-wine-gradient overflow-hidden"
          aria-hidden="true"
        >
          {/* Particles */}
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-cream/40"
              style={{
                width: 4 + Math.random() * 6,
                height: 4 + Math.random() * 6,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${3 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0.7, opacity: 0, letterSpacing: "0.5em" }}
            animate={{ scale: 1, opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-light text-shimmer">
              LUME
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
              className="mx-auto mt-4 h-px w-40 origin-center bg-cream/70"
            />
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-4 text-center text-xs tracking-[0.5em] text-cream/80"
            >
              MODA FEMININA
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
