<template>
  <NuxtLayout name="main">
    <main class="mt-5">
      <h2 class="weight-4 mb-5">Transporter Conversation</h2>

      <div class="content-layout">
        <div class="content mb-5">
          <!--  -->
          <div class="circle-admin flexed-column">
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
                    <img src="@/assets/icons/location.svg" alt="" /> Location
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

                <button class="add-transporter">
                  <NuxtLink to="open-transporter-conversation"
                    >Use Transport Service</NuxtLink
                  >
                </button>
              </div>
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
        </div>

        <div class="content mb-5">
          <!-- create circle form -->

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
                <h3 class="weight-5">Merchant User 2</h3>
                <p class="weight-3">
                  Can we make the delivery much faster? My clients are really
                  waiting for the products
                </p>
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
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<script></script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 4fr auto;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
.header > div {
  display: flex;
  flex-direction: row;
  height: fit-content !important;
  gap: 8px;
  flex-wrap: wrap;
}
.header button {
  padding: 8px 16px;
  height: auto !important;
  border-radius: 2px;
  background: #121212;
  color: #fff;
}
.header button:last-child {
  background: #ff3d22;
}
.bg {
  border-radius: 8px;
  background: url("@/assets/images/User-Dashboard/circle-guideline.jpeg");
  background-size: cover;
  background-position: center;

  height: 15em;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.content {
  display: grid;
  gap: 24px;
  height: fit-content !important;
}

.content > .circle-admin {
  height: fit-content !important;
  border-radius: 8px;
  gap: 24px;
}

.circle-admin img.hero {
  height: 150px;
  width: 150px;
  background-color: azure;
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
.circle-admin .transporter-detail,
.circle-admin .transporter-location {
  gap: 32px;
  justify-content: space-between;
}
.transporter-detail > p:first-child,
.transporter-location > p:first-child {
  color: rgba(0, 0, 0, 0.5);
}
.transporter-location > p:last-child {
  color: #2a6fc3;
}

.circle-admin button {
  padding: 8px 16px;
  border-radius: 2px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  background: none;
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
</style>
