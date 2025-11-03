<script setup>
import { ref } from "vue";

const container = ref(null);

const props = defineProps({
     model: String,
     width: {
          type: Number,
          default: 300,
     },
     height: {
          type: Number,
          default: 300,
     }
})

</script>

<template>
     <svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve" :width = "props.width" :height = "props.height" ref="container">
          <g id="bit">
               <rect x="106.7" y="262.1" fill="#FFDEC2" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="262.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="262.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="262.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="262.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="262.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="262.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="262.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="256.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="256.9" fill="#FFB77A" width="5.1" height="5.2"></rect>
               <rect x="258.7" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="253.6" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="251.7" fill="#FFEEE0" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="251.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="251.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="251.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="258.7" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="253.6" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="246.5" fill="#FFFBF8" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="246.5" fill="#5CC203" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="246.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="246.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="246.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="246.5" fill="#B4E38B" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="246.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="246.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="132" y="246.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="127" y="246.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="246.5" fill="#FCB472" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="246.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="258.7" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="253.6" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="208" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="203" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="241.3" fill="#FFE7D3" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="241.3" fill="#ACDF7F" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="241.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="241.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="241.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="241.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="241.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="241.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="241.3" fill="#9DBB2F" width="5.1" height="5.2"></rect>
               <rect x="132" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="127" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="241.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="258.7" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="253.6" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="208" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="203" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="132" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="127" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="236.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="236.1" fill="#88BD20" width="5.1" height="5.2"></rect>
               <rect x="56" y="236.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="236.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="253.6" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="208" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="203" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="132" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="127" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="230.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="230.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="230.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="253.6" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="225.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="225.7" fill="#FFDE69" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="225.7" fill="#FFC476" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="132" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="127" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="225.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="225.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="225.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="225.7" fill="#F9FDF7" width="5.1" height="5.2"></rect>
               <rect x="253.6" y="220.5" fill="#FFE067" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="220.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="220.5" fill="#FFC96E" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="132" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="127" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="220.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="220.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="220.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="220.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="215.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="215.3" fill="#FFDF61" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="132" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="127" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="215.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="215.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="215.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="215.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="210.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="210.1" fill="#FFD569" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="210.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="210.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="210.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="210.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="204.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="204.9" fill="#FFDF61" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="204.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="204.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="204.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="204.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="204.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="199.7" fill="#FFFCF2" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="199.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="199.7" fill="#FFD269" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="199.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="199.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="199.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="199.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="199.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="199.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="199.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="199.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="51" y="199.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="199.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="199.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="194.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="194.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="194.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="194.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="194.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="194.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="194.5" fill="#90BC26" width="5.1" height="5.2"></rect>
               <rect x="51" y="194.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="194.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="194.5" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="189.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="189.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="189.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="189.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="189.3" fill="#CEB751" width="5.1" height="5.2"></rect>
               <rect x="51" y="189.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="189.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="189.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="35.8" y="189.3" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="184.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="184.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="184.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="56" y="184.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="51" y="184.1" fill="#6EF407" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="184.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="184.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="35.8" y="184.1" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="178.9" fill="#EDF8E3" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="178.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="178.9" fill="#F8D85B" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="178.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="178.9" fill="#FCBC6F" width="5.1" height="5.2"></rect>
               <rect x="51" y="178.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="178.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="178.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="35.8" y="178.9" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="173.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="173.7" fill="#5AC100" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="173.7" fill="#EFDC57" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="173.7" fill="#9E7C1A" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="173.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="173.7" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="173.7" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="173.7" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="168.5" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="168.5" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="168.5" fill="#6CF702" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="168.5" fill="#805D04" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="168.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="168.5" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="168.5" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="168.5" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="35.8" y="168.5" fill="#A2FA5F" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="163.3" fill="#B0FB77" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="163.3" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="163.3" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="163.3" fill="#805D04" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="163.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="163.3" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="163.3" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="163.3" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="35.8" y="163.3" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="158.1" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="158.1" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="158.1" fill="#79F509" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="158.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="158.1" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="158.1" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="158.1" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="35.8" y="158.1" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="152.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="152.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="152.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="152.9" fill="#EECE54" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="152.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="152.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="152.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="152.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="35.8" y="152.9" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="147.7" fill="#7DF81F" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="147.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="147.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="147.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="147.7" fill="#E6C54E" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="147.7" fill="#825F05" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="147.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="147.7" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="45.9" y="147.7" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="40.8" y="147.7" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="142.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="142.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="142.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="142.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="142.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="142.5" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="137.3" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="137.3" fill="#C7A637" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="137.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="137.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="137.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="137.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="137.3" fill="#866308" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="137.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="51" y="137.3" fill="#6BF800" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="132.1" fill="#886610" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="208" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="203" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="132.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="132.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="132.1" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="132.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="208" y="126.9" fill="#785601" width="5.1" height="5.2"></rect>
               <rect x="203" y="126.9" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="126.9" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="126.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="126.9" fill="#FFDC61" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="126.9" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="126.9" fill="#FFB573" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="126.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="126.9" fill="#FFE373" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="121.7" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="121.7" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="121.7" fill="#9E720A" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="121.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="121.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="208" y="121.7" fill="#2E2100" width="5.1" height="5.2"></rect>
               <rect x="203" y="121.7" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="121.7" fill="#030200" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="121.7" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="121.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="121.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="121.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="121.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="121.7" fill="#FFBC70" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="121.7" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="121.7" fill="#FFB673" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="121.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="56" y="121.7" fill="#FFEEAA" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="116.5" fill="#FFFAE6" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="116.5" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="116.5" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="116.5" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="116.5" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="116.5" fill="#422E00" width="5.1" height="5.2"></rect>
               <rect x="208" y="116.5" fill="#1F1600" width="5.1" height="5.2"></rect>
               <rect x="203" y="116.5" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="116.5" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="116.5" fill="#4F3900" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="116.5" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="116.5" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="116.5" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="116.5" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="116.5" fill="#FFC56C" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="116.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="116.5" fill="#FFB474" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="116.5" fill="#E8C84F" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="116.5" fill="#DEBD48" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="116.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="111.3" fill="#CBA653" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="111.3" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="111.3" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="111.3" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="111.3" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="208" y="111.3" fill="#533B00" width="5.1" height="5.2"></rect>
               <rect x="203" y="111.3" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="111.3" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="111.3" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="111.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="111.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="111.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="111.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="111.3" fill="#B7952C" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="111.3" fill="#FFD266" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="111.3" fill="#906F12" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="111.3" fill="#423001" width="5.1" height="5.2"></rect>
               <rect x="132" y="111.3" width="5.1" height="5.2"></rect>
               <rect x="127" y="111.3" fill="#FFC46C" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="111.3" fill="#BD9C30" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="111.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="111.3" fill="#A78420" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="111.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="106.1" fill="#FBF8F3" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="106.1" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="106.1" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="106.1" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="106.1" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="208" y="106.1" fill="#020100" width="5.1" height="5.2"></rect>
               <rect x="203" y="106.1" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="106.1" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="106.1" fill="#A16F00" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="106.1" fill="#916804" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="106.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="106.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="106.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="106.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="106.1" fill="#9A7817" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="106.1" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="132" y="106.1" fill="#8B711F" width="5.1" height="5.2"></rect>
               <rect x="127" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="106.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="106.1" fill="#FFE478" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="100.9" fill="#FFFFFF" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="208" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="203" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="100.9" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="100.9" fill="#A97602" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="100.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="100.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="100.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="100.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="100.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="100.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="100.9" fill="#ECA333" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="100.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="100.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="100.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="100.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="95.7" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="95.7" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="95.7" fill="#B88514" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="95.7" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="208" y="95.7" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="203" y="95.7" fill="#B27B00" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="95.7" fill="#B88208" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="95.7" fill="#F5D254" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="95.7" fill="#BB992E" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="95.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="95.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="95.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="95.7" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="95.7" fill="#BE5E00" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="95.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="95.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="95.7" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="95.7" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="95.7" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="95.7" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="95.7" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="95.7" fill="#F2CBAB" width="5.1" height="5.2"></rect>
               <rect x="192.8" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="90.5" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="90.5" fill="#FFFFFF" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="90.5" fill="#FFFFFF" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="90.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="90.5" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="90.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="90.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="90.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="90.5" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="90.5" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="90.5" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="90.5" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="90.5" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="90.5" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="85.3" fill="#825F05" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="85.3" fill="#BFAE83" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="85.3" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="85.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="85.3" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="85.3" fill="#FD8008" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="85.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="85.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="85.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="85.3" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="85.3" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="85.3" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="85.3" fill="#E4710F" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="85.3" fill="#E57311" width="5.1" height="5.2"></rect>
               <rect x="61.1" y="85.3" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="80.1" fill="#FFE682" width="5.1" height="5.2"></rect>
               <rect x="187.8" y="80.1" fill="#FFF3C3" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="132" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="80.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="80.1" fill="#DC6602" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="80.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="80.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="80.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="80.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="80.1" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="80.1" fill="#DE6705" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="80.1" fill="#E47807" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="80.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="80.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="66.2" y="80.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="182.7" y="74.9" fill="#FFEB9B" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="74.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="74.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="74.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="74.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="74.9" fill="#E18018" width="5.1" height="5.2"></rect>
               <rect x="132" y="74.9" fill="#D86100" width="5.1" height="5.2"></rect>
               <rect x="127" y="74.9" fill="#E87008" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="74.9" fill="#F87F08" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="74.9" fill="#DE6704" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="74.9" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="71.2" y="74.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="69.7" fill="#FFE685" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="69.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="69.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="69.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="69.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="213.1" y="69.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="69.7" fill="#FFF3C5" width="5.1" height="5.2"></rect>
               <rect x="167.5" y="69.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="162.4" y="69.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="157.4" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="69.7" fill="#B76B04" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="69.7" fill="#EE7C08" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="69.7" fill="#EE7C08" width="5.1" height="5.2"></rect>
               <rect x="132" y="69.7" fill="#BF6D05" width="5.1" height="5.2"></rect>
               <rect x="127" y="69.7" fill="#7C5901" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="69.7" fill="#E27807" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="76.3" y="69.7" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="64.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="64.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="64.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="64.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="64.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="218.2" y="64.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="152.3" y="64.5" fill="#FF9633" width="5.1" height="5.2"></rect>
               <rect x="147.2" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="142.2" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="137.1" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="132" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="127" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="64.5" fill="#A66503" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="64.5" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="248.6" y="59.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="59.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="59.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="59.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="59.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="223.2" y="59.3" fill="#FFDF62" width="5.1" height="5.2"></rect>
               <rect x="203" y="59.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="59.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="127" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="59.3" fill="#FB7F08" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="59.3" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="81.4" y="59.3" fill="#FFF3E7" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="228.3" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="54.1" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="121.9" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="86.4" y="54.1" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="243.5" y="48.9" fill="#FFEFAF" width="5.1" height="5.2"></rect>
               <rect x="238.4" y="48.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="233.4" y="48.9" fill="#FFE684" width="5.1" height="5.2"></rect>
               <rect x="208" y="48.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="48.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="48.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="48.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="48.9" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="116.8" y="48.9" fill="#FFDFC1" width="5.1" height="5.2"></rect>
               <rect x="111.8" y="48.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="106.7" y="48.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="101.6" y="48.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="96.6" y="48.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="91.5" y="48.9" fill="#FF8109" width="5.1" height="5.2"></rect>
               <rect x="208" y="43.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="43.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="43.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="177.6" y="43.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="172.6" y="43.7" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="38.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="38.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="38.5" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="208" y="33.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="203" y="33.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
               <rect x="197.9" y="33.3" fill="#FFDF60" width="5.1" height="5.2"></rect>
          </g>
          <g id="hifi">
               <g>
                    <path fill="#5AC100" d="M12.2,185.5c-1.4,2.5-2.4,5.2-2.8,8.1c-0.7,5.9,2.2,12.6,7.9,14.4c-2,3.4-3,7.6-1.8,11.4
			c1.2,3.8,5.1,6.8,9,6.1c-3.2,2.7-4.7,7.2-4,11.3s3.8,7.7,7.7,9.2c-3,4.6-0.8,11.1,3.4,14.6c2.6,2.1,6,3.4,9.3,3
			c3.3-0.4,6.5-2.5,7.7-5.6c0.7-1.8,0.7-3.7,0.8-5.6c0.3-16.6,0.7-33.3,0.5-49.9C36.7,197.9,24,192.5,12.2,185.5z"></path>
               </g>
               <g>
                    <path fill="#6BF800" d="M46,142.9L43.5,132c-4.1-2.1-9.5-1.2-12.7,2.1s-3.8,8.8-1.6,12.8c-6-0.7-12.2,1.8-16.1,6.4
			s-5.1,11.2-3.3,17c1.1,3.6,3.9,7.2,7.7,7.6c-1.9,2.4-3.8,4.9-5.3,7.5c11.8,7,24.5,12.5,37.7,16.8C49.7,182.5,48.7,162.6,46,142.9z
			"></path>
               </g>
               <g>
                    <path fill="#5AC100"
                         d="M116.9,273c3,4.8,11,5.8,14.4,1.2c0.4,5.3,6.2,9.6,11.4,8.4s8.6-7.5,6.7-12.5c5.3,5.2,13.6,7.1,20.6,4.8
			c7-2.3,12.5-8.8,13.7-16.1c0.5-3.3,0.1-7.1-2.3-9.5c-1.3-1.3-2.9-2.1-4.6-2.8c-12.4-5.3-26.1-7.4-39.5-6c-1.4,0.1-2.9,0.4-4.1,1.2
			c-1.4,1-2.1,2.7-2.6,4.4c-1,3.7-1.2,7.5-0.6,11.3c1.2-2.7,0.6-6-1.4-8.1c1,1-8.9,8.9-10,10.1C115.3,262.7,114.2,268.8,116.9,273z">
                    </path>
               </g>
               <g>
                    <path fill="#5AC100" d="M237.3,178.1c3.7,4.2,8.7,7.1,11.9,11.7c0.9,1.3,1.7,2.7,2.8,3.8c1.6,1.4,3.7,2,5.8,2.4
			c3.1,0.5,6.4,0.6,9.5,0.2c2.6-0.3,5.5-1.1,6.9-3.3c1.7-2.7,0.7-6.2-0.4-9.2c2.7-1,4.5-3.6,5-6.4c-15.3-1.2-30.5-4.1-45.5-8.2
			C233.6,172.3,235.1,175.7,237.3,178.1z"></path>
               </g>
               <g>
                    <path fill="#6BF800" d="M278.7,173c-1.3-4.1-5.4-7-9.7-7.5c4.3,0.5,5-22.4-8.4-18c-4.6,1.5-8,6.5-12,9.2c-4,2.6-9.8,2.7-13.1,6.3
			c-1.6,1.7-2.2,3.9-2,6.1c15,4.1,30.2,7,45.5,8.2C279.2,175.9,279.1,174.4,278.7,173z"></path>
               </g>
               <g>
                    <path fill="#FFB474" d="M60.5,201.7c-8.4-4.2-16.8-9.1-24.4-15.3c1.9,44.9,8.6,78.8,13.9,99.3c1.2,4.7,5.5,8,10.3,8h31.9
			c3.7,0,7.1-1.9,9-5c7.2-11.5,26-28.7,73.4-28.7c45.4,0,70.4,15.7,82.7,27.1c3.2,3,7.9,3.7,11.8,1.8c6.1-2.9,11.6-5.9,16.5-8.7
			c4.1-2.4,6.1-7.2,5-11.7c-1.6-6.6-3.3-13-5-19.3C208.1,250.2,131.4,236.8,60.5,201.7z"></path>
               </g>
               <g>
                    <path fill="#FFDF60" d="M240.9,132.5c-3.9-7.5-7.7-14.5-11.5-21.1c-2.4-4.2-4.8-8.2-7.2-12.1c-3-4.8-5.9-9.4-8.8-13.6
			c-5-7.4-9.7-14-14.2-19.8c-7.5-9.8-19.7-14.9-32-13.2C118.7,59.4,80.7,75,55.3,88.5C44.9,94,38,104.6,37.2,116.4
			c-1.8,25.6-2,49-1.1,70c7.6,6.2,16,11.1,24.4,15.3c70.9,35.1,147.5,48.4,225.1,47.6c-9.4-34.6-20.5-64.6-32-90.2
			C249.4,149.7,245.1,140.8,240.9,132.5z"></path>
               </g>
               <g>
                    <path fill="#FFDF60" d="M256.7,107.8l2.1,13.4c0.7,4.6-2.4,8.9-7,9.6l-6.6,1c2.2,3.7,5.1,6.8,8.9,8.9c6.3,3.4,12.9,1.6,18.2-2.5
			c0.1-1,0.2-2.1,0.2-3.3C272.5,118.6,263.3,111.1,256.7,107.8z"></path>
               </g>
               <g>
                    <path fill="#FFB474" d="M254.1,140.7c-3.8-2.1-6.7-5.2-8.9-8.9l-4.4,0.7c4.3,8.3,8.6,17.1,12.8,26.6c7.2-1.9,17.3-7,18.7-20.9
			C266.9,142.3,260.4,144.2,254.1,140.7z"></path>
               </g>
               <g>
                    <path fill="#FFB474" d="M124.1,127c0.6,3,2,5.8,4,8.2c-8.5-1.4-15-5.7-16.2-12c-1.6-7.7,5.2-15.9,15.9-20.4
			c-0.2,0.6-0.2,1.2-0.1,1.9c0.3,1.4,1.4,2.5,2.9,3.2C125.3,113.5,122.7,120.3,124.1,127z"></path>
               </g>
               <g>
                    <path d="M135.2,103.9c-2.2-0.5-3.8-2.5-4.4-4.7c-1.5,1-2.6,2.3-3,3.6c-0.2,0.6-0.2,1.2-0.1,1.9c0.3,1.4,1.4,2.5,2.9,3.2
			c1.8,0.8,4.4,1.1,7,0.5c2.7-0.6,5-1.9,6.4-3.4C141,104.9,138.4,104.7,135.2,103.9z"></path>
               </g>
               <g>
                    <path fill="#7C5901" d="M135.2,103.9c3.2,0.8,5.8,1,8.7,1c1-1.2,1.5-2.6,1.3-3.9c-0.1-0.6-0.4-1.2-0.8-1.6
			c-0.2-0.3-0.4-0.5-0.7-0.7c-1.8-1.4-5-2-8.4-1.3c-1.7,0.4-3.3,1-4.5,1.8C131.4,101.4,133,103.4,135.2,103.9z"></path>
               </g>
               <g>
                    <path fill="#FFB474"
                         d="M162.1,104.6c6.5,0.6,9.5,10.3,4.1,14.2C165.4,113.4,164.1,109.6,162.1,104.6L162.1,104.6z">
                    </path>
               </g>
               <g>
                    <g>
                         <circle fill="#FFFFFF" cx="167.3" cy="79.2" r="8.4"></circle>
                    </g>
                    <g>
                         <path fill="#7C5901" d="M167.3,89.7c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5s10.5,4.7,10.5,10.5S173.1,89.7,167.3,89.7z
				 M167.3,72.9c-3.5,0-6.3,2.8-6.3,6.3s2.8,6.3,6.3,6.3s6.3-2.8,6.3-6.3S170.8,72.9,167.3,72.9z"></path>
                    </g>
               </g>
               <g>
                    <path fill="#7C5901" d="M67.5,110.1c3.9-5,10.2-7.8,16.5-7.4c0.5,0.1,1.9,0.2,2.3,0.3c0.5,0.1,1.8,0.4,2.3,0.5
			c1,0.3,1.9,0.7,2.9,1c-1.5-0.1-3-0.3-4.5-0.2c-0.4,0-1.1,0-1.5,0.1c-5.3,0.5-10.4,3.8-12.5,8.7C73,113.2,67.5,110.1,67.5,110.1
			L67.5,110.1z"></path>
               </g>
               <g>
                    <path fill="#D86100" d="M78.4,64c-10.9,6.7-25,12.7-35.1,6.5c-1.3,1.8-1.9,4.1-1.4,6.4l2.7,12.7c0.5,2.2,1.8,4.1,3.7,5.2l4.3,2.6
			c2,1.2,4.5,1.5,6.7,0.7l21.9-7.6c1.3-0.4,2.4-1.2,3.3-2.2l25.6-28.5C99.1,56.4,86.6,58.3,78.4,64z"></path>
               </g>
               <g>
                    <path fill="#FF8109"
                         d="M113.3,57.3l23.2-10L113.7,30c-1.3-1-2.9-1.6-4.5-1.6l-24.5-0.9c-2.4-0.1-4.7,0.9-6.3,2.7L43.7,69.9
			c-0.1,0.2-0.3,0.3-0.4,0.5c10.1,6.2,24.3,0.2,35.1-6.5c8.1-5.7,20.7-7.6,31.8-4.3l0.3-0.4C111.3,58.4,112.2,57.8,113.3,57.3z"></path>
               </g>
               <g>
                    <path fill="#7C5901" d="M88.8,36.4c5.1-1,10.7,2.9,11.6,8C96.8,40.9,93.3,38.5,88.8,36.4L88.8,36.4z">
                    </path>
               </g>
               <g>
                    <path fill="#7C5901"
                         d="M76.2,45.5c-4.2,8-9.2,16.2-8.3,25.6C63.8,62.3,69.6,51.5,76.2,45.5L76.2,45.5z"></path>
               </g>
               <g>
                    <path fill="#7C5901" d="M52.7,154.9c7-1.8,14-3.5,21-5.1c3.7-1.1,8.1,0.1,10.8,3c1.1,1.2,2.3,3.2,3.3,4.5l3.1,4.4l1.5,2.2
			c4,5.1,3.6,11.3-1,15.8c-5.4,6-11,12-16.6,17.8c5-6.4,10.1-12.7,15.3-18.9c1.7-1.8,3-4.1,3.1-6.6c0.2-2.5-0.9-4.9-2.5-6.8
			l-1.5-2.2c-1.8-2.5-4.2-6.4-6.1-8.7c-2.2-2.5-5.7-3.5-9-2.8C66.9,152.8,59.8,153.9,52.7,154.9L52.7,154.9z"></path>
               </g>
               <g>
                    <path fill="#B27B00" d="M253.6,87.9c-0.7-4.6-5-7.7-9.6-7l-30.7,4.8L191,89.2c0.8,1.9,2,3.7,3.1,5.2
			c18.3,15.9,40.9,23.3,64.4,25.1l-1.8-11.7L253.6,87.9z"></path>
               </g>
               <g>
                    <path fill="#7C5901" d="M191,89.2l-9.4,1.5c-4.6,0.7-7.7,5-7,9.6l5.2,33.3c0.7,4.6,5,7.7,9.6,7l51.4-8l11-1.7c4.6-0.7,7.7-5,7-9.6
			l-0.3-1.7c-23.6-1.8-46.2-9.2-64.4-25.1C193,92.9,191.9,91.1,191,89.2z"></path>
               </g>
               <g>
                    <circle fill="#7C5901" cx="216.7" cy="110.8" r="12.6"></circle>
                    <path d="M216.7,125.5c-7.1,0-13.4-5.2-14.5-12.5c-1.3-8,4.2-15.6,12.3-16.8c8-1.3,15.6,4.3,16.8,12.3l0,0
			c1.3,8-4.2,15.6-12.3,16.8C218.2,125.4,217.5,125.5,216.7,125.5z M216.8,100.2c-0.5,0-1.1,0-1.6,0.1c-5.7,0.9-9.7,6.3-8.8,12
			c0.4,2.8,1.9,5.2,4.2,6.9c2.3,1.7,5,2.3,7.8,1.9c5.7-0.9,9.7-6.3,8.8-12l0,0c-0.4-2.8-1.9-5.2-4.2-6.9
			C221.1,100.9,219,100.2,216.8,100.2z"></path>
               </g>
               <g>
                    <circle cx="216.7" cy="110.8" r="8.3"></circle>
               </g>
               <g>
                    <ellipse transform="matrix(0.988 -0.1546 0.1546 0.988 -11.1151 37.8821)" fill="#FFFFFF" cx="238"
                         cy="90.4" rx="5.3" ry="3.5"></ellipse>
               </g>
               <g>
                    <path fill="#FF8109" d="M90,88.1c18.2-25,43.5-36.8,71-30.6l1.6-2.4c1-1.5,0.7-3.4-0.6-4.6c-3-2.7-10-6.7-24.1-6
			c-19.5,1-40.7,10-43.8,11.4c-0.3,0.1-0.5,0.3-0.7,0.4c-2.6,2-18.7,15.1-17,31.5C82.3,89.3,88,90.8,90,88.1z"></path>
               </g>
               <g>
                    <path fill="#D86100" d="M90,88.1c-2,2.6-7.6,1.1-13.7-0.3c0.2,1.7,0.5,3.4,1.1,5.1c0.4,1.3,1.6,2.2,2.9,2.3l14.3,2
			c2,0.3,3.8-1.2,4-3.2c0.6-6.5,3.9-20,20.3-28.5c16.5-8.6,28.9-4.4,34.1-1.7c1.6,0.8,3.6,0.3,4.6-1.2l3.4-5.1
			C133.5,51.4,108.2,63.2,90,88.1z"></path>
               </g>
               <g>
                    <path fill="#7C5901" d="M155.1,54.4c-18.9-3.4-42-1.4-54.1,15.3c-3.9,5.3-6.5,11.5-8.3,18c1-6.6,3.2-13.2,7-18.9
			C111.5,50.9,136.2,48.4,155.1,54.4L155.1,54.4z"></path>
               </g>
               <g>
                    <path fill="#FFDF60" d="M186.9,37.7h-3.5c-1.5,0-2.7-1.1-2.8-2.6l-1.1-15.5c-0.1-1.6,1.2-3,2.8-3h5.6c1.6,0,2.9,1.4,2.8,3
			l-1.1,15.5C189.6,36.5,188.4,37.7,186.9,37.7z"></path>
               </g>
               <g>
                    <path fill="#FFDF60" d="M218.3,43.3l-9.2-2.1c-1.4-0.3-2.4-1.7-2.1-3.2l4.8-29.4c0.3-1.6,1.8-2.6,3.4-2.3l13.1,3.1
			c1.6,0.4,2.5,2,2,3.5l-8.8,28.5C221.2,42.8,219.8,43.6,218.3,43.3z"></path>
               </g>
               <g>
                    <path fill="#FFDF60" d="M239.8,66.9l-9-10.9c-0.9-1.1-0.8-2.8,0.2-3.8l29.9-28.3c1.2-1.1,3-1,4.1,0.3l12.5,15.2
			c1,1.2,0.8,3.1-0.5,4l-33.5,24C242.4,68.3,240.8,68.1,239.8,66.9z"></path>
               </g>
          </g>
     </svg>
</template>

<style scoped lang="scss"></style>
