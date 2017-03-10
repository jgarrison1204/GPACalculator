//JSON file that contains data for GPA Calculator App for specific program options. Structure of file is object > array > object > array > object
var semesterCourses = {
	"mildModerate" : [{
		"prerequites" : [
			{ value: 'EDSP 4000', data: 12 },
			{ value: 'EDSP 4001', data: 4 },
		],
		"coreRequirements" : [
			{ value: 'EDEL 4170', data: 12 },
			{ value: 'EDIT 5100', data: 8 },
			{ value: 'EDSP 4010', data: 12 },
			{ value: 'EDSP 4020', data: 12 },
			{ value: 'EDSP 4030', data: 12 },
			{ value: 'EDSP 4040', data: 12 },
			{ value: 'EDSP 4050', data: 12 },
			{ value: 'Early Fieldwork', data: 16 }
		],
		"specializationRequirements" : [
			{ value: 'EDSP 4252', data: 12 },
			{ value: 'EDSP 4253', data: 12 },
			{ value: 'EDSP 5257', data: 12 },
			{ value: 'Final Directed Teaching', data: 36 }
		]
	}],
	"moderateSevere" : [{
		"prerequites" : [
			{ value: 'EDSP 4000', data: 12 },
			{ value: 'EDSP 4001', data: 4 },
		],
		"coreRequirements" : [
			{ value: 'EDEL 4170', data: 12 },
			{ value: 'EDIT 5100', data: 8 },
			{ value: 'EDSP 4010', data: 12 },
			{ value: 'EDSP 4020', data: 12 },
			{ value: 'EDSP 4030', data: 12 },
			{ value: 'EDSP 4050', data: 12 },
			{ value: 'Early Fieldwork', data: 16 }
		],
		"specializationRequirements" : [
			{ value: 'EDSP 4310', data: 12 },
			{ value: 'EDSP 4630', data: 12 },
			{ value: 'EDSP 4040', data: 12 },
			{ value: 'EDSP 5310', data: 12 },
			{ value: 'EDSP 5610', data: 8 },
			{ value: 'Final Directed Teaching', data: 36 }
		]
	}],
	"earlyChildhood" : [{
		"prerequites" : [
		],
		"coreRequirements" : [
			{ value: 'EDSP 4000', data: 12 },
			{ value: 'EDSP 4001', data: 4 },
			{ value: 'EDSP 4010', data: 12 },
			{ value: 'EDSP 4030', data: 12 },
		],
		"specializationRequirements" : [
			{ value: 'EDSP 4160', data: 12 },
			{ value: 'EDSP 4175', data: 4 },
			{ value: 'EDSP 4630', data: 12 },
			{ value: 'EDSP 5140', data: 12 },
			{ value: 'EDSP 5150', data: 12 },
			{ value: 'EDSP 5151', data: 4 },
			{ value: 'EDSP 5160', data: 12 },
			{ value: 'EDSP 5170', data: 12 },
			{ value: 'EDSP 5670', data: 8 },
			{ value: 'EDSP 5886', data: 12 },
			{ value: 'Directed/Student Teaching: Early Intervention', data: 16 },
			{ value: 'Directed/Student Teaching: Preschool Special Education', data: 24 }
		]
	}],
	"orientationMobility" : [{
		"prerequites" : [
		],
		"coreRequirements" : [
			{ value: 'EDSP 4000', data: 12 }
		],
		"specializationRequirements" : [
			{ value: 'EDSP 4066', data: 16 },
			{ value: 'EDSP 4650', data: 8 },
			{ value: 'EDSP 4690', data: 8 },
			{ value: 'EDSP 4706', data: 4 },
			{ value: 'EDSP 4750', data: 12 },
			{ value: 'EDSP 4751', data: 12 },
			{ value: 'EDSP 4760', data: 8 },
			{ value: 'EDSP 5036', data: 24 },
			{ value: 'EDSP 5650', data: 8 },
			{ value: 'EDSP 5680', data: 8 },
			{ value: 'EDSP 5750', data: 12 },
			{ value: 'EDSP 5760', data: 8 }
		]
	}],
	"visualImpairments" : [{
		"prerequites" : [
			{ value: 'EDSP 4000', data: 12 },
			{ value: 'EDSP 4001', data: 4 },
		],
		"coreRequirements" : [
			{ value: 'EDSP 4010', data: 12 },
			{ value: 'EDSP 4050', data: 12 },
			{ value: 'EDSP 4170', data: 12 },
			{ value: 'Early Fieldwork', data: 16 }
		],
		"specializationRequirements" : [
			{ value: 'EDSP 4650', data: 8 },
			{ value: 'EDSP 4660', data: 12 },
			{ value: 'EDSP 4690', data: 8 },
			{ value: 'EDSP 5640', data: 12 },
			{ value: 'EDSP 5660', data: 12 },
			{ value: 'EDSP 5661', data: 4 },
			{ value: 'EDSP 5670', data: 8 },
			{ value: 'EDSP 5680', data: 8 },
			{ value: 'EDSP 5690', data: 12 },
			{ value: 'EDSP 5760', data: 8 },
			{ value: 'Final Directed Teaching', data: 36 }
		]
	}],
	"physicalHealthImpairments" : [{
		"prerequites" : [
			{ value: 'EDSP 4000', data: 12 },
			{ value: 'EDSP 4001', data: 4 },
		],
		"coreRequirements" : [
			{ value: 'EDSP 4170', data: 12 },
			{ value: 'EDSP 5100', data: 8 },
			{ value: 'EDSP 4010', data: 12 },
			{ value: 'EDSP 4020', data: 12 },
			{ value: 'EDSP 4030', data: 12 },
			{ value: 'EDSP 4050', data: 12 },
			{ value: 'Early Fieldwork', data: 16 }
		],
		"specializationRequirements" : [
			{ value: 'EDSP 4600', data: 12 },
			{ value: 'EDSP 4620', data: 12 },
			{ value: 'EDSP 4630', data: 12 },
			{ value: 'EDSP 4640', data: 12 },
			{ value: 'EDSP 5610', data: 8 },
			{ value: 'EDSP 5670', data: 8 },
			{ value: 'Final Directed Teaching', data: 16 }
		]
	}]
}