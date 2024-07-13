<template>
    <main>
        <Navbar />
        <section class="container">
            <div class="flexed-row center mb-4">
                <h2 class="weight-5">My Profile</h2>

                <div class="flexed-row center">
                    <img
                        src="@/assets/icons/User-Dashboard/key-icon.png"
                        alt="Key"
                    />

                    <div>
                        <h4 class="weight-6">Change Password</h4>
                        <p>Security</p>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="profile-main center flexed-row mb-5">
                <img src="@/assets/images/general/hero.png" alt="Hero" />
                <div class="flexed-column">
                    <h3 class="weight-5">Lorem Ipsum Founder</h3>
                    <span class="weight-1">loremupsum@hotmail.com</span>
                    <p>
                        Personalize your account with a photo. Your profile
                        photo<br />
                        will appear on apps and devices that use your<br />
                        Microsoft account.
                    </p>

                    <div class="flexed-row">
                        <button>Update Profile</button>
                        <button>Delete Account</button>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="product-catalogue">
                <h2 class="weight-5 mb-4">Product Catalogue</h2>
                <div>
                    <product-catalogue-component v-for="n in 10" :key="n" />
                </div>
            </div>
        </section>
    </main>
</template>

<script></script>

<style scoped>
* {
    overflow-x: hidden;
}
main {
    width: 100%;
    /* height: 100vh; */
    overflow-y: auto;
    margin: 0 auto;
    background-color: #f2f2f2;
}
.container {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    @media (width< 1000px) {
        width: 95%;
    }
}
.container > div:first-child {
    justify-content: space-between;
    flex-wrap: wrap;
    @media (width<1000px) {
        gap: 10px;
    }
}
.container > div > div {
    gap: 20px;
}
.container > .profile-main {
    padding: 32px;
    gap: 32px;
    border-radius: 8px;
    border: 1.582px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    box-shadow: 0px 6.327px 12.655px 0px rgba(0, 0, 0, 0.04);
    @media (width<768px) {
        flex-direction: column;
        gap: 40px;
    }
}
.profile-main > img {
    border-radius: 4px;
}
.profile-main span,
.profile-main p {
    color: #3e3f3f;
}
.profile-main > div > div {
    gap: 10px;
}
.profile-main > div > div > button {
    border-radius: 2px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    padding: 8px 16px;
    background: none;
}
.profile-main > div > div > button:nth-of-type(2) {
    background-color: #ff3d22;
    color: #fefffe;
}
.product-catalogue > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
