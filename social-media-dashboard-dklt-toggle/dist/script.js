"use strict";var darkButton=document.getElementById("dark"),lightButton=document.getElementById("light"),setDarkMode=function(){document.querySelector("body").classList="dark",localStorage.setItem("colorMode","dark")},setLightMode=function(){document.querySelector("body").classList="light",localStorage.setItem("colorMode","light")},setColorFromLocalStorage=function(){return localStorage.getItem("colorMode")},setColorModeFromPreferences=function(){window.matchMedia("(preferes-color-scheme: dark)").matches},loadAndUpdateColor=function(){"dark"==(setColorFromLocalStorage()||setColorModeFromPreferences())?darkButton.click():lightButton.click()},radioButtons=document.querySelectorAll(".toggle__wrapper input");radioButtons.forEach((function(e){e.addEventListener("click",(function(e){darkButton.checked?setDarkMode():setLightMode()}))})),window.matchMedia("(preferes-color-scheme: dark)").addEventListener("change",(function(e){e.matches?darkButton.click():lightButton.click()})),loadAndUpdateColor();
//# sourceMappingURL=script.js.map