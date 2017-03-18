// using some ES6; turned on struct mode for let.
"use strict";
// sections array to filter which section should be rendered. 
var sections = ["prerequites", "coreRequirements", "specializationRequirements"];
// Template for all courses that are rendered
var courseTemplate = "<section id="+"course-wrapper"+" class="+'row'+"><span class="+'col-sm-1'+"><i></i></span><article class="+'col-sm-4'+"><input class="+'course-id'+"></article><div class="+'col-sm-2'+"><span class="+'units'+"></span></div><article class="+'col-sm-2'+"><input class="+'grade'+"></article><div class="+'col-sm-2'+"><span class="+'grade-units'+"></span></section>";

// called on click of any of the group button options
function render(){
	// pipes in text content from the dropdown-button group of selected button into specialization span.
	let specializationTitle = $('input[id='+data+']')[0].value;
	$('#specialization').html(specializationTitle);
	// loop through sections and renders courses to page by appending courseTemplate to correct section based on length of array from json data.js file.
	$.each(sections, function(indexSections, elementSections){
		// Returns the courses and GPA course units to render on click. Data is the variable with a value returned from session storage variable filter. elementSections pipes in the section from the section array.
		let optionToRender = semesterCourses[data][0][elementSections];
		for (let i = 0; i < optionToRender.length; i++) {
		    if (elementSections === sections[0]) {
		    	$("#prerequite").append(courseTemplate);
		    	// Adds class with the name of the section to be able to filter for Quater Courses on focus. Repeats for all inputs with 'course-id'
		    	$('input.course-id').addClass(sections[0]);
		    	$('article.col-sm-4').addClass('col-xs-7');
		    	$('article.col-sm-2').addClass('col-xs-4');
		    } else if (elementSections === sections[1]) {
		    	$("#core-requirements").append(courseTemplate);
		    	$('input.course-id').addClass(sections[1]);
		    	$('article.col-sm-4').addClass('col-xs-7');
		    	$('article.col-sm-2').addClass('col-xs-4');
		    } else {
		    	$("#specialization-requirements").append(courseTemplate);
		    	$('input.course-id').addClass(sections[2]);
		    	$('article.col-sm-4').addClass('col-xs-7');
		    	$('article.col-sm-2').addClass('col-xs-4');
		  	}
		  	// adding in font awesome icon to delete course if not needed.
		    $("section span i").addClass("fa fa-times-circle remove");
		    $("section span i").parent().addClass("col-xs-1");
		}
	});
	// New array with elements copied from the nodes array returned from querySelectorAll so we can envoke array methods on items.
	var nodesArray = [].slice.call(document.querySelectorAll('input.course-id'));
	//Return values of semester courses from selected option (button click or value of data) to extract correct courses and units. 
	let courseNumber = Object.values(semesterCourses[data][0]);
	//hold all courses for selected option.
	var coursesByOption = [];
	//hold all GPAUnits for selected option.
	var unitsByOption = [];
	// push all courses and units into coursesByOption and  untisByOPtions Array.
	courseNumber.forEach(function(e, i) {
		e.forEach(function(nestArryElement, nestArryIndex) {
			coursesByOption.push(nestArryElement.value);
			unitsByOption.push(nestArryElement.data);
		});
	});
	// 
	$.each(nodesArray, function(i,e) {
		// render the course into the input
		$(e).val(coursesByOption[i]);
		// render the GPA units value into the input
		$(this).parent().next().children().html(unitsByOption[i]);
	});
	// Document ready being called as code below is determined by user input.
	$(document).ready(function(){
		// When user clicks in an input.....
	    $('input').focus(function(){
	    	// to change the course that was rendered... 
			if ($(this).hasClass('course-id')) {
				// Returns all the classes from the input that user focused on. Takes the second class which by convention is the "section" (prerequites, coreRequirements, specializationRequirements). 
	    		let sectionToFilter = $(this).attr('class').split(' ')[1];
	    		// uses the autocomplete plug in to render list of quater courses for end user to select from. Courses are bounded to section as with semester.
				$(this).autocomplete({
					// lookup is property that accepts the range to autocomplete from the json. 
				    lookup: quaterCourses[data][0][sectionToFilter],
				    onSelect: function (suggestion) {
				    	// sets the GPA units from json.
						$(this).parent().next().children().html(suggestion.data);
				    }
				});
			// Sets autocomplete lookup value to the grades object in data.js
			} else if ($(this).hasClass('grade')) {
				$(this).autocomplete({
				    lookup: grades,
				    onSelect: function (suggestion) {
						$(this).parent().next().children().html(suggestion.data);
						// Explicit coerion from sting to number.
						let gpaPointsForCalc = +suggestion.data;
						let courseIdForCalc = +$(this).parent().siblings().find('span.units')[0].textContent;
						sumUnits(gpaPointsForCalc, courseIdForCalc);
				    }
				});	
			}
		});
		$('input').focus(function(){
			let ogValue = $(this).val();
			if ($(this).hasClass('course-id')) {
				$(this).keyup(function(){
					if (ogValue != $(this).val()) {
						console.log(ogValue, $(this).val());
					}
				})
			}
		})
		// focuses on first empty input.
		$('input').each(function(){
			if($(this).val() === ''){
				this.focus();
				return false;
			}
		});
		// remove a course.
		$(".remove").click(function(){
			$(this).parent().parent().remove();
			sumUnits();
		});
	});
}	
// Variable to access sessionStorage
var data = sessionStorage.getItem('filter');
// sets filter to the value of the input the user is focused on. Value attribute for inputs are set to first property of semester and quater objects in JSON file. 
$("input[name=options]").focus(function(){
	let filter = this.id;
	sessionStorage.setItem('filter', filter);
	// reloads the page to clear all
	location.reload();
});
// re-render the page with data now set to the value of clicked button.
render();

// Empty arrays that will return entered grade values and untis for calculation.
let unitsAry = [];
let gradesAry = [];
// Invoked everytime user enters a grade. Only renders final GPA once all grades have been enter.  Will refactor sunUnits, gpaCalc if needed. Code works as follows: returns 2 arrays of (1) all GPA units and (2) grades entered.  GPA units is filled on render. The gradesAry is filled one value at a time by user entering grade. Patterned this way because oringially though of adding courses one by one with click button.
function sumUnits (inputGrade, inputCourse) {
	unitsAry.push(inputCourse);
	gradesAry.push(inputGrade);
	console.log(unitsAry);
	gpaCalc(unitsAry, gradesAry);
}

function gpaCalc(units, grades) {
	let totalUnits = 0;
	let totalGpaUnits = 0;
	for (var i = 0; i < units.length; i++) {
		totalGpaUnits += (units[i] * grades[i]); 
		totalUnits += units[i];
	}
	let gpa = totalGpaUnits/totalUnits;
	if (!isNaN(gpa)) {
		return $("#gpa").html(gpa.toFixed(2));
	}
}
//hide prerequite if option has no prereqs.  This has to be called after render has been called.
(function hidePrereqs() {
	if ($('#prerequite').children().length === 2) {
		$('#prerequite').hide();
	}
})();