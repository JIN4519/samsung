// ✅ DOM 로딩 완료 후 실행
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menutoggle");
  const promoToggleBtn = document.getElementById("promotoggle");
  const dropdown = document.getElementById("dropdownpanel");
  const promopanel = document.getElementById("promopanel");
  const header = document.getElementById("mainheader");
  const topBar = document.getElementById("topbar");
  const videoSection = document.getElementById("videosection");

  let isOpen = false;
  let lastScrollTop = 0;
  let ticking = false;

  // ✅ 드롭다운 열기 함수
  function openDropdown() {
    dropdown.style.height = dropdown.scrollHeight + "px";
    dropdown.classList.add("open");
  }

  // ✅ 드롭다운 닫기 함수
  function closeDropdown() {
    dropdown.style.height = "0px";
    dropdown.classList.remove("open");
  }

  // ✅ 기획전 열기/닫기 함수
  function openPromo() {
    promopanel.style.height = promopanel.scrollHeight + "px";
    promopanel.classList.add("open");
  }

  function closePromo() {
    promopanel.style.height = "0px";
    promopanel.classList.remove("open");
  }

  // ✅ 전체메뉴 클릭 시
  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // 항상 먼저 둘 다 닫기
    closePromo();
    closeDropdown();
    promoToggleBtn.classList.remove("active");

    // 드롭다운 열려 있던 상태였다면 false로
    isOpen = !toggleBtn.classList.contains("active");

    // 버튼 상태 설정
    toggleBtn.classList.toggle("active", isOpen);

    if (isOpen) {
      // ✅ 기획전 패널이 아직 transition 중이더라도 강제로 드롭다운 펼침
      dropdown.classList.add("open");
      dropdown.style.height = dropdown.scrollHeight + "px";

      header.classList.add("active");
      topBar?.classList.add("active");
    } else {
      dropdown.classList.remove("open");
      dropdown.style.height = "0px";
      header.classList.remove("active");
      topBar?.classList.remove("active");
    }
  });

  // ✅ 기획전 클릭 시
  promoToggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const isPromoOpen = promopanel.classList.contains("open");

    // ✅ 전체메뉴 드롭다운 닫고 버튼 비활성화
    closeDropdown();
    toggleBtn.classList.remove("active");

    if (!isPromoOpen) {
      openPromo();
      promoToggleBtn.classList.add("active");
      header.classList.add("active");
      topBar?.classList.add("active");
    } else {
      closePromo();
      promoToggleBtn.classList.remove("active");
      header.classList.remove("active");
      topBar?.classList.remove("active");
    }
  });

  // ✅ 외부 클릭 시 둘 다 닫기
  document.addEventListener("click", function (e) {
    if (
      !dropdown.contains(e.target) &&
      !toggleBtn.contains(e.target) &&
      !promopanel.contains(e.target) &&
      !promoToggleBtn.contains(e.target)
    ) {
      closeDropdown();
      closePromo();
      toggleBtn.classList.remove("active");
      promoToggleBtn.classList.remove("active");
      header.classList.remove("active");
      topBar?.classList.remove("active");
      isOpen = false;
    }
  });

  // ✅ 스크롤 핸들링
  function handleScroll() {
    const scrollTop = window.scrollY;
    const isScrolled = scrollTop > 80;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("hide-on-scroll");
      topBar?.classList.add("hide-on-scroll");
      closeDropdown();
      closePromo();
      toggleBtn.classList.remove("active");
      promoToggleBtn.classList.remove("active");
      header.classList.remove("active");
      topBar?.classList.remove("active");
      isOpen = false;
    } else {
      header.classList.remove("hide-on-scroll");
      topBar?.classList.remove("hide-on-scroll");
    }

  if (videoSection) {
  if (isScrolled) {
    videoSection.classList.add("shrink");
  } else {
    videoSection.classList.remove("shrink");
  }
}

    header.classList.toggle("scrolled", isScrolled);
    topBar?.classList.toggle("scrolled", isScrolled);

    const loginImg = document.getElementById("loginimgdesktop");
    const cartImg = document.getElementById("cartimgdesktop");
    const loginImgMobile = document.getElementById("loginimgmobile");
    const cartImgMobile = document.getElementById("cartimgmobile");

    const whiteLogin = "image/login_white.png";
    const blackLogin = "image/login_black.png";
    const whiteCart = "image/cart_white.png";
    const blackCart = "image/cart_black.png";

    const shouldUseBlackIcons =
      isScrolled || header.classList.contains("active");

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

  const mobileToggleBtn = document.getElementById("menutogglemobile");
  const mobileMenuPanel = document.getElementById("mobilemenupanel"); // ✅ ID 정확하게 수정

  if (mobileToggleBtn && mobileMenuPanel) {
    mobileToggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      mobileMenuPanel.classList.toggle("show");
    });

    document.addEventListener("click", function (evt) {
      if (
        !mobileMenuPanel.contains(evt.target) &&
        !mobileToggleBtn.contains(evt.target)
      ) {
        mobileMenuPanel.classList.remove("show");
      }
    });
  }

  // ✅ 스크롤 최적화
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });
});

window.addEventListener("scroll", () => {
  const videoContainer = document.getElementById("videosection");
  const scrollTop = window.scrollY;

  const minWidth = 1280;
  const screenW = window.innerWidth;
  const ratio = Math.min(scrollTop / 400, 1); // 0~1

  // ✅ 세로 비율 계산
  const newHeight = ratio >= 1 ? "40vh" : `${100 - ratio * 60}vh`;
  videoContainer.style.height = newHeight;

  // ✅ 가로 폭 분기 처리
  if (scrollTop < 100) {
    videoContainer.style.width = "100%";
    videoContainer.style.maxWidth = "100%";
  } else if (scrollTop < 200) {
    videoContainer.style.width = "90%";
    videoContainer.style.maxWidth = "100%";
  } else if (scrollTop < 300) {
    videoContainer.style.width = "80%";
    videoContainer.style.maxWidth = "100%";
  } else if (scrollTop < 400) {
    videoContainer.style.width = "75%";
    videoContainer.style.maxWidth = "75%";
  } else {
    // ✅ 삼성 방식처럼, 비율에 따라 줄이되 최소 1280px은 보장
    const calcWidth = Math.max(screenW * 0.8, minWidth);
    videoContainer.style.width = `${calcWidth}px`;
    videoContainer.style.maxWidth = `${minWidth}px`;
  }


  // ✅ 중앙 정렬
  videoContainer.style.margin = "0 auto";
});



/* ✅ 팝업 닫기 */
document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
