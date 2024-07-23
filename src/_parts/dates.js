// Set values when undefined or null
if(typeof(lastUpdated) === "undefined" || lastUpdated === null) {
  lastUpdated = '?'
}

if(typeof(created) === "undefined" || created === null) {
  created = '?'
}

const content = document.querySelector('#content')
const dates = `
<hr>
<div class="dates">
  <p>Last updated: ${lastUpdated}</p>
  <p>Created: ${created}</p>
</div>
`
content.insertAdjacentHTML('beforeend', dates);
