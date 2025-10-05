// src/components/WeddingContent.tsx
import { MapPin } from 'lucide-react';
import { motion } from "framer-motion";
import AccordionItem from './AccordionItem.js';
import Countdown from './Countdown.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import antrag from '../assets/antrag.mp4';

import fabmelring from '../assets/fabmelring.jpg';
import luca from '../assets/lucaq.jpg';
//import piedmont from '../assets/piedmont.jpg';
import location from '../assets/location.jpg';
//import fabio from '../assets/fabio.jpg';
import fabmel1 from '../assets/fabmel1.jpg';
import fabmel2 from '../assets/fabmel2.jpg';
import fabmel3 from '../assets/fabmel3.jpg';
import fabmel4 from '../assets/fabmel4.jpg';
import fabmel5 from '../assets/fabmel5.jpg';
import fabmel6 from '../assets/fabmel6.jpg';
import fabmel7 from '../assets/fabmel7.jpg';
//import fabmel8 from '../assets/fabmel8.jpg';
import fabmel9 from '../assets/fabmel9.jpg';
import fabmel10 from '../assets/fabmel10.jpg';
import fabmel11 from '../assets/fabmel11.jpg';
import fabmel12 from '../assets/fabmel12.jpg';
import fabmel13 from '../assets/fabmel13.jpg';
import fabmel14 from '../assets/fabmel14.jpg';
import fabmel15 from '../assets/fabmel15.jpg';
import fabmel16 from '../assets/fabmel16.jpg';
import fabmel17 from '../assets/fabmel17.jpg';
import fabmel18 from '../assets/fabmel18.jpg';
import fabmel19 from '../assets/fabmel19.jpg';
import fabmel20 from '../assets/fabmel20.jpg';
//import fabmelcol1 from '../assets/fabmelcol1.jpg';
//import fabmelcol2 from '../assets/fabmelcol2.jpg';
import fabmelcol3 from '../assets/fabmelcol3.jpg';
import trauzeugin1 from '../assets/trauzeugin1q.jpg';
import trauzeugin2 from '../assets/trauzeugin2q.jpg';

import lav1 from '../assets/lav1s.svg';
import lav2 from '../assets/lav2s.svg';
import lemon from '../assets/lemons.svg';

import { Link } from 'react-router-dom';


const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-12 md:py-20 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
        {children}
    </section>
);

export default function WeddingContent() {

  const groomsmen = [
    { name: "Luca Müller", role: "Trauzeuge", img: luca, phone:"+49 159 02258054" },
    { name: "Paulina Mirkes", role: "Trauzeugin", img: trauzeugin1, phone:"+49 151 59924026" },
    { name: "Alena Böwen", role: "Trauzeugin", img: trauzeugin2, phone:"+49 160 91222282" },
    //{ name: "Erika Mustermann", role: "Trauzeugin", img: "https://via.placeholder.com/150" },
    //{ name: "John Doe", role: "Groomsman", img: "https://via.placeholder.com/150" },
    //{ name: "Jane Doe", role: "Bridesmaid", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="bg-[#f9f4fb]">
      {/* NEW TOP SECTION */}
      <Section className="text-center px-0 sm:px-2 md:px-4">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-4xl md:text-6xl font-bodoni text-brownNew">
          Melina & Fabio
        </h1>
      </div>
        <p className="mt-2 font-bodoni text-base text-gray-700">
          Zwei Herzen, ein Ja
        </p>
        <br />

        {/* Edge-to-edge on mobile, padded on desktop */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen md:static md:w-auto md:mx-0">
        <div className="grid grid-cols-3 gap-0.5 mb-10">
          <motion.img
            src={fabmel1}
            alt="Bild 1"
            className="2xl shadow-xl object-contain w-full"
            initial={{ opacity: 0, y: 100 }}       // Start hidden, below
            whileInView={{ opacity: 1, y: 0 }}    // Animate to visible
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
          <motion.img
            src={fabmel2}
            alt="Bild 2"
            className="2xl shadow-xl object-contain w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.2 }}  // small delay for staggered effect
            viewport={{ once: true }}
          />
          <motion.img
            src={fabmel3}
            alt="Bild 3"
            className="2xl shadow-xl object-contain w-full"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>
        </div>


        {/* Text under images */}
        
        <p className="mt-2 font-bodoni text-lg text-gray-700">
          05. September 2026 | 14:00 Uhr | Bekond
        </p>
        <div className="mt-12 text-center max-w-3xl mx-auto">
        <img src={lav1} alt="decor" className="w-32 h-32 mx-auto" />
        <br />
            <h3 className="text-3xl font-bodoni text-brownNew">Willkommen</h3>
            <p className="mt-4 font-bodoni text-gray-700">
              Wir freuen uns auf einen Tag voller Liebe, Freude und gemeinsamer
              Erinnerungen. <br />
              Schön, dass wir ihn mit euch teilen dürfen.
            </p>
            <p className="mt-4 font-bodoni text-gray-700">
              Hier auf unserer Website findet ihr alle wichtigen Informationen zu
              unserer freien Trauung und zur Rückmeldung. <br />
              Wir zählen die Tage und können es kaum erwarten, gemeinsam mit euch
              zu lachen, Freudentränen zu vergießen, anzustoßen und zu tanzen.
            </p>
            <p className="mt-4 font-bodoni text-gray-700">
              Für Fragen oder organisatorische Details könnt ihr euch jederzeit
              auch an uns oder unsere Trauzeugen wenden - die Kontaktdaten findet
              ihr weiter unten auf dieser Seite.
            </p>
          </div>
      </Section>
      <Section>
      <Countdown />
      </Section>
      <main>
        {/* BILDERGALERIE SWIPER */}
        <Section className="bg-[#f9f4fb]">
             <h2 className="text-3xl font-bodoni text-center text-brownNew mb-8">Unsere Momente</h2>
             <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="h-[70vh]" // control height of carousel
                onSlideChange={(swiper: any) => {
                  // Get the active slide
                  const activeSlide = swiper.slides[swiper.activeIndex];
                  const video = activeSlide.querySelector("video");
                  if (video) {
                    video.currentTime = 0; // restart
                    video.play();          // ensure playback resumes
                  }
                }}
              >
                <SwiperSlide className="flex items-center justify-center">
                  <video
                    src={antrag}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-lg shadow-lg max-h-full max-w-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmelring} alt="Gallery 1" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmelcol3} alt="Gallery 2" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel4} alt="Gallery 3" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel5} alt="Gallery 4" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel6} alt="Gallery 5" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel7} alt="Gallery 6" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel9} alt="Gallery 7" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel10} alt="Gallery 8" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel11} alt="Gallery 9" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel12} alt="Gallery 10" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel13} alt="Gallery 11" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel14} alt="Gallery 12" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel15} alt="Gallery 13" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel16} alt="Gallery 14" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel17} alt="Gallery 15" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel18} alt="Gallery 16" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel19} alt="Gallery 17" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center"><img src={fabmel20} alt="Gallery 18" className="rounded-lg shadow-lg"/></SwiperSlide>
             </Swiper>
        </Section>

        
        {/* LOCATION */}
        <Section className="bg-[#f9f4fb]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bodoni text-brownNew mb-4">Die Location</h2>
                    <p className="text-gray-700 font-bodoni mb-4">
                      Die Orangerie in Bekond ist der Ort, an dem wir unser „Ja“ feiern - umgeben von einem besonderen Ambiente, das diesen Tag unvergesslich macht.
                    </p>
                    <div className="flex items-center gap-2 text-brownNew">
                        <MapPin className="w-5 h-5"/>
                        <span className='font-bodoni'>Am Weiher 15, 54340 Bekond</span>
                    </div>
                </div>
                <div>
                    <img src={location} alt="Location" className="rounded-lg shadow-xl w-full h-auto"/>
                </div>
            </div>
            {/* Google Maps Embed 49.6751955,6.5641451,21 */}
            <div className="mt-12">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.47451778903!2d6.803999144418078!3d49.850746878694466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bfd5d1109be22f%3A0x9828108aeb001f24!2sSchloss%20Bekond%20-%20Orangerie!5e0!3m2!1sde!2sde!4v1758318997895!5m2!1sde!2sde" 
                  width="100%" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-lg shadow-xl"
                ></iframe>
            </div>
        </Section>

        {/* TRAUZEUGEN */}
        <Section>
            <h2 className="text-3xl font-bodoni text-center text-brownNew mb-8">Unsere Trauzeugen</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-center">
                {groomsmen.map((person, index) => (
                    <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                     key={index}>
                        <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full mx-auto shadow-lg"/>
                        <h3 className="mt-4 font-bodoni text-lg text-gray-800">{person.name}</h3>
                        <p className="text-brownNew font-bodoni">{person.role}</p>
                        <a href={`tel:${person.phone}`} className="text-brownNew font-bodoni hover:underline">
                          {person.phone}
                        </a>
                    </motion.div>
                ))}
            </div>
        </Section>

        {/* ZU- ODER ABSAGE */}
        <Section className="bg-[#f9f4fb] text-center">
            <h2 className="text-3xl font-bodoni text-brownNew">Seid ihr dabei?</h2>
            <p className="mt-4 font-bodoni text-gray-700 max-w-2xl mx-auto">
              Sagt uns bis zum 20. Mai 2026 bitte Bescheid - wir müssen die Stücke der Hochzeitstorte einteilen, und ihr wollt doch bestimmt eins abhaben. 🎂😉
            </p>
            <Link to="/register"> 
                <button className="mt-8 font-bodoni bg-lavender hover:bg-lavender-dark text-white text-lg px-8 py-3 rounded-full shadow-lg transition-colors">
                    Zur Rückmeldung
                </button>
            </Link>
        </Section>

        {/* HÄUFIG GESTELLTE FRAGEN */}
        <Section>
            <h2 className="text-3xl font-bodoni text-center text-brownNew mb-8">Hochzeitsinfos</h2>
            <div className="max-w-3xl mx-auto">
                <AccordionItem 
                    question="Was ist der Dresscode?" 
                    answer="Kein Dresscode - kommt einfach so, wie ihr euch wohlfühlt. Wenn ihr mögt, lasst euch gern von Lavendel & Lemon inspirieren."
                />
                <AccordionItem 
                    question="Gibt es eine Geschenkeliste?" 
                    answer="Das allerbeste Geschenk ist, dass ihr mit uns feiert!
                    Wenn ihr uns trotzdem etwas schenken möchtet, freuen wir uns riesig über einen kleinen Beitrag für unsere Hochzeitskasse. Keine Sorge - ihr müsst nichts Großes oder Aufwendiges basteln, eine Karte reicht völlig aus.
                    Wir können's kaum erwarten und freuen uns mega auf euch!"
                />
                <AccordionItem 
                    question="Darf man Fotos machen?" 
                    answer="Während der Trauung bitten wir darum, die Handys in der Tasche zu lassen - wir haben nämlich die beste Fotografin auf der Welt: Simone Kasper. (Und ganz wichtig: Godi muss ihr Handy unbedingt zuhause lassen.)"
                />
                <AccordionItem 
                    question="Gibt es ein Shuttle von der Location?" 
                    answer="Ja, es wird ein Shuttle geben! Weitere Infos dazu folgen."
                />
            </div>
        </Section>
      </main>
      {/* Decorative symbol */}
      <img
        src={lav1}
        alt="decor"
        className="absolute top-0 left-5 w-64 h-64 opacity-0 pointer-events-none"
      />
      <img
        src={lav2}
        alt="decor"
        className="absolute bottom-4 left-8 w-64 h-64 opacity-0 pointer-events-none"
      />
      <img
        src={lemon}
        alt="decor"
        className="absolute bottom-6 right-12 w-64 h-64 opacity-0 pointer-events-none"
      />
    </div>
    
  );
}