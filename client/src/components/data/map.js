import Map from '../../assets/images/map_image.png'

export default function avicusMap(){

    const containerSVG = document.getElementById("svg-container");
    const collectionClickableAreas = document.getElementsByClassName("clickable-areas");
    
    const areasNames = {
    area_A: "Kaldirth",
    area_B_1: "Vagal Mountains",
    area_B_2: "Vagal Mountains",
    area_B_3: "Vagal Mountains",
    area_B_4: "Vagal Mountains",
    area_C: "Edenvale",
    area_D: "Gray Hall",
    area_E: "Heartwatch",
    area_F: "Clearhold",
    area_G: "Geildana Keep",
    area_H: "Green Elk Isles",
    area_I: "Portum Turtur",
    area_J: "Fae Isles",
    area_K: "Refuge of the Sunken Fleet",
    area_L: "Arolin",
    area_M: "Westor Isle",
    area_N: "The Golden Reef",
    area_O: "Bare Isle",
    area_P: "The Howling Archipelago",
    area_Q: "Elderrock",
    area_R: "Wyvern Heights",
    area_S: "Southspire",
    area_T: "Windkeep",
    area_U: "Grimwatch Wilds",
    area_V: "Hissing Isle",
    area_W: "Everlasting Isle",
    area_X: "The Green Haven",
    area_Y: "The Hidden Cay",
    area_Z: "Lifeless Keys",
    area_AA: "Dragonkin Woodlands",
    area_AB: "Alrindel’s Spiral",
    area_AC: "Braelor’s Refuge",
    area_AD: "Crakuas",
    area_AE: "The Circle’s Forest",
    area_AF: "The White Peaks",
    area_AG: "The Gardens of Votgami",
    area_AH: "The Scaled Caverns",
    area_AI: "The Crossroads",
    area_AJ: "Maro’s Landing",
    area_AK: "Aqualis’ Harbor",
    area_AL: "The Cliffs of Hjarta",
    area_AM: "The Frozen Isles",
    area_AN: "Genem’s Repose",
    area_AO: "Giant’s Rest",
    area_AP: "Consen",
    area_AQ: "King’s Fall Keep",
    area_AR: "Trident Keep",
    area_AS: "Wandering Haven",
    area_AT_1: "Kil Fahldir Mountains",
    area_AT_2: "Kil Fahldir Mountains",
    area_AU: "Loth Allanar",
    area_AV: "Kobold Keys",
    area_AW: "Pearl’s Grotto",
};

for (let item of collectionClickableAreas) {
    let rectId = item.parentNode.getAttribute("id");
    let rectX = item.getAttribute("x");
    let rectY = item.getAttribute("y");
    let rectWidth = item.getAttribute("width");
    
    let textX = parseFloat(rectX) + parseFloat(rectWidth) / 2;
    let textY = parseFloat(rectY) + 50;
    let textId = "text_" + rectId;
    
    let areaName = areasNames[rectId];
    let newText = document.createTextNode(areaName);
    let newTextElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
        );
        newTextElement.setAttributeNS(null, "x", textX);
        newTextElement.setAttributeNS(null, "y", textY);
        newTextElement.setAttributeNS(null, "class", "text-location");
        newTextElement.setAttributeNS(null, "id", textId);
        containerSVG.appendChild(newTextElement);
        newTextElement.appendChild(newText);
    }
    
    const areaA = document.getElementById("area_A");
    const areaB1 = document.getElementById("area_B_1");
    const areaB2 = document.getElementById("area_B_2");
    const areaB3 = document.getElementById("area_B_3");
    const areaB4 = document.getElementById("area_B_4");
    const areaC = document.getElementById("area_C");
    const areaD = document.getElementById("area_D");
    const areaE = document.getElementById("area_E");
    const areaF = document.getElementById("area_F");
    const areaG = document.getElementById("area_G");
    const areaH = document.getElementById("area_H");
    const areaI = document.getElementById("area_I");
    const areaJ = document.getElementById("area_J");
    const areaK = document.getElementById("area_K");
    const areaL = document.getElementById("area_L");
    const areaM = document.getElementById("area_M");
    const areaN = document.getElementById("area_N");
    const areaO = document.getElementById("area_O");
    const areaP = document.getElementById("area_P");
    const areaQ = document.getElementById("area_Q");
    const areaR = document.getElementById("area_R");
    const areaS = document.getElementById("area_S");
    const areaT = document.getElementById("area_T");
    const areaU = document.getElementById("area_U");
    const areaV = document.getElementById("area_V");
    const areaX = document.getElementById("area_X");
    const areaY = document.getElementById("area_Y");
    const areaW = document.getElementById("area_W");
    const areaZ = document.getElementById("area_Z");
    const areaAA = document.getElementById("area_AA");
    const areaAB = document.getElementById("area_AB");
    const areaAC = document.getElementById("area_AC");
    const areaAD = document.getElementById("area_AD");
    const areaAE = document.getElementById("area_AE");
    const areaAF = document.getElementById("area_AF");
    const areaAG = document.getElementById("area_AG");
    const areaAH = document.getElementById("area_AH");
    const areaAI = document.getElementById("area_AI");
    const areaAJ = document.getElementById("area_AJ");
    const areaAK = document.getElementById("area_AK");
    const areaAL = document.getElementById("area_AL");
    const areaAM = document.getElementById("area_AM");
    const areaAN = document.getElementById("area_AN");
    const areaAO = document.getElementById("area_AO");
    const areaAP = document.getElementById("area_AP");
    const areaAQ = document.getElementById("area_AQ");
const areaAR = document.getElementById("area_AR");
const areaAS = document.getElementById("area_AS");
const areaAT1 = document.getElementById("area_AT_1");
const areaAT2 = document.getElementById("area_AT_2");
const areaAU = document.getElementById("area_AU");
const areaAV = document.getElementById("area_AV");
const areaAW = document.getElementById("area_AW");

let arrayClickableAreas = [
    areaA,
    areaB1,
    areaB2,
    areaB3,
    areaB4,
    areaC,
    areaD,
    areaE,
    areaF,
    areaG,
    areaH,
    areaI,
    areaJ,
    areaK,
    areaL,
    areaM,
    areaN,
    areaO,
    areaP,
    areaQ,
    areaR,
    areaS,
    areaT,
    areaU,
    areaV,
    areaX,
    areaY,
    areaW,
    areaZ,
    areaAA,
    areaAB,
    areaAC,
    areaAD,
    areaAE,
    areaAF,
    areaAG,
    areaAH,
    areaAI,
    areaAJ,
    areaAK,
    areaAL,
    areaAM,
    areaAN,
    areaAO,
    areaAP,
    areaAQ,
    areaAR,
    areaAS,
    areaAT1,
    areaAT2,
    areaAU,
    areaAV,
    areaAW,
];

const textAreaA = document.getElementById("text_area_A");
const textAreaB1 = document.getElementById("text_area_B_1");
const textAreaB2 = document.getElementById("text_area_B_2");
const textAreaB3 = document.getElementById("text_area_B_3");
const textAreaB4 = document.getElementById("text_area_B_4");
const textAreaC = document.getElementById("text_area_C");
const textAreaD = document.getElementById("text_area_D");
const textAreaE = document.getElementById("text_area_E");
const textAreaF = document.getElementById("text_area_F");
const textAreaG = document.getElementById("text_area_G");
const textAreaH = document.getElementById("text_area_H");
const textAreaI = document.getElementById("text_area_I");
const textAreaJ = document.getElementById("text_area_J");
const textAreaK = document.getElementById("text_area_K");
const textAreaL = document.getElementById("text_area_L");
const textAreaM = document.getElementById("text_area_M");
const textAreaN = document.getElementById("text_area_N");
const textAreaO = document.getElementById("text_area_O");
const textAreaP = document.getElementById("text_area_P");
const textAreaQ = document.getElementById("text_area_Q");
const textAreaR = document.getElementById("text_area_R");
const textAreaS = document.getElementById("text_area_S");
const textAreaT = document.getElementById("text_area_T");
const textAreaU = document.getElementById("text_area_U");
const textAreaV = document.getElementById("text_area_V");
const textAreaX = document.getElementById("text_area_X");
const textAreaY = document.getElementById("text_area_Y");
const textAreaW = document.getElementById("text_area_W");
const textAreaZ = document.getElementById("text_area_Z");
const textAreaAA = document.getElementById("text_area_AA");
const textAreaAB = document.getElementById("text_area_AB");
const textAreaAC = document.getElementById("text_area_AC");
const textAreaAD = document.getElementById("text_area_AD");
const textAreaAE = document.getElementById("text_area_AE");
const textAreaAF = document.getElementById("text_area_AF");
const textAreaAG = document.getElementById("text_area_AG");
const textAreaAH = document.getElementById("text_area_AH");
const textAreaAI = document.getElementById("text_area_AI");
const textAreaAJ = document.getElementById("text_area_AJ");
const textAreaAK = document.getElementById("text_area_AK");
const textAreaAL = document.getElementById("text_area_AL");
const textAreaAM = document.getElementById("text_area_AM");
const textAreaAN = document.getElementById("text_area_AN");
const textAreaAO = document.getElementById("text_area_AO");
const textAreaAP = document.getElementById("text_area_AP");
const textAreaAQ = document.getElementById("text_area_AQ");
const textAreaAR = document.getElementById("text_area_AR");
const textAreaAS = document.getElementById("text_area_AS");
const textAreaAT1 = document.getElementById("text_area_AT_1");
const textAreaAT2 = document.getElementById("text_area_AT_2");
const textAreaAU = document.getElementById("text_area_AU");
const textAreaAV = document.getElementById("text_area_AV");
const textAreaAW = document.getElementById("text_area_AW");

const listTexts = [
    textAreaA,
    textAreaB1,
    textAreaB2,
    textAreaB3,
    textAreaB4,
    textAreaC,
    textAreaD,
    textAreaE,
    textAreaF,
    textAreaG,
    textAreaH,
    textAreaI,
    textAreaJ,
    textAreaK,
    textAreaL,
    textAreaM,
    textAreaN,
    textAreaO,
    textAreaP,
    textAreaQ,
    textAreaR,
    textAreaS,
    textAreaT,
    textAreaU,
    textAreaV,
    textAreaX,
    textAreaY,
    textAreaW,
    textAreaZ,
    textAreaAA,
    textAreaAB,
    textAreaAC,
    textAreaAD,
    textAreaAE,
    textAreaAF,
    textAreaAG,
    textAreaAH,
    textAreaAI,
    textAreaAJ,
    textAreaAK,
    textAreaAL,
    textAreaAM,
    textAreaAN,
    textAreaAO,
    textAreaAP,
    textAreaAQ,
    textAreaAR,
    textAreaAS,
    textAreaAT1,
    textAreaAT2,
    textAreaAU,
    textAreaAV,
    textAreaAW,
];

arrayClickableAreas.forEach((x, index) => {
    let y = listTexts[index];
    
    x.addEventListener("mouseover", function (e) {
        y.style.display = "block";
    });
    
    x.addEventListener("mouseout", function (e) {
        y.style.display = "none";
    });
});

return (
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    viewBox="0 0 7016 4960"
    xml:space="preserve"
    id="svg-container"
>
    <image
        src={Map}
        width="100%"
        height="100%"
        alt="Fantasy Map"
        usemap="#imagemap"
        />

    <g id="area_A">
        <rect
            x="917.9"
            y="2084.1"
            class="clickable-areas"
            id=""
            width="306"
            height="258"
            />
    </g>
    <g id="area_B_1">
        <rect
            x="640"
            y="1910"
            class="clickable-areas"
            width="778"
            height="174.1"
            />
    </g>
    <g id="area_B_2">
        <rect
            x="640"
            y="2084.1"
            class="clickable-areas"
            width="277.9"
            height="333.9"
            />
    </g>
    <g id="area_B_3">
        <rect
            x="1224"
            y="2084.1"
            class="clickable-areas"
            width="194"
            height="333.9"
            />
    </g>
    <g id="area_B_4">
        <rect
            x="917.9"
            y="2342.1"
            class="clickable-areas"
            width="306.1"
            height="75.9"
            />
    </g>
    <g id="area_C">
        <rect
            x="686.9"
            y="1595"
            class="clickable-areas"
            width="264"
            height="288"
            />
    </g>
    <g id="area_D">
        <rect
            x="1160.9"
            y="1337"
            class="clickable-areas"
            width="231"
            height="285"
        />
    </g>
    <g id="area_E">
        <rect
            x="392.8"
            y="1352"
            class="clickable-areas"
            width="294"
            height="195"
            />
    </g>
    <g id="area_F">
        <rect
            x="797.9"
            y="1052"
            class="clickable-areas"
            width="324"
            height="243"
            />
    </g>
    <g id="area_G">
        <rect
            x="950.9"
            y="451.9"
            class="clickable-areas"
            width="294"
            height="201"
            />
    </g>
    <g id="area_H">
        <rect
            x="1605"
            y="514.9"
            class="clickable-areas"
            width="108"
            height="138"
            />
    </g>
    <g id="area_I">
        <rect
            x="1863"
            y="598.9"
            class="clickable-areas"
            width="408"
            height="309"
            />
    </g>
    <g id="area_J">
        <rect
            x="2487"
            y="256.9"
            class="clickable-areas"
            width="207"
            height="243"
            />
    </g>
    <g id="area_K">
        <rect
            x="2100"
            y="1547"
            class="clickable-areas"
            width="375"
            height="300"
            />
    </g>
    <g id="area_L">
        <rect
            x="1421.9"
            y="2360.1"
            class="clickable-areas"
            width="330"
            height="219"
            />
    </g>
    <g id="area_M">
        <rect
            x="368.8"
            y="2537.1"
            class="clickable-areas"
            width="318"
            height="261"
            />
    </g>
    <g id="area_N">
        <rect
            x="917.9"
            y="3020.2"
            class="clickable-areas"
            width="285"
            height="282"
            />
    </g>
    <g id="area_O">
        <rect
            x="368.8"
            y="4148.3"
            class="clickable-areas"
            width="588.1"
            height="465"
            />
    </g>
    <g id="area_P">
        <rect
            x="1493.9"
            y="4187.3"
            class="clickable-areas"
            width="357"
            height="243"
            />
    </g>
    <g id="area_Q">
        <rect
            x="2100"
            y="3560.2"
            class="clickable-areas"
            width="291"
            height="291"
            />
    </g>
    <g id="area_R">
        <rect
            x="2691.1"
            y="3242.2"
            class="clickable-areas"
            width="402"
            height="528.1"
            />
    </g>
    <g id="area_S">
        <rect
            x="2784.1"
            y="3926.3"
            class="clickable-areas"
            width="276"
            height="261"
            />
    </g>
    <g id="area_T">
        <rect
            x="3348.1"
            y="3356.2"
            class="clickable-areas"
            width="306"
            height="309"
            />
    </g>
    <g id="area_U">
        <rect
            x="2817.1"
            y="4358.3"
            class="clickable-areas"
            width="327"
            height="243"
            />
    </g>
    <g id="area_V">
        <rect
            x="3588.2"
            y="3983.3"
            class="clickable-areas"
            width="357"
            height="279"
            />
    </g>
    <g id="area_X">
        <rect
            x="4179.2"
            y="3212.2"
            class="clickable-areas"
            width="234"
            height="252"
            />
    </g>
    <g id="area_Y">
        <rect
            x="4563.2"
            y="3377.2"
            class="clickable-areas"
            width="174"
            height="129"
            />
    </g>
    <g id="area_W">
        <rect
            x="3987.2"
            y="3629.2"
            class="clickable-areas"
            width="168"
            height="195"
            />
    </g>
    <g id="area_Z">
        <rect
            x="4425.2"
            y="4166.3"
            class="clickable-areas"
            width="246"
            height="342"
            />
    </g>
    <g id="area_AA">
        <rect
            x="4887.3"
            y="3359.2"
            class="clickable-areas"
            width="618.1"
            height="714.1"
            />
    </g>
    <g id="area_AB">
        <rect
            x="5556.4"
            y="4025.3"
            class="clickable-areas"
            width="588.1"
            height="540.1"
            />
    </g>
    <g id="area_AC">
        <rect
            x="6516.4"
            y="3800.2"
            class="clickable-areas"
            width="225"
            height="354"
            />
    </g>
    <g id="area_AD">
        <rect
            x="5988.4"
            y="3437.2"
            class="clickable-areas"
            width="312"
            height="309"
            />
    </g>
    <g id="area_AE">
        <rect
            x="6159.4"
            y="1940"
            class="clickable-areas"
            width="396"
            height="1062.1"
            />
    </g>
    <g id="area_AF">
        <rect
            x="5790.4"
            y="1274"
            class="clickable-areas"
            width="879.1"
            height="567.1"
            />
    </g>
    <g id="area_AG">
        <rect
            x="5787.4"
            y="1976"
            class="clickable-areas"
            width="345"
            height="297"
            />
    </g>
    <g id="area_AH">
        <rect
            x="5280.3"
            y="2489.1"
            class="clickable-areas"
            width="705.1"
            height="207"
            />
    </g>
    <g id="area_AI">
        <rect
            x="5655.4"
            y="2738.1"
            class="clickable-areas"
            width="324"
            height="267"
            />
    </g>
    <g id="area_AJ">
        <rect
            x="4458.2"
            y="2699.1"
            class="clickable-areas"
            width="321"
            height="270"
            />
    </g>
    <g id="area_AK">
        <rect
            x="5157.3"
            y="1994.1"
            class="clickable-areas"
            width="288"
            height="279"
            />
    </g>
    <g id="area_AL">
        <rect
            x="5256.3"
            y="1220"
            class="clickable-areas"
            width="291"
            height="246"
        />
    </g>
    <g id="area_AM">
        <rect
            x="6108.4"
            y="727.9"
            class="clickable-areas"
            width="279"
            height="237"
            />
    </g>
    <g id="area_AN">
        <rect
            x="5190.3"
            y="187.9"
            class="clickable-areas"
            width="822.1"
            height="501"
            />
    </g>
    <g id="area_AO">
        <rect
            x="4728.3"
            y="742.9"
            class="clickable-areas"
            width="297"
            height="297"
            />
    </g>
    <g id="area_AP">
        <rect
            x="4431.2"
            y="1580"
            class="clickable-areas"
            width="351"
            height="288"
            />
    </g>
    <g id="area_AQ">
        <rect
            x="3795.2"
            y="1907"
            class="clickable-areas"
            width="270"
            height="234"
            />
    </g>
    <g id="area_AR">
        <rect
            x="3768.2"
            y="1130"
            class="clickable-areas"
            width="321"
            height="324"
            />
    </g>
    <g id="area_AS">
        <rect
            x="2913.1"
            y="1109"
            class="clickable-areas"
            width="300"
            height="288"
            />
    </g>
    <g id="area_AT_2">
        <rect
            x="3195.1"
            y="964.9"
            class="clickable-areas"
            width="1350.1"
            height="84"
            />
    </g>
    <g id="area_AT_1">
        <rect
            x="4131.2"
            y="466.9"
            class="clickable-areas"
            width="300"
            height="501.1"
            />
    </g>
    <g id="area_AU">
        <rect
            x="3045.1"
            y="466.9"
            class="clickable-areas"
            width="840.1"
            height="378"
            />
    </g>
    <g id="area_AV">
        <rect
            x="3735.2"
            y="2402.1"
            class="clickable-areas"
            width="369"
            height="324"
            />
    </g>
    <g id="area_AW">
        <rect
            x="2478"
            y="2630.1"
            class="clickable-areas"
            width="132"
            height="171"
            />
    </g>
</svg>
)
}