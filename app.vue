<script setup lang="ts">
// useSeoMeta({
//   title: () => doc.value?.title as any,
//   description: () => doc.value?.description as any,
// });
const content = [
  {
    header: null,
    type: "full",
    text: "This is the hero image with a beautiful description that tells a story about the image above.",
    image: {
      url: "/images/1.jpg",
      alt: "Hero image",
      width: 800,
      height: 400,
    },
  },
  {
    header: 'Om',
    type: "right-content",
    text: `Kit Bos er en tekstilkunstner med globalt udsyn og naturen som medskaber. Hun skaber rumlig tekstilkunst med global resonans i transformationen af tekstil og tradition over i en stoflig fortælling om naturens transformationer.
    <br>
    <br>
    Hun er autodidakt tekstilkunstner bosat i Nordjylland, efter længere ophold i Centraleuropa, Mellemøsten og Sydøstasien. Hun arbejder primært med bløde naturlige tekstiler og har udviklet et personligt kunstnerisk sprog, hvor naturens cyklus - det der er, har været og vil komme - er omdrejningspunktet.
    <br>
    <br>
    Hendes værker opstår i mødet mellem traditionelle teknikker som vævning, hækling, strik og snoninger i en eksperimenterende tilgang til tekstil som form, struktur og fortælling. Hun undersøger materialets transformationer og lader overflader og former forvandle sig til organiske udtryk – ofte med sanselige lag af tekstur, farve og bevægelse.
    <br>
    <br>
    `,
    image: {
      url: "/images/1.jpg",
      alt: "Hero image",
      width: 400,
      height: 600,
    },
  }
]
</script>

<template>
  <main class="container">
    <header>
      <h1>Kit Bos</h1>
    </header>

    <nav>
      <!-- <ul v-if="navigation">
        <li v-for="item in navigation" :key="item.path">
          <NuxtLink :to="item.path">{{ item.meta.navigationItem }}</NuxtLink>
        </li>
      </ul> -->
    </nav>

    <div :class="['item', `item--${item.type}`]" v-for="(item, index) in content" :key="index">
      <div class="content">
        <h2 v-if="item.header">{{ item.header }}</h2>
        <p v-html="item.text"></p>
      </div>
      <div class="image-container">
        <NuxtImg :src="item.image.url" format="webp" :loading="index > 0 ? 'lazy' : 'eager'" :alt="item.image.alt" :width="item.image.width" :height="item.image.height" :placeholder="[100, 80, 5]" quality="80" />
      </div>
    </div>

    <footer class="container">
      <p>&copy; {{ new Date().getFullYear() }} Kit Bos. All rights reserved.</p>
    </footer>
  </main>
</template>

<style lang="scss">
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  header {
    margin: 3rem 0 4rem 0;
    text-align: center;

    @include tablet {
      margin: 4rem 0 5rem 0;
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: 300;
    color: var(--text-color);
    letter-spacing: 0.05em;

    @include tablet {
      font-size: 2.5rem;
    }

    @include desktop {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--text-color);
    letter-spacing: 0.05em;

    @include tablet {
      font-size: 2rem;
    }

    @include desktop {
      font-size: 2.5rem;
    }
  }
}

footer.container {
  margin: 4rem auto;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.7;

  @include tablet {
    font-size: 1rem;
  }

  @include desktop {
    font-size: 1.1rem;
  }
}

.content-grid {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @include tablet {
    gap: 6rem;
  }

  @include desktop {
    gap: 8rem;
  }
}

.content-grid .item--full {
  @include tablet {
    margin-left: 10%;
    max-width: 80%;
  }

  @include desktop {
    margin-left: 15%;
    max-width: 70%;
  }
}

.item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 6rem;
  position: relative;

  &--left-content {
    @include tablet {
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: center;
      gap: 2rem;
      margin-left: 10%;
      max-width: 80%;
    }

    @include desktop {
      gap: 3rem;
    }
  }

  &--right-content {
    @include tablet {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
      margin-left: 10%;
      max-width: 80%;
    }

    @include desktop {
      gap: 3rem;
    }
  }

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
  }

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

.item--left-content,
.item--right-content {
  @include tablet {
    .content {
      order: 2;
      flex: 0 0 40%;
      padding: 0;

      p {
        max-width: none;
      }
    }

    .image-container {
      order: 1;
      flex: 0 0 auto;

      img {
        width: auto !important;
        height: auto !important;
        max-width: 500px;
        display: block;
      }
    }
  }
}

// Specific image sizing for different layouts
.item--full .image-container img {
  max-width: none !important;
  width: 100%;
  object-fit: cover;
}

.item--left-content .image-container img,
.item--right-content .image-container img {
  @include tablet {
    object-fit: cover;
  }
}

// Staggered animation for items
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

// Typography improvements
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 300;
  margin-bottom: 1rem;
}

p {
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
</style>
