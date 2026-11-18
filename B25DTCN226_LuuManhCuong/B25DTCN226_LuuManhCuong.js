// ============================================================
// 1. HIỂN THỊ THÔNG BÁO CHÀO MỪNG KÈM NGÀY HỆ THỐNG
// ============================================================
window.addEventListener("load", function () {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const dateStr = `${day}/${month}/${year}`;

  alert(
    `Hôm nay là ngày ${dateStr}, Chào mừng bạn đến với trang của Lưu Mạnh Cường!`,
  );
});

// ============================================================
// 2. ĐỒNG HỒ SỐ CẬP NHẬT MỖI GIÂY
// ============================================================
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${hh}:${mm}:${ss}`;
}
setInterval(updateClock, 1000);
updateClock();

// ============================================================
// 3. POPUP PHÓNG TO ẢNH ĐẠI DIỆN
// ============================================================
const avatarImg = document.getElementById("avatarImg");
const imageModal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");

avatarImg.addEventListener("click", function () {
  imageModal.classList.add("show");
});

closeModal.addEventListener("click", function () {
  imageModal.classList.remove("show");
});

imageModal.addEventListener("click", function (e) {
  if (e.target === imageModal) imageModal.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") imageModal.classList.remove("show");
});

// ============================================================
// 4. ẨN / HIỆN PHẦN SỞ THÍCH
// ============================================================
const toggleBtn = document.getElementById("toggleBtn");
const hobbyWrapper = document.getElementById("hobbyWrapper");

toggleBtn.addEventListener("click", function () {
  const isShown = hobbyWrapper.classList.toggle("show");
  toggleBtn.textContent = isShown ? "Thu gọn" : "Xem thêm";
});

// ============================================================
// 5. TỰ ĐỘNG CẬP NHẬT NĂM BẢN QUYỀN Ở FOOTER
// ============================================================
document.getElementById("year").textContent = new Date().getFullYear();
