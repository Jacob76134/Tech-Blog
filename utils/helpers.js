module.exports = {
    format_date: (date) => {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear(); 
        return endDate = `${month}/${day}/${year}`
      }
    }