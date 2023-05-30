//define the parent dialog window
//make sure autoOpen is set to false so that the dialog does not open when the page loads
$("#dialogParent").dialog({
    dialogClass: "no-close",
    width: 800,
    height: 600,
    autoOpen: false,
    modal: true,
    buttons: [
        {
            text: "OK",
            click: function () {
                $(this).dialog("close");
            }
        },
        {
            text: "Save",
            click: function () {
                saveitems();
                $(this).dialog("close");
            }
        }
    ]
});


//define the child dialog window
//make sure autoOpen is set to false so that the dialog does not open when the page loads
$("#dialogChild").dialog({
    dialogClass: "no-close",
    autoOpen: false,
    width: 600,
    height: 400,
    modal: false,
    buttons: [
        {
            text: "OK",
            click: function () {
                $(this).dialog("close");
            }
        }
    ]
});

//register a click event handler for the parent button
$("#btnParent").click(function () {
    $("#dialogParent").dialog("open");
});

$("#selectWrapper").click(function () {
    $("#dialogParent").dialog("open");
});


//register a click event handler for the child button
$("#btnChild").click(function () {
    $("#dialogChild").dialog("open");
});

const saveitems = function () {
    
}
