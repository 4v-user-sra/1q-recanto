import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function ThankYou() {
  return (
    <section className="py-32 px-8 bg-brand-graphite text-brand-white relative overflow-hidden text-center border-t-4 border-brand-coral min-h-[60vh] flex items-center justify-center">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-brand-coral/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-brand-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-brand-coral/20 text-brand-coral font-bold px-5 py-2 rounded-full mb-8 text-xs uppercase tracking-widest border border-brand-coral/30"
        >
          <Sparkles className="w-4 h-4 text-brand-coral" />
          <span>Recanto da Pizza & V4 Company</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-brand-white mb-6 text-6xl md:text-8xl font-heading font-extrabold leading-tight tracking-tight"
        >
          Muito Obrigado!
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-brand-white/80 text-xl md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12"
        >
          Seguimos juntos acelerando os resultados, fortalecendo a marca e preparando a operação para o próximo ciclo de crescimento.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-brand-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-brand-white/15"
        >
          <span className="text-brand-white/90 text-sm font-semibold tracking-wide">
            Recanto da Pizza © 2026 — Fechamento do Trimestre
          </span>
        </motion.div>
      </div>
    </section>
  );
}
