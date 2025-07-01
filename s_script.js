// ✅ DOM 로딩 완료 후 실행
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menuToggle");
  const dropdown = document.getElementById("dropdownPanel");
  const header = document.getElementById("mainHeader");
  const topBar = document.getElementById("topBar");
  const videoSection = document.getElementById("videoSection");

  let isOpen = false;
  let lastScrollTop = 0;
  let ticking = false;

  // ✅ 드롭다운 열기 함수 (scrollHeight로 자연스럽게 열기)
  function openDropdown() {
    dropdown.style.height = dropdown.scrollHeight + "px";
    dropdown.classList.add("open");
  }

  // ✅ 드롭다운 닫기 함수 (높이 0으로 축소)
  function closeDropdown() {
    dropdown.style.height = "0px";
    dropdown.classList.remove("open");
  }

  // ✅ 전체메뉴 클릭 시 드롭다운 열기/닫기
  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    isOpen = !isOpen;
    toggleBtn.classList.toggle("active", isOpen);

    if (isOpen) {
      openDropdown();
      header.classList.add("active");
      topBar?.classList.add("active");
    } else {
      closeDropdown();
      header.classList.remove("active");
      topBar?.classList.remove("active");
    }
  });

  // ✅ 외부 클릭 시 드롭다운 닫기
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeDropdown();
      toggleBtn.classList.remove("active");
      header.classList.remove("active");
      topBar?.classList.remove("active");
      isOpen = false;
    }
  });

  // ✅ 스크롤 핸들링 함수
  function handleScroll() {
    const scrollTop = window.scrollY;
    const isScrolled = scrollTop > 80;

    // ✅ 아래로 스크롤 시 상단 숨기기
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("hide-on-scroll");
      topBar?.classList.add("hide-on-scroll");

      closeDropdown();
      toggleBtn.classList.remove("active");
      header.classList.remove("active");
      topBar?.classList.remove("active");
      isOpen = false;
    } else {
      // ✅ 위로 스크롤 시 다시 보이기
      header.classList.remove("hide-on-scroll");
      topBar?.classList.remove("hide-on-scroll");
    }

    // ✅ 영상 영역 축소 처리
    if (videoSection) {
      if (isScrolled) {
        videoSection.classList.add("shrink");
      } else {
        videoSection.classList.remove("shrink");
      }
    }

    // ✅ 배경/글자색 전환
    header.classList.toggle("scrolled", isScrolled);
    topBar?.classList.toggle("scrolled", isScrolled);

    // ✅ 로그인/카트 아이콘 색상 전환
    const loginImg = document.getElementById("loginImgDesktop");
    const cartImg = document.getElementById("cartImgDesktop");
    const loginImgMobile = document.getElementById("loginImgMobile");
    const cartImgMobile = document.getElementById("cartImgMobile");

    const whiteLogin = "image/login_white.png";
    const blackLogin = "image/login_black.png";
    const whiteCart = "image/cart_white.png";
    const blackCart = "image/cart_black.png";

    const shouldUseBlackIcons = isScrolled || header.classList.contains("active");

    function updateIcon(imgEl, whiteSrc, blackSrc) {
      if (!imgEl) return;
      const currentSrc = imgEl.getAttribute("src") || "";
      const targetSrc = shouldUseBlackIcons ? blackSrc : whiteSrc;
      if (!currentSrc.includes(targetSrc)) {
        imgEl.setAttribute("src", targetSrc);
      }
    }

    updateIcon(loginImg, whiteLogin, blackLogin);
    updateIcon(cartImg, whiteCart, blackCart);
    updateIcon(loginImgMobile, whiteLogin, blackLogin);
    updateIcon(cartImgMobile, whiteCart, blackCart);

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    ticking = false;
  }

  // ✅ 스크롤 최적화 처리
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });
});
