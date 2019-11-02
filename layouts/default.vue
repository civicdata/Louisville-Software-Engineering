<template>
  <div>
    <nuxt />
  </div>
</template>

<style>


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}



/* Responsive iFrame for craptastic google cal */
.googleCalendar{
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 50%;
}

.googleCalendar iframe{

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.links{
    margin-bottom: 5em;
}
</style>
