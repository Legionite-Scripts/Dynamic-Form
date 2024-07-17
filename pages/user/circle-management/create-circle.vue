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
        <!-- create circle form -->
        <form>
          <!-- circle description -->
          <h4 class="weight-5">Circle Description</h4>
          <hr />

          <div class="container faded-background">
            <div class="center p-5">
              <div class="upload-wrapper mb-1">
                <div alt="Upload" class="upload"></div>
              </div>

              <p class="weight-3">Product Thumbail (1mb max)</p>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Circle Name</label>
              <input type="text" placeholder="Circle Name" />
            </div>
            <div class="form-group">
              <label>Contact Number</label>
              <input type="text" placeholder="Circle Name" />
            </div>
            <div class="form-group">
              <label>Contact Email</label>
              <input type="text" placeholder="Circle Name" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>From Location</label>
              <select name="accountType" required>
                <option value="">Merchant</option>
                <option></option>
              </select>
            </div>
            <div class="form-group">
              <label>To Destination</label>
              <input type="text" placeholder="Circle Name" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Circle Destination</label>
              <textarea type="text" placeholder="Circle Description"></textarea>
            </div>
          </div>

          <!-- product category -->
          <h4 class="weight-5">Product Category</h4>
          <hr />
          <div class="container">
            <div class="form-group">
              <label>Type of Products</label>
              <select name="accountType" required>
                <option value="">Perishable goods</option>
                <option></option>
              </select>
            </div>
          </div>

          <!-- shipping details -->
          <h4 class="weight-5">Shipping Details</h4>
          <hr />
          <div class="container">
            <div class="form-group">
              <label>Drop-off Location</label>
              <input type="text" placeholder="Ikeja City Mall, Lagos" />
            </div>

            <div class="form-group">
              <label>Pick-up Location</label>
              <input type="text" placeholder="Semapieno Quaters" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Drop-off Contact Name</label>
              <input type="text" placeholder="Semapieno Quaters" />
            </div>

            <div class="form-group">
              <label>Drop-off Contact Number</label>
              <input type="text" placeholder="+2349281818181" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <div class="form-group">
                <label>Drop-off Date</label>
                <input type="date" placeholder="Date" />
              </div>
            </div>

            <div class="form-group">
              <div class="form-group">
                <label>Drop-off Time</label>
                <input type="time" placeholder="Time" />
              </div>
            </div>
          </div>

          <button>
            <NuxtLink to="circle-description">Create Circle</NuxtLink>
          </button>
        </form>
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
      </div>
    </main>
  </NuxtLayout>
</template>

<script></script>

<style scoped>
.bg {
  border-radius: 8px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("@/assets/images/User-Dashboard/circle-management-bg.jpeg") lightgray
      50% / cover no-repeat;
  height: 15em;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
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
.content > div > div:nth-of-type(2) {
  gap: 8px;
}
.content > div > div:nth-of-type(2) > img {
  height: 3em;
}
.content p {
  color: #3e3e3e;
}
</style>
