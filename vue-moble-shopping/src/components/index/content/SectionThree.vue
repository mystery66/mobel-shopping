<template>
  <div class="sectionthree">
    <div class="sectionthree-title">精品推荐</div>
    <ul class="section4-list">
      <li >
        <router-link :to="{name:'详情页'}">
          <img >
          <p>{{k.intro}}</p>
        </router-link>
        <h3>{{k.title}}</h3>
        <span>$ {{k.price}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
