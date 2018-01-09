export function contactLoad() {

  class Contact{
    constructor(name, phoneNumber) {
      this.name = name;
      this.phoneNumber = phoneNumber;
    }
  }

  const content = document.querySelector('#content');

  const contacts = [
    new Contact("dude", 394353544),
    new Contact("brian", 4534563544),
    new Contact("dingus", 424563564),
    new Contact("woybow", 5036214553)
  ]

  let list = document.createElement('ul');

  contacts.forEach(function(contact){
    let listItem = document.createElement('li');
    listItem.textContent = `${contact.name}.......$${contact.phoneNumber}.00`
    list.appendChild(listItem);
  })

  content.appendChild(list);
  console.log('contacts');
}
