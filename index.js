function introduction(Aki){
    return `Hi, my name is ${Aki}.`
  }
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language='JavaSCcript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}`
}
function introductionWithLanguageOptional(name=`Gracie`, language='JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}