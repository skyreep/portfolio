// Dark & Light Mode Selectors
$(document).ready(function() {
  $('#dark-selector').click(function() {
    $('body').addClass('dark')
    $('section').addClass('dark')
    $('span').removeClass('dark')
    $('.list-group-item').addClass('dark')
    $('.progress-bar').removeClass('bg-info')
    $('.progress-bar').addClass('dark')
    $('.card').addClass('dark')
    $('.navbar').removeClass('bg-info')
    $('.navbar').addClass('bg-dark')
    $('.mode-select').removeClass('bg-light')
    $('.mode-select').addClass('bg-dark')
    $('.mode-select').addClass('dark')
    $('.card').removeClass('bg-info')
  })
  $('#light-selector').click(function() {
    $('body').removeClass('dark')
    $('section').removeClass('dark')
    $('.list-group-item').removeClass('dark')
    $('.progress-bar').removeClass('dark')
    $('.progress-bar').addClass('bg-info')
    $('.card').removeClass('dark')
    $('.navbar').removeClass('bg-dark')
    $('.navbar').addClass('bg-info')
    $('.mode-select').removeClass('bg-dark')
    $('.mode-select').addClass('bg-light')
    $('.mode-select').removeClass('dark')
  })
})