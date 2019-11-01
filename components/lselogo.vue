<template>
  <div class="VueToNuxtLogo">

  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 232.4 232.4" style="enable-background:new 0 0 232.4 232.4;" xml:space="preserve">
  <style type="text/css">
      .st0{fill:#338E74;}
  </style>
  <g>
      <g>
          <path class="st0" d="M190.6,65.2c-23,0-41.7,18.7-41.7,41.7c0,19.3,13.3,36,31.9,40.5l-22.2,22.2l-12.7-12.7l3.7-3.7l-28.3-28.3
              H110V84.6l-8.7-8.7v-11c4-0.7,7.6-2.5,10.4-5.3c3.6-3.6,5.6-8.5,5.6-13.6c0-5.1-2-9.9-5.6-13.6c-3.6-3.6-8.4-5.6-13.6-5.6
              c-5.1,0-10,2-13.6,5.6C81,36,79,40.9,79,46c0,5.1,2,10,5.6,13.6c2.8,2.8,6.4,4.6,10.4,5.3v40.8l-10.8,10.8h-26h-24l-16.2,16.2
              c-1.7-0.8-3.6-1.3-5.4-1.3c-3.2,0-6.4,1.2-8.8,3.7c-2.4,2.4-3.7,5.6-3.7,8.8c0,3.2,1.2,6.4,3.7,8.8c2.4,2.4,5.6,3.7,8.8,3.7
              s6.4-1.2,8.8-3.7l-1-1l1,1c2.4-2.4,3.7-5.7,3.7-8.8c0-2-0.5-4-1.5-5.8l14.4-14.4h22.9H88l7.1-7.1v21.9h23.6l35.5,35.5l-4.4,4.4
              h-42.1c-2.3-9.7-11-17-21.4-17c-12.2,0-22,9.9-22.1,22c0,12.2,9.9,22,22.1,22c11.7,0,21.3-9.3,21.9-20.8h44.2l36.2-36.2
              c0.7,0.1,1.4,0.1,2.1,0.1c23,0,41.7-18.7,41.7-41.7C232.4,83.9,213.7,65.2,190.6,65.2z M19.4,150.8c-1.9,1.9-4.4,2.9-6.9,2.9
              s-5-0.9-6.9-2.9c-1.9-1.9-2.9-4.4-2.9-6.9c0-2.5,1-5,2.9-6.9c1.9-1.9,4.4-2.9,6.9-2.9c2.5,0,5,1,6.9,2.9c1.9,1.9,2.9,4.4,2.9,6.9
              C22.3,146.4,21.4,148.9,19.4,150.8z M95,112.7l-8.2,8.2h-26h-24l-14.9,14.9c-0.2-0.2-0.4-0.5-0.6-0.7c-0.3-0.3-0.7-0.6-1.1-0.9
              l15-15h22.9h27.1l9.7-9.7L95,112.7C95,112.7,95,112.7,95,112.7z M89,55.1c-2.4-2.4-3.8-5.7-3.8-9.1c0-3.4,1.3-6.7,3.8-9.1
              c2.4-2.4,5.7-3.8,9.1-3.8c3.4,0,6.7,1.4,9.1,3.8c2.4,2.5,3.8,5.7,3.8,9.1c0,3.5-1.3,6.7-3.8,9.1l-0.2,0.2
              c-2.4,2.3-5.6,3.6-8.9,3.6C94.7,58.9,91.5,57.6,89,55.1z M86.3,200.3c-9.2,0-16.7-7.5-16.7-16.7c0-9.2,7.5-16.7,16.7-16.7
              c9.2,0,16.7,7.5,16.7,16.7C103,192.7,95.5,200.2,86.3,200.3z M190.6,142.4c-0.7,0-1.4,0-2.1-0.1l-1.3-1.3l-1.1,1.1
              c-17.7-2.2-31-17.3-31-35.2c0-19.6,15.9-35.5,35.5-35.5c19.6,0,35.5,15.9,35.5,35.5C226.1,126.5,210.2,142.4,190.6,142.4z"/>
      </g>
  </g>
  </svg>

  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41b883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495e;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
