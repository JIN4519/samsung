// ✅ DOMContentLoaded 이후 실행
// 메뉴 버튼 클릭, 드롭다운, 스크롤, 팝업 등 모든 기능 포함

// 페이지 로딩 후 실행
document.addEventListener("DOMContentLoaded", function () {
  // ✅ 주요 버튼 요소 및 패널 요소 불러오기
  const toggleBtn = document.getElementById("menutoggle");
  const promoToggleBtn = document.getElementById("promotoggle");
  const aiToggleBtn = document.getElementById("aitoggle");
  const customerToggleBtn = document.getElementById("customertoggle");

  const dropdown = document.getElementById("dropdownpanel");
  const promopanel = document.getElementById("promopanel");
  const aipanel = document.getElementById("aipanel");
  const customerPanel = document.getElementById("customerpanel");

  const header = document.getElementById("mainheader");
  const topBar = document.getElementById("topbar");
  const videoSection = document.getElementById("videosection");

  let lastScrollTop = 0;
  let ticking = false;

  // ✅ 모든 드롭다운 닫기
  function closeAll() {
    [dropdown, promopanel, aipanel, customerPanel].forEach(panel => {
      if (panel) {
        panel.style.height = "0px";
        panel.classList.remove("open");
      }
    });
    [toggleBtn, promoToggleBtn, aiToggleBtn, customerToggleBtn].forEach(btn => btn?.classList.remove("active"));
    header?.classList.remove("active");
    topBar?.classList.remove("active");
  }

  // ✅ 특정 패널 열기 함수 (닫기 → 열기 순서)
  function openPanel(panel, button) {
    closeAll();
    if (panel && button) {
      panel.style.height = panel.scrollHeight + "px";
      panel.classList.add("open");
      button.classList.add("active");
      header?.classList.add("active");
      topBar?.classList.add("active");
    }
  }

  // ✅ 전체메뉴 토글
  toggleBtn?.addEventListener("click", e => {
    e.preventDefault();
    const isOpen = dropdown.classList.contains("open");
    isOpen ? closeAll() : openPanel(dropdown, toggleBtn);
  });

  // ✅ 기획전 토글
  promoToggleBtn?.addEventListener("click", e => {
    e.preventDefault();
    const isOpen = promopanel.classList.contains("open");
    isOpen ? closeAll() : openPanel(promopanel, promoToggleBtn);
  });

  // ✅ AI 구독 토글
  aiToggleBtn?.addEventListener("click", e => {
    e.preventDefault();
    const isOpen = aipanel.classList.contains("open");
    isOpen ? closeAll() : openPanel(aipanel, aiToggleBtn);
  });

  // ✅ 고객지원 토글
  customerToggleBtn?.addEventListener("click", e => {
    e.preventDefault();
    const isOpen = customerPanel.classList.contains("open");
    isOpen ? closeAll() : openPanel(customerPanel, customerToggleBtn);
  });

  // ✅ 외부 클릭 시 모든 드롭다운 닫기
  document.addEventListener("click", function (e) {
    if (
      !dropdown.contains(e.target) &&
      !promopanel.contains(e.target) &&
      !aipanel.contains(e.target) &&
      !customerPanel.contains(e.target) &&
      !toggleBtn.contains(e.target) &&
      !promoToggleBtn.contains(e.target) &&
      !aiToggleBtn.contains(e.target) &&
      !customerToggleBtn.contains(e.target)
    ) {
      closeAll();
    }
  });

  // ✅ 스크롤 시 헤더/탑바 숨기기 및 아이콘 색상 전환
  function handleScroll() {
    const scrollTop = window.scrollY;
    const isScrolled = scrollTop > 80;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("hide-on-scroll");
      topBar?.classList.add("hide-on-scroll");
      closeAll();
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

    // ✅ 아이콘 색상 전환
    const loginImg = document.getElementById("loginimgdesktop");
    const cartImg = document.getElementById("cartimgdesktop");
    const loginImgMobile = document.getElementById("loginimgmobile");
    const cartImgMobile = document.getElementById("cartimgmobile");

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

  // ✅ requestAnimationFrame으로 scroll 이벤트 최적화
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // ✅ 비디오 영역 스크롤 shrink 효과 적용
  window.addEventListener("scroll", () => {
    const videoContainer = document.getElementById("videosection");
    const scrollTop = window.scrollY;
    const minWidth = 1280;
    const screenW = window.innerWidth;
    const ratio = Math.min(scrollTop / 400, 1);
    const newHeight = ratio >= 1 ? "40vh" : `${100 - ratio * 60}vh`;
    videoContainer.style.height = newHeight;

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
      const calcWidth = Math.max(screenW * 0.8, minWidth);
      videoContainer.style.width = `${calcWidth}px`;
      videoContainer.style.maxWidth = `${minWidth}px`;
    }

    videoContainer.style.margin = "0 auto";
  });

  // ✅ 팝업 닫기 버튼
  document.querySelector("button")?.addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  });

  // ✅ 모바일 햄버거 메뉴 열고 닫기
  const mobileToggleBtn = document.getElementById("menutogglemobile");
  const mobileMenuPanel = document.getElementById("mobilemenupanel");
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
});
