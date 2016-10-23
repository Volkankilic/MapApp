

var
mapObject,
markers = [],
markersData = {
    'Shop': [
    {
        name: 'Ad',
        location_latitude: 41.033102,
        location_longitude: 29.102905,
        map_image_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg',
        name_point: 'Ad Soyad',
        description_point: 'Konum',
        url_point: 'url'
    },

   
    ]

   
};


function initialize() {


    //URL'den gelen lat lng deðerlerini yakalayalým
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };
    //URL'den gelen lat lng deðerlerini yakalayalým


    var _lat = getUrlParameter('lat');
    var _lng = getUrlParameter('lng');



    var mapOptions = {




        zoom: 10,
        center: new google.maps.LatLng(_lat, _lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        styles: [/*insert your map styles*/]
    };
    var
    marker;
    mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (var key in markersData)
        markersData[key].forEach(function (item) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
                map: mapObject,
                icon: '/Content/img/icon/' + key + '.png',
            });

            if ('undefined' === typeof markers[key])
                markers[key] = [];
            markers[key].push(marker);
            google.maps.event.addListener(marker, 'click', (function () {
                closeInfoBox();
                getInfoBox(item).open(mapObject, this);
                mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
            }));


        });
};

function hideAllMarkers() {
    for (var key in markers)
        markers[key].forEach(function (marker) {
            marker.setMap(null);
        });
};

function toggleMarkers(category) {
    hideAllMarkers();
    closeInfoBox();

    if ('undefined' === typeof markers[category])
        return false;
    markers[category].forEach(function (marker) {
        marker.setMap(mapObject);
        marker.setAnimation(google.maps.Animation.DROP);

    });
};

function closeInfoBox() {
    $('div.infoBox').remove();
};

function getInfoBox(item) {
    return new InfoBox({
        content:
        '<div class="marker_info none" id="marker_info">' +
        '<div class="info" id="info">' +
        '<img src="' + item.map_image_url + '" class="logotype" alt=""/>' +
        '<h2>' + item.name_point + '<span></span></h2>' +
        '<span>' + item.description_point + '</span>' +
        '<a href="' + item.url_point + '" class="green_btn">Link</a>' +
        '<span class="arrow"></span>' +
        '</div>' +
        '</div>',
        disableAutoPan: true,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(40, -210),
        closeBoxMargin: '50px 200px',
        closeBoxURL: '',
        isHidden: false,
        pane: 'floatPane',
        enableEventPropagation: true
    });


};

