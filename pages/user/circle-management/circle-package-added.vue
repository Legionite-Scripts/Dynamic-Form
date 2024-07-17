<template>
  <NuxtLayout name="main">
    <main class="mt-5">
      <div class="bg mb-3"></div>
      <!--  -->
      <h2 class="weight-4 mb-1">Create Circle</h2>
      <p class="weight-4 mb-4">
        Lorem ipsum dolor sit amet consectetur. Enim faucibus nunc erat ac. Ut
        duis.
      </p>

      <div class="content mb-5">
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

        <!-- create circle form -->
        <form>
          <!-- circle description -->
          <div class="form-bg flexed-column">
            <p>Papa Joe's Circle</p>
            <h1 class="weight-5">Circle</h1>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Circle Name</label>
              <select name="accountType" required>
                <option value="">Zukonu Package to Accra</option>
                <option></option>
              </select>
            </div>
          </div>

          <button>Add Package</button>
        </form>
      </div>
    </main>
  </NuxtLayout>
</template>

<script></script>

<style scoped>
.bg {
  border-radius: 8px;
  background: url("@/assets/images/User-Dashboard/circle-guideline.jpeg");
  background-size: cover;
  background-position: center;

  height: 15em;
}

.content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.content > .circle-admin {
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
form {
  background: none;
  padding-top: 0px;
}
.form-bg {
  height: 20em;
  border-radius: 4px;
  background: linear-gradient(
      0deg,
      rgba(209, 209, 209, 0.2) 0%,
      rgba(209, 209, 209, 0.2) 100%
    ),
    #e3e3e3;
  justify-content: space-between;
  padding: 10px 23.444px;
}
.form-bg p {
  color: #fff;
}
.form-bg h1 {
  color: #c9c8c8;
}
</style>
