//https://www.wikiwand.com/zh-tw/日本動畫列表_(2019年)#/10月－12月
function tableToJson(table) {
    //http://johndyer.name/html-table-to-json/
    var data = [];
    for (var i = 1; i < table.rows.length - 1; i++) {
        var tableRow = table.rows[i];
        var rowData = {
            "name": "",
            "nameInJpn": "",
            "date": "",
            "time": "",
            "carrier": "",
            "season": 1,
            "episode": 0,
            "img": "",
            "official": "",
            "description": ""
        };
        rowData["name"] = tableRow.cells[1].innerText.replace(/（(.+)）/, '');
        rowData["nameInJpn"] = tableRow.cells[2].innerText;
        //rowData["production"] = tableRow.cells[3].innerText;
        rowData["episode"] = tableRow.cells[4].innerText.replace("話", "");

        let dateDetect = tableRow.cells[0].innerText.match(/^(.+)月(.+)日－|^(.+)月－/, '')
        if (dateDetect[3]) dateDetect = dateDetect[3] + '/'
        else if (dateDetect[1] & dateDetect[2]) dateDetect = dateDetect[1] + '/' + dateDetect[2]
        else dateDetect = dateDetect[0]
        rowData["date"] = dateDetect

        let seasonDetect = tableRow.cells[1].innerText.match(/（第(.+)期）/, '')
        if (seasonDetect)
            rowData['season'] = parseFloat(seasonDetect[1])

        data.push(rowData);
    }
    return data;
}
tableToJson($$(`#section_電視動畫 > table:nth-child(9)`)[0])