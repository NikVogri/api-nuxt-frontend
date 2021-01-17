<template>
  <div class="container">
    <h1 class="heading-2">Daily updates</h1>

    <div class="daily-updates">
      <div class="daily-updates__about">
        <p>
          Get notified with daily updates by selecting the countries you want to
          be notified about. Emails are usually sent around 1 CET, every single
          day.
        </p>

        <p>
          To unsubscribe or update countries you want to be notified about
          please send me a
          <a href="mailto:vogrinec.nik@gmail.com">message</a>
        </p>
      </div>

      <div class="daily-updates__form">
        <form @submit.prevent="subscribe">
          <input
            type="email"
            required
            placeholder="Your email address"
            v-model="formData.email"
          />
          <select @change="addCountryToNotifications">
            <option
              v-for="country in countryList"
              :value="country.name"
              :key="country.name"
              >{{ country.name }}</option
            >
          </select>

          <ButtonWithSpinner
            class="btn"
            :loading="loading"
            :disabled="disabledButton"
            >Submit</ButtonWithSpinner
          >
          <div class="daily-updates__form-list">
            <span
              v-for="country in formData.countries"
              :key="country"
              :title="'Remove ' + country"
              @click="removeCountryFromNotifications(country)"
              >{{ country }}</span
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import countryList from "~/assets/countryList";

export default {
  data() {
    return {
      formData: {
        countries: [],
        email: ""
      },
      countryList,
      loading: false,
      message: ""
    };
  },
  computed: {
    disabledButton() {
      return this.formData.countries.length < 1 || !this.formData.email;
    }
  },
  methods: {
    addCountryToNotifications(e) {
      const countryToAdd = e.target.value;
      const countryAlreadyInList = this.formData.countries.some(
        country => country === countryToAdd
      );

      if (!countryAlreadyInList) {
        this.formData.countries.push(countryToAdd);
      }
    },
    removeCountryFromNotifications(countryToRemove) {
      this.formData.countries = this.formData.countries.filter(
        countryInList => countryInList !== countryToRemove
      );
    },
    async subscribe() {
      try {
        this.loading = true;

        const res = await this.$axios.$post(
          `https://virus-email-sender.herokuapp.com/add-email`,
          this.formData
        );

        if (res.success) {
          this.message = "Email successfully added";
          this.resetForm();
        }
      } catch (err) {
        this.message =
          "Could not add your email to our list, please try again later";
      } finally {
        this.loading = false;
      }
    },
    resetForm() {
      this.formData.countries = [];
      this.formData.email = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  @apply py-4;
}
.daily-updates {
  @apply flex items-center;

  @media (max-width: 768px) {
    @apply flex-col;
  }

  p {
    @apply mb-2;
  }

  &__about {
    @apply flex-1 text-left;
  }

  a {
    @apply text-blue-600 underline;
  }

  &__form {
    @apply flex justify-center p-8;
    flex-grow: 1;

    &-list {
      @apply text-white;
      font-weight: 500;

      & > * {
        @apply rounded inline-block mr-2 mt-3 px-2 py-1 cursor-pointer;
        background-color: var(--primary-blue);

        &:not(:last-child) {
          @apply mr-3;
        }
      }
    }

    select {
      @apply border border-gray-600 rounded px-4 py-2 w-full mb-2;
    }

    form {
      flex: 1;
      max-width: 460px;
      margin: 0 auto;
    }
    input {
      @apply px-3 py-2 border border-gray-600 rounded w-full mb-2;
    }

    button {
      @apply px-4 py-2 rounded text-white w-full;
      background-color: var(--primary-blue);

      &:disabled {
        @apply bg-gray-500;
        cursor: default;
      }
    }
  }
}
</style>
