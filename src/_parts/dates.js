const content = document.querySelector('#content')
const dates = `
<hr>
<div class="dates">
  <p>Last updated: ${lastUpdated}</p>
  <p>Created: ${created}</p>
</div>
`
content.insertAdjacentHTML('beforeend', dates);
