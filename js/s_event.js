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
    track1.style.transform = `translateX(-${index1 * cardWidth1}px)`;
    fill1.style.width = maxIndex1 === 0 ? '100%' : `${(index1 / maxIndex1) * 100}%`;
    prev1.disabled = (index1 === 0);
    next1.disabled = (index1 === maxIndex1);
    prev1.style.opacity = prev1.disabled ? '0.3' : '1';
    next1.style.opacity = next1.disabled ? '0.3' : '1';
    prev1.style.pointerEvents = prev1.disabled ? 'none' : 'auto';
    next1.style.pointerEvents = next1.disabled ? 'none' : 'auto';
  }

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

  // 자동 슬라이드(원하면 주석 해제)
  // let autoSlide1 = setInterval(() => {
  //   index1 = index1 < maxIndex1 ? index1 + 1 : 0;
  //   updateCustomSlider1();
  // }, 4000);

  // const slider1 = document.getElementById('customSlider1');
  // if (slider1) {
  //   slider1.addEventListener('mouseenter', () => clearInterval(autoSlide1));
  //   slider1.addEventListener('mouseleave', () => {
  //     autoSlide1 = setInterval(() => {
  //       index1 = index1 < maxIndex1 ? index1 + 1 : 0;
  //       updateCustomSlider1();
  //     }, 4000);
  //   });
  // }

  updateCustomSlider1();
});
