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
        <div class="circle-admin flexed-column">
          <div class="flexed-row top-admin">
            <img src="@/assets/images/general/hero.png" alt="Hero" />

            <div>
              <h2 class="weight-5 mb-1">Circle Admin</h2>
              <h3 class="weight-5 mb-1">Lorem Ipsum Circle Creator</h3>
              <p class="mb-2 weight-4">loremipsumcirclecreator@gmail...</p>

              <button>Message</button>
            </div>
          </div>
          <div class="bottom-admin flexed-row">
            <div>
              <h3 class="weight-5 mb-1">Date Created</h3>
              <p>12/12/2023</p>
            </div>
            <div>
              <h3 class="weight-5 mb-1">Circle Status</h3>
              <p>Active</p>
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
              <p>
                Lorem ipsum dolor sit amet consectetur. Nisl velit vitae
                senectus sagittis. Vitae nec sit sed phasellus. Orci risus
                congue et cursus platea velit iaculis sed orci. Vitae tincidunt
                diam aenean urna posuere egestas mauris neque metus.
              </p>
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
.circle-admin > div {
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  padding: 32px;
}
.circle-admin > .top-admin {
  gap: 32px;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
}
.circle-admin button {
  padding: 8px 16px;
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background: none;
}
.circle-admin > .bottom-admin {
  gap: 90px !important;
}
.circle-admin > .bottom-admin p {
  color: rgba(0, 0, 0, 0.5);
}
</style>
