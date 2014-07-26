define(['jquery', 'handlebars'], function ($, Handlebars) {
    'use strict';

    var $successMsg, $errorMsg, template;

    $(function () {
        $successMsg = $('.messages .success');
        $errorMsg = $('.messages .error');

        var source = $('#template').html();
        template = Handlebars.compile(source);
    });

    function successAddStudent(data) {
        $successMsg.html('' + data.name + ' successfully added').show().fadeOut(2000);
    };

    function successLoadStudents(data) {
        $('#students-container').html(template({
            rows: data.students
        }))
    };

    function errorHandler(err) {
        console.log('Error: ' + JSON.stringify(err));
        $errorMsg
            .html('Error: ' + err.status + ' (' + err.statusText + ')')
            .show()
            .fadeOut(2000);
    };

    function attachAddHandler(handler) {
        $('#btn-add-student').on('click', function () {
            var name = $('#tb-name').val();
            var grade = $('#tb-grade').val();
            handler(name, grade);
            console.log("attachAddHandler");
        });
    }

    function attachRemoveHandler(handler) {
        $('#btn-remove-student').on('click', function () {
            var id = $('#tb-id').val();
            handler(id);
        });
    }

    return {
        successAddStudent: successAddStudent,
        successLoadStudents: successLoadStudents,
        errorHandler: errorHandler,
        attachAddHandler: attachAddHandler,
        attachRemoveHandler: attachRemoveHandler
    }

});