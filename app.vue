<script setup lang="ts">
const scrollToSection = (sectionId: string, event: Event) => {
  event.preventDefault()
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    // Update URL hash for browser history and accessibility
    window.history.pushState(null, '', `#${sectionId}`)
  }
}

// Dialog state management
const openDialogId = ref<string | null>(null)

const openDialog = (itemId: string) => {
  openDialogId.value = itemId
  // Prevent background scrolling
  document.body.style.overflow = 'hidden'
}

const closeDialog = () => {
  openDialogId.value = null
  // Restore background scrolling
  document.body.style.overflow = 'auto'
}

const content = [
  {
    sectionTitle: "Tråde af tavshed",
    sectionSubTitle: null,
    id: 'traede-af-tavshed',
    content: [
      {
        header: null,
        type: "left-content",
        text: `"Tråde af Tavshed" favner både det tekstile og det sproglige, det sagte og det usagte. Den antyder, at der findes forbindelser - tråde - mellem liv, krop og sprog, og at tavsheden i sig selv kan være ladet med betydning. <br><br>Samlingen består af værker, der undersøger kvindelivets rytmer, sprogets kraft og kroppens tavse fortællinger. Med symboler, tekstil og papir skabes en sanselig og konceptuel samling, hvor tråde - både det fysiske og metaforiske - binder værkerne sammen.`,
        list: null,
        image: {
          url: "/images/bh-1.jpg",
          alt: "Bh - en skulptur i tekstil",
          width: 500,
          height: 700,
        },
      },
    ],
  },
  {
    sectionTitle: "Værker",
    sectionSubTitle: "Every piece tells a story",
    id: 'vaerker',
    content: [
      {
        header: '"Netværk" - Et tekstilt narrativ om relationer og rytme',
        type: "right-content",
        text: `I “Netværk” udforskes forbindelser - både de synlige og de subtile - gennem et organisk, tredimensionelt tekstilunivers. Værket består af snoede og viklede tråde, der slynger sig omkring en indre struktur, som var de relationer, vi bygger op omkring os. De uregelmæssige kurver og løkker skaber en rytme, der både er intuitiv og uforudsigelig, som livets egne bevægelser.<br><br>Materialets taktile karakter - det bløde garn mod den faste tråd - fremkalder en sanselighed, der inviterer beskueren til at reflektere over, hvordan vi vikles ind i hinanden. Farvevalget i neutrale toner med mørkere accenter understreger kontrasten mellem det rolige og det komplekse, det kendte og det ukendte.<br><br>“Netværk” er ikke blot en skulptur, men et poetisk rum, hvor forbindelser opstår, opløses og genopstår. Det er en hyldest til det menneskelige behov for kontakt - og til den skønhed, der findes i det uperfekte og uforudsigelige.`,
        extra: null,
        list: null,
        image: {
          url: "/images/netvaerk.jpg",
          alt: "Netværk - et tekstilt narrativ om relationer og rytme",
          width: 400,
          height: 600,
        },
      },
      {
        header: 'Kvinden',
        type: "right-content",
        text: `Brystet som form og fortælling<b><b>Et værk i tekstil og gips, hvor det feminine kropselement – brystet – træder frem som både fysisk form og symbolsk rum. Garnets bløde struktur og gipsens hårde skal skaber en dobbelthed: det skrøbelige og det stærke, det sanselige og det beskyttende.<br><br>Værket undersøger brystets rolle i kvindelivet: som kilde til næring, som objekt for begær, som sted for sygdom. Det er en fortælling om moderskab og seksualitet, om tab og transformation.<br><br>Materialerne taler med hinanden – garnet vikler sig om kroppen, gipsen dækker og afslører. Et værk, der insisterer på at give form til det usynlige og stemme til det tyste.`,
        extra: `To skåle af garn, blødt og stramt, bærer spor af liv.<br>
De er formet af omsorg og uro, af begær og bekymring.<br>
Et bryst er ikke bare en krop - det er et sted.<br>
Et sted hvor barnet finder næring,<br>
hvor elskeren finder hud,<br>
hvor sygdom kan slå rødder.<br><br>
Det feminine er ikke svagt.<br>
Det er delikat som tråd, men stærkt som netværk.<br>
Vi vikler os ind i forventninger,<br>
i roller, i rytmer, i rytmer der brydes.<br>
Brystet - som symbol, som sansning, som sårbarhed -<br>
bærer kvindelivets lag.<br><br>
Der er skønhed i asymmetrien.<br>
I det uperfekte, det helende, det tabte.<br>
Plasteret dækker ikke - det afslører.<br>
Garnet holder ikke fast - det forbinder.<br><br>
Dette værk er ikke en hyldest.<br>
Det er en påmindelse.<br>
Om at kvindeliv er vævet af både blødhed og brud.<br>
At vi giver liv, og mister.<br>
At vi rummer begær og bekymring.<br>
At vi er hele, selv når vi er i stykker.`,
        list: null,
        image: {
          url: "/images/bh-2.jpg",
          alt: "KvindenBrystet som form og fortælling - en skulptur i tekstil",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Det usagte",
        type: "right-content",
        text: `Et poetisk og konceptuelt stærkt værk, som balancerer materialitet og idé med stor præcision.<br><br>Dette værk er en undersøgelse af sprogets kraft og begrænsning. En fremmedordbog gennemboret af  metalstave og gennemvævet af garn - blødt og stift - symboliserer det talte, det tænkte og det tavse. Garnet flyder ud som tanker, der aldrig blev formuleret, og som stadig binder os til hinanden. Jeg ønsker at skabe rum for refleksion over, hvordan ord former vores liv - og hvordan fraværet af dem kan være lige så betydningsfuldt.`,
        extra: `En objektbaseret installation med en tyk, tung gammel fremmedordbog ,der er
gennemboret af fire metalstave, som gennemsyrer dens indhold fra bagside til forside. Mellem udvalgte sider flyder garn ud, nogle tråde bløde og levende, andre hærdede og stive - som ord, der aldrig blev sagt, men som stadig findes i sprækkerne mellem tid og tanke.<br><br>
Værket undersøger sprogets væsen: det talte og det usagte, det formede og det forstummede. Garnet fungerer som en visuel metafor for sprogets evne til at forbinde - mennesker, oplevelser, erindringer og omgivelser. De hærdede tråde peger på det, der stivner i os: de ord vi ikke fik sagt, de tanker der aldrig blev formuleret, de følelser der kun eksisterer som indre ekko.<br><br>
Metalstavene gennemborer bogen som en gestus af vold, kontrol eller fastlåsning - men også som en måde at fastholde betydning, at insistere på sprogets tyngde. Værket taler om det, der siges uden ord, og det, der aldrig blev sagt, men som alligevel binder os sammen.<br><br>
Værket fremstår som en stille refleksion over sprogets magt og begrænsning. Det er en undersøgelse af, hvordan vi kommunikerer - og hvordan vi nogle gange undlader det. Et værk, der insisterer på, at selv det usagte har form, farve og konsekvens.`,
        list: null,
        image: {
          url: "/images/det-usagte.jpg",
          alt: "Det usagte - en bog med metalstænger og garn",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Kvindeliv",
        type: "right-content",
        text: `Værket fremstå som et stille oprør: det insisterer på at synliggøre det usynlige, at æstetisere det oversete, og at give stemme til det, der ofte forties.<br><br>
Værket undersøger menstruationens rolle som både biologisk realitet og kulturelt tabu. Med 38 hæklede former - én for hvert år en kvinde typisk menstruerer - ophængt i en rød tråd og samlet i en lås, skabes en visuel fortælling om kontrol, cyklus og kvindelig erfaring. Jeg ønsker at åbne for samtaler om, hvordan menstruation påvirker kvinders liv globalt - som kilde til diskrimination, men også som en kraftfuld og fælles erfaring.`,
        extra: `En tekstil installation, der peger på menstruation som et biologisk vilkår, men også som et kulturelt og politisk fænomen. Den undersøger, hvordan kvinder verden over påvirkes, begrænses, beriges og diskrimineres af denne kropslige realitet. Hver hæklede form er unik, og materialets blødhed står i kontrast til emnets ofte hårde virkelighed - fra tabuisering og manglende adgang til hygiejneprodukter, til skam og social udstødelse.<br><br>
        Med de 38 hæklede, tamponlignende objekter ophængt i en rød tråd og samlet i en lås, skabes en poetisk, politisk, sanselig og symbolsk fortælling om kvindens liv med menstruation. Den bliver en kommentar til den biologiske og kulturelle realitet, som menstruation udgør for kvinder verden over. Installationen refererer til det gennemsnitlige antal år en kvinde menstruerer - en livsfase ofte præget af både tavshed og tabuisering.<br><br>
        Den røde tråd fungerer som en visuel og symbolsk linje: en livslinje, en blodlinje, en forbindelse mellem krop og samfund. Låsen samler og fastholder, som en metafor for kontrol, begrænsning - men også for styrke og sammenhold. Hver hæklede form er unik, og materialets blødhed står i kontrast til emnets ofte hårde virkelighed.<br><br>
        Låsen, der samler tråden, kan tolkes som kontrol, som samfundets greb om kvindekroppen - men også som et symbol på styrke, sammenhold og modstand. Værket insisterer på at synliggøre det usynlige og give stemme til det, der ofte forties.<br><br>
        Kvindeliv er en stille, men insisterende demonstration - en menostration - der inviterer til refleksion og samtale om kvindens plads i historien, i samfundet og i sin egen krop.<br><br>
        Værket inviterer til refleksion over menstruationens rolle i kvinders liv - som kilde til diskrimination, men også som et tegn på vitalitet, cyklisk kraft og samhørighed. Det peger på de globale forskelle i adgang til menstruationsprodukter, hygiejne, og frihed - og på de fælles erfaringer, der binder kvinder sammen på tværs af kulturer.`,
        list: null,
        image: {
          url: "/images/tamponer-2.jpg",
          alt: "Kvindeliv - en installation med hæklede former og rød tråd",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Livstråde",
        type: "right-content",
        text: `En stille, men insisterende gestus, der bliver en hyldest til det flydende, det sanselige og det sammensatte. Det er et værk, der lader materialet tale - og som inviterer til at reflektere over, hvordan livets tråde væves, vikles og flyder videre.

Værket visualisere kvindelivets kompleksitet og kontinuitet. Garnet, viklet omkring kvindetegnet og flydende ud i rummet, symboliserer de mange livsmomenter, der tilsammen danner et væv af erfaringer. Hver tråd repræsenterer en følelse, en begivenhed, et valg - og tilsammen skaber de en strøm, der forbinder fortid, nutid og fremtid. Værket er en hyldest til det flydende, det sanselige og det sammensatte i kvindens liv.`,
        extra: `En tekstil installation med et kvindetegn, omslynget af garn i et væld af farver, danner centrum i værket Livstråde. Garnet er viklet tæt omkring symbolets kontur, som en visuel fortælling om identitet, erfaring og livets mange lag. Fra værkets flyder lange tråde ned ad væggen og ud på gulvet - som en strøm af liv, der overskrider rammer og former og ikke lader sig begrænse af rum.<br><br>
        Farverne repræsenterer livets nuancer: glæde, sorg, styrke, sårbarhed, transformation, barndom, moderskab, tab, kærlighed, styrke og transformation. Hver tråd bærer sin egen fortælling, og tilsammen danner de et landskab af kvindelig erfaring. Værket peger på, hvordan livet ikke er en række adskilte begivenheder eller en lineær fortælling, men et væv af oplevelser, relationer og valg - bundet sammen i en kontinuerlig strøm der skaber helheden.<br><br>
        Installationen inviterer til at reflektere over, hvordan vi bærer vores liv med os - ikke som enkeltstående begivenheder, men som sammenvævede tråde, der flyder videre, forbinder os og efterlader spor.<br><br>
        Livstråde er både en hyldest og en undersøgelse af kvindens livsrejse. Det er et værk, der insisterer på at give plads til det flydende, det sanselige og det sammensatte - og som lader garnet tale, hvor ord ikke slår til.`,
        list: null,
        image: {
          url: "/images/livstraede.jpg",
          alt: "Livstråde - en installation med et kvindetegn og garn",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Interferens",
        type: "right-content",
        text: `Værket er en poetisk undersøgelse af forbindelser - både de synlige og de usynlige. Den organiske struktur, opbygget af looping former og indviklede netværk, fremstår som en slags fysisk visualisering af mentale eller sociale systemer. Materialerne, bløde og taktile, kontrasterer med den komplekse og næsten teknologiske form, hvilket skaber en spænding mellem det håndlavede og det systemiske.<br><br>
        Skulpturen kaster subtile skygger, som forlænger værkets tilstedeværelse ud i rummet. Skyggerne bliver en aktiv del af værket - som ekkoer af de forbindelser, vi ikke altid ser, men som påvirker os.<br><br>
        Værket refererer til de mønstre, der opstår, når forskellige bølger - af tanke, af relation, af energi - mødes og påvirker hinanden. Det er et værk, der inviterer til refleksion over, hvordan vi som mennesker er viklet ind i hinandens liv, og hvordan vores handlinger og tilstedeværelse skaber resonans i fællesskabet.`,
        extra: `En tekstil installation, der udforsker det usynlige felt mellem mennesker - de tråde, der binder os sammen, uden at vi nødvendigvis ser dem. Værket fremstår som en organisk struktur, et væv af looping former og forbindelser, der både kan læses som et neuralt netværk, et socialt system eller en indre tilstand.<br>
Materialerne er bløde og sanselige, men formen er kompleks og næsten teknologisk. Det skaber en spænding mellem det intuitive og det konstruerede, det personlige og det universelle. Skyggerne, som værket kaster på væggen, bliver en del af fortællingen - som spor af bevægelse, tanke og tilstedeværelse.
<br><br>
Værket fremstår i krydsfeltet mellem tekstil og skulptur og kredser om relationer, hukommelse og de mønstre, vi gentager - bevidst eller ubevidst. “Interferens” er en invitation til at stoppe op og mærke forbindelsen.`,
        list: null,
        image: {
          url: "/images/interferens.jpg",
          alt: "Interferens - en organisk tekstil installation",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Kroppens ekko",
        type: "right-content",
        text: `Værket “Kroppens Ekko” er en skulpturel undersøgelse af den menneskelige tilstedeværelse - ikke som figur, men som aftryk. Den vertikale struktur, sammensat af uregelmæssige, sammenvævede løkker, fremstår som en abstrakt silhuet, en slags kropslig resonans i rummet. Materialerne - rå, tekstile og taktile - er valgt for deres evne til at bære både fysisk og symbolsk tyngde.
<br><br>
Værket balancerer mellem det organiske og det konstruerede, og det spiller aktivt med negativt rum og skygger, som en forlængelse af selve formen. Det er en refleksion over, hvordan vi som mennesker efterlader spor - i hinanden, i landskabet, i tiden.
<br>
Værket kredser om forbindelser, hukommelse og det sanselige møde mellem krop og materiale. “Kroppens Ekko” er en invitation til at mærke det, der ikke nødvendigvis kan ses, men som alligevel er til stede.`,
        extra: `En skulptur, der balancerer mellem det fysiske og det poetiske. Den vertikale komposition af sammenvævede løkker danner en abstrakt form, der kan læses som en kropslig silhuet - eller som et netværk af indre forbindelser. Værket er både skrøbeligt og kraftfuldt, og det spiller med tekstur, rum og skygge for at skabe en sanselig oplevelse.
<br><br>
Materialerne - reb og tekstil - bærer spor af håndens arbejde og tidens gang. De inviterer til nærvær og refleksion over, hvordan vi som mennesker er viklet ind i hinanden og i verden omkring os.
<br><br>
Værket opstår i krydsfeltet mellem tekstil, skulptur og installation, og undersøger relationer, hukommelse og kroppens tilstedeværelse i rummet.`,
        list: null,
        image: {
          url: "/images/kroppens-ekko.jpg",
          alt: "Kroppens ekko - en tekstil skulptur",
          width: 400,
          height: 600,
        },
      },
    ],
  },
  {
    sectionTitle: 'Udstillinger',
    sectionSubTitle: null,
    id: 'udstillinger',
    content: [
      {
        header: "Censureret udstillinger",
        type: "full-left",
        text: null,
        list: [
          '2011 Forårsudstilling “Kunsten på første” i AKKC, Aalborg '
        ],
        image: null
      },
      {
        header: "Udstillinger",
        type: "full-left",
        text: null,
        list: [
          '2025 gruppeudstilling m. Lærke Bagger, Arken museum for samtidskunst',
          '2016 Det gamle rådhus, Aalborg',
          '2010 Galleri Lykkegaard, Tversted',
          'Galleri Århus',
          'Bunderup ødekirke',
          '2010 Knivholt hovedgaard, Frederikshavn',
          '2009 Kunst på Rådhuspladsen København',
          'Galleri Provence, Vadum',
        ],
        image: null
      },
      {
        header: "Showroom",
        type: "full-left",
        text: null,
        list: [
          '2013 - 2017 Tostrup',
          '2001 - 2003 Singapore'
        ],
        image: null
      },
      {
        header: null,
        type: "left-content",
        text: null,
        list: [
          '2010-2011 uddannet kulturarrangør'
        ],
        image: null
      }
    ]
  },
  {
    sectionTitle: 'Om Kit',
    sectionSubTitle: null,
    id: 'om-kit',
    content: [
      {
        header: null,
        type: "full",
        text: `
        Kit Bos er kulturarrangør, interior designer og tekstilkunstner med globalt udsyn og livserfaringerne som medskaber. Hun skaber rumlig tekstilkunst med global resonans i transformationen af tekstil og tradition over i en stoflig fortælling om livets transformationer.



Hun er autodidakt tekstilkunstner, der efter at have været bosat i Centraleuropa, Mellemøsten og Sydøstasien nu er bosat i Nordjylland.

Hun arbejder primært med bløde naturlige tekstiler og har udviklet et personligt kunstnerisk sprog, hvor livets cyklus - det der har været, nu er, og vil komme - er omdrejningspunktet.



Hendes værker opstår i mødet mellem traditionelle teknikker som vævning, hækling, strik og snoninger i en eksperimenterende tilgang til tekstil som form, struktur og fortælling. Hun undersøger materialets transformationer og lader overflader og former forvandle sig til organiske udtryk - ofte med sanselige lag af tekstur, farve og bevægelse.

<br><br>

Livets cyklus - forandring, udvikling, vækst, afvikling - er integreret i hendes tilgang, og værkerne peger både bagud mod tekstilhåndværkets arv og fremad mod en ny forståelse af liv og materiale som medskabende og fortællende.

<br><br>

Hun har deltaget i udstillinger i ind- og udland og arbejder aktuelt med projekter, der fokuserer på livets betydning i hendes kunstneriske praksis, med tekstil som medium for refleksion, sansning og bæredygtighed.

<br><br>

“Materialet bærer på en hukommelse. Garnet strækker sig over tid og steder - jeg følger det og ser, hvor det fører hen. Det åbner rum, man ikke træder ind i, men sanser. Som en skygge af noget dybere.”
        `,
        list: null,
        image: null
      }
    ]
  },
  {
    sectionTitle: 'Kontakt',
    sectionSubTitle: 'Kit Bos',
    id: 'kontakt',
    content: [
      {
        header: null,
        type: "left-content",
        text: `
        <b>Tlf:</b> <a href="tel:+4560789018">+45 60 78 90 18</a><br>
        <b>Mail:</b> <a href="mailto:info@kitbos.dk">info@kitbos.dk</a><br>
        <b>Addresse:</b> Østeraagade, 9000 Aalborg, Denmark
        `,
        list: null,
        image: null
      }
    ]
  }
]
</script>

<template>
  <main class="container">
    <header>
      <h1>Kit Bos</h1>
      <p>Tekstilkunstner</p>
    </header>

    <nav aria-label="Side sektioner">
      <ul>
        <li v-for="item in content" :key="item.id">
          <a :href="`#${item.id}`" @click="scrollToSection(item.id, $event)" :aria-describedby="`sektion-${item.id}`">{{ item.sectionTitle }}</a>
        </li>
      </ul>
    </nav>

    <section class="section">
      <div v-for="(section, sectionIndex) in content" :key="sectionIndex" class="content-grid">
        <header>
          <h2 :id="section.id" :aria-describedby="`sektion-${section.id}-beskrivelse`">{{ section.sectionTitle }}</h2>
          <p v-if="section.sectionSubTitle">{{ section.sectionSubTitle }}</p>
        </header>

        <article :class="['item', `item--${item.type}`]" v-for="(item, index) in section.content" :key="index">
          <div class="content">
            <h3 v-if="item.header">{{ item.header }}</h3>

            <p v-html="item.text" :id="section.content.length === 1 ? `sektion-${section.id}-beskrivelse` : undefined"></p>

            <!-- Read more button -->
            <button v-if="'extra' in item && item.extra" @click="openDialog(`${section.id}-${index}`)" class="read-more-btn" :aria-describedby="`dialog-${section.id}-${index}`">
              Læs mere
            </button>

            <ul v-if="item.list && item.list.length">
              <li v-for="(listItem, listIndex) in item.list" :key="listIndex">{{ listItem }}</li>
            </ul>
          </div>
          <div class="image-container">
            <NuxtImg v-if="item.image" :src="item.image.url" format="webp" :style="{ 'aspect-ratio': `${item.image.width} / ${item.image.height}` }" :loading="index > 0 ? 'lazy' : 'eager'" :alt="item.image.alt" :width="item.image.width" :height="item.image.height"
                     :placeholder="[(item.image.width / 100) * 10, (item.image.height / 100) * 10, 5]" quality="80" />
          </div>
        </article>
      </div>
    </section>

    <footer class="container">
      <p>&copy; {{ new Date().getFullYear() }} Kit Bos. All rights reserved.</p>
    </footer>

    <!-- Dialog Modal -->
    <div v-if="openDialogId" class="dialog-backdrop" @click="closeDialog" role="dialog" aria-modal="true" :aria-labelledby="`dialog-title-${openDialogId}`">
      <div class="dialog-content" @click.stop>
        <button class="dialog-close" @click="closeDialog" aria-label="Luk dialog">
          ×
        </button>

        <div class="dialog-body">
          <template v-for="(section, sectionIndex) in content" :key="sectionIndex">
            <template v-for="(item, index) in section.content" :key="index">
              <div v-if="openDialogId === `${section.id}-${index}` && 'extra' in item && item.extra">
                <h3 v-if="item.header" :id="`dialog-title-${openDialogId}`">{{ item.header }}</h3>
                <div v-html="(item as any).extra" class="dialog-text"></div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
// Global styles
html {
  scroll-behavior: smooth;
}

// Mixins
@mixin tablet {
  @media screen and (min-width: 600px) {
    @content;
  }
}

@mixin desktop {
  @media screen and (min-width: 1024px) {
    @content;
  }
}

// Typography
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1rem;
}

p {
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

// Main container
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  // Header styles
  header {
    margin: 3rem 0 4rem 0;
    text-align: center;

    @include tablet {
      margin: 4rem 0 5rem 0;
    }
  }

  // Main heading
  h1 {
    font-size: 2rem;
    margin-bottom: 0;
    font-weight: 600;
    color: var(--text-color);
    letter-spacing: 0.05em;

    @include tablet {
      font-size: 2.5rem;
    }

    @include desktop {
      font-size: 3rem;
    }
  }

  // Section headings
  section h2 {
    font-size: 1.75rem;
    font-weight: 600;

    @include tablet {
      font-size: 2.25rem;
    }

    @include desktop {
      font-size: 2.5rem;
    }
  }

  section header {
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 1rem;

    p {
      margin-top: -1.5rem;
    }
  }

  // Item headings
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    letter-spacing: 0.05em;

    @include tablet {
      font-size: 1.75rem;
    }

    @include desktop {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text-color);
    letter-spacing: 0.05em;

    @include tablet {
      font-size: 1.75rem;
    }

    @include desktop {
      font-size: 2rem;
    }
  }

  // Body text
  p {
    font-size: 1rem;

    @include tablet {
      font-size: 1.25rem;
    }

    @include desktop {
      font-size: 1.5rem;
    }
  }
}

// Navigation
nav {
  margin-bottom: 2rem;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    @include tablet {
      gap: 1.5rem;
    }
  }

  li {
    margin: 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    transition: all 0.2s ease;
    opacity: 0.7;
    display: inline-block;

    &:hover,
    &:focus {
      opacity: 1;
    }

    @include tablet {
      font-size: 1rem;
    }
  }
}

// Content grid
.content-grid {
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  max-width: 90%;
  margin-bottom: 3rem;

  @include tablet {
    margin-bottom: 4rem;
    margin-left: 10%;
    max-width: 80%;
  }

  @include desktop {
    margin-bottom: 5rem;
    margin-left: 15%;
    max-width: 70%;
  }
}

// Item base styles
.item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  position: relative;

  @include tablet {
    margin-bottom: 4rem;
  }

  @include desktop {
    margin-bottom: 5rem;
  }

  // Content styles
  .content {
    order: 2;
    padding: 1rem 0;

    p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-color);
      opacity: 0.7;
      font-weight: 300;
      margin: 0;
      max-width: 400px;

      @include tablet {
        font-size: 1rem;
        line-height: 1.7;
      }

      @include desktop {
        font-size: 1.1rem;
        line-height: 1.8;
      }
    }

    ul {
      margin: 1rem 0;
      list-style: disc;

      li {
        margin-left: 1.5rem;
      }
    }
  }

  // Image container base styles
  .image-container {
    order: 1;

    img {
      width: 100%;
      max-width: 500px;
      height: auto;
      border-radius: 3px;
      overflow: hidden;
      object-fit: cover;
    }
  }
}

// Layout variations
.item--left-content {
  @include tablet {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    margin-left: 0;
    max-width: 100%;
  }

  @include desktop {
    gap: 3rem;
  }
}

.item--right-content {
  @include tablet {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    margin-left: 0;
    max-width: 100%;
  }

  @include desktop {
    gap: 3rem;
  }
}

// Left and right content shared styles
.item--left-content,
.item--right-content {
  @include tablet {
    .content {
      order: 2;
      flex: 0 0 calc(50% - 1rem);
      padding: 0;

      p {
        max-width: none;
      }
    }

    .image-container {
      order: 1;
      flex: 0 0 calc(50% - 1rem);

      img {
        width: 100% !important;
        height: auto !important;
        max-width: none;
        display: block;
        object-fit: cover;
      }
    }
  }
}

// Full width layouts
.item--full,
.item--full-left {
  .content p {
    max-width: 100%;
  }
}

// Image sizing overrides
.item--full .image-container img {
  max-width: none !important;
  width: 100%;
  object-fit: cover;
}

// Footer
footer.container {
  margin: 4rem auto;
  text-align: center;
  color: var(--text-color);
  opacity: 0.7;

  p {
    font-size: 0.9rem;

    @include tablet {
      font-size: 1rem;
    }

    @include desktop {
      font-size: 1.1rem;
    }
  }

}

// Animations
.item {
  animation: fadeInUp 0.6s ease-out;

  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 0.1}s;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Read more button
.read-more-btn {
  background: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.7;
  margin-top: 1rem;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid #007acc;
  }

  @include tablet {
    font-size: 0.9rem;
  }
}

// Dialog styles
.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.dialog-content {
  background-color: var(--background-color, white);
  border-radius: 3px;
  max-width: 800px;
  max-height: 90dvh;
  width: 100%;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @include tablet {
    padding: 2rem;
  }
}

.dialog-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--text-color);
  opacity: 0.7;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.dialog-body {
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;

  @include tablet {
    padding: 1rem 0 0 0;
  }

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

    @include tablet {
      font-size: 2rem;
    }
  }
}

.dialog-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-color);
  opacity: 0.8;

  @include tablet {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  @include desktop {
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
}
</style>
