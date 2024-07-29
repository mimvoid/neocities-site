const hWrapper = document.querySelector('.wrapper')

const header = `
<div class="header">
  <div class="tab">
    <a href="/">
      <i class="fa-regular fa-fw fa-folder-open"></i>
      <p>mimvoid's little corner</p>
    </a>
  </div>
  <div class="actions">
    <a href="/">
      <i class="fa fa-fw fa-minus"></i>
    </a>
    <a href="/">
      <i class="fa-regular fa-fw fa-window-restore"></i>
    </a>
    <a href="https://neocities.org/">
      <i class="fa fa-fw fa-xmark"></i>
    </a>
  </div>
</div>
`
hWrapper.insertAdjacentHTML('beforebegin', header);
