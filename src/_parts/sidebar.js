const body = document.querySelector('.body')

const sidebar = `
<div class="sidebar">
  <nav>
    <div class="box">
      <p><a href="/">Home</a></p>
      <p><a href="/about">About</a></p>
    </div>
    <div class="box">
      <details>
        <summary>Biology</summary>
        <p><a href="/biology/critter-shoutouts">Critter Shoutouts</a></p>
        <p><a href="/biology/flora-shoutouts">Flora Shoutouts</a></p>
        <p><a href="/biology/fungi-shoutouts">Fungi Shoutouts</a></p>
      </details>
      <details>
        <summary>Design</summary>
        <p><a href="/design/my-favorite-fonts">My Favorite Fonts</a></p>
      </details>
    </div>
    <div class="box">
      <p>Guestbook (TBA!)</p>
    </div>
  </nav>
</div>
`

body.insertAdjacentHTML('afterbegin', sidebar);
