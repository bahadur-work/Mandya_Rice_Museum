angular.module("umbraco")
    .controller("My.MarkdownEditorController",
        function () {
            alert("The controller has landed");
        });

if ($scope.model.value === null || $scope.model.value === "") {
    $scope.model.value = $scope.model.config.defaultValue;
}