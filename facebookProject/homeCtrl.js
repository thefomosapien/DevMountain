angular.module('devMtIn')
    .controller('homeCtrl', function ($scope, profileService) {
        $scope.editing = false;

        $scope.saveProfile = function (profile) {
            profileService.saveProfile(profile);
            $scope.editing = false;
        }

        $scope.deleteProfile = function () {
            profileService.deleteProfile()
                .then(function (deletedProfile) {
                    localStorage.removeItem('profileId');
                    $scope.myProfile = {};
                })
                .catch(function (err) {
                    console.error(err);
                });
        }

        $scope.checkForProfile = function () {
            var profileId = JSON.parse(localStorage.getItem('profileId'));

            if (profileId) {
                profileService.checkForProfile(profileId.profileId)
                    .then(function (profile) {
                        $scope.myProfile = profile.data;
                    })
                    .catch(function (err) {
                        console.error(err);
                    });
            }
        }
        $scope.checkForProfile();

        $scope.sortOptions = [{
                display: 'Ascending',
                value: false
	},
            {
                display: 'Descending',
                value: true
	}
	];

    });