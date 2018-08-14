<template>
  <process_frame title="There is nothing to it.">
    <process LinkTo="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/value-of-junk-car.png" title="1. Legit offers on junk cars" text="Give us the lowdown on your old junk car to receive an offer instantly. We buy clunkers in all conditions;
                            getting rid of your junk car only takes a few minutes." alt="first-img"></process>
 
    <process LinkTo="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/selling-my-junk-car.png" title="2. Free junk car removal" text="We offer free junk car pick-ups. Nothing beats worry-free, hassle-free, complimentary towing. All you have
                            to do, is be present to hand us the keys and receive your check." alt="second-img"></process>
 
    <process LinkTo="https://dgsecmg9973qw.cloudfront.net/junkmycar/Images/junk-car-removal.png" title="3. On-the-spot payments" text="Once we've given your clunker a once-over, and reviewed your title, we'll pay you straight away—no downtime
                            here." alt="third-img"></process>
  </process_frame>

</template>


<script>
  import process from './Process'
  import process_frame from './Process_frame'
  export default {
   name:'process_main',
   components:{
     process,
     process_frame
   }
  }

</script>
<style scoped>

</style>