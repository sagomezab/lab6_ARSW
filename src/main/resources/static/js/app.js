app = (function(){
    var author;
    var api = apimock;

    function getName() {
        $("#nameTable").text(author + "'s " + "blueprints:");
    }

    function getBlueprintsByAuthor() {
        author = $("#author").val();
        api.getBlueprintsByAuthor(author,tableData);
    }

    var tableData = function(data) {
        $("#blueprintsTable tbody").empty();
        getName();
        const newRow = data.map((element) => {
            return {
                authorName: element.name,
                points: element.points.length
            }
        });

        newRow.map((elements) => {
            $("#blueprintsTable > tbody:last").append($("<tr><td>" + elements.authorName + "</td><td>" + elements.points.toString() +
                "</td><td>" + "<button  id=" + elements.authorName + "onclick=app.getBlueprintsByNameAndAuthor(this)>open</button>" + "</td>"));
        });

        const total = newRow.reduce((suma, {points}) => suma + points, 0);

        $("#points").text(total);
        
    }

    return {
        getBlueprintsByAuthor:getBlueprintsByAuthor
    }

})();