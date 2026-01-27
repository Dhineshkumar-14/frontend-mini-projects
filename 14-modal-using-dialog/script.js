const modalOpenButton = document.getElementById("modalOpenButton");
const dialogId = document.getElementById("dialogId");
const dialogCloseButton = document.getElementById("dialogCloseButton");
modalOpenButton.addEventListener("click", () => {
  dialogId.showModal();
});

dialogCloseButton.addEventListener("click", () => {
  dialogId.close();
});
