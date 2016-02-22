angular.module('itunes').service('itunesCleanup', function () {

    this.cleanUp = function (artistObj) {

        artistInfo = [];

        for (var i = 0; i < artistObj.length; i++) {
            artistInfo.push({
                AlbumArt: artistObj[i].artworkUrl100,
                Artist: artistObj[i].artistName,
                Collection: artistObj[i].collectionCensoredName,
                CollectionPrice: artistObj[i].collectionPrice,
                Play: artistObj[i].previewUrl,
                Type: artistObj[i].primaryGenreName
            })
        }

        return artistInfo;
    }

})