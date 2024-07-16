<template>
  <section class="wrapper">
    <Navbar />

    <main>
      <h2 class="mt-5 mb-3 weight-5">Accept/Reject Request</h2>

      <div class="circle-guideline">
        <!--  -->
        <div class="circle-admin flexed-column">
          <div class="flexed-row top-admin center">
            <img src="@/assets/images/general/hero.png" alt="Hero" />

            <div>
              <h3 class="weight-5 mb-1">Circle Admin</h3>
              <h4 class="weight-5 mb-1">Lorem Ipsum Circle Creator</h4>
              <p class="mb-2 weight-4">loremipsumcirclecreator@gmail...</p>
            </div>
          </div>
        </div>

        <div class="creation-guideline">
          <h3 class="weight-5 mb-1">Circle Creation Guideline</h3>
          <p class="weight-3 mb-3">
            Work with anyone, anywhere, in real time with web versions of
            productivity apps Work with anyone, anywhere, in real time with web
            versions of productivity apps.
          </p>

          <div class="flexed-row hero-stats center">
            <img
              src="@/assets/images/general/hero.png"
              alt="Hero"
              class="border-round"
            />

            <div>
              <p class="weight-4">Founder & CEO</p>
              <h4 class="weight-5 mb-1">Marv Magic</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script></script>

<style scoped>
.circle-guideline {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.circle-admin {
  height: fit-content !important;
  border-radius: 8px;
  gap: 24px;
}
.circle-admin > .top-admin {
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  padding: 32px;
  gap: 32px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
}
.circle-guideline > div:last-child {
  width: 40%;
  @media (max-width: 1000px) {
    width: auto;
  }
}
.hero-stats {
  gap: 12px;
}
.hero-stats img {
  height: 3em;
}
</style>
