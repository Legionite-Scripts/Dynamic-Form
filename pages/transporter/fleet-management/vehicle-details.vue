<template>
  <NuxtLayout name="main">
    <main>
      <div class="bg mt-5 mb-4 center">
        <h2 class="weight-5">Zukonu Fleet Owner</h2>
      </div>

      <div class="create-vehicle">
        <div class="btns mb-3">
          <button>Edit Vehicle</button>
          <button>Delete Vehicle</button>
        </div>

        <!-- form -->
        <form>
          <!-- Vehicle Description -->
          <h4 class="weight-5">Vehicle Description</h4>
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
              <label>Vehicle Name</label>
              <input type="text" placeholder="Papa Joe’s Circle" />
            </div>
            <div class="form-group">
              <label>Plate Number</label>
              <input type="text" placeholder="9281818181" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Engine No.</label>
              <input type="text" placeholder="9281818181" />
            </div>
            <div class="form-group">
              <label>Chasis Number</label>
              <input type="text" placeholder="Circle Name" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Car Description</label>
              <textarea type="text" placeholder="Car Description"></textarea>
            </div>
          </div>

          <!-- Driver Details -->
          <h4 class="weight-5">Driver Details</h4>
          <hr />

          <div class="container">
            <div class="form-group">
              <label>Driver Name</label>
              <input type="text" placeholder="Okon Abraham" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Driver Address</label>
              <input type="text" placeholder="Ikeja City Mall, Lagos" />
            </div>

            <div class="form-group">
              <label>Driver Contact No</label>
              <input type="text" placeholder="+2349281818181" />
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <div class="form-group">
                <label>Tracking Code</label>
                <input type="text" placeholder="John Agazie" />
              </div>
            </div>

            <div class="form-group">
              <div class="form-group">
                <label>Driver’s Next Of Kin No</label>
                <input type="text" placeholder="+2349281818181" />
              </div>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <div class="form-group">
                <label>Location</label>
                <input type="text" placeholder="Lagos, Nigeria" />
              </div>
            </div>

            <div class="form-group">
              <div class="form-group">
                <label>Destination</label>
                <input type="text" placeholder="+2349281818181" />
              </div>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Type of Products</label>
              <select name="accountType" required>
                <option value="">Perishable goods</option>
                <option></option>
              </select>
            </div>
          </div>

          <button>
            <NuxtLink to="circle-description">Create Vehicle </NuxtLink>
          </button>
        </form>
        <!--  -->
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
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url("@/assets/images/general/truck-img.png") lightgray 50% / cover no-repeat;
  height: 20em;
  border: 1px solid #333;
}
.bg h2 {
  color: #fff;
}

.create-vehicle {
  display: grid;
  place-items: center;
}
form,
.btns {
  width: 60%;
  @media (width<1000px) {
    width: 100%;
  }
}
.btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.btns button {
  padding: 8px 16px;
  border-radius: 2px;
}
.btns button:nth-of-type(1) {
  border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.btns button:nth-of-type(2) {
  background: #ff3d22;
  color: #fff;
}
</style>
