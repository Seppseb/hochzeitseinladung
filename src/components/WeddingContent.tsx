// src/components/WeddingContent.tsx
import { MapPin } from 'lucide-react';
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
import piedmont from '../assets/piedmont.jpg';
import fabio from '../assets/fabio.jpg';
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
import fabmelcol1 from '../assets/fabmelcol1.jpg';
import fabmelcol2 from '../assets/fabmelcol2.jpg';
import fabmelcol3 from '../assets/fabmelcol3.jpg';
import trauzeugin1 from '../assets/trauzeugin1q.jpg';
import trauzeugin2 from '../assets/trauzeugin2q.jpg';
import { Link } from 'react-router-dom';


const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <section className={`py-12 md:py-20 px-6 md:px-12 max-w-5xl mx-auto ${className}`}>
        {children}
    </section>
);

export default function WeddingContent() {
  const schedule = [
    { time: "15:00 Uhr", event: "Trauung" },
    { time: "16:00 Uhr", event: "Sektempfang & Fotos" },
    { time: "17:00 Uhr", event: "Kaffee & Kuchen", img: fabio },
    { time: "19:00 Uhr", event: "Abendessen" },
    { time: "21:00 Uhr", event: "Party & Tanz in Temmels" },
  ];

  const groomsmen = [
    { name: "Luca Müller", role: "Trauzeuge", img: luca, phone:"0123 / 4567890" },
    { name: "Paulina Mirkes", role: "Trauzeugin", img: trauzeugin1, phone:"0123 / 4567890" },
    { name: "Alena Böwen", role: "Trauzeugin", img: trauzeugin2, phone:"0123 / 4567890" },
    //{ name: "Erika Mustermann", role: "Trauzeugin", img: "https://via.placeholder.com/150" },
    //{ name: "John Doe", role: "Groomsman", img: "https://via.placeholder.com/150" },
    //{ name: "Jane Doe", role: "Bridesmaid", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="bg-white">
      {/* NEW TOP SECTION */}
      <Section className="text-center px-0 sm:px-2 md:px-4">
        <h1 className="text-4xl md:text-6xl font-playfair text-lavender-dark mb-10">
          Melina & Fabio
        </h1>

        {/* 3 images side by side */}
        <div className="grid grid-cols-3 gap-0.5 mb-10">
        <img
          src={fabmel1}
          alt="Bild 1"
          className="rounded-2xl shadow-xl object-contain w-full"
        />
        <img
          src={fabmel2}
          alt="Bild 2"
          className="rounded-2xl shadow-xl object-contain w-full"
        />
        <img
          src={fabmel3}
          alt="Bild 3"
          className="rounded-2xl shadow-xl object-contain w-full"
        />
      </div>


        {/* Text under images */}
        <p className="mt-4 text-2xl text-gray-700">sagen JA!</p>
        <p className="mt-2 text-lg text-gray-700">20. Juni 2026 | Weingut Piedmont, Konz-Filzen</p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Wir freuen uns riesig, diesen besonderen Tag mit euch zu feiern. Auf
          dieser Seite findet ihr alle Infos zu Ablauf, Location und Rückmeldung.
        </p>
      </Section>

      <main>
        {/* COUNTDOWN & WELCOME */}
        <Section>
            <Countdown />
            <div className="mt-12 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-playfair text-lavender-dark">Willkommen!</h2>
                <p className="mt-4 text-gray-700">
                    Wir können es kaum erwarten, diesen besonderen Tag mit euch zu teilen. 
                    Hier findet ihr alle wichtigen Informationen rund um unsere Hochzeit. 
                    Bei Fragen könnt ihr uns jederzeit erreichen unter:{' '}
                    <a href="tel:01234567890" className="text-lavender-dark font-semibold hover:underline">
                        0123 / 4567890
                    </a>.
                </p>
            </div>
        </Section>
        
        {/* BILDERGALERIE SWIPER */}
        <Section className="bg-lemon-light">
             <h2 className="text-3xl font-playfair text-center text-lavender-dark mb-8">Unsere Momente</h2>
             <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                onSlideChange={(swiper) => {
                  // Get the active slide
                  const activeSlide = swiper.slides[swiper.activeIndex];
                  const video = activeSlide.querySelector("video");
                  if (video) {
                    video.currentTime = 0; // restart
                    video.play();          // ensure playback resumes
                  }
                }}
              >
                <SwiperSlide>
                  <video
                    src={antrag}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
                <SwiperSlide><img src={fabmelring} alt="Gallery 1" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmelcol1} alt="Gallery 2" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmelcol2} alt="Gallery 3" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmelcol3} alt="Gallery 4" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel1} alt="Gallery 5" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel2} alt="Gallery 6" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel3} alt="Gallery 7" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel4} alt="Gallery 8" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel5} alt="Gallery 9" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel6} alt="Gallery 10" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel7} alt="Gallery 11" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel9} alt="Gallery 13" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel10} alt="Gallery 14" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel11} alt="Gallery 15" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel12} alt="Gallery 16" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel13} alt="Gallery 17" className="rounded-lg shadow-lg"/></SwiperSlide>
                <SwiperSlide><img src={fabmel14} alt="Gallery 18" className="rounded-lg shadow-lg"/></SwiperSlide>
             </Swiper>
        </Section>

        {/* TAGESABLAUF SWIPER */}
        <Section>
            <h2 className="text-3xl font-playfair text-center text-lavender-dark mb-8">Tagesablauf</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                navigation
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {schedule.map((item, index) => (
                    <SwiperSlide key={index} className="text-center">
                    <div className="p-6 border border-lavender rounded-lg bg-lavender-light/30">
                      {item.img && (
                        <img
                          src={item.img}
                          alt={item.event}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                      )}
                      <p className="font-bold text-lg text-lavender-dark">{item.time}</p>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
        </Section>
        
        {/* LOCATION */}
        <Section className="bg-lavender-light/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-playfair text-lavender-dark mb-4">Die Location</h2>
                    <p className="text-gray-700 mb-4">
                        Unsere Feier findet im wunderschönen Weingut "Piedmont" statt. Es bietet eine idyllische Kulisse für einen unvergesslichen Tag.
                    </p>
                    <div className="flex items-center gap-2 text-lavender-dark">
                        <MapPin className="w-5 h-5"/>
                        <span>Weingut Piedmont, Saartalstraße 1, 54329 Konz</span>
                    </div>
                </div>
                <div>
                    <img src={piedmont} alt="Location" className="rounded-lg shadow-xl w-full h-auto"/>
                </div>
            </div>
            {/* Google Maps Embed 49.6751955,6.5641451,21 */}
            <div className="mt-12">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1568.0899939849949!2d6.563087381821039!3d49.67525375273531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x410cae1adb0406e5%3A0x15022f374a326239!2sPiedmont!5e0!3m2!1sde!2sde!4v1755531209195!5m2!1sde!2sde" 
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
            <h2 className="text-3xl font-playfair text-center text-lavender-dark mb-8">Unsere Trauzeugen & Helfer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {groomsmen.map((person, index) => (
                    <div key={index}>
                        <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full mx-auto shadow-lg"/>
                        <h3 className="mt-4 font-bold text-lg text-gray-800">{person.name}</h3>
                        <p className="text-lavender-dark">{person.role}</p>
                        <p className="text-lavender-dark">{person.phone}</p>
                    </div>
                ))}
            </div>
        </Section>

        {/* ZU- ODER ABSAGE */}
        <Section className="bg-lemon-light text-center">
            <h2 className="text-3xl font-playfair text-lavender-dark">Wir freuen uns auf euch!</h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                Bitte gebt uns bis zum 20. Mai 2026 Bescheid, ob ihr dabei sein könnt, damit wir besser planen können.
            </p>
            <Link to="/register"> 
                <button className="mt-8 bg-lavender hover:bg-lavender-dark text-white text-lg px-8 py-3 rounded-full shadow-lg transition-colors">
                    Zur Rückmeldung
                </button>
            </Link>
        </Section>

        {/* HÄUFIG GESTELLTE FRAGEN */}
        <Section>
            <h2 className="text-3xl font-playfair text-center text-lavender-dark mb-8">Häufig gestellte Fragen</h2>
            <div className="max-w-3xl mx-auto">
                <AccordionItem 
                    question="Was ist der Dresscode?" 
                    answer="Kein Dresscode - kommt einfach so, wie ihr euch wohlfühlt. Wenn ihr mögt, lasst euch gern von Lavendel, Lemon & Love inspirieren."
                />
                <AccordionItem 
                    question="Gibt es eine Geschenkeliste?" 
                    answer="Das größte Geschenk ist euer Dabeisein. Wenn ihr uns dennoch eine Freude machen wollt, lasst unsere Flitterwochenkasse leise klingeln."
                />
            </div>
        </Section>
      </main>
    </div>
  );
}