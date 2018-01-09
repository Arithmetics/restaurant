export function menuLoad() {

  class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const content = document.querySelector('#content');

  const menuItems = [
    new MenuItem("fish", 39),
    new MenuItem("noodle", 45),
    new MenuItem("cake", 42),
    new MenuItem("snack", 10)
  ]

  let list = document.createElement('ul');

  menuItems.forEach(function(item){
    let listItem = document.createElement('li');
    listItem.textContent = `${item.name}.......$${item.price}.00`
    list.appendChild(listItem);
  })

  content.appendChild(list);
  console.log('menu')
}
