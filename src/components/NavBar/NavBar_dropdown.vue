<template>
  <div id="navbar_dropdown">
    <div id="list_top">
      <div>
        <ul>
          <li>
            a title
          </li>
          <li>
            <a href="#">a city</a>
          </li>
          <li>
            <a href="#">a city</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            a title
          </li>
          <li>
            <a href="#">a city</a>
          </li>
          <li>
            <a href="#">a city</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            a title
          </li>
          <li>
            <a href="#">a city</a>
          </li>
          <li>
            <a href="#">a city</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="list_bottom">
      <p>
        Don't see your city? No problem,
        <a href='/how-it-works '>get your offer</a>

      </p>
    </div>
  </div>
</template>
<script>
    export default {
    name: 'navbar_dropdown',
        component: {
        }

    }
</script>
<style scoped>
  #navbar_dropdown, #list_top, #list_bottom {
    display: flex;
    background-color: lightgray;
    font-size: 1.5rem;
  }

  #navbar_dropdown {
    flex-direction: column;
    position:absolute;
    width:100%
  }

    #navbar_dropdown * {
      flex-grow: 1;
    }

  #list_top {
    flex-direction: row;
    justify-content: center;
  }

  ul {
    list-style-type: none;
  }
</style>
