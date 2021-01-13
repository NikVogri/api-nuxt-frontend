<template>
  <div class="data-graph">
    <transition appear name="blob">
      <div class="data-graph__blob-grid">
        <span
          data-aos="zoom-in"
          v-for="n in totalInfected"
          :key="n"
          :class="{
            deaths: n <= deathBlobs,
            'currently-infected': n > deathBlobs && n <= currentlyActiveBlobs,
            'total-infected': n > currentlyActiveBlobs
          }"
        ></span>
      </div>
    </transition>
    <div class="data-graph__legend">
      <ul>
        <li><span></span> = {{ calculateBlobValue | formatNumber }} cases</li>
        <li><span class="total-infected"></span> Total Infected</li>
        <li><span class="currently-infected"></span> Active Cases</li>
        <li><span class="deaths"></span> Deaths</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    total: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      required: true
    },
    deaths: {
      type: Number,
      required: true
    },
    blobValue: {
      type: Number,
      required: false
    }
  },
  computed: {
    deathBlobs() {
      return Math.ceil(this.deaths / this.calculateBlobValue);
    },
    currentlyActiveBlobs() {
      return Math.ceil(this.active / this.calculateBlobValue);
    },
    totalInfected() {
      return Math.ceil(this.total / this.calculateBlobValue);
    },
    calculateBlobValue() {
      if (this.blobValue * 10 < this.total) {
        return this.blobValue;
      } else {
        return this.blobValue / 10;
      }
    }
  }
});
</script>

<style scoped lang="scss">
.data-graph {
  width: 540px;
  margin: 0 auto;

  @media (max-width: 720px) {
    width: 100%;
  }

  &__legend {
    ul {
      @apply flex items-center flex-wrap;

      @media (max-width: 720px) {
        @apply flex items-start flex-wrap;
      }

      & > * {
        @apply text-gray-700 font-medium flex justify-center;

        @media (max-width: 720px) {
          margin-top: 10px;
        }
        span {
          @apply mr-2;
        }

        &:not(:last-child) {
          @apply mr-4;
        }
      }
    }
  }

  &__blob-grid {
    @apply mx-auto mb-4 grid;
    grid-template-columns: repeat(20, 1fr);
    gap: 10px;

    @media (max-width: 720px) {
      grid-template-columns: repeat(10, 1fr);
    }

    justify-content: center;
  }
}

span {
  height: 25px;
  width: 25px;
  display: block;
  background: gray;
  border-radius: 50%;
  @apply shadow-md;
}

.total-infected {
  background-color: var(--primary-blue);
}
.currently-infected {
  background-color: #eb5757;
}
.deaths {
  background-color: #000;
}

@keyframes dropIn {
  from {
    transform: translateX(-5px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.blob-enter-active {
  animation: dropIn 0.3s ease-in;
}
</style>
