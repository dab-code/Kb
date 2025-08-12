<script setup lang="ts">
import { computed } from "vue";

const route = useRoute();

const { data: navigation } = await useAsyncData('navigation', async () => {
  const docs = await queryCollection('docs')
  .select('path', 'title', 'meta')
  .all();

  return docs
    .filter(doc => doc.path !== '/')
    .sort((a, b) => Number(a.meta.order ?? 999) - Number(b.meta.order ?? 999));
});

const contentPath = computed(() => {
  const slug = route.params.slug;
  if (!slug) return '/';
  return Array.isArray(slug) ? `/${slug.join('/')}` : `/${slug}`;
});

const { data: doc } = await useAsyncData(
  () => `doc:${contentPath.value}`,
  () => queryCollection('docs').path(contentPath.value).first(),
  { watch: [contentPath] }
);

useSeoMeta({
  title: () => doc.value?.title as any,
  description: () => doc.value?.description as any,
});
</script>

<template>
  <main class="container">
    <header>
        <NuxtLink to="/">
            <h1>Kit Bos</h1>
        </NuxtLink>
    </header>

    <nav>
      <ul v-if="navigation">
        <li v-for="item in navigation" :key="item.path">
          <NuxtLink :to="item.path">{{ item.meta.navigationItem }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <ContentRenderer v-if="doc" tag="section" class="content-grid" :value="doc" />

    <div v-else>Siden blev ikke fundet</div>

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

.content-grid .item:first-child {
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
  position: relative;

  &:nth-child(2n) {
    @include tablet {
      flex-direction: row-reverse;
      align-items: flex-end;
      justify-content: center;
      gap: 2rem;
      margin-left: 20%;
      max-width: 75%;
    }

    @include desktop {
      gap: 3rem;
      margin-left: 25%;
      max-width: 70%;
    }
  }

  &:nth-child(3n) {
    @include tablet {
      flex-direction: row;
      align-items: flex-start;
      gap: 2rem;
      margin-right: 15%;
      max-width: 80%;
    }

    @include desktop {
      gap: 3rem;
      margin-right: 20%;
      max-width: 75%;
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
      height: auto;
      border-radius: 3px;
      overflow: hidden;
    }
  }
}

.item:nth-child(2n),
.item:nth-child(3n) {
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
      flex: 0 0 60%;
    }
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
