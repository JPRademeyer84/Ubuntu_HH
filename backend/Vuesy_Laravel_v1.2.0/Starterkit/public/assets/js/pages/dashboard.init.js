/*! For license information please see dashboard.init.js.LICENSE.txt */
!function(){function e(e){if(null!==document.getElementById(e)){var t=document.getElementById(e).getAttribute("data-colors");return(t=JSON.parse(t)).map((function(e){var t=e.replace(" ","");if(-1===t.indexOf(",")){var r=getComputedStyle(document.documentElement).getPropertyValue(t);return r||t}var a=e.split(",");if(2==a.length){var o=getComputedStyle(document.documentElement).getPropertyValue(a[0]);return o="rgba("+o+","+a[1]+")"}return t}))}}var t={series:[{data:[2,36,22,30,12,38]}],chart:{type:"line",width:130,height:55,sparkline:{enabled:!0}},colors:e("mini-1"),stroke:{curve:"smooth",width:2.5},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};new ApexCharts(document.querySelector("#mini-1"),t).render(),t={chart:{height:159,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},series:[{name:"Previous",data:[55,36,61,40,58]}],colors:e("chart-area"),legend:{show:!1},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},yaxis:{show:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May"]}},new ApexCharts(document.querySelector("#chart-area"),t).render(),t={chart:{height:410,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{borderRadius:3,horizontal:!1,columnWidth:"64%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},series:[{name:"Net Profit",data:[95,40,73,60,51,37,30]},{name:"Revenue",data:[75,26,53,44,37,26,23]}],colors:e("column_chart"),xaxis:{categories:["Jan","Feb","Mar","Apr","May","June","July"]},grid:{borderColor:"#f1f1f1"},fill:{opacity:1},legend:{show:!1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}},new ApexCharts(document.querySelector("#column_chart"),t).render(),t={chart:{height:287,type:"donut"},plotOptions:{pie:{donut:{size:"75%"}}},dataLabels:{enabled:!1},series:[60,15,8],labels:["Completed","Processing","Cancel"],colors:e("chart-donut"),legend:{show:!1}},new ApexCharts(document.querySelector("#chart-donut"),t).render();var r={series:[{data:[25,66,41,89,63,25,44,12,36,9,54,84]}],chart:{type:"area",width:120,height:40,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e("chart-sparkline1"),tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}};new ApexCharts(document.querySelector("#chart-sparkline1"),r).render(),r={series:[{data:[50,15,35,62,23,56,44,12,36,9,54,23]}],chart:{type:"area",width:120,height:40,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e("chart-sparkline2"),tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-sparkline2"),r).render(),r={series:[{data:[25,35,35,89,63,25,44,12,36,9,54,25]}],chart:{type:"area",width:120,height:40,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e("chart-sparkline3"),tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-sparkline3"),r).render(),r={series:[{data:[50,15,35,34,23,56,65,41,36,41,32,25]}],chart:{type:"area",width:120,height:40,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e("chart-sparkline4"),tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-sparkline4"),r).render(),r={series:[{data:[45,53,24,89,63,60,36,50,36,32,54,63]}],chart:{type:"area",width:120,height:40,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e("chart-sparkline5"),tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-sparkline5"),r).render(),t={series:[{data:[1040,1320,1560,1280,1480]}],chart:{type:"bar",height:234,toolbar:{show:!1}},labels:["Canada","Russia","Brazil","United States","Egypt"],colors:["#776acf"],plotOptions:{bar:{borderRadius:3,horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["Canada","Russia","Brazil","US","Egypt"]}},new ApexCharts(document.querySelector("#sales-countries"),t).render(),new jsVectorMap({map:"world_merc",selector:"#world-map-markers",zoomOnScroll:!1,zoomButtons:!1,opacity:1,regionStyle:{initial:{fill:"#f0f2f3"}},markerStyle:{initial:{fill:"#3cbf87"},selected:{fill:"#3cbf87"}},markers:[{name:"Canada",coords:[56.1304,-106.3468]},{name:"Brazil",coords:[-14.235,-51.9253]},{name:"Egypt",coords:[26.8206,30.8025]},{name:"Russia",coords:[61,105]},{name:"United States",coords:[37.0902,-95.7129]}],lines:[{from:"Canada",to:"Egypt"},{from:"Russia",to:"Egypt"},{from:"Brazil",to:"Egypt"},{from:"United States",to:"Egypt"}],lineStyle:{animation:!0,strokeDasharray:"6 3 6"}}),new Swiper(".swiper-container",{spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{576:{slidesPerView:1,spaceBetween:30},768:{slidesPerView:2,spaceBetween:30},1500:{slidesPerView:2,spaceBetween:30}}})}();