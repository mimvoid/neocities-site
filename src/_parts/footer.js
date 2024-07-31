const fWrapper = document.querySelector('.wrapper')

const footer = `
<div class="footer">
  <div class="bar">
    <div class="left">
      <p id="mode">
        <i class="fa fa-compass"></i>
        NORMAL
      </p>
      <p id="source-code">
        <a href="https://github.com/mimvoid/neocities-site">
          <i class="fa fa-code"></i>
          source code
        </a>
      </p>
      <p id="author">mimvoid © 2024</p>
    </div>
    <div class="right">
      <p id="filetype">html</p>
      <p id="credits">
        <a href="/credits">
        credits
        </a>
      </p>
      <p id="top_link">
        <a href="#top">
          <i class="fa fa-caret-up"></i>
          Top
        </a>
      </p>
    </div>
  </div>
</div>
`
fWrapper.insertAdjacentHTML('beforeend', footer);
