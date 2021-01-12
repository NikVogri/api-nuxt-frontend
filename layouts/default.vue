<template>
  <div>
    <Navigation />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --primary-blue: #2f80ed;
  --dark: #000;
  --white: #fff;
}

html {
  font-family: "Roboto", sans-serif;
}
.container {
  margin: 0 auto;
  max-width: 1024px;
  @media (max-width: 1024px) {
    width: 80%;
  }
}

.btn {
  @apply py-3 block text-center rounded shadow-lg;

  width: 210px;
  font-weight: bold;

  &-primary {
    background-color: var(--primary-blue);
    @apply text-white;
    transition: all 0.2s ease;

    &:hover {
      @apply bg-blue-500;
    }
  }

  &-dark {
    background-color: var(--dark);
    @apply text-white;
  }
}
</style>
