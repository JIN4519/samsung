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

  // ✅ 장바구니 패널 토글 (데스크탑/모바일)
  const cartImgDesktop = document.getElementById("cartimgdesktop");
  const cartImgMobile = document.getElementById("cartimgmobile");
  const cartPanel = document.getElementById("cartpanel");
  const cartCloseBtn = document.getElementById("cart-close-btn");

  function closeCartPanel() {
    cartPanel?.classList.remove("show");
  }

  function openCartPanel() {
    cartPanel?.classList.add("show");
  }

  cartImgDesktop?.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    cartPanel.classList.toggle("show");
    // cart 열 때 로그인 패널 닫기
    const loginPanel = document.getElementById("loginpanel");
    loginPanel?.classList.remove("open");
  });
  cartImgMobile?.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    cartPanel.classList.toggle("show");
    // cart 열 때 로그인 패널 닫기 (모바일)
    const loginPanel = document.getElementById("loginpanel");
    loginPanel?.classList.remove("open");
  });
  cartCloseBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    closeCartPanel();
  });
  // 외부 클릭 시 닫기
  document.addEventListener("click", function (e) {
    if (cartPanel && !cartPanel.contains(e.target) && e.target !== cartImgDesktop && e.target !== cartImgMobile) {
      closeCartPanel();
    }
  });

  let lastScrollTop = 0;
  let ticking = false;

  // ✅ 모든 드롭다운 닫기
  function closeAll() {
    [dropdown, promopanel, aipanel, customerPanel].forEach((panel) => {
      if (panel) {
        panel.style.height = "0px";
        panel.classList.remove("open");
      }
    });
    [toggleBtn, promoToggleBtn, aiToggleBtn, customerToggleBtn].forEach((btn) =>
      btn?.classList.remove("active")
    );
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
  toggleBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = dropdown.classList.contains("open");
    isOpen ? closeAll() : openPanel(dropdown, toggleBtn);
  });

  // ✅ 기획전 토글
  promoToggleBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = promopanel.classList.contains("open");
    isOpen ? closeAll() : openPanel(promopanel, promoToggleBtn);
  });

  // ✅ AI 구독 토글
  aiToggleBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = aipanel.classList.contains("open");
    isOpen ? closeAll() : openPanel(aipanel, aiToggleBtn);
  });

  // ✅ 고객지원 토글
  customerToggleBtn?.addEventListener("click", (e) => {
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

    // 검색창 열려 있으면 스크롤 시 자동 닫기
    if (searchPanel?.classList.contains("open")) {
      searchPanel.classList.remove("open");
      header?.classList.remove("active");
      topBar?.classList.remove("active");
      // 로고/아이콘 원래대로 복구
      const logoImg = document.getElementById("logoimage");
      if (logoImg) logoImg.src = "image/logo_samsung_white.png";
      document
        .getElementById("loginimgdesktop")
        ?.setAttribute("src", "image/login_white.png");
      document
        .getElementById("cartimgdesktop")
        ?.setAttribute("src", "image/cart_white.png");
      document
        .getElementById("loginimgmobile")
        ?.setAttribute("src", "image/login_white.png");
      document
        .getElementById("cartimgmobile")
        ?.setAttribute("src", "image/cart_white.png");
    }

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

  // ✅ 검색 메뉴 토글 (검색 버튼 클릭 시)
  const searchBtn = document.querySelector(".search-btn");
  const searchPanel = document.getElementById("searchpanel");
  const searchCloseBtn = document.getElementById("search-close-btn");

  function openSearchPanel() {
  closeAll();
  if (searchPanel) {
    // 패널 높이 자동 설정 (전체메뉴처럼)
    searchPanel.style.height = searchPanel.scrollHeight + 'px';
    searchPanel.classList.add('open');
    header?.classList.add('active');
    topBar?.classList.add('active');

    const logoImg = document.getElementById("logoimage");
    if (logoImg) logoImg.src = "image/logo_samsung_black.png";
    document.getElementById("loginimgdesktop")?.setAttribute("src", "image/login_black.png");
    document.getElementById("cartimgdesktop")?.setAttribute("src", "image/cart_black.png");
    document.getElementById("loginimgmobile")?.setAttribute("src", "image/login_black.png");
    document.getElementById("cartimgmobile")?.setAttribute("src", "image/cart_black.png");
  }
}

  function closeSearchPanel() {
  if (searchPanel) {
    searchPanel.style.height = '0px';  // ✅ 추가
    searchPanel.classList.remove('open');
    header?.classList.remove('active');
    topBar?.classList.remove('active');
    const logoImg = document.getElementById("logoimage");
    if (logoImg) logoImg.src = "image/logo_samsung_white.png";
    document.getElementById("loginimgdesktop")?.setAttribute("src", "image/login_white.png");
    document.getElementById("cartimgdesktop")?.setAttribute("src", "image/cart_white.png");
    document.getElementById("loginimgmobile")?.setAttribute("src", "image/login_white.png");
    document.getElementById("cartimgmobile")?.setAttribute("src", "image/cart_white.png");
  }
}

  // ✅ 검색 관련 요소
  const searchInput = document.querySelector(".search-input");
  const searchInputValue = document.getElementById("search-input-value");

  // ✅ 검색 버튼 클릭 시 검색 패널 열기
  searchBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    const keyword = searchInput?.value?.trim();
    if (keyword && searchPanel) {
      closeAll();
      searchInputValue.value = keyword;
      searchPanel.classList.add("open");
      // 헤더/로고/아이콘 색상 변경 제거
      header?.classList.add("active");
      topBar?.classList.add("active");
      const logoImg = document.getElementById("logoimage");
      if (logoImg) logoImg.src = "image/logo_samsung_black.png";

      searchInput?.focus();
    }
  });

  // ✅ 검색창 닫기
  searchCloseBtn?.addEventListener("click", function () {
    searchPanel?.classList.remove("open");
    header?.classList.remove("active");
    topBar?.classList.remove("active");
    // 검색 input blur 처리
    searchInput?.blur();
  });

  // ✅ 다른 메뉴 클릭 시 검색 패널 닫기
  document.addEventListener("click", function (e) {
    const insideSearch =
      searchInput?.contains(e.target) ||
      searchBtn?.contains(e.target) ||
      searchPanel?.contains(e.target);
    const otherMenus =
      dropdown?.contains(e.target) ||
      promopanel?.contains(e.target) ||
      aipanel?.contains(e.target) ||
      customerPanel?.contains(e.target) ||
      toggleBtn?.contains(e.target) ||
      promoToggleBtn?.contains(e.target) ||
      aiToggleBtn?.contains(e.target) ||
      customerToggleBtn?.contains(e.target);

    if (
      searchPanel?.classList.contains("open") &&
      !insideSearch &&
      otherMenus
    ) {
      searchPanel.classList.remove("open");
      header?.classList.remove("active");
      topBar?.classList.remove("active");
    }
  });

  // ✅ 검색 input blur(포커스 해제) 시 원래대로 복구
  searchInput?.addEventListener("blur", function () {
    header?.classList.remove("active");
    topBar?.classList.remove("active");
    const logoImg = document.getElementById("logoimage");
    if (logoImg) logoImg.src = "image/logo_samsung_white.png";
    document
      .getElementById("loginimgdesktop")
      ?.setAttribute("src", "image/login_white.png");
    document
      .getElementById("cartimgdesktop")
      ?.setAttribute("src", "image/cart_white.png");
    document
      .getElementById("loginimgmobile")
      ?.setAttribute("src", "image/login_white.png");
    document
      .getElementById("cartimgmobile")
      ?.setAttribute("src", "image/cart_white.png");
  });

  // ✅ 검색 input에서 엔터(Enter) 키로도 검색
  searchInput?.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBtn?.click();
    }
  });
});

/* 로그인 */
const loginBtn = document.getElementById("loginimgdesktop"); // 또는 모바일용
const loginPanel = document.getElementById("loginpanel");

loginBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  loginPanel.classList.toggle("open");
  // 로그인 열 때 카트 패널 닫기
  const cartPanel = document.getElementById("cartpanel");
  cartPanel?.classList.remove("show");
});

// 외부 클릭 시 닫기
document.addEventListener("click", function (e) {
  if (!loginPanel.contains(e.target) && !loginBtn.contains(e.target)) {
    loginPanel.classList.remove("open");
  }
});

// 모바일 로그인 버튼 클릭 시 카트 패널 닫기
const loginImgMobile = document.getElementById("loginimgmobile");
loginImgMobile?.addEventListener("click", function () {
  const cartPanel = document.getElementById("cartpanel");
  cartPanel?.classList.remove("show");
});


// --- Main Slider (slider-content) ---
const slider = document.querySelector('.slider-content');
const items = document.querySelectorAll('.slider-item');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const visibleCount = 4;
const totalPages = Math.ceil(items.length / visibleCount);
let currentIndex = 0;

function updateMainSlider() {
  const translateX = -106.5 * currentIndex;
  slider.style.transform = `translateX(${translateX}%)`;
  // Always show both buttons
  nextBtn.style.display = 'flex';
  prevBtn.style.display = 'flex';
  nextBtn.style.opacity = '1';
  prevBtn.style.opacity = '1';
  nextBtn.style.visibility = 'visible';
  prevBtn.style.visibility = 'visible';
  nextBtn.disabled = false;
  prevBtn.disabled = false;
  nextBtn.style.pointerEvents = 'auto';
  prevBtn.style.pointerEvents = 'auto';
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalPages;
  updateMainSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalPages) % totalPages;
  updateMainSlider();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalPages;
  updateMainSlider();
}, 5000);


// --- Custom Recommend Slider (HTML 기반) ---
const track = document.getElementById('customTrack');
const fill = document.getElementById('customProgressFill');
const prev = document.getElementById('customPrevBtn');
const next = document.getElementById('customNextBtn');

let index = 0;
const visible = 4;
const cards = track.querySelectorAll('.custom-recommend-card');
const cardWidth = cards.length > 0 ? cards[0].offsetWidth + 24 : 220; // 24px gap
const maxIndex = cards.length - visible >= 0 ? cards.length - visible : 0;

function updateCustomSlider() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  fill.style.width = maxIndex === 0 ? '95%' : `${(index / maxIndex) * 95}%`;
  prev.disabled = (index === 0);
  next.disabled = (index === maxIndex);
  prev.style.opacity = prev.disabled ? '0.3' : '1';
  next.style.opacity = next.disabled ? '0.3' : '1';
  prev.style.pointerEvents = prev.disabled ? 'none' : 'auto';
  next.style.pointerEvents = next.disabled ? 'none' : 'auto';
}

prev.onclick = () => {
  if (index > 0) {
    index--;
    updateCustomSlider();
  }
};

next.onclick = () => {
  if (index < maxIndex) {
    index++;
    updateCustomSlider();
  }
};

let autoSlide = setInterval(() => {
  index = index < maxIndex ? index + 1 : 0;
  updateCustomSlider();
}, 4000);

document.getElementById('customSlider').addEventListener('mouseenter', () => clearInterval(autoSlide));
document.getElementById('customSlider').addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    index = index < maxIndex ? index + 1 : 0;
    updateCustomSlider();
  }, 4000);
});

// Initial update for both sliders
updateMainSlider();
updateCustomSlider();
