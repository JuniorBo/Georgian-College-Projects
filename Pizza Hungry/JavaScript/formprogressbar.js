$(document).ready(function() {
    var form = $("#form");
    form.validate({
        // configurações de validação
    });

    var progress_bar = $('.progress-bar');
    var progressBar_val = parseInt(progress_bar.attr('aria-valuenow'));
    var visited_items = [];
    var validator = form.validate();

    function updateProgressBar() {
        if (progressBar_val < 100) {
            progressBar_val += 10;
            progress_bar.css({ 'width': progressBar_val + '%' }).attr('aria-valuenow', progressBar_val);
            progress_bar.find('.progress-text').html(progressBar_val + '% Complete');
        }
        if (progressBar_val >= 100) {
            progress_bar.css({ 'width': 60 + '%' }).attr('aria-valuenow', 100);
            progress_bar.find('.progress-text').html('100% Complete');
            progress_bar.addClass('progress-bar-success');
            reduceProgressBar();
        }
    }

    function reduceProgressBar() {
        progress_bar.animate({ 'width': '30%' }, 1000).attr('aria-valuenow', 30);
        progress_bar.find('.progress-text').html('100% Complete');
    }

    $("form input:text, form input:radio, form input:checkbox, select").on('change', function() {
        var current_item = $(this);
        var item_validated = validator.element(current_item);

        if (item_validated) {
            if (!visited_items.includes(current_item.attr('name'))) {
                visited_items.push(current_item.attr('name'));
                updateProgressBar();
            }
        }
    });

    $("#store_form_quantity").on('change', function() {
        var quantity = parseInt($(this).val());

        if (quantity >= 1 && !visited_items.includes($(this).attr('name'))) {
            visited_items.push($(this).attr('name'));
            updateProgressBar();
        }
    });
});
