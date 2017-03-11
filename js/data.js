//JSON file that contains "data" for GPA Calculator App for specific program options. Structure of file is object > array > object > array > object
//Semester courses with Grade point values assigned to each course per option
var semesterCourses = {
	"mildModerate" : [{
		"prerequites" : [
			{ "value": "EDSP 4000", "data": 12 },
			{ "value": "EDSP 4001", "data": 4 }
		],
		"coreRequirements" : [
			{ "value": "EDEL 4170", "data": 12 },
			{ "value": "EDIT 5100", "data": 8 },
			{ "value": "EDSP 4010", "data": 12 },
			{ "value": "EDSP 4020", "data": 12 },
			{ "value": "EDSP 4030", "data": 12 },
			{ "value": "EDSP 4040", "data": 12 },
			{ "value": "EDSP 4050", "data": 12 },
			{ "value": "Early Fieldwork", "data": 16 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 4252", "data": 12 },
			{ "value": "EDSP 4253", "data": 12 },
			{ "value": "EDSP 5257", "data": 12 },
			{ "value": "Final Directed Teaching", "data": 36 }
		]
	}],
	"moderateSevere" : [{
		"prerequites" : [
			{ "value": "EDSP 4000", "data": 12 },
			{ "value": "EDSP 4001", "data": 4 }
		],
		"coreRequirements" : [
			{ "value": "EDEL 4170", "data": 12 },
			{ "value": "EDIT 5100", "data": 8 },
			{ "value": "EDSP 4010", "data": 12 },
			{ "value": "EDSP 4020", "data": 12 },
			{ "value": "EDSP 4030", "data": 12 },
			{ "value": "EDSP 4050", "data": 12 },
			{ "value": "Early Fieldwork", "data": 16 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 4310", "data": 12 },
			{ "value": "EDSP 4630", "data": 12 },
			{ "value": "EDSP 4040", "data": 12 },
			{ "value": "EDSP 5310", "data": 12 },
			{ "value": "EDSP 5610", "data": 8 },
			{ "value": "Final Directed Teaching", "data": 36 }
		]
	}],
	"earlyChildhood" : [{
		"prerequites" : [
		],
		"coreRequirements" : [
			{ "value": "EDSP 4000", "data": 12 },
			{ "value": "EDSP 4001", "data": 4 },
			{ "value": "EDSP 4010", "data": 12 },
			{ "value": "EDSP 4030", "data": 12 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 4160", "data": 12 },
			{ "value": "EDSP 4175", "data": 4 },
			{ "value": "EDSP 4630", "data": 12 },
			{ "value": "EDSP 5140", "data": 12 },
			{ "value": "EDSP 5150", "data": 12 },
			{ "value": "EDSP 5151", "data": 4 },
			{ "value": "EDSP 5160", "data": 12 },
			{ "value": "EDSP 5170", "data": 12 },
			{ "value": "EDSP 5670", "data": 8 },
			{ "value": "EDSP 5886", "data": 12 },
			{ "value": "Directed/Student Teaching: Early Intervention", "data": 16 },
			{ "value": "Directed/Student Teaching: Preschool Special Education", "data": 24 }
		]
	}],
	"orientationMobility" : [{
		"prerequites" : [
		],
		"coreRequirements" : [
			{ "value": "EDSP 4000", "data": 12 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 4066", "data": 16 },
			{ "value": "EDSP 4650", "data": 8 },
			{ "value": "EDSP 4690", "data": 8 },
			{ "value": "EDSP 4706", "data": 4 },
			{ "value": "EDSP 4750", "data": 12 },
			{ "value": "EDSP 4751", "data": 12 },
			{ "value": "EDSP 4760", "data": 8 },
			{ "value": "EDSP 5036", "data": 24 },
			{ "value": "EDSP 5650", "data": 8 },
			{ "value": "EDSP 5680", "data": 8 },
			{ "value": "EDSP 5750", "data": 12 },
			{ "value": "EDSP 5760", "data": 8 }
		]
	}],
	"visualImpairments" : [{
		"prerequites" : [
			{ "value": "EDSP 4000", "data": 12 },
			{ "value": "EDSP 4001", "data": 4 }
		],
		"coreRequirements" : [
			{ "value": "EDSP 4010", "data": 12 },
			{ "value": "EDSP 4050", "data": 12 },
			{ "value": "EDSP 4170", "data": 12 },
			{ "value": "Early Fieldwork", "data": 16 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 4650", "data": 8 },
			{ "value": "EDSP 4660", "data": 12 },
			{ "value": "EDSP 4690", "data": 8 },
			{ "value": "EDSP 5640", "data": 12 },
			{ "value": "EDSP 5660", "data": 12 },
			{ "value": "EDSP 5661", "data": 4 },
			{ "value": "EDSP 5670", "data": 8 },
			{ "value": "EDSP 5680", "data": 8 },
			{ "value": "EDSP 5690", "data": 12 },
			{ "value": "EDSP 5760", "data": 8 },
			{ "value": "Final Directed Teaching", "data": 36 }
		]
	}],
	"physicalHealthImpairments" : [{
		"prerequites" : [
			{ "value": "EDSP 4000", "data": 12 },
			{ "value": "EDSP 4001", "data": 4 }
		],
		"coreRequirements" : [
			{ "value": "EDSP 4170", "data": 12 },
			{ "value": "EDSP 5100", "data": 8 },
			{ "value": "EDSP 4010", "data": 12 },
			{ "value": "EDSP 4020", "data": 12 },
			{ "value": "EDSP 4030", "data": 12 },
			{ "value": "EDSP 4050", "data": 12 },
			{ "value": "Early Fieldwork", "data": 16 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 4600", "data": 12 },
			{ "value": "EDSP 4620", "data": 12 },
			{ "value": "EDSP 4630", "data": 12 },
			{ "value": "EDSP 4640", "data": 12 },
			{ "value": "EDSP 5610", "data": 8 },
			{ "value": "EDSP 5670", "data": 8 },
			{ "value": "Final Directed Teaching", "data": 16 }
		]
	}]
};
//Quater courses with Grade point values assigned to each course per option
var quaterCourses = {
	"mildModerate" : [{
		"prerequites" : [
			{ "value": "EDSP 300", "data": 10.72 }
		],
		"coreRequirements" : [
			{ "value": "EDEL 415/415S", "data": 10.72 },
			{ "value": "EDEL 417/417S", "data": 10.72 },
			{ "value": "EDIT 510", "data": 5.36 },
			{ "value": "EDSP 400", "data": 10.72 },
			{ "value": "EDSP 408", "data": 10.72 },
			{ "value": "EDSP 409", "data": 10.72 },
			{ "value": "EDSP 412", "data": 5.36 },
			{ "value": "EDSP 413", "data": 10.72 },
			{ "value": "EDSP 407/489", "data": 13.4 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 452", "data": 10.72 },
			{ "value": "EDSP 481", "data": 10.72 },
			{ "value": "EDSP 557", "data": 10.72 },
			{ "value": "EDSP 558", "data": 10.72 },
			{ "value": "EDSP 407/489", "data": 32.16 }
		]
	}],
	"moderateSevere" : [{
		"prerequites" : [
			{ "value": "EDSP 300", "data": 10.72 }
		],
		"coreRequirements" : [
			{ "value": "EDEL 415/415S", "data": 10.72 },
			{ "value": "EDEL 417/417S", "data": 10.72 },
			{ "value": "EDIT 510", "data": 5.36 },
			{ "value": "EDSP 400", "data": 10.72 },
			{ "value": "EDSP 408", "data": 10.72 },
			{ "value": "EDSP 409", "data": 10.72 },
			{ "value": "EDSP 413", "data": 10.72 },
			{ "value": "EDSP 407/489", "data": 13.4 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 451", "data": 10.72 },
			{ "value": "EDSP 463/587", "data": 10.72 },
			{ "value": "EDSP 481", "data": 10.72 },
			{ "value": "EDSP 551", "data": 10.72 },
			{ "value": "EDSP 582", "data": 10.72 },
			{ "value": "EDSP 407/489", "data": 32.16 }
		]
	}],
	"earlyChildhood" : [{
		"prerequites" : [
			{ "value": "EDSP 300", "data": 10.72 }
		],
		"coreRequirements" : [
			{ "value": "EDSP 400", "data": 10.72 },
			{ "value": "EDSP 408", "data": 10.72 },
			{ "value": "EDSP 412", "data": 5.36 },
			{ "value": "EDSP 413", "data": 10.72 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 403", "data": 5.36 },
			{ "value": "EDSP 416", "data": 10.72 },
			{ "value": "EDSP 463", "data": 10.72 },
			{ "value": "EDSP 485", "data": 10.72 },
			{ "value": "EDSP 514", "data": 10.72 },
			{ "value": "EDSP 515", "data": 10.72 },
			{ "value": "EDSP 516", "data": 10.72 },
			{ "value": "EDSP 517", "data": 10.72 },
			{ "value": "EDSP 570 A/B", "data": 10.72 },
			{ "value": "EDSP 586", "data": 10.72 },
			{ "value": "EDSP 407/489 Preschool", "data": 16.08 },
			{ "value": "EDSP 407/489 Birth-3+", "data": 16.08 }
		]
	}],
	"orientationMobility" : [{
		"prerequites" : [
		],
		"coreRequirements" : [
			{ "value": "EDSP 400", "data": 10.72 },
			{ "value": "EDSP 500", "data": 10.72 },
			{ "value": "EDSP 501", "data": 5.36 },
			{ "value": "EDSP 511", "data": 10.72 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 406", "data": 5.36 },
			{ "value": "EDSP 465", "data": 8.04 },
			{ "value": "EDSP 469", "data": 10.72 },
			{ "value": "EDSP 475", "data": 16.08 },
			{ "value": "EDSP 476A", "data": 2.68 },
			{ "value": "EDSP 476B", "data": 10.72 },
			{ "value": "EDSP 503", "data": 24.12 },
			{ "value": "EDSP 575A", "data": 2.68 },
			{ "value": "EDSP 575B", "data": 10.72 },
			{ "value": "EDSP 576A", "data": 5.36 },
			{ "value": "EDSP 576B", "data": 5.36 }
		]
	}],
	"visualImpairments" : [{
		"prerequites" : [
			{ "value": "EDSP 300", "data": 10.72 }
		],
		"coreRequirements" : [
			{ "value": "EDEL 415/415S", "data": 10.72 },
			{ "value": "EDEL 417/417S", "data": 10.72 },
			{ "value": "EDSP 400", "data": 10.72 },
			{ "value": "EDSP 408", "data": 10.72 },
			{ "value": "EDSP 409", "data": 10.72 },
			{ "value": "EDSP 407/489", "data": 13.4 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 465", "data": 8.04 },
			{ "value": "EDSP 465L", "data": 2.68 },			
			{ "value": "EDSP 466", "data": 10.72 },
			{ "value": "EDSP 466L", "data": 2.68 },
			{ "value": "EDSP 468", "data": 5.36 },
			{ "value": "EDSP 469", "data": 10.72 },
			{ "value": "EDSP 566", "data": 10.72 },
			{ "value": "EDSP 568", "data": 5.36 },
			{ "value": "EDSP 570A/B", "data": 10.72 },
			{ "value": "EDSP 407/489", "data": 32.16 }
		]
	}],
	"physicalHealthImpairments" : [{
		"prerequites" : [
			{ "value": "EDSP 300", "data": 10.72 }
		],
		"coreRequirements" : [
			{ "value": "EDEL 415/415S", "data": 10.72 },
			{ "value": "EDEL 417/417S", "data": 10.72 },
			{ "value": "EDIT 510", "data": 5.36 },
			{ "value": "EDSP 400", "data": 10.72 },
			{ "value": "EDSP 408", "data": 10.72 },
			{ "value": "EDSP 409", "data": 10.72 },
			{ "value": "EDSP 412", "data": 5.36 },
			{ "value": "EDSP 407/489", "data": 13.4 }
		],
		"specializationRequirements" : [
			{ "value": "EDSP 460", "data": 10.72 },
			{ "value": "EDSP 462", "data": 10.72 },			
			{ "value": "EDSP 463", "data": 10.72 },
			{ "value": "EDSP 464", "data": 10.72 },
			{ "value": "EDSP 561", "data": 5.36 },
			{ "value": "EDSP 570A/B", "data": 10.72 },
			{ "value": "EDSP 407/489", "data": 32.16 }
		]
	}]
};
//GPA values for letter grades.
var grades = [
   { "value": "A", "data": 4.0 },
   { "value": "A-", "data": 3.7 },
   { "value": "B+", "data": 3.3 },
   { "value": "B", "data": 3.0 },
   { "value": "B-", "data": 2.7 },
   { "value": "C+", "data": 2.3 },
   { "value": "C", "data": 2.0 },
   { "value": "C-", "data": 1.7 },
   { "value": "D+", "data": 1.3 },
   { "value": "D", "data": 1.0 },
   { "value": "D-", "data": 0.7 },
   { "value": "F", "data": 0.0 }
];