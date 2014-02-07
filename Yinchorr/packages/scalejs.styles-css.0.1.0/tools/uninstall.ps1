param($installPath, $toolsPath, $package, $project)

$project | 
	Remove-Paths 'styles,css,css-builder,normalize' |
	Out-Null

