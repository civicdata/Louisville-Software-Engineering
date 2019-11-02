<template>
<div class="container">
    <div class="row justify-content-center">
        <!-- <div class="col-xs-12">
            <logo />

        </div> -->
        <div class="col-xs-12">
            <h1 class="title text-center mt-5 logo-animation">Louisville Software Engineering</h1>
        </div>
        <div class="col-xs-12">
            <h2 class="subtitle text-center mt-2">site for the LSE networking group. pull requests are necessary, obviously.</h2>
            <h2 class="subtitle text-center">i mean, y'all cannot just let this incarnation live.</h2>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col">
            <div class="googleCalendar">
                <iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y2l2aWNkYXRhYWxsaWFuY2Uub3JnX3E1Mjhsa3M1aGtsajBmYXFyZ2x2djFubm1vQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23EF6C00&amp;showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showNav=1&amp;showPrint=0" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>

            <div class="links text-center">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Logo from '~/components/lselogo.vue'

export default {
  components: {
    Logo
  }
}
</script>
