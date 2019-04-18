(function (window, document) {
    var ready = function (fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };

    var app = {
        map: function() {
            var map = L.map('map-bluefinder').setView([blueData.lat, blueData.lng], blueData.zoom);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            blueData.stand.forEach(function(s) {
                s.name = s.name ? decodeURI(s.name.replace(/\+/g, ' ')) : 'NA';
                s.wcom = s.wcom ? decodeURI(s.wcom.replace(/\+/g, ' ')) : '';
                var msg = s.disp === '0' || s.neutral === '1' ? "<h5>" + s.name + "</h5><p>Station indisponible / en travaux</p>" : "<h5>" + s.name + "</h5><p>" + s.wcom + "</p>Available bikes: " + s.ab + "<br/>Available stands: " + s.ap;
                L.marker([s.lat, s.lng]).addTo(map)
                    .bindPopup(msg);
            });

            function onLocationFound(e) {
                var radius = e.accuracy / 2;

                map.panTo(new L.LatLng(e.latitude, e.longitude));
                map.setZoom(15);
                L.circle(e.latlng, radius).addTo(map);
            }

            function onLocationError(e) {
                alert(e.message);
            }

            map.on('locationfound', onLocationFound);
            map.on('locationerror', onLocationError);
            map.locate({setView: true, maxZoom: 16});
        }
    };

    window.app = app;

    ready(function () {
        window.app.map();
    });
})(window, document);