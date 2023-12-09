jQuery('.follow-btn').on( 'click', function() {
    $(this).html('Followed')
    $(this).addClass('btn-followed')
});
jQuery('.search').on('input', function() {
    $('.icon-edit').addClass('icon-close')
});