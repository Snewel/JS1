$(function () {
  if ($(window).innerWidth() <= 700 ) { //  при ширине <= 700px...
    $('.menu a').hover(function () { 
    $(this).next('em').remove() // отключение подсказок в меню
    }) 
    $('.menu').css({display: 'block'}) // изменение вида меню
    $('.menu-list').css({margin: '5px 7px'}) 
    $('.main').css({padding: '0'}) // изменение главного изображения
    $('.main-img').width('650').height('325')
  }
  // анимация менюшки
  $('.menu a').hover(function () { //при наведении на ссылку-кнопку...
    $(this).next('em').animate({opacity: 'show', top: '45'}, 'slow') //анимаци открытия блока подсказки
  }, function () {
    $(this).next('em').animate({opacity: 'hide', top: '65'}, 'fast') // анимация скрытия блока подсказки
  })
  //анимация по клику на ссылку
  $('a[href^="#"]').click(function(animLink){ 
    animLink.preventDefault() //отмена дефолтного действия 
    let timeAnimScroll = 1300 // время анимации
    let d = $(this).attr('href') // место перехода
    $('html,body').animate({ scrollTop: $(d).offset().top }, timeAnimScroll) // прокрутка до ссылки
  })
  //условия аренды
  $('.story-sharing-contidions p').hide() // изначальное сокрытие всех блоков
  $('.story-sharing-contidions h3').click(function () { //при нажатии на пункт...
    $(this).next('p').slideToggle('slow').siblings('p:visible').slideUp('slow') // отображение/скрытие блока
    $(this).toggleClass('active')
    $(this).siblings('h3').removeClass('active')
  })
  //галерея автомобилей
  $('.galery-cars-img-others a').click(function() {
    let linkImg = $(this).attr('href') //путь к изображению
    let nameImg = $(this).attr('title') //название изображения
    $('.galery-cars-img-main').fadeOut(170, function(){ 
      $(this).attr({src: linkImg, alt: nameImg}).fadeIn() 
    })  
    $('.galery-cars-name').text(nameImg) // названия автомобиля
    return false
  })
  //блок рекламы
  $('.delete').click(function () { //закрытие блока рекламы 
    $(this).parents('.aside-wrapper').animate({opacity: 'hide'}, 'slow') 
  })

  //анимация логотипа
  function animLogo() {
    $('.header-logo').animate({ width: 'hide'},2000)
    $('.header-logo').animate({ width: 'show'},2000)
    animLogo()
  }
  if ($('.header-logo').attr('width')) {
    animLogo() // скорее всего, это очень кривой вариант постоянной анимации :/
  }
 
})
//форма обратной связи 
function PopUpShow(){ //ON форма обратной связи
  $('.popup').show() 
}
function PopUpHide(){ //OFF форма обратной связи
  $('.popup').hide() 
}

