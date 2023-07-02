<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["aboutMe"]),
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="~/static/profile.jpg" class="rounded-lg w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ bio.bio }}
      </p>
      <p  class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        ">
        🚀 Languages, Frameworks, and Tools that I am comfortable with and will be learning:
      </p>
      <div class="flex justify-center items-center flex-wrap sm:w-full md:justify-center">
        <a href="https://www.php.net/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/php.png"/></a>
        <a href="https://laravel.com/" target="_blank"> <img src="https://img.icons8.com/fluency/48/000000/laravel.png"/></a>
        <a href="https://vuejs.org/" target="_blank"><img src="https://user-images.githubusercontent.com/74038190/212257463-4d082cb4-7483-4eaf-bc25-6dde2628aabd.gif" style="width: 50px; height: 50px;"/></a>
        <a href="https://pinia.vuejs.org/" target="_blank"> <img src="https://pinia.vuejs.org/logo.svg"  style="width: 60px; height: 60px;"/> </a>
        <a href="https://git-scm.com/" target="_blank"> <img src="https://user-images.githubusercontent.com/74038190/212281775-b468df30-4edc-4bf8-a4ee-f52e1aaddc86.gif" style="width: 60px; height: 30px;" /> </a>
        <a href="https://git-scm.com/" target="_blank"> <img src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" style="width: 70px; height: 70px;" /> </a>
        <a href="https://www.linux.org/" target="_blank"> <img src="https://img.icons8.com/color/48/null/linux--v1.png"/> </a>
        <a href="https://www.nginx.com/" target="_blank"> <img src="https://img.icons8.com/color/48/null/nginx.png"/> </a>
        <a style="padding-right:8px;" href="https://www.mysql.com/" target="_blank"> <img src="https://img.icons8.com/fluent/50/000000/mysql-logo.png"/> </a>
        <a href="https://www.linux.org/" target="_blank"> <img src="https://user-images.githubusercontent.com/74038190/238200433-3fb2cdf6-8920-462e-87a4-95af376418aa.gif" style="width: 70px; height: 70px;"/> </a>
      </div>
    </div>
  </div>
</template>
