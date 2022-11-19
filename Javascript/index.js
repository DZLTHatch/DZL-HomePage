const skills = document.getElementById('skills');
const time = document.getElementById('time');
const projects = document.getElementById('projects');

const aboutList = [skills, time, projects];

const tTab = document.getElementById('t-tab');
const sTab = document.getElementById('s-tab');
const pTab = document.getElementById('p-tab');

const tabsList = [tTab, sTab, pTab];

function opentab(id) {
    aboutList.forEach((item) => {item.classList.remove('active-tab');});
    document.getElementById(id).classList.add('active-tab');   

}

function activeTab(id) {
    tabsList.forEach((item) => {item.classList.remove('active-link')});
    document.getElementById(id).classList.add('active-link');
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxjQeXRxw69iB4rh6kb22_yFGMO7Ygi1q3HbWKVzS5KvedfaIzMq-GM09ajn9WRIk3J7w/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })