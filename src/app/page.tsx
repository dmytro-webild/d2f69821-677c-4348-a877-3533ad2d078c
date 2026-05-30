"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, DollarSign, Feather, Heart, Smile, Star, Truck, UserCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Domov",
          id: "domov",
        },
        {
          name: "O Nás",
          id: "o-nas",
        },
        {
          name: "Služby",
          id: "sluzby",
        },
        {
          name: "Svadby",
          id: "svadby",
        },
        {
          name: "Výhody",
          id: "vyhody",
        },
        {
          name: "Donáška",
          id: "donaska",
        },
        {
          name: "Recenzie",
          id: "recenzie",
        },
        {
          name: "Galéria",
          id: "galeria",
        },
        {
          name: "Kontakt",
          id: "kontakt",
        },
      ]}
      brandName="Kvetinárstvo CARMEN"
    />
  </div>

  <div id="domov" data-section="domov">
      <HeroOverlay
      title="Kvety, ktoré vytvárajú emócie."
      description="Prémiové kvetinárstvo v Bratislave s čerstvými kvetmi, svadobnými aranžmánmi a profesionálnym individuálnym prístupom."
      tag="★★★★★ 5.0 hodnotenie"
      buttons={[
        {
          text: "Navštíviť kvetinárstvo",
          href: "#kontakt",
        },
        {
          text: "Zavolať teraz",
          href: "tel:+421905405786",
        },
        {
          text: "Objednať cez WOLT",
          href: "https://wolt.com/sk/svk/bratislava/venue/kvetinarstvo-carmen",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-vector/hand-drawn-flat-easter-car_23-2149322818.jpg",
          alt: "Rozvoz po Bratislave",
        },
        {
          src: "http://img.b2bpic.net/free-vector/hand-drawn-wedding-labels_23-2149144482.jpg",
          alt: "Svadobná Floristika",
        },
        {
          src: "http://img.b2bpic.net/free-photo/paper-with-writing-leaves-flowers_23-2147766405.jpg",
          alt: "Čerstvé kvety každý deň",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-florist-making-bouquet_23-2149127275.jpg",
          alt: "Kytice na mieru",
        },
        {
          src: "http://img.b2bpic.net/free-photo/five-gold-rating-stars-3d-hand_107791-16392.jpg",
          alt: "Vysoké hodnotenie",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/look-from-bouquet-pinks-standing-rays-daylight_8353-625.jpg"
      imageAlt="Luxusné floristické aranžmány"
      showBlur={true}
    />
  </div>

  <div id="o-nas" data-section="o-nas">
      <TextAbout
      useInvertedBackground={true}
      title="Kvetinárstvo CARMEN: Váš Partner pre Krásne Okamihy"
      description="Kvetinárstvo CARMEN je miesto, kde sa floristika stretáva s emóciou. Už roky pomáhame našim zákazníkom vyjadriť lásku, vďaku, gratuláciu či spomienku prostredníctvom krásnych kvetov a aranžmánov. Každá kytica je vytvorená s dôrazom na detail, estetiku a individuálny prístup. \n\n**Prečo si vybrať práve nás?**\nSme hrdí na naše 5.0 Google hodnotenie, čo svedčí o dlhoročnej spokojnosti zákazníkov. Garantujeme čerstvé kvety každý deň a rozumné ceny, pričom vždy dodržiavame individuálny prístup a profesionálnu prácu nášho personálu."
    />
  </div>

  <div id="sluzby" data-section="sluzby">
      <FeatureCardSixteen
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Bez kompromisov na kvalite",
          "Žiadne oneskorené dodávky",
          "Vždy individuálny prístup",
          "Len čerstvé a krásne kvety",
        ],
      }}
      positiveCard={{
        items: [
          "Rezané kvety",
          "Svadobné aranžmány",
          "Kytice na mieru",
          "Flower boxy",
          "Izbové rastliny",
          "Darčekové predmety",
          "Sezónne dekorácie",
        ],
      }}
      title="Naše Prémiové Služby"
      description="Ponúkame širokú škálu floristických služieb, ktoré sú vždy prispôsobené vašim potrebám a predstavám. Od rezaných kvetov až po kompletné svadobné výzdoby."
    />
  </div>

  <div id="svadby" data-section="svadby">
      <TeamCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      members={[
        {
          id: "step-1",
          name: "1. Konzultácia",
          role: "Detailne prediskutujeme vaše predstavy a štýl svadby.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-working-as-wedding-planners_23-2150328533.jpg",
          imageAlt: "Svadobná konzultácia s floristom",
        },
        {
          id: "step-2",
          name: "2. Návrh Výzdoby",
          role: "Pripravíme kreatívny návrh kvetinovej výzdoby na mieru.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-flowers-with-painting-material-wooden-table_23-2148143537.jpg",
          imageAlt: "Kreatívny návrh svadobnej výzdoby",
        },
        {
          id: "step-3",
          name: "3. Príprava Kvetov",
          role: "Starostlivo vyberieme a pripravíme čerstvé kvety pre váš deň.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-making-beautiful-floral-arrangement_23-2148846518.jpg",
          imageAlt: "Florista pripravuje svadobné kvety",
        },
        {
          id: "step-4",
          name: "4. Doručenie",
          role: "Kvety bezpečne doručíme na miesto konania svadby.",
          imageSrc: "http://img.b2bpic.net/free-photo/florist-makes-beautiful-bouquet-studio_1157-28402.jpg",
          imageAlt: "Doručenie svadobných kvetov",
        },
        {
          id: "step-5",
          name: "5. Realizácia",
          role: "Zrealizujeme kompletnú kvetinovú výzdobu s precíznosťou.",
          imageSrc: "http://img.b2bpic.net/free-photo/layered-candlestick-stand-holiday-table_8353-9829.jpg",
          imageAlt: "Realizácia svadobnej kvetinovej výzdoby",
        },
      ]}
      title="Svadobná Floristika: Kvety pre Váš Veľký Deň"
      description="Doprajte si nezabudnuteľnú svadbu s kvetmi od Kvetinárstva CARMEN. Každý svadobný aranžmán tvoríme s vášňou a precíznosťou, aby odzrkadľoval váš jedinečný príbeh. \n\n**Recenzia:** „Kvetinárstvo Carmen nám pripravilo nádhernú svadobnú výzdobu. O všetko sa postarali a výsledok bol úžasný.“"
    />
  </div>

  <div id="vyhody" data-section="vyhody">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "g-rating",
          value: "5.0/5",
          title: "Google Hodnotenie",
          description: "Vynikajúce hodnotenie od spokojných zákazníkov.",
          icon: Star,
        },
        {
          id: "individual",
          value: "Áno",
          title: "Individuálny Prístup",
          description: "Každá kytica je originál na mieru.",
          icon: UserCheck,
        },
        {
          id: "prices",
          value: "Fér",
          title: "Rozumné Ceny",
          description: "Prémiová kvalita za dostupné ceny.",
          icon: DollarSign,
        },
        {
          id: "fresh",
          value: "Denne",
          title: "Čerstvé Kvety",
          description: "Vždy čerstvý výber z najlepších dodávok.",
          icon: Feather,
        },
        {
          id: "delivery",
          value: "BA",
          title: "Rozvoz po Bratislave",
          description: "Rýchla a spoľahlivá donáška kvetov.",
          icon: Truck,
        },
        {
          id: "wedding",
          value: "Kompletné",
          title: "Svadobná Floristika",
          description: "Kompletné služby pre váš veľký deň.",
          icon: Heart,
        },
        {
          id: "pro-staff",
          value: "Expert",
          title: "Profesionálny Personál",
          description: "Skúsení floristi s vášňou pre kvety.",
          icon: Award,
        },
        {
          id: "satisfaction",
          value: "Vysoká",
          title: "Dlhoročná Spokojnosť",
          description: "Verní zákazníci sú našou vizitkou.",
          icon: Smile,
        },
      ]}
      title="Prečo Si Vybrať Kvetinárstvo CARMEN?"
      description="Naša vášeň pre kvety a záväzok k excelentnosti nás robia lídrom v Bratislave. Zistite, čo nás odlišuje od ostatných."
    />
  </div>

  <div id="donaska" data-section="donaska">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Rýchle Doručenie",
        "Čerstvé Kvety",
        "Starostlivá Manipulácia",
        "Spoľahlivý Servis",
        "Široké Pokrytie BA",
      ]}
      title="Pošlite radosť kdekoľvek v Bratislave."
      description="Objednajte si kvety pohodlne cez WOLT alebo nás kontaktujte telefonicky. Zaručujeme čerstvosť a doručenie priamo k vašim dverám s maximálnou starostlivosťou."
      buttons={[
        {
          text: "OBJEDNAŤ CEZ WOLT",
          href: "https://wolt.com/sk/svk/bratislava/venue/kvetinarstvo-carmen",
        },
      ]}
      speed={40}
      showCard={true}
    />
  </div>

  <div id="recenzie" data-section="recenzie">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="auto"
      testimonials={[
        {
          id: "1",
          name: "Mária Herchlová",
          role: "Spokojná nevesta",
          testimonial: "Nádherná svadobná výzdoba a krásne kombinácie kvetov. Všetko bolo perfektné!",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-showing-okay-gesture_23-2148049992.jpg",
          imageAlt: "Mária Herchlová",
        },
        {
          id: "2",
          name: "Igor Bartošek",
          role: "Verný zákazník",
          testimonial: "Super kvalita za rozumnú cenu. Vždy sa sem rád vraciam po čerstvé kvety.",
          imageSrc: "http://img.b2bpic.net/free-photo/image-handsome-romantic-guy-black-suit-holding-bouquet-roses-pointing-camera-congrat_1258-161234.jpg",
          imageAlt: "Igor Bartošek",
        },
        {
          id: "3",
          name: "Lucia Koišová",
          role: "Organizačná manažérka",
          testimonial: "Široký výber čerstvých rezaných kvetov a profesionálny personál. Vždy výborný servis.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-positive-dark-skinned-young-woman-smiles-happily-with-closed-eyes-holds-big-bouquet-flowers_273609-45573.jpg",
          imageAlt: "Lucia Koišová",
        },
        {
          id: "4",
          name: "Peter Novák",
          role: "Darca s citom",
          testimonial: "Kytica na mieru pre moju mamu bola prekrásna. Presne vystihli moje želania. Vrelo odporúčam!",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-couple-drinking-near-wall_23-2147744401.jpg",
          imageAlt: "Peter Novák",
        },
        {
          id: "5",
          name: "Elena Kováčová",
          role: "Milovníčka rastlín",
          testimonial: "Objednávam si u nich pravidelne izbové rastliny. Vždy sú zdravé, krásne a kvalitne zabalené.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-smiling-with-top-hat-thumbs-up_1187-1549.jpg",
          imageAlt: "Elena Kováčová",
        },
      ]}
      title="Čo hovoria naši zákazníci?"
      description="Sme hrdí na spätnú väzbu od našich klientov, ktorá potvrdzuje náš záväzok k excelentnosti a individuálnemu prístupu."
    />
  </div>

  <div id="galeria" data-section="galeria">
      <ProductCardThree
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "g-item-1",
          name: "Svadobná výzdoba",
          price: "Na vyžiadanie",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-valentine-s-day-concept-with-roses_23-2148752585.jpg",
          imageAlt: "Luxusná svadobná výzdoba stola",
        },
        {
          id: "g-item-2",
          name: "Flower box ruží",
          price: "Na vyžiadanie",
          imageSrc: "http://img.b2bpic.net/free-photo/gift-box-decorated-with-ribbons-decorative-roses-knitted-items-original-gift-wrapping-valentine-s-day_169016-8655.jpg",
          imageAlt: "Moderný flower box s ružami",
        },
        {
          id: "g-item-3",
          name: "Miešaná kytica",
          price: "Na vyžiadanie",
          imageSrc: "http://img.b2bpic.net/free-photo/view-natural-blurry-flowers_23-2149454614.jpg",
          imageAlt: "Živá miešaná kytica",
        },
        {
          id: "g-item-4",
          name: "Elegantná biela kytica",
          price: "Na vyžiadanie",
          imageSrc: "http://img.b2bpic.net/free-photo/white-rose-background-concept_23-2150298815.jpg",
          imageAlt: "Biela kytica ruží a eukalyptu",
        },
        {
          id: "g-item-5",
          name: "Interiér predajne",
          price: "Na vyžiadanie",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-woman-posing-near-flowers_23-2147762190.jpg",
          imageAlt: "Interiér kvetinárstva CARMEN",
        },
        {
          id: "g-item-6",
          name: "Sezónna dekorácia",
          price: "Na vyžiadanie",
          imageSrc: "http://img.b2bpic.net/free-photo/autumn-background-with-decorative-items-pumpkin_169016-6360.jpg",
          imageAlt: "Jesenná sezónna dekorácia s kvetmi",
        },
      ]}
      title="Naša Galéria: Floristické Umenie v Obrazoch"
      description="Nahliadnite do nášho sveta kvetov a inšpirujte sa našimi najnovšími dielami. Od svadobných kytíc po sezónne dekorácie – každý kúsok je stvorený s láskou."
    />
  </div>

  <div id="kontakt" data-section="kontakt">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Radi vám pomôžeme"
      title="Kontaktujte Nás"
      description="Navštívte nás osobne v našom butiku v Bratislave, zavolajte nám alebo nám pošlite správu. Radi vám poradíme s výberom kvetov, svadobnou výzdobou či individuálnymi objednávkami.\n\n**Adresa:** Radlinského 34, 811 07 Bratislava\n**Telefóny:** +421 905 405 786, +421 948 887 764\n\nTešíme sa na vás!"
      inputPlaceholder="Váš e-mail pre novinky"
      buttonText="Odoslať"
      termsText="Súhlasím s podmienkami ochrany osobných údajov."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-photo/close-up-man-cutting-leaf-pink-peony-flower-with-scissor_23-2148075300.jpg"
      logoAlt="Kvetinárstvo CARMEN Logo"
      columns={[
        {
          items: [
            {
              label: "Domov",
              href: "#domov",
            },
            {
              label: "O Nás",
              href: "#o-nas",
            },
            {
              label: "Služby",
              href: "#sluzby",
            },
            {
              label: "Galéria",
              href: "#galeria",
            },
          ],
        },
        {
          items: [
            {
              label: "Svadobná Floristika",
              href: "#svadby",
            },
            {
              label: "Prečo My",
              href: "#vyhody",
            },
            {
              label: "Recenzie",
              href: "#recenzie",
            },
            {
              label: "Kontakt",
              href: "#kontakt",
            },
          ],
        },
        {
          items: [
            {
              label: "Tel: +421 905 405 786",
              href: "tel:+421905405786",
            },
            {
              label: "Tel: +421 948 887 764",
              href: "tel:+421948887764",
            },
            {
              label: "Radlinského 34, Bratislava",
              href: "https://maps.app.goo.gl/example",
            },
            {
              label: "WOLT Objednávka",
              href: "https://wolt.com/sk/svk/bratislava/venue/kvetinarstvo-carmen",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/kvetinarstvo_carmen",
            },
          ],
        },
      ]}
      logoText="Kvetinárstvo CARMEN"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
