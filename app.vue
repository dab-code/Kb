<script setup lang="ts">
// useSeoMeta({
//   title: () => doc.value?.title as any,
//   description: () => doc.value?.description as any,
// });

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

const content = [
  {
    sectionTitle: "Tråde af ",
    id: 'traede-af',
    content: [
      {
        header: null,
        type: "full",
        text: "This is the hero image with a beautiful description that tells a story about the image above.",
        list: null,
        image: {
          url: "/images/1.jpg",
          alt: "Hero image",
          width: 800,
          height: 400,
        },
      },
    ],
  },
  {
    sectionTitle: "Værker - Every piece tells a story",
    id: 'vaerker',
    content: [
      {
        header: "Om",
        type: "right-content",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.`,
        list: null,
        image: {
          url: "/images/1.jpg",
          alt: "Hero image",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Om",
        type: "right-content",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.`,
        list: null,
        image: {
          url: "/images/1.jpg",
          alt: "Hero image",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Om",
        type: "right-content",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.`,
        list: null,
        image: {
          url: "/images/1.jpg",
          alt: "Hero image",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Om",
        type: "right-content",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.`,
        list: null,
        image: {
          url: "/images/1.jpg",
          alt: "Hero image",
          width: 400,
          height: 600,
        },
      },
      {
        header: "Om",
        type: "right-content",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.`,
        list: null,
        image: {
          url: "/images/1.jpg",
          alt: "Hero image",
          width: 400,
          height: 600,
        },
      },
    ],
  },
  {
    sectionTitle: 'Udstillinger',
    id: 'udstillinger',
    content: [
      {
        header: "Om",
        type: "left-content",
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.',
        list: [
          'Udstilling 1 - Sted - År',
          'Udstilling 2 - Sted - År',
          'Udstilling 3 - Sted - År',
          'Udstilling 4 - Sted - År',
          'Udstilling 5 - Sted - År',
          'Udstilling 6 - Sted - År',
          'Udstilling 7 - Sted - År',
          'Udstilling 8 - Sted - År',
          'Udstilling 9 - Sted - År',
          'Udstilling 10 - Sted - År'
        ],
        image: null
      }
    ]
  },
  {
    sectionTitle: 'Om værkerne',
    id: 'om-vaerkerne',
    content: [
      {
        header: null,
        type: "left-content",
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.',
        list: null,
        image: null
      }
    ]
  }
  ,
  {
    sectionTitle: 'Om Kit',
    id: 'om-kit',
    content: [
      {
        header: null,
        type: "left-content",
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi dui. Phasellus iaculis cursus velit in ullamcorper. Nulla tempor a purus nec dapibus.',
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
        <h2 :id="section.id" :aria-describedby="`sektion-${section.id}-beskrivelse`">{{ section.sectionTitle }}</h2>

        <div :class="['item', `item--${item.type}`]" v-for="(item, index) in section.content" :key="index">
          <div class="content">
            <h3 v-if="item.header">{{ item.header }}</h3>
            <p v-html="item.text" :id="section.content.length === 1 ? `sektion-${section.id}-beskrivelse` : undefined"></p>
            <ul v-if="item.list && item.list.length">
              <li v-for="(listItem, listIndex) in item.list" :key="listIndex">{{ listItem }}</li>
            </ul>
          </div>
          <div class="image-container">
            <NuxtImg v-if="item.image" :src="item.image.url" format="webp" :style="{ 'aspect-ratio': `${item.image.width} / ${item.image.height}` }" :loading="index > 0 ? 'lazy' : 'eager'" :alt="item.image.alt" :width="item.image.width" :height="item.image.height" :placeholder="[(item.image.width / 100) * 10, (item.image.height / 100) * 10, 5]" quality="80" />
          </div>
        </div>
      </div>
    </section>

    <footer class="container">
      <p>&copy; {{ new Date().getFullYear() }} Kit Bos. All rights reserved.</p>
    </footer>
  </main>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

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

  section h1 {
    font-size: 1.75rem;
    margin-bottom: -2rem;
    font-weight: 500;

    @include tablet {
      font-size: 2.25rem;
    }

    @include desktop {
      font-size: 2.5rem;
    }
  }

  section h2 {
    font-size: 1.75rem;
    margin-bottom: -2rem;
    font-weight: 600;

    @include tablet {
      font-size: 2.25rem;
    }

    @include desktop {
      font-size: 2.5rem;
    }
  }

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
}

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
  gap: 3rem;
  margin-left: 5%;
  max-width: 90%;
  margin-bottom: 3rem;

  @include tablet {
    gap: 4rem;
    margin-bottom: 4rem;
    margin-left: 10%;
    max-width: 80%;
  }

  @include desktop {
    gap: 5rem;
    margin-bottom: 5rem;
    margin-left: 15%;
    max-width: 70%;
  }
}

.item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  // margin-bottom: 6rem;
  position: relative;

  &--left-content {
    @include tablet {
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: center;
      gap: 2rem;
      margin-left: 0%;
      max-width: 100%;
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
      margin-left: 0%;
      max-width: 100%;
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

    ul {
      margin: 1rem 0;
      list-style: disc;
      li {
        margin-left: 1.5rem;
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
      flex: 1 0 40%;
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
