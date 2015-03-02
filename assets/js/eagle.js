(function() {
  var app;

  app = angular.module('myapp', ['ui.router', 'ngSanitize', 'restangular', 'ngRoute']);

  app.config(function(RestangularProvider) {

    /*
    RestangularProvider.setBaseUrl('http://eagletest.media.test.eagleplatform.com/api/v2')
    RestangularProvider.setDefaultRequestParams({ auth_token: 'i7pj2sYYnsPE8jExAx5z'})
    RestangularProvider.setRequestSuffix('.json')
    RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});

    RestangularProvider.addResponseInterceptor (data, operation, what, url, response, deferred) ->

       * фича для выдачи списка видео
      if_records = url.length - url.lastIndexOf('records')
      if (if_records == 7)
        data.data.total_pages = data.total_pages
        data.data.total_records = data.total_records


      return data.data


    console.log("Restangular Initiated")
    RestangularProvider.addRequestInterceptor (elem, operation, what, url) ->
      retElem = elem;
      if operation == 'post' or operation == 'put'
        wrapper = {};
        wrapper[what.substring(0, what.length - 1)] = elem;
        retElem = wrapper;
      return retElem;


    app.config ($translateProvider) ->
    $translateProvider.useStaticFilesLoader({
      prefix: '/locales/',
      suffix: '.json'
    });
    locale = $("body").attr("locale")
    locale = "ru" if !locale
    $translateProvider.preferredLanguage(locale);
     */
  });

}).call(this);

(function() {
  angular.module('myapp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise("/");
    return $stateProvider.state('vod', {
      url: '/',
      abstract: false,
      views: {
        layout: {
          templateUrl: '/engtest/assets/views/main.html',
          controller: 'VodCtrl'
        }
      }
    });
  });

}).call(this);

(function() {
  angular.module("myapp").controller("VodCtrl", [
    "$scope", "Restangular", "$timeout", "$filter", "$location", function($scope, Restangular, $timeout, $filter, $location) {

      $scope.totalscore = 0;
$scope.pos = 6;
$scope.done = false;
$scope.fit = 1;
$scope.errors = [];

/*
$('.cent').text(Math.round($scope.totalscore/60*100));

var alpha = Math.round($scope.totalscore/60*360);
var me = (360-(alpha)) + 90;
	var x0 = 450;
	var y0 = 120;
	x0 = x0 + Math.cos(me/57.2957)*100;
	y0 = y0 - Math.sin(me/57.2957)*100;


if (alpha>180){
var str = "M450 20A100 100 0 1 1 ";
str+=x0.toString();
str+=' ';
str+=y0.toString();
var circ=paper.path(str);
} else {
	var str = "M450 20A100 100 0 0 1 ";
str+=x0.toString();
str+=' ';
str+=y0.toString();
var circ=paper.path(str);
}





circ.attr( {
 fill: 'none',
 stroke:"#27ae60",
 strokeWidth:20
});
*/



var paper = Snap('#svg');





$(document).ready(function(){

//$('.point').stop().animate({left: '274px'},300);

$scope.nextt = function(){

	if (!$scope.done){

	for (var i=0; i<6; i++){
		if ($scope.ans[i]==$scope.coll[i].fin){
			$scope.totalscore++;

		} else {
			$scope.coll[i].you = $scope.ans[i];
			$scope.errors.push($scope.coll[i]);
		}

	}
$scope.coll = [];
$scope.pos +=6;
$scope.fit++;




if ($scope.pos==60){
$('.next').text('завершить');
$scope.done = true;

}
$scope.coll = $scope.ques.splice(0,6);
} else {


$('.cent').text(Math.round($scope.totalscore/60*100));

var alpha = Math.round($scope.totalscore/60*360);
var me = (360-(alpha)) + 90;
	var x0 = 450;
	var y0 = 120;
	x0 = x0 + Math.cos(me/57.2957)*100;
	y0 = y0 - Math.sin(me/57.2957)*100;


if (alpha>180){
var str = "M450 20A100 100 0 1 1 ";
str+=x0.toString();
str+=' ';
str+=y0.toString();
var circ=paper.path(str);
} else {
	var str = "M450 20A100 100 0 0 1 ";
str+=x0.toString();
str+=' ';
str+=y0.toString();
var circ=paper.path(str);
}





circ.attr( {
 fill: 'none',
 stroke:"#27ae60",
 strokeWidth:20
});

var str2 = '';

for (var i=0; i<$scope.errors.length; i++){
	str2 += '<b>';
str2 += $scope.errors[i].text;
str2 += '</b>';
str2 += '<br>';
str2 +='верный ответ: ';
str2 += $scope.errors[i].fin;
str2 += '<br>';
str2 +='ваш ответ: ';
str2 += $scope.errors[i].you;
str2 += '<br><br>';

}
$('.errorarea').html(str2);

$('.showroom').show();
$('.next').hide();
$('.counter').hide();
$scope.coll = [];

}
}



})

$scope.model1 = false;

$scope.setstat = function(index, word){
	$scope.ans[index] = word;
}

  $scope.ques = [
    {text:'I’m a nurse. And ___ do you do?', q1:'how', q2:'what', q3:'which', q4:'who',fin:'what'},
    {text:'Can I have ___ fruit, please?', q1:'a lot', q2:'any', q3:'no', q4:'some',fin:'some'},
	{text:'We go on picnics ___ in the summer.', q1:'many', q2:'a lot', q3:'never', q4:'a lot of',fin:'a lot'},
	{text:'We’re thirsty! Is there ___ juice left?', q1:'a lot', q2:'any', q3:'some', q4:'no',fin:'any'},
	{text:'Mary can ___ all night long.', q1:'to dance', q2:'dancing', q3:'dance', q4:'dances',fin:'dance'},
	{text:'___ boys over there are Spanish.', q1:'this', q2:'that', q3:'those', q4:'these',fin:'those'},
	{text:'Jim is a security guard. He sleeps during the day and works ___ night.', q1:'on', q2:'at', q3:'at the', q4:'in',fin:'at'},
	{text:'Nick is a ___ tennis player than Tom.', q1:'worse', q2:'worst', q3:'bad', q4:'badly',fin:'worse'},
	{text:'Mary drives ___ car to work every day.', q1:'hers', q2:'an', q3:'her', q4:'she',fin:'her'},
	{text:'They want to visit China ___ they love Chinese cuisine.', q1:'so', q2:'because', q3:'but', q4:'why',fin:'because'},
	{text:' We’ve been good friends ___ many years.', q1:'from', q2:'since', q3:'during', q4:'for',fin:'for'},
	{text:'You ___ pay for the tickets. They’re free.', q1:'have to', q2:'doesn’t have to', q3:'don’t have', q4:'needn’t',fin:'needn’t'},
	{text:'These are the photos ___ we took on holiday.', q1:'which', q2:'where', q3:'who', q4:'what',fin:'which'},
	{text:'He doesn’t smoke now, but he ___ a lot when he was young.', q1:'smokes', q2:'has smoked', q3:'was smoked', q4:'used to smoke',fin:'used to smoke'},
	{text:'Nickolas plays chess ___ anyone else I know.', q1:'more good than', q2:'as best as', q3:'better as', q4:'better than',fin:'better than'},
	{text:'I promise I ___ you with the washing-up as soon as I finish this cleaning.', q1:'am helping', q2:'am going to help', q3:'help', q4:'will help',fin:'will help'},
	{text:'How about ___ out tonight?', q1:'eat', q2:'to eat', q3:'eating', q4:'for eating',fin:'eating'},
	{text:'I didn’t like the film. ___. I think it was really boring.', q1:'So I didn’t', q2:'Neither did I', q3:'So did I', q4:'Me too',fin:'Neither did I'},
	{text:'We will not go on holiday ___ we save enough money.', q1:'if', q2:'as soon as', q3:'when', q4:'unless',fin:'unless'},
	{text:'Jill went down with flu and ___ stay in bed for a week.', q1:'mustn’t', q2:'need', q3:'have to', q4:'had to',fin:'had to'},
	{text:'Excuse me, can you ___ me the way to the station, please?', q1:'say', q2:'tell', q3:'speak', q4:'give',fin:'tell'},
	{text:'I ___ to the cinema since last year.', q1:'don’t go', q2:'didn’t go', q3:'haven’t gone', q4:'haven’t been',fin:'haven’t been'},
	{text:' ___ bag is this? – It’s Neil’s.', q1:'where', q2:'Which', q3:'What', q4:'whose',fin:'whose'},
	{text:'Who was the man ___?', q1:'that you spoke', q2:'you were speaking to', q3:'spoke to you', q4:'you were telling',fin:'you were speaking to'},
	{text:'This suitcase it too heavy for me ___ lift.', q1:'to', q2:'that', q3:'too', q4:'for',fin:'to'},
	{text:'There wasn’t anything interesting on TV last night, ___?', q1:'wasn’t it', q2:'is there', q3:'was there', q4:'wasn’t there',fin:'was there'},
	{text:'I ___ lunch when somebody knocked on the door.', q1:'was having', q2:'had', q3:'am having', q4:'have',fin:'was having'},
	{text:'There is a five-hour time difference ___ London and New York.', q1:'between', q2:'at', q3:'in', q4:'among',fin:'between'},
	{text:'They wanted ___ to come to dinner, but we could not go.', q1:'us', q2:'we', q3:'our', q4:'ours',fin:'us'},
	{text:'I have been playing ___ piano since I was five.', q1:'an', q2:'a', q3:'-', q4:'the',fin:'-'},
	{text:'I’m going to visit Mexico and ___ United States.', q1:'-', q2:'the', q3:'a', q4:'an',fin:'the'},
	{text:'You will pass the test if you work ___.', q1:'good', q2:'excellent', q3:'hard', q4:'hardly',fin:'hard'},
	{text:'You certainly wouldn’t like ___ in such bad company.', q1:'to be seeing', q2:'to be seen', q3:'to have seen', q4:'to see',fin:'to be seen'},
	{text:'I’ve lost my watch. Will you help me look ___ it?', q1:'forward', q2:'for', q3:'after', q4:'at',fin:'for'},
	{text:'I often ___ money from my parents', q1:'save', q2:'owe', q3:'lend', q4:'borrow',fin:'borrow'},
	{text:'He ___ on a business trip next Monday.', q1:'has gone', q2:'goes', q3:'will be go', q4:'is going',fin:'is going'},
	{text:'Greg married my mother after my parents divorced, so he’s my ___.', q1:'step-father', q2:'father', q3:'father-in-law', q4:'nephew',fin:'step-father'},
	{text:'He used to be a chain smoker, but he gave ___ smoking ten years ago.', q1:'away', q2:'up', q3:'in', q4:'out',fin:'up'},
	{text:' I tried to call you but your line was ___.', q1:'occupied', q2:'engaged', q3:'connected', q4:'taken',fin:'engaged'},
	{text:'The ___ is downstairs in the kitchen.', q1:'bath', q2:'wash basin', q3:'toilet', q4:'sink',fin:'sink'},
	{text:' I ___ early in the morning now, but before I wasn’t.', q1:'got up', q2:'am used to getting up', q3:'am getting up', q4:'used to get up',fin:'am used to getting up'},
	{text:' I’m looking forward ___ on holiday in summer.', q1:'to go', q2:'at going', q3:'go', q4:'to going',fin:'to going'},
	{text:' I want you to ___ me the truth!', q1:'say', q2:'tell', q3:'pronounce', q4:'speak',fin:'tell'},
	{text:' ___ I felt ill, I went to the party.', q1:'although', q2:'Despite', q3:'yet', q4:'In spite',fin:'although'},
	{text:'I couldn’t change my sweater at the store because I had lost my ___.', q1:'prescription', q2:'check', q3:'recipe', q4:'receipt',fin:'receipt'},
	{text:'Unfortunately, the traffic held me up. When I arrived at the airport, the plane ___.', q1:'already left', q2:'already leaves', q3:'had already left', q4:'will have already left',fin:'had already left'},
	{text:'I’m exhausted. I ___ a lot recently.', q1:'worked', q2:'am working', q3:'have been working', q4:'work',fin:'have been working'},
	{text:'If I ___ the mistake, I would have corrected it.', q1:'noticed', q2:'notice', q3:'have noticed', q4:'had noticed',fin:'had noticed'},
	{text:'There were a lot of people on the platform, waiting ___ arrive.', q1:'the train to', q2:'for the train', q3:'for train to', q4:'for the train to',fin:'for the train to'},
	{text:'There are a lot of educational websites ___ this one.', q1:'the same than', q2:'similar to', q3:'same as', q4:'similar than',fin:'similar to'},
	{text:'You ___ take along some cash. The restaurant may not accept credit cards.', q1:'have to', q2:'shall', q3:'may', q4:'had better',fin:'had better'},
	{text:'Sheila’s engagement ring is enormous! It ___ have cost a fortune.', q1:'can’t', q2:'must', q3:'should', q4:'need',fin:'must'},
	{text:'He came ___ a lot of money at a very early age, so he has never had to work.', q1:'out', q2:'away', q3:'into', q4:'with',fin:'into'},
	{text:'Maggie put the blanket ___ her son to keep him warm as he slept.', q1:'in', q2:'away', q3:'over', q4:'off',fin:'over'},
	{text:'If you really want to send that letter off today, it’s ___ time you went to the post office.', q1:'right', q2:'quick', q3:'high', q4:'proper',fin:'high'},
	{text:'No sooner ___ I shut the door, than the telephone rang.', q1:'had', q2:'did', q3:'will', q4:'have',fin:'had'},
	{text:'I must admit I ___ thought how the story would finish before I read the book.', q1:'haven’t', q2:'couldn’t', q3:'aren’t', q4:'hadn’t',fin:'hadn’t'},
	{text:'___ me if I’ve told you this before.', q1:'stops', q2:'Stopped', q3:'stop', q4:'Stopping',fin:'stop'},
	{text:'That stupid dog ___ all day long.', q1:'has always barked', q2:'always is barking', q3:'is always barking', q4:'does always bark',fin:'is always barking'},
	{text:'Your clothing is so ___ of date. You need a modern wardrobe.', q1:'out', q2:'on', q3:'in', q4:'under',fin:'out'},

	];





	$scope.coll = [];
	$scope.coll = $scope.ques.splice(0,6);



	$scope.ans = [];



    }
  ]);

}).call(this);
