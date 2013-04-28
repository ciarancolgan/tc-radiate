//----------------------
// KNOCKOUTJS EXTENSIONS
//----------------------

//Animate the showing and hiding of a bound element
ko.bindingHandlers.showHide = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.utils.unwrapObservable(value));
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        ko.utils.unwrapObservable(value) ? $(element).fadeIn(500) : $(element).fadeOut(300);
    }
};

//Provides a way of accessing properties without them being null
ko.safeObservable = function (initialValue) {
    var result = ko.observable(initialValue);
    result.safe = ko.dependentObservable(function () {
        return result() || {};
    });
    return result;
};

//----------------------
// HELPER METHODS
//----------------------
//Returns one of 8 random images for the buid success or fail image
function getRandomClass() {
	return 'c' + Math.floor(Math.random() * 8);
}

//Used to append a timestamp to the url so the result isn't cached
function getTsQSParam() {
    return "&ts=" + new Date().toTimeString();
}
//function parseAllBuilds(xml, buildTypes) {
//	var builds = [];
//	$(xml).find('build').each(function () {
//		var buildTypeId = $(this).attr("buildTypeId");
//		var buildType = ko.utils.arrayFirst(buildTypes, function (item) {
//			return item.id == buildTypeId;
//		});

//		var obj = {
//			branchName:         $(this).attr('branchName'),
//			percentageComplete: $(this).attr('percentageComplete'),
//			isRunning:          $(this).attr('running') == "true",
//			status:             $(this).attr('status') + "",
//			startDate:          $(this).attr("startDate"),
//			type:               buildType ? buildType.name : "",
//			id:                 $(this).attr("id")
//		};

//		builds.push(new BuildViewModel(obj));
				
//		//remove builds if there are more than 20 so the screen isnt bombarded with too much data
//		for (var i = 20; i < self.builds().length; i++) {
//			self.builds.remove(self.builds()[i]);
//		}
//	});
//	return builds;
//}

//function parseMainBuild(xml) {
//    var obj = {
//        status:         $(xml).find('build:first-child').attr("status") + "",
//        startDate:      $(xml).find('startDate').text(),
//        endDate:        $(xml).find('endDate').text(),
//        branchName:     $(xml).find('build:first-child').attr("branchName"),
//        triggeredBy:    $(xml).find('triggered>user').attr("name"),
//        number:         $(xml).find('build:first-child').attr("number"),
//        issueId:        $(xml).find('relatedIssues>issueUsage>issue').attr("id")
//    };
//    return new BuildViewModel(obj);
//}


//var p = {"count":100,
//    "nextHref":"/guestAuth/app/rest/builds?locator=running:any,branch:branched:any&count=100&start=100",
//    "build":
//        [{"id":39203,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt11","branchName":"develop","startDate":"20130426T174459+0100","href":"/guestAuth/app/rest/builds/id:39203","webUrl":"http://tclive:8111/viewLog.html?buildId=39203&buildTypeId=bt11"},
//            {"id":39202,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt14","branchName":"develop","startDate":"20130426T174104+0100","href":"/guestAuth/app/rest/builds/id:39202","webUrl":"http://tclive:8111/viewLog.html?buildId=39202&buildTypeId=bt14"},{"id":39201,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt9","branchName":"develop","startDate":"20130426T173822+0100","href":"/guestAuth/app/rest/builds/id:39201","webUrl":"http://tclive:8111/viewLog.html?buildId=39201&buildTypeId=bt9"},{"id":39200,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt8","branchName":"develop","startDate":"20130426T173755+0100","href":"/guestAuth/app/rest/builds/id:39200","webUrl":"http://tclive:8111/viewLog.html?buildId=39200&buildTypeId=bt8"},{"id":39199,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt3","branchName":"develop","startDate":"20130426T173724+0100","href":"/guestAuth/app/rest/builds/id:39199","webUrl":"http://tclive:8111/viewLog.html?buildId=39199&buildTypeId=bt3"},{"id":39198,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt20","branchName":"develop","startDate":"20130426T173458+0100","href":"/guestAuth/app/rest/builds/id:39198","webUrl":"http://tclive:8111/viewLog.html?buildId=39198&buildTypeId=bt20"},{"id":39197,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt6","branchName":"develop","startDate":"20130426T173458+0100","href":"/guestAuth/app/rest/builds/id:39197","webUrl":"http://tclive:8111/viewLog.html?buildId=39197&buildTypeId=bt6"},{"id":39196,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt5","branchName":"develop","startDate":"20130426T173226+0100","href":"/guestAuth/app/rest/builds/id:39196","webUrl":"http://tclive:8111/viewLog.html?buildId=39196&buildTypeId=bt5"},{"id":39195,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt13","branchName":"develop","startDate":"20130426T173101+0100","href":"/guestAuth/app/rest/builds/id:39195","webUrl":"http://tclive:8111/viewLog.html?buildId=39195&buildTypeId=bt13"},{"id":39194,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt21","branchName":"develop","startDate":"20130426T173101+0100","href":"/guestAuth/app/rest/builds/id:39194","webUrl":"http://tclive:8111/viewLog.html?buildId=39194&buildTypeId=bt21"},{"id":39193,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt12","branchName":"develop","startDate":"20130426T173101+0100","href":"/guestAuth/app/rest/builds/id:39193","webUrl":"http://tclive:8111/viewLog.html?buildId=39193&buildTypeId=bt12"},{"id":39192,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt10","branchName":"develop","startDate":"20130426T173006+0100","href":"/guestAuth/app/rest/builds/id:39192","webUrl":"http://tclive:8111/viewLog.html?buildId=39192&buildTypeId=bt10"},{"id":39191,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt7","branchName":"develop","startDate":"20130426T173006+0100","href":"/guestAuth/app/rest/builds/id:39191","webUrl":"http://tclive:8111/viewLog.html?buildId=39191&buildTypeId=bt7"},{"id":39190,"number":"4.6.5.3293","status":"SUCCESS","buildTypeId":"bt19","branchName":"develop","startDate":"20130426T173002+0100","href":"/guestAuth/app/rest/builds/id:39190","webUrl":"http://tclive:8111/viewLog.html?buildId=39190&buildTypeId=bt19"},{"id":39189,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt11","branchName":"develop","startDate":"20130426T172841+0100","href":"/guestAuth/app/rest/builds/id:39189","webUrl":"http://tclive:8111/viewLog.html?buildId=39189&buildTypeId=bt11"},{"id":39188,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt9","branchName":"develop","startDate":"20130426T172234+0100","href":"/guestAuth/app/rest/builds/id:39188","webUrl":"http://tclive:8111/viewLog.html?buildId=39188&buildTypeId=bt9"},{"id":39187,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt8","branchName":"develop","startDate":"20130426T172118+0100","href":"/guestAuth/app/rest/builds/id:39187","webUrl":"http://tclive:8111/viewLog.html?buildId=39187&buildTypeId=bt8"},{"id":39186,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt14","branchName":"develop","startDate":"20130426T172047+0100","href":"/guestAuth/app/rest/builds/id:39186","webUrl":"http://tclive:8111/viewLog.html?buildId=39186&buildTypeId=bt14"},{"id":39185,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt3","branchName":"develop","startDate":"20130426T172005+0100","href":"/guestAuth/app/rest/builds/id:39185","webUrl":"http://tclive:8111/viewLog.html?buildId=39185&buildTypeId=bt3"},{"id":39184,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt20","branchName":"develop","startDate":"20130426T171916+0100","href":"/guestAuth/app/rest/builds/id:39184","webUrl":"http://tclive:8111/viewLog.html?buildId=39184&buildTypeId=bt20"},{"id":39183,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt6","branchName":"develop","startDate":"20130426T171558+0100","href":"/guestAuth/app/rest/builds/id:39183","webUrl":"http://tclive:8111/viewLog.html?buildId=39183&buildTypeId=bt6"},{"id":39182,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt11","branchName":"rich","startDate":"20130426T171525+0100","href":"/guestAuth/app/rest/builds/id:39182","webUrl":"http://tclive:8111/viewLog.html?buildId=39182&buildTypeId=bt11"},{"id":39181,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt5","branchName":"develop","startDate":"20130426T171522+0100","href":"/guestAuth/app/rest/builds/id:39181","webUrl":"http://tclive:8111/viewLog.html?buildId=39181&buildTypeId=bt5"},{"id":39180,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt21","branchName":"develop","startDate":"20130426T171405+0100","href":"/guestAuth/app/rest/builds/id:39180","webUrl":"http://tclive:8111/viewLog.html?buildId=39180&buildTypeId=bt21"},{"id":39179,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt13","branchName":"develop","startDate":"20130426T171302+0100","href":"/guestAuth/app/rest/builds/id:39179","webUrl":"http://tclive:8111/viewLog.html?buildId=39179&buildTypeId=bt13"},{"id":39178,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt12","branchName":"develop","startDate":"20130426T171233+0100","href":"/guestAuth/app/rest/builds/id:39178","webUrl":"http://tclive:8111/viewLog.html?buildId=39178&buildTypeId=bt12"},{"id":39177,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt10","branchName":"develop","startDate":"20130426T171151+0100","href":"/guestAuth/app/rest/builds/id:39177","webUrl":"http://tclive:8111/viewLog.html?buildId=39177&buildTypeId=bt10"},{"id":39176,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt7","branchName":"develop","startDate":"20130426T171108+0100","href":"/guestAuth/app/rest/builds/id:39176","webUrl":"http://tclive:8111/viewLog.html?buildId=39176&buildTypeId=bt7"},{"id":39175,"number":"4.6.5.3292","status":"SUCCESS","buildTypeId":"bt19","branchName":"develop","startDate":"20130426T171104+0100","href":"/guestAuth/app/rest/builds/id:39175","webUrl":"http://tclive:8111/viewLog.html?buildId=39175&buildTypeId=bt19"},{"id":39174,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt14","branchName":"rich","startDate":"20130426T171043+0100","href":"/guestAuth/app/rest/builds/id:39174","webUrl":"http://tclive:8111/viewLog.html?buildId=39174&buildTypeId=bt14"},{"id":39173,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt9","branchName":"rich","startDate":"20130426T170912+0100","href":"/guestAuth/app/rest/builds/id:39173","webUrl":"http://tclive:8111/viewLog.html?buildId=39173&buildTypeId=bt9"},{"id":39172,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt8","branchName":"rich","startDate":"20130426T170809+0100","href":"/guestAuth/app/rest/builds/id:39172","webUrl":"http://tclive:8111/viewLog.html?buildId=39172&buildTypeId=bt8"},{"id":39171,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt3","branchName":"rich","startDate":"20130426T170616+0100","href":"/guestAuth/app/rest/builds/id:39171","webUrl":"http://tclive:8111/viewLog.html?buildId=39171&buildTypeId=bt3"},{"id":39170,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt20","branchName":"rich","startDate":"20130426T170600+0100","href":"/guestAuth/app/rest/builds/id:39170","webUrl":"http://tclive:8111/viewLog.html?buildId=39170&buildTypeId=bt20"},{"id":39169,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt6","branchName":"rich","startDate":"20130426T170601+0100","href":"/guestAuth/app/rest/builds/id:39169","webUrl":"http://tclive:8111/viewLog.html?buildId=39169&buildTypeId=bt6"},{"id":39168,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt5","branchName":"rich","startDate":"20130426T170454+0100","href":"/guestAuth/app/rest/builds/id:39168","webUrl":"http://tclive:8111/viewLog.html?buildId=39168&buildTypeId=bt5"},{"id":39167,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt21","branchName":"rich","startDate":"20130426T170329+0100","href":"/guestAuth/app/rest/builds/id:39167","webUrl":"http://tclive:8111/viewLog.html?buildId=39167&buildTypeId=bt21"},{"id":39166,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt12","branchName":"rich","startDate":"20130426T170329+0100","href":"/guestAuth/app/rest/builds/id:39166","webUrl":"http://tclive:8111/viewLog.html?buildId=39166&buildTypeId=bt12"},{"id":39165,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt13","branchName":"rich","startDate":"20130426T170328+0100","href":"/guestAuth/app/rest/builds/id:39165","webUrl":"http://tclive:8111/viewLog.html?buildId=39165&buildTypeId=bt13"},{"id":39164,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt7","branchName":"rich","startDate":"20130426T170237+0100","href":"/guestAuth/app/rest/builds/id:39164","webUrl":"http://tclive:8111/viewLog.html?buildId=39164&buildTypeId=bt7"},{"id":39163,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt10","branchName":"rich","startDate":"20130426T170237+0100","href":"/guestAuth/app/rest/builds/id:39163","webUrl":"http://tclive:8111/viewLog.html?buildId=39163&buildTypeId=bt10"},{"id":39162,"number":"4.6.5.3291","status":"SUCCESS","buildTypeId":"bt19","branchName":"rich","startDate":"20130426T170232+0100","href":"/guestAuth/app/rest/builds/id:39162","webUrl":"http://tclive:8111/viewLog.html?buildId=39162&buildTypeId=bt19"},{"id":39161,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt11","branchName":"sana","startDate":"20130426T154256+0100","href":"/guestAuth/app/rest/builds/id:39161","webUrl":"http://tclive:8111/viewLog.html?buildId=39161&buildTypeId=bt11"},{"id":39160,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt14","branchName":"sana","startDate":"20130426T153811+0100","href":"/guestAuth/app/rest/builds/id:39160","webUrl":"http://tclive:8111/viewLog.html?buildId=39160&buildTypeId=bt14"},{"id":39159,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt9","branchName":"sana","startDate":"20130426T153642+0100","href":"/guestAuth/app/rest/builds/id:39159","webUrl":"http://tclive:8111/viewLog.html?buildId=39159&buildTypeId=bt9"},{"id":39158,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt8","branchName":"sana","startDate":"20130426T153538+0100","href":"/guestAuth/app/rest/builds/id:39158","webUrl":"http://tclive:8111/viewLog.html?buildId=39158&buildTypeId=bt8"},{"id":39157,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt3","branchName":"sana","startDate":"20130426T153332+0100","href":"/guestAuth/app/rest/builds/id:39157","webUrl":"http://tclive:8111/viewLog.html?buildId=39157&buildTypeId=bt3"},{"id":39156,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt20","branchName":"sana","startDate":"20130426T153329+0100","href":"/guestAuth/app/rest/builds/id:39156","webUrl":"http://tclive:8111/viewLog.html?buildId=39156&buildTypeId=bt20"},{"id":39155,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt6","branchName":"sana","startDate":"20130426T153330+0100","href":"/guestAuth/app/rest/builds/id:39155","webUrl":"http://tclive:8111/viewLog.html?buildId=39155&buildTypeId=bt6"},{"id":39154,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt5","branchName":"sana","startDate":"20130426T153220+0100","href":"/guestAuth/app/rest/builds/id:39154","webUrl":"http://tclive:8111/viewLog.html?buildId=39154&buildTypeId=bt5"},{"id":39153,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt12","branchName":"sana","startDate":"20130426T153059+0100","href":"/guestAuth/app/rest/builds/id:39153","webUrl":"http://tclive:8111/viewLog.html?buildId=39153&buildTypeId=bt12"},{"id":39152,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt13","branchName":"sana","startDate":"20130426T153058+0100","href":"/guestAuth/app/rest/builds/id:39152","webUrl":"http://tclive:8111/viewLog.html?buildId=39152&buildTypeId=bt13"},{"id":39151,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt21","branchName":"sana","startDate":"20130426T153058+0100","href":"/guestAuth/app/rest/builds/id:39151","webUrl":"http://tclive:8111/viewLog.html?buildId=39151&buildTypeId=bt21"},{"id":39150,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt7","branchName":"sana","startDate":"20130426T153009+0100","href":"/guestAuth/app/rest/builds/id:39150","webUrl":"http://tclive:8111/viewLog.html?buildId=39150&buildTypeId=bt7"},{"id":39149,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt10","branchName":"sana","startDate":"20130426T153009+0100","href":"/guestAuth/app/rest/builds/id:39149","webUrl":"http://tclive:8111/viewLog.html?buildId=39149&buildTypeId=bt10"},{"id":39148,"number":"4.6.5.3290","status":"SUCCESS","buildTypeId":"bt19","branchName":"sana","startDate":"20130426T153005+0100","href":"/guestAuth/app/rest/builds/id:39148","webUrl":"http://tclive:8111/viewLog.html?buildId=39148&buildTypeId=bt19"},{"id":39147,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt11","branchName":"develop","startDate":"20130426T140222+0100","href":"/guestAuth/app/rest/builds/id:39147","webUrl":"http://tclive:8111/viewLog.html?buildId=39147&buildTypeId=bt11"},{"id":39146,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt14","branchName":"develop","startDate":"20130426T135613+0100","href":"/guestAuth/app/rest/builds/id:39146","webUrl":"http://tclive:8111/viewLog.html?buildId=39146&buildTypeId=bt14"},{"id":39145,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt9","branchName":"develop","startDate":"20130426T135506+0100","href":"/guestAuth/app/rest/builds/id:39145","webUrl":"http://tclive:8111/viewLog.html?buildId=39145&buildTypeId=bt9"},{"id":39144,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt8","branchName":"develop","startDate":"20130426T135455+0100","href":"/guestAuth/app/rest/builds/id:39144","webUrl":"http://tclive:8111/viewLog.html?buildId=39144&buildTypeId=bt8"},{"id":39143,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt3","branchName":"develop","startDate":"20130426T135428+0100","href":"/guestAuth/app/rest/builds/id:39143","webUrl":"http://tclive:8111/viewLog.html?buildId=39143&buildTypeId=bt3"},{"id":39142,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt20","branchName":"develop","startDate":"20130426T135115+0100","href":"/guestAuth/app/rest/builds/id:39142","webUrl":"http://tclive:8111/viewLog.html?buildId=39142&buildTypeId=bt20"},{"id":39141,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt6","branchName":"develop","startDate":"20130426T135114+0100","href":"/guestAuth/app/rest/builds/id:39141","webUrl":"http://tclive:8111/viewLog.html?buildId=39141&buildTypeId=bt6"},{"id":39140,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt5","branchName":"develop","startDate":"20130426T135003+0100","href":"/guestAuth/app/rest/builds/id:39140","webUrl":"http://tclive:8111/viewLog.html?buildId=39140&buildTypeId=bt5"},{"id":39139,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt12","branchName":"develop","startDate":"20130426T134840+0100","href":"/guestAuth/app/rest/builds/id:39139","webUrl":"http://tclive:8111/viewLog.html?buildId=39139&buildTypeId=bt12"},{"id":39138,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt13","branchName":"develop","startDate":"20130426T134840+0100","href":"/guestAuth/app/rest/builds/id:39138","webUrl":"http://tclive:8111/viewLog.html?buildId=39138&buildTypeId=bt13"},{"id":39137,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt21","branchName":"develop","startDate":"20130426T134840+0100","href":"/guestAuth/app/rest/builds/id:39137","webUrl":"http://tclive:8111/viewLog.html?buildId=39137&buildTypeId=bt21"},{"id":39136,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt10","branchName":"develop","startDate":"20130426T134755+0100","href":"/guestAuth/app/rest/builds/id:39136","webUrl":"http://tclive:8111/viewLog.html?buildId=39136&buildTypeId=bt10"},{"id":39135,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt7","branchName":"develop","startDate":"20130426T134755+0100","href":"/guestAuth/app/rest/builds/id:39135","webUrl":"http://tclive:8111/viewLog.html?buildId=39135&buildTypeId=bt7"},{"id":39134,"number":"4.6.5.3289","status":"SUCCESS","buildTypeId":"bt19","branchName":"develop","startDate":"20130426T134751+0100","href":"/guestAuth/app/rest/builds/id:39134","webUrl":"http://tclive:8111/viewLog.html?buildId=39134&buildTypeId=bt19"},{"id":39133,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt11","branchName":"hinch","startDate":"20130426T133600+0100","href":"/guestAuth/app/rest/builds/id:39133","webUrl":"http://tclive:8111/viewLog.html?buildId=39133&buildTypeId=bt11"},{"id":39132,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt14","branchName":"hinch","startDate":"20130426T133120+0100","href":"/guestAuth/app/rest/builds/id:39132","webUrl":"http://tclive:8111/viewLog.html?buildId=39132&buildTypeId=bt14"},{"id":39131,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt9","branchName":"hinch","startDate":"20130426T132930+0100","href":"/guestAuth/app/rest/builds/id:39131","webUrl":"http://tclive:8111/viewLog.html?buildId=39131&buildTypeId=bt9"},{"id":39130,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt8","branchName":"hinch","startDate":"20130426T132844+0100","href":"/guestAuth/app/rest/builds/id:39130","webUrl":"http://tclive:8111/viewLog.html?buildId=39130&buildTypeId=bt8"},{"id":39129,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt6","branchName":"hinch","startDate":"20130426T132638+0100","href":"/guestAuth/app/rest/builds/id:39129","webUrl":"http://tclive:8111/viewLog.html?buildId=39129&buildTypeId=bt6"},{"id":39128,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt20","branchName":"hinch","startDate":"20130426T132638+0100","href":"/guestAuth/app/rest/builds/id:39128","webUrl":"http://tclive:8111/viewLog.html?buildId=39128&buildTypeId=bt20"},{"id":39127,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt3","branchName":"hinch","startDate":"20130426T132638+0100","href":"/guestAuth/app/rest/builds/id:39127","webUrl":"http://tclive:8111/viewLog.html?buildId=39127&buildTypeId=bt3"},{"id":39126,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt5","branchName":"hinch","startDate":"20130426T132527+0100","href":"/guestAuth/app/rest/builds/id:39126","webUrl":"http://tclive:8111/viewLog.html?buildId=39126&buildTypeId=bt5"},{"id":39125,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt13","branchName":"hinch","startDate":"20130426T132406+0100","href":"/guestAuth/app/rest/builds/id:39125","webUrl":"http://tclive:8111/viewLog.html?buildId=39125&buildTypeId=bt13"},{"id":39124,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt21","branchName":"hinch","startDate":"20130426T132406+0100","href":"/guestAuth/app/rest/builds/id:39124","webUrl":"http://tclive:8111/viewLog.html?buildId=39124&buildTypeId=bt21"},{"id":39123,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt12","branchName":"hinch","startDate":"20130426T132406+0100","href":"/guestAuth/app/rest/builds/id:39123","webUrl":"http://tclive:8111/viewLog.html?buildId=39123&buildTypeId=bt12"},{"id":39122,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt7","branchName":"hinch","startDate":"20130426T132317+0100","href":"/guestAuth/app/rest/builds/id:39122","webUrl":"http://tclive:8111/viewLog.html?buildId=39122&buildTypeId=bt7"},{"id":39121,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt10","branchName":"hinch","startDate":"20130426T132317+0100","href":"/guestAuth/app/rest/builds/id:39121","webUrl":"http://tclive:8111/viewLog.html?buildId=39121&buildTypeId=bt10"},{"id":39120,"number":"4.6.5.3288","status":"SUCCESS","buildTypeId":"bt19","branchName":"hinch","startDate":"20130426T132313+0100","href":"/guestAuth/app/rest/builds/id:39120","webUrl":"http://tclive:8111/viewLog.html?buildId=39120&buildTypeId=bt19"},{"id":39119,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt11","branchName":"rich","startDate":"20130426T120934+0100","href":"/guestAuth/app/rest/builds/id:39119","webUrl":"http://tclive:8111/viewLog.html?buildId=39119&buildTypeId=bt11"},{"id":39118,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt14","branchName":"rich","startDate":"20130426T120450+0100","href":"/guestAuth/app/rest/builds/id:39118","webUrl":"http://tclive:8111/viewLog.html?buildId=39118&buildTypeId=bt14"},{"id":39117,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt9","branchName":"rich","startDate":"20130426T120322+0100","href":"/guestAuth/app/rest/builds/id:39117","webUrl":"http://tclive:8111/viewLog.html?buildId=39117&buildTypeId=bt9"},{"id":39116,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt8","branchName":"rich","startDate":"20130426T120214+0100","href":"/guestAuth/app/rest/builds/id:39116","webUrl":"http://tclive:8111/viewLog.html?buildId=39116&buildTypeId=bt8"},{"id":39115,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt3","branchName":"rich","startDate":"20130426T120013+0100","href":"/guestAuth/app/rest/builds/id:39115","webUrl":"http://tclive:8111/viewLog.html?buildId=39115&buildTypeId=bt3"},{"id":39114,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt6","branchName":"rich","startDate":"20130426T120009+0100","href":"/guestAuth/app/rest/builds/id:39114","webUrl":"http://tclive:8111/viewLog.html?buildId=39114&buildTypeId=bt6"},{"id":39113,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt20","branchName":"rich","startDate":"20130426T120008+0100","href":"/guestAuth/app/rest/builds/id:39113","webUrl":"http://tclive:8111/viewLog.html?buildId=39113&buildTypeId=bt20"},{"id":39112,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt5","branchName":"rich","startDate":"20130426T115902+0100","href":"/guestAuth/app/rest/builds/id:39112","webUrl":"http://tclive:8111/viewLog.html?buildId=39112&buildTypeId=bt5"},{"id":39111,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt13","branchName":"rich","startDate":"20130426T115738+0100","href":"/guestAuth/app/rest/builds/id:39111","webUrl":"http://tclive:8111/viewLog.html?buildId=39111&buildTypeId=bt13"},{"id":39110,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt12","branchName":"rich","startDate":"20130426T115737+0100","href":"/guestAuth/app/rest/builds/id:39110","webUrl":"http://tclive:8111/viewLog.html?buildId=39110&buildTypeId=bt12"},{"id":39109,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt21","branchName":"rich","startDate":"20130426T115737+0100","href":"/guestAuth/app/rest/builds/id:39109","webUrl":"http://tclive:8111/viewLog.html?buildId=39109&buildTypeId=bt21"},{"id":39108,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt7","branchName":"rich","startDate":"20130426T115652+0100","href":"/guestAuth/app/rest/builds/id:39108","webUrl":"http://tclive:8111/viewLog.html?buildId=39108&buildTypeId=bt7"},{"id":39107,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt10","branchName":"rich","startDate":"20130426T115651+0100","href":"/guestAuth/app/rest/builds/id:39107","webUrl":"http://tclive:8111/viewLog.html?buildId=39107&buildTypeId=bt10"},{"id":39106,"number":"4.6.5.3287","status":"SUCCESS","buildTypeId":"bt19","branchName":"rich","startDate":"20130426T115647+0100","href":"/guestAuth/app/rest/builds/id:39106","webUrl":"http://tclive:8111/viewLog.html?buildId=39106&buildTypeId=bt19"},{"id":39105,"number":"4.6.5.3286","status":"SUCCESS","buildTypeId":"bt11","branchName":"develop","startDate":"20130426T110945+0100","href":"/guestAuth/app/rest/builds/id:39105","webUrl":"http://tclive:8111/viewLog.html?buildId=39105&buildTypeId=bt11"},{"id":39104,"number":"4.6.5.3286","status":"SUCCESS","buildTypeId":"bt14","branchName":"develop","startDate":"20130426T110338+0100","href":"/guestAuth/app/rest/builds/id:39104","webUrl":"http://tclive:8111/viewLog.html?buildId=39104&buildTypeId=bt14"}]}