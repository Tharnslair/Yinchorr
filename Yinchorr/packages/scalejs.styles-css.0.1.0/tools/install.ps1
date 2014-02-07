param($installPath, $toolsPath, $package, $project)

$project | 
	Add-Paths "{
		'css'			: 'Scripts/css',
		'css-builder'	: 'Scripts/css-builder',
		'normalize'		: 'Scripts/normalize',
		'styles'		: 'Scripts/scalejs.styles'
	}" |
	Out-Null
