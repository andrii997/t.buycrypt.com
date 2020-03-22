$(document).ready(function(){
  $('.select-styler').styler();

  function selectIcon() {
    $('.select-icon').styler({
      onFormStyled: function() {
        $('.select-icon .jq-selectbox__dropdown li').each(function(){
          var text = $(this).text(),
              icon = $(this).data('icon'),
              textCont = $(this);
          selectIconItem(textCont,icon,text);
        });

        $('div.select-icon').each(function(){
          var select = $(this),
              textCont = select.find('.jq-selectbox__select-text'),
              icon = select.find('option:selected').data('icon'),
              text = select.find('option:selected').text();
              selectIconItem(textCont,icon,text);
        });
      },
      onSelectClosed: function() {
        var textCont = $(this).find('.jq-selectbox__select-text'),
            icon = $(this).find('option:selected').data('icon'),
            text = $(this).find('option:selected').text();
        selectIconItem(textCont,icon,text);
      }
    });
  }

  function selectCoin() {
    $('.select-coin').styler({
      onFormStyled: function(){
        $('.select-coin .jq-selectbox__dropdown li').each(function(){
          var coin = $(this).data('coin'),
              icon = $(this).data('icon'),
              num = $(this).data('num'),
              textCont = $(this);
          selectCoinItem(textCont,num,icon,coin);
        });

        $('div.select-coin').each(function(){
          var select = $(this),
              textCont = select.find('.jq-selectbox__select-text'),
              coin = select.find('option:selected').data('coin'),
              icon = select.find('option:selected').data('icon'),
              num = select.find('option:selected').data('num');
              selectCoinItem(textCont,num,icon,coin);
        });
      },
      onSelectClosed: function() {
        var textCont = $(this).find('.jq-selectbox__select-text'),
            coin = $(this).find('option:selected').data('coin'),
            icon = $(this).find('option:selected').data('icon'),
            num = $(this).find('option:selected').data('num');
        selectCoinItem(textCont,num,icon,coin);
      }
    });
  }

  function selectCoinItem(textCont,num,icon,coin) {
    textCont.html("<div class='flex-wrap'><div class='col-auto select-coin__num'>"+num+"</div><div class='col-auto ml-auto'><svg class='icon icon--"+icon+"'><use xlink:href='img/svg-sprite.svg#"+icon+"'></use></svg><span class='select-coin__name'>"+coin+"</span></div></div>");
  }
  function selectIconItem(textCont,icon,text) {
    textCont.html("<svg class='icon icon--"+icon+"'><use xlink:href='img/svg-sprite.svg#"+icon+"'></use></svg>"+text)
  }

  selectCoin();
  selectIcon()
  //  tabs
  var tabListActive = 'tabs__list-item--active',
      tabListItem = '.tabs__list-item',
      tabsList = '.tabs__list';
      tabsWrap = '.tabs',
      tabItem = '.tabs__item'
      tabActive = 'tabs__item--active';
  $(tabListItem).click(function(e){
    e.preventDefault();
    var tab = $(this).data('tab');
    $(this).parents(tabsList).find(tabListItem).removeClass(tabListActive);
    $(this).addClass(tabListActive);
    $(this).parents(tabsWrap).find(tabItem).removeClass(tabActive);
    $(tab).addClass(tabActive);

    $('.select-coin').styler('destroy');

    selectCoin();
    selectIcon();
  });

  //
  var slider = $( ".slider" );

  slider.each(function(){
    var value = $(this).data('value');

    $(this).slider({
      range: "min",
      max: 100,
      value: value
    });
  });

  // accordion
  var  accordionItem         = '.accordion__item',
       accordionHeader       = '.accordion__header',
       accordionHeaderActive = 'accordion__header--active',
       accordionDropdown     = '.accordion__dropdown';

       $(accordionHeader).click(function(){
         $(this).toggleClass(accordionHeaderActive);
         $(this).parents(accordionItem).find(accordionDropdown).slideToggle();
       });
   // .coin-slider__inner
   var coinSlider = '.coin-slider';
   $(coinSlider).slick({
     slidesToShow: 3,
     prevArrow: '<div class="coin-slider__arrow coin-slider__arrow--prev"><svg class="icon icon--arrow-top"><use xlink:href="img/svg-sprite.svg#arrow-top"></use></svg></div>',
     nextArrow: '<div class="coin-slider__arrow coin-slider__arrow--next"><svg class="icon icon--arrow-down"><use xlink:href="img/svg-sprite.svg#arrow-down"></use></svg></div>',
     dots: false,
     verticalSwiping: true,
     vertical: true,
     centerMode: true,
     swipe: false
   });

  function coinSliderTab() {
    var activeSlide = $(coinSlider).find('.slick-current').data('tab'),
        tabSliderActive = 'coin-slider__tab--active';
    $('.coin-slider__tab').removeClass(tabSliderActive);
    $(activeSlide).addClass(tabSliderActive);
  }

  coinSliderTab();

  $(coinSlider).on('afterChange', function(event, slick, currentSlide, nextSlide){
   coinSliderTab();
  });

  //
  $('.modal-btn').click(function (e) {
     e.preventDefault();
     var $this = $(this);
     $('.modal').removeClass('modal__in');
     $('.modal').css('top','50%');
     setTimeout(function () {
         // open new
         var scrollTop = $(window).scrollTop(),
             modal = $this.attr('href');
         $(modal).css('top',scrollTop + 100);
         $(modal).addClass('modal__in');
         $('#overlay').fadeIn();
     },300);
 });

 $('.modal__close,#overlay, .modal__btn-close').click(function (e) {
     e.preventDefault();
     $('#overlay').fadeOut();
     $('.modal').removeClass('modal__in')
     $('.modal').css('top','50%');
 });

 function menu() {
   var aside = $('.aside').offset();
   $('.menu').css('top',aside.top)
 }

 menu();

 $(window).resize(function(){
    menu();
 });

 $('.circle-chart').each(function(){
   var $this = $(this),
       $circle = $(this).find('.circle-chart__main'),
       $circleSub = $(this).find('.circle-chart__sub'),
       $circleL = $(this).find('.circle-chart__main-l'),
       $circleSubL = $(this).find('.circle-chart__sub-l'),
       r = $circle.attr('r'),
       r2 = $circleSub.attr('r'),
       c = Math.PI*(r*2),
       c2 = Math.PI*(r2*2),
       val = $(this).data('val');

   if (val < 0) { val = 0;}
   if (val > 100) { val = 100;}

   var pct = ((100-val)/100)*c,
       pct2 = ((100-val)/100)*c2;

   $circle.css({ strokeDasharray: c});
   $circle.css({ strokeDashoffset: pct});
   $circleL.css({ strokeDasharray: c + ' ' + (c-pct)});
   $circleL.css({ strokeDashoffset: c});
   $circleSub.css({ strokeDasharray: c2});
   $circleSub.css({ strokeDashoffset: pct2});
   $circleSubL.css({ strokeDasharray: c2 + ' ' + (c2-pct2)});
   $circleSubL.css({ strokeDashoffset: c2});
 });

 $('.select__text').click(function(){
   $(this).parents('.select').toggleClass('select--active');
 });

 $(document).on('click',function(e){
   if(!$(e.target).closest('.select--active,.select__text').length) {
     $('.select--active').removeClass('select--active');
   }
 });
});
