export default function outsideClick(element, events, callback) {
  /**o element faz referencia ao this(lista/menu), events aos eventos do user(touchstart e click) e a callback eh a funcao que remove a classe active */
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    /**verifica se o click ou touch(event) do user esta sendo no elemento(lista/this), se for fora, nao vai conter(false) e vai realizar o callback para remover a classe active do elemento */
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
