export default () => {
  const showModal = () => {
    (document.getElementById("dialog") as any).showModal();
  };
  const closeModal = () => {
    (document.getElementById("dialog") as any).close();
  };

  return {
    showModal,
    closeModal,
  };
};
