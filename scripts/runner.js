//=================================home=================================

//about to home
$('.tempo_home').click(function() {
  if($('.vanguard').hasClass('vanguard_about')) {
    $('.vanguard').removeClass('vanguard_about');
  }
  else{
    $('.vanguard').addClass('vanguard_return');
  }
});

//menu to home

$('.tempo_home').click(function() {
  if($('.vanguard').hasClass('vanguard_menu')) {
    $('.vanguard').removeClass('vanguard_menu');
  }
  else{
    $('.vanguard').addClass('vanguard_return');
  }
});

//prorder to home

$('.tempo_home').click(function() {
  if($('.vanguard').hasClass('vanguard_prorder')) {
    $('.vanguard').removeClass('vanguard_prorder');
  }
  else{
    $('.vanguard').addClass('vanguard_return');
  }
});

//contact to home

$('.tempo_home').click(function() {
  if($('.vanguard').hasClass('vanguard_contact')) {
    $('.vanguard').removeClass('vanguard_contact');
  }
  else{
    $('.vanguard').addClass('vanguard_return');
  }
});

//==============================about=======================================

//home to about

$('.tempo_about').click(function() {
  if($('.vanguard').hasClass('vanguard_home')) {
    $('.vanguard').removeClass('vanguard_home');
  }
  else{
    $('.vanguard').addClass('vanguard_about');
  }
});

//menu to about

$('.tempo_about').click(function() {
  if($('.vanguard').hasClass('vanguard_menu')) {
    $('.vanguard').removeClass('vanguard_menu');
  }
  else{
    $('.vanguard').addClass('vanguard_about');
  }
});

//prorder to about

$('.tempo_about').click(function() {
  if($('.vanguard').hasClass('vanguard_prorder')) {
    $('.vanguard').removeClass('vanguard_prorder');
  }
  else{
    $('.vanguard').addClass('vanguard_about');
  }
});

//contact to about

$('.tempo_about').click(function() {
  if($('.vanguard').hasClass('vanguard_contact')) {
    $('.vanguard').removeClass('vanguard_contact');
  }
  else{
    $('.vanguard').addClass('vanguard_about');
  }
});

//====================================menu==============================


//home to menu

$('.tempo_menu').click(function() {
  if($('.vanguard').hasClass('vanguard_home')) {
    $('.vanguard').removeClass('vanguard_home');
  }
  else{
    $('.vanguard').addClass('vanguard_menu');
  }
});

//about to menu

$('.tempo_menu').click(function() {
  if($('.vanguard').hasClass('vanguard_about')) {
    $('.vanguard').removeClass('vanguard_about');
  }
  else{
    $('.vanguard').addClass('vanguard_menu');
  }
});

//prorder to menu

$('.tempo_menu').click(function() {
  if($('.vanguard').hasClass('vanguard_prorder')) {
    $('.vanguard').removeClass('vanguard_prorder');
  }
  else{
    $('.vanguard').addClass('vanguard_menu');
  }
});

// contact to menu

$('.tempo_menu').click(function() {
  if($('.vanguard').hasClass('vanguard_contact')) {
    $('.vanguard').removeClass('vanguard_contact');
  }
  else{
    $('.vanguard').addClass('vanguard_menu');
  }
});

//==================================prorder================================

//home to prorder

$('.tempo_prorder').click(function() {
  if($('.vanguard').hasClass('vanguard_home')) {
    $('.vanguard').removeClass('vanguard_home');
  }
  else{
    $('.vanguard').addClass('vanguard_prorder');
  }
});

//about to prorder

$('.tempo_prorder').click(function() {
  if($('.vanguard').hasClass('vanguard_about')) {
    $('.vanguard').removeClass('vanguard_about');
  }
  else{
    $('.vanguard').addClass('vanguard_prorder');
  }
});

//menu to prorder

$('.tempo_prorder').click(function() {
  if($('.vanguard').hasClass('vanguard_menu')) {
    $('.vanguard').removeClass('vanguard_menu');
  }
  else{
    $('.vanguard').addClass('vanguard_prorder');
  }
});

//contact to prorder

$('.tempo_prorder').click(function() {
  if($('.vanguard').hasClass('vanguard_contact')) {
    $('.vanguard').removeClass('vanguard_contact');
  }
  else{
    $('.vanguard').addClass('vanguard_prorder');
  }
});

//================================contact=====================================

//home to contact

$('.tempo_contact').click(function() {
  if($('.vanguard').hasClass('vanguard_home')) {
    $('.vanguard').removeClass('vanguard_home');
  }
  else{
    $('.vanguard').addClass('vanguard_contact');
  }
});

//about to contact

$('.tempo_contact').click(function() {
  if($('.vanguard').hasClass('vanguard_about')) {
    $('.vanguard').removeClass('vanguard_about');
  }
  else{
    $('.vanguard').addClass('vanguard_contact');
  }
});

// menu to contact

$('.tempo_contact').click(function() {
  if($('.vanguard').hasClass('vanguard_menu')) {
    $('.vanguard').removeClass('vanguard_menu');
  }
  else{
    $('.vanguard').addClass('vanguard_contact');
  }
});

//prorder to contact

$('.tempo_contact').click(function() {
  if($('.vanguard').hasClass('vanguard_prorder')) {
    $('.vanguard').removeClass('vanguard_prorder');
  }
  else{
    $('.vanguard').addClass('vanguard_contact');
  }
});


//====andrews team of assassins!===================================

//================================home========================================

//home manifest over ABOUT

$('.tempo_home').click(function() {
  if($('.bloc_about').hasClass('bloc_manifest')) {
    $('.bloc_about').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_def').addClass('bloc_manifest');
    $('.bloc_about').addClass('bloc_vanish');
  }
});

//home manifest over MENU

$('.tempo_home').click(function() {
  if($('.bloc_menu').hasClass('bloc_manifest')) {
    $('.bloc_menu').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_def').addClass('bloc_manifest');
    $('.bloc_menu').addClass('bloc_vanish');
  }
});

//home manifest over PRORDER

$('.tempo_home').click(function() {
  if($('.bloc_prorder').hasClass('bloc_manifest')) {
    $('.bloc_prorder').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_def').addClass('bloc_manifest');
    $('.bloc_prorder').addClass('bloc_vanish');
  }
});

//home manifest over CONTACT

$('.tempo_home').click(function() {
  if($('.bloc_contact').hasClass('bloc_manifest')) {
    $('.bloc_contact').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_def').addClass('bloc_manifest');
    $('.bloc_contact').addClass('bloc_vanish');
  }
});


//=====================about===================================================

//about manifest over HOME

$('.tempo_about').click(function() {
  if($('.bloc_def').hasClass('bloc_manifest')) {
    $('.bloc_def').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_about').addClass('bloc_manifest');
    $('.bloc_def').addClass('bloc_vanish');
  }
});

//about manifest over MENU

$('.tempo_about').click(function() {
  if($('.bloc_menu').hasClass('bloc_manifest')) {
    $('.bloc_menu').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_about').addClass('bloc_manifest');
    $('.bloc_menu').addClass('bloc_vanish');
  }
});

//about manifest over PRORDER

$('.tempo_about').click(function() {
  if($('.bloc_prorder').hasClass('bloc_manifest')) {
    $('.bloc_prorder').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_about').addClass('bloc_manifest');
    $('.bloc_prorder').addClass('bloc_vanish');
  }
});

//about manifest over CONTACT

$('.tempo_about').click(function() {
  if($('.bloc_contact').hasClass('bloc_manifest')) {
    $('.bloc_contact').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_about').addClass('bloc_manifest');
    $('.bloc_contact').addClass('bloc_vanish');
  }
});

//===========================menu==========================================

//menu manifest over HOME

$('.tempo_menu').click(function() {
  if($('.bloc_def').hasClass('bloc_manifest')) {
    $('.bloc_def').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_menu').addClass('bloc_manifest');
    $('.bloc_def').addClass('bloc_vanish');
  }
});


//menu manifest over ABOUT

$('.tempo_menu').click(function() {
  if($('.bloc_about').hasClass('bloc_manifest')) {
    $('.bloc_about').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_menu').addClass('bloc_manifest');
    $('.bloc_about').addClass('bloc_vanish');
  }
});


//menu manifest over PRORDER

$('.tempo_menu').click(function() {
  if($('.bloc_prorder').hasClass('bloc_manifest')) {
    $('.bloc_prorder').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_menu').addClass('bloc_manifest');
    $('.bloc_prorder').addClass('bloc_vanish');
  }
});

//menu manifest over CONTACT

$('.tempo_menu').click(function() {
  if($('.bloc_contact').hasClass('bloc_manifest')) {
    $('.bloc_contact').removeClass('bloc_manifest');
  }
  else{
    $('.bloc_menu').addClass('bloc_manifest');
    $('.bloc_contact').addClass('bloc_vanish');
  }
});

//===============================prorder=======================================
