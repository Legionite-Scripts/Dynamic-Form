<template>
  <NuxtLayout name="main">
    <main>
      <div class="bg mt-5 mb-4"></div>

      <div class="header flexed-row mb-1">
        <h2 class="weight-4 mb-1">Edit Product</h2>

        <button>Delete Package</button>
      </div>

      <p class="weight-4 mb-3">
        Lorem ipsum dolor sit amet consectetur. Enim faucibus nunc erat ac. Ut
        duis.
      </p>

      <div class="content">
        <form>
          <h3 class="weight-5">Product Category</h3>
          <hr />
          <div class="container">
            <div class="form-group">
              <label>Type of Product</label>
              <select name="accountType" required>
                <option value="">Perishable goods</option>
                <option></option>
              </select>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Items In The Package</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Items In The Package"
              ></textarea>
            </div>
          </div>

          <div class="container">
            <div class="form-group">
              <label>Temperature</label>
              <select name="accountType" required>
                <option value="">Perishable goods</option>
                <option></option>
              </select>
            </div>

            <div class="form-group">
              <label>Destination Requirement</label>
              <input type="text" placeholder="Accra, Ghana" />
            </div>
          </div>

          <button>Save Package</button>
        </form>

        <!--  -->
        <form class="center">
          <div class="center">
            <button class="border-round mb-1">
              <img src="@/assets/icons/User-Dashboard/upload.svg" alt="" />
            </button>

            <p class="weight-3">Package Thumbnail (1mb max)</p>
          </div>
        </form>
      </div>
    </main>
  </NuxtLayout>
</template>

<script></script>

<style scoped>
.bg {
  background: url("@/assets/images/User-Dashboard/circle-guideline.jpeg");
  height: 20em;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}
.header {
  justify-content: space-between;
  height: fit-content !important;
  flex-wrap: wrap;
  gap: 10px;
}
.header button {
  padding: 8px 16px;
  border-radius: 2px;
  background: #ff3d22;
  color: #fff;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.content > form {
  height: inherit !important;
}
.content > form:last-child button {
  height: 2em;
  width: 2em;
  background: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
}
.content > form:last-child p {
  color: rgba(0, 0, 0, 0.5);
}
</style>
