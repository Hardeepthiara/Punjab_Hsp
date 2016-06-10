/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {

    $(".quickLinkBox a, .itemList .mapItem a").click(function() {
        var qLinkId = $(this).attr("data-id");
        var secPosition = $('#' + qLinkId).offset();
        $('html, body').animate({scrollTop: secPosition.top}, 300);
    });

    $("#AgriStat .stat-button").click(function() {
        var id = $(this).attr("data-id");
        $("#AgriStat .stat-button").children("a").children("span").removeClass("glyphicon-check").addClass("glyphicon-unchecked");
        $(this).children("a").children("span").removeClass("glyphicon-unchecked").addClass("glyphicon-check");

        $(".singleChartDiv").attr("id", id);
        $("#chartTitle").text($(this).text());
        if (id === "soilchartinner") {            
            showsoilChart();
        } else if (id === "rainfallChartinner") {
            showRainfallChart();
        } else if (id === "cropChartinner") {
            showCropChart();
        } else if (id === "irrigationCharinner") {
            showirrigation();
        } else if (id === "horticultureCharinner") {
            showHorticulture();
        } else if (id === "livestockCharinner") {
            showLivestock();
        } else {

        }

    });

    $(".overlayPanel .itemList .mapItem").click(function() {
        if ($(this).children("a").children("span").hasClass("glyphicon-unchecked")) {
            $(this).children("a").children("span").removeClass("glyphicon-unchecked").addClass("glyphicon-check");
            $(this).css("background-color", "#eaeaea");
            AddMarker($(this).children("a").attr("id"));

        } else {
            $(this).children("a").children("span").removeClass("glyphicon-check").addClass("glyphicon-unchecked");
            $(this).css("background-color", "#ffffff");
            RemoveMarker($(this).children("a").attr("id"));
        }
    });

    $(".overlayDataTile").mouseenter(function() {
        $(this).css("top", "0%");
        $(this).css("height", "100%");
    });

    $(".overlayDataTile").mouseleave(function() {
        $(this).css("top", "80%");
        $(this).css("height", "20%");
    });

    $("#summaryBtn").click(function() {
        $(".summaryTile").css("display", "block");
    });

    $(".closeSummary").click(function() {
        $(".summaryTile").css("display", "none");
    });

    $("#AgriStat .stat-button[data-id='soilchartinner']").trigger('click');


});

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//         L.mapbox.accessToken = 'pk.eyJ1Ijoic2FoaWwyMTA2OTUiLCJhIjoiZjUwODRhNjRiYWZiZjhlYTc2NTU4ZWYyZmQ2YTgxNTUifQ.uGwceRxhL2VZ1iLNlNe0lA';
//            var map = L.mapbox.map('map', 'mapbox.streets')
//                    .setView([28.4500, 77.000], 9);
//
//            var geojson = [
//                {
//                    "type": "Feature",
//                    "geometry": {
//                        "type": "LineString",
//                        "coordinates": [
//                            [76.8559524, 28.400185], [76.869179, 28.4060588], [76.8671319, 28.4182734], [76.8616645, 28.4410796], [76.9069895, 28.4252864], [76.9331228, 28.4385739], [76.9465866, 28.4442302], [76.9453408, 28.4568557], [76.9537542, 28.4642338], [76.9607315, 28.4705733], [76.9642444, 28.4765902], [76.9665067, 28.4806004], [76.9692444, 28.4860356], [76.9720448, 28.4914468], [76.9762077, 28.4984432], [76.9648244, 28.509661], [76.9620492, 28.5115276], [76.9706694, 28.5158586], [76.9760102, 28.5189385], [76.9783615, 28.5212481], [76.9802327, 28.5198029], [76.9812139, 28.5191174], [76.9832794, 28.5170355], [76.9909463, 28.5135677], [76.9945276, 28.5176083], [76.9953859, 28.5171445], [76.9959691, 28.5180316], [76.9968081, 28.5197124], [76.9990215, 28.5184832], [76.9999924, 28.5179713], [77.0027227, 28.5172931], [77.0059192, 28.5158559], [77.0100507, 28.5147255], [77.0125538, 28.5169701], [77.012884, 28.5172777], [77.0169637, 28.5210774], [77.0146291, 28.5243485], [77.0109605, 28.5254514], [77.0105771, 28.5257745], [77.0096001, 28.526641], [77.0084757, 28.5270284], [77.0050118, 28.528947], [77.0016511, 28.5308084], [77.0013296, 28.5309864], [77.0016644, 28.5334918], [77.0054602, 28.5394958], [77.0076539, 28.5397729], [77.0086334, 28.5403299], [77.0096859, 28.539869], [77.0101934, 28.5402687], [77.0122093, 28.5400104], [77.0128497, 28.5402697], [77.0134571, 28.5405156], [77.0140944, 28.5399982], [77.0162809, 28.5392112], [77.0174236, 28.537688], [77.0197006, 28.536218], [77.0217025, 28.5349596], [77.0232547, 28.5335616], [77.0245904, 28.5327132], [77.0298669, 28.5316849], [77.0321199, 28.5310788], [77.0340499, 28.5300715], [77.0356349, 28.5292442], [77.0417144, 28.5260711], [77.0424046, 28.5256984], [77.0431514, 28.5252371], [77.0433583, 28.5251547], [77.0433705, 28.5241645], [77.0446105, 28.5230838], [77.0485082, 28.52092], [77.0462078, 28.5166757], [77.0491734, 28.5160783], [77.0543544, 28.5143842], [77.0575441, 28.5128541], [77.0606619, 28.5122885], [77.0612178, 28.512257], [77.0634009, 28.5126995], [77.0645264, 28.5127221], [77.0653507, 28.5125375], [77.0671637, 28.5119619], [77.067616, 28.5129745], [77.0688651, 28.5145822], [77.0709886, 28.5170499], [77.0713662, 28.5175938], [77.0720942, 28.5193619], [77.0722213, 28.5201457], [77.0723002, 28.5202589], [77.073365, 28.5195071], [77.0744668, 28.5189307], [77.0747744, 28.5188088], [77.075014, 28.5187138], [77.0774387, 28.5184405], [77.0792948, 28.5182048], [77.0804111, 28.5180224], [77.0830606, 28.5169698], [77.0840906, 28.5166587], [77.0846262, 28.5164992], [77.0859574, 28.5161025], [77.0925943, 28.5142311], [77.0932384, 28.5140471], [77.0939182, 28.5138682], [77.0986716, 28.5114124], [77.0957528, 28.5070803], [77.0976518, 28.5048552], [77.1000336, 28.5038653], [77.1023081, 28.5031016], [77.1037667, 28.5024887], [77.1053975, 28.5013384], [77.1101397, 28.4993961], [77.1124785, 28.4984532], [77.119507, 28.495139], [77.1176759, 28.4869846], [77.1150758, 28.4816302], [77.1141826, 28.4735236], [77.1124725, 28.4731841], [77.116455, 28.4672235], [77.1200235, 28.4627232], [77.1234764, 28.4597104], [77.1238974, 28.4550376], [77.1242593, 28.4510201], [77.1253919, 28.4502107], [77.1276345, 28.4430934], [77.1287009, 28.4404645], [77.138683, 28.4072441], [77.1146418, 28.3983352], [77.1188819, 28.3701088], [77.0471875, 28.3583116], [77.0361475, 28.3681112], [77.0255131, 28.3775172], [77.0220731, 28.3737851], [77.0144066, 28.3799885], [77.015501, 28.3830638], [77.0043215, 28.3882571], [76.9862863, 28.3472344], [76.9674586, 28.3587191], [76.9672726, 28.3592848], [76.9663627, 28.3620514], [76.9659736, 28.3620599], [76.9651835, 28.3615682], [76.9642001, 28.3610529], [76.9601282, 28.3610604], [76.9584105, 28.3610635], [76.9583386, 28.3566958], [76.9573286, 28.3567014], [76.9573267, 28.356607], [76.9573246, 28.3565013], [76.9561191, 28.3564473], [76.9561195, 28.3569945], [76.9571494, 28.3570005], [76.9552684, 28.3585701], [76.9545178, 28.3591334], [76.9542382, 28.3594186], [76.9537915, 28.3600506], [76.9532313, 28.3605505], [76.9527433, 28.3614269], [76.9525249, 28.3622109], [76.9523877, 28.3636001], [76.9522603, 28.3643684], [76.9523001, 28.3651476], [76.9523096, 28.3655348], [76.9516565, 28.3665591], [76.9516175, 28.3671617], [76.9522659, 28.3687944], [76.9515171, 28.3693086], [76.948573, 28.3709873], [76.9470465, 28.3716042], [76.9447719, 28.3724696], [76.9259719, 28.3840748], [76.9216837, 28.3870837], [76.9215551, 28.3893865], [76.9213832, 28.3909201], [76.9185909, 28.3908469], [76.9071183, 28.3985659], [76.9065536, 28.39835], [76.903411, 28.3986739], [76.9012504, 28.3989979], [76.8996545, 28.3993866], [76.896168, 28.4008337], [76.8950632, 28.4015464], [76.8946949, 28.4025182], [76.8943021, 28.4038356], [76.8941056, 28.4055418], [76.8934918, 28.4068159], [76.8932954, 28.4079605], [76.8927307, 28.408738], [76.8924162, 28.4090298], [76.8877189, 28.4035728], [76.8796311, 28.3957333], [76.8696144, 28.3854157], [76.8559524, 28.400185]
//
//
//                        ]
//                    },
//                    "properties": {
//                        "stroke": "#ff0000",
//                        "stroke-width": 5
//                    }
//                }
//            ];
//
//
//
//            L.geoJson(geojson, {style: L.mapbox.simplestyle.style}).addTo(map);
//
//var mapLayers = [];
//
//function addToMap(data, id) {
//
//    var oneOption = {};
//    var geoJson = getGeoJson(data);
//
//    var oneLayer = L.mapbox.featureLayer(geoJson).addTo(map);
//
//    oneOption = {
//        "name": id,
//        "geojson": geoJson,
//        "layer": oneLayer
//    };
//    
//    console.log(oneOption);
//
//    mapLayers.push(oneOption);
//
//}
//
//function getGeoJson(data) {
//
//    var geoJ = {
//        "type": "FeatureCollection",
//        "features": []
//    };
//
//    $.each(data, function(i, item) {
//        alert(item.name + ", " + item.description + ", " + item.color + ", " + item.fillColor + ", " + item.markerName + ", " + item.type + ", " + item.cordinate);
//        var feature = {
//            "type": "Feature",
//            "properties": {
//                "name": item.name,
//                "description": item.description,
//                "marker-symbol": item.markerName,
//                "marker-color": item.color,
//                "marker-size": item.markersize,
//                "fillColor": item.fillColor
//            },
//            "geometry": {
//                "type": item.type,
//                "coordinates": [item.cordinate[0], item.cordinate[1]]
//            }
//        };
//
//        geoJ.features.push(feature);
//        
//        console.log(geoJ);
//    });
//
//    return geoJ;
//}
//
//function RemoveMarker(id) {
//
//    $.each(mapLayers, function(i, item) {
//        if (item.name === id) {
//            map.removeLayer(item.layer);
//        }
//    });
//}
//
//
//function AddMarker(id) {
//
//    $.ajax({
//
//        url: "Assets/data/mapData/" + id + ".json",
//
//        type: "POST",
//
//        success: function(data) {
//
//             addToMap(data, id);
//
//        },
//
//        error: function(data) {
//
//            console.log("error "+  data)
//
//        }
//
//    });
//
//};
//alert("dasas");
