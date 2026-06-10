const SUPABASE_URL = "https://dkvorrbhaimxkrxslppd.supabase.co";
const SUPABASE_KEY = "sb_publishable_L7TOZSIrwCNSv-OLoJ2o7A_mTtxA2ts";

alert("auth.js loaded");

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
    alert("Button clicked!");
});
//Đăng nhập bằng Github
loginBtn.addEventListener("click", async () => {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "https://click-kingdom.vercel.app"
    }
  });

  if (error) {
    alert(error.message);
  }
});
