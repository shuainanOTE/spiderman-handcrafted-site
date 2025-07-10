// 選取所有 slider 容器
const containers = document.querySelectorAll(".slider-container");

// 為每個容器添加滑塊功能
containers.forEach((container) => {
  const slider = container.querySelector("#slider");
  const imageLeft = container.querySelector(".image-left");

  let isDragging = false; // 控制拖曳狀態

  // 按下滑塊時啟用拖曳
  slider.addEventListener("mousedown", () => {
    isDragging = true;
  });

  slider.addEventListener("touchstart", () => {
    isDragging = true;
  });

  // 拖曳時更新滑塊位置
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // 限制滑塊範圍在容器內
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    // 更新滑塊位置與遮罩效果
    slider.style.left = `${offsetX}px`;
    imageLeft.style.clipPath = `inset(0 ${rect.width - offsetX}px 0 0)`;
  });

  // 支援觸控拖曳
  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const rect = container.getBoundingClientRect();
    let offsetX = e.touches[0].clientX - rect.left;

    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    slider.style.left = `${offsetX}px`;
    imageLeft.style.clipPath = `inset(0 ${rect.width - offsetX}px 0 0)`;
  });

  // 結束拖曳
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });
});
// 投票____________________________________________________________________________________________________
let votes = [0, 0, 0]; // 記錄三個選項的投票數

        function vote(index) {
            votes[index]++; // 增加投票數
            document.getElementById(`count${index}`).textContent = votes[index]; // 更新畫面
        }

