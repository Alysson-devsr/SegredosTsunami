/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { motion } from "motion/react";

export default function App() {
  const now = new Date();
  const currentDate = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()}`;

  useEffect(() => {
    // Avoid double injection
    if (document.getElementById('smartplayer-sdk')) return;

    const s = document.createElement("script");
    s.id = 'smartplayer-sdk';
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      const script = document.getElementById('smartplayer-sdk');
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#141414] overflow-x-hidden">
      {/* Top Warning Bar */}
      <div className="bg-black py-2 md:py-3 px-4 text-center">
        <p className="text-white text-xs md:text-sm font-bold uppercase tracking-tight">
          Devido a aula explicita, o vídeo ficará disponível somente até:{" "}
          <span className="text-[#EAB308]">{currentDate}</span>
        </p>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-[44px] font-[900] leading-[1.1] tracking-tight mb-8 max-w-4xl mx-auto">
            Aula explícita com sexóloga e ex-atriz pornô ensina <span className="text-[#E11D48]">o toque que vicia qualquer mulher</span> – veja abaixo
          </h1>

          <p className="text-xl md:text-[28px] font-normal text-[#444] leading-tight max-w-3xl mx-auto">
            Depois de assistir a essa aula, <span className="font-bold text-black">ela não vai conseguir pensar em outro</span> quando quiser transar, <span className="text-[#E11D48] font-bold">só em você</span>. Aperte o play.
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full shadow-2xl rounded-lg overflow-hidden bg-black"
          id="player-container"
        >
          <div 
            className="w-full"
            dangerouslySetInnerHTML={{
              __html: `
                <div id="ifr_69fbf1c582aabddb54b134c7_wrapper" style="margin: 0 auto; width: 100%; "> 
                  <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_69fbf1c582aabddb54b134c7_aspect"> 
                    <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69fbf1c582aabddb54b134c7" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/b2b9ef98-0966-4045-8c43-2e4280cca853/players/69fbf1c582aabddb54b134c7/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
                  </div> 
                </div>
              `
            }}
          />
        </motion.div>

      </main>
    </div>
  );
}
