const axios = require("axios");

module.exports = {
    search: function(req, res) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+ req.params.search).then(
            function(response) {
                res.json(response.data.items)
            }
          );
    },
}

