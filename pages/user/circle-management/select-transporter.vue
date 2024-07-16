<template>
  <section class="wrapper">
    <Navbar />
    <main class="mt-5">
      <div class="bg mb-3"></div>
      <!--  -->

      <div class="content mb-5">
        <!--  -->
        <div class="circle-admin flexed-column">
          <div class="flexed-row top-admin center">
            <img src="@/assets/images/general/hero.png" alt="Hero" />

            <div>
              <h3 class="weight-5 mb-1">Contact Person</h3>
              <h4 class="weight-5 mb-1">Mr Mark Idowu</h4>
              <p class="mb-2 weight-4">markidowu@gmail.com.</p>

              <button>Dial Contact</button>
            </div>
          </div>
        </div>

        <!-- create circle form -->
        <form>
          <h3 class="weight-5">Transporter Description</h3>
          <hr />

          <div class="container">
            <div class="form-group">
              <label class="weight-5">Transporter Name</label>
              <p class="weight-3">God Is Good Motors</p>
            </div>

            <div class="form-group">
              <label class="weight-5">Contact Number</label>
              <p class="weight-3">+2349281818181</p>
            </div>

            <div class="form-group">
              <label class="weight-5">Contact Email</label>
              <p class="weight-3">me@zukonu.com</p>
            </div>

            <div class="form-group">
              <label class="weight-5">From Location</label>
              <p class="weight-3">Lagos, Nigeria</p>
            </div>

            <div class="form-group">
              <label class="weight-5">To Destination</label>
              <p class="weight-3">Accra, Ghana</p>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Select Your Circle</label>
              <select name="accountType" required>
                <option value="">Papa Joe’s Circle</option>
                <option></option>
              </select>
            </div>
          </div>

          <button>Use Transport Service</button>
        </form>
      </div>
    </main>
  </section>
</template>

<script></script>

<style scoped>
.bg {
  border-radius: 8px;
  background: url("@/assets/images/User-Dashboard/circle-guideline.jpeg");
  background-size: cover;
  background-position: center;
  height: 20em;
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
</style>
