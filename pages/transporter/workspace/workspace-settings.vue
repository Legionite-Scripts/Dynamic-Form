<template>
    <NuxtLayout name="main">
      <main>
        <div class="bg mt-5 mb-4 center">
            <h2 class="weight-5">Zukonu Workspace</h2>
        </div>
  
        <div class="create-vehicle">

  
          <!-- form -->
          <form>
            <NuxtLink class="link right">Set Workspace Guideline</NuxtLink>
            <!-- Vehicle Description -->
            <h4 class="weight-5">Workspace Settings</h4>
            <hr />
  
            <div class="container">
              <div class="form-group">
                <label>Workspace Name</label>
                <input type="text" placeholder="Papa Joe’s Circle" />
              </div>
              <div class="form-group">
                <label>Workspace ID (Read Only)</label>
                <input type="text" placeholder="9281818181" />
              </div>
            </div>
  
        
            <button>
              <NuxtLink to="circle-description">Save</NuxtLink>
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
  form {
    width: 60%;
    @media(width<1000px){
      width: 100%;
    }
  }
  form .link{
    text-decoration: underline !important;
  }
  </style>
  