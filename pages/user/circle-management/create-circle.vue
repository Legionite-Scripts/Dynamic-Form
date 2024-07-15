<template>
  <section class="wrapper">
    <Navbar />
    <main class="mt-5">
      <div class="bg mb-3"></div>
      <!--  -->
      <h2 class="weight-4">Create Circle</h2>
      <p class="weight-4 mb-4">
        Lorem ipsum dolor sit amet consectetur. Enim faucibus nunc erat ac. Ut
        duis.
      </p>

      <div class="content mb-5 flexed-row">
        <form>
          <h4 class="weight-5 mb-1">Circle Description</h4>
          <hr class="mb-2" />

          <div class="container">
            <div class="center p-5">
            <div class="center border-round p-1 mb-1">
                <img
                src="@/assets/icons/User-Dashboard/upload.svg"
                alt="Upload"
                class="mb-1"
              />
            </div>
              <p class="weight-3">Product Thumbail (1mb max)</p>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </main>
  </section>
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
  border: 1px solid #333;
  /* height: 60em !important; */
  gap: 56px;
}
.content > form,
.content > div {
  border: 1px solid #333;
  width: 50%;
  height: auto !important;
  height: fit-content !important;
}
.content form {
  padding: 32px;
}
form .container:nth-of-type(1) > div {
    border-radius: 4px;
    background: #F2F2F2;
}
form .container:nth-of-type(1) > div > div{
    border: 1px solid #333;
    
}

</style>
