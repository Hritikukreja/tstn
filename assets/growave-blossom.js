
//         function updateTime() {
//             const now = new Date();
//             const hours = String(now.getHours()).padStart(2, '0');
//             const minutes = String(now.getMinutes()).padStart(2, '0');
//             document.getElementById('timeText').textContent = hours + ':' + minutes;
//         }
//         updateTime();
//         setInterval(updateTime, 1000);

//         function createSpeedometer(svgId, options) {
//             const value = options.value !== undefined ? options.value : 200;
//             const eMax = options.max !== undefined ? options.max : 240;
//             const step = options.step !== undefined ? options.step : 40;
//             const showValue = options.showValue !== undefined ? options.showValue : true;
//             const showTotalScore = options.showTotalScore !== undefined ? options.showTotalScore : true;
//             const showTrip = options.showTrip !== undefined ? options.showTrip : true;
//             const showHub = options.showHub !== undefined ? options.showHub : false;
//             const showNeedle = options.showNeedle !== undefined ? options.showNeedle : true;
//             const trip = options.trip !== undefined ? options.trip : 12;

//             const svg = document.getElementById(svgId);
//             const max = eMax / step;
//             const currentValue = value / step;
//             
//             const minAngle = options.minAngle;
//             const maxAngle = options.maxAngle;
//             const angleRange = maxAngle - minAngle;
//             const angle = minAngle + (currentValue / max) * angleRange;

//             svg.innerHTML = '';

//             for (let i = 0; i <= max; i++) {
//                 const tickAngle = minAngle + (i / max) * angleRange;
//                 const radians = (tickAngle * Math.PI) / 180;
//                 const r1 = 75;
//                 const r2 = 90;
//                 const x1 = 100 + r1 * Math.cos(radians);
//                 const y1 = 100 + r1 * Math.sin(radians);
//                 const x2 = 100 + r2 * Math.cos(radians);
//                 const y2 = 100 + r2 * Math.sin(radians);

//                 const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

//                 // Tick mark
//                 const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//                 line.setAttribute('x1', x1);
//                 line.setAttribute('y1', y1);
//                 line.setAttribute('x2', x2);
//                 line.setAttribute('y2', y2);
//                 line.setAttribute('stroke', 'white');
//                 line.setAttribute('stroke-width', '1.5');
//                 line.setAttribute('stroke-linecap', 'round');
//                 g.appendChild(line);

//                 const textRadius = 65;
//                 const tx = 100 + textRadius * Math.cos(radians);
//                 const ty = 100 + textRadius * Math.sin(radians);
//                 const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//                 text.setAttribute('x', tx);
//                 text.setAttribute('y', ty);
//                 text.setAttribute('fill', 'white');
//                 text.setAttribute('font-size', '7px');
//                 text.setAttribute('letter-spacing', 'normal');
//                 text.setAttribute('font-weight', 'normal');
//                 text.setAttribute('text-anchor', 'middle');
//                 text.setAttribute('dominant-baseline', 'middle');
//                 text.setAttribute('transform', 'rotate(' + (tickAngle + 90) + ' ' + tx + ' ' + ty + ')');
//                 text.textContent = i * step;
//                 g.appendChild(text);

//                 svg.appendChild(g);
//             }

//             // Draw sub tick marks
//             for (let i = 0; i < max * 4; i++) {
//                 if (i % 4 === 0) continue;
//                 const tickAngle = minAngle + (i / (max * 4)) * angleRange;
//                 const radians = (tickAngle * Math.PI) / 180;
//                 const r1 = 84;
//                 const r2 = 90;
//                 const x1 = 100 + r1 * Math.cos(radians);
//                 const y1 = 100 + r1 * Math.sin(radians);
//                 const x2 = 100 + r2 * Math.cos(radians);
//                 const y2 = 100 + r2 * Math.sin(radians);

//                 const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//                 line.setAttribute('x1', x1);
//                 line.setAttribute('y1', y1);
//                 line.setAttribute('x2', x2);
//                 line.setAttribute('y2', y2);
//                 line.setAttribute('stroke', 'white');
//                 line.setAttribute('stroke-width', '1');
//                 line.setAttribute('stroke-linecap', 'round');
//                 line.setAttribute('opacity', '0.6');
//                 svg.appendChild(line);
//             }

//             if (showValue) {
//                 const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//                 valueText.setAttribute('x', '100');
//                 valueText.setAttribute('y', '70');
//                 valueText.setAttribute('fill', 'white');
//                 valueText.setAttribute('font-size', '18px');
//                 valueText.setAttribute('font-weight', 'normal');
//                 valueText.setAttribute('font-family', 'Danger Neue Free Regular');
//                 valueText.setAttribute('text-anchor', 'middle');
//                 valueText.setAttribute('id', 'center_gauge_value');
//                 valueText.setAttribute('dominant-baseline', 'middle');
//                 valueText.textContent = (currentValue * step).toFixed(0);
//                 svg.appendChild(valueText);
//             }

//             // Total Score text
//             if (showTotalScore) {
//                 const totalText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//                 totalText.setAttribute('x', '80');
//                 totalText.setAttribute('y', '130');
//                 totalText.setAttribute('fill', 'white');
//                 totalText.setAttribute('font-size', '7px');
//                 totalText.setAttribute('letter-spacing', 'normal');
//                 totalText.setAttribute('font-weight', 'normal');
//                 totalText.setAttribute('text-anchor', 'middle');
//                 totalText.setAttribute('dominant-baseline', 'middle');
//                 totalText.textContent = 'TOTAL SCORE: ' + eMax.toFixed(0);
//                 svg.appendChild(totalText);
//             }

//             if (showTrip) {
//                 const tripText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//                 tripText.setAttribute('x', '130');
//                 tripText.setAttribute('y', '130');
//                 tripText.setAttribute('fill', 'white');
//                 tripText.setAttribute('font-size', '7px');
//                 tripText.setAttribute('font-weight', 'normal');
//                 tripText.setAttribute('text-anchor', 'middle');
//                 tripText.setAttribute('dominant-baseline', 'middle');
//                 tripText.textContent = 'TRIP: ' + trip.toFixed(0);
//                 svg.appendChild(tripText);
//             }

//             // Needle
//             if (showNeedle) {
//                 const needleGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//                 needleGroup.setAttribute("class", "needle-group");
//               needleGroup.style.transformOrigin = "100px 100px";
//               needleGroup.style.transform = `rotate(${angle}deg)`;
//               needleGroup.dataset.minAngle = minAngle;
//               needleGroup.dataset.maxAngle = maxAngle;
//               needleGroup.dataset.maxValue = eMax;
//               needleGroup.dataset.step = step;

//                 const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//                 shadow.setAttribute('x1', '100');
//                 shadow.setAttribute('y1', '100');
//                 shadow.setAttribute('x2', '164');
//                 shadow.setAttribute('y2', '100');
//                 shadow.setAttribute('stroke', 'rgba(0,0,0,0.3)');
//                 shadow.setAttribute('stroke-width', '5');
//                 shadow.setAttribute('stroke-linecap', 'round');
//                 shadow.setAttribute('transform', 'translate(2, 2)');
//                 needleGroup.appendChild(shadow);

//                 const needle = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//                 needle.setAttribute('x1', '100');
//                 needle.setAttribute('y1', '100');
//                 needle.setAttribute('x2', '164');
//                 needle.setAttribute('y2', '100');
//                 needle.setAttribute('stroke', '#ff7a00');
//                 needle.setAttribute('stroke-width', '5');
//                 needle.setAttribute('stroke-linecap', 'round');
//                 needleGroup.appendChild(needle);

//                 svg.appendChild(needleGroup);
//             }

//             const hub = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//             hub.setAttribute('cx', '100');
//             hub.setAttribute('cy', '100');
//             hub.setAttribute('r', '5');
//             hub.setAttribute('fill', '#ff7a00');
//             svg.appendChild(hub);

//             if (showHub) {
//                 const innerHub = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//                 innerHub.setAttribute('cx', '100');
//                 innerHub.setAttribute('cy', '100');
//                 innerHub.setAttribute('r', '3');
//                 innerHub.setAttribute('fill', '#1c1c1c');
//                 svg.appendChild(innerHub);
//             }
//         }
//         // Initialize gauges
//        const TOTAL_POINTS = 600;
//           createSpeedometer("leftGauge", {
//             step: 1,
//             max: 7,
//             value: 0,
//             showTrip: false,
//             showTotalScore: false,
//             showValue: false,
//             minAngle: -210,
//             maxAngle: 0,
//           });
//           createSpeedometer("centerGauge", {
//             value: 0,
//             max: TOTAL_POINTS,
//             step: 100,
//             showValue: true,
//             showTotalScore: true,
//             showTrip: true,
//             trip: 12,
//             minAngle: -180,
//             maxAngle: 0,
//           });
//           let value = 0;

//           function clamp(val, min, max) {
//             return Math.min(Math.max(val, min), max);
//           }

//           const baseTierImage =
//             "https://cdn.shopify.com/s/files/1/0686/9486/8103/files/Frame_259.png?v=1770378961";
//           const scoutTierImage =
//             "https://cdn.shopify.com/s/files/1/0994/4979/8950/files/Group_143726226.png?v=1770370711";
//           const leadTierImage =
//             "https://cdn.shopify.com/s/files/1/0994/4979/8950/files/Group_143726227.png?v=1770370813";

//           const tier_image_el = document.querySelector("#tier_diagram");
//           const bottomBar = document.querySelector("#meterFill");
//           createSpeedometer("leftGauge", {
//             step: 1,
//             max: 7,
//             value: 0,
//             showTrip: false,
//             showTotalScore: false,
//             showValue: false,
//             minAngle: -210,
//             maxAngle: 0,
//           });
//           createSpeedometer("centerGauge", {
//             value: 0,
//             max: TOTAL_POINTS,
//             step: 100,
//             showValue: true,
//             showTotalScore: true,
//             showTrip: true,
//             trip: 12,
//             minAngle: -200,
//             maxAngle: 20,
//           });
//           function setNewTierImgSrc(newSrc) {
//             tier_image_el.src = newSrc;
//           }

//           function updateDerivedValues() {
//             const image = clamp(Math.floor((value / TOTAL_POINTS) * 2), 0, 2);
//             const newSrc =
//               image === 0
//                 ? baseTierImage
//                 : image === 1
//                   ? scoutTierImage
//                   : leadTierImage;

//             setNewTierImgSrc(newSrc);
//           }
//           function updateNeedle(svgId, value) {
//             const svg = document.getElementById(svgId);
//             const needleGroup = svg.querySelector(".needle-group");
//             if (!needleGroup) return;
//             const minAngle = Number(needleGroup.dataset.minAngle);
//             const maxAngle = Number(needleGroup.dataset.maxAngle);
//             const maxValue = Number(needleGroup.dataset.maxValue);
//             const clampedValue = clamp(value, 0, maxValue);
//             const angle =
//               minAngle + (clampedValue / maxValue) * (maxAngle - minAngle);
//             needleGroup.style.transform = `rotate(${angle}deg)`;
//           }
//           function updateUIFromPoints() {
//             const bottomBarValue = clamp((value / TOTAL_POINTS) * 100, 0, 100);
//             const rpmMeterValue = clamp((value / TOTAL_POINTS) * 7, 0, 7); 
//             if (bottomBar) {
//               bottomBar.style.width = bottomBarValue + "%";
//             }
//             updateNeedle("leftGauge", rpmMeterValue);
//             updateNeedle("centerGauge", value);
//           }

//           function setValue(newValue) {
//      const valueText = document.querySelector("#center_gauge_value");
//      valueText.textContent = newValue;
//             value = clamp(newValue, 0, TOTAL_POINTS);
//             updateDerivedValues();
//             updateUIFromPoints();
//           }
//  const newPoints = ;
// 
//           setTimeout(() => setValue(newPoints), 1000);
