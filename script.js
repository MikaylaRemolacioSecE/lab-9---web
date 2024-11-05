$(document).ready(function() {
    $('.filter-btn').click(function() {
        const category = $(this).data('filter');
        if (category === 'all') {
            $('#gallery .photo').show();
        } else {
            $('#gallery .photo').hide();
            $(`.photo[data-category="${category}"]`).show();
        }
    });
});
