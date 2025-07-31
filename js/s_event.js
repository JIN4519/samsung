// 블랙메뉴 '아울렛 특가' 클릭 시 강제 스크롤 이동
document.addEventListener('DOMContentLoaded', function() {
  var outletMenu = document.querySelector('a[href="#outlet-special"]');
  var outletTarget = document.getElementById('outlet-special');
  if (outletMenu) {
    outletMenu.addEventListener('click', function(e) {
      e.preventDefault();
      // Scroll to the top of the outlet-special-container
      const outletSection = document.getElementById('outlet-special');
      if (outletSection) {
        outletSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // 슬라이드 관련 요소
  const track1 = document.getElementById('customTrack1');
  const fill1 = document.getElementById('customProgressFill1');
  const prev1 = document.getElementById('customPrevBtn1');
  const next1 = document.getElementById('customNextBtn1');

  let index1 = 0;
  const visible1 = 5;
  const cards1 = track1 ? track1.querySelectorAll('.custom-recommend-card1') : [];
  const cardWidth1 = cards1.length > 0 ? cards1[0].offsetWidth + 20 : 234 + 20; // 20px gap
  const maxIndex1 = cards1.length - visible1 >= 0 ? cards1.length - visible1 : 0;

  function updateCustomSlider1() {
    if (!track1 || !fill1 || !prev1 || !next1) return;
    // 마지막 슬라이드가 잘리지 않게 transform 계산 수정
    const maxTranslate1 = (cards1.length - visible1) * cardWidth1;
    const translateX1 = Math.min(index1 * cardWidth1, maxTranslate1 > 0 ? maxTranslate1 : 0);
    track1.style.transform = `translateX(-${translateX1}px)`;
    fill1.style.width = maxIndex1 === 0 ? '100%' : `${(index1 / maxIndex1) * 100}%`;
    prev1.disabled = (index1 === 0);
    next1.disabled = (index1 === maxIndex1);
    prev1.style.opacity = prev1.disabled ? '0.3' : '1';
    next1.style.opacity = next1.disabled ? '0.3' : '1';
    prev1.style.pointerEvents = prev1.disabled ? 'none' : 'auto';
    next1.style.pointerEvents = next1.disabled ? 'none' : 'auto';
    
    // blur 효과 제어
    const slider1 = document.querySelector('.event-cards.custom-recommend-slider1');
    if (slider1) {
      slider1.style.setProperty('--blur-opacity', index1 === maxIndex1 ? '0' : '1');
    }
  }

  // prev1, next1 버튼 클릭 이벤트 핸들러

  prev1 && (prev1.onclick = () => {
    if (index1 > 0) {        
      index1--;
      updateCustomSlider1();
    }
  });
  next1 && (next1.onclick = () => {
    if (index1 < maxIndex1) {
      index1++;
      updateCustomSlider1();
    }
  });

  updateCustomSlider1();

  // ----- custom-recommend-slider2 (이달의 추천) -----
  const track2 = document.getElementById('customTrack2');
  const fill2 = document.getElementById('customProgressFill2');
  const prev2 = document.getElementById('customPrevBtn2');
  const next2 = document.getElementById('customNextBtn2');

  let index2 = 0;
  const visible2 = 5;
  const cards2 = track2 ? track2.querySelectorAll('.custom-recommend-card2') : [];
  const cardWidth2 = cards2.length > 0 ? cards2[0].offsetWidth + 24 : 234 + 24; // 24px gap
  const maxIndex2 = cards2.length - visible2 >= 0 ? cards2.length - visible2 : 0;

  function updateCustomSlider2() {
    if (!track2 || !fill2 || !prev2 || !next2) return;
    // 마지막 슬라이드가 잘리지 않게 transform 계산 수정
    const maxTranslate2 = (cards2.length - visible2) * cardWidth2;
    const translateX2 = Math.min(index2 * cardWidth2, maxTranslate2 > 0 ? maxTranslate2 : 0);
    track2.style.transform = `translateX(-${translateX2}px)`;
    fill2.style.width = maxIndex2 === 0 ? '100%' : `${(index2 / maxIndex2) * 100}%`;
    prev2.disabled = (index2 === 0);
    next2.disabled = (index2 === maxIndex2);
    prev2.style.opacity = prev2.disabled ? '0.3' : '1';
    next2.style.opacity = next2.disabled ? '0.3' : '1';
    prev2.style.pointerEvents = prev2.disabled ? 'none' : 'auto';
    next2.style.pointerEvents = next2.disabled ? 'none' : 'auto';
    
    // blur 효과 제어
    const slider2 = document.querySelector('.event-cards.custom-recommend-slider2');
    if (slider2) {
      slider2.style.setProperty('--blur-opacity', index2 === maxIndex2 ? '0' : '1');
    }
  }

  prev2 && (prev2.onclick = () => {
    if (index2 > 0) {
      index2--;
      updateCustomSlider2();
    }
  });
  next2 && (next2.onclick = () => {
    if (index2 < maxIndex2) {
      index2++;
      updateCustomSlider2();
    }
  });

  updateCustomSlider2();

  // ----- custom-recommend-slider3 (더 많은 혜택) -----
  const track3 = document.getElementById('customTrack3');
  const fill3 = document.getElementById('customProgressFill3');
  const prev3 = document.getElementById('customPrevBtn3');
  const next3 = document.getElementById('customNextBtn3');

  let index3 = 0;
  const visible3 = 4;
  const cards3 = track3 ? track3.querySelectorAll('.custom-recommend-card3') : [];
  const cardWidth3 = cards3.length > 0 ? cards3[0].offsetWidth + 24 : 320 + 24; // 24px gap
  const maxIndex3 = cards3.length - visible3 >= 0 ? cards3.length - visible3 : 0;

  function updateCustomSlider3() {
    if (!track3 || !fill3 || !prev3 || !next3) return;
    // 마지막 슬라이드가 잘리지 않게 transform 계산 수정
    const maxTranslate3 = (cards3.length - visible3) * cardWidth3;
    const translateX3 = Math.min(index3 * cardWidth3, maxTranslate3 > 0 ? maxTranslate3 : 0);
    track3.style.transform = `translateX(-${translateX3}px)`;
    fill3.style.width = maxIndex3 === 0 ? '100%' : `${(index3 / maxIndex3) * 100}%`;
    prev3.disabled = (index3 === 0);
    next3.disabled = (index3 === maxIndex3);
    prev3.style.opacity = prev3.disabled ? '0.3' : '1';
    next3.style.opacity = next3.disabled ? '0.3' : '1';
    prev3.style.pointerEvents = prev3.disabled ? 'none' : 'auto';
    next3.style.pointerEvents = next3.disabled ? 'none' : 'auto';
    
    // blur 효과 제어
    const slider3 = document.querySelector('.event-cards.custom-recommend-slider3');
    if (slider3) {
      slider3.style.setProperty('--blur-opacity', index3 === maxIndex3 ? '0' : '1');
    }
  }

  prev3 && (prev3.onclick = () => {
    if (index3 > 0) {
      index3--;
      updateCustomSlider3();
    }
  });
  next3 && (next3.onclick = () => {
    if (index3 < maxIndex3) {
      index3++;
      updateCustomSlider3();
    }
  });

  updateCustomSlider3();

  // ===== 삼성 신혼 가전 슬라이드 배너 =====
  (function() {
    const slides = document.querySelectorAll('.wedding-banner-slide');
    const pauseBtns = document.querySelectorAll('.wedding-banner-pause');
    let current = 0;
    let playing = true;
    let timer = null;
    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
      current = idx;
    }
    function nextSlide() {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }
    function startAuto() {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        if (playing) nextSlide();
      }, 4000);
    }
    pauseBtns.forEach(btn => {
      btn.onclick = function() {
        playing = !playing;
        btn.textContent = playing ? '❚❚' : '▶';
        startAuto();
      };
    });
    showSlide(0);
    startAuto();
  })();

  // ===== 당신에게 딱 맞는 추천제품 슬라이더 =====
  const personalTrack = document.getElementById('personalTrack');
  const personalFill = document.getElementById('personalProgressFill');
  const personalPrev = document.getElementById('personalPrevBtn');
  const personalNext = document.getElementById('personalNextBtn');

  let personalIndex = 0;
  const personalVisible = 5;
  const personalCards = personalTrack ? personalTrack.querySelectorAll('.personal-recommend-card') : [];
  const personalCardWidth = personalCards.length > 0 ? personalCards[0].offsetWidth + 24 : 260 + 24; // 24px gap
  const personalMaxIndex = personalCards.length - personalVisible >= 0 ? personalCards.length - personalVisible : 0;

  function updatePersonalSlider() {
    if (!personalTrack || !personalFill || !personalPrev || !personalNext) return;
    // 마지막 슬라이드가 잘리지 않게 transform 계산 수정
    const maxTranslatePersonal = (personalCards.length - personalVisible) * personalCardWidth;
    const translateXPersonal = Math.min(personalIndex * personalCardWidth, maxTranslatePersonal > 0 ? maxTranslatePersonal : 0);
    personalTrack.style.transform = `translateX(-${translateXPersonal}px)`;
    personalFill.style.width = personalMaxIndex === 0 ? '100%' : `${(personalIndex / personalMaxIndex) * 100}%`;
    personalPrev.disabled = (personalIndex === 0);
    personalNext.disabled = (personalIndex === personalMaxIndex);
    personalPrev.style.opacity = personalPrev.disabled ? '0.3' : '1';
    personalNext.style.opacity = personalNext.disabled ? '0.3' : '1';
    personalPrev.style.pointerEvents = personalPrev.disabled ? 'none' : 'auto';
    personalNext.style.pointerEvents = personalNext.disabled ? 'none' : 'auto';
    
    // blur 효과 제어
    const personalSlider = document.querySelector('.personal-recommend-slider');
    if (personalSlider) {
      personalSlider.style.setProperty('--blur-opacity', personalIndex === personalMaxIndex ? '0' : '1');
    }
  }

  personalPrev && (personalPrev.onclick = () => {
    if (personalIndex > 0) {
      personalIndex--;
      updatePersonalSlider();
    }
  });
  personalNext && (personalNext.onclick = () => {
    if (personalIndex < personalMaxIndex) {
      personalIndex++;
      updatePersonalSlider();
    }
  });

  updatePersonalSlider();

  // ===== AI 구독클럽 슬라이더 =====
  const aiClubTrack = document.getElementById('aiClubTrack');
  const aiClubFill = document.getElementById('aiClubProgressFill');
  const aiClubPrev = document.getElementById('aiClubPrevBtn');
  const aiClubNext = document.getElementById('aiClubNextBtn');

  let aiClubIndex = 0;
  const aiClubVisible = 5;
  const aiClubCards = aiClubTrack ? aiClubTrack.querySelectorAll('.ai-club-card') : [];
  const aiClubCardWidth = aiClubCards.length > 0 ? aiClubCards[0].offsetWidth + 24 : 260 + 24; // 24px gap
  const aiClubMaxIndex = aiClubCards.length - aiClubVisible >= 0 ? aiClubCards.length - aiClubVisible : 0;

  function updateAiClubSlider() {
    if (!aiClubTrack || !aiClubFill || !aiClubPrev || !aiClubNext) return;
    // 마지막 슬라이드가 잘리지 않게 transform 계산 수정
    const maxTranslateAiClub = (aiClubCards.length - aiClubVisible) * aiClubCardWidth;
    const translateXAiClub = Math.min(aiClubIndex * aiClubCardWidth, maxTranslateAiClub > 0 ? maxTranslateAiClub : 0);
    aiClubTrack.style.transform = `translateX(-${translateXAiClub}px)`;
    aiClubFill.style.width = aiClubMaxIndex === 0 ? '100%' : `${(aiClubIndex / aiClubMaxIndex) * 100}%`;
    aiClubPrev.disabled = (aiClubIndex === 0);
    aiClubNext.disabled = (aiClubIndex === aiClubMaxIndex);
    aiClubPrev.style.opacity = aiClubPrev.disabled ? '0.3' : '1';
    aiClubNext.style.opacity = aiClubNext.disabled ? '0.3' : '1';
    aiClubPrev.style.pointerEvents = aiClubPrev.disabled ? 'none' : 'auto';
    aiClubNext.style.pointerEvents = aiClubNext.disabled ? 'none' : 'auto';
    
    // blur 효과 제어
    const aiClubSlider = document.querySelector('.ai-club-slider');
    if (aiClubSlider) {
      aiClubSlider.style.setProperty('--blur-opacity', aiClubIndex === aiClubMaxIndex ? '0' : '1');
    }
  }

  aiClubPrev && (aiClubPrev.onclick = () => {
    if (aiClubIndex > 0) {
      aiClubIndex--;
      updateAiClubSlider();
    }
  });
  aiClubNext && (aiClubNext.onclick = () => {
    if (aiClubIndex < aiClubMaxIndex) {
      aiClubIndex++;
      updateAiClubSlider();
    }
  });

  updateAiClubSlider();

  // ===== 아울렛 특가 슬라이더 =====
  const outletTrack = document.getElementById('outletTrack');
  const outletFill = document.getElementById('outletProgressFill');
  const outletPrev = document.getElementById('outletPrevBtn');
  const outletNext = document.getElementById('outletNextBtn');

  let outletIndex = 0;
  const outletVisible = 5;
  const outletCards = outletTrack ? outletTrack.querySelectorAll('.outlet-special-card') : [];
  const outletCardWidth = outletCards.length > 0 ? outletCards[0].offsetWidth + 24 : 252 + 24; // 24px gap
  const outletMaxIndex = outletCards.length - outletVisible >= 0 ? outletCards.length - outletVisible : 0;

  function updateOutletSlider() {
    if (!outletTrack || !outletFill || !outletPrev || !outletNext) return;
    // 마지막 슬라이드가 잘리지 않게 transform 계산 수정
    const maxTranslateOutlet = (outletCards.length - outletVisible) * outletCardWidth;
    const translateXOutlet = Math.min(outletIndex * outletCardWidth, maxTranslateOutlet > 0 ? maxTranslateOutlet : 0);
    outletTrack.style.transform = `translateX(-${translateXOutlet}px)`;
    outletFill.style.width = outletMaxIndex === 0 ? '100%' : `${(outletIndex / outletMaxIndex) * 100}%`;
    outletPrev.disabled = (outletIndex === 0);
    outletNext.disabled = (outletIndex === outletMaxIndex);
    outletPrev.style.opacity = outletPrev.disabled ? '0.3' : '1';
    outletNext.style.opacity = outletNext.disabled ? '0.3' : '1';
    outletPrev.style.pointerEvents = outletPrev.disabled ? 'none' : 'auto';
    outletNext.style.pointerEvents = outletNext.disabled ? 'none' : 'auto';
    
    // blur 효과 제어
    const outletSlider = document.querySelector('.outlet-special-slider');
    if (outletSlider) {
      outletSlider.style.setProperty('--blur-opacity', outletIndex === outletMaxIndex ? '0' : '1');
    }
  }

  outletPrev && (outletPrev.onclick = () => {
    if (outletIndex > 0) {
      outletIndex--;
      updateOutletSlider();
    }
  });
  outletNext && (outletNext.onclick = () => {
    if (outletIndex < outletMaxIndex) {
      outletIndex++;
      updateOutletSlider();
    }
  });

  updateOutletSlider();

  // ===== 멤버십 탭 클릭 기능 =====
  const membershipTabs = document.querySelectorAll('.membership-tab');
  
  if (membershipTabs.length > 0) {
    console.log('Membership tabs found:', membershipTabs.length);
    
    membershipTabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
        console.log('Tab clicked:', index);
        // 모든 탭에서 active 클래스 제거
        membershipTabs.forEach(t => t.classList.remove('active'));
        // 클릭된 탭에 active 클래스 추가
        this.classList.add('active');
        console.log('Active tab updated');
      });
    });
  } else {
    console.log('No membership tabs found');
  }

  // ===== 위로가기 버튼 기능 =====
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    function checkScrollForTopBtn() {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      
      // 스크롤이 300px 이상일 때 표시 (항상 따라다님)
      if (scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '0.85';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
      
      // 맨 아래 근처에서는 더 진하게 표시
      if (scrollY + windowH >= docH - 120) {
        scrollToTopBtn.style.opacity = '1';
      }
    }

    window.addEventListener('scroll', checkScrollForTopBtn);
    window.addEventListener('resize', checkScrollForTopBtn);
    document.addEventListener('DOMContentLoaded', checkScrollForTopBtn);

    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== 스크롤에 따른 메뉴 활성화 기능 =====
  const blackMenuLinks = document.querySelectorAll('.black-menu a');
  const sections = [
    { id: 'recommend-events', menuIndex: 0 },
    { id: 'monthly-recommend', menuIndex: 1 },
    { id: 'special-benefits', menuIndex: 2 },
    { id: 'special-services', menuIndex: 3 },
    { id: 'recommend-products', menuIndex: 4 },
    { id: 'vision-live', menuIndex: 5 },
    { id: 'ai-club', menuIndex: 6 },
    { id: 'outlet-special', menuIndex: 7 },
    { id: 'membership-points', menuIndex: 8 },
    { id: 'various-stores', menuIndex: 9 }
  ];

  function updateActiveMenu() {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;
    
    // 각 섹션의 위치를 확인하여 현재 활성화할 메뉴 결정
    let activeIndex = 0;
    
    sections.forEach((section, index) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        
        // 마지막 섹션(various-stores)의 경우 특별 처리
        if (section.id === 'various-stores') {
          // 다양한 스토어 섹션이 화면에 나타날 때 메뉴 활성화
          if (scrollY >= sectionTop - 300) {
            activeIndex = section.menuIndex;
          }
        } else {
          // 각 섹션의 제목이 화면 상단에 나타날 때 해당 메뉴 활성화
          if (scrollY >= sectionTop - 300) {
            activeIndex = section.menuIndex;
          }
        }
      }
    });
    
    // 모든 메뉴에서 active 클래스 제거
    blackMenuLinks.forEach(link => link.classList.remove('active'));
    
    // 현재 활성화할 메뉴에 active 클래스 추가
    if (blackMenuLinks[activeIndex]) {
      blackMenuLinks[activeIndex].classList.add('active');
    }
  }

  // 스크롤 이벤트에 메뉴 업데이트 기능 추가 (디바운싱 적용)
  let scrollTimeout;
  function debouncedUpdateActiveMenu() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveMenu, 10);
  }
  
  window.addEventListener('scroll', debouncedUpdateActiveMenu);
  window.addEventListener('resize', debouncedUpdateActiveMenu);
  document.addEventListener('DOMContentLoaded', updateActiveMenu);

  // 메뉴 클릭 시 해당 섹션으로 스크롤
  blackMenuLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const blackMenuBar = document.querySelector('.black-menu-bar');
        const blackMenuBarHeight = blackMenuBar ? blackMenuBar.offsetHeight : 0;
        const headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0;
        const subtopbarHeight = document.querySelector('.subtopbar') ? document.querySelector('.subtopbar').offsetHeight : 0;
        
        const offsetTop = targetElement.offsetTop - headerHeight - subtopbarHeight - blackMenuBarHeight - 20;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

