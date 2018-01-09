export function pageLoad() {
  const content = document.querySelector('#content');
  let header = document.createElement('h1');
  let subtext = document.createElement('p');
  let image = document.createElement('img');
  header.textContent = "Welcome the Nice Food Spot";
  subtext.textContent = "We make food to eat!";
  image.src = "http://betheme.muffingroupsc.netdna-cdn.com/be/goodfood/wp-content/uploads/2016/06/home_goodfood_flatbox1.jpg";
  content.appendChild(header);
  content.appendChild(subtext);
  content.appendChild(image);
  console.log('page load!')
}
