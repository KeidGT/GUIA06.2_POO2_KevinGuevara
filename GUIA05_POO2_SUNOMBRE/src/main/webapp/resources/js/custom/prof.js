$(document).ready(function() {
    $.fn.initBootTable = function() {
        $(this).bootstrapTable('destroy');
        $(this).bootstrapTable().
        unbind('check.bs.table').on('check.bs.table', function (e, row) {
            consAlum([{name : 'codiProfPara', value : row.id.trim()}]);
        });
        return false;
    };
    //Eliminar
    $.fn.funcElimAlum = function() {
        $(this).confirmation(
        {
            popout: true,
            onConfirm: function() {
                elimAlum();
                $('[data-toggle="confirmation-popout"]').confirmation('hide');
                return false;
            },
            onCancel: function()
            {
                $('[data-toggle="confirmation-popout"]').confirmation('hide');
                return false;
            }
        });
        return false;
    };
    
    INIT_OBJE_ALUM();
});

function INIT_OBJE_PROF()
{
    $("#TablAlum").initBootTable();
    $("#FormAlum\\:btonElim").funcElimProf();
}