modulo = (function(){
    var author;
    var planos;
    var api = apimock;

    return{
        setplano:function(author){
            apimock.getBlueprintsByAuthor(author, function(planos){
                console.log(planos);
            });
        }
    }

})();   