/*! For license information please see leaflet-map.init.js.LICENSE.txt */
!function(){var e=L.map("leaflet-map").setView([51.505,-.09],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(e);var a=L.map("leaflet-map-marker").setView([51.505,-.09],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(a),L.marker([51.5,-.09]).addTo(a),L.circle([51.508,-.11],{color:"#34c38f",fillColor:"#34c38f",fillOpacity:.5,radius:500}).addTo(a),L.polygon([[51.509,-.08],[51.503,-.06],[51.51,-.047]],{color:"#776acf",fillColor:"#776acf"}).addTo(a);var o=L.map("leaflet-map-popup").setView([51.505,-.09],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(o),L.marker([51.5,-.09]).addTo(o).bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup(),L.circle([51.508,-.11],500,{color:"#f46a6a",fillColor:"#f46a6a",fillOpacity:.5}).addTo(o).bindPopup("I am a circle."),L.polygon([[51.509,-.08],[51.503,-.06],[51.51,-.047]],{color:"#776acf",fillColor:"#776acf"}).addTo(o).bindPopup("I am a polygon."),L.popup();var t=L.map("leaflet-map-custom-icons").setView([51.5,-.09],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);var r=new(L.Icon.extend({options:{iconSize:[45,95],iconAnchor:[22,94],popupAnchor:[-3,-76]}}))({iconUrl:"assets/images/logo.svg"});L.marker([51.5,-.09],{icon:r}).addTo(t);var i=L.map("leaflet-map-interactive-map").setView([37.8,-96],4);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/light-v9",tileSize:512,zoomOffset:-1}).addTo(i),L.geoJson(statesData,{style:function(e){return{weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7,fillColor:(a=e.properties.density,a>1e3?"#776acf":a>500?"#1A98DF":a>200?"#2FA1E2":a>100?"#42AAE5":a>50?"#53B2E7":a>20?"#63B9E9":a>10?"#71BFEB":"#7EC5ED")};var a}}).addTo(i);var p=L.layerGroup();L.marker([39.61,-105.02]).bindPopup("This is Littleton, CO.").addTo(p),L.marker([39.74,-104.99]).bindPopup("This is Denver, CO.").addTo(p),L.marker([39.73,-104.8]).bindPopup("This is Aurora, CO.").addTo(p),L.marker([39.77,-105.23]).bindPopup("This is Golden, CO.").addTo(p);var s='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',m="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",c=L.tileLayer(m,{id:"mapbox/light-v9",tileSize:512,zoomOffset:-1,attribution:s}),l=L.tileLayer(m,{id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,attribution:s}),n=L.map("leaflet-map-group-control",{center:[39.73,-104.99],zoom:10,layers:[l,p]}),d={Grayscale:c,Streets:l},y={Cities:p};L.control.layers(d,y).addTo(n)}();