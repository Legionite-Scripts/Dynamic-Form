<template>
    <NuxtLayout name="main">
      <main>
        <div class="bg mt-5 mb-4 center">
            <h2 class="weight-5">Zukonu Workspace</h2>
        </div>
  
        <div class="create-vehicle">

  
          <!-- form -->
          <form>
            <NuxtLink class="link right">See Members List</NuxtLink>
            <!-- Vehicle Description -->
            <h4 class="weight-5">Invite Members</h4>
            <hr />
  
            <div class="container">
              <div class="form-group">
                <label>Email</label>
                <input type="text" placeholder="me@marvelous.com" />
              </div>
            </div>
  
        
            <button>
              <NuxtLink to="circle-description">Invite Member   </NuxtLink>
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
   color: #2A6FC3;
  }
  </style>
  