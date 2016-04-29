module.exports = {
    blocks: {
        div: {
            process: function(block) {
                var result = "";
                result += "<div"
                var keywords = Object.keys(block.kwargs);
                keywords.forEach(function(key) {
                   result += " key = \"" + block.kwargs[key] + "\""
                });
                var args = block.args;
                args.forEach(function(arg) {
                   result += " " + arg 
                });
                result += ">"
                result += block.body
                result += "</div>";
                return result;
            }
        }
    }
};
