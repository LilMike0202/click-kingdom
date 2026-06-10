const SUPABASE_URL = “https://dkvorrbhaimxkrxslppd.supabase.co”;
const SUPABASE_KEY = “sb_publishable_L7TOZSIrwCNSv-OLoJ2o7A_mTtxA2ts”;
const { createClient } = supabase;
const supabaseClient = createClient(
SUPABASE_URL,
SUPABASE_KEY
);

const loginBtn = document.getElementById(“login-btn”);
const logoutBtn = document.getElementById(“logout-btn”);
const userInfo = document.getElementById(“user-info”);

// Đăng nhập bằng GitHub
loginBtn.addEventListener(“click”, async () => {
await supabaseClient.auth.signInWithOAuth({
provider: “github”,
options: {
redirectTo: window.location.origin
}
});
});

// Đăng xuất
logoutBtn.addEventListener(“click”, async () => {
await supabaseClient.auth.signOut();
location.reload();
});

// Kiểm tra trạng thái đăng nhập
async function checkUser() {
const {
data: { user }
} = await supabaseClient.auth.getUser();

if (user) {
userInfo.innerHTML =
“👋 Hello, “ +
(user.user_metadata.user_name || user.email);
  loginBtn.style.display = "none";
logoutBtn.style.display = "inline-block";
} else {
userInfo.innerHTML = “You are not logged in.”;
loginBtn.style.display = "inline-block";
logoutBtn.style.display = "none"; 
  }
}

checkUser();
