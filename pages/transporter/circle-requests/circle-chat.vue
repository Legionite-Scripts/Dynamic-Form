<template>
  <NuxtLayout name="main">
    <main class="mt-5">
      <h2 class="weight-4 mb-3">Join The Conversation</h2>

      <div class="content-wrapper">
        <div class="content mb-5">
          <!--  -->
          <div class="flexed-row top-admin center">
            <img class="hero no-image" alt="Hero" />

            <div>
              <h3 class="weight-5 mb-2">Transporter Service 1</h3>

              <div class="transporter-detail flexed-row mb-1">
                <p class="weight-4">Address:</p>
                <p class="weight-4">Lagos, Nigeria</p>
              </div>

              <div class="transporter-detail flexed-row mb-1">
                <p class="weight-4">Contact Email:</p>
                <p class="weight-4">goodisgood@gmail.com</p>
              </div>

              <div class="transporter-detail flexed-row mb-2">
                <p class="weight-4">Phone Number:</p>
                <p class="weight-4">+234818717189</p>
              </div>

              <div class="transporter-location flexed-row mb-1">
                <p class="weight-4 flexed-row">
                  <img src="@/assets/icons/location.svg" alt="" /> Location:
                </p>
                <p class="location weight-4">Lagos, Nigeria</p>
              </div>

              <div class="transporter-location flexed-row mb-2">
                <p class="weight-4 flexed-row">
                  <img
                    src="@/assets/icons/User-Dashboard/destination.svg"
                    alt=""
                  />
                  Destination:
                </p>
                <p class="weight-4 location">Accra, Ghana</p>
              </div>

              <button>
                <NuxtLink to="open-transporter-conversation"
                  >Use Transport Service</NuxtLink
                >
              </button>
            </div>
          </div>

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

          <div class="packages">
            <chatPackage />
            <chatPackage />
            <chatPackage />
            <chatPackage />
          </div>
        </div>

        <div class="content mb-5">
          <!-- chat component -->
          <div class="chat-container">
            <h4 class="weight-5">Chat</h4>
            <hr />

            <div class="chat-row">
              <img
                src="@/assets/images/general/hero.png"
                alt="Hero"
                class="border-round"
              />

              <div>
                <h3 class="weight-5">Merchant User 3</h3>
                <p class="weight-3">I love this space.</p>
              </div>
            </div>

            <div class="chat-row">
              <img
                src="@/assets/images/general/hero.png"
                alt="Hero"
                class="border-round"
              />

              <div>
                <h3 class="weight-5">Merchant User 1</h3>
                <p class="weight-3">Hello World, welcome to this circle.</p>
              </div>
            </div>

            <div class="chat-row">
              <img
                src="@/assets/images/general/hero.png"
                alt="Hero"
                class="border-round"
              />

              <div>
                <h3 class="weight-5">Merchant User 1</h3>
                <p class="weight-3">Hello World, welcome to this circle.</p>
              </div>
            </div>

            <div class="chat-row">
              <img
                src="@/assets/images/general/hero.png"
                alt="Hero"
                class="border-round"
              />

              <div>
                <h3 class="weight-5">Merchant User 1</h3>
                <p class="weight-3">Hello World, welcome to this circle.</p>
              </div>
            </div>

            <div class="chat-row">
              <img
                src="@/assets/images/general/hero.png"
                alt="Hero"
                class="border-round"
              />

              <div>
                <h3 class="weight-5">Merchant User 1</h3>
                <p class="weight-3">Hello World, welcome to this circle.</p>
              </div>
            </div>

            <form class="send-chat">
              <div class="container">
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows=""
                    placeholder="I really think we should proceed already"
                  ></textarea>
                </div>

                <div class="form-group center">
                  <button class="border-round">
                    <img
                      src="@/assets/icons/User-Dashboard/send-chat.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </form>
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
                  congue et cursus platea velit iaculis sed orci. Vitae
                  tincidunt diam aenean urna posuere egestas mauris neque metus.
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
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
import chatPackage from "@/components/transporter/chat-packages.vue";
</script>

<style scoped>
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
overflow-x: hidden !important;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  height: fit-content !important;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.circle-admin {
  display: grid;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  }
}
.top-admin {
  border-radius: 8px;
  border: 1.582px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  padding: 32px;
  gap: 32px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  }
}
.top-admin div {
  width: 100%;
}
.top-admin div div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1400px) {
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  }
}
.top-admin div div p:first-child {
  color: rgba(0, 0, 0, 0.5);
}
.transporter-location p:last-child {
  color: #2a6fc3;
}
/*  */

.chat-row {
  display: grid;
  grid-template-columns: 1fr 90%;
  gap: 14px;
}
.chat-row > img {
  height: 4em;
}
.chat-row p {
  width: 90% !important;
}
form.send-chat {
  padding: 0px;
}
form.send-chat .container {
  display: grid;
  grid-template-columns: 90% 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 80% 1fr;
  }
}

form.send-chat button {
  background: #2a6fc3;
  width: 54px;
  height: 54px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.packages {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (width<1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.top-admin img.hero {
  height: 150px;
  width: 150px;
  background-color: azure;
}

.top-admin button {
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  background: none;
}
</style>
