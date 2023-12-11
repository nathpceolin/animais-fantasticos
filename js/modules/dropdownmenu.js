import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach((menu) => {
    /**userEvent faz referencia ao evento que o user realizar(touch ou click). Tambem podemos fazer de outra forma criando dois eventListener para cada evento. Ex: menu.addEventListener('click', handleClick) e menu.addEventListener('touchstart', handleClick)  */
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    /**o this faz referencia a lista ou seja o li[data-dropdown]. Toda vez que houver this nessas funcoes, estamos falando da lista/menu */
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
