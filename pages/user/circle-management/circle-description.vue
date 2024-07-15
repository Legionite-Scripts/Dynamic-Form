<template>
  <section class="wrapper">
    <Navbar />
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
        <div>
          <div class="mb-2"></div>
          <h3 class="weight-5 mb-2">Content Creation Guideline</h3>
          <p class="mb-1 weight-3">
            Work with anyone, anywhere, in real time with web versions of
            productivity apps Work with anyone, anywhere, in real time with web
            versions of productivity apps. Work with anyone, anywhere, in real
            time with web versions of productivity apps
          </p>
          <p class="weight-3 mb-1">
            Work with anyone, anywhere, in real time with web versions of
            productivity apps Work with anyone, anywhere, in real time with web
            versions of productivity apps.
          </p>
          <p class="weight-3 mb-2">
            Work with anyone, anywhere, in real time with web versions of
            productivity apps Work with anyone, anywhere, in real time with web
            versions of productivity apps.
          </p>

          <div class="flexed-row">
            <img
              src="@/assets/images/general/hero.png"
              alt="Hero"
              class="border-round"
            />

            <div>
              <p class="weight-4">Founder & CEO</p>
              <h3 class="weight-5">Marv Magic</h3>
            </div>
          </div>
        </div>

        <!-- create circle form -->
        <form>
          <!-- circle description -->
          <h4 class="weight-5">Circle Description</h4>
          <hr />

          <div class="container">
            <div class="form-group">
              <label>Circle Name</label>
              <p>Papa Joe’s Circle</p>
            </div>
            <div class="form-group">
              <label>Contact Number</label>
              <p>+2349281818181</p>
            </div>
            <div class="form-group">
              <label>Contact Email</label>
              <p>me@zukonu.xyz</p>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>From Location</label>
              <p>Lagos, Nigeria</p>
            </div>
            <div class="form-group">
              <label>To Destination</label>
              <p>Accra, Ghana</p>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Circle Destination</label>
              <p>Lorem ipsum dolor sit amet consectetur. Nisl velit vitae senectus sagittis. Vitae nec sit sed phasellus. Orci risus congue et cursus platea velit iaculis sed orci. Vitae tincidunt diam aenean urna posuere egestas mauris neque metus.</p>
            </div>
          </div>

          <!-- product category -->
          <h4 class="weight-5">Product Category</h4>
          <hr />
          <div class="container">
            <div class="form-group">
              <label>Type of Products</label>
              <p>Perishable goods</p>
            </div>
          </div>

          <!-- shipping details -->
          <h4 class="weight-5">Shipping Details</h4>
          <hr />
          <div class="container">
            <div class="form-group">
              <label>Drop-off Location</label>
              <p>Ikeja City Mall, Lagos</p>
            </div>

            <div class="form-group">
              <label>Pick-up Location</label>
              <p>Semapieno Quaters</p>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Drop-off Contact Name</label>
              <p>John Agazie</p>
            </div>

            <div class="form-group">
              <label>Drop-off Contact Number</label>
              <p>+2349281818181</p>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <div class="form-group">
                <label>Drop-off Date</label>
                <p>12/05/2024</p>
              </div>
            </div>

            <div class="form-group">
              <div class="form-group">
                <label>Drop-off Time</label>
                <p>12:00 WAT</p>
              </div>
            </div>
          </div>
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
  height: 15em;
}

.content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 56px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.content > div {
  height: fit-content !important;
  padding: 24px;
  border-radius: 8px;
  background: #fafafa;
  gap: 17px;
}
.content > div > div:nth-of-type(1) {
  border-radius: 2px;
  background: url("@/assets/images/User-Dashboard/circle-guideline.jpeg")
    lightgray 50% / cover no-repeat;
  background-size: cover !important;
  height: 20em;
}
.content > div > div:nth-of-type(2){
gap: 8px;
}
.content > div > div:nth-of-type(2) > img{
    height: 3em;
}
.content p{
    color: #3E3E3E;
}
</style>
