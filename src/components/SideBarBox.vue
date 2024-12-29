<template>
  <router-link :to="linkHref" :style="{textDecoration: 'none' }"
               :class="['side-bar-box', { clicked: isActive }]"
               @click="handleClick">
    <img loading="lazy" alt="" :src="imgSrc" class="img"/>
    <div class="side-bar-text">{{ linkText}}</div>
  </router-link>
</template>

<script>
export default {
  name: 'SideBarBox',
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    linkHref: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    handleClick() {
      this.$emit('box-click');
    },
  },
};
</script>

<style>
a {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Use inherited color from parent or define your own */
}
a:visited {
  color: inherit; /* Ensure visited links retain the same color */
}
a:active {
  color: inherit; /* Ensure active links retain the same color */
}

.side-bar-box {
  display:flex;
  margin-top: 8px;
  gap: 12px;
  white-space: nowrap;
  padding: 8px 12px;
  border-radius: 12px;
}
@media (max-width: 991px) {
  .side-bar-box{
    white-space: initial;
  }
}

.side-bar-box:hover {
  background-color: #f0f2f5;
}

.img {
  aspect-ratio: 1;
  object-fit: none;
  object-position: center;
  width: 24px;
}
.side-bar-text {
  font-feature-settings: "dlig" on;
  font-family: Inter, sans-serif;
}
</style>
